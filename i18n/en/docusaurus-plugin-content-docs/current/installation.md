---
title: Installation
---

## Requirements

A Paper server running a supported Minecraft version: **1.21.6–1.21.11, 26.1–26.1.2, 26.2 or 26.3**. Use the Java version required by your Paper server.

Nautilus armor is available from Minecraft 1.21.11 onward.

## Install the plugin

1. Stop the server.
2. Place `AnimalArmors.jar` in `plugins/`.
3. Start the server. The plugin creates `plugins/AnimalArmors/` with its settings and included items.
4. Set up resource pack delivery as described below.
5. Run `/aa reload`, join the server and accept the resource pack.

Give yourself an item to try:

```text
/aa give Steve wolf samurai_wolf_v2
```

Replace `Steve` with your username. You need to be a server operator or have the `animalarmors.admin` permission.

## Resource pack delivery

Enable these settings in `plugins/AnimalArmors/config.yml`:

```yaml
enable-self-host: true
self-host-ip: "0.0.0.0"
self-host-port: 8163
```

The plugin builds the resource pack ZIP and offers it to players when they join. Downloads use a separate **TCP port**, `8163` in this example.

- **On a game hosting service:** allocate an additional port in the control panel and enter it in `self-host-port`.
- **On your own server:** allow incoming connections to that port in your firewall. If the server is behind a router, forward the port as well.

`0.0.0.0` makes the plugin accept connections on all of the server's network addresses. If players receive a download link with an unreachable address, set `self-host-ip` to a server address they can reach.

Run `/aa reload` after changing the settings. If the pack does not download, try opening the link offered to the player in a browser on another device.

## Update the plugin

1. Stop the server and back up `plugins/AnimalArmors/`.
2. Replace the JAR with the new file.
3. Start the server.

Replacing the JAR requires a restart. YAML changes only need `/aa reload`.
