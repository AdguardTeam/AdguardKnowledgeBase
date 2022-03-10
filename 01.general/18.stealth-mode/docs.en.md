---
title: 'Stealth Mode'
taxonomy:
    category:
        - docs
visible: true
---

* [General](#general)
* [Tracking methods](#methods)
* [Browser API](#browser-api)
* [Miscellaneous](#miscellaneous)

Many websites gather information about their visitors, such as their IP addresses, information about the browser and operating system installed, screen resolution, and even what page the user was redirected from. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or "recognize" you upon your next visit. Stealth Mode safeguards your personal information from such data and statistics-gathering systems.

You can flexibly adjust the work of Stealth Mode: for instance, you can prohibit the website from receiving the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, turn off browser geolocation sharing that can be used to track your whereabouts, hide your real IP-address or even indicate one of your choice.

Below we will list and describe the main features and options you can manage in the "Stealth Mode" settings, which are divided into four groups: general, tracking methods, browser API, and miscellaneous. 

<a name="general"></a>

### General

**Hide your search queries**

When you proceed to the website from Google, Yahoo, or any other search engine, this option hides the search query you used to find it.

**Send Do-Not-Track header**

It sends a Do-Not-Track (DNT) HTTP header to queried websites that requires web apps to disable tracking of your activity.

**Remove X-Client-Data header from HTTP requests**

It forbids Google Chrome from sending its version and modification information with requests to Google domains (including Double Click and Google Analytics).

**Strip tracking parameters from URLs**

If you enable this option, AdGuard will strip tracking parameters like utm_* and fb_ref from pages’ URLs.

<a name="methods"></a>

### Tracking methods

**Self-destructing third-party cookies**

Websites use cookies to store your information and preferences, such as the language you selected, your location, or the list of items in your shopping cart. When you get back to the site, your browser sends back the cookies belonging to that website, which allows it to "recall" your data.

Third-party cookies are those implemented by a website that is different from the one you are browsing at the moment. For example, cnn.com may have a Facebook "Like" widget on its homepage. This widget will implement a cookie that may be read by Facebook later on. Some advertisers use such cookies to track what other sites you visit where their ads are posted.

Put a time period (in minutes) at the end of which all third-party cookies will be destroyed. Set the timer to 0 in order to block them completely.

**Self-destructing first-party cookies**

We do not recommend enabling this option as it may severely interfere with the work of certain sites.
Put a time period (in minutes) at the end of which all cookies will be destroyed. Set the timer to 0 in order to block them completely.

**Disable cache for third-party requests**

When the browser addresses a page, the server assigns it an ETag, which the browser then uses to cache the contents. Upon subsequent requests, it sends the ETag to the corresponding server, thus letting it learn the visitor’s identity. While the site files are cached, the ETag is sent every time your browser addresses this site. If the site has content embedded from another server (e.g., an image or iframe), that server will also be able to track your activities without your cognizance.

**Block third-party Authorization header**

"Authorization" header value is cached by the browser, and then is sent alongside every request to that domain. It means that it can be used for tracking purposes just like cookies.
    
<a name="browser-api"></a>

### Browser API

**Block WebRTC**

WebRTC (Web Real-Time Communication) is a technology that allows direct streaming of data between browsers and apps. It can let others know your true IP address, even if you use a proxy or VPN.
Enabling this option can disrupt the work of certain browser applications, such as messengers, chats, cinemas, or games.

**Block Push API**

The Push API enables servers to send messages to web applications regardless of the activity status of your browser. Thus, you may see notifications from various websites even if your browser is hidden in the tray or not launched. Enable this option to block the browser's Push API completely.

**Block Location API**

Enabling this option will prevent the browser from sending GPS data that could be used to determine your location, modify your search results, or otherwise influence your web experience.

**Block Flash**

The Flash Player plugin has become increasingly vulnerable to online threats like viruses and hackers and can also have a significant negative impact on the loading times of websites. When this setting is on, AdGuard blocks browsers' ability to detect components (like plugins and ActiveXObject objects) that allow Flash to display content. This effectively means that browsers are unable to support Flash.

**Block Java**

Some websites and web services still use the old technology of supporting Java plugins. The Java plugin API, which is the basis of Java plugins, has serious security issues. For security purposes, you can disable such plugins. Nevertheless, even if you decide to use the "Block Java" option, JavaScript will still be enabled.

<a name="miscellaneous"></a>

### Miscellaneous


**Hide Referer from third-parties**

Referer is an HTTP header used in browser-to-server requests. It contains the URL of the request source. If you advance from one page to another, the referer will save the URL of the initial page. The server is often equipped with software that analyzes the referer and extracts various pieces of information from it. Enabling this option hides the current website from third-party sites by changing the HTTP header.
You can also set the referrer of your choice by typing it into the Custom Referrer field. Leave the field empty to use the default referer.

**Hide your User-Agent **

When you visit a website, your browser sends the server its information. It looks like a text line that is part of an HTTP request that begins with "User-Agent:". It usually includes the name and version of the browser, the operating system, and language settings. We strip User-Agent from identifying information so that advertisers can't obtain it.

You can also set the user agent of your choice by typing it into the Custom User-Agent field. Leave the field empty to use the default user agent.

**Hide your IP address**

Stealth Mode cannot hide your IP address. However, we can conceal it so that websites you visit will take you to a proxy server. Sometimes, it helps, and websites ignore your real IP.
You can set a random IP that you would like to be perceived as yours by simply typing it into the corresponding field. Leave the field empty to use the default IP address.
