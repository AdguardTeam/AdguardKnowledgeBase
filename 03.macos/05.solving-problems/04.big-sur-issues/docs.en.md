---
title: 'Issues specific to macOS 11 Big Sur and later versions'
taxonomy:
    category:
        - docs
visible: true
---

* [Currently existing problems](#current)
    * [Big Sur 11.6: currently existing problems](#BigSur)
        * [Compatibility with Cisco AnyConnect](#cisco)
        * [Compatibility with Flutter](#flutter)
        * [VPN apps with legacy API](#legacy-api)
    * [Monterey 12: currently existing problems](#Monterey)
        * [Compatibility with iCloud Private Relay](#private-relay)
* [Already fixed problems](#fixed)
    * [Compatibility with Little Snitch 5](#little-snitch)
* [Alternatives to Network Extension](#alternatives)   
    * [Using "Automatic proxy" filtering mode](#automatic-proxy)
    * [Enabling Kernel Extension in Big Sur](#kernel-extension)


<a id="current"></a>

## Currently existing problems

Every year Apple releases a new version of macOS, introducing innovative solutions and adding new useful features. But some of them, such as Network Extensions API (Big Sur) or iCloud Private Relay (Monterey), causes some problems to many applications, AdGuard not being an exception. In this article we go over the known issues spesific to each macOS version and possible ways to solve them.  

<a id="BigSur"></a>

## Big Sur 11.6: currently existing problems

These problems aren't fixed by Apple yet, or fixed only partially.

<a id="cisco"></a>

### Compatibility with Cisco AnyConnect

AdGuard will not work together with Cisco AnyConnect while in *Network Extension* mode. You have to switch AdGuard to *Automatic Proxy* mode. To do so, follow [this instruction](#automatic-proxy).


<a id="flutter"></a>

### Compatibility with Flutter

If you use Flutter alongside AdGuard in "Network Extension" mode (or any other "Transparent Proxy"-type app) in Big Sur, you will run into problems: projects won't open and Flutter will be effectively broken. We have already reported this bug to Apple. Meanwhile, you can use these temporary solutions:

1) Use AdGuard in [Automatic Proxy](#automatic-proxy) mode

2) Disable SIP and switch AdGuard to Kernel Extension mode as explained [here](#kernel-extension).


<a id="legacy-api"></a>

### VPN apps with legacy API

Despite AdGuard is displayed as a VPN in system settings, it shouldn't cause any conflicts when working alongside other VPN-based apps. However, if you're using a VPN-based app that was downloaded from outside AppStore, there's a chance it uses the old VPN API and you have to exclude it from filtering:

1) Open AdGuard's menu.
2) Select *Preferences...*. 
3) Switch to the *Network* tab. 
4) Click the *Applications...* button.
5) Find the app you want to exclude and uncheck the checkbox next to it.

<img src="https://cdn.adguard.com/public/Adguard/kb/BigSur/problems/legacy-api.png" style="max-width: 650px;">

<a id="Monterey"></a>

## Monterey 12: currently existing problems

These problems aren't fixed by Apple yet, or fixed only partially.

<a id="private-relay"></a>

### Compatibility with iCloud Private Relay

By default, AdGuard uses the "default route" which disables iCloud Private Relay.

Currently, AdGuard and iCloud Private Relay cannot work at the same time. AdGuard has no ability to block ads because iCloud Private Relay encrypts traffic before AdGuard can filter network connections. When iCloud Private Relay is active, any filtering (including local filtering) becomes impossible. Thus, AdGuard can't filter traffic or perform DNS filtering in Safari.

For a deeper understanding of this problem, follow the link and read [the article](https://github.com/AdguardTeam/AdguardKnowledgeBase/blob/master/03.macos/05.solving-problems/07.icloud-private-relay/docs.en.md). 

**Recommended solution**

We recommend using AdGuard together with a more traditional VPN service such as [AdGuard VPN](https://adguard-vpn.com/).

**Alternative solution**

You can prevent AdGuard from using the "default route" by disabling the "default route".  It can be done via Advanced Settings -> ```network.extension.monterey.force.split.tunnel```. 

<img src="https://cdn.adguard.com/public/Adguard/kb/MAC/mac_adguard_advanced_settings.png"> 


<a id="fixed"></a>

## Already fixed problems

These problems have been fixed by Apple by now but can be encountered in the older versions of macOS Big Sur. 

<a id="little-snitch"></a>

### Compatibility with Little Snitch 5

At this moment, Network Extension mode in AdGuard isn't compatible with [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a chance to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. This problem is directly caused by a bug in Big Sur, and we've already informed Apple about it. This leaves us to believe that this issue will get resolved in one of the next updates.

Needs to be said that this problem can't be solved by disabling connections monitoring in Little Snitch, because this action doesn't unload Little Snitch's extension from the system. We recommend to switch to [**Automatic Proxy**](#automatic-proxy) filtering mode when running AdGuard alongside with Little Snitch on Big Sur, at least until Apple fixes the bug.


<a id="alternatives"></a>

## Alternatives to using a Network Extension

It's impossible to foresee each and every possible problem that can pop up in Big Sur or Monterey, there are countless various hardware/software and settings configurations. If you face any compatibility issues, please contact our support team, but feel free to try one of these workarounds first.

<a id="automatic-proxy"></a>

### Using "Automatic proxy" filtering mode

If you face problems in Big Sur or Monterey which can't be resolved by any of the methods above, you can try switching AdGuard to *Automatic proxy* mode.

1) Open AdGuard's menu.
2) Select *Preferences...*. 
3) Switch to the *Network* tab. 
4) Click the *Select Mode...* button.
5) Select *Automatic Proxy*.

<img src="https://cdn.adguard.com/public/Adguard/kb/BigSur/problems/automatic-proxy_en.png" style="max-width: 650px;">

Now AdGuard has automatically added a **.pac** file to your Mac's network settings, so that the system will consider AdGuard a proxy and try to send all traffic through AdGuard.

>Take into account that some apps may ignore this system setting and their traffic will not be filtered.


<a id="kernel-extension"></a>

### Enabling Kernel Extension in Big Sur and Monterey

By default AdGuard uses Network Extension framework in Big Sur and Monterey as the old Kernel Extension framework is disabled there. This can cause some compatibility problems, but to enable Kernel Extension back, you need to disable System Integrity Protection (SIP) first. To disable SIP, follow this instruction:

1) Click the *Apple symbol* in the Menu bar.
2) Click *Restart…*
3) Hold down *Command-R* to reboot into Recovery Mode.
4) Click *Utilities*.
5) Select *Terminal*.
6) Type `csrutil disable`.
7) Press *Return* or *Enter* on your keyboard.
8) Click the *Apple symbol* in the Menu bar.
9) Click *Restart…*

Now that SIP is disabled, this is how you enable Kernel Extension:

<img src="https://cdn.adguard.com/public/Adguard/kb/BigSur/problems/kernel_en.png" style="max-width: 650px;">

1) Open AdGuard's menu.
2) Select *Preferences...*. 
3) Switch to the *Network* tab. 
4) Click the *Select Mode...* button.
5) Select *Kernel Extension*.
6) Confirm that you want to switch to Kernel Extension.

>However, we only recommend using this method if everything else fails, as this may lead to unexpected issues.