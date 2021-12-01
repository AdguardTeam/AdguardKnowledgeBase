---
title: 'How to create your own ad filters'
taxonomy:
    category:
        - docs
visible: true
---

* [Introduction](#introduction)
* [Comments](#comments)
* [Examples](#examples)
    * [Example: Blocking by domain name](#example-blocking-by-domain-name)
    * [Example: Blocking exact address](#example-blocking-exact-address)
    * [Example: Basic rule modifiers](#example-basic-rule-modifiers)
    * [Example: Unblocking an address](#example-unblocking-an-address)
    * [Example: Unblocking everything on a website](#example-unblocking-website)
    * [Example: Cosmetic rule](#example-cosmetic-rule)
* [Basic rules](#basic-rules)
    * [Basic rules syntax](#basic-rules-syntax)
    * [Special characters](#basic-rules-special-characters)
    * [Regular expressions support](#regexp-support)
    * [Wildcard support for TLD](#wildcard-for-tld)
    * [Basic rules examples](#basic-rules-examples)
    * [Modifiers](#basic-rules-modifiers)
        * [Basic modifiers](#basic-rules-common-modifiers)
            * [$domain](#domain-modifier)
            * [$third-party](#third-party-modifier)
            * [$popup](#popup-modifier)
            * [$match-case](#match-case-modifier)
        * [Content type modifiers](#content-type-modifiers)
            * [Content type modifiers examples](#content-type-modifiers-examples)
            * [$document](#document-modifier)
            * [$image](#image-modifier)
            * [$stylesheet](#stylesheet-modifier)
            * [$script](#script-modifier)
            * [$object](#object-modifier)
            * [$object-subrequest](#object-subrequest-modifier)
            * [$font](#font-modifier)
            * [$media](#media-modifier)
            * [$subdocument](#subdocument-modifier)
            * [$ping](#ping-modifier)
            * [$xmlhttprequest](#xmlhttprequest-modifier)
            * [$websocket](#websocket-modifier)
            * [$webrtc](#webrtc-modifier)
            * [$other](#other-modifier)
        * [Exception rules modifiers](#exceptions-modifiers)
            * [$elemhide](#elemhide-modifier)
            * [$content](#content-modifier)
            * [$jsinject](#jsinject-modifier)
            * [$urlblock](#urlblock-modifier)
            * [$extension](#extension-modifier)
            * [$stealth](#stealth-modifier)
            * [Generic rules](#generic-rules)
                * [$generichide](#generichide-modifier)
                * [$genericblock](#genericblock-modifier)
            * [$specifichide](#specifichide-modifier)
    * [Advanced capabilites](#advanced-modifiers)
        * [$removeparam](#removeparam-modifier)
        * [$important](#important-modifier)
        * [$badfilter](#badfilter-modifier)
        * [$empty](#empty-modifier)
        * [$mp4](#mp4-modifier)
        * [$replace](#replace-modifier)
        * [$csp](#csp-modifier)
        * [$cookie](#cookie-modifier)
        * [$network](#network-modifier)
        * [$app](#app-modifier)
        * [$redirect](#redirect-modifier)
        * [$redirect-rule](#redirect-rule-modifier)
        * [$denyallow](#denyallow-modifier)
        * [noop](#noop-modifier)
        * [$removeheader](#removeheader-modifier)
* [Non-basic rules](#non-basic-rules)
    * [Cosmetic rules](#cosmetic-rules)
        * [Element hiding rules](#cosmetic-elemhide-rules)
        * [CSS rules](#cosmetic-css-rules)
        * [Extended CSS selectors](#extended-css-selectors)
            * [Pseudo-class `:has()`](#extended-css-has)
            * [Pseudo-class `:if-not()`](#extended-css-has)
            * [Pseudo-class `:contains()`](#extended-css-contains)
            * [Pseudo-class `:matches-css()`](#extended-css-matches-css)
            * [Pseudo-class `:matches-attr()`](#extended-css-matches-attr)
            * [Pseudo-class `:matches-property()`](#extended-css-matches-property)
            * [Pseudo-class `:xpath()`](#extended-css-xpath)
            * [Pseudo-class `:nth-ancestor()`](#extended-css-nth-ancestor)
            * [Pseudo-class `:upward()`](#extended-css-upward)
            * [Pseudo-class `:remove()` and pseudo-property `remove`](#remove-pseudos)
        * [Cosmetic rules priority](#cosmetic-rules-priority)
    * [HTML filtering rules](#html-filtering-rules)
        * [Syntax](#html-filtering-rules-syntax)
        * [Special attributes](#html-filtering-rules-attributes)
           * [tag-content](#tag-content-attribute)
           * [wildcard](#wildcard-attribute)
           * [max-length](#max-length-attribute)
           * [min-length](#min-length-attribute)
        * [Exceptions](#html-filtering-rules-exceptions)
    * [JavaScript rules](#javascript-rules)
    * [Scriptlets](#scriptlets)
    * [Modifiers](#non-basic-rules-modifiers)
        * [Syntax](#non-basic-rules-modifiers-syntax)
        * [$app](#non-basic-rules-modifiers-app)
        * [$domain](#non-basic-rules-modifiers-domain)
        * [$path](#non-basic-rules-modifiers-path)
* [Information for filters maintainers](#for_maintainers)
    * [Pre-processor directives](#pre_processor)
    * [Hints](#hints)
        * [Hints syntax](#hints_syntax)
        * [NOT_OPTIMIZED hint](#not_optimized)
        * [PLATFORM and NOT_PLATFORM hints](#platform_not_platform)
* [How to debug filtering rules](#how-to-debug)
    * [Filtering log](#debug-filtering-log)
    * [Selectors debugging mode](#selectors-debugging-mode)
        * [Testing extended selectors](#testing-extended-selectors)
    * [Debugging scriptlets](#debug-scriptlets)
* [Good luck with creating filters!](#good-luck)

<a id="introduction"></a>
## Introduction

A filter is a set of filtering rules applied to specific content (banners, popups, etc).  AdGuard has a list of standard filters created by our team. Our team constantly improves and updates them, and we hope our filters meet the needs of most of our users.

At the same time, AdGuard allows you to create your own custom filters, using the same type of rules that we have in our filters.

To describe the syntax of our filtering rules we use [Augmented BNF for Syntax Specifications](https://tools.ietf.org/html/rfc5234), but we do not always strictly follow this specification.

> AdGuard syntax is originally based on syntax of Adblock Plus rules, but it was extended with new types of rules for better ad filtering.  Some parts of this article's content about the rules common to both AdGuard and ABP was taken from [this article](https://adblockplus.org/en/filters).

<a id="comments"></a>
## Comments

Any line that starts with an exclamation mark is a comment. In the list of rules it is displayed in gray color. AdGuard will ignore this line, so you can write anything you want. Comments are usually placed above the rules and used to describe what a rule does.

For example:

```
! This is the comment. Under this line there is an actual filtering rule.
||example.org^
```

<a id="examples"></a>
## Examples

<a id="example-blocking-by-domain-name"></a>
### Example: Blocking by domain name

<object data="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/0_blocking_domain.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/0_blocking_domain.svg" />
</object>

**This rule blocks:**

* `http://example.org/ad1.gif`
* `http://subdomain.example.org/ad1.gif`
* `https://ads.example.org:8000/`

**This rule does not block:**

* `http://ads.example.org.us/ad1.gif`
* `http://example.com/redirect/http://ads.example.org/`

<a id="example-blocking-exact-address"></a>
### Example: Blocking exact address

<object data="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/1_exact_address.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/1_exact_address.svg" />
</object>

**This rule blocks:**

* `http://example.org/`

**This rule does not block:**

* `https://example.org/banner/img`

<a id="example-basic-rule-modifiers"></a>
### Example: Basic rule modifiers

Filtering rules support numerous modifiers that allow you to fine-tune the rule behavior. Here is an example of a rule with some simple modifiers.

<object data="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/2_basic_rule_options.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/2_basic_rule_options.svg" />
</object>

**This rule blocks:**

* `http://example.org/script.js` if this script is loaded from `example.com`.

**This rule does not block:**

* `https://example.org/script.js` if this script is loaded from `example.org`.
* `https://example.org/banner.png` because it is not a script.

<a id="example-unblocking-an-address"></a>
### Example: Unblocking an address

<object data="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/3_basic_exception.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/3_basic_exception.svg" />
</object>

**This rule unblocks:**

* `http://example.org/banner.png` even if there is a blocking rule for this address.

> Blocking rules with [`$important`](#important-modifier) modifier can override exceptions.

<a id="example-unblocking-website"></a>
### Unblocking everything on a website

<object data="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/4_unblock_entire_website.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/4_unblock_entire_website.svg" />
</object>

**This rule unblocks**

* It disables all cosmetic rules on `example.com`.
* It unblocks all requests sent from this website even if there is are blocking rules matching these requests.

<a id="example-cosmetic-rule"></a>
### Example: Cosmetic rule

<object data="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/5_cosmetic_rules.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/5_cosmetic_rules.svg" />
</object>

Cosmetic rules are based on using a special language named CSS, which every browser understands. Basically, it adds a new CSS style to the website which purpose is to hide particular elements. You can learn more about CSS in general [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors).

> AdGuard [extends CSS](#extended-css-selectors) and lets filters developers handle much more complicated cases. However, to use these extended rules, you need to be fluent in regular CSS.

<a id="example-popular-css-selectors"></a>
#### Popular CSS selectors

| Name | CSS selector | Description |
| ------| ------ | ----------- |
| ID selector | `#banners`   | Matches all elements with `id` attribute equal to `banners`.<br/>![](https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/css_id_selector.png) |
| Class selector | `.banners`   | Matches all elements with `class` attribute containing `banners`.<br/>![](https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/css_class_selector.png) |
| Attribute selector | `div[class="banners"]`   | Matches all `div` elements with `class` attribute **exactly equal** to `banners`.<br/>![](https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/css_class_attr.png) |
| Attribute substring selector | `div[class^="advert1"]`   | Matches all `div` elements which `class` attribute **starts with** the `advert1` string.<br/>![](https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/css_class_attr_start.png) |
| Attribute substring selector | `div[class$="banners_ads"]`   | Matches all `div` elements which `class` attribute **ends with** the `banners_ads` string.<br/>![](https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/css_class_attr_end.png) |
| Attribute substring selector | `a[href^="http://example.com/"]`   | Matches all links that are loaded from `http://example.com/` domain.<br/>![](https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/css_attr_start.png) |
| Attribute selector | `a[href="http://example.com/"]`   | Matches all links to **exactly** the `http://example.com/` address.<br/>![](https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/css_attr_equal.png) |

<a id="basic-rules"></a>
## Basic rules

The most simple rules are so-called _"Basic rules"._ They are used to block requests to specific URLs. Or to unblock it, if there is a special marker "@@" at the beginning of the rule. The basic principle for this type of rules is quite simple: you have to specify the address and additional parameters that limit or expand the scope of the rule.

> #### Sub-requests
> Basic rules for blocking requests are applied only to **sub-requests**. That means they will not block the loading of the page.

> #### Response status
> Browser detects a blocked request as completed with an error.

<a id="basic-rules-syntax"></a>
### Basic rules syntax

```
      rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

* **`pattern`** — address mask. Every request's URL is collated to this mask. You can also use special characters in the template, their description is [below](#basic-rules-special-characters). Note that AdGuard trims URLs to a length of 4096 characters in order to speed up matching and avoid issues with ridiculously long URLs.
* **`@@`** — A marker that is used in rules of exception. To turn off filtering for a request, start your rule with this marker.
* **`modifiers`** — Parameters that "clarify" the basic rule. Some of them limit the scope of the rule and some can completely change they way it works.

<a id="basic-rules-special-characters"></a>
### Special characters

* ```*``` — Wildcard character. It is used to represent "any set of characters". This can also be an empty string or a string of any length.
* **`||`** — Matching the beginning of an address. With this character you don't have to specify a particular protocol and subdomain in address mask. It means, `||` stands for `http://*.`, `https://*.`, `ws://*.`, `wss://*.` at once.
* **`^`** — Separator character mark. Separator character is any character, but a letter, a digit, or one of the following: `_` `-` `.` `%`. In this example separator characters are shown in bold: `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3`. The end of the address is also accepted as separator.
* **`|`** — A pointer to the beginning or the end of address. The value depends on the character placement in the mask. For example, a rule `swf|` corresponds to `http://example.com/annoyingflash.swf` , but not to `http://example.com/swf/index.html`. `|http://example.org` corresponds to `http://example.org`, but not to `http://domain.com?url=http://example.org`.

> **Visual representation.** We also recommend to get acquainted with [this article](https://adblockplus.org/filter-cheatsheet#blocking), for better understanding of how such rules should be made.

<a id="regexp-support"></a>
### Regular expressions support

If you want even more flexibility in making rules, you can use [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) instead of a default simplified mask with special characters.

> **Performance.** Rules with regular expressions work more slowly, therefore it is recommended to avoid them or to limit their scope to specific domains.

If you want a blocker to determine a regular expression, the `pattern` has to look like this:
```
pattern = "/" regexp "/"
```

For example, `/banner\d+/$third-party` this rule will apply the regular expression `banner\d+` to all third-party requests. Exclusion rule with regular expression looks like this: `@@/banner\d+/`.

> **Compatibility with different versions of AdGuard.** AdGuard browser extension for Safari and AdGuard for iOS do not fully support regular expressions because of [Content Blocking API restrictions](https://webkit.org/blog/3476/content-blockers-first-look/) (look for "The Regular expression format" section).

<a id="wildcard-for-tld"></a>
### Wildcard support for TLD (top-level domains)

Wildcard characters are supported for TLDs of the domains in patterns of cosmetic, html and javascript rules.
For example, the cosmetic rule `example.*##.banner` will match any `example.TLD` request (`example.ru`, `example.com`, `example.net`, `example.org`, etc.).
For the basic rules the described logic will be applicable only for the domains specified in `$domain` modifier (for example, `||*/banners/*$image,domain=example.*`).

> **Compatibility with different versions of AdGuard.** Supported by: AdGuard for Windows/macOS/Android/Safari/iOS and browser extensions for Chrome/Firefox/Edge.

<a id="basic-rules-examples"></a>
### Basic rules examples

* `||example.com/ads/*` — a simple rule, which corresponds to addresses like `http://example.com/ads/banner.jpg` and even `http://subdomain.example.com/ads/otherbanner.jpg`.

* `||example.org^$third-party` —  this rule blocks third-party requests to `example.org` and its subdomains.

* `@@||example.com$document` — general exception rule. It completely disables filtering for `example.com` and all subdomains. There is a number of modifiers which can be used in exception rules. For more details, please follow the link [below](#exceptions-modifiers).

<a id="basic-rules-modifiers"></a>
### Modifiers

> **Attention!** The features described in this section are intended for experienced users. They extend capabilities of "Basic rules", but in order to use them you need to have a basic undestanding of the way your browser works.

You can change the behavior of a "basic rule" by using additional modifiers. Modifiers should be located in the end of the rule after a `$` sign and be separated by commas.

Example:
```
||domain.com^$popup,third-party
```

<a id="basic-rules-common-modifiers"></a>
#### Basic modifiers

The following modifiers are the most simple and frequently used.

<a id="domain-modifier"></a>
##### **`domain`**

`domain` limits the rule application area to a list of domains (and their subdomains). To add multiple domains to one rule, use the `|`  character as a separator.

###### `domain` examples

* `||baddomain.com^$domain=example.org` — a rule to block requests that match the specified mask, and are sent from domain `example.org` or its subdomains.
* `||baddomain.com^$domain=example.org|example.com` — the same rule, but it works for both `example.org` and `example.com`.

If you want the rule not to be applied to certain domains, start a domain name with `~` sign.

###### `domain` and `~` examples

* `||baddomain.com^$domain=~example.org` — this rule blocks requests matching the pattern sent from any domain except `example.org` and its subdomains.
* `||baddomain.com^$domain=example.org|~foo.example.org` — this rule blocks requests sent from `example.org` and its subdomains, except the subdomain `foo.example.org`.

###### `domain` modifier matching target domain

In some cases the `$domain` modifier can match not only the referrer domain, but also the target domain. This happens when all of the following is true:

1) The request has `document` type
2) The rule's pattern doesn't match any particular domain(s)
3) The rule's pattern doesn't contain regular expressions

When all these conditions are met, the `domain` modifier will match both the referrer doman **and** the target domain.

If some of the conditions above aren't met but the rule contains modifiers `cookie` or `csp`, the target domain will still be matched.

If the referrer matches a rule with `domain` that explicitly excludes the referrer domain, then the rule won't be applied even if the target domain also matches the rule. This affects rules with `cookie` and `csp` modifiers, too.

**Examples:**

* `*$cookie,domain=example.org|example.com` will block cookies for all requests to and from `example.org` and `example.com`.
* `*$document,domain=example.org|example.com` will block all requests to and from `example.org` and `example.com`.

In the following examples it's implied that requests are sent from `http://example.org/page`(the referrer) and the target URL is `http://targetdomain.com/page`.

* `page$domain=example.org` will be matched, as it matches the referrer domain.
* `page$domain=targetdomain.com` will be matched, as it matches the target domain but satisfies all requirements mentioned above.
* `||*page$domain=targetdomain.com` will not be matched, as the pattern `||*page` matches specific domains.
* `||*page$domain=targetdomain.com,cookie` will be matched despite the pattern `||*page` matches specific domains because it contains `$cookie` modifier.
* `/banner\d+/$domain=targetdomain.com` will not be matched as it contains a regular expression.
* `page$domain=targetdomain.com|~example.org` will not be matched because the referrer domain is explicitly excluded.

> **Important!** Safari doesn't support the simultaneous use of allowed and disallowed domains, so rules like `||baddomain.com^$domain=example.org|~foo.example.org` will not work in AdGuard for Safari.


<a id="third-party-modifier"></a>
##### **`third-party`**

A restriction of third-party and own requests. A third-party request is a request from a different domain. For example, a request to `example.org`, from `domain.com` is a third-party request.

> To be considered as such, a third-party request should meet one of the following conditions:
> 1) Its referrer is not a subdomain of the target domain or the other way round.  For example, a request to `subdomain.example.org` from `example.org` is not a third-party request.
> 2) Its `Sec-Fetch-Site` header is set to `cross-site`.

If there is a `third-party` modifier, the rule is only applied to third-party requests.

###### `third-party` examples

* `||domain.com^$third-party` — this rule applies to all domains, except `domain.com` and its subdomains. A third-party request example: `http://example.org/banner.jpg`.

If there is a `~third-party` modifier, the rule is only applied to the requests that are not from third-party. Which means, they have to be sent from the same domain.

###### `~third-party` examples

* `||domain.com$~third-party` — this rule is applied to `domain.com`, but not to the other domains. Example of a request that is not a third-party request: `http://domain.com/icon.ico`.

<a id="popup-modifier"></a>
##### **`popup`**

AdGuard will try to close the browser tab with any address that matches a blocking rule with this modifier. Please note that not all the tabs can be closed.

###### `popup`examples

* `||domain.com^$popup` — if you try to go to `http://domain.com/` from any page in the browser, a new tab in which specified site has to be opened will be closed by this rule.

> It may not work if the popped up page is cached by the browser. It also will not work with some tricky popup methods. In such cases, it is better to use [AdGuard Popup Blocker](https://github.com/AdguardTeam/PopupBlocker) extension.

> **Important!** Unlike with browser extensions, `$popup` modifier is very unreliable when used with AdGuard apps for Windows, Mac and Android. In AdGuard for Safari and iOS, `$popup` rules will simply block the page right away.

<a id="match-case-modifier"></a>
##### **`match-case`**

This modifier defines a rule which applies only to addresses that match the case. Default rules are case-insensitive.

###### `match-case` examples

* `*/BannerAd.gif$match-case` — this rule will block `http://example.com/BannerAd.gif`, but not `http://example.com/bannerad.gif`.

<a id="content-type-modifiers"></a>
#### Restriction by content type

There is a set of modifiers, which can be used to limit the rule's application area to certain type of content. These modifiers can also be combined to cover, for example, both images and scripts.

> **Compatibility with different versions of AdGuard.** Please note that there is a big difference in how AdGuard determines the content type on different platforms. For browser extensions, content type for every request is provided by browser. AdGuard for Windows, Mac and Android use following method: first we try to determine the type of the request by the `Sec-Fetch-Dest` request header or by the filename extension. If the request is not blocked at this stage, the type will be determined using the `Content-Type` header at the beginning of the server response.

<a id="content-type-modifiers-examples"></a>
##### Content type modifiers examples

* `||example.org^$image` — corresponds to all images from `example.org`.
* `||example.org^$script,stylesheet` — corresponds to all the scripts and styles from `example.org`.
* `||example.org^$~image,~script,~stylesheet` — corresponds to all requests to `example.org` except for the images, scripts and styles.

<a id="document-modifier"></a>
##### **`document`**

The rule corresponds to the main frame document requests, i.e. HTML documents that are loaded in the browser tab. It does not match iframes (there's a `$subdocument` modifier for these).

By default, AdGuard won't block the requests that are loaded in the browser tab (e.g. "main frame bypass"). The idea is not to prevent pages from loading as the user clearly indicated that they want this page to be loaded. However, if the `$document` modifier is specified explicitly, AdGuard does not use that logic and prevents the page load. Instead, it responds with a "blocking page".

If this modifier is used with an exclusion rule (`@@`), it completely disables blocking on corresponding pages. It is equivalent to using `$elemhide`, `$content`, `$urlblock`, `$jsinject`, and `$extension` modifiers simultaneously.

> **Compatibility with different versions of AdGuard.** Blocking request type logic now only supported by dev-build of AdGuard.

###### `document` example

* `@@||example.com^$document` — completely disables filtering on all pages at `example.com` and all subdomains.
* `@@||example.com^$document,~extension` — completely disables blocking on any pages at `example.com` and all subdomains, but continues to run userscripts there.

* `||example.com^$document` — blocks HTML document request to `example.com` with a blocking page.
* `||example.com^$document,redirect=noopframe` — redirects HTML document request to `example.com` to an empty html document.
* `||example.com^$document,removeparam=test` — removes `test` query parameter from HTML document request to  `example.com`.
* `||example.com^$document,replace=/test1/test2/` — replaces `test1` with `test2` in  HTML document request to `example.com`.

<a id="image-modifier"></a>
##### **`image`**

The rule corresponds to images requests.

<a id="stylesheet-modifier"></a>
##### **`stylesheet`**

The rule corresponds to CSS files requests.

<a id="script-modifier"></a>
##### **`script`**

The rule corresponds to script requests (e.g. javascript, vbscript).

<a id="object-modifier"></a>
##### **`object`**

The rule corresponds to browser plugins resourses. (e.g. Java or Flash).

<a id="object-subrequest-modifier"></a>
##### **`object-subrequest`**

The rule corresponds to requests by browser plugins (it's usually Flash).

> **Compatibility with different versions of AdGuard.** AdGuard for Windows, macOS and Android often can't accurately detect this type and defines it as `other`.

<a id="font-modifier"></a>
##### **`font`**

The rule corresponds to requests for fonts (e.g. .woff filename extension).

<a id="media-modifier"></a>
##### **`media`**

The rule corresponds to requests for media files (music and video, e.g. .mp4 files).

<a id="subdocument-modifier"></a>
##### **`subdocument`**

The rule corresponds to requests for built-in pages (HTML tags `frame` and `iframe`).

<a id="ping-modifier"></a>
##### **`ping`**

The rule corresponds to requests caused by either `navigator.sendBeacon()` or the `ping` attribute on links.

> **Compatibility with different versions of AdGuard.** AdGuard for Windows, macOS and Android often can't accurately detect `navigator.sendBeacon()`. For reliable detection, use AdGuard browser extensions.

<a id="xmlhttprequest-modifier"></a>
##### **`xmlhttprequest`**

The rule applies only to ajax requests (requests sent via javascript object `XMLHttpRequest`).

> **Compatibility with different versions of AdGuard.** AdGuard for Windows, macOS and Android often can't accurately detect this type and sometimes detects it as `other` or `script`.

<a id="websocket-modifier"></a>
##### **`websocket`**

The rule applies only to WebSocket connections.

> **Compatibility with different versions of AdGuard.** AdGuard for Safari and iOS cannot properly apply this modifier due to Safari limitations.

<a id="webrtc-modifier"></a>
##### **`webrtc`**

The rule applies only to WebRTC connections.

> Please note that blocking WebRTC can interfere with the work of some browser applications, such as messengers, chats, cinemas, or games.

###### `webrtc` example

* `||example.com^$webrtc,domain=example.org` - this rule blocks webRTC connectios to `example.com` for `example.org`.
* `@@*$webrtc,domain=example.org` - this rule disables the RTC wrapper for `example.org`.

> **Deprecation notice.** This modifier is deprecated and will be removed in the future. If you need to suppress WebRTC, consider using the `$nowebrtc` scriptlet.

<a id="other-modifier"></a>
##### **`other`**

The rule applies to requests for which the type has not been determined or doesn't match the types listed above.

<a id="exceptions-modifiers"></a>
#### Exception modifiers

Exception rules disable the other basic rules for the addresses to which they correspond. They begin with a `@@` mark. All the basic modifiers listed above can be applied to them and they also have a few special modifiers.

> **Visual representation.** We recommend to get acquainted with [this article](https://adblockplus.org/filter-cheatsheet#blocking), for better understanding of how exception rules should be made.

<a id="elemhide-modifier"></a>
##### **`elemhide`**

Disables any cosmetic rules on the pages matching the rule. You will find the information about cosmetic rules [further](#cosmetic-rules).

###### `elemhide` example

* `@@||example.com^$elemhide` — disables all cosmetic rules on pages at `example.com` and all subdomains.

<a id="content-modifier"></a>
##### **`content`**

Disables HTML filtering rules and replace rules on the pages that match the rule. You will find the information about HTML filtering rules [here](#html-filtering-rules) and about replace rules [here](#replace-modifier).

###### `content` example

* `@@||example.com^$content` — disables all HTML filtering rules on pages at `example.com` and all subdomains.

<a id="jsinject-modifier"></a>
##### **`jsinject`**

Forbids adding of javascript code to the page. You can read about javascript rules further.

###### `jsinject` example

* `@@||example.com^$jsinject` — disables javascript on pages at `example.com` and all subdomains.

<a id="urlblock-modifier"></a>
##### **`urlblock`**

Disables blocking of all requests sent from the pages matching the rule.

###### `urlblock` example

* `@@||example.com^$urlblock` — any requests sent from the pages at `example.com` and all subdomains are not going to be blocked.

<a id="extension-modifier"></a>
##### **`extension`**

Disables all userscripts on the pages matching this rule. Note, that this modifier only makes sense in AdGuard products that can work as userscript hosts (AdGuard for Windows/macOS/Android).

###### `extension` example

* `@@||example.com^$extension` — userscripts won't work on all pages of the `example.com` website.

<a id="stealth-modifier"></a>
##### **`stealth`**

Disables the Stealth Mode module for all corresponding pages and requests.

###### `stealth` examples

* `@@||example.com^$stealth` — disables `Stealth Mode` for `example.com` (and subdomains) requests, except for blocking cookies and hiding tracking parameters (see below).
* `@@||domain.com^$script,stealth,domain=example.com` — disables `Stealth Mode` only for script requests to `domain.com` (and its subdomains) on `example.com` and all its subdomains.
* Please note that blocking cookies and removing tracking parameters is achieved by using rules with `$cookie` and `$removeparam` modifiers. Exceptions with only `$stealth` modifier won't do those things. If you want to completely disable all Stealth Mode features for a given URL, you need to include all three modifiers: `@@||example.org^$stealth,removeparam,cookie`

> **Compatibility with different versions of AdGuard.** Stealth Mode is currently available in AdGuard for Windows, Mac, Android and AdGuard browser extensions for Chrome, Firefox, Edge. For now, the products that do not support Stealth Mode will ignore the rules with this modifier.

<a id="generic-rules"></a>
##### Generic rules

Before we can proceed to the next modifiers, we have to make a definition of _generic rules_. The rule is generic if it is not limited to specific domains.
Wildcard character `*` is supported as well.

For example, these rules are generic:
```
###banner
*###banner
#@#.adsblock
*#@#.adsblock
~domain.com###banner
||domain.com^
||domain.com^$domain=~example.com
```

And these are not:
```
domain.com###banner
||domain.com^$domain=example.com
```

<a id="generichide-modifier"></a>
###### **`generichide`**

Disables all generic [cosmetic rules](#cosmetic-rules) on pages that correspond to exception rule.

* `@@||example.com^generichide` — disables generic cosmetic rules on any pages at `example.com` and all subdomains.

<a id="genericblock-modifier"></a>
###### **`genericblock`**

Disables generic basic rules on pages that correspond to exception rule.

* `@@||example.com^$genericblock` — disables generic basic rules on any pages at `example.com` and all subdomains.

<a id="specifichide-modifier"></a>
##### **`specifichide`**

Has an opposite effect to [`generichide`](#generichide-modifier). Disables all specific element hiding and CSS rules, but not general ones.

* `@@||example.org^$specifichide` — will disable `example.org##.banner` but not `##.banner`.

> Please note that [`$elemhide` modifier](#elemhide-modifier) can disable all cosmetic rules at once.

> **Compatibility with different versions of AdGuard.** Rules with this modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard browser extensions for Chrome, Firefox, Edge. **Developer builds only at this moment.**

<a id="advanced-modifiers"></a>
### Advanced capabilities

These modifiers are able to completely change the behaviour of basic rules.

<a id="removeparam-modifier"></a>
#### **`removeparam`**

>`$removeparam` and `$queryprune` are completely interchangeable and are aliases to each other.

Rules with `$removeparam` modifier are intended to to strip query parameters from requests' URLs. Please note that such rules are only applied to `GET`, `HEAD`, and `OPTIONS` requests.

> `$removeparam` rules that do not have any content-type modifiers will match only requests where content type is `document`.

##### Syntax

###### Basic syntax

* `$removeparam=param` -- removes query parameter with the name `param` from URLs of any request, e.g. a request to `http://example.com/page?param=1&another=2` will be transformed to `http://example.com/page?another=2`.

> `$removeparam` basic syntax is supported starting with v1.7 of [CoreLibs](https://adguard.com/en/blog/introducing-corelibs.html) and v3.6 of AdGuard Browser Extension.

###### Regular expressions

You can also use regular expressions to match query parameters and/or their values:

* `$removeparam=/regex/[options]` -- removes query parameters matching the regex regular expression from URLs of any request. Unlike basic syntax, it means *"remove query parameters normalized to a `name=value` string which match the regex regular expression"*. `[options]` here is the list of regular expression options. At the moment, the only supported option is `i` which makes matching case-insensitive.

> `$removeparam` syntax for regular expressions will be supported starting with v1.8 of CoreLibs and v4.0 of AdGuard Browser Extension. For now, use the simplified version: `$removeparam=param`.

> **Escaping special characters**: don't forget to escape special characters like `,`, `/` and `$` in the regular expressions. Use `\` character for that purpose. For example, an escaped comma should look like this: `\,`.

> Important: note that regex-type rules target both parameter's name and value. In order to minimize the chance of mistakes, it is safer to start every regex with `/^` unless you specifically target parameter values.

> We will try to detect and ignore unescaped `$` automatically using a simple rule of thumb:
> It is not an options delimiter if all three are true:
> 1. It looks like `$/`,
> 2. There's another slash character (`/`) to the left of it,
> 3. There's another unescaped `$` character to the left of that slash character.

###### Remove all query parameters

Specify naked `$removeparam` to remove all query parameters:

* `||example.org^$removeparam` -- removes all query parameters from URLs matching `||example.org^`.

###### Inversion

Use `~` to apply inversion:

* `$removeparam=~param` -- removes all query parameters with the name different from `param`.
* `$removeparam=~/regex/` -- removes all query parameters that do not match the regex regular expression.

###### Negating `$removeparam`

This sort of rules work pretty much the same way it works with [`$csp`](#csp-modifier) and [`$redirect`](#redirect-modifier) modifiers.

Use `@@` to negate `$removeparam`:

* `@@||example.org^$removeparam` -- negates all `$removeparam` rules for URLs that match `||example.org^`.
* `@@||example.org^$removeparam=param` -- negates the rule with `$removeparam=param` for any request matching `||example.org^`.
* `@@||example.org^$removeparam=/regex/` -- negates the rule with `$removeparam=/regex/` for any request matching `||example.org^`.

>**Multiple rules matching a single request**
>In the case when multiple `$removeparam` rules match a single request, each of them will be applied one by one.

##### Examples

```
$removeparam=utm_source|utm_medium|utm_term
$removeparam=utm_content|utm_campaign|utm_referrer
@@||example.com^$removeparam
```
With these rules some [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters) will be stripped out from any request, except that requests to `example.com` won't be stripped at all, e.g. `http://google.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will be transformed to `http://google.com/page`, but `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` won't be affected by the blocking rule.

* `$removeparam=utm_source` -- removes `utm_source` query parameter from all requests.

* `$removeparam=/utm_.*/` -- removes all `utm_* query` parameters from URL queries of any request, e.g. a request to `http://example.com/page?utm_source=test` will be transformed to `http://example.com/page`.

* `$removeparam=/^utm_source=campaign$/` -- removes `utm_source` query parameter with the value equal to `campaign`. It does not touch other `utm_source` parameters.

Negating one `$removeparam` rule and replacing it with a different rule:

```
$removeparam=/^(gclid|yclid|fbclid)=/
@@||example.com^$removeparam=/^(gclid|yclid|fbclid)=/
||example.com^$removeparam=/^(yclid|fbclid)=/
```

With these rules, Google, Yandex, and Facebook Click IDs will be removed from all requests. There's one exception: Google Click ID (gclid) will not be removed from requests to example.com.

Negating `$removeparam` for all parameters:

```
$removeparam=/^(utm_source|utm_medium|utm_term)=/
$removeparam=/^(utm_content|utm_campaign|utm_referrer)=/
@@||example.com^$removeparam
```

With these rules, specified UTM parameters will be removed from any request save for requests to example.org.

> **Compatibility with other modifiers**
> `$removeparam` rules are compatible with [basic modifiers](#basic-rules-common-modifiers), [content-type modifiers](#content-type-modifiers), and with `$important` and `$app` modifiers. The rules which have any other modifiers are considered invalid and will be discarded.

> Please note that `$removeparam` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers don't do that. For example, `@@||example.com^` will not disable `$removeparam=p` for requests to **example.com**, but `@@||example.com^$urlblock` will.

> **Compatibility with different versions of AdGuard.** Rules with this modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard browser extensions for Chrome, Firefox, Edge. **Developer builds only at this moment.**

> **Restrictions.** Please note that this type of rules can be used **only in trusted filters**. This category includes your own **User filter** and all the filters created by AdGuard Team.

<a id="important-modifier"></a>
#### **`important`**

The `$important` modifier applied to a rule increases its priority over any other rule without `$important` modifier. Even over basic exception rules.

##### Example 1:

```
||example.org^$important
@@||example.org^
```

`||example.org^$important` will block all requests despite of the exception rule.

##### Example 2:

```
||example.org^$important
@@||example.org^$important
```

Now the exception rule also has `$important` modifier so it will prevail.

##### Example 3:

The `$important` modifier will be ignored if a document-level exception rule is applied to the document.

```
||example.org^$important
@@||test.org^$document
```

If a request to `example.org` is sent from the `test.org` domain, the rule won't be applied despite it has the `$important` modifier.

<a id="badfilter-modifier"></a>
#### **`badfilter`**

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Examples:**

* `||example.com$badfilter` disables `||example.com`
* `||example.com$image,badfilter` disables `||example.com,image`
* `@@||example.com$badfilter` disables `@@||example.com`
* `||example.com$domain=domain.com,badfilter` disables `||example.com$domain=domain.com`

Rules with `$badfilter` modifier can disable other basic rules for specific domains if they fulfil the following conditions:

* The rule has a `$domain` modifier
* The rule does not have a negated domain `~` in `$domain` modifier's value.

In that case, the `$badfilter` rule will disable the corresponding rule for domains specified in both the `$badfilter` and basic rules. Please note, that [wildcard-TLD logic](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#wildcard-for-tld) works here as well.

**Examples:**

* `/some$domain=example.com|example.org|example.io` is disabled for `example.com` by `/some$domain=example.com,badfilter`
* `/some$domain=example.com|example.org|example.io` is disabled for `example.com` and `example.org` by `/some$domain=example.com|example.org,badfilter`
* `/some$domain=example.com|example.org` and `/some$domain=example.io` are disabled completely by `/some$domain=example.com|example.org|example.io,badfilter`
* `/some$domain=example.com|example.org|example.io` is disabled completely by `/some$domain=example.*,badfilter`
* `/some$domain=example.*` is disabled for `example.com` and `example.org` by `/some$domain=example.com|example.org,badfilter`
* `/some$domain=example.com|example.org|example.io` is NOT disabled for `example.com` by `/some$domain=example.com|~example.org,badfilter` because the value of `domain` modifier contains a negated domain

<a id="empty-modifier"></a>
#### **`empty`**

Usually, blocked requests look like a server error to browser. If you use `empty` modifier, AdGuard will emulate a blank response from the server with` 200 OK` status.

##### `empty` example

* `||example.org^$empty` — returns an empty response to all requests to `example.org` and all subdomains.

> **Deprecation notice.** Rules with this modifier are deprecated in favor of the `$redirect` modifier. Please note that it will be removed in the future.

> **Compatibility with different versions of AdGuard.** Rules with this modifier are not supported by AdGuard for Safari and iOS.

<a id="mp4-modifier"></a>
#### **`mp4`**

As a response to blocked request AdGuard returns a short video placeholder.

##### `mp4` example

* `||example.com/videos/$mp4` — block a video downloads from `||example.com/videos/*` and changes the response to a video placeholder.

> **Deprecation notice.** Rules with this modifier are deprecated in favor of the `$redirect` modifier. Please note that it will be removed in the future.

> **Compatibility with different versions of AdGuard.** Rules with this modifier are not supported by AdGuard for Safari and iOS.

<a id="replace-modifier"></a>
#### **`replace`**

This modifier completely changes the rule behavior. If it is applied, the rule will not block the request. The response is going to be modified instead.

> #### Please note
> You will need some knowledge of regular expressions to use this modifier.

##### `$replace` rules features

* `$replace` rules apply to any text response, but will not apply to binary (`media`, `image`, `object`, etc).
* `$replace` rules do not apply if the size of the original response is more than 3MB.
* `$replace` rules have a higher priority than other basic rules (**including** exception rules). So if a request corresponds to two different rules one of which has the `$replace` modifier, this rule will be applied.
* Document-level exception rules with `$content` or `$document` modifiers do disable `$replace` rules for requests matching them.
* Other document-level exception rules (`$generichide`, `$elemhide` or `$jsinject` modifiers) are applied alongside `$replace` rules. It means that you can modify the page's content with a `$replace` rule and disable cosmetic rules there at the same time.

> `$replace` value can be empty in the case of exception rules. See examples section for further information.

> **Multiple rules matching a single request.** In case if multiple `$replace` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

##### **$replace Syntax**

In general, `replace` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```
replace = "/" regex "/" replacement "/" modifiers
```

* `regex` — regular expression.
* `replacement` — a string that will be used to replace the string corresponding to `regex`.
* `modifiers` — regular expression flags. For example, `i` - insensitive search, or `s` - single-line mode.

In the `$replace` value, two characters must be escaped: comma (`,`) and (`$`). Use (`\`) for it. For example, an escaped comma looks like this: `\,`.

##### `$replace` example

```
||example.org^$replace=/(<VAST[\s\S]*?>)[\s\S]*<\/VAST>/\$1<\/VAST>/
```

There are three parts in this rule:

* Regular expression: `(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`
* Replacement: `\$1<\/VAST>` (please note that `$` is escaped)
* Regular expression flags: `i` (insensitive search)

You can see how this rule works here:
http://regexr.com/3cesk

##### Multiple `$replace` rules example

1. `||example.org^$replace=/X/Y/`
2. `||example.org^$replace=/Z/Y/`
3. `@@||example.org/page/*$replace=/Z/Y/`

* Both rule 1 and 2 will be applied to all requests sent to `example.org`.
* Rule 2 is disabled for requests matching `||example.org/page/`, **but rule 1 still works!**.

##### Disabling `$replace` rules

* `@@||example.org^$replace` will disable all `$replace` rules matching `||example.org^`.
* `@@||example.org^$document` or `@@||example.org^$content` will disable all `$replace` rules **originated from** pages of `example.org` **including the page itself**.

> **Compatibility with different versions of AdGuard.** These rules are supported by AdGuard for Windows, Mac, Android and by the AdGuard's Firefox add-on. This type of rules don't work in extensions for other browsers because they are unable to modify content on the network level.

> **Restrictions.** Please note that this type of rules can be used **only in trusted filters**. This category includes your own **User filter** and all the filters created by AdGuard Team.

<a id="csp-modifier"></a>
#### **`csp`**

This modifier completely changes the rule behavior. If it is applied to a rule, it will not block the matching request. The response headers are going to be modified instead.

> In order to use this type of rules, it is required to have the basic understanding of the [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) security layer.

For the requests matching a `$csp` rule, we will strengthen response's security policy by adding additional content security policy equal to the `$csp` modifier contents. `$csp` rules are applied independently from any other rule type. Other basic rules have no influence on it **save for document-level exceptions** (see the examples section).

> **Multiple rules matching a single request.** In case if multiple `$csp` rules match a single request, we will apply each of them.

##### **`csp` syntax**

`$csp` value syntax is similar to the Content Security Policy header syntax.

`$csp` value can be empty in the case of exception rules. See examples section for further information.

>Limitations

>1. Please note that there're a few characters forbidden in the `$csp` value: (`,`), (`$`)
>2. `csp` rules support limited list of modifiers: `domain`, `important`, `subdocument`
>3. Rules with `report-*` directives are considered invalid.

##### `csp` examples

* `||example.org^$csp=frame-src 'none'` — this rule blocks all frames on example.org and its subdomains.
* `@@||example.org/page/*$csp=frame-src 'none'` — disables all rules with the `$csp` modifier exactly matching `frame-src 'none'` on all the pages matching the rule pattern. For instance, the rule above.
* `@@||example.org/page/*$csp` — disables all the `$csp` rules on all the pages matching the rule pattern.
* `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` — disables inline scripts on all the pages matching the rule pattern.
* `@@||example.org^$document` or `@@||example.org^$urlblock` — disables all the `$csp` rules on all the pages matching the rule pattern.

<a id="cookie-modifier"></a>
#### **`cookie`**

The `$cookie` modifier completely changes rule behavior. Instead of blocking a request, this modifier makes us suppress or modify the `Cookie` and `Set-Cookie` headers.

> **Multiple rules matching a single request.** In case if multiple `$cookie` rules match a single request, we will apply each of them one by one.

##### `$cookie` syntax
The rule syntax depends on whether we are going to block all cookies or to remove a single cookie. The rule behavior can be changed with `maxAge` and `sameSite` modifiers.

* `||example.org^$cookie=NAME;maxAge=3600;sameSite=lax` -- every time AdGuard encounters a cookie called `NAME` in a request to `example.org`, it will do the following:

  * Set its expiration date to current time plus `3600` seconds
  * Makes the cookie use [Same-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#SameSite_cookies) "lax" strategy.
* `||example.org^$cookie` -- blocks ALL cookies set by `example.org`. This is an equivalent to setting `maxAge` to zero.
* `||example.org^$cookie=NAME` -- blocks a single cookie named `NAME`
* `||example.org^$cookie=/regular_expression/` -- blocks every cookie that matches a given regular expression

> **Important:** in the case of a regular expression matching, two characters must be escaped: comma (`,`) and (`$`). Use (`\`) for it. For example, escaped comma looks like this: `\,`.

`$cookie` rules are not affected by regular exception rules (`@@`) unless it's a `$document` exception. In order to disable a `$cookie` rule, the exception rule should also have a `$cookie` modifier. Here's how it works:

* `@@||example.org^$cookie` -- unblocks all cookies set by `example.org`
* `@@||example.org^$cookie=NAME` -- unblocks a single cookie named `NAME`
* `@@||example.org^$cookie=/regular_expression/` -- unblocks every cookie matching a given regular expression

> **Limitations:** `$cookie` rules support a limited list of modifiers: `domain`, `~domain`, `important`, `third-party`, `~third-party`.

##### Real-life examples
* `$cookie=__cfduid` -- blocks CloudFlare cookie everywhere
* `$cookie=/__utm[a-z]/` -- blocks Google Analytics cookies everywhere
* `||facebook.com^$third-party,cookie=c_user` -- prevents Facebook from tracking you even if you are logged in

> **Compatibility with different versions of AdGuard.** This type of rules is not supported by AdGuard for iOS and Safari.

<a id="network-modifier"></a>
#### **`network`**

This is basically a Firewall-kind of rules allowing to fully block or unblock access to a specified remote address.

1. `$network` rules match **IP addresses only**! You cannot use it to block or unblock access to a domain.
2. To match an IPv6 address, you have to use the collapsed syntax, e.g. use `[2001:4860:4860::8888]$network` instead of `[2001:4860:4860:0:0:0:0:8888]$network`.
3. An allowlist `$network` rule makes AdGuard bypass data to the matching endpoint, e.g. there will be no further filtering at all.

##### `network` examples

* `174.129.166.49:3478^$network` - blocks access to `174.129.166.49:3478` (but not to `174.129.166.49:34788`).
* `[2001:4860:4860::8888]:443^$network` - blocks access to `[2001:4860:4860::8888]:443`.
* `174.129.166.49$network` - blocks access to `174.129.166.49:*`.
* `@@174.129.166.49$network` - makes AdGuard bypass data to the endpoint. No other rules will be applied.

> **Compatibility with different versions of AdGuard.** Only AdGuard for Windows, Mac, Android are technically capable of using this type of rules.

<a id="app-modifier"></a>
#### **`app`**

This modifier lets you narrow the rule coverage down to a specific application (or a list of applications). This might be not too important on Windows and Mac, but this is very important on Mobile where some of the filtering rules must be application-specific.

* Android - use the apps' package names (i.e. `org.example.app`).
* Windows - use the process name (i.e. `chrome.exe`).
* Mac - use the bundle ID or the process name (i.e. `com.google.Chrome`).

>For Mac, you can find out the bundle ID or the process name of the app by viewing the respective request details in the Filtering log.

##### `app` examples

* `||baddomain.com^$app=org.example.app` — a rule to block requests that match the specified mask, and are sent from the `org.example.app` Android app.
* `||baddomain.com^$app=org.example.app1|org.example.app2` — the same rule, but it works for both `org.example.app1` and `org.example.app2` apps.

If you want the rule not to be applied to certain apps, start the app name with `~` sign.

##### `app` and `~` examples

* `||baddomain.com^$app=~org.example.app` — a rule to block requests that match the specified mask, and are sent from any app save for the `org.example.app`.
* `||baddomain.com^$app=~org.example.app1|~org.example.app2` — same as above, but now two apps are excluded: `org.example.app1` and `org.example.app2`.

> **Compatibility with different versions of AdGuard.** Only AdGuard for Windows, Mac, Android are technically capable of using this type of rules.

<a id="redirect-modifier"></a>

#### **`redirect`**

AdGuard is able to redirect web requests to a local "resource".

##### `redirect` syntax

AdGuard uses the same filtering rules syntax as uBlock Origin. Also, it is compatible with ABP `$rewrite=abp-resource` modifier.

`$redirect` is a modifier for the [basic filtering rules](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules) so rules with this modifier support all other basic modifiers like `$domain`, `$third-party`, `$script`, etc.

> The value of the `$redirect` modifier must be the name of the resource that will be used for redirection.

> `$redirect` rules' priority is higher than the regular basic blocking rules' priority. This means that if there's a basic blocking rule (even with `$important` modifier), `$redirect` rule will prevail over it. If there's an allowlist (`@@`) rule matching the same URL, it will disable redirecting as well (unless the `$redirect` rule is also marked as `$important`).

##### Disabling `$redirect` rules

* `@@||example.org^$redirect` will disable all `$redirect` rules for URLs that match `||example.org^`.
* `@@||example.org^$redirect=redirectName` will disable all rules with `$redirect=redirectName` for any request that matches `||example.org^`.

##### `redirect` examples

```
||example.org/script.js$script,redirect=noopjs
```

This rule redirects all requests to `example.org/script.js` to the resource named `noopjs`.

```
||example.org/test.mp4$media,redirect=noopmp4-1s
```

This rule redirects all requests to `example.org/test.mp4` to the resource named `noopmp4-1s`.

> More information on scriptlets, redirects, and their usage is available in [this GitHub section](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

> **Compatibility with different versions of AdGuard.** This type of rules is not supported by AdGuard for iOS and Safari.

<a id="redirect-rule-modifier"></a>
#### **`redirect-rule`**
This is basically an alias to `$redirect` since it has the same "redirection" values and the logic is almost similar. The difference is that `$redirect-rule` is applied only in the case when the target request is blocked by a different basic rule.

> Negating `$redirect-rule` works exactly the same way as for regular `$redirect` rules. Even more than that, `@@||example.org^$redirect` will negate both `$redirect` and `$redirect-rule` rules.

Examples:

```
||example.org/script.js
||example.org^$redirect-rule=noopjs
```

In this case, only requests to `example.org/script.js` will be "redirected". All other requests to `example.org` will be kept intact.

<a id="denyallow-modifier"></a>

#### **`denyallow`**

`denyallow` modifier allows to avoid creating additional rules when it is needed to disable a certain rule for a specific domain(s). `denyallow` matches only target domains and not referrer domains.

Adding this modifier to a rule is equivalent to excluding the domains by the rule's matching pattern or to adding the corresponding exclusion rules. To add multiple domains to one rule, use the `|`  character as a separator.

Please note that rules with the `$denyallow` modifier have the following restrictions:

* the rule's matching pattern cannot target any specific domain(s) (e.g., it can't start with `||`)
* domains in the modifier's parameter cannot be negated (e.g. `$denyallow=~x.com`) or have a wildcard TLD (e.g. `$denyallow=x.*`)

The rules which violate these restrictions are considered invalid.

**Example:**

This rule:

```
*$script,domain=a.com|b.com,denyallow=x.com|y.com
```

is equivalent to this one:

```
/^(?!.*(x.com|y.com)).*$/$script,domain=a.com|b.com
```

or to these three:

```
*$script,domain=a.com|b.com
@@||x.com$script,domain=a.com|b.com
@@||y.com$script,domain=a.com|b.com
```

<a id="noop-modifier"></a>
#### **`noop`**

`noop` modifier does nothing and can be used solely to increase rules' readability. It consists of a sequence of underscore characters (`_`) of any length and can appear in a rule as many times as needed.

##### `noop` examples:

```
||example.com$_,removeparam=/^ss\\$/,_,image
||example.com$replace=/bad/good/,___,~third-party
```

> **Compatibility with different versions of AdGuard.** Available in **Developer builds only at this moment.**

<a id="removeheader-modifier"></a>
#### **`$removeheader`**

Rules with `$removeheader` modifier are intended to remove headers from HTTP requests and responses. The initial motivation for this rule type is to be able to get rid of the `Refresh` header which is often used to redirect users to an undesirable location. However, this is not the only case where this modifier can be useful.

Just like `$csp`, `$redirect`, `$removeparam`, and `$cookie`, this modifier exists independently, rules with it do not depend on the regular basic rules, i.e. regular exception or blocking rules will not affect it. By default, it only affects response headers. However, you can also change it to remove headers from HTTP requests as well.

##### Syntax

**Basic syntax**

* `||example.org^$removeheader=header-name` — removes a **response** header called `header-name`
* `||example.org^$removeheader=request:header-name` — removes a **request** header called `header-name`

Please note, that `$removeheader` is case-insensitive, but we suggest always using lower case.

**Negating `$removeheader`**

This type of rules works pretty much the same way it works with `$csp` and `$redirect` modifiers.

Use `@@` to negate `$removeheader`:

* `@@||example.org^$removeheader` — negates **all** `$removeheader` rules for URLs that match `||example.org^`.
* `@@||example.org^$removeheader=header` — negates the rule with `$removeheader=header` for any request matching `||example.org^`.
* `$removeheader` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers don't do that. For example, `@@||example.com^` will not disable `$removeheader=p` for requests to `example.com`, but `@@||example.com^$urlblock` will.

> **Multiple rules matching a single request**
> In case of multiple `$removeheader` rules matching a single request, we will apply each of them one by one.

##### Restrictions

1. Please note that this type of rules can be used **only in trusted filters**. This category includes your own User rules and all the filters created by AdGuard Team.
2. In order to avoid compromising the security `$removeheader` cannot remove headers from the list below:

* `access-control-allow-origin`
* `access-control-allow-credentials`
* `access-control-allow-headers`
* `access-control-allow-methods`
* `access-control-expose-headers`
* `access-control-max-age`
* `access-control-request-headers`
* `access-control-request-method`
* `origin`
* `timing-allow-origin`
* `allow`
* `cross-origin-embedder-policy`
* `cross-origin-opener-policy`
* `cross-origin-resource-policy`
* `content-security-policy`
* `content-security-policy-report-only`
* `expect-ct`
* `feature-policy`
* `origin-isolation`
* `strict-transport-security`
* `upgrade-insecure-requests`
* `x-content-type-options`
* `x-download-options`
* `x-frame-options`
* `x-permitted-cross-domain-policies`
* `x-powered-by`
* `x-xss-protection`
* `public-key-pins`
* `public-key-pins-report-only`
* `sec-websocket-key`
* `sec-websocket-extensions`
* `sec-websocket-accept`
* `sec-websocket-protocol`
* `sec-websocket-version`
* `p3p`
* `sec-fetch-mode`
* `sec-fetch-dest`
* `sec-fetch-site`
* `sec-fetch-user`
* `referrer-policy`
* `content-type`
* `content-length`
* `accept`
* `accept-encoding`
* `host`
* `connection`
* `transfer-encoding`
* `upgrade`

3. `$removeheader` rules are not compatible with any other modifiers except `$domain`, `$third-party`, `$app`, `$important`, `$match-case`, and content type modifiers (e.g. `$script`, `$stylesheet`, etc). The rules which have any other modifiers are considered invalid and will be discarded.

##### Examples

* `||example.org^$removeheader=refresh` — removes `Refresh` header from all HTTP responses returned by `example.org` and its subdomains.
* `||example.org^$removeheader=request:x-client-data` — removes `X-Client-Data` header from all HTTP requests.
* This block of rules removes `Refresh` and `Location` headers from all HTTP responses returned by `example.org` save for requests to `example.org/path/*`, for which no headers will be removed:

    ```
    ||example.org^$removeheader=refresh
    ||example.org^$removeheader=location
    @@||example.org/path/$removeheader
    ```

> **Compatibility with different versions of AdGuard.** Available in **Developer builds only at this moment.**

<a id="non-basic-rules"></a>
# Non-basic rules

However, the capabilities of the basic rules may not be sufficient to block ads. Sometimes you need to hide an element or change part of the HTML code of a web page without breaking anything. The rules described in this section are created specifically for this purpose.

<a id="cosmetic-rules"></a>
## Cosmetic rules

> Work with non-basic rules requires the basic knowledge of HTML and CSS. So, if you want to learn how to make such rules, we recommend to get acquainted with [this documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

<a id="cosmetic-elemhide-rules"></a>
### Element hiding rules

Element hiding rules are used to hide the elements of web pages. It is similar to applying `{ display: none; }` style to selected element.

> Note that element hiding rules may operate differently [depending on the platform](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-rules-priority).

<a id="elemhide-syntax"></a>
#### Syntax

```
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

* **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), defines the elements to be hidden.
* **`domains`** — domain restriction for the rule.

If you want to limit the rule application area to certain domains, just enter them separated with commas. For example: `example.org,example.com##selector`.

> Please note that this rule will be also applied to all subdomains of `example.org` and `example.com`.

If you want the rule not to be applied to certain domains, start a domain name with `~` sign. For example:
`~example.org##selector`.

You can use both approaches in a single rule. For example, `example.org,~subdomain.example.org##domain` will work for `example.org` and all subdomains, **except `subdomain.example.org`**.

> **Please note,** element hiding rules are not dependent on each other. If there is a rule `example.org##selector` in the filter and you add `~example.org##selector` both rules will be applied independently.

<a id="elemhide-examples"></a>
#### Examples

* `example.com##div.textad` — hides a `div` with a class `textad` at `example.com` and all subdomains.
* `example.com,example.org###adblock` - hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
* `~example.com##.textad` - hides an element with a class `textad` at all domains, except `example.com` and its subdomains.

> **Important!** Safari doesn't support both permitted and restricted domains. So the rules like `example.org,~foo.example.org##.textad` are invalid in AdGuard for Safari.

<a id="elemhide-exceptions"></a>
#### Exceptions

Exceptions can disable some rules on particular domains. They are very similar to usual exception rules, but instead of `##` you have to use `#@#`.

For example, there is a rule in filter:
```
##.textad
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com#@#.textad
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain. It will completely disable matching CSS elemhide rule on ALL domains:
```
#@#.textad
```

The same can be achieved by adding this rule:
```
*#@#.textad
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

<a id="cosmetic-css-rules"></a>
### CSS rules

Sometimes, simple hiding of an element is not enough to deal with advertising. For example, blocking an advertising element can just break the page layout. In this case AdGuard can use rules that are much more flexible than hiding rules. With this rules you can basically add any CSS styles to the page.

> **Restrictions.** Styles that lead to loading any resource are forbidden. Basically, it means that you cannot use any `<url>` type of value in the style.

> **Compatibility with different versions of AdGuard.** CSS rules are not supported by AdGuard for iOS.

> Note that CSS rules may operate differently [depending on the platform](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-rules-priority).

<a id="cosmetic-css-rules-syntax"></a>
#### Syntax

```
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

* **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), defines the elements we want to apply the style to.
* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#elemhide-syntax).
* **`style`** — CSS style, that we want to apply to selected elements.

<a id="cosmetic-css-rules-examples"></a>
#### Examples

```
example.com#$#body { background-color: #333!important; }
```

This rule will apply a style `background-color: #333!important;` to the `body` element at `example.com` and all subdomains.

<a id="cosmetic-css-rules-exceptions"></a>
#### Exceptions

Just like with element hiding, there is a type of rules that disable the selected CSS style rule for particular domains.
Exception rules syntax is almost the same, you just have to change `#$#` to `#@$#`.

For example, there is a rule in filter:
```
#$#.textad { visibility: hidden; }
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com#@$#.textad { visibility: hidden; }
```

We recommend to use this kind of exceptions only if it is not possible to change the CSS rule itself. In other cases it is better to change the original rule, using domain restrictions.

<a id="extended-css-selectors"></a>
### Extended CSS selectors

CSS 3.0 is not always enough to block ads. To solve this problem AdGuard extends CSS capabilities by adding support for the new pseudo-elements. To use extended CSS selectors we have developed a separate open source [module](https://github.com/AdguardTeam/ExtendedCss).

> **Application area.** Extended selectors can be used in any cosmetic rule, whether they are [element hiding rules](#cosmetic-elemhide-rules) or [CSS rules](#cosmetic-css-rules).

> **Compatibility with different versions of AdGuard.** Note that CSS rules are not supported by AdGuard for iOS.

#### Syntax

Regardless of the CSS pseudo-classes you are using in the rule, you can use special markers to make these rules use the "Extended CSS" engine. It is recommended to use these markers for all "extended CSS" cosmetic rules so that it was easier to find them.
The syntax for extended CSS rules:

* `#?#` — for element hiding (`#@?#` — for exceptions )
* `#$?#` — for CSS injection (`#@$?#` — for exceptions )

We **strongly recommend** using these markers any time when you use an extended CSS selector.

#### Examples

* `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — this rule blocks all `div` elements containing a child node that has a link with the attributes `[target="_blank"][rel="nofollow"]`. The rule applies only to `example.org` and its subdomains.
* `example.com#$?#h3:contains(cookies) { display: none!important; }` — this rule sets the style `display: none!important` to all `h3` elements that contain the word `cookies`. The rule applies only to `example.com` and all its subdomains.
* `example.net#?#.banner:matches-css(width: 360px)` — this rule blocks all `.banner` elements with the style property `width: 360px`. The rule applies only to `example.net` and its subdomains.
* `example.net#@?#.banner:matches-css(width: 360px)` — this rule will disable the previous rule.

> Please note that now you can apply simple selectors using the ExtCss engine by using a rule like this:
> `#?#div`

> For more information on how to debug ExtendedCSS selectors, jump to [this section](#selectors-debugging-mode) of the artcile.


<a id="extended-css-has"></a>
##### Pseudo-class `:has()`

Draft CSS 4.0 specification describes [pseudo-class `:has`](https://drafts.csswg.org/selectors/#relational). Unfortunately, it is not yet supported by browsers.

**Syntax**
```
:has(selector)
```

Backward compatible syntax:
```
[-ext-has="selector"]
```

Supported synonyms for better compatibility: `:-abp-has`, `:if`.

Pseudo-class `:has()` selects the elements that includes the elements that fit to `selector`.

**Examples**

Selecting  all `div` elements, which contain an element with the `banner` class:

```html
<!-- HTML code -->
<div>Do not select this div</div>
<div>Select this div<span class="banner"></span></div>
```

Selector:
```
div:has(.banner)
```

Backward compatible syntax:
```
div[-ext-has=".banner"]
```

<a id="extended-css-if-not"></a>
##### Pseudo-class `:if-not()`

This pseudo-class is basically a shortcut for `:not(:has())`. It is supported by ExtendedCss for better compatibility with some filters subscriptions, but it is not recommended to use it in AdGuard filters. The rationale is that one day browsers will add `:has` native support, but it will never happen to this pseudo-class.

<a id="extended-css-contains"></a>
##### Pseudo-class `:contains()`

This pseudo-class principle is very simple: it allows to select the elements that contain specified text or which content matches a specified regular expression. Regex flags are supported. Please note that this pseudo-class uses `textContent` element property for matching (and not the `innerHTML`).

**Syntax**
```
// matching by plain text
:contains(text)

// matching by a regular expression
:contains(/regex/i)
```

Backward compatible syntax:
```
// matching by plain text
[-ext-contains="text"]

// matching by a regular expression
[-ext-contains="/regex/"]
```

> Supported synonyms for better compatibility: `:-abp-contains`, `:has-text`.

**Examples**

Selecting all `div` elements, which contain text `banner`:
```html
<!-- HTML code -->
<div>Do not select this div</div>
<div id="selected">Select this div (banner)</div>
<div>Do not select this div <div class="banner"></div></div>
```

Selector:
```
// matching by plain text
div:contains(banner)

// matching by a regular expression
div:contains(/this .* banner/)

// also with regex flags
div:contains(/this .* banner/gi)
```

Backward compatible syntax:
```
// matching by plain text
div[-ext-contains="banner"]

// matching by a regular expression
div[-ext-contains="/this .* banner/"]
```

> Please note that in this example only a `div` with `id=selected` will be selected, because the next element does not contain any text; `banner` is a part of code, not a text.

<a id="extended-css-matches-css"></a>
##### Pseudo-class `:matches-css()`

These pseudo-classes allow to select an element by its current style property. The work of this pseudo-class is based on using the [`window.getComputedStyle`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) function.

**Syntax**
```
/* element style matching */
selector:matches-css(property-name ":" pattern)

/* ::before pseudo-element style matching */
selector:matches-css-before(property-name ":" pattern)

/* ::after pseudo-element style matching */
selector:matches-css-after(property-name ":" pattern)
```

Backward compatible syntax:
```
selector[-ext-matches-css="property-name ":" pattern"]
selector[-ext-matches-css-after="property-name ":" pattern"]
selector[-ext-matches-css-before="property-name ":" pattern"]
```

- `property-name` — a name of CSS property to check the element for
- `pattern` —  a value pattern that is using the same simple wildcard matching as in the basic url filtering rules OR a regular expression. For this type of matching, AdGuard always does matching in a case insensitive manner. In the case of a regular expression, the pattern looks like `/regex/`.

> For non-regex patterns, `(`,`)`,`[`,`]` must be unescaped, because we require escaping them in the filtering rules.

> For regex patterns, `"` and `\` should be escaped, because we manually escape those in extended-css-selector.js.

**Examples**

Selecting all `div` elements which contain pseudo-class `::before` with specified content:
```html
<!-- HTML code -->
<style type="text/css">
    #to-be-blocked::before {
        content: "Block me"
    }
</style>
<div id="to-be-blocked" class="banner"></div>
<div id="not-to-be-blocked" class="banner"></div>
```

Selector:
```
// Simple matching
div.banner:matches-css-before(content: block me)

// Regular expressions
div.banner:matches-css-before(content: /block me/)
```

Backward compatible syntax:
```
// Simple matching
div.banner[-ext-matches-css-before="content: block me"]

// Regular expressions
div.banner[-ext-matches-css-before="content: /block me/"]
```

<a id="extended-css-matches-attr"></a>
##### Pseudo-class `:matches-attr()`

This pseudo-class allows to select an element by its attributes, especially if they are randomized.

**Syntax**
```
selector:matches-attr("name"[="value"])
```

- `name` — attribute name OR regular expression for attribute name
- `value` — optional, attribute value OR regular expression for attribute value

> For regex patterns, `"` and `\` should be escaped.

**Examples**

```html
<!-- HTML code -->
<div id="targer1" class="matches-attr" hsd4jkf-link="ssdgsg-banner_240x400"></div>

<div id="targer2" class="has matches-attr">
  <div data-sdfghlhw="adbanner"></div>
</div>

<div id="targer3-host" class="matches-attr has contains">
  <div id="not-targer3" wsdfg-unit012="click">
    <span>socials</span>
  </div>
  <div id="targer3" hrewq-unit094="click">
    <span>ads</span>
  </div>
</div>

<div id="targer4" class="matches-attr upward">
  <div >
    <inner-afhhw class="nyf5tx3" nt4f5be90delay="1000"></inner-afhhw>
  </div>
</div>
```

```
// for div#targer1
div:matches-attr("/-link/")

// for div#targer2
div:has(> div:matches-attr("/data-/"="adbanner"))

// for div#targer3
div:matches-attr("/-unit/"="/click/"):has(> span:contains(ads))

// for div#targer4
*[class]:matches-attr("/.{5,}delay$/"="/^[0-9]*$/"):upward(2)
```

<a id="extended-css-matches-property"></a>
##### Pseudo-class `:matches-property()`

This pseudo-class allows to select an element by its properties.

**Syntax**
```
selector:matches-property("name"[="value"])
```

- `name` — property name OR regular expression for property name
- `value` — optional, property value OR regular expression for property value

> For regex patterns, `"` and `\` should be escaped.

> `name` supports regexp for property in chain, e.g. `prop./^unit[\\d]{4}$/.type`

**Examples**

```javascript
divProperties = {
    id: 1,
    check: {
        track: true,
        unit_2ksdf1: true,
    },
    memoizedProps: {
        key: null,
        tag: 12,
        _owner: {
            effectTag: 1,
            src: 'ad.com',
        },
    },
};
```

```
// element with such properties can be matched by any of such rules:

div:matches-property("check.track")

div:matches-property("check./^unit_.{4,6}$/"))

div:matches-property("memoizedProps.key"="null")

div:matches-property("memoizedProps._owner.src"="/ad/")
```

<details>
  <summary><b>For filters maintainers</b></summary>

  To check properties of specific element, do:
  1. Select the element on the page.
  2. Go to Console tab and run `console.dir($0)`.
</details>

<a id="extended-css-xpath"></a>
##### Pseudo-class `:xpath()`

This pseudo-class allows to select an element by evaluating an XPath expression.

> **Can be placed only at the end of a selector, except for [pseudo-class `:remove()`](#remove-pseudos).**

The `:xpath()` pseudo-class is different from other pseudo-classes. Whereas all other operators are used to filter down a resultset of elements, the `:xpath()` operator can be used both to create a new resultset or filter down an existing one. For this reason, subject `selector` is optional. For example, an `:xpath()` operator could be used to create a new resultset consisting of all ancestor elements of a subject element, something not otherwise possible with either plain CSS selectors or other procedural operators.

**Syntax**
```
[selector]:xpath(expression)
```

- `selector`- optional, a plain CSS selector, or a Sizzle compatible selector
- `expression` — a valid XPath expression

**Examples**
```
// Filtering results from selector
div:xpath(//*[@class="test-xpath-class"])
div:has-text(/test-xpath-content/):xpath(../../..)

// Use xpath only to select elements
facebook.com##:xpath(//div[@id="stream_pagelet"]//div[starts-with(@id,"hyperfeed_story_id_")][.//h6//span/text()="People You May Know"])
```

<a id="extended-css-nth-ancestor"></a>
##### Pseudo-class `:nth-ancestor()`

This pseudo-class allows to lookup the nth ancestor relative to the currently selected node.

It is a low-overhead equivalent to `:xpath(..[/..]*)`.

> **Can be placed only at the end of a selector, except for [pseudo-class `:remove()`](#remove-pseudos).**

**Syntax**
```
selector:nth-ancestor(n)
```
- `selector` — a plain CSS selector, or a Sizzle compatible selector.
- `n` — positive number >= 1 and < 256, distance from the currently selected node.

**Examples**
```
div.test:nth-ancestor(4)

div:has-text(/test/):nth-ancestor(2)
```

<a id="extended-css-upward"></a>
##### Pseudo-class `:upward()`

This pseudo-class allows to lookup the ancestor relative to the currently selected node.

> **Can be placed only at the end of a selector, except for [pseudo-class `:remove()`](#remove-pseudos).**

**Syntax**
```
/* selector parameter */
subjectSelector:upward(targetSelector)

/* number parameter */
subjectSelector:upward(n)
```
- `subjectSelector` — a plain CSS selector, or a Sizzle compatible selector
- `targetSelector` — a valid plain CSS selector
- `n` — positive number >= 1 and < 256, distance from the currently selected node

**Examples**
```
div.child:upward(div[id])
div:contains(test):upward(div[class^="parent-wrapper-")

div.test:upward(4)
div:has-text(/test/):upward(2)
```

<a id="remove-pseudos"></a>
##### Pseudo-class `:remove()` and pseudo-property `remove`

Sometimes, it is necessary to remove a matching element instead of hiding it or applying custom styles. In order to do it, you can use pseudo-class `:remove()` as well as pseudo-property `remove`.

> **Pseudo-class `:remove()` can be placed only at the end of a selector.**

**Syntax**
```
! pseudo-class
selector:remove()

! pseudo-property
selector { remove: true; }
```
- `selector` — a plain CSS selector, or a Sizzle compatible selector

**Examples**
```
div.inner:remove()
div:has(> div[ad-attr]):remove()
div:xpath(../..):remove()

div:contains(target text) { remove: true; }
div[class]:has(> a:not([id])) { remove: true; }
```

> Please note that all style properties will be ignored if `:remove()` pseudo-class or `remove` pseudo-property is used.

<a id="cosmetic-rules-priority"></a>
### Cosmetic rules priority

The way **element hiding** and **CSS rules** are applied is platform-specific.

**In AdGuard for Windows, Mac, and Android**, we use a stylesheet injected into the page. The priority of cosmetic rules is the same as any other websites' CSS stylesheet. But there is a limitation: [element hiding](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#elemhide-rules) and [CSS](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-css-rules) rules cannot override inline styles. In such cases, it's recommended to use extended selectors or HTML filtering.

**In AdGuard browser extensions**, the so called "user stylesheets" are used. They have higher priority than even the inline styles.

**Extended CSS selectors** use Javascript to work and basically add an inline style themselves, therefore they can override any style.

<a id="html-filtering-rules"></a>
## HTML filtering rules

In most cases, the basis and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML-code of the page itself before it is loaded. This is when you need filtering rules for HTML content. They allow to indicate the HTML elements to be cut out before the browser loads the page.

> **Compatibility with different versions of AdGuard.** Rules are supported by AdGuard for Windows, Mac, Android and by the AdGuard's Firefox add-on. This type of rules don't work in extensions for other browsers because they are unable to modify content on network level.

<a id="html-filtering-rules-syntax"></a>
### Syntax

```
      rule = [domains] "$$" tagName [attributes]
   domains = [domain0, domain1[, ...[, domainN]]]
attributes = "[" name0 = value0 "]" "[" name1 = value2 "]" ... "[" nameN = valueN "]"
```

* **`tagName`** — name of the element in lower case, for example `div` or `script`.
* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules syntax](#elemhide-syntax).
* **`attributes`** — a list of attributes, that limit the elements selection. `name` - attribute name, `value` - substring, that is contained in attribute value.

<a id="html-filtering-rules-examples"></a>
### Example

**HTML code**
```html
<script data-src="/banner.js"></script>
```

**Rule**
```
example.org$$script[data-src="banner"]
```

This rule removes all `script` elements with the attribute `data-src` containing the substring `banner`. The rule applies only to `example.org` and all its subdomains.

<a id="html-filtering-rules-attributes"></a>
#### Special attributes

In addition to usual attribures, which value is every element checked for, there is a set of special attributes that change the way a rule works. Below there is a list of these attributes:

<a id="tag-content-attribute"></a>
##### `tag-content`

This is the most frequently used special attribute. It limits selection with those elements whose innerHTML code contains the specified substring.

> You should use `""` to escape `"`, for instance:
> `$$script[tag-content="alert(""this is ad"")"]`

For example, let's take a look at this HTML code:
```html
<script type="text/javascript">
    document.write('<div>banner text</div>" />');
</script>
```

Following rule will delete all `script` elements with a `banner` substring in their code:
```
$$script[tag-content="banner"]
```

> **Nested elements.** If we are dealing with multiple nested elements and they all fall within the same HTML filtering rule, they all are going to be deleted.

<a id="wildcard-attribute"></a>
##### `wildcard`

This special attribute works almost like `tag-content` and allows you to check the innerHTML code of the document. Rule will check if HTML code of the element fits to the [search pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

> You should use `""` to escape `"`, for instance:
> `$$script[wildcard=""banner""]`

For example:
`$$script[wildcard="*banner*text*"]`

It will check, if the element's code contains two consecutive substrings `banner` and `text`.

<a id="max-length-attribute"></a>
##### `max-length`

Specifies the maximum length for content of HTML element. If this parameter is set and the content length exceeds the value - a rule does not apply to the element.

> **Default value.** If this parameter is not specified, the `max-length` is considered to be 8192.

For example:
```
$$div[tag-content="banner"][max-length="400"]
```
This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which does not exceed `400` characters.

<a id="min-length-attribute"></a>
##### `min-length`

Specifies the minimum length for content of HTML element. If this parameter is set and the content length is less than preset value - a rule does not apply to the element.

For example:
```
$$div[tag-content="banner"][min-length="400"]
```

This rule will remove all the `div` elements, whose code contains the substring `banner` and the length of which exceeds `400` characters.

<a id="html-filtering-rules-exceptions"></a>
#### Exceptions

Similar to hiding rules, there is a special type of rules that disable the selected HTML filtering rule for particular domains.
The syntax is the same, you just have to change `$$` to `$@$`.

For example, there is a rule in filter:
```
$$script[tag-content="banner"]
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com$@$script[tag-content="banner"]
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.
```
$@$script[tag-content="banner"]
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

<a id="javascript-rules"></a>
## Javascript rules

AdGuard supports a special type of rules that allows you to inject any javascript code to websites pages.

> **Restrictions.** Please note that this type of rules can be used **only in trusted filters**. This category includes your own **User filter** and all the filters created by AdGuard Team.

> **Compatibility with different versions of AdGuard.** Javascript rules aren't supported by AdGuard for iOS.

We **strongly recommend** using scriptlets instead of Javascript rules whenever possible. JS rules are supposed to help with debugging, but as a long-time solution a scriptlet rule should be used.

<a id="javascript-rules-syntax"></a>
### Syntax

```
rule = [domains]  "#%#" script
```

* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#elemhide-syntax).
* **`script`** — arbitrary javascript code **in one string**.

<a id="javascript-rules-examples"></a>
### Examples

* `example.org#%#window.__gaq = undefined;` — executes the code `window.__gaq = undefined;` on all pages at `example.org` and all subdomains.

<a id="javascript-rules-exceptions"></a>
### Exceptions

Similar to hiding rules, there is a special type of rules that disable the selected javascript rule for particular domains.
The syntax is the same, you just have to change `#%#` to `#@%#`.

For example, there is a rule in filter:
```
#%#window.__gaq = undefined;
```

If you want to disable it for `example.com`, you can create an exception rule:
```
example.com#@%#window.__gaq = undefined;
```

Sometimes, it may be necessary to disable all restriction rules. For example, to conduct tests. To do this, use the exclusion rule without specifying a domain.
```
#@%#window.__gaq = undefined;
```

We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other cases it is better to change the original rule, using domain restrictions.

<a id="scriptlets"></a>
## Scriptlet rules

Scriptlet is a JavaScript function that provides extended capabilities for content blocking. These functions can be used in a declarative manner in AdGuard filtering rules.

> AdGuard supports a lot of different scriptlets. Please note that in order to achieve cross-blocker compatibility, we also support syntax of uBO and ABP.

> **Compatibility with different versions of AdGuard.** Scriptlet rules aren't supported by AdGuard for iOS.

<a id="scriptlets-syntax"></a>
### Syntax
```
rule = [domains]  "#%#//scriptlet(" scriptletName arguments ")"
```

`scriptletName` (mandatory) is a name of the scriptlet from AdGuard's scriptlets library
`arguments` (optional) is a list of String arguments (no other types of arguments are supported)

<a id="scriptlets-examples"></a>
### Examples

```
example.org#%#//scriptlet("abort-on-property-read", "alert")
```
This rule will be applied to example.org pages (and its subdomains) and will execute the "abort-on-property-read" scriptlet with the "alert" parameter.

More information about scriptlets can be found [on GitHub](https://github.com/AdguardTeam/Scriptlets#scriptlets).

> For more information on how to debug scriptlets, jump to [this section](#debug-scriptlets) of the artcile.


<a id="non-basic-rules-modifiers"></a>(#)
## Modifiers
Each rule can be modified using the modifiers described in the following paragraphs.

<a id="non-basic-rules-modifiers-syntax"></a>
### Syntax

```
rule = "[$" modifiers "]" [rule text]
modifiers = modifier0[, modifier1[, ...[, modifierN]]]
```

* `modifier` - set of the modifiers described below.
* `rule text` - a rule to be modified.

For example: `[$domain=example.com,app=test_app]##selector`.

In the modifiers values of the following characters must be escaped: `[`, `]`, `,`, and `\` (unless
it's used for the escaping). Use `\` to escape them. For example, an escaped bracket looks like
this: `\]`.

<a id="non-basic-rules-modifiers-app"></a>
### app

`app` lets you narrow the rule coverage down to a specific application (or a list of applications).

The modifier's behavior and syntax perfectly match the corresponding [$app modifier](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#app) of basic rules.

`app` examples:
* `[$app=org.example.app]example.com##.textad` - hides a `div` with a class `textad` at `example.com` and all subdomains in requests sent from the `org.example.app` Android app.
* `[$app=~org.example.app1|~org.example.app2]example.com##.textad` - hides a `div` with a class `textad` at `example.com` and all subdomains in requests sent from any app except `org.example.app1` and `org.example.app2`.
* `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')`. This rule will apply the corresponding scriptlet only in Safari browser on Mac.
* `[$app=org.example.app]#@#.textad` — disables all `##.textad` rules for all domains while using `org.example.app`.

> **Compatibility with different versions of AdGuard.** This type of rules is supported by AdGuard for Windows, Mac and Android. **Developer builds only at this moment.**

<a id="non-basic-rules-modifiers-domain"></a>
### domain

`domain` limits the rule application area to a list of domains (and their subdomains).
The modifier's behavior and syntax perfectly match the corresponding
[$domain modifier](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#domain) of
basic rules.

`domain` examples:
* `[$domain=example.com]##.textad` — hides a `div` with a class `textad` at `example.com` and all subdomains.
* `[$domain=example.com|example.org]###adblock` - hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
* `[$domain=~example.com]##.textad` - this rule hides `div` elements of the class `textad` for all domains, except `example.com` and its subdomains.

Please note that there are 2 ways to specify domain restrictions for non-basic rules:
    1) the "classic" way is to specify domains before rule mask and attributes: `example.com##.textad`
    2) the modifier approach is to specify domains via `domain` modifier: `[$domain=example.com]##.textad`

But rules with mixed style domains restriction are considered invalid. So, for example, the rule
`[$domain=example.org]example.com##.textad` will be rejected.

> **Compatibility with different versions of AdGuard.** This type of rules is supported by AdGuard for Windows, Mac and Android. **Developer builds only at this moment.**

<a id="non-basic-rules-modifiers-path"></a>
### path

`path` limits the rule application area to specific locations or pages on websites.

#### Syntax
```
path=pattern
```

`pattern` is a path mask to which the rule is restricted. Its syntax and behavior are pretty much the same as with the [pattern for basic rules](#basic-rules-syntax). You can also use [special characters](#basic-rules-special-characters), except for `||`, which does not make any sense in this case (see examples below).


> Please note that `path` modifier matches the query string as well.

> `path` modifier supports regular expressions in [the same way](#regexp-support) basic rules do.

`path` examples:
* `[$path=page.html]##.textad` - hides a `div` with a class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` or `/another_page.html`
* `[$path=/page.html]##.textad` - hides a `div` with a class `textad` at `/page.html` or `/page.html?<query>` or `/sub/page.html` of any domain but not at `/another_page.html`
* `[$path=|/page.html]##.textad` - hides a `div` with a class `textad` at `/page.html` or `/page.html?<query>` of any domain but not at `/sub/page.html`
* `[$path=/page.html|]##.textad` - hides a `div` with a class `textad` at `/page.html` or `/sub/page.html` of any domain but not at `/page.html?<query>` 
* `[$path=/page*.html]example.com##.textad` - hides a `div` with a class `textad` at `/page1.html` or `/page2.html` or any other path matching `/page<...>.html` of `example.com`
* `[$domain=example.com,path=/page.html]##.textad` - hides a `div` with a class `textad` at `page.html` of `example.com` and all subdomains but not at `another_page.html`
* `[$path=/\\/(sub1|sub2)\\/page\\.html/]##.textad` - hides a `div` with a class `textad` at both `/sub1/page.html` and `/sub2/page.html` of any domain (please, note the [escaped special characters](#non-basic-rules-modifiers-syntax))

> **Compatibility with different versions of AdGuard.** Rules with `path` modifier are supported by AdGuard for Windows, Mac, Android, and AdGuard browser extensions for Chrome, Firefox, Edge. **Developer builds only at this moment.**

<a id="for_maintainers"></a>
## Information for filters maintainers

If you maintain a third-party filter that is known to AdGuard, you might be interested in the information presented in this section. Please note that hints will be applied to registered filters only. The filter is considered to be registered and known by AdGuard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json).  If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

<a id="pre_processor"></a>
### Pre-processor directives

We provide pre-processor directives that can be used by filters maintainers to improve compatibility with different ad blockers and provide:
* [including a file](#include-directive)
* [applying rules conditionally by ad blocker type](#conditions-directive)
* [content blocker specifying for rules applying in Safari](#safari-affinity-directive)

> Please note that any mistake in a pre-processor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.

> Pre-processor directives can be used in the User Rules or in the custom filters.

<a id="include-directive"></a>
#### Including a file

The `!#include` directive allows to include contents of a specified file into the filter. It supports only files from the same origin to make sure that the filter maintainer is in control of the specified file. The included file can also contain pre-processor directives (even other `!#include` directives). Ad blockers should consider the case of recursive `!#include` and implement a protection mechanism.

**Syntax**
```
!#include file_path
```
- `file_path` — same origin absolute or relative file path to be included

> The files must originate from the same domain but may be located in a different folder.

> If included file is not found or unavailable, the whole filter update should fail.

> Same-origin limitation should be disabled for local custom filters.

**Examples**

Filter URL: `https://example.org/path/filter.txt`
```
! Valid (same origin):
!#include https://example.org/path/includedfile.txt
!
! Valid (relative path):
!#include /includedfile.txt
!#include ../path2/includedfile.txt
!
! Invalid (another origin):
!#include https://domain.com/path/includedfile.txt
```

<a id="conditions-directive"></a>
#### Conditions

Filters maintainers can use conditions to supply different rules depending on the ad blocker type. When an adblocker encounters an `!#if` directive, followed eventually by an `!#endif` directive, it will compile the code inside of the directives block only if the specified condition is true. Condition supports all the basic logical operators.

> A conditional directive beginning with an `!#if` directive must explicitly be terminated with an `!#endif` directive.

> Whitespaces matter. `!#if` is a valid directive, while `!# if` is not.

**Syntax**
```
!#if (conditions)
rules_list
!#endif
```
- `!#if (conditions)` — start of the block
- `conditions` — just like in some popular programming languages, pre-processor conditions are based on constants declared by ad blockers. Ad blocker authors define on their own what exact constants do they declare. Possible values:
  - `adguard` — declared always; shows maintainers that this is one of AdGuard products; should be enough in 95% of cases
  - product-specific constants for cases when you need a rule to work (or not work — then `!` should be used before constant) in a specific product only:
    - `adguard_app_windows` — AdGuard for Windows
    - `adguard_app_mac` — AdGuard for Mac
    - `adguard_app_android` — AdGuard for Android
    - `adguard_app_ios` — AdGuard for iOS
    - `adguard_ext_safari` — AdGuard for Safari
    - `adguard_ext_chromium` — AdGuard Browser extension for Chrome (and chromium-based browsers, e.g. new Microsoft Edge)
    - `adguard_ext_firefox` — AdGuard Browser extension for Firefox
    - `adguard_ext_edge` — AdGuard Browser extension for Edge Legacy
    - `adguard_ext_opera` — AdGuard Browser extension for Opera
    - `adguard_ext_android_cb` — AdGuard Content Blocker for mobile Samsung and Yandex browsers
    - `ext_ublock` — special case; this one is declared when a uBlock version of a filter is compiled by the [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry)
- `rules_list` — list of rules
- `!#endif` — end of the block

**Examples**
```
! for all AdGuard propucts except AdGuard for Safari
!#if (adguard && !adguard_ext_safari)
||example.org^$third-party
domain.com##div.ad
!#endif
```

```
! directives even can be combined
!#if (adguard_app_android)
!#include /androidspecific.txt
!#endif
```

<a id="safari-affinity-directive"></a>
#### Safari affinity

Safari is notoriously known for its harsh 50k max limit for filtering rules in content blockers. But in AdGuard for Safari and AdGuard for iOS max rule count is raised to 300k by splitting them into several content blockers. Generally, several filters categories are more or less independent, so there is such content blockers with such categories included:
- AdGuard General — Ad Blocking, Language-specific
- AdGuard Privacy — Privacy
- AdGuard Social — Social Widgets, Annoyances
- AdGuard Security — Security
- AdGuard Other — Other
- AdGuard Custom — Custom

> `User rules` and `Allowlist` are added to every content blocker.

The main issue with using multiple content blockers is that rules inside these content blockers cannot influence each other. This may lead to different unexpected issues. So filters maintainers may use `!#safari_cb_affinity` to define Safari content blockers affinity for the rules inside of the directive block.

**Syntax**
```
!#safari_cb_affinity(content_blockers)
rules_list
!#safari_cb_affinity
```
- `!#safari_cb_affinity(content_blockers)` — start of the block
- `content_blockers` — comma-separated list of content blockers. Possible values:
  - `general` — AdGuard General content blocker
  - `privacy` — AdGuard Privacy content blocker
  - `social` — AdGuard Social content blocker
  - `security` — AdGuard Security content blocker
  - `other` — AdGuard Other content blocker
  - `custom` — AdGuard Custom content blocker
  - `all` — special keyword that means that the rules must be included into **all** content blockers
- `rules_list` — list of rules
- `!#safari_cb_affinity` — end of the block

**Examples**
```
! to unhide specific element which is hidden by AdGuard Base filter:
!#safari_cb_affinity(general)
example.org#@#.adBanner
!#safari_cb_affinity
```
```
! to allowlist basic rule from AdGuard Tracking Protection filter filter:
!#safari_cb_affinity(privacy)
@@||example.org^
!#safari_cb_affinity
```

<a id="hints"></a>
### Hints
"Hint" is a special comment, instruction to the filters compiler used on the server side (see [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry)).

<a id="hints_syntax"></a>
#### Syntax
```
!+ HINT_NAME1(PARAMS) HINT_NAME2(PARAMS)
```
Note, that you can apply multiple hints.

<a id="not_optimized"></a>
#### NOT_OPTIMIZED hint

For each filter, AdGuard compiles two versions: full and optimized. Optimized version is much more lightweight and does not contain rules which are not used at all or used rarely.

Rules usage frequency comes from the collected [filter rules statistics](https://kb.adguard.com/en/general/filter-rules-statistics). But filters optimization is based on more than that — some filters have specific configuration. This is how it looks like for Base filter:

```
"filter": AdGuard Base filter,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true
```
Where:

* **filter** — filter identifier
* **percent** — expected optimization percent `~= (rules count in optimized filter) / (rules count in original filter) * 100`
* **minPercent** — lower bound of `percent` value
* **maxPercent** — upper bound of `percent` value
* **strict** — if `percent < minPercent` OR `percent > maxPercent` and strict mode is on then filter compilation should fail, otherwise original rules must be used

>In other words, `percent` is the "compression level". For instance, for the Base filter it is configured to 40%. It means that optimization algorithm should strip 60% of rules.

Eventually, here are the two versions of the Base filter for AdGuard browser extension:
- full: https://filters.adtidy.org/extension/chromium/filters/2.txt
- optimized: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt


**Important: If you want to add a rule which shouldn't be removed at optimization use the NOT_OPTIMIZED hint:**

```
!+ NOT_OPTIMIZED
||example.org^
```

**And this rule won't be optimized only for AdGuard for Android:**

```
!+ NOT_OPTIMIZED PLATFORM(android)
||example.org^
```

<a id="platform_not_platform"></a>
#### PLATFORM and NOT_PLATFORM hints

Specify which platforms can apply this rule. List of existing platforms:


* windows - Example: English filter for Windows - [https://filters.adtidy.org/windows/filters/2.txt](https://filters.adtidy.org/windows/filters/2.txt)

* mac - Example: English filter for Mac - [https://filters.adtidy.org/mac_v2/filters/2.txt](https://filters.adtidy.org/mac_v2/filters/2.txt)

* android - Example: English filter for Android - [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

* ios - Example: English filter for iOS - [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

* ext_chromium - Example: AdGuard browser extension for Chrome - [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

* ext_ff - Example: AdGuard browser extension for Firefox - [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

* ext_edge - Example: AdGuard browser extension for Edge - [https://filters.adtidy.org/extension/edge/filters/2.txt](https://filters.adtidy.org/extension/edge/filters/2.txt)

* ext_opera - Example: AdGuard browser extension for Opera - [https://filters.adtidy.org/extension/opera/filters/2.txt](https://filters.adtidy.org/extension/opera/filters/2.txt)

* ext_ublock - Example: uBlock Origin - [https://filters.adtidy.org/extension/ublock/filters/2.txt](https://filters.adtidy.org/extension/ublock/filters/2.txt)

* ext_safari - Example: AdGuard browser extension for Safari - [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

* ext_android_cb - Example: AdGuard Content Blocker - [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

Examples:

This rule will be available for Windows, Mac, and Android only:

```
!+ PLATFORM(windows,mac,android)
||example.org^
```

This rule will be available for every platform except Safari extension, iOS, and Android content blocker:

```
!+ NOT_PLATFORM(ext_safari, ext_android_cb, ios)
||example.org^
```


<a id="how-to-debug"></a>
## How to debug filtering rules

It may be possible to create simple filtering rules "in your head", but for anything even slightly more complicated you'd need additional tools to debug and iterate them. There are tools to assist you with that. You can use DevTools in Chrome and its analogs in other browsers, but most AdGuard products provide another one: Filtering log.

<a id="debug-filtering-log"></a>
### Filtering log

Filtering log is an advanced tool that will be helpful mostly to filter developers. It lists all web requests that pass through AdGuard, gives you exhaustive information on each of them, offers multiple sorting options, and has other useful features.

Depending on which AdGuard product you're using, Filtering log can be located in different places.

* In **AdGuard for Windows** you'll find it inside *Ad Blocker* tab or via the tray menu;
* In **AdGuard for Mac** it's under *Settings > Advanced > Filtering log*;
* In **AdGuard for Android** it's a separate item in the side menu, also filtering log for a specific app or website is accessible from the Assistant.
* In **AdGuard browser extensions** it's accessible from the *Miscellaneous* settings tab or by right-clicking the extension icon. Only Chromium- and Firefox-based browsers show applied **element hiding rules** (including CSS, ExtCSS) and **JS rules and scriptlets** in their Filtering logs.

> In **AdGuard for iOS** and in **AdGuard for Safari** Filtering log does not exist because of the way content blockers are implemented in Safari. AdGuard doesn't see the web requests and therefore can't display them.

<a id="selectors-debugging-mode"></a>
### Selectors debugging mode

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with javascript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the debug mode either for a single selector or for all selectors, depending on the `debug` value. Open the browser console while on a web page to see the timing statistics for selector(s) that were applied there. Debugging mode displays the following stats for each of the debugged selectors:

`array`: time that it took to apply the selector on the page, for each of the instances that it's been applied (in milliseconds)
`length`: total number of times that the selector has been applied on the page
`mean`: mean time that it took to apply the selector on the page
`stddev`: standard deviation
`squaredSum`: sum of squared deviations from the mean
`sum`: total time it took to apply the selector on the page across all instances


#### Examples

**Debugging a single selector**

When the value of the `debug` property is `true`, only information about this selector will be shown in the browser console.

```
#$?#.banner { display: none; debug: true; }
```

**Enabling global debug**

When the value of the `debug` property is `global`, the console will display information about all ExtendedCSS selectors that have matches on the current page, for all ExtendedCSS rules from any of the enabled filters.

```
#$?#.banner { display: none; debug: global; }
```

<a id="testing-extended-selectors"></a>
#### Testing extended selectors without AdGuard

If you don't have AdGuard installed, you can still test extended selectors, but you'll have to load ExtendedCSS to the current page first. To do so, copy and execute the following code in the browser console:

```
!function(E,x,t,C,s,s_){C=E.createElement(x),s=E.getElementsByTagName(x)[0],C.src=t,
C.onload=function(){alert('ExtCss loaded successfully')},s.parentNode.insertBefore(C,s)}
(document,'script','https://AdguardTeam.github.io/ExtendedCss/extended-css.min.js')
```

Alternatively, install an "ExtendedCssDebugger" userscript: https://github.com/AdguardTeam/Userscripts/blob/master/extendedCssDebugger/extended-css.debugger.user.js

You can now use the `ExtendedCss` constructor in the global scope, and its method `ExtendedCss.query` as `document.querySelectorAll`.
```
var selectorText = "div.block[-ext-has='.header:matches-css-after(content: Anzeige)']";

ExtendedCss.query(selectorText) // returns an array of Elements matching selectorText
```

<a id="debug-scriptlets"></a>
### Debugging scriptlets

If you're using AdGuard browser extension and want to debug a [scriptlet rule](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#scriptlets), you can get additional information by simpy having the Filtering log opened. In that case, scriptlets will switch to debug mode and will write more information to the browser's console.

The following scriptlets may be especially useful for debug purposes:

[`debug-current-inline-script`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-current-inline-script)
[`debug-on-property-read`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#debug-on-property-read)
[`debug-on-property-write`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#abort-on-property-write)
[`log-addEventListener`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-addEventListener)
[`log-eval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log-eval)
[`log`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#log)

The following scriptlets may be used for debug purposes when applied without any parameters:

[`requestAnimationFrame`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-requestanimationframe)
[`prevent-setInterval`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-setinterval)
[`prevent-setTimeout`](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-scriptlets.md#prevent-settimeout)


<a id="good-luck"></a>
## Good luck with creating filters!

We wish you luck with creating you own ad filters.

If you need an advice on how to create your own filters properly, our forum has a [special section](https://forum.adguard.com/index.php?forums/69/) dedicated to writing your own filtering rules.
