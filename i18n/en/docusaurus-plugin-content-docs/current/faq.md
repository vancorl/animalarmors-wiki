---
title: FAQ
---

## I see a normal item instead of the model

Accept the server resource pack. If you edited the models, run `/aa reload` and download the updated pack.

## The resource pack does not download

Make sure `enable-self-host` is enabled, the server address is reachable by players, and the TCP port in `self-host-port` is open. Game hosting services require a separately allocated port. See [Installation](installation.md#resource-pack-delivery).

## My YAML changes do not apply

Save the file and run `/aa reload`. If the console reports an error, check indentation, duplicate item IDs and model filenames. Use spaces rather than tabs in YAML.

On an error, the plugin keeps the previous working settings and resource pack. Fix the line reported in the console, then run the command again.

## Do I need ItemsAdder?

No. AnimalArmors creates its own items and resource pack.

## What about OptiFine and EMF + ETF?

Set `emf-etf: true` in `config.yml` to include resource pack files for these mods.

Armor displays incorrectly when shaders are enabled with OptiFine.

## Why does the repair cost change?

The item may use the `VANILLA` repair cost mode: previous anvil work increases the price. For a constant price, choose `FIXED` and set `levels`. Both modes are explained with examples under [Anvil repairs](progression.md#anvil-repairs).

## How do I use Mending?

Remove the armor from the animal, hold it in your main hand or offhand, and collect experience orbs.

## Need help?

If you have questions or something is not working, contact **`vancorl`** on Discord. Describe the issue and include your Minecraft version. If the console shows an error, include its text.
