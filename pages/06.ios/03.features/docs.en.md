---
title: Features
published: true
taxonomy:
    category:
        - docs
---

AdGuard for iOS is an efficient and convenient ad blocker developed for Apple mobile devices. It supports more than 50 filters, including the special filter for Russian web segment, and is available in two versions. The basic version is free on App Store, and allows traffic filtering in the Safari mobile browser only. The Pro version requires a paid license; it blocks ads in other apps and has a whole number of [additional features](#pro).

### Ad blocking
AdGuard for iOS blocks all kinds of ads, including banners, video ads, and popup windows. The app utilizes more than 50 filters, both its own and popular Adblock ones, such as EasyList, EasyPrivacy, Fanboys Annoyances, and Malware Domains.

### Regional filters
AdGuard for iOS allows the use of various language-specific filters to block ads on foreign language websites. In addition, users can create their own filters with a personalized set of rules.

### Blocking of trackers and social widgets
Many websites gather different kinds of information about their visitors: their IP address, the installed browser and OS, screen resolution, and even the page where the user has come from. Special AdGuard filters block all statistics gathering resources and remove social widgets from web pages. The Share and Tweet buttons will only appear where you really need them.

### Traffic saving
AdGuard for iOS removes all the unnecessary content from web pages, allowing for much shorter loading time and saving your traffic noticeably.

### Whitelisting
You can fine-tune ad filtering by adding particular websites to the list of exceptions, which disables ad blocking for your trusted domains.


## AdGuard Pro Features <a id="pro"></a>
AdGuard Pro filters all kinds of ads not only in Safari, but in many other iOS apps. Apart from its basic functions available with the free AdGuard version, AdGuard Pro opens numerous additional possibilities for its users. To use any features of the app, simply slide the Status switch to the right in the PRO section of the AdGuard Pro settings. If the main switch is off, filtering will be unavailable.

### System-wide filtering
System-wide filtering allows to filter traffic in all apps and browsers installed on your device, while not requiring additional setup of any DNS services. This mode utilizes the Domain Names Filter as well as user-defined blacklist and whitelist settings. You don’t have to enable the Domain Names Filter manually in the Filters section – if the system-wide filtering is enabled, it will turn on automatically.
The system-wide filtering mode uses a local VPN to block ads in browsers and other apps. Your traffic isn’t transferred to any third-party servers as the filtering occurs right on your device. System-wide filtering can be fine-tuned with blacklist and whitelist, so that you can enable or disable blocking at your preference.

### Filtering log
Filtering log is another useful feature of AdGuard Pro. The log contains the full list of AdGuard-processed DNS requests, from which you can choose any single one and blacklist it on the spot, or whitelist a previously blocked one. This feature allows for wide choice of options to adjust the blacklist and whitelist as well as lets you track all requests in real time.

### DNS Filtering
Among other functions, AdGuard Pro has a special mode: DNS Filtering. It allows to set any DNS servers as default ones and quickly switch between them. If you want, you can use public Google DNS servers instead of those suggested by AdGuard, set up [OpenDNS](https://www.opendns.com), or type in any other addresses, e.g., those from your provider. Use this mode in case system-wide filtering is unavailable for any reason – for example, when your device is running another app requiring VPN connection.

DNS servers that can be utilized in the DNS Filtering mode include AdGuard addresses. Their use allows to block ads, counters, and phishing websites in various iOS apps and browsers, not only in Safari, just like system-wide filtering would. More information regarding AdGuard DNS [is here](https://kb.adguard.com/en/dns/overview). You can quickly change DNS server settings and switch between different addresses as needed.

While using AdGuard DNS, users also have access to the filtering log; however, it does not affect traffic processing in this mode – the blacklist and whitelist are only available in the system-wide filtering mode. If DNS Filtering is enabled, the user is only capable of tracking current requests in the filtering log.

### Family Mode
This is one of the AdGuard DNS setting options. Family Mode protects your children from adult web content, all the while perfectly filtering ads and malicious sites. In addition, your browser will use the safe search function that prevents the search engine from coming up with adult websites in search results. Family Mode can be enabled in AdGuard DNS if you use DNS addresses provided by AdGuard. More detailed information regarding setup of Family Mode in AdGuard DNS is provided [in this section](http://kb.adguard.com/en/dns/setup-guide) of our knowledge base.

### Limitations
Unfortunately, AdGuard Pro is currently incapable of blocking ads in a number of applications, the list of which is provided below:

* YouTube
* Facebook
* Twitter
* Instagram

As AdGuard Pro utilizes a local VPN, certain compatibility issues may arise with other VPN-dependent apps. The list of such apps is as follows:

* ExpressVPN
* Shadowrocket
* HotSpot Shield

You can see the up-to-date list of compatible and incompatible VPN-dependent apps here: [https://github.com/AdguardTeam/AdguardForiOS/issues/162](https://github.com/AdguardTeam/AdguardForiOS/issues/162).
Additionally, AdGuard is unable to completely block ads while working in the Moscow subway WiFi network.
