---
title: 'iCloud Private Relay and AdGuard'
taxonomy:
    category:
        - docs
visible: true
---

## Problem description

Currently, AdGuard and iCloud Private Relay cannot work at the same time. 

AdGuard cannot block ads because iCloud Private Relay encrypts traffic before AdGuard can filter network connections.  

When iCloud Private Relay is active, any filtering (including local filtering) becomes impossible. Thus, AdGuard can't filter traffic or perform DNS filtering in Safari. Yet, AdGuard still filters traffic in other browsers. To keep using iCloud Private Relay, consider installing AdGuard for Safari. 

The same applies to using any VPN apps on Mac: you have to choose between using iCloud Private Relay or a VPN service.

## Recommended solution

We recommend using AdGuard together with a more traditional VPN service such as AdGuard VPN.

## Alternative solution

By default, AdGuard uses the "default route" thus disabling iCloud Private Relay. 

You can change this behavior and disable the "default route".  It can be done via Advanced Settings -> ```network.extension.monterey.force.split.tunnel```. In this case, you'll face the issues described above.
