---
title: 'How ad blocking works'
taxonomy:
    category:
        - docs
visible: true
---

*   [Introduction](#introduction)
*   [General principle](#general)
*   [Filter lists](#filter-lists)
*   [Types of filtering rules](#types-filtering)
    *   [Basic filtering rules](#basic)
    *   [Cosmetic filtering rules](#cosmetic)
    *   [HTML filtering rules](#html)

<a name="introduction"></a>

## Introduction

There are many different AdGuard ad blocker products for various platforms, each with their own unique features. But what unites them all is that they block ads and trackers. This article describes how ad blocking works from the inside. 

> We don't cover DNS filtering here. It's a different way of blocking ads, with its own advantages and disadvantages. Follow this link to [learn more about DNS filtering](https://kb.adguard.com/en/general/dns-filtering).

<a name="general"></a>

## General principle

At the core of any ad blocker lie filter lists, also called filters. Filters are literally lists of rules written in a special syntax. Ad blockers can understand this complex syntax. They interpret filtering rules and perform actions on web traffic based on what the rules tell them to do: block specific elements, alter web pages in certain ways, etc.

<img src="https://cdn.adguard.com/public/Adguard/Blog/manifestv3/adblockingworks.png" style="max-width: 750px; border: 1px solid #efefef;">

<a name="filter-lists"></a>

## Filter lists

To better understand ad blocking, it's important to know the underlying principles of how filters work.

Filtering rules, which filters consist of, aren't created automatically. They are a product of filter maintainers' work, both as professionals and as volunteers. They use browsers' developer consoles and other tools (like AdGuard's filtering log) to determine what rules would block a particular ad or tracker. This is a very simplified description of the process, as some ads are especially hard to block and require multiple rules, multiple iterations, and the use of complex syntax.

And even when a rule finally gets added to the filter, it doesn't mean that it stays there forever. Ads change, ways to serve the same ads on the same websites change, and so filter rules have to change too. Sometimes rules get obsolete, sometimes a new ad appears, and sometimes a new filtering rule is needed to block the same ad. Filters are often maintained by a single person, but even for a team of maintainers, it's impossible to constantly monitor the entire web. This is why many ad blockers have tools to help users easily report any filter-related issues they encounter.

<img src="https://cdn.adguard.com/public/Adguard/Blog/manifestv3/filtersupdates.png" style="max-width: 750px; border: 1px solid #efefef;">

AdGuard users [have access to a special web reporting tool](https://reports.adguard.com/new_issue.html). Thanks to user complaints, filter developers can focus on correcting their filter lists and not on scouring the Internet for new and old unblocked ads.

Filters can do more than just block ads. There are filters that block tracking, social media widgets, and annoyances like cookie notices, etc. Different users may choose different combinations of filters to match their personal preferences. There are websites like [filterlists.com](https://filterlists.com/) that are dedicated to filter lists and have a huge database.

> We develop and maintain [our own set of filter lists](https://kb.adguard.com/en/general/adguard-ad-filters) that can be used with AdGuard or other ad blockers.


<a name="types-filtering"></a>

## Types of filtering rules

There are many types of filtering rules that serve different purposes. Depending on the ad blocker you use, and especially on your OS, certain types of rules may not be supported.

<a name="basic"></a>

### Basic filtering rules

To be displayed on a web page or in an app, the ad has to be loaded from a server first. To do so, the browser or the app needs to send a web request. The most basic way of preventing an ad from appearing on your screen is to block this request so it never reaches the server, and thus there's no reply.

Basically, all AdGuard ad blocker products can block web requests according to the active filter rules. This method is very effective at stopping the ad, but it has some drawbacks. The most obvious one is that whatever place the ad was taking up will be left empty or occupied by an ad leftover.

<a name="cosmetic"></a>

### Cosmetic filtering rules

Every web page has a DOM ("document object model"), which is basically an HTML document that contains the page's structure and all its elements. Ads on the page are also elements and therefore reflected in the DOM. Ad blockers can remove parts of the DOM, and filtering rules help them understand which parts are ads and should be removed, and which shouldn't be messed with.

This method allows you to avoid the whitespace and ad leftovers mentioned above, but also perform other, more complicated tasks.

<a name="html"></a>

### HTML filtering rules

In most cases, the aforementioned basic and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML code of the page itself before it is loaded. This is when you need filtering rules for HTML content. These rules allow us to indicate the HTML elements to be cut out before the browser even loads the page.

This kind of rule is quite complicated and demands that the ad blocker possess certain rights, so not all platforms support it. Such rules work only in the AdGuard apps for Windows, Mac, and Android, and for the AdGuard Firefox add-on.

> There are more types of filtering rules, but they require even more technical knowledge to understand how they operate. If you're interested, [you can find the exhaustive guide on filtering rules in the linked article](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters).
