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

Add this block to the **resulting netherite armor**, not to the diamond armor:

```yaml
smithing:
  enabled: true
  base: wolf_diamond_flat
  template: NETHERITE_UPGRADE_SMITHING_TEMPLATE
  addition: NETHERITE_INGOT
```

`base` is the starting armor ID, `template` is the smithing template, and `addition` is the upgrade material. For this recipe, the resulting item is `wolf_netherite_flat`. Run `/aa reload` after saving changes.

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
