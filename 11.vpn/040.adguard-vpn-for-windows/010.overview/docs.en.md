---
title: 'Features overview'
taxonomy:
    category:
        - docs
---

AdGuard VPN for Windows overview

* [What is AdGuard VPN for Windows](#adguard-vpn)
* [How to use AdGuard VPN for Windows](#use)
* [Main screen](#main)
* [Exclusions](#exclusions)
* [Settings](#settings)
    * [General](#general)
    * Split tunneling](#split-tunneling)
    * [Other settings](#other-settings)
* [Support](#support)
* [Unlimited version](#unlimited-version)

<a name="adguard-vpn"></a>

## What is AdGuard VPN for Windows

It's unlikely that anyone wants their network traffic to be tracked, that some "third-parties" know their request history, or that they can easily track their current geolocation. To escape the radar of ISPs or analytics systems and become invisible to third-party observers, all you need to do is install AdGuard VPN for Windows. 

**What AdGuard VPN for Windows does**

* Protects from network traffic interception (spoofing). AdGuard VPN creates an encrypted tunnel between your device and a remote server. All your Internet traffic passes through this tunnel, so your data is protected along the way. And thanks to [AdGuard's unique protocol](https://kb.adguard.com/en/vpn/adguard-vpn-general/how-adguard-vpn-protocol-works), you're guaranteed a fast and secure connection.

* Masks your IP address. Your true IP address is the key to your personal data for cybercriminals. Your name, email address, phone number, credit card information can all fall into the hands of fraudsters if you don't hide your IP. With AdGuard VPN, as we said before, all your traffic goes through an encrypted tunnel and comes to the VPN server. Therefore, from the outside it appears that your device has the IP address of said VPN server. 

* Hides your real location. By selecting any of the AdGuard VPN servers, you are instantly "teleported" to its location. What does this give you? For example, the ability to book a hotel at locals' rates or hide from geotargeted advertising.

AdGuard VPN for Windows has many advantages, so we've dedicated [a separate article](http://kb.adguard.com/ru/vpn/adguard-vpn-general/adguard-vpn-is-the-better-option
) to them. Here, however, we want to focus more on the application itself and how it works.

<a name="use"></a>
## How to use AdGuard VPN for Windows

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/ru/welcome.html). The installation takes no more than a minute — and you'll see a dialog window where you'll need to check at least one box applying the terms of the User Agreement and the Privacy Policy. And it's up to you to decide whether you want AdGuard to collect anonymized data about your app usage. 

The program will then ask you to sign in, either via [AdGuard account](https://auth.adguard.com/login.html) or via social networks (Apple, Google, Facebook). Well, all the formalities are now completed and you can start using AdGuard VPN for Windows!

<a name="main"></a>
## Home Screen

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/for_windows/main_en.png" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

The most noticeable item on the **Home Screen** is the AdGuard VPN connect/disconnect button. Underneath, you can see the [mode](#exclusions) in which the application is running, and below — the selected server. On the right side of the screen you will find all available locations, and the fastest, i.e. with the shortest ping, will be listed at the top of the list. 

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**. With the first tab done, let's move on. 

<a name="exclusions"></a>
## Exclusions

AdGuard VPN for Windows can work in two modes: **General** or **Selective**. What does this mean? If you want the application to work on all but a few sites, activate the **General mode** and list the resources you want to exclude from the tunnel. The **Selective mode** has the opposite effect: it activates AdGuard VPN only on the websites specified in the exclusion list. 

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/for_windows/exclusions_en.png" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

There are two options for creating exclusions lists: **Manually** and "From the list". Click the **Add a website** line and choose the format you prefer for adding sites to the exclusions. 

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/for_windows/exclusions_add_en.png" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;"><p>

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/for_windows/exclusions_from_list_en.png" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

> When adding domains manually, you should take into account some nuances. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.ru' or `google.it' will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list. 

That being said, we recommend to use the option **From the list**, since in each of the eight thematic groups we have placed the most popular services, including all domain names and subdomains related to each platform. 

### Import/export exclusions lists

In the **Exclusions** tab on the right side of the screen there is a section **Actions**. It may come in handy if you need to export or import ready-made exclusions lists. 

To export the list of exclusions from AdGuard for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones. 

To transfer the exclusions lists to another device, send the `.zip' file to its destination. Open AdGuard VPN on the device where you want to import the archive with the ready-made exclusions lists, click *Exclusions*, then *Import exclusions* and select the previously sent archive.

<a name="settings"></a>
 
## Settings

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/for_windows/settings_en.png" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

The last top four tab of AdGuard VPN for Windows contains sections that will help you customize the application. We should pay special attention to two of them: **General**and **Split tunneling**.

<a name="general"></a>
### General

The first **General** settings screen doesn’t contain any complicated functions. Here you can set the app language. We are rightfully proud of the level of localization: the application supports 26 languages! Here you can also enable **Kill Switch** which will block your access to the Internet if your VPN connection is broken. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that we can make it better. Here you can also change the default **Light Theme** to a favorite **Black Theme**. 

> At the top right of the screen is the **Actions** block with one section — **Export Logs**. If our support team asks you to send logs, feel free to click there. 

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/for_windows/settings_dns_and_advanced_en.png" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

#### DNS servers

The DNS servers tab allows you to add your own custom DNS server. Why should you do this? For example, so you don't have to rely on the DNS server that AdGuard VPN for Windows uses by default and keep everything under control. 

You can set up a DNS server from any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking and phishing in addition to the standard functions. 

#### Advanced Settings

> Changing the *Advanced settings* can harm the stability and performance of AdGuard VPN for Windows, disrupt your Internet connection, or compromise your security and privacy. Only open this section if you are sure about what you are doing or our support team has asked you about it.

**Operating Mode**.

Despite the fact that there are two operating modes — VPN and SOKCS5 — we advise you to use only the one chosen by default (VPN). When the **VPN-mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOKCS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.    

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. Use the first option when the application is running without errors. The **Record everything** option should only be activated after consulting with the support team when the program doesn’t work correctly. 

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**.

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks. 

<a name="split-tunneling"></a>
### Split tunneling

<img src="https://cdn.adguard.com/public/Adguard/kb/VPN/for_windows/split_tunneling_en.png" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

The AdGuard VPN encrypts the traffic not only of your browsers, but also of the applications installed on your computer. If you want to exclude certain applications from AdGuard's work, put them to the **Split tunneling** list. 

<a name="other-settings"></a>
## Other settings

### About

The **About program** tab provides information about the current version of AdGuard VPN for Windows, an update button, and a few useful links: the website, forum, EULA and Privacy Policy.

### About license

Here you will find information about your license status, as well as a link to your personal AdGuard account, where you can buy a new subscription, upgrade or renew an existing one.

## Support

In this tab we've collected a lot of useful links: on a page with answers to frequently asked questions, on an application feedback form, on resources where you can discuss AdGuard VPN, and on our **Knowledge Base**.

By clicking the *Report a bug* you will open a dialog box with a field to describe the problem. If anything goes wrong while using AdGuard VPN for Windows, please, tell us about it. 

## Unlimited version

You can use AdGuard VPN for Windows for free, but then certain restrictions apply:

* AdGuard VPN can only be used on two devices at the same time
* 3GB/month traffic limit  
* Speed limit of 20 Mbit/sec.
* Many locations are not available

In the meantime, you can purchase a subscription to get access to an unlimited version of the app. In *Settings* select *About License* and click the *Manage License* button. You will be sent to the browser page where you can select the *Monthly* or *Annual* payment plan.
 
Subscription allows you to get more benefits than the free version:
 
* Up to five connected devices at the same time
* Unlimited traffic
* No speed limit
* All 50+ locations available
 
You can read more about the differences between the free and paid versions of AdGuard VPN in [this article](http://kb.adguard.com/ru/vpn/adguard-vpn-general/free-and-full-versions).

