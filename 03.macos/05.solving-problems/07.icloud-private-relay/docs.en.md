---
title: 'iCloud Private Relay and AdGuard'
taxonomy:
    category:
        - docs
visible: true
---

## Problem description in a nutshell

By default, AdGuard uses the "default route" which disables iCloud Private Relay. 

Currently, AdGuard and iCloud Private Relay cannot work at the same time. AdGuard cannot block ads because iCloud Private Relay encrypts traffic before AdGuard can filter network connections.  When iCloud Private Relay is active, any filtering (including local filtering) becomes impossible. Thus, AdGuard can't filter traffic or perform DNS filtering in Safari. Yet, AdGuard still filters traffic in other browsers. To keep using iCloud Private Relay, consider installing [AdGuard for Safari](https://adguard.com/en/adguard-safari/overview.html). 

The same applies to using any VPN apps on Mac: you have to choose between using iCloud Private Relay or a VPN service.

## In detail

AdGuard for Mac now uses macOS built-in socket filtering based on the network extensions API. This new and rather buggy mechanism replaced good old Kernel extensions. Over the last 1.5 years, we've reported more than 20(!) bugs to Apple regarding their new filtering method.

The network extensions API has a VPN-like configuration with a list of route-like entries.
On Big Sur, AdGuard developed "split-tunnel" rules to avoid creating the "default route" rule because it causes problems on early Big Sur releases.

On Monterey, iCloud Private Relay got introduced. Privacy features of Mail.app also use Private Relay servers.

As a result, AdGuard can't work together with iCloud Private Relay and Mail.app privacy features:
1. iCloud Private Relay is applied to connections at the library level - before they reach the socket level, where AdGuard operates.
2. iCloud Private Relay uses QUIC, which AdGuard can't filter in filtered apps because HTTP/3 filtering is not yet available.
3. As AdGuard blocks QUIC, including iCloud Private Relay traffic - otherwise, ad blocking is impossible.
4. When you use iCloud Private Relay and switch AdGuard into the "split-tunnel" mode, you can't open websites in Safari. 
5. To work around this issue for Monterey, we apply the "default route" rule. When Private Relay sees that rule, it disables itself automatically.
So, AdGuard works seamlessly on Monterey, but iCloud Private Relay gets disabled.

```network.extension.monterey.force.split.tunnel``` restores the "Big Sur" behavior, but this option may break access to websites due to (3) and (4).

We keep searching for a solution to this issue. One of the options is implementing HTTP/3 filtering.

## Recommended solution

We recommend using AdGuard together with a more traditional VPN service such as [AdGuard VPN](https://adguard-vpn.com/).

## Alternative solution

You can prevent AdGuard from using the "default route" by disabling the "default route".  It can be done via Advanced Settings -> ```network.extension.monterey.force.split.tunnel```. 

<img src="https://cdn.adguard.com/public/Adguard/kb/MAC/mac_adguard_advanced_settings.png"> 

Bear in mind that, in this case, you'll face the issues described above.
