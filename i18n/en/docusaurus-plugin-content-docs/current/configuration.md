---
title: Plugin configuration
---

The main settings file is `plugins/AnimalArmors/config.yml`. Save your changes, then run `/aa reload`.

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

## Settings explained

| Setting | Purpose |
| --- | --- |
| `language` | Plugin message language: `ru_RU` or `en_EN`. Does not change the wiki language. |
| `allow-enchantments` | Allows Unbreaking and Mending to be applied using enchanted books at an anvil. |
| `enable-self-host` | Lets the plugin deliver the resource pack to players. |
| `self-host-ip` | Server address used to serve the resource pack. |
| `self-host-port` | TCP port used for resource pack downloads. |
| `build-folder-location` | Where to save the resource pack, relative to `plugins/`. |
| `pack-type` | `zip` saves an archive; `folder` saves the unpacked files. |
| `emf-etf` | Adds model support files for EMF + ETF and OptiFine to the resource pack. |

With `pack-type: zip`, the example path produces `plugins/AnimalArmors/build.zip`. With `folder`, files are saved to `plugins/AnimalArmors/build/`.

When `enable-self-host: true`, players download a ZIP in either case. When disabled, you need to host and deliver the pack yourself. See [Installation](installation.md#resource-pack-delivery) for port setup.

## Messages and colors

Russian messages are in `lang/ru_RU.yml` and English messages in `lang/en_EN.yml`, inside the plugin folder. For example:

```yaml
prefix: '<gray>[<green>AnimalArmors<gray>]'
reload-ok: '{prefix} <green>Settings applied.'
```

`<green>` sets the text color to green; `<gray>` sets it to gray. `{prefix}` inserts the value from the `prefix` setting. Use `prefix: ''` to remove the label before messages.

## Enchantments

With `allow-enchantments: true`, armor can receive **Unbreaking I–III** and **Mending I** from enchanted books at an anvil. Enchanting tables are not used.

Setting this to `false` prevents new enchantments and level upgrades. Existing enchantments still work. See [Repairs and enchantments](progression.md#enchantments) for details.

## Item files

```text
plugins/AnimalArmors/
  config.yml       — general settings
  lang/            — messages
  items/           — individual item settings
  models/          — .bbmodel 3D models
  textures/        — item icons
```

See [Custom items and models](authoring.md) for a complete item example.
