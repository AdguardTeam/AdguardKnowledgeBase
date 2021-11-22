---
title: 'Features overview'
taxonomy:
    category:
        - docs
---

*   [What is AdGuard VPN for Android](#adguard-vpn)
*   [How to use AdGuard VPN for iOS](#use)
*   [Main Screen](#main)
*   [Lists of exclusions](#exclusion)
*   [Apps Settings](#apps)
*   [App settings](#settings)
    * [Autostart](#autostart)
    * [DNS server](#dns-server)
    * [Kill Switch](#ks)
    * [Theme](#theme)
    * [Advanced settings](#advanced-settings)
*   [Support](#support)
*   [Unlimited version](#unlimited-version)

<a name="adguard-vpn"></a>

## What is AdGuard VPN for Android 

VPN is the perfect tool for safe and anonymous Internet surfing without restrictions. (How does it work?)[What is VPN] Without going into technical details, VPN creates a secure encrypted tunnel between the user's computer or mobile device and a remote VPN server. 

As a result, the user maintains anonymity, because a third-party observer sees not the user's IP, but the IP address of the VPN server. Moreover, because the Internet traffic passes through an encrypted tunnel, there’s no need to worry about the confidentiality of data. 

### VPN is frequently used for: 

Keeping personal data safe even while using public Wi-Fi.
Preventing tracking online activity by masking the IP address.
Hiding the real geolocation to gain access to blocked resources. 

AdGuard VPN for Android can do it all for you — and even offer something unique. 

**Self Developed protocol**. It provides high connection speed and reliable protection. It also masks traffic, so it's quite difficult to track and block (for Netflix, for instance). To learn more about AdGuard VPN protocol, follow (this link)[How AdGuard VPN protocol works].  

**QUIC protocol support**. This feature allows you to get a stable connection in non-ideal conditions, such as when using mobile Internet in an elevator where the signal is weak.

**Compatibility with AdGuard AdBlocker**. You can enable dual protection on your smartphone and enjoy unique total protection! Why unique? In most cases, two VPN applications can’t work together, because of certain system limitations. But we made it possible. 

**Exclusions lists** and *Apps Settings*. These two features provide approximately the same functionality: they allow you to choose where the VPN will work and where it won't. The main difference is that Exclusions lists do it for sites, and Apps settings — for apps.

<a name="use"></a>

## How to use AdGuard VPN for Android

AdGuard VPN for Android is a pretty user-friendly app easy to use. Firstly, download it from Google Play and log into your AdGuard account. In case you don’t have it — you should create it. You can sign in directly with your AdGuard account credentials. Or do it via Google or Facebook, if your AdGuard account was registered using the same email address.

<a name="main"></a>

## Main Screen

There are two bars on the main screen, reflecting the status of the application (Connected/Disconnected) and the selected Exclusions mode ((General/Selective))[#lists-of-exclusions]. On the same screen, there are also a *Connect/Disconnect* button and a list of available servers. 

Each server has its location and its ping rate, describing the response time of the server. The lower this rate, the faster is your connection. The fastest options are always displayed at the top of the list which consists of more than 50 locations in dozen countries. You can enable the app by tapping the Connect/Disconnect button or by picking a location. 

<a name="exclusion"></a>

## Lists of exclusions

As we mentioned above, the exclusion lists allow you to select sites for which the VPN should be enabled and for which — disabled. To rich the *Exclusions* section, tap the second left icon at the bottom of the screen. 

There are two operation modes: in *General mode* sites from the exclusions list are, well, excluded, and in *Selective mode*, they will be the only ones where AdGuard VPN works.

You can add domains (e.g. google.com) or subdomains (e.g. *.google.com) of websites to the *Exclusions* in three ways: enter them manually in the app or right from the browser by clicking the Share button and selecting AdGuard VPN in the opened list below. You can also add them from built-in lists of services divided by categories.

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/add_site.png" style=" max-width: 350px;">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/Add_site_from_list.png" style=" max-width: 350px; ">
     </div>
</div>

>There are some nuances in manual adding domains. For example, if you manually exclude the domain *google.com*, all * *.google.com* subdomains will also be listed in exclusions. However, other domains of the service, such as *google.ru* or *google.it* will not be excluded. Or you can add *youtube.com* to the exclusions, but the domain of the same service *youtu.be* will not get into the list. In this case, it’s more safe to use built-in lists of services, because we put there all subdomains related to each platform. 

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name: **fully-enabled** status is marked with a white tick on green background, **fully-disabled** — with a gray box, and **partly-enabled**, which means that one or more parameters were changed— with a green square on white background. Good news: you can always return to the default view of service lists in case you’ve deleted or disabled any domain from there. 

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/statuses.png" style=" max-width: 350px;">
     </div>

Another useful feature is the **import/export of exclusion lists**. There are only four steps to reach the goal:

1. Open AdGuard VPN on the device/in the browser from where you want to export your lists of exclusions. Find the appropriate section and click the Export button. The exclusions.zip archive will be downloaded.
2. There are two .txt files inside the archive, one for each of the General and Selective lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as-is.
3. When transferring between different devices, don't forget to send the .zip file to the device for import. For example, if you import exclusion lists from your Windows device to your Android, make sure to send the .zip file to your Android beforehand.
4. Open AdGuard VPN on the device where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click the Import button and select the archive.

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/imp-exp.png" style=" max-width: 350px;">
     </div>

<a name="apps"></a>

## Apps Settings

Not only websites can be easily added to the exclusions. Choose for which applications you need AdGuard VPN and for which you don't. Tap the icon next to the *Exclusions lists* icon at the bottom of the screen, to open Apps settings. By default, AdGuard VPN works with all apps, but you can toggle the slider next to any app in the list - and disable AdGuard VPN for it.  

If the *Compatibility mode* with AdGuard is enabled, you can only manage apps through the AdGuard app. Therefore, when you tap the button, the AdGuard app opens. 

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/apps_settings.jpg" style=" max-width: 350px;">
     </div>

<a name="settings"></a>

## App settings

You can reach *App Settings* by pressing the gear icon in the bottom right of the screen. You can configure AdGuard VPN for Android as you need by selecting different options.

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/App_settings.jpg" style=" max-width: 350px;">
     </div>

<a name="autostart"></a>

### AdGuard VPN autostart

The slider switched to the right enables an AdGuard VPN autostart after the device's startup.

<a name="dns-server"></a>

### DNS Server

The purpose of the Domain name system (DNS) is to translate websites' names into something browsers can understand, i.e. IP addresses. This job is performed by DNS servers. AdGuard VPN for Android offers a choice of several DNS servers, each with special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with SafeSearch and adult content blocking. There is also an option to add a custom DNS server.

<a name="ks"></a>

### Kill Switch

You can set up the Kill Switch function on your Android device by following simple instructions on the screen. Why would you do this? If for some reason your VPN connection suddenly drops while you are using a mobile network or public Wi-Fi, Kill Switch will automatically disconnect the internet connection, keeping attackers away from seizing your information.

Note that if Kill Switch is on, Apps settings and any of exclusion modes won’t work.

<a name="theme"></a>

### Theme
You can choose the system default, dark or light theme of the app.

<a name="advanced-settings"></a>

### Advanced settings

In the *Advanced settings*, you can find five sections. You can *Help us to become better* by toggling the switch in the upper block. This action will allow AdGuard VPN to gather crash reports, technical and interaction data. This information will come in anonymously.

*Operating mode* section allows you to choose one of three app operation modes: VPN, proxy, and integration mode, which allows AdGuard VPN and AdGuard AdBlocker to work together. They differ in the way your traffic is routed. 

The next two sections are *Logging level* and *Diagnostic info*. Concerning the first option, it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

The last section of *Advanced settings* is *Low-level settings*. There you will find some options to customize the AdGuard VPN to meet your needs even more. Enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used — but only if you have the necessary knowledge. 

<a name="support"></a>

### Support

At the *Support* section you can leave feedback, report a bug, or export logs and system info for further submission to the helpdesk.

<a name="unlimited-version"></a>

## Unlimited version

You can use AdGuard VPN for free and put up with some limitations or purchase a subscription to get an unlimited version of the app. In the *Settings* choose *About license* and press the *Manage* button. You will be sent to the browser page where you can choose a Monthly or a Yearly payment plan.

A subscription allows to have more benefits in comparison with a free account:

* 5 simultaneously connected devices vs. 2 devices with enabled AdGuard VPN
* Unlimited traffic vs. 3 GB of traffic per month
* No speed cap vs. 20 Mbit/sec speed limit

You can read more about the differences between a free and a paid version in [this article](Differences between free and full versions).

