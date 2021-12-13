---
title: 'Features overview'
taxonomy:
    category:
        - docs
---
 
*   [What is AdGuard VPN for Android](#adguard-vpn)
*   [How to use AdGuard VPN for Android](#use)
*   [Main Screen](#main)
*   [Exclusions](#exclusions)
    * [Lists of exclusions](#lists)
    * [Apps Settings](#apps)
*   [Settings](#settings)
    * [Autostart](#autostart)
    * [DNS server](#dns-server)
    * [Auto-protection](#auto-protection)
    * [Kill Switch](#kill-switch)
    * [Theme](#theme)
    * [Advanced settings](#advanced-settings)
*   [Support](#support)
*   [Unlimited version](#unlimited-version)
 
<a name="adguard-vpn"></a>
 
## What is AdGuard VPN for Android
 
A VPN is an ideal tool that provides security and anonymity each time you browse the Internet and helps you overcome geographical limitations. [How does it work?](https://kb.adguard.com/en/vpn/adguard-vpn-general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted tunnel between the user's computer or mobile device and a remote VPN server. In this way, data confidentiality is preserved, as well as the anonymity of the user, because a third-party observer sees the IP address of the VPN server and not the actual user's IP.   
 
**VPN is frequently used for:**
 
* Keeping personal data safe even while using public Wi-Fi
* Preventing tracking online activity by masking the IP address
* Hiding the real geolocation to gain access to blocked resources
 
AdGuard VPN for Android can do it all for you — and even offer something unique. To find out why AdGuard VPN is the better option — read [this article](https://kb.adguard.com/en/vpn/adguard-vpn-general/adguard-vpn-is-the-better-option). 
 
<a name="use"></a>
 
## How to use AdGuard VPN for Android
 
AdGuard VPN for Android is a pretty user-friendly app easy to use. Firstly, download it from [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) and log into your AdGuard account. In case you don’t have it — you should [create it](https://auth.adguard.com/login.html). You can sign in directly with your AdGuard account credentials. Or do it via Google or Facebook, if your AdGuard account was registered using the same email address.
 
<a name="main"></a>
 
## Main Screen
 
There are two bars on the main screen, reflecting the status of the application (Connected/Disconnected) and the selected Exclusions mode ([General/Selective](#lists-of-exclusions)). On the same screen, there are also a *Connect/Disconnect* button and a list of available servers.
 
Each server has its location and its ping rate, describing the response time of the server. The lower this rate, the faster is your connection. The fastest options are always displayed at the top of the list which consists of more than 50 locations in dozens of countries. You can enable the app by tapping the *Connect/Disconnect* button or by picking a location.
 
<a name="exclusions"></a>
 
## Exclusions

We've done everything to make it easy for you to manage your site and app exclusion lists. AdGuard VPN will only work where you choose. 

<a name="lists"></a>

### Lists of exclusions
 
The exclusion lists allow you to select sites for which the VPN should be enabled and for which — disabled. To reach the *Exclusions* section, tap the second icon from the left at the bottom of the screen.
 
There are two modes: in *General mode* sites from the exclusions list are excluded, and in *Selective mode*, they will be the only ones where AdGuard VPN works.
 
You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites to the *Exclusions* in three ways: enter them manually in the app or right from the browser by clicking the Share button and selecting AdGuard VPN in the opened list below. You can also add them from built-in lists of services divided by categories.
 
<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/add_site.png">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/Add_site_from_list.png">
     </div>
</div>
 
>There are some nuances in manual adding domains. For example, if you manually exclude the domain `google.com`, all `*.google.com` subdomains will also be listed in exclusions. However, domain names with other top-level domains, such as `google.ru` or `google.it`, will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not get into the list. In this case, it’s more safe to use built-in lists of services, because we put there all subdomains related to each platform.
 
As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name: **fully-enabled** status is marked with a white check mark on green background, **fully-disabled** — with a gray box, and **partly-enabled**, which means that one or more parameters were changed — with a green square on white background. Good news: you can always return to the default view of service lists in case you’ve deleted or disabled any domains from there.
 
<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/statuses.png">
     </div>
 
Another useful feature is *Import/Export exclusions*. There are only four steps to reach the goal:
 
1. Open AdGuard VPN on the device/in the browser from where you want to export your lists of exclusions. Find the appropriate section and click the Export button. The `adguard_vpn_exclusions.zip` archive will be downloaded.
2. There are two `.txt` files inside the archive, one for each of the *General* and *Selective* lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as is.
3. When transferring between different devices, don't forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your Windows device to your Android, make sure to send the `.zip` file to your Android beforehand.
4. Open AdGuard VPN on the device where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click the *Import* button and select the archive.
 
<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/imp-exp.png">
     </div>
 
<a name="apps"></a>
 
### Apps Settings
 
As we mentioned above, not only websites can be easily added to the exclusions. Choose for which applications you need AdGuard VPN and for which you don't. Tap the icon next to the *Exclusions lists* icon at the bottom of the screen, to open Apps settings. By default, AdGuard VPN works with all apps, but you can toggle the slider next to any app in the list — and disable AdGuard VPN for it.  
 
If the *Compatibility mode* with AdGuard is enabled, you can only manage apps through the AdGuard app. Therefore, when you tap the button, the AdGuard app opens.
 
<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/apps_settings.jpg">
     </div>
 
<a name="settings"></a>
 
## Settings
 
You can reach *Settings* by pressing the gear icon at the bottom right of the screen. The first section there is *App Settings*: configure AdGuard VPN for Android as you need by selecting different options there.
 
<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/App_settings.jpg">
     </div>
 
<a name="autostart"></a>
 
### AdGuard VPN autostart
 
The slider switched to the right enables an AdGuard VPN autostart after the device's startup.
 
<a name="dns-server"></a>
 
### DNS Server
 
The purpose of the [Domain name system](https://kb.adguard.com/en/general/dns-filtering#what-is-dns) (DNS) is to translate websites' names into something browsers can understand, i.e. IP addresses. This job is performed by DNS servers. AdGuard VPN for Android offers a choice of several DNS servers, each with special qualities. For example, [AdGuard DNS](https://kb.adguard.com/en/dns/overview) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with SafeSearch and adult content blocking. There is also an option to add a custom DNS server.
 
<a name="auto-protection"></a>

### Auto-protection

This feature enables AdGuard VPN automatically when your device connects to a cellular or Wi-Fi network.

<a name="kill-switch"></a> 

### Kill Switch
 
You can set up the Kill Switch function on your Android device by following simple instructions on the screen. Why would you do this? If for some reason your VPN connection suddenly drops while you are using a mobile network or public Wi-Fi, Kill Switch will automatically terminate the internet connection, keeping attackers away from seizing your information.
 
Note that if Kill Switch is on, *Apps settings* and *Exclusions* won’t work.
 
<a name="theme"></a>
 
### Theme

You can choose the system default, dark or light theme of the app.

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/light.jpg">
     </div>

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/dark.jpg">
     </div>
 
<a name="advanced-settings"></a>
 
### Advanced settings
 
In the *Advanced settings*, you can find five sections. You can *Help us to become better* by toggling the switch in the upper block. This action will allow AdGuard VPN to gather crash reports, technical and interaction data. This information will come in anonymously.
 
*Operating mode* section allows you to choose one of three options: VPN, Proxy, and Compatibility mode. In *VPN mode* all traffic is routed through AdGuard VPN automatically. When the *Proxy mode* (SOCKS5) is on, AdGuard VPN runs a local proxy sever which can be used by other apps to route their traffic through it. Choose this option only if you know what you are doing. Enabled *Compatibility mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.  

> Please note that some AdGuard VPN features are disabled in *Compatibility mode*: DNS server selection, Kill Switch and Auto-protection. Also, to manage application tunneling you should open AdGuard Ad Blocker application.  
 
The next two sections are *Logging level* and *Diagnostic info*. Concerning the first option, it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems. 
 
The last section of *Advanced settings* is *Low-level settings*. We urge you not to enter this section unless you are highly qualified or have been asked to do so by our support team. There you will find some options to customize the AdGuard VPN to meet your needs even more. Enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used — but only if you have the necessary knowledge.
 
<a name="support"></a>
 
### Support
 
At the *Support* section you can leave feedback, report a bug, or export logs and system info for further submission to the helpdesk.
 
<a name="unlimited-version"></a>
 
## Unlimited version
 
You can use AdGuard VPN for Android for free, but then there will be certain restrictions:

* Only 2 devices on which you can simultaneously enable AdGuard VPN
* 3 GB of traffic per month restriction  
* 20 Mbit/sec speed limit
* Only some of the server locations are available

At the same time you can purchase a subscription to get an unlimited version of the app. In the *Settings* choose *About license* and press the *Manage* button. You will be sent to the browser page where you can choose a Monthly or a Yearly payment plan.
 
A subscription allows to have more benefits in comparison with a free account:
 
* 5 simultaneously connected devices 
* Unlimited traffic 
* No speed cap 
* All 50+ locations are available 
 
You can read more about the differences between the free and the paid versions in [this article](https://kb.adguard.com/en/vpn/adguard-vpn-general/free-and-full-versions).
 
 

