---
title: Included armor
---

The plugin includes six items:

| Item ID | Animal | Name |
| --- | --- | --- |
| `horse_netherite_flat` | Horse | Netherite armor |
| `wolf_diamond_flat` | Wolf | Diamond armor |
| `wolf_netherite_flat` | Wolf | Netherite armor |
| `samurai_wolf_v2` | Wolf | Samurai armor |
| `llama_sakura` | Llama | Sakura blanket |
| `nautilus_samurai_crimson` | Nautilus | Crimson samurai armor |

An **ID** identifies an item in the plugin files. Commands and recipes use this ID; you can change the armor's display name separately.

## Give an item

```text
/aa give Steve wolf wolf_diamond_flat
/aa give Steve wolf samurai_wolf_v2
/aa give Steve horse horse_netherite_flat
/aa give Steve llama llama_sakura
/aa give Steve nautilus nautilus_samurai_crimson
```

Replace `Steve` with the recipient's username. To give several items, add the amount at the end:

```text
/aa give Steve wolf wolf_diamond_flat 3
```

Run `/aa list` to view available items. Give commands require the `animalarmors.admin` permission.

## Animals

The Sakura blanket fits both regular and trader llamas. Crimson armor fits both nautiluses and zombie nautiluses. Nautilus armor requires Minecraft 1.21.11 or later.

The included llama blanket is decorative: it provides no protection and does not wear out.

## Survival recipes

Wolf diamond armor is crafted from six diamonds. It can be upgraded to netherite at a smithing table. See [Crafting, upgrades and repairs](progression.md) for the recipe and required materials.

You can [add recipes](progression.md#custom-recipe) for the other items.
