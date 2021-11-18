---
title: 'iCloud Private Relay not working alongside AdGuard for Mac'
taxonomy:
    category:
        - docs
visible: true
---

Currently, AdGuard and iCloud Private Relay cannot work at the same time. 

AdGuard cannot block ads when traffic goes through iCloud Private Relay. Traffic gets encrypted before AdGuard can filter network connections. 

When iCloud Private Relay is active, any filtering (including local filtering) becomes impossible. Thus, AdGuard can't filter traffic or perform DNS filtering in Safari. Yet, AdGuard still filters traffic in other browsers. To keep using iCloud Private Relay, consider installing AdGuard for Safari. 

The same applies to using any VPN apps on Mac: you have to choose between using iCloud Private Relay or a VPN service.

You can make AdGuard use the "default route" but it disables iCloud Private Relay. In this case, iCloud Private Relay gets disabled automatically when AdGuard is active.

We recommend using AdGuard together with more traditional VPN services.
