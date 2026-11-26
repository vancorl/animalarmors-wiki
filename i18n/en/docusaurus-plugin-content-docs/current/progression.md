---
title: Crafting, upgrades and repairs
---

## Wolf diamond armor

Place six diamonds in a crafting table as shown. `D` means one diamond; `.` means an empty slot.

```text
D . .
D D D
D . D
```

The result is wolf diamond armor, `wolf_diamond_flat`. The recipe cannot be shifted or mirrored.

## Upgrade to netherite

This is the bundled recipe. For your own armor and other ingredients, configure a [custom smithing recipe](#custom-smithing-recipe).

Place these items in a smithing table:

| Slot | Item |
| --- | --- |
| Left | Netherite Upgrade Smithing Template |
| Middle | Wolf diamond armor, `wolf_diamond_flat` |
| Right | One netherite ingot |

The result is `wolf_netherite_flat`. The template and ingot are consumed. The original armor's name, enchantments and wear are preserved. This recipe does not upgrade samurai armor.

## Custom recipe

Open the item's YAML file in `plugins/AnimalArmors/items/`. Add `crafting` **inside that item's settings**, at the same indentation level as `display` and `resource`:

```yaml
crafting:
  enabled: true
  rows:
    - 'DIAMOND;-;-'
    - 'DIAMOND;DIAMOND;DIAMOND'
    - 'DIAMOND;-;DIAMOND'
  book:
    enabled: true
    discover: true
    group: animalarmors
    category: EQUIPMENT
```

This defines the diamond armor recipe shown above. The three `rows` entries match the crafting table's three rows. Each entry has three slots separated by `;`. A dash `-` means empty, `DIAMOND` means one diamond, and `DIAMOND:3` means three diamonds in that slot.

`book.enabled` makes the recipe available in the recipe book; `book.discover` unlocks it for players automatically. Setting `enabled: false` under `crafting` disables the recipe itself.

Recipes require a 3×3 crafting table. The 2×2 inventory grid and automatic Crafter block are not supported.

### Custom smithing recipe

Smithing is not limited to netherite armor. Choose the starting armor, the item in the left slot and the ingredient on the right. **The result is the item that contains the `smithing` block.** There is no separate `result` field.

#### Example: diamond armor → Moon Armor

Create `plugins/AnimalArmors/items/moon.yml` with this complete example. The model and icon are already included:

```yaml
items:
  moon_wolf:
    display:
      name: "<aqua>Moon Armor"
      lore:
        - "<gray>Armor of the moon guardian"
    resource:
      material: "WOLF_ARMOR"
      model: "wolf/diamond_flat.bbmodel"
      item_texture: "wolf/diamond_flat.png"
    equipment:
      animal: "WOLF"
    protection:
      mode: "CUSTOM"
      armor: 15
      armor_toughness: 2
      durability:
        max: 500
        unbreakable: false
    attributes:
      max_health: 0
      movement_speed: 0
    smithing:
      enabled: true
      base: wolf_diamond_flat
      template: NETHERITE_UPGRADE_SMITHING_TEMPLATE
      addition: AMETHYST_SHARD
```

If you already created `moon_wolf` using the [custom item example](authoring.md), add only `smithing` to that existing item, alongside `display`, `resource` and `protection`. Do not create another item with the same ID.

Save the file and run `/aa reload`. Put these items in the smithing table:

| Slot | Item |
| --- | --- |
| Left | Netherite Upgrade Smithing Template |
| Middle | `wolf_diamond_flat` |
| Right | One amethyst shard |

The result is **`moon_wolf`**, even though the recipe uses no netherite ingot. The template is simply the chosen ingredient; it does not determine the result's name, material or stats. Those come from the `moon_wolf` settings.

#### Upgrading other armor

1. Create the resulting item or open its YAML. Set its name, model, protection and maximum durability through the usual item fields.
2. Add `smithing` inside the resulting item.
3. Set `base` to the starting armor ID, `template` to the left-slot item and `addition` to the right-slot item.
4. Save, run `/aa reload` and check the recipe in a smithing table.

You can upgrade samurai armor and create recipes for other animals. Starting and resulting armor must belong to the same equipment family: wolf armor cannot become horse armor. Samurai armor is excluded from the bundled netherite recipe because that recipe specifies `base: wolf_diamond_flat`; your own recipe can use `base: samurai_wolf_v2`.

For an upgrade chain, create a separate item for each stage. For example, set `base: wolf_diamond_flat` on `moon_wolf`, then `base: moon_wolf` on a new `moon_wolf_elite` item. Each result has its own `smithing` block.

#### Accepted field values

| Field | Values and examples |
| --- | --- |
| `enabled` | `true` enables the recipe. An absent block or `false` disables it. |
| `base` | AnimalArmors ID: `wolf_diamond_flat`, `animalarmors:wolf_diamond_flat` or a catalog ID such as `mypack:moon_wolf`. Vanilla armor requires an explicit `minecraft:` prefix, for example `minecraft:diamond_horse_armor`. |
| `template` | Vanilla item: `NETHERITE_UPGRADE_SMITHING_TEMPLATE`, `PAPER` or `minecraft:paper`. Custom items require an explicit namespace, for example `animalarmors:moon_token`. |
| `addition` | Vanilla item: `AMETHYST_SHARD`, `DIAMOND`, `IRON_INGOT` or `minecraft:amethyst_shard`. Custom items require an explicit namespace, for example `mypack:moon_crystal`. |

Custom ingredients must exist in the AnimalArmors catalog. Writing `mypack:moon_crystal` does not automatically connect an item from another plugin. This illustrates the ID format; it is not an included item. Create the catalog item first, then use its full ID as the template or addition. Different custom IDs are not interchangeable even when they look the same.

#### Consumption and preserved properties

In survival, each operation consumes one left-slot item, one starting armor item and one right-slot item. No experience is required. Counts such as `AMETHYST_SHARD:3` are not supported in `smithing`.

The custom name, enchantments and prior anvil work penalty are preserved. The resulting item supplies its model, protection and maximum durability. Wear transfers **as damage points, not a percentage**: 100 points of damage remain 100 points of damage. If the new maximum durability is lower, damage is capped so at least one durability point remains.

Each resulting item defines one smithing recipe. Two results cannot share the exact same `base`, `template` and `addition`, because the output would be ambiguous. The starting and resulting IDs must also differ.

## Anvil repairs

Each item can have its own repair materials and cost calculation. Add `repair` inside the item's settings, alongside `crafting` and `protection`.

### Fixed cost — FIXED

```yaml
repair:
  enabled: true
  materials: "DIAMOND"
  cost:
    mode: "FIXED"
    levels: 5
```

This allows repairs using diamonds. Put the armor in the left anvil slot and diamonds in the right. **The entire repair costs 5 experience levels**, regardless of how many diamonds are used or how many times the armor has been repaired before.

One material restores 25% of maximum durability. For example, armor with a maximum of 500 durability and 250 remaining needs **2 diamonds and 5 levels** for a full repair. If you put in 4 diamonds, only 2 are used.

To offer a choice of materials, use `materials: "IRON_INGOT, DIAMOND"`. Either material works; you do not need to combine them in one repair.

### Minecraft-style cost — VANILLA

Choose `VANILLA` mode to make the price depend on previous anvil work. Replace the `cost` block with:

```yaml
cost:
  mode: "VANILLA"
```

Each consumed material costs 1 experience level, plus the penalty from previous anvil work. Repeated repairs therefore become more expensive. The `levels` setting is not used in this mode.

For example, repairing armor with no previous anvil work using two diamonds costs **2 levels**, provided you do not rename it. Materials and durability restoration work the same way as in `FIXED` mode.

Both modes use the survival limit: operations costing **40 levels or more** are unavailable. For a fixed cost, set `levels` between `0` and `39`.

Anvil repairs are disabled if `repair` is absent or `repair.enabled: false`. Unbreakable armor (`unbreakable: true`) does not need repairs.

## Enchantments

With `allow-enchantments: true` in `config.yml`, you can apply **Unbreaking I–III** and **Mending I** books at an anvil. The armor must have `unbreakable: false`.

- **Unbreaking** reduces durability loss while the animal wears the armor.
- **Mending** repairs armor from experience orbs while you hold it in your main hand or offhand. Remove it from the animal, hold it and collect experience.

You can also repair armor on a sitting wolf by right-clicking it with armadillo scutes.
