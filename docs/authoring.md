---
title: Свои предметы и модели
---

Каждый предмет описывается в YAML: там задаются имя, модель, животное, защита и прочность. Файлы предметов лежат в `plugins/AnimalArmors/items/`.

## Пример: новая броня волка

Создайте `plugins/AnimalArmors/items/moon.yml` и вставьте пример целиком. Он использует модель и иконку готовой алмазной брони — дополнительные файлы для этого примера не нужны.

```yaml
items:
  moon_wolf:
    display:
      name: "<aqua>Лунный доспех"
      lore:
        - "<gray>Броня лунного стража"
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

Сохраните файл и выполните:

```text
/aa reload
/aa give Steve wolf moon_wolf
```

Замените `Steve` своим ником. Получится отдельный предмет с новым именем и характеристиками, но с видом алмазной брони.

Хотите получать `moon_wolf` через улучшение алмазной брони? Добавьте в этот же предмет `smithing` по [полному примеру кузницы](progression.md#свой-рецепт-кузницы). Там показаны ингредиенты, цепочки улучшений и правила для других животных.

## Поля предмета

| Поле | Что означает |
| --- | --- |
| `moon_wolf` | Уникальный ID. Используйте строчные латинские буквы, цифры и `_`. |
| `display.name` | Имя предмета в игре. |
| `display.lore` | Строки описания под именем. |
| `resource.material` | Материал Minecraft, указанный в настройках предмета. Для волка — `WOLF_ARMOR`. |
| `resource.model` | Модель надетой брони. Путь от папки `models/`. |
| `resource.item_texture` | Иконка предмета. PNG ищется в `textures/`; для 3D-иконки можно указать BBModel. |
| `equipment.animal` | Животное: `WOLF`, `HORSE`, `LLAMA`, `TRADER_LLAMA`, `NAUTILUS` или `ZOMBIE_NAUTILUS`. |
| `durability.max` | Максимальная прочность брони. |
| `durability.unbreakable` | `true` — броня не ломается, `false` — расходует прочность. |

`durability` находится внутри `protection`, как в примере. В одном `items:` можно описать несколько предметов. ID не должны повторяться в разных файлах.

## Защита волка: два режима

- **`CUSTOM`** — сила защиты задаётся значениями `armor` и `armor_toughness`. Удобно для своей системы улучшений.
- **`VANILLA`** — используется обычная механика волчьей брони Minecraft. Это другой режим защиты, а не режим стоимости починки.

Режим цены ремонта задаётся отдельно: [починка на наковальне](progression.md#починка-на-наковальне).

## Как поставить свою модель

1. Откройте подходящую модель из папки `models/` в Blockbench и сохраните копию под новым именем.
2. Измените внешний вид. Сохраняйте структуру групп и точки вращения исходной модели, чтобы детали двигались вместе с животным.
3. Сохраните текстуры внутри файла `.bbmodel`.
4. Положите модель, например, в `models/wolf/moon.bbmodel`, а PNG-иконку — в `textures/wolf/moon.png`.
5. Замените пути в `resource`:

```yaml
resource:
  material: "WOLF_ARMOR"
  model: "wolf/moon.bbmodel"
  item_texture: "wolf/moon.png"
```

Выполните `/aa reload` и примите обновлённый ресурспак. Настройку крафта, улучшения и ремонта смотрите в [примерах рецептов](progression.md).
