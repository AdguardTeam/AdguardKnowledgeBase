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

AdGuard has many ad-blocking products for various platforms, and each product has its own unique features. But what unites them all is that they block ads and trackers. This article describes how ad blocking works from the inside.

> We don't cover DNS filtering here. It's a different way of blocking ads, with its own advantages and disadvantages. Follow this link to [learn more about DNS filtering](https://kb.adguard.com/en/general/dns-filtering).

<a name="general"></a>

## General principle

Filter lists, also called filters, lie at the core of any ad blocker. Filters are literally lists of rules written in a special syntax. Ad blockers can understand this complex syntax. They interpret filtering rules and perform actions on web traffic based on what the rules tell them to do: block specific elements, alter web pages in certain ways, etc.

<img src="https://cdn.adguard.com/public/Adguard/Blog/manifestv3/adblockingworks.png" style="max-width: 750px; border: 1px solid #efefef;">

<a name="filter-lists"></a>

## Filter lists

To better understand ad blocking, it's important to know the underlying principles of how filters work.

Filtering rules that make up filters are not created automatically. They are developed by filter maintainers, including professionals and volunteers, who use browser developer consoles and other tools (such as the AdGuard's filtering log) to determine which rules will block a particular ad or tracker. This description of the process is very simplistic – some ads are particularly hard to block and require multiple rules, multiple iterations, and the use of complex syntax.

And even when a rule finally gets added to a filter, it doesn't mean that it stays there forever. Ads change, ways to serve the same ads on the same websites change, and the filter rules have to change, too. Sometimes rules become obsolete, a new ad appears, or a new filtering rule is needed to block the same ad. Filters are often maintained by one person, but even for a team of maintainers, it's impossible to constantly monitor the entire web. That's why many ad blockers have tools to help users easily report any filter-related issues they encounter.

<img src="https://cdn.adguard.com/public/Adguard/Blog/manifestv3/filtersupdates.png" style="max-width: 750px; border: 1px solid #efefef;">

AdGuard users [have access to a special web reporting tool](https://reports.adguard.com/new_issue.html). Thanks to user complaints, filter developers can focus on correcting their filter lists and not on scouring the Internet for new and old unblocked ads.

Filters can do more than just block ads. There are filters that block tracking, social media widgets, and annoyances such as cookie notices. Different users may choose different combinations of filters to match their personal preferences. There are websites like [filterlists.com](https://filterlists.com/) that are dedicated to filter lists and have huge databases.

> We develop and maintain [our own set of filter lists](https://kb.adguard.com/en/general/adguard-ad-filters) that can be used with AdGuard or other ad blockers.


<a name="types-filtering"></a>

## Types of filtering rules

There are many types of filtering rules that serve different purposes. Depending on the ad blocker you use, and especially on your OS, some types of rules may not be supported.

<a name="basic"></a>

### Basic filtering rules

To be displayed on a web page or in an app, the ad has to be loaded from a server first. To do so, the browser or the app needs to send a web request. The most basic way of preventing an ad from appearing on your screen is to block this request so it never reaches the server, and thus there's no reply.

Basically, all AdGuard ad blocker products can block web requests according to the active filter rules. This method is very effective at stopping the ad, but it has some drawbacks. The most obvious one is: whatever place an ad was taking up will be left empty or occupied by an ad leftover.

<a name="cosmetic"></a>

### Cosmetic filtering rules

Every web page has a Document Object Model (DOM), an HTML document containing the structure and elements of this page. As ads are also page elements, they get recorded in the DOM. Ad blockers can remove parts of the DOM, while filtering rules help them understand which parts are ads and should be removed, and which parts should be left intact.

This method allows you to avoid above-mentioned blank spaces and ad leftovers, as well as perform other more complicated tasks.

<a name="html"></a>

### HTML filtering rules

In most cases, the above-mentioned basic and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML code of the page itself before it is loaded. This is when you need filtering rules for HTML content. This rule allows us to indicate the HTML elements to be cut out before the browser even loads the page.

This kind of rule is quite complicated and demands that the ad blocker possess certain rights, so not all platforms support it. Such rules work only in the AdGuard apps for Windows, Mac, and Android, and for the AdGuard Firefox add-on.

> There are more types of filtering rules, but they require even more technical knowledge to understand how they operate. If you're interested, [you can find the exhaustive guide on filtering rules in the linked article](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters).
