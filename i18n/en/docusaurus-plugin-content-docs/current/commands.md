---
title: Commands and permissions
---

All commands start with `/aa`. You can use `/animalarmors` instead.

## List items

```text
/aa list
```

Shows the items available on the server.

## Give armor

```text
/aa give <player> <animal> <ID> [amount]
```

For example, give Steve two pieces of wolf diamond armor:

```text
/aa give Steve wolf wolf_diamond_flat 2
```

The amount defaults to one. Do not type the angle brackets shown in the syntax example.

| Animal | Command value |
| --- | --- |
| Wolf | `wolf` |
| Horse | `horse` |
| Llama | `llama` |
| Trader llama | `trader_llama` |
| Nautilus | `nautilus` |
| Zombie nautilus | `zombie_nautilus` |

Find the included armor IDs in the [item list](catalog.md).

## Apply changes

```text
/aa reload
```

Reloads settings, messages, items and recipes. It also builds an updated resource pack and offers it to players currently online.

Run this after editing YAML files or models. Restart the server after replacing the JAR.

## Permissions

Commands require **`animalarmors.admin`**, granted to server operators by default. Regular players do not need this permission to use armor they have received.
