---
title: Features overview
taxonomy:
    category:
        - docs
---

* [Ad blocking](#ad-blocking)
	* [Filters](#filters)
	* [HTTPS filtering](#https-filtering)
	* [Privacy protection](#privacy-protection)
* [Phishing and malware](#phishing-malware)
* [Control your apps](#app-control)
	* [Apps management](#apps-management)
	* [Filtering log](#filtering-log)
	* [User filters](#user-filter)
* [DNS filtering](#dns-filtering)
	* [DNS blocking](#dns-blocking)
	* [Custom DNS servers](#custom-dns-servers)
	* [DNS user filter](#dns-user-filter)
	* [DNSCrypt](#dnscrypt)
	* [DNS-over-QUIC](#dns-over-quic)
* [Proxy and TOR](#proxy-tor)
* [Other features](#other-features)
	* [Extensions support](#extensions-support)
	* [Compatibility with AdGuard VPN](#vpn-compatibility)

> Disclaimer: AdGuard for Android is not the same thing as AdGuard Content Blocker.

There is often confusion when it comes to installing AdGuard for Android: people want to try out this mobile app for Android, look for it on Google Play, find AdGuard Content Blocker instead, download it and can't understand why it has so little to offer. In fact, we had to leave the app with the truncated functionality to meet Android-imposed restrictions. AdGuard Content Blocker is a free app that does blocks ads in two browsers: the Yandex Browser and Samsung Internet browser.

AdGuard for Android, on the contrary, is a paid full-fledged app and one of our flagship products. It has an extensive list of features both in ad blocking and in privacy protection areas. And now we will go over each of them to help you navigate through our software and put it to a 100% use. 

<a id="ad-blocking"></a>
# Ad blocking

Any ad blocker's main purpose is to block ads and for the majority of software ad blocking algorithms are mostly the same. The process of filtering ads is described [here](https://kb.adguard.com/en/general/how-ad-blocking-works).

<img src="https://cdn.adguard.com/public/Adguard/Blog/android-features/filtering-mechanism.jpg" style="border: 1px solid #efefef; padding: 2px;" />

But most of popular ad blockers are browser extensions, and those apps that are present on the Android market, sadly, are not stellar in their abilities. For example, here's a link to a [comparative article](https://adguard.com/en/blog/adguard-vs-adaway-dns66/) on mobile ad blockers. Give it a read if you'd like to learn the differences between approaches of AdGuard and other ad blockers.

The ad blocking feature is pretty obvious in its concept, but there are some points worthy of a separate mention. Most importantly, unlike many other ad blockers on the market, AdGuard works as a universal filter sifting through your apps traffic and deciding what to do with this or that web request. The whole process is managed by filters — lists of special rules. The program has a default and constantly updated set of filters but you can also add your own filtering rules to this set. 

<a id="filters"></a>
## Filters

The program uses a lot of different filters, both public third-party and our own ones, sorted by language and their purpose. For example, the Annoyances filter is very different from the filter that unblocks "useful ads". 
    
<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/filters.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />
    
Find out more about all the filters available for AdGuard products by reading their descriptions in the app or this [comprehensive article](https://kb.adguard.com/en/general/adguard-ad-filters).

<a id="https-filtering"></a> 
## HTTPS filtering

Nowadays most websites work via HTTPS, the web protocol where the last S letter stands for "secure". Unfortunately, advertisers also use it, this is why [HTTPS filtering](https://kb.adguard.com/en/general/https-filtering) is crucial for a modern ad blocker. 
    
<img src="https://cdn.adguard.com/public/Adguard/Blog/android-features/how-https-works.jpg?1" style="border: 1px solid #efefef; padding: 2px;" />

> To be able to filter HTTPS traffic, AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically during the onboarding process or later via AdGuard settings, and it only required a couple of taps. Unfortunately, on Android 11 automatic certificate installation is no longer available. Now a [manual installation](https://kb.adguard.com/en/android/solving-problems/manual-certificate) is required.
 
<a id="privacy-protection"></a>   
## Privacy protection

Did you know that even if you don't use specific apps like Facebook, it doesn't stop advertising and media giants from [collecting information about you](https://adguard.com/en/blog/one-does-not-simply-delete-facebook/)?

<img src="https://cdn.adguard.com/public/Adguard/Blog/android-features/FB-research.jpg" style="border: 0px solid #efefef; padding: 2px;" />

Many websites also gather information about their visitors, such as their IP addresses, information about browser and operating system, screen resolution, and even what page the user navigated from. The more important it is to have a tool that will protect you from being tracked on the Internet. AdGuard for Android includes several filters created specifically for this purpose: AdGuard Tracking Protection filter, EasyPrivacy, and others.

AdGuard Tracking Protection filter protects your personal data from automatic data gathering systems. We strongly recommend having this or similar filter on if you care about your online privacy. There are other functions in AdGuard for Android that indirectly help you keep your online privacy. DNSCrypt is one of those, and we will get to it soon enough. 

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/privacy-protection.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />

We keep emphasising the importance of not being tracked because tracking is indeed the new cyber plague, and we certainly don't appreciate users' data being used [this](https://adguard.com/en/blog/accuweather_geo/) or [that](https://adguard.com/en/blog/one-does-not-simply-delete-facebook/) way.

<a id="phishing-malware"></a>
# Phishing and malware

The Internet is a pretty dangerous place where your device can be attacked by viruses, whereas your personal or financial information can be stolen. Such terms as malware or phishing have become commonplace.

Phishing is a fraudulent online practice aimed at obtaining sensitive information like usernames, passwords, credit card details and such from internet users. This form of fraud, effected through spoof emailing and fake websites posing as trusted mediums like banks, social services etc., is causing more financial damage every year. As for malware (malicious software), it is as the name suggests — any type of software designed with the intent to damage the personal computer or other device it gets into. What once began as a prank now is a tool to steal confidential information from users and businesses.

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/browsing-security.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />

Fortunately, AdGuard's Browsing Security module protects you from visiting phishing and malicious websites. It also warns you about malware being downloaded onto your device. 
> But note that AdGuard for Android is not an antivirus. It will neither stop the actual download of a virus nor delete the already existing ones. For the complete protection of your device, we recommend using AdGuard in tandem with a dedicated AV tool.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/Android/adguard-android-features-review/browsing_security_warning_en.png" style="border: 1px solid #efefef; max-width: 300px; padding: 2px;" />

At the same time, we'd like to emphasize that your personal data is *not* transferred anywhere, and AdGuard does *not* know which websites you are visiting. The security check is not performed against an open web address (URL) but through hash prefixes (hash is a certain data structure that renders unambiguous each address added to the base). However, you can send us information on the websites you visit to improve the database, if you opt to. [Learn more about AdGuard's phishing and malware protection](https://kb.adguard.com/en/general/how-malware-protection-works).

<a id="app-control"></a> 
# Control your apps

One of the main stated purposes of AdGuard for Android is to give users back the full control over their devices. With AdGuard, you can see comprehensive information about all web requests coming through your device. No app will be able to go online without you knowing. 

<a id="apps-management"></a> 
## Apps management
    
In the Apps Management module you can choose which apps should have Wi-Fi or mobile data access, which will be filtered by AdGuard and which not. You can also change the background Internet access rules for your apps when the screen is locked. These settings can be applied to all installed apps at once or on the individual basis.
    
<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/chrome.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />
    
You can find extra settings in the upper right corner of the Apps Management screen. They will help you fine-tune AdGuard for Android to your preference. For example, you can make the common settings applicable to each and every app, or select the apps which need a more detailed approach. 

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/apps-management.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />

All the icons you will see on the screen are clickable, and by tapping on them you will open a screen showing app-specific traffic to help you make more informed decisions. As can be seen, AdGuard is of help not only in the ad filtering, privacy protection and online security departments, it can aid your device function better, saving battery life and traffic as well.

<a id=" filtering-log"></a> 
## Filtering log

In the Filtering Log, you can directly observe all web requests made by browsers and apps. Thanks to this feature, you have full control over all processes on your device.  
    
<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/filtering-log.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />
    
You can block each request right there in one tap (or unblock it, if the request is already blocked). There's also detailed information about each request, although it is mostly aimed at the advanced users, particularly those who create their own filtering rules. We will be elaborating on it just a bit further below.

<a id="user-filters"></a> 
## User rules

As mentioned above, AdGuard for Android uses a set of filters to block ads. And then there is the User rules section that allows you to create and adjust your own filtering rules. It is located in the Settings tab of the AdGuard menu.

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/user-rules.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />

When you first install AdGuard, the User rules section is empty. To fill it with rules, you will need to understand the basics of the rules syntax. Don't worry if you are not familiar with it, here's [a good place to start](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters) should you feel an urge to delve deeper into custom rules creation.
    
> Tip: use the Import feature to upload your favorite filter to the User rules. But be careful, it will overwrite any rules that are currently added there. 

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/log-details.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />

By the way, whenever you use Filtering Log to block anything, a corresponding rule will appear in User rules, so use it if you ever want to undo the blocking. And generally speaking, Filtering Log and User rules go together particularly well: you can use the former to monitor requests in order to build a correct rule for the User rules.

<a id="dns-filtering"></a> 
# DNS filtering

[DNS filtering](https://kb.adguard.com/en/general/dns-filtering-android) is one of the most effective ways to protect your device from ads and phishing.
    
A bit of a theory refresher: DNS stands for 'Domain name system', and its purpose is to translate domain names into something browsers can understand, i.e. IP addresses. So, each time you go to a website, your browser sends a DNS request to a special server, usually determined by your ISP. That server either redirects the request to another (upstream) server or replies with an IP address. If you use a special DNS server instead of the default one, you can use it to send bad requests to the "void" instead of the correct IP address.

DNS filtering has its own separate tab within the AdGuard for Android app home screen. Here you can choose which type of DNS you wish to use (it can be either regular DNS or high security DNS, also known as DNSCrypt - we will get to that later on) as well as enable DNS-level blocking.

<a id="dns-blocking"></a> 
## DNS blocking
    
What needs to be taken into account is that DNS blocking is more of an additional feature, which has several nuances. Most of them are mentioned above in the Knowledge Base article.
    
<img src="https://cdn.adguard.com/public/Adguard/Blog/android-features/DNS-mechanism.jpg" style="border: 1px solid #efefef; padding: 2px;" />

How exactly does AdGuard block DNS requests? It has a special DNS filter which contains a large list of ad and tracker domains, which it uses in conjunction with User rules to recognize 'bad' requests. Every request is checked against this filter, and if there's a hit, instead of forwarding it to the DNS server, it is being rerouted to a 'blackhole'.

The simplicity of this approach is both a benefit and a disavantage. The main advantage of this approach is that it's both battery life friendly and traffic-saving. Once a domain is blocked, it won't be requested again within an hour. The disadvantage would be the "roughness" of this method: specific URLs can't be blocked, only whole domains. It can sometimes lead to breaking of some websites.
    
<img src="https://cdn.adguard.com/public/Adguard/Blog/android-features/hosts-blocker-vs-adguard.jpg" style="border: 1px solid #efefef; padding: 2px;" />

Most ad blockers for Android [use this principle](https://adguard.com/en/blog/adguard-vs-adaway-dns66/), but what is pretty much the whole app in their case is only one of the (many) features for AdGuard.

<a id="custom-dns-servers"></a> 
## Custom DNS servers

But AdGuard for Android "DNS package" does not end just there. One of the useful perks is an option to select *absolutely any* DNS server to use. At your service is a list consisting of dozens of servers to choose from, from our own AdGuard DNS servers to other popular providers like Google DNS, Cloudflare and others. On top of that, if your favorite server is not in the default list, you still can enter its address manually and use it anyway.

There are several asons to use a custom DNS server instead of one offered by your ISP by default. Some servers are faster, some provide ad blocking or parental control solutions, some enhance your privacy etc.

<a id="dns-user-filter"></a> 
## DNS user filter

It is very much like the regular User filter, but for DNS requests.

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/dns-user-filter.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />

You'll find DNS user filter at *Settings > DNS Filtering > DNS Requests blocking*. DNS User filter supports two types of syntax: a limited portion of AdGuard syntax and "hosts" syntax. You can read more about it in our [Knowledge Base](https://kb.adguard.com/en/general/dns-filtering-syntax).
 
<a id="custom-dns-filters"></a>     
## Custom DNS filters

You can add any custom DNS filters or custom hosts lists. A useful feature considering how popular hosts lists are among Internet users.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/Android/v3.2/dnsfilter.gif" style="border: 1px solid #efefef; max-width: 450px; padding: 2px;">
    
This option is available on the *Settings > DNS Filtering > DNS Requests blocking* screen.
    
<a id="dnscrypt"></a>     
### DNSCrypt

If you use regular plain DNS protocol, you are at risk of your DNS requests being intercepted, eavesdropped on and/or altered. [Experiments](https://adguard.com/en/blog/dns-track-you/) show that the DNS tracking can even be used to construct a 'profile of interests' for any user. AdGuard supports [DNSCrypt](https://kb.adguard.com/en/general/dns-filtering-android#what-is-dnscrypt-and-why-is-it-important) — a special protocol that encrypts communication with the DNS server, thus preventing tampering and tracking by third parties, including your ISP.

<img src="https://cdn.adguard.com/public/Adguard/Blog/android-features/DNSCrypt.jpg" style="border: 1px solid #efefef; padding: 2px;" />
    
If you care about your online privacy, we strongly recommend using DNSCrypt. Conveniently, there's a whole list of DNSCrypt servers available in AdGuard for Android!

<a id="dns-over-quic"></a>   
### DNS-over-QUIC
DNS-over-QUIC (DoQ) is a rather new encryption protocol and AdGuard DNS is the first public resolver that supports it. Unlike DoH and DoT, it uses QUIC as a transport protocol and finally brings DNS back to its roots — working over UDP. It brings all the good things that QUIC has to offer — out-of-the-box encryption, reduced connection times, better performance when data packets are lost. Also, QUIC is supposed to be a transport-level protocol and there are no risks of metadata leaks that could happen with DoH.

To learn more about DNS-over-QUIC, check out [this article](https://adguard.com/en/blog/dns-over-quic.html) dedicated entirely to it.
    
To enable DoQ in AdGuard for Android, perform the following steps:

* Open the app, then open the side menu
* Go to *Settings > DNS Filtering* and enable it
* Select any of AdGuard DNS servers from the list of available servers
* Under *Server type* choose *DNS-over-QUIC* 

<a id="proxy-tor"></a> 
# Proxy and TOR

A proxy server is basically another computer serving as a hub that processes your internet requests. You can set up AdGuard to route all your device's traffic through any proxy — and you'll be able to configure the whole thing right inside the app. If you need an instruction on how to set up a proxy, look it u [here](https://kb.adguard.com/en/android/solving-problems/adguard-outbound-proxy). 

> Some popular VPN providers offer an alternative way to use their service as a proxy. This can be used to run them alongside AdGuard in local VPN mode.

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/proxy-settings.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />
    
Contrary to a popular opinion, using a proxy server is not just about bypassing access restriction to geoblocked resources. It is about security! If you are using a proxy server, intruders won't know what websites you visit. You can also use AdGuard along with the anonymity network TOR (we have already integrated AdGuard with Tor for your convenience!). Here is a [Wiki article](https://en.wikipedia.org/wiki/Tor_(anonymity_network)) where the whole concept of TOR network is nicely explained in case you wish to find out more.  

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/orbot.png" style="border: 0px solid #efefef; max-width: 300px; padding: 2px;" />

Be aware that you will need to download and install the Orbot app — it will help the integration with TOR go smoothly. 

<a id="other-features"></a> 
# Other features

Is there anything left that we haven't covered yet? Indeed, there are a few things we'd like to mention. They might not be key features of the app, but nevertheless they deserve your attention:
    
<a id="extensions-support"></a>     
## Extensions support

Userscripts (we also call them extensions) are basically mini-programs written in Javascript that extend the functionality of one or more websites. Usually, you'd need some special userscript manager to add them, and it's traditionally more of a desktop thing. But with AdGuard everything is possible! Now you can add any userscripts by URL or load them from a file, and AdGuard will serve as a userscript manager and take care of the rest. Go to *Settings > Extensions* to enable some of the pre-installed extensions or to add custom userscripts.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/Android/v3.2/enexten.gif" style="border: 1px solid #efefef; max-width: 450px; padding: 2px;">

By the way, you can tap on any added userscript to see more details, and to reinstall or delete it.
    
There are too many features to describe them all in detail, so let me simply list them here:

* When you visit certain screens for the first time, there will appear tooltips that describe the purpose of that screen and its main features
* You can export or import AdGuard settings (for a faster switch between the settings profiles or to transfer your profile between different devices)
* Select an update channel, i.e. the mode in which the application receives its updates (stable release channel, less stable beta channel and raw ["nightly" channel](https://adguard.com/en/blog/nightly-builds/))
* By tapping on a little battery icon on the main screen of the app you will get to the "Battery Usage" screen. System battery stats [are often wrong](https://kb.adguard.com/ут/android/solving-problems/battery), so we decided to have our own, one that would reflect the real state of things
* You can change the app's language in the General Settings tab. By the way, AdGuard is continuously translated to more and more languages — and largely thanks to volunteer [contributions by AdGuard users](https://kb.adguard.com/en/general/adguard-translations)!

<a id="vpn-compatibility"></a> 
## Compatibility with AdGuard VPN

The best kind of compatibility is when you install two apps and they just start working together. Presuming you already have AdGuard ad blocker installed, just download AdGuard VPN from Play Store (you can get there right from the ad blocker app, there's an item in General settings).

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-5/settings-en.gif" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

Both apps will detect each other and do everything that's needed for smooth joint work. All that will be left for you is to enjoy both ad-free Internet and all the benefits of a VPN. By the way, it works the other way around just as well: install AdGuard ad blocker on top of an already-running AdGuard VPN and you're good.

If you'd like to disable Compatibility Mode for any reason, it's very simple to do so from AdGuard ad blocker settings, just toggle the switch. Additionally, you can add AdGuard ad blocker and AdGuard VPN tiles to your device's notification bar and toggle them in one tap at your own will  — thanks to Compatibility Mode the configuration will change immediately and silently.

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-5/tile-en.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">