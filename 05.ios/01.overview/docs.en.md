---
title: Features overview
taxonomy:
    category:
        - docs
---

* [Features](#features)
	* [Content blockers](#content-blockers)
	* [Filters](#filters)
	* [User rules](#user-rules)
	* [Allowlist](#allowlist)
	* [Assistant](#assistant)
	* [DNS protection](#dns-protection)
		* [DNS implementation](#dns-implementation) 
    	* [DNS servers](#dns-servers)
    	* [Network settings](#network-settings)
    	* [DNS filtering](#dns-filtering)
    		* [DNS filters](#dns-filters)
    		* [Allowlist and Blocklist](#allowlist-blocklist)
    * [Activity](#activity)
    	* [Statistics](#statistics)
    * [Low-level settings](#low-level-settings)
    	* [Block IPv6](#blockipv6)
    	* [Bootstrap and Fallback servers](#bootstrap-fallback) 
* [Other features](#other-features) 	

If you look for AdGuard in the App Store, you'll find two apps — [AdGuard](https://itunes.apple.com/app/id1047223162) and [AdGuard Pro](https://itunes.apple.com/app/id1126386264). These apps are designed to block ads and tracking in Safari, in apps and other browsers, and to manage DNS protection. Don't be misled by their names, both apps block ads on smartphones and tablets by Apple. They used to differ in functionality due to the changing App Store review guidelines, but now these two apps are [basically the same](https://adguard.com/en/blog/updating-adguard-pro-for-ios.html). So if you have purchased AdGuard Pro, there is no need to download AdGuard and buy a license there, and vice versa. 

<a id="features"></a>
# Features
AdGuard and AdGuard Pro for iOS offer lots of features for blocking ads, trackers and creating user rules, both in Safari and on network level.

<a id="content-blockers"></a>
## Content blockers

Content blockers serve as 'containers' for filtering rules that do the actual job of blocking ads and tracking. AdGuard for iOS contains six content blockers: General, Privacy, Social, Security, Custom, and Other. Apple allows each content blocker to contain  a maximum of 50K filtering rules, hence, six AdGuard content blockers include 300K filtering rules.  

All content blockers, their statuses, which thematic filters they currently include, and a total number of used filtering rules can be found on the respective screen in *Advanced settings*.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/content_blockers_state_en.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 400px; padding: 2px;">

> Tip: keep all content blockers enabled for the best filtering quality.

<a id="filters"></a>
## Filters

Content blockers' work is based on filters, also sometimes referred to as filter lists. Each filter is a list of filtering rules. If you have an enabled ad blocker when browsing, it constantly checks the visited pages and elements on them against these filtering rules, and blocks anything that matches. Rules are developed to block ads, trackers, and more.

All filters are grouped into thematic categories. To see the full list of these categories (not to be confused with content blockers), go to *AdGuard for iOS Settings > Safari protection > Filters*.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/Pro/filters_group_en.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 400px; padding: 2px;">

There are eight of them, each category unites several filters that serve and share a common purpose, i.e. blocking ads, social media widgets, cookie notices, protecting the user from online scams. To decide which filters suit your needs, read their descriptions and navigate by the labels (`ads`, `privacy`, `recommended`, etc.).  

> More enabled filters does not guarantee that there will be less ads. A large number of various filters enabled simultaneously reduces the quality of ad blocking.

> Custom filters category is empty by default for users to add there their filters by URL. You can find filters on the Internet or even try to [create one by yourself](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters).  

<a id="user-rules"></a>
## User rules

Another section of the Safari protection screen that needs to be presented. Here you can add new rules — either by entering them manually, or by using [the AdGuard manual blocking tool in Safari](https://kb.adguard.com/en/ios/overview#assistant). This is needed to customize Safari filtering without adding an entire filter list. 

> Learn [how to create your own ad filters](https://kb.adguard.com/general/how-to-create-your-own-ad-filters). But please note that many of them won't work in Safari on iOS.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/user_rules_en.png?1" style="border: 1px solid #efefef; max-height: 700px; max-width: 400px; padding: 2px;">

<a id="allowlist"></a>
## Allowlist

The third section of the Safari protection screen. If you want to disable ad blocking on a certain website, Allowlist would be of help. It allows you to add domains and subdomains to exlcusions. AdGuard for iOS has an Import/Export feature, so the allowlist from one device can be easily transferred to another.

<a id="assistant"></a>
## Assistant

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/assistant_en.png?1" style="border: 1px solid #efefef; max-height: 700px; max-width: 400px; padding: 2px;">

Assistant is a tool that helps you manage filtering in Safari right from the browser without switching back to the app. To see it, do the following: open Safari, tap on the arrow-in-a-box symbol. Then scroll down to AdGuard/AdGuard Pro (depending on the app you use) and tap it to fetch a window with several options:

1. **Enable on this page.** Turn the switch off to add the current domain to the Allowlist.
2. **Block an element on this page.** Tap it to enter the 'Element blocking' mode: choose any element on the page, adjust the size by tapping 'plus' or 'minus', preview if necessary and then tap the checkmark icon to confirm. The selected element will be hidden from the page and a corresponding rule will be added to User rules. Remove or disable it there to revert the change.
3. **Report an issue on this page.** Opens a web reporting tool that will help you send a report to our support team in just a few clicks. Use it if you noticed a missed ad or an incorrect blocking on the page. 

<a id="dns-protection"></a>
## DNS protection

[DNS protection module](https://kb.adguard.com/en/general/dns-filtering) enhances your privacy by encrypting your DNS traffic. Unlike with Safari content blocking, DNS protection works system-wide, i.e. beyond Safari, in apps and other browsers. You have to enable this module before you're able to use it. It can be done either from the home screen or from *Settings > DNS protection*.

> To be able to manage DNS settings, AdGuard apps require establishing a local VPN. It will not route your traffic through any remote servers. Nevertheless, the system will ask you to confirm permission access.

<a id="dns-implementation"></a>
### DNS implementation

<img src="https://cdn.adguard.com/public/Adguard/Blog/ios_native_implementation.PNG" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

This section has two options: AdGuard and Native implementation. Basically, these are two methods of setting up DNS. 

In Native implementation, the DNS is handled by the system and not the app. This means that AdGuard doesn't have to create a local VPN. Sadly, this will not help you circumvent system restrictions and use AdGuard alongside other VPN-based applications — if any VPN is enabled, native DNS is ignored. Consequently, you won't be able to filter traffic locally or to use our brand new [DNS-over-QUIC protocol (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

<a id="dns-servers"></a>
### DNS servers

The first section you'll see on the DNS Protection screen is DNS server. It shows the currently selected DNS server and encryption type. To change either, tap on the button to enter the DNS server screen.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/dns_server_en.png?1" style="border: 1px solid #efefef; max-height: 700px; max-width: 400px; padding: 2px;">

Servers differ by their speed, employed protocol, trustworthiness, logging policy, etc. By default, AdGuard will suggest several DNS servers from among the most popular ones (including AdGuard DNS). Tap on any to change the encryption type (if such option is provided by the server's owner) or to view the server's homepage. We added labels such as `No logging policy`, `Ad blocking`, `Security` to help you make a choice.

In addition, at the bottom of the screen there is an option to add a custom DNS server. It supports regular, DNSCrypt, DNS-over-HTTPS and DNS-over-TLS servers.

<a id="network-settings"></a>
### Network settings

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/Pro/network_settings_en.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 400px; padding: 2px;">

Users can also handle their DNS security on the Network settings screen. *Filter mobile data* and *Filter Wi-Fi* enable or disable DNS protection for respective network types. Further down, at *Wi-Fi exceptions*, you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use [AdGuard Home](https://adguard.com/ru/adguard-home/overview.html)).

<a id="dns-filtering"></a>
### DNS filtering

To get access to this setting, *Advanced mode* has to be enabled from the *General settings* screen. After that, a new section will appear on the DNS protection screen. Tap it to customize your DNS traffic by applying own rules.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/dns_filtering_en.jpg?1" style="border: 1px solid #efefef; max-height: 700px; max-width: 400px; padding: 2px;">

<a id="dns-filters"></a>
#### DNS filters

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://kb.adguard.com/ru/general/dns-filtering-syntax). AdGuard will monitor your DNS traffic and block requests that match one or more rules. You can use filters such as [AdGuard DNS filter](https://kb.adguard.com/ru/general/adguard-ad-filters#domains) or add hosts files as filters. Multiple filters can be added simultaneously. To know how to do it, get acquainted with [an exhaustive manual](https://kb.adguard.com/en/ios/solving-problems/how-to-configure-system-wide-blocking). 

<a id="allowlist-blocklist"></a>
#### Allowlist and Blocklist

On top of DNS filters, you can have targeted impact on DNS filtering by adding single domains to Blocklist or to Allowlist. Blocklist even supports the same DNS syntax, and both of them can be imported and exported, just like Allowlist in Safari content blocking.

<a id="activity"></a>
## Activity
This is the 'information hub' of AdGuard's DNS protection suite. You can quickswitch to it by tapping the third icon in the row at the screen bottom. N.b. this screen is only seen when DNS protection is enabled.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/activity_en.jpg" style="border: 1px solid #efefef; max-height: 700px; max-width: 400px; padding: 2px;">

Here AdGuard displays stats about device's DNS requests, such as total number, number of encrypted requests and average processing time. AdGuard can display the stats for a day, a week, a month, or in total.

Below is the *Recent activity* feed. AdGuard stores the last 1500 DNS requests that have originated on your device and shows their attributes such as protocol type and target domain.

> AdGuard does not send this information anywhere. It is 100% local and does not leave your device.

Tap on any request to view more details. There will also be buttons to add the request to Bloclist/Allowlist in one tap.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/request_info_en.jpg" style="border: 1px solid #efefef; max-height: 700px; max-width: 400px; padding: 2px;">

Above the activity feed, there are *Most active companies*. Aggregated data on the last 1500 requests are shown here.

<a id="statistics"></a>
### Statistics

Aside from the *Activity* screen, you can find global statistics on the home screen and on widgets.

<a id="low-level-settings"></a>
## Low-level settings

<img src="https://cdn.adguard.com/public/Adguard/Blog/ios_lowlevel.PNG" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

To open them, go to *Settings > General > Advanced settings > Low-level settings*. Mind that this section is only visible when Advanced mode is enabled. Some of these settings are better left intact: don't use them unless you know what you are doing or unless it's requested by support. Yet, other settings need further explanation and can be adjusted.

<a id="blockipv6"></a>
### Block IPv6

For any DNS query sent to get an IPv6 address, our app returns an empty response (as if this IPv6 address does not exist). Now there is an option not to return IPv6 addresses. At this point the description of this function becomes too technical: configuring or disabling IPv6 is the exclusive domain of advanced users. Presumably, if you are one of them, it will be good to know that we now have this feature, if not – there is no need to dive into it.

<a id="bootstrap-fallback"></a>
### Bootstrap and Fallback servers

Fallback is a backup DNS server. If you chose a DNS server and something happened to it, a fallback is needed to set the backup DNS server until the main server responds.

With Bootstrap, it’s a little more complicated. For AdGuard for iOS to use a custom secure DNS server, our app needs to get its IP address first. For this purpose, the system DNS is used by default, but sometimes this is not possible for various reasons. In such cases, Bootstrap could be used to get the IP address of the selected secure DNS server. Here are two examples to illustrate when a custom Bootstrap server might help:
1. When a system default DNS server does not return the IP address of a secure DNS server and it is not possible to use a secure one.
2. When our app and third-party VPN are used simultaneously and it is not possible to use System DNS as a Bootstrap.

<a id="other-features"></a>
# Other features

While Safari content blocking and DNS protection are indisputably two major modules of AdGuard/AdGuard Pro, there are some other minor features that don't fall into either of them directly but still can be useful and are worth knowing about.

- **Dark theme**

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/main_screen_en.jpg" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/main_screen_dark_en.jpg" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">
     </div>
</div>

Residing right at the top of **Settings** > **General** screen, this setting allows you to switch between dark and light themes.

- **Widgets**

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/widget_en.jpg" style="border: 1px solid #efefef; max-width: 400px; padding: 2px;">

AdGuard supports widgets that provide quick access to Safari content blocking and DNS protection switches, and also show global requests stats.

- **Invert the Allowlist**

An alternative mode for Safari filtering, it unblocks ads everywhere except for the specified websites from the list. Disabled by default.

- **Reset statistics**

Clears all statistical data, such as number of requests, etc.

- **Advanced mode**

Aside from unlocking **DNS filtering**, it grants access to **Advanced settings**. We don't recommend messing with those, unless you know what you're doing or you have consulted with technical support first.

- **Send feedback**

No matter how hard you try, sometimes things go off the rails. Use this option to contact support, report a missed ad (although we advise to use the Assistant for your own convenience), export logs or to make a feature request.

- **About**

Contains the current version of the app and an assortment of rarely needed options and links.