---
title: 'How to setup an outbound proxy'
taxonomy:
    category:
        - docs
visible: true
---

Example: Setup Adguard to use Orbot as an outbound proxy.

1. Open ["Orbot: Proxy with Tor"](https://play.google.com/store/apps/details?id=org.torproject.android) and press the "Start" button on the application's main screen.

2. Open Adguard, go to в "Settings" → "Advanced" → "Proxy settings"

3. Enter the following settings:
   Proxy type: SOCKS4,
   Proxy host: 127.0.0.1,
   Proxy port: 9050.
   
4. Enable Adguard protection.

> Please note, Adguard will now forward traffic through Orbot proxy, if you disable Orbot proxy, then Internet connection be unavailable until you disable outbound proxy settings in Adguard