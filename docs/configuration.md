---
title: Конфигурация
---

Файл: `plugins/AnimalArmors/config.yml`.

```yaml
language: "ru_RU"
allow-enchantments: true
enable-self-host: true
self-host-ip: "0.0.0.0"
self-host-port: 8163
build-folder-location: "AnimalArmors/build"
pack-type: "zip"
emf-etf: true
```

## Язык

`ru_RU` или `en_EN`. Сообщения — в `lang/ru_RU.yml` и `lang/en_EN.yml`. Поддерживаются MiniMessage и цветовые коды `&a`, `&#RRGGBB`.

```yaml
prefix: '<white>[<green>AA<white>]'
reload-ok: '{prefix} <green>Готово.'
```

Пустой `prefix` либо удаление `{prefix}` из сообщения скрывает префикс.

## Сборка пака

`build-folder-location` считается от папки `plugins/`. При `pack-type: zip` значение `AnimalArmors/build` создаёт `plugins/AnimalArmors/build.zip`. При `folder` создаётся каталог. Встроенная раздача в обоих случаях отдаёт ZIP.

`emf-etf: true` включает дополнительные CEM-файлы для соответствующих клиентских модов. Настройка сама не устанавливает моды игрокам. Совместимость конкретной версии клиента проверяйте отдельно.

## Зачарования

`allow-enchantments: true` разрешает поддержанные операции с Прочностью и Починкой. `false` запрещает новые зачарования через игровые операции плагина; существующие сохраняются.

После изменения выполните `/aa reload`.
