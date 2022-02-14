---
title: AdGuard VPN features
published: true
taxonomy:
    category:
        - docs
---

AdGuard VPN is a VPN service created by our company. An in-house developed VPN protocol makes it unique among competitors. AdGuard VPN is currently available as a browser extension for Chrome and Firefox and as a mobile app for Android; apps for IOS, Mac and Windows are coming soon. Both app and extensions have a free, basic plan and a paid subscription with more possibilities.

[AdGuard VPN protocol](#protocol)
[Fastest endpoints](#endpoints)
[Subscriptions](#subscriptions)
[Common user account](#account)
[AdGuard VPN Browser Extension features](#extension)
[AdGuard VPN for Android features](#android)


<a name="protocol"></a>

## AdGuard VPN protocol

Some VPNs are too easy to detect which makes them vulnerable and unreliable. We took a long time to develop and deliberate over our own solution. The result was AdGuard VPN protocol, perfect for uncompromised security. It disguises itself as normal traffic, so it is much more difficult to track and block it.


<a name="endpoints"></a>

## Fastest endpoints with pings

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/ext_endpoints_en.png" style="border: 1px solid #efefef; max-width: 600px; padding: 2px;">

Among other things, VPN operating speed depends on the number of VPN servers and their bandwidth. AdGuard VPN has a plethora of servers with unlimited bandwidth dispersed worldwide. The closer a server is located to you, the faster the connection. The response time of each server is called a *ping* and is displayed right next to it. The top 3 fastest servers are highlighted in green, so it is very simple to pick the most optimal one.


<a name="subscriptions"></a>

## Subscriptions

The difference between AdGuard and AdGuard VPN payment systems is structural: there are licenses in AdGuard and subscriptions in AdGuard VPN.

As it was mentioned at the beginning of this article, there are two options: free and paid VPN. Free account allows to have:

* 5 devices with enabled AdGuard VPN (there can be more devices overall, but only five can be used simultaneously)
* 3 GB of traffic that can be distributed between AdGuard VPN extensions and app
* 20 Mbit/sec speed limit

Correspondingly, the paid version offers **unlimited** traffic and speed, yet the number of devices stays the same.


<a name="account"></a>

## Common user account

Finally, AdGuard VPN subscriptions are integrated in AdGuard personal account. So, if you have it, AdGuard VPN will be present [there](http://my.adguard.com/), too. A common user account is very convenient: all purchases, license keys and subscriptions will be in the same place.


<a name="extension"></a>

## Extension-specific functions

If you look at AdGuard VPN extension for [Chrome](https://agrd.io/vpn_chrome_extension) or [Firefox](https://agrd.io/vpn_firefox_extension_beta), you might find its menu rather minimalistic. There are four tabs, two modes of operation and seven DNS servers to select from. Let’s see how it all works.

### Exclusion list and two modes of operation

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/ext_exclusions_en.png" style="border: 1px solid #efefef; max-width: 600px; padding: 2px;">

The first tab *Exclusions* offers a choice of two modes: regular and selective one. Turning on Regular mode, the user can add websites to a list of exclusions: AdGuard VPN won’t run on them. And vice versa, enabling Selective mode, the user will be able to add websites to a custom list of websites where they want AdGuard VPN to work. One can easily switch between these modes, so it is very convenient to configure AdGuard VPN to your own needs.

### Block WebRTC

The second tab *Settings* features a function that blocks WebRTC – a program that allows third-party websites to ascertain user identity by detecting your real IP address. To prevent this from happening, we recommend to keep this function enabled.

### 7 DNS servers to choose from

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/ext_dns_en.png" style="border: 1px solid #efefef; max-width: 800px; padding: 2px;">

You can choose from several available DNS servers – by [AdGuard](https://kb.adguard.com/en/dns/overview), Google, Cloudflare, Cisco, or IBM (Quad9). Some of them remove ads and trackers from your device, others enable safe search and adult content blocking, still others protect your device from malware, phishing and spyware. It is not yet possible to add a custom DNS server in extension settings, but it can be done in AdGuard VPN for Android.


<a name="android"></a>

## AdGuard VPN for Android

AdGuard offers a [VPN app for Android](https://adguard-vpn.com/en/welcome.html#android). As all other versions of AdGuard VPN, it features multiple server locations. For each of them AdGuard displays its ping, and 3 fastest ones are always boosted to the top of the list for easy access.

AdGuard VPN for Android employs the same advanced AdGuard VPN protocol that our other VPN apps do.

### Regular/Selective mode

By default, **Regular** operation mode is selected. In this mode, all requests are encrypted and routed through AdGuard VPN, except requests to websites that you manually add to the list of exclusions.

Vice versa, in **Selective** mode AdGuard VPN ignores all traffic and only works for requests to websites that you add to the allowlist.

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/android_exclusions_en.png" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

Exclusion lists for these two modes are separate, and you can switch between modes in one tap for maximum flexibility.

### App settings

By tapping on the third icon in the bottom row, you can open **Apps settings**. All apps installed on your Android device will be listed there.

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/android_apps_en.png" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

Turn off the switch next to any app to tell AdGuard VPN to ignore this app's traffic. By default, AdGuard VPN works with all apps.

### Kill Switch

If anonymity is absolutely essential for you, enable **Kill Switch** from the **Settings** tab. If connection drops for any reason, Kill Switch will block access to the Internet, thus preventing your anonymity from becoming compromised.  

### VPN mode

Inside **Settings > Advanced Settings** there's a **VPN mode** option. By default, AdGuard VPN for Android works as a regular VPN, but it can be switched to *SOCKS5* mode. If you do that, AdGuard VPN will run a local proxy server which can be used by other apps to route their traffic through it.

We don't recommend using *SOCKS5* mode unless you know what you're doing.

>*NOTE*: *SOCKS5* mode can be used as a [temporary solution](https://adguard.com/en/blog/introducing-adguard-vpn-for-android.html#compatibilitywiththeadguardmainapp) to run AdGuard VPN alongside [AdGuard for Android](https://adguard.com/adguard-android/overview.html) ad blocker until we implement a proper solution.

### Compatibility with AdGuard ad blocker

Normally, two VPN-based apps can't work simultaneously on Android. But we made it possible for AdGuard VPN and [AdGuard ad blocker](https://adguard.com/en/adguard-android/overview.html). All you have to do is to install both applications on your device, AdGuard will do the rest automatically.

Compatibility mode comes with a few limitations:

* Application tunneling and other app settings are now available only via the AdGuard ad blocker app
* Switching to a custom DNS server can be performed only via AdGuard ad blocker
* Kill Switch option becomes unavailable

If you want to disable Compatibility mode, go to *Settings > App settings > Advanced settings > Operating mode* and select a different mode. This will unlink AdGuard VPN from the ad blocker app, and AdGuard ad blocker will stop protecting your device.

### Custom DNS and low level settings

Normally, we strongly discourage from messing with **Low level settings** (located at **Settings > Advanced settings > Low level settings**) without consulting tech support. However, **DNS servers** option can prove useful to many users. It allows to indicate any custom DNS server that will be forced for all traffic coming through AdGuard VPN. 

Various DNS servers can be used for different purposes: more security, higher speed, ad blocking, parental control etc. Some of the popular DNS providers, including [AdGuard DNS](https://adguard.com/adguard-dns/overview.html), can be found in [this](https://kb.adguard.com/en/general/dns-providers) Knowledge base article.
