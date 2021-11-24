---
title: 'Protect Mail Activity and AdGuard'
taxonomy:
    category:
        - docs
---

## In a nutshell

Apple's Mail app now uses a proxy to hide a user's IP Address when downloading images from emails.

<img src="https://cdn.adguard.com/public/Adguard/kb/MAC/mac_protectMailActivity.png"> 


However, it won't work if there's an active VPN connection. As it treats AdGuard as a VPN, it won't preload images automatically.

Apple explains this issue [here](https://support.apple.com/en-us/HT212797).

## In detail

AdGuard for Mac now uses macOS built-in socket filtering based on the network extensions API. This new and rather buggy mechanism replaced good old Kernel extensions. Over the last 1.5 years, we've reported more than 20(!) bugs to Apple regarding their new filtering method.

The network extensions API has a VPN-like configuration with a list of route-like entries.
On Big Sur, AdGuard used "split-tunnel" rules to avoid creating the "default route" rule because it causes problems on early Big Sur releases. These problems were solved in Monterey so nothing prevents us from using the "default route" rule.

On Monterey, iCloud Private Relay got introduced. Privacy features of Mail.app also use Private Relay servers.

As a result, AdGuard can't work together with iCloud Private Relay and Mail.app privacy features:
1. iCloud Private Relay is applied to connections at the library level - before they reach the socket level, where AdGuard operates.
2. iCloud Private Relay uses QUIC, which AdGuard can't filter because HTTP/3 filtering is not yet available.
3. As AdGuard blocks QUIC, including iCloud Private Relay traffic - otherwise, ad blocking is impossible.
4. When you use iCloud Private Relay and switch AdGuard into the "split-tunnel" mode, you can't open websites in Safari. 
5. To work around this issue for Monterey, we apply the "default route" rule. When Private Relay sees that rule, it disables itself automatically.
So, AdGuard works seamlessly on Monterey, but iCloud Private Relay gets disabled.

```network.extension.monterey.force.split.tunnel``` restores the "Big Sur" behavior, but this option may break access to websites due to (3) and (4).

We keep searching for a solution to this issue. One of the options is implementing HTTP/3 filtering.

## Recommended solution

At this point, we recommend using a more traditional VPN service, such as [AdGuard VPN](https://adguard-vpn.com/), instead of the new Apple's privacy features.
