---
title: Свои предметы и модели
---

Каталоги находятся в `plugins/AnimalArmors/`: определения в `items/`, модели в `models/`, иконки в `textures/`. Разрешены подпапки. ItemsAdder не требуется.

## Минимальный предмет

Создайте `items/my_collection.yml`. Пример использует собственные файлы `models/wolf/moon.bbmodel` и `textures/wolf/moon.png` — предварительно добавьте их.

```yaml
items:
  moon_wolf:
    display:
      name: "<aqua>Лунный доспех"
      lore:
        - "<gray>Коллекция лунного стража"
    resource:
      material: "WOLF_ARMOR"
      model: "wolf/moon.bbmodel"
      item_texture: "wolf/moon.png"
    equipment:
      animal: "WOLF"
    protection:
      mode: "VANILLA"
      armor: 0
      armor_toughness: 0
      durability:
        max: 500
        unbreakable: false
    attributes:
      max_health: 2
      movement_speed: 0
```

Выполните `/aa reload`, затем `/aa give Steve wolf moon_wolf`.

## Правила

- ID: строчные латинские буквы, цифры и `_`; уникален во всех файлах. При обновлении сохраняйте ID.
- В одном `items:` может быть несколько предметов. Блок `info` не обязателен.
- `resource.model` — путь относительно `models/`; текстуры экипировки встроены в BBModel.
- `item_texture` — путь к иконке относительно `textures/`; допускается также BBModel для 3D-предмета.
- Сохраняйте штатные кости и pivots шаблона. Добавляйте детали дочерними группами.

Для CUSTOM волка в YAML остаётся `WOLF_ARMOR`, но физический материал предмета — `LEATHER_HORSE_ARMOR` с волчьими компонентами. Учитывайте это в сторонних плагинах, проверяющих Material. VANILLA использует настоящую волчью броню.

После изменения модели проверьте посадку и анимации в Minecraft. Успешная пересборка не гарантирует правильный внешний вид.
