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
        * [Example: Popular CSS selectors](#example-popular-css-selectors)
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
            * [$other](#other-modifier)
        * [Exception rules modifiers](#exceptions-modifiers)
            * [$elemhide](#elemhide-modifier)
            * [$content](#content-modifier)
            * [$jsinject](#jsinject-modifier)
            * [$urlblock](#urlblock-modifier)
            * [$extension](#extension-modifier)
            * [$document](#document-modifier)
            * [$stealth](#stealth-modifier)
            * [Generic rules](#generic-rules)
                * [$generichide](#generichide-modifier)
                * [$genericblock](#genericblock-modifier)
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
* [Non-basic rules](#non-basic-rules)
    * [Cosmetic rules](#cosmetic-rules)
        * [Element hiding rules](#cosmetic-elemhide-rules)
            * [Syntax](#elemhide-syntax)
            * [Examples](#elemhide-examples)
            * [Exceptions](#elemhide-exceptions)
        * [CSS rules](#cosmetic-css-rules)
            * [Syntax](#cosmetic-css-rules-syntax)
            * [Examples](#cosmetic-css-rules-examples)
            * [Exceptions](#cosmetic-css-rules-exceptions)
        * [Extended CSS selectors](#extended-css-selectors)
            * [Pseudo-class `:has()`](#extended-css-has)
            * [Pseudo-class `:if-not()`](#extended-css-has)
            * [Pseudo-class `:contains()`](#extended-css-contains)
            * [Pseudo-class `:matches-css()`](#extended-css-matches-css)
            * [Pseudo-class `:xpath()`](#extended-css-xpath)
            * [Pseudo-class `:nth-ancestor()`](#extended-css-nth-ancestor)
            * [Selectors debugging mode](#selectors-debugging-mode)
            * [Testing extended selectors](#testing-extended-selectors)
    * [HTML filtering rules](#html-filtering-rules)
        * [Syntax](#html-filtering-rules-syntax)
        * [Examples](#html-filtering-rules-examples)
        * [Special attributes](#html-filtering-rules-attributes)
           * [tag-content](#tag-content-attribute)
           * [wildcard](#wildcard-attribute)
           * [max-length](#max-length-attribute)
           * [min-length](#min-length-attribute)
        * [Exceptions](#html-filtering-rules-exceptions)
    * [JavaScript rules](#javascript-rules)
        * [Syntax](#javascript-rules-syntax)
        * [Examples](#javascript-rules-examples)
        * [Exceptions](#javascript-rules-exceptions)
    * [Scriptlets](#scriptlets)
        * [Syntax](#scriptlets-syntax)
        * [Examples](#scriptlets-examples)
    * [Modifiers](#non-basic-rules-modifiers)
        * [Syntax](#non-basic-rules-modifiers-syntax)
        * [$app](#non-basic-rules-modifiers-app)
        * [$domain](#non-basic-rules-modifiers-domain)
* [Information for filters maintainers](#for_maintainers)
    * [Pre-processor directives](#pre_processor)
    * [Hints](#hints)
        * [Hints syntax](#hints_syntax)
        * [NOT_OPTIMIZED hint](#not_optimized)
        * [PLATFORM and NOT_PLATFORM hints](#platform_not_platform)
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
* `http://example.org/redirect/http://ads.example.org/`

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
| Attribute substring selector | `div[class^="advert1"]	`   | Matches all `div` elements which `class` attribute **starts with** the `advert1` string.<br/>![](https://cdn.adguard.com/public/Adguard/kb/en/rules_syntax/css_class_attr_start.png) |
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

* **`pattern`** — address mask. Every request's URL is collated to this mask. You can also use special characters in the template, their description is [below](#basic-rules-special-characters).
* **`@@`** — A marker that is used in rules of exception. To turn off filtering for a request, start your rule with this marker.
* **`modifiers`** — Parameters that "clarify" the basic rule. Some of them limit the scope of the rule and some can completely change they way it works.

<a id="basic-rules-special-characters"></a>
### Special characters

* ```*``` — Wildcard character. It is used to represent "any set of characters". This can also be an empty string or a string of any length.
* **`||`** — Matching the beginning of an address. With this character you don't have to specify a particular protocol and subdomain in address mask. It means, `||` stands for `http://*.`, `https://*.`, `ws://*.`, `wss://*.` at once.
* **`^`** — Separator character mark. Separator character is any character, but a letter, a digit, or one of the following: `_` `-` `.` `%`. In this example separator characters are shown in bold: `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3`. The end of the address is also accepted as separator.
* **`|`** — A pointer to the beginning or the end of address. The value depends on the character placement in the mask. For example, a rule `swf|` corresponds to `http://example.com/annoyingflash.swf` , but not to `http://example.com/swf/index.html`. `|http://example.org` corresponds to `http://example.org`, but not to `http://domain.com?url=http://example.org`.

> #### Visual representation
> We recommend to get acquainted with [this article](https://adblockplus.org/filter-cheatsheet#blocking), for better understanding of how such rules should be made.

<a id="regexp-support"></a>
### Regular expressions support

If you want even more flexibility in making rules, you can use [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) instead of a default simplified mask with special characters. 

> #### Performance
> Rules with regular expressions work more slowly, therefore it is recommended to avoid them or to limit their scope to specific domains.

If you want a blocker to determine a regular expression, the `pattern` has to look like this:
```
pattern = "/" regexp "/"
```

For example, `/banner\d+/$third-party` this rule will apply the regular expression `banner\d+` to all third-party requests. Exclusion rule with regular expression looks like this: `@@/banner\d+/`.

> #### Compatibility with different versions of AdGuard
> AdGuard browser extension for Safari and AdGuard for iOS do not fully support regular expressions because of [Content Blocking API restrictions](https://webkit.org/blog/3476/content-blockers-first-look/) (look for "The Regular expression format" section).

<a id="wildcard-for-tld"></a>
### Wildcard support for TLD (top-level domains)

Wildcard characters are supported for TLDs of the domains in patterns of cosmetic, html and javascript rules.
For example, the cosmetic rule `example.*##.banner` will match any `example.TLD` request (`example.ru`, `example.com`, `example.net`, `example.org`, etc.).
For the basic rules the described logic will be applicable only for the domains specified in `$domain` modifier (for example, `||*/banners/*$image,domain=example.*`).

<a id="basic-rules-examples"></a>
### Basic rules examples

* `||example.com/ads/*` — a simple rule, which corresponds to addresses like `http://example.com/ads/banner.jpg` and even `http://subdomain.example.com/ads/otherbanner.jpg`.

* `||example.org^$third-party` —  a rule that blocks third-party requests to` example.org` and it's subdomains.

* `@@||example.com$document` — general exception rule. It completely disables filtering for `example.com` and all subdomains. There is a number of modifiers which can be used in exception rules. For more details, please follow the link [below](#exceptions-modifiers).

<a id="basic-rules-modifiers"></a>
### Modifiers

> #### Attention
> The features described in this section are intended for experienced users. They extend capabilities of "Basic rules", but in order to use them you need to have a basic undestanding of the way your browser works.

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

* `||baddomain.com^$domain=~example.org` — a rule to block requests that match the specified mask, and are sent from any domain except `example.org` or it's subdomains.
* `||baddomain.com^$domain=example.org|~foo.example.org` — this rule blocks requests that are sent from `example.org` and all it's subdomains, except the subdomain `foo.example.org`.

<a id="third-party-modifier"></a>
##### **`third-party`**

A restriction of third-party and own requests. A third-party request is a request from different domain. For example, a request to `example.org`, from `domain.com` is a third-party request. 

> #### Subdomains
> Please note that request from domain to it's subdomain (or vice versa) is not considered a third-party request. For example, a request to `subdomain.example.org`, sent from the domain` example.org` is not a third-party request. 

If there is a `third-party` modifier, the rule is only applied to third-party request.

###### `third-party` examples

* `||domain.com^$third-party` — rule is applied to all domains, except `domain.com` and it's subdomains. Third-party request example: `http://example.org/banner.jpg`.

If there is a `~third-party` modifier, the rule is only applied to the requests that are not from third-party. Which means, they have to be sent from the same domain.

###### `~third-party` examples

* `||domain.com$~third-party` — this rule is applied to `domain.com`, but not to the other domains. Example of a request that is not a third-party request: `http://domain.com/icon.ico`.

<a id="popup-modifier"></a>
##### **`popup`**

AdGuard will try to close the browser tab with any address that matches a blocking rule with this modifier. Please note, that not all the tabs can be closed.

###### `popup`examples

* `||domain.com^$popup` — if you try to go to `http://domain.com/` from any page in the browser, a new tab in which specified site has to be opened will be closed by this rule.

<a id="match-case-modifier"></a>
##### **`match-case`**

This modifier defines a rule which applies only to addresses that match the case. Default rules are case-insensitive.

###### `match-case` examples

* `*/BannerAd.gif$match-case` — this rule will block `http://example.com/BannerAd.gif`, but not `http://example.com/bannerad.gif`.

<a id="content-type-modifiers"></a>
#### Restriction by content type

There is a set of modifiers, which can be used to limit the rule's application area to certain type of content. These modifiers can also be combined to cover, for example, both images and scripts.

> #### Compatibility with different versions of AdGuard
>  Please note that there is a big difference in how AdGuard determines the content type on different platforms. For browser extensions, content type for every request is provided by browser. AdGuard for Windows, Mac and Android use following method: first we try to determine the type of request by filename extension. If the request is not blocked at this stage, the type will be determined using the `Content-Type` header at the beginning of the server response.

<a id="content-type-modifiers-examples"></a>
##### Content type modifiers examples

* `||example.org^$image` — corresponds to all images from `example.org`.
* `||example.org^$script,stylesheet` — corresponds to all the scripts and styles from `example.org`.
* `||example.org^$~image,~script,~stylesheet` — corresponds to all requests to `example.org` except for the images, scripts and styles.

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

> #### Compatibility with different versions of AdGuard
> AdGuard for Windows, macOS and Android often can't accurately determine this type and defines it as `other`.

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

> #### Compatibility with different versions of AdGuard
> This modifier is only supported in AdGuard browser extension.

<a id="xmlhttprequest-modifier"></a>
##### **`xmlhttprequest`**

The rule applies only to ajax requests (requests sent via javascript object `XMLHttpRequest`).

> #### Compatibility with different versions of AdGuard
> AdGuard for Windows, macOS and Android often can't accurately determine this type and defines it as `other` or `script`.

<a id="websocket-modifier"></a>
##### **`websocket`**

The rule applies only to WebSocket connections.

<a id="other-modifier"></a>
##### **`other`**

The rule applies to requests for which the type has not been determined or doesn't match the types listed above.

<a id="exceptions-modifiers"></a>
#### Exception modifiers

Exception rules disable the other basic rules for the addresses to which they correspond. They begin with a `@@` mark. All the basic modifiers listed above can be applied to them and they also have a few special modifiers.

> #### Visual representation
> We recommend to get acquainted with [this article](https://adblockplus.org/filter-cheatsheet#blocking), for better understanding of how exception rules should be made.

<a id="elemhide-modifier"></a>
##### **`elemhide`**

Disables any cosmetic rules on the pages matching the rule. You will find the information about cosmetic rules [further](#cosmetic-rules).

###### `elemhide` example

* `@@||example.com^$elemhide` — disables all cosmetic rules on pages at `example.com` and all subdomains.

<a id="content-modifier"></a>
##### **`content`**

Disables HTML filtering rules on the pages matching the rule. You will find the information about HTML filtering rules [further](#html-filtering-rules).

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

Disables all userscripts on the pages matching this rule.

###### `extension` example

* `@@||example.com^$extension` — userscripts won't work on all pages of the `example.com` website.

<a id="document-modifier"></a>
##### **`document`**

Completely disables blocking on corresponding pages. It is equal to simultaneous use of `elemhide`, `content`, `urlblock`, `jsinject` and `extension`.

###### `document` example

* `@@||example.com^$document` — completely disables filtering on all pages at `example.com` and all subdomains.
* `@@||example.com^$document,~extension` — completely disables blocking on any pages at `example.com` and all subdomains, but continues to run userscripts there.

<a id="stealth-modifier"></a>
##### **`stealth`**

Disables the Stealth Mode for all corresponding pages and requests.

> #### Compatibility with different versions of AdGuard
> Stealth Mode is currently available in AdGuard for Windows, Mac, Android and AdGuard browser extension. For now, the products that do not support Stealth Mode will ignore the rules with this modifier.

###### `stealth` examples

* `@@||example.com^$stealth` — disables `Stealth Mode` for `example.com` (and subdomains) requests.
* `@@||domain.com^$script,stealth,domain=example.com` — disables `Stealth Mode` only for script `domain.com` (and subdomains) requests on `example.com` and all subdomains.

<a id="generic-rules"></a>
##### Generic rules

Before we can proceed to the next modifiers, we have to make a definition of _generic rules_. The rule is generic if it is not limited to specific domains.

For example, these rules are generic:
```
###banner
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

<a id="advanced-modifiers"></a>
### Advanced capabilities

These modifiers are able to completely change the behaviour of basic rules.

<a id="removeparam-modifier"></a>

#### **`removeparam`**

Rules with `$removeparam` modifier are intended to effectively extend Stealth Mode's capabilities to strip tracking parameters from pages’ URLs. *Please note*, that such rules are only applied to `GET` requests.

> #### Compatibility with different versions of AdGuard
> Rules with `$removeparam` modifier are supported by AdGuard for Windows, Mac, and Android.

> #### Multiple rules matching a single request
> In case if multiple `$removeparam` rules match a single request, we will apply each of them one by one.

> #### Restrictions
> Please note that this type of rules can be used **only in trusted filters**. This category includes your own **User filter** and all the filters created by AdGuard Team.

> #### Compatibility with other modifiers
> `$removeparam` rules are not compatible with any other modifiers except `$domain`, `$third-party`, `$app`, `$important` and `$match-case`. The rules which have any other modifiers are considered invalid and will be rejected.

##### Syntax

To specify a parameter affected by the rule one should use the following syntax:

* `$removeparam=param` -- removes parameter with name `param` from URL queries of any request, e.g. a request to `http://example.com/page?param=1&another=2` will be transformed to
  `http://example.com/page?another=2`.

Use `|` to separate parameters:

* `$removeparam=p1|p2` -- removes parameters `p1` and `p2` from URL queries of any request, e.g. a request to `http://example.com/page?p1=1&p2&p3` will be transformed to `http://example.com/page?p3`.

> **Please note** that a blocking rule with `$removeparam` parameter must have at least one parameter specified. For example, rule such as `example.com$removeparam` is considered invalid and will be rejected.

Parameters are matched lexicographically. It means that the rule `$removeparam=param` won't strip the parameter named `Param` or `some_param`. If you want to overcome this behavior, you can use regular expressions:

```
removeparam = "/" regex "/" options
```

, where 

* `regex` - a regular expression according to [Perl syntax](http://perldoc.perl.org/perlrequick.html#Search-and-replace),
* `options` - regular expression options.

The list of supported options for regular expressions:

* `i` - makes matching case-insensitive.

Examples:

* `$removeparam=/param/` -- removes parameters matching the pattern `param` from URL queries of any request, e.g. a request to `http://example.com/page?param=1&some_pArAm=2` will be transformed to `http://example.com/page?some_pArAm=2`
* `$removeparam=/param/i` -- removes parameters matching the pattern `param` case-insensitively from URL queries of any request, e.g. a request to `http://example.com/page?param=1&some_pArAm=2` will be transformed to `http://example.com/page`

> **Important:** don't forget to escape special characters like `,`, `/` and `$` in regular expressions. Use `\` character for it. For example, escaped comma should look like this: `\,`.

`|`-separated lists also support regular expressions: `$removeparam=p1|/p2/i|/p3/|p4`.

Use exceptions if you don't want to strip some URLs:

1) Example 1:

    ```
    $removeparam=gclid|yclid|fbclid
    @@||example.com^$removeparam=gclid
    ```
With these rules Google, Yandex and Facebook Click IDs will be stripped out, except that requests to `example.com` won't be stripped of Google Click ID. E.g. `http://google.com/page?gclid=1&fbclid=2&yclid=3` will be transformed to `http://google.com/page`, but `http://example.com/page?gclid=1&fbclid=2&yclid=3` will be transformed to `http://example.com/page?gclid=1`.

2) Example 2:

    ```
    $removeparam=utm_source|utm_medium|utm_term
    $removeparam=utm_content|utm_campaign|utm_referrer
    @@||example.com^$removeparam
    ```
With these rules some [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters) will be stripped out from any request, except that requests to `example.com` won't be stripped at all, e.g. `http://google.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` will be transformed to `http://google.com/page`, but `http://example.com/page?utm_source=s&utm_referrer=fb.com&utm_content=img` won't be affected by the blocking rule.

> **Please note** that blocking `$removeparam` rules can also be disabled by `$document` and `$urlblock` exception rules. But basic exception rules without modifiers don't do that. For example, `@@||example.com^` will not disable `$removeparam=p` for requests to example.com, but `@@||example.com^$urlblock` will.


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

> #### Compatibility with different versions of AdGuard
> `badfilter` modifier is currently only available in AdGuard browser extensions. It will be added to other AdGuard products later.

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

##### `badfilter` examples

* `||example.com$badfilter` disables `||example.com`
* `||example.com$image,badfilter` disables `||example.com,image`
* `@@||example.com$badfilter` disables `@@||example.com`
* `||example.com$domain=domain.com,badfilter` disables `||example.com$domain=domain.com`

> #### Compatibility with different versions of AdGuard
> Below modifiers from this section are only available in AdGuard for Windows, macOS and Android. Browser extension capabilities are limited by browser itself and some methods are just not available to them.

<a id="empty-modifier"></a>
#### **`empty`**

Usually, blocked requests look like a server error to browser. If you use `empty` modifier, AdGuard will emulate a blank response from the server with` 200 OK` status.

##### `empty` example

* `||example.org^$empty` — returns an empty response to all requests to `example.org` and all subdomains.

<a id="mp4-modifier"></a>
#### **`mp4`**

As a response to blocked request AdGuard returns a short video placeholder.

##### `mp4` example

* `||example.com/videos/$mp4` — block a video downloads from `||example.com/videos/*` and changes the response to a video placeholder.

<a id="replace-modifier"></a>
#### **`replace`**

This modifier completely changes the rule behavior. If it is applied, the rule will not block the request. The response is going to be modified instead. 

> #### Please note
> You will need some knowledge of regular expressions to use this modifier.

> #### Compatibility with different versions of AdGuard
> Rules are supported by AdGuard for Windows, Mac, Android and by the AdGuard's Firefox add-on.
> This type of rules don't work in extensions for other browsers because they are unable to modify content on the network level.

##### `$replace` rules features

* `$replace` rules apply to any text response, but will not apply to binary (`media`, `image`, `object`, etc).
* `$replace` rules do not apply if the size of the original response is more than 3MB.
* `$replace` rules have a higher priority than other basic rules (**including** exception rules). So if a request corresponds to two different rules one of which has the `$replace` modifier, this rule will be applied.
* Document-level exception rules with `$content` or `$document` modifiers do disable `$replace` rules for requests matching them.
* Other document-level exception rules (`$generichide`, `$elemhide` or `$jsinject` modifiers) are applied alongside `$replace` rules. It means that you can modify the page's content with a `$replace` rule and disable cosmetic rules there at the same time.

> `$replace` value can be empty in the case of exception rules. See examples section for further information.

> #### Multiple rules matching a single request
> In case if multiple `$replace` rules match a single request, we will apply each of them. **The order is defined alphabetically.**

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
* Replacement: `\$1<\/VAST>` (please note, that `$` is escaped)
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

<a id="csp-modifier"></a>
#### **`csp`**

This modifier completely changes the rule behavior. If it is applied to a rule, it will not block the matching request. The response headers are going to be modified instead.

> In order to use this type of rules, it is required to have the basic understanding of the [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) security layer.

For the requests matching a `$csp` rule, we will strengthen response's security policy by adding additional content security policy equal to the `$csp` modifier contents. `$csp` rules are applied independently from any other rule type. Other basic rules have no influence on it **save for document-level exceptions** (see the examples section).

>Multiple rules matching a single request.
>In case if multiple `$csp` rules match a single request, we will apply each of them.

##### **`csp` syntax**

`$csp` value syntax is similar to the Content Security Policy header syntax.

`$csp` value can be empty in the case of exception rules. See examples section for further information.

>Limitations

>1. Please note, that there're a few characters forbidden in the `$csp` value: (`,`), (`$`)
>2. `csp` rules support limited list of modifiers: `domain`, `important`, `subdocument`
>3. Rules with `report-*` directives are considered invalid.

##### `csp` examples

* `||example.org^$csp=frame-src 'none'` — prohibits all frames on example.org and it's subdomains.
* `@@||example.org/page/*$csp=frame-src 'none'` — disables all rules with the `$csp` modifier exactly matching `frame-src 'none'` on all the pages matching the rule pattern. For instance, the rule above.
* `@@||example.org/page/*$csp` — disables all the `$csp` rules on all the pages matching the rule pattern.
* `||example.org^$csp=script-src 'self' 'unsafe-eval' http: https:` — disables inline scripts on all the pages matching the rule pattern.
* `@@||example.org^$document` or `@@||example.org^$urlblock` — disables all the `$csp` rules on all the pages matching the rule pattern.

<a id="cookie-modifier"></a>
#### **`cookie`**

The `$cookie` modifier completely changes rule behavior. Instead of blocking a request, this modifier makes us suppress or modify the `Cookie` and `Set-Cookie` headers.

> **Multiple rules matching a single request**
> In case if multiple `$cookie` rules match a single request, we will apply each of them one by one.

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

> **Limitations**
> `$cookie` rules support a limited list of modifiers: `domain`, `~domain`, `important`, `third-party`, `~third-party`.

##### Real-life examples
* `$cookie=__cfduid` -- blocks CloudFlare cookie everywhere
* `$cookie=/__utm[a-z]/` -- blocks Google Analytics cookies everywhere
* `||facebook.com^$third-party,cookie=c_user` -- prevents Facebook from tracking you even if you are logged in

<a id="network-modifier"></a>
#### **`network`**

This is basically a Firewall-kind of rules allowing to fully block or unblock access to a specified remote address.

> #### Compatibility with different versions of AdGuard
> Only AdGuard for Windows, Mac, Android are technically capable of using this type of rules.

1. `$network` rules match **IP addresses only**! You cannot use it to block or unblock access to a domain.
2. To match an IPv6 address, you have to use the collapsed syntax, e.g. use `[2001:4860:4860::8888]$network` instead of `[2001:4860:4860:0:0:0:0:8888]$network`.
3. A whitelist `$network` rule makes AdGuard bypass data to the matching endpoint, e.g. there will be no further filtering at all.

##### `network` examples

* `174.129.166.49:3478^$network` - blocks access to `174.129.166.49:3478` (but not to `174.129.166.49:34788`).
* `[2001:4860:4860::8888]:443^$network` - blocks access to `[2001:4860:4860::8888]:443`.
* `174.129.166.49$network` - blocks access to `174.129.166.49:*`.
* `@@174.129.166.49$network` - makes AdGuard bypass data to the endpoint. No other rules will be applied.

<a id="app-modifier"></a>
#### **`app`**

This modifier lets you narrow the rule coverage down to a specific application (or a list of applications). This might be not too important on Windows and Mac, but this is very important on Mobile where some of the filtering rules must be application-specific.

* Android - use the apps' package names (i.e. `org.example.app`).
* Windows - use the process name (i.e. `chrome.exe`).
* Mac - use the bundle ID or the process name (i.e. `com.google.Chrome`).

>For Mac, you can find out the bundle ID or the process name of the app by viewing the respective request details in the Filtering log

In the case of Android, use the apps' package names (i.e. `org.example.app`). In the case of Windows

##### `app` examples 

* `||baddomain.com^$app=org.example.app` — a rule to block requests that match the specified mask, and are sent from the `com.adguard.android` Android app.
* `||baddomain.com^$app=org.example.app1|org.example.app2` — the same rule, but it works for both `org.example.app1` and `org.example.app2` apps.

If you want the rule not to be applied to certain apps, start the app name with `~` sign.

##### `app` and `~` examples

* `||baddomain.com^$app=~org.example.app` — a rule to block requests that match the specified mask, and are sent from any app save for the `org.example.app`.
* `||baddomain.com^$domain=~org.example.app1|~org.example.app2` — same as above, but now two apps are excluded: `org.example.app1` and `org.example.app2`.

<a id="redirect-modifier"></a>
#### `redirect`
AdGuard is able to redirect web requests to a local "resource".

##### `redirect` syntax

AdGuard uses the same filtering rules syntax as uBlock Origin. Also, it is compatible with ABP `$rewrite=abp-resource` modifier.

`$redirect` is a modifier for the [basic filtering rules](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules) so rules with this modifier support all other basic modifiers like `$domain`, `$third-party`, `$script`, etc.

>The value of the `$redirect` modifier must be the name of the resource that will be used for redirection.

>`$redirect` rules' priority is higher than the regular basic blocking rules' priority. This means that if there's a basic blocking rule (even with `$important` modifier), `$redirect` rule will prevail over it. If there's a whitelist (@@) rule matching the same URL, it will disable redirecting as well (unless the `$redirect` rule is also marked as `$important`).

##### `redirect` examples

```
||example.org/script.js$script,redirect=noopjs
```
This rule redirects all requests to script.js to the resource named noop.js.

```
||example.org/test.mp4$media,redirect=noopmp4-1s
```
This rule redirects all requests to example.org/test.mp4 to the resource named noopmp4-1s.

>More information on scriptlets, redirects, and their usage is available in [this GitHub section](https://github.com/AdguardTeam/Scriptlets#redirect-resources).

<a id="non-basic-rules"></a>
# Non-basic rules

However, the capabilities of the basic rules may not be sufficient to block ads. Sometimes you need to hide an element or change part of the HTML code of a web page without breaking anything. The rules described in this section are created specifically for this purpose.

<a id="cosmetic-rules"></a>
## Cosmetic rules

> Work with non-basic rules requires the basic knowledge of HTML and CSS. So, if you want to learn how to make such rules, we recommend to get acquainted with [this documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

<a id="cosmetic-elemhide-rules"></a>
### Element hiding rules

Element hiding rules are used to hide the elements of web pages. It is similar to applying `{ display: none; }` style to selected element.

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

> #### Please note
> Element hiding rules are not dependent on each other. If there is a rule `example.org##selector` in the filter and you add `~example.org##selector` both rules will be applied independently.

<a id="elemhide-examples"></a>
#### Examples

* `example.com##.textad` — hides a `div` with a class `textad` at `example.com` and all subdomains.
* `example.com,example.org###adblock` - hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
* `~example.com##.textad` - hides a `div` with a class `textad` at all domains, except `example.com` and it's subdomains.

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
We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other case it is better to change the original rule, using domain restrictions.

> #### Please note
> Exception rule without any particular domains in it does not make sense and will be ignored.

<a id="cosmetic-css-rules"></a>
### CSS rules

Sometimes, simple hiding of an element is not enough to deal with advertising. For example, blocking an advertising element can just break the page layout. In this case AdGuard can use rules that are much more flexible than hiding rules. With this rules you can basically add any CSS styles to the page.

> #### Restrictions
> Styles that lead to loading any resource are forbidden. Basically, it means that you cannot use any `<url>` type of value in the style.

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

We recommend to use this kind of exceptions only if it is not possible to change the CSS rule itself. In other case it is better to change the original rule, using domain restrictions.

<a id="extended-css-selectors"></a>
### Extended CSS selectors

CSS 3.0 is not always enough to block ads. To solve this problem AdGuard extends CSS capabilities by adding support for the new pseudo-elements. To use extended CSS selectors we have developed a separate open source [module](https://github.com/AdguardTeam/ExtendedCss).

> #### Backward compatibility
> In common filters we use so-called backward compatible syntax. The thing is, extended pseudo-classes can break cosmetic rules in previous versions of AdGuard or in other ad blockers that do not support extended CSS. For example, instead of pseudo-class `:has(selector)` it is possible to use `[-ext-has="selector"]` attribute.

> #### Application area
> Extended selectors can be used in any cosmetic rule, whether they are [element hiding rules](#cosmetic-elemhide-rules) or [CSS rules](#cosmetic-css-rules).

#### Syntax
Regardless of the CSS pseudo-classes you are using in the rule, you can use special markers to make these rules use the "Extended CSS" engine. It is recommended to use these markers for all "extended CSS" cosmetic rules so that it was easier to find them.
The syntax for extended CSS rules:
* `#?#` — for element hiding (`#@?#` — for exceptions )
* `#$?#` — for CSS injection (`#@$?#` — for exceptions )

#### Examples

* `example.org#?#div:has(> a[target="_blank"][rel="nofollow"])` — this rule will block all `div` elements that contain link as a child node with `[target="_blank"][rel="nofollow"]` attributes. The rule will only work for `example.org` and all it's subdomains.
* `example.com#$?#h3:contains(cookies) { display: none!important; }` — this rule will set style  `display: none!important` for all `h3` elements that contain `cookies` word. The rule will only work for `example.com` and all it's subdomains.
* `example.net#?#.banner:matches-css(width: 360px)` — this rule will block all `.banner` elements that contain `width: 360px` style property. The rule will only work for `example.net` and all it's subdomains.
* `example.net#@?#.banner:matches-css(width: 360px)` — this rule will disable the previous rule.

> Please note, that now you can apply simple selectors using the ExtCss engine by using a rule like this:
> `#?#div`

<a id="extended-css-has"></a>
##### Pseudo-class `:has()`

Draft CSS 4.0 specification describes [pseudo-class `:has`](https://drafts.csswg.org/selectors/#relational). Unfortunately, it is not yet supported by browsers.

###### `:has()` syntax

```
:has(selector)
```

Backward compatible syntax:
```
[-ext-has="selector"]
```

Supported synonyms for better compatibility: `:-abp-has`, `:if`.

Pseudo-class `:has()` selects the elements that includes the elements that fit to `selector`.

###### `:has()` examples

Selecting  all `div` elements, which contain an element with the `banner` class.

**HTML code**
```html
<div>Do not select this div</div>
<div>Select this div<span class="banner"></span></div>
```

**Selector**
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

This pseudo-class principle is very simple: it allows to select the elements that contain specified text or which content matches a specified regular expression. Please note, that this pseudo-class uses `innerText` element property for matching (and not the `innerHTML`).

###### `:contains()` syntax

```
// matching by plain text
:contains(text)

// matching by a regular expression
:contains(/regex/)
:contains(/regex/gi)
```

Backward compatible syntax:
```
// matching by plain text
[-ext-contains="text"]

// matching by a regular expression
[-ext-contains="/regex/"]
```

Supported synonyms for better compatibility: `:-abp-contains`, `:has-text`.

###### `:contains()` examples

Selecting all `div` elements, which contain text `banner`.

**HTML code**
```html
<div>Do not select this div</div>
<div id="selected">Select this div (banner)</div>
<div>Do not select this div <div class="banner"></div></div>
```

**Selector**
```
// matching by plain text
div:contains(banner)

// matching by a regular expression
div:contains(/this .* banner/)
// regex flags are supported
div:contains(/this .* banner/gi)
```

Backward compatible syntax:
```
// matching by plain text
div[-ext-contains="banner"]

// matching by a regular expression
div[-ext-contains="/this .* banner/"]
```

Please note that in this example only a `div` with `id=selected` will be selected, because the next element does not contain any text (`banner` is a part of code, not text).

<a id="extended-css-matches-css"></a>
##### Pseudo-class `:matches-css()`

These pseudo-classes allow to select an element by its current style property. The work of this pseudo-class is based on using the [`window.getComputedStyle`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) function.

###### `:matches-css()` syntax

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

###### `property-name`
A name of CSS property to check the element for.

###### `pattern`
This can be either a value pattern that is using the same simple wildcard matching as in the basic url filtering rules or it can be a regular expression. For this type of matching, AdGuard always does matching in a case insensitive manner.

In the case of a regular expression, the pattern looks like `/regex/`.

> * For non-regex patterns, (`,`),[`,`] must be unescaped, because we require escaping them in the filtering rules.
> * For regex patterns, [`"`],[`,`],[`\`] should be escaped, because we manually escape those in extended-css-selector.js.

###### `:matches-css()` examples

Selecting all `div` elements which contain pseudo-class `::before` with specified content.

**HTML code**
```html
<style type="text/css">
    #to-be-blocked::before {
        content: "Block me"
    }
</style>
<div id="to-be-blocked" class="banner"></div>
<div id="not-to-be-blocked" class="banner"></div>
```

**Selector**
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

<a id="extended-css-xpath"></a>
#### Pseudo-class `:xpath()`

This pseudo-class allows to select an element by evaluating an XPath expression.
> **Limited to work properly only at the end of selector.**

The `:xpath(...)` pseudo is different than other pseudo-classes. Whereas all other operators are used to filter down a resultset of elements, the `:xpath(...)` operator can be used both to create a new resultset or filter down an existing one. For this reason, subject `selector` is optional. For example, an `:xpath(...)` operator could be used to create a new resultset consisting of all ancestor elements of a subject element, something not otherwise possible with either plain CSS selectors or other procedural operators.

#### `:xpath()` syntax

```
[selector]:xpath(expression)
```

##### `selector`
Optional. Can be a plain CSS selector, or a Sizzle compatible selector.

##### `expression`
A valid XPath expression.

##### `:xpath()` examples

```
// Filtering results from selector
div:xpath(//*[@class="test-xpath-class"])
div:has-text(/test-xpath-content/):xpath(../../..)
// Use xpath only to select elements
facebook.com##:xpath(//div[@id="stream_pagelet"]//div[starts-with(@id,"hyperfeed_story_id_")][.//h6//span/text()="People You May Know"])
```

<a id="extended-css-nth-ancestor"></a>
#### Pseudo-class `:nth-ancestor()`

This pseudo-class allows to lookup the nth ancestor relative to the currently selected node.
> **Limited to work properly only at the end of selector.**

It is a low-overhead equivalent to :xpath(..[/..]*)

#### `:nth-ancestor()` syntax

```
selector:nth-ancestor(n)
```

##### `selector`
Can be a plain CSS selector, or a Sizzle compatible selector.

##### `n`
Positive number >= 1 and < 256, distance from the currently selected node.

##### `:nth-ancestor()` examples

```
div.test:nth-ancestor(4)
div:has-text(/test/):nth-ancestor(2)
```

<a id="selectors-debugging-mode"></a>
##### Selectors debugging mode

Sometimes, you might need to check the performance of a given selector or a stylesheet. In order to do it without interacting with javascript directly, you can use a special `debug` style property. When `ExtendedCss` meets this property, it enables the "debug"-mode either for a single selector or for all selectors depending on the `debug` value.

**Debugging a single selector**
```
#$#.banner { display: none; debug: true; }
```

**Enabling global debug**
```
#$#.banner { display: none; debug: global; }
```

<a id="testing-extended-selectors"></a>
##### Testing extended selectors

To load ExtendedCss to a current page, copy and execute the following code in a browser console:
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

<a id="html-filtering-rules"></a>
## HTML filtering rules

In most cases, the basis and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML-code of the page itself before it is loaded. This is when you need filtering rules for HTML content. They allow to indicate the HTML elements to be cut out before the browser loads the page.

> #### Compatibility with different versions of AdGuard
> Rules are supported by AdGuard for Windows, Mac, Android and by the AdGuard's Firefox add-on.
> This type of rules don't work in extensions for other browsers because they are unable to modify content on network level.

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

This rule will delete all `script` elements with `data-src` attribute that contain `banner` substring. The rule will only work for `example.org` and all it's subdomains.

<a id="html-filtering-rules-attributes"></a>
#### Special attributes

In addition to usual attribures, which value is every element checked for, there is a set of special attributes that change the way a rule works. Below there is a list of these attributes:

<a id="tag-content-attribute"></a>
##### `tag-content`

This is the most frequently used special attribute. It limits selection with those elements whose innerHTML code contains the specified substring.

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

> #### Nested elements
> If we are dealing with multiple nested elements and they all fall within the same HTML filtering rule, they all are going to be deleted.

<a id="wildcard-attribute"></a>
##### `wildcard`

This special attribute works almost like `tag-content` and allows you to check the innerHTML code of the document. Rule will check if HTML code of the element fits to the [search pattern](https://en.wikipedia.org/wiki/Glob_(programming)).

For example:
`$$script[wildcard="*banner*text*"]`

It will check, if the element's code contains two consecutive substrings `banner` and `text`.

<a id="max-length-attribute"></a>
##### `max-length`

Specifies the maximum length for content of HTML element. If this parameter is set and the content length exceeds the value - a rule does not apply to the element.

> #### Default setting
>  If this parameter is not specified, the `max-length` is considered to be 8192.

For example:
```
$$div[tag-content="banner"][max-length="400"]
```
This rule will remove all the `div` elements, whose code contains the substring` banner` and the length of which does not exceed `400` characters.

<a id="min-length-attribute"></a>
##### `min-length`

Specifies the minimum length for content of HTML element. If this parameter is set and the content length is less than preset value - a rule does not apply to the element.

For example:
```
$$div[tag-content="banner"][min-length="400"]
```

This rule will remove all the `div` elements, whose code contains the substring` banner` and the length of which exceeds `400` characters.

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

<a id="javascript-rules"></a>
## Javascript rules

AdGuard supports a special type of rules that allows you to inject any javascript code to websites pages.

> #### Restrictions
> Please note that this type of rules can be used **only in trusted filters**. This category includes your own **User filter** and all the filters created by AdGuard Team.

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
<a id="scriptlets"></a>
## Scriptlet rules

Scriptlet is a JavaScript function that provides extended capabilities for content blocking. These functions can be used in a declarative manner in AdGuard filtering rules.

>AdGuard supports a lot of different scriptlets. Please note, that in order to achieve cross-blocker compatibility, we also support syntax of uBO and ABP.

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
The modifier's behavior and syntax perfectly match the corresponding
[$app modifier](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#app) of basic
rules.

`app` examples:
* `[$app=org.example.app]example.com##.textad` - hides a `div` with a class `textad` at `example.com` and all subdomains in requests sent from the `org.example.app` Android app.
* `[$app=~org.example.app1|~org.example.app2]example.com##.textad` - hides a `div` with a class `textad` at `example.com` and all subdomains in requests sent from any app except `org.example.app1` and `org.example.app2`.
* `[$app=com.apple.Safari]example.org#%#//scriptlet('prevent-setInterval', 'check', '!300')`. This rule will apply the corresponding scriptlet only in Safari browser on Mac. 

<a id="non-basic-rules-modifiers-domain"></a>
### domain

`domain` limits the rule application area to a list of domains (and their subdomains).
The modifier's behavior and syntax perfectly match the corresponding
[$domain modifier](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#domain) of
basic rules.

`domain` examples:
* `[$domain=example.com]##.textad` — hides a `div` with a class `textad` at `example.com` and all subdomains.
* `[$domain=example.com|example.org]###adblock` - hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
* `[$domain=~example.com]##.textad` - hides a `div` with a class `textad` at all domains, except `example.com` and it's subdomains.

Please note that there are 2 ways to specify domain restrictions for non-basic rules:
    1) the "classic" way is to specify domains before rule mask and attributes: `example.com##.textad`
    2) the modifier approach is to specify domains via `domain` modifier: `[$domain=example.com]##.textad`

But rules with mixed style domains restriction are considered invalid. So, for example, the rule
`[$domain=example.org]example.com##.textad` will be rejected.

<a id="for_maintainers"></a>
## Information for filters maintainers 

If you maintain a third-party filter that is known to AdGuard, you might be interested in the information presented in this section. Please note, that hints will be applied to registered filters only. The filter is considered to be registered and known by AdGuard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json).  If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

<a id="pre_processor"></a>
### Pre-processor directives

We provide multiple pre-processor directives that can be used by filters maintainers to improve compatibility with different ad blockers.

#### Syntax

```
!#if condition
Anything goes here
!#include URL_or_a_relative_path
!#endif
```

* `!#if`, `!#endif` -- filters maintainers can use these conditions to supply different rules depending on the ad blocker type.
* `condition` -- just like in some popular programming languages, pre-processor conditions are based on constants declared by ad blockers. Ad blocker authors define on their own what exact constants do they declare.
* `!#include` -- this directive allows to include contents of a specified file into the filter.

#### Conditions

When an adblocker encounters an `!#if` directive, followed eventually by an `!#endif` directive, it will compile the code between the directives only if the specified condition is true. Condition supports all the basic logical operators.

**Example**:
```
!#if (adguard && !adguard_ext_safari)
||example.org^$third-party
!#endif
```

#### Including a file

The `!#include` directive supports only files from the same origin to make sure that the filter maintainer is in control of the specified file. The included file can also contain pre-processor directives (even other `!#include` directives).

Ad blockers should consider the case of recursive `!#include` and implement a protection mechanism.

**Examples**

Filter URL: `https://example.org/path/filter.txt`
```
!
! Valid (same origin):
!#include https://example.org/path/includedfile.txt
!
! Valid (relative path):
!#include /includedfile.txt
!#include ../path2/includedfile.txt
!
! Invalid (another origin):
!#include https://example.com/path/includedfile.txt
```

#### Remarks

* If included file is not found or unavailable, the whole filter update should fail.
* A conditional directive beginning with an `!#if` directive must explicitly be terminated with an `!#endif` directive.
* Whitespaces matter. `!#if` is a valid directive, while `!# if` is not.

#### AdGuard-specific

* Any mistake in a pre-processor directive will lead to AdGuard failing the filter update in the same way as if the filter URL was unavailable.
* Pre-processor directives can be used in the user filter (or in the custom local filters). Same-origin limitation should be disabled for local filters.

#### What constants we declare

* `adguard` -- Declared always. Lets maintainers know that this is one of AdGuard products. Should be enough in 95% of cases.

Product-specific constants for some rare cases when you need a rule to work (or not work) in a specific product only:

* `adguard_app_windows` -- AG for Windows
* `adguard_app_mac` -- AG for Mac
* `adguard_app_android` -- AG for Android
* `adguard_app_ios` -- AG for iOS
* `adguard_ext_chromium` -- AG browser extension for Chrome
* `adguard_ext_firefox` -- AG browser extension for Firefox
* `adguard_ext_edge` -- AG browser extension for Edge
* `adguard_ext_safari` -- AG browser extension for Safari
* `adguard_ext_opera` -- AG browser extension for Opera
* `adguard_ext_android_cb` -- AG content blocker for Samsung/Yandex

> Special case: `ext_ublock`. This constant is declared when a ublock version of a filter is compiled by the [FiltersRegistry](https://github.com/AdguardTeam/FiltersRegistry).

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
For large filters, AdGuard compiles two versions: full and optimized. Optimized version is much smaller and does not contain rules which are not used at all or used rarely. More information about rules optimization you may find in [this article](https://adguard.com/en/filter-rules-statistics.html).

Example of optimized version of the English filter: [https://filters.adtidy.org/extension/edge/filters/2_optimized.txt](https://filters.adtidy.org/extension/edge/filters/2_optimized.txt). 

Examples:

This rule won't be optimized:

```
!+ NOT_OPTIMIZED
||example.org^
```

This rule won't be optimized and will be available for Android only:

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

<a id="good-luck"></a>
## Good luck with creating filters!

We wish you luck with creating you own ad filters.

If you need an advice on how to create your own filters properly, our forum has a [special section](https://forum.adguard.com/index.php?forums/69/) dedicated to writing your own filtering rules.
