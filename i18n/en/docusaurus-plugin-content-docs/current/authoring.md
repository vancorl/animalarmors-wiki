---
title: Custom items and models
---

Each item has YAML settings for its name, model, animal, protection and durability. Item files are stored in `plugins/AnimalArmors/items/`.

## Example: a new wolf armor item

Create `plugins/AnimalArmors/items/moon.yml` and paste this complete example. It reuses the included diamond armor model and icon, so no additional files are needed for this example.

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
```

Save the file, then run:

```text
/aa reload
/aa give Steve wolf moon_wolf
```

Replace `Steve` with your username. You now have a separate item with its own name and stats, using the diamond armor appearance.

To obtain `moon_wolf` by upgrading diamond armor, add `smithing` to this same item using the [complete smithing example](progression.md#custom-smithing-recipe). It also covers ingredients, upgrade chains and other animals.

## Item fields

| Field | Meaning |
| --- | --- |
| `moon_wolf` | Unique item ID. Use lowercase Latin letters, digits and `_`. |
| `display.name` | In-game item name. |
| `display.lore` | Description lines below the name. |
| `resource.material` | Minecraft material used in the item settings. Use `WOLF_ARMOR` for wolves. |
| `resource.model` | Equipped armor model, relative to `models/`. |
| `resource.item_texture` | Item icon. PNG files are relative to `textures/`; a BBModel can be used for a 3D icon. |
| `equipment.animal` | `WOLF`, `HORSE`, `LLAMA`, `TRADER_LLAMA`, `NAUTILUS` or `ZOMBIE_NAUTILUS`. |
| `durability.max` | Maximum armor durability. |
| `durability.unbreakable` | `true` prevents durability loss; `false` allows the armor to wear out. |

`durability` belongs inside `protection`, as shown above. You can define several items under one `items:` section. IDs must be unique across all files.

## Wolf protection modes

- **`CUSTOM`** — protection is controlled by `armor` and `armor_toughness`. Use this for your own armor progression.
- **`VANILLA`** — uses Minecraft's normal wolf armor behavior. This is a protection mode, separate from repair cost settings.

Repair costs are configured independently: see [Anvil repairs](progression.md#anvil-repairs).

## Add your own model

1. Open a suitable model from `models/` in Blockbench and save a copy with a new name.
2. Edit its appearance. Keep the original group structure and rotation points so the parts move with the animal.
3. Save the textures inside the `.bbmodel` file.
4. Place the model at, for example, `models/wolf/moon.bbmodel`, and a PNG icon at `textures/wolf/moon.png`.
5. Update the paths under `resource`:

```yaml
resource:
  material: "WOLF_ARMOR"
  model: "wolf/moon.bbmodel"
  item_texture: "wolf/moon.png"
```

Run `/aa reload` and accept the updated resource pack. See the [recipe examples](progression.md) to add crafting, smithing or repairs.
