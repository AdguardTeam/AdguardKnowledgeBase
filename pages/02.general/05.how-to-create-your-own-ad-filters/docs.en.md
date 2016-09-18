---
title: 'How to create your own ad filters'
taxonomy:
    category:
        - docs
visible: true
---

* [Introduction](#introduction)
* [Comments](#comments)
* [Basic rules](#basic-rules)
    * [Basic rules syntax](#basic-rules-syntax)
    * [Special characters](#basic-rules-special-characters)
    * [Regular expressions support](#regexp-support)
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
            * [$xmlhttrequest](#xmlhttprequest-modifier)
            * [$other](#other-modifier)
        * [Exception rules modifiers](#exceptions-modifiers)
            * [$elemhide](#elemhide-modifier)
            * [$content](#content-modifier)
            * [$jsinject](#jsinject-modifier)
            * [$urlblock](#urlblock-modifier)
            * [$document](#document-modifier)
            * [$stealth](#stealth-modifier)
            * [Generic rules](#generic-rules)
                * [$generichide](#generichide-modifier)
                * [$genericblock](#genericblock-modifier)
    * [Advanced capabilites](#advanced-modifiers)
        * [$empty](#empty-modifier)
        * [$mp4](#mp4-modifier)
        * [$replace](#replace-modifier)
* [Cosmetic rules](#cosmetic-rules)
    * [Element hiding rules](#cosmetic-elemhide-rules)
        * [Element hiding rules syntax](#elemhide-syntax)
        * [Element hiding rules examples](#elemhide-examples)
        * [Element hiding rules exceptions](#elemhide-exceptions)
    * [CSS rules](#cosmetic-css-rules)
        * [CSS rules syntax](#cosmetic-css-rules-syntax)
        * [CSS rules examples](#cosmetic-css-rules-examples)
        * [CSS rules exceptions](#cosmetic-css-rules-exceptions)
    * [Extended CSS selectors](#extended-css-selectors)
        * [Pseudo-class :has()](#extended-css-has)
        * [Pseudo-class :contains()](#extended-css-contains)
        * [Pseudo-class :matches-css()](#extended-css-matches-css)
* [HTML filtering rules](#html-filtering-rules)
    * [HTML filtering rules syntax](#html-filtering-rules-syntax)
    * [HTML filtering rules examples](#html-filtering-rules-examples)
    * [Special attributes](#html-filtering-rules-attributes)
        * [tag-content](#tag-content-attribute)
        * [wildcard](#wildcard-attribute)
        * [max-length](#max-length-attribute)
        * [min-length](#min-length-attribute)
        * [parent-elements](#parent-elements-attribute)
        * [parent-search-level](#parent-search-level-attribute)
    * [HTML filtering rules exceptions](#html-filtering-rules-exceptions)
* [JavaScript rules](#javascript-rules)
    * [JavaScript rules syntax](#javascript-rules-syntax)
    * [JavaScript rules examples](#javascript-rules-examples)
    * [JavaScript rules exceptions](#javascript-rules-exceptions)
* [Good luck with creating filters!](#good-luck)

<a id="introduction"></a>
## Introduction

A filter is a set of filtering rules applied to specific content (banners, popups, etc).  Adguard has a list of standard filters created by our team. Our team constantly improves and updates them, and we hope our filters meet the needs of most of our users.

At the same time, Adguard allows you to create your own custom filters, using the same type of rules that we have in our filters.

To describe the syntax of our filtering rules we use [Augmented BNF for Syntax Specifications] (https://tools.ietf.org/html/rfc5234), but we do not always strictly follow this specification.

> Adguard syntax is originally based on syntax of Adblock Plus rules, but it was extended with new types of rules for better ad filtering.  Some parts of this article's content about the rules common to both Adguard and ABP was taken from this article [this article](http://adblockplus.org/ru/filters).

<a id="comments"></a>
## Comments

Any line that starts with an exclamation mark is a comment. In the list of rules it is displayed in gray color. Adguard will ignore this line, so you can write anything you want. Comments are usually placed above the rules and used to describe what a rule does.

For example:

```
! This is the comment. Under this line there is an actual filtering rule.
||example.org^
```

<a id="basic-rules"></a>
## Basic rules

The most simple rules are so-called _"Basic rules"._ They are used to block requests to specific URLs. Or to unblock it, if there is a special marker "@@" at the beginning of the rule. The basic principle for this type of rules is quite simple: you have to specify the address and additional parameters that limit or expand the scope of the rule.

> #### Subqueries
> Basic rules for blocking requests are applied only to **subqueries**. That means they will not block the loading of the page.

> #### Response status
> Browser detects a blocked subquery as completed with an error.

<a id="basic-rules-syntax"></a>
### Basic rules syntax

```
      rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

* **`pattern`** — address mask. Every request's URL is collated to this mask. You can also use special characters in the template, their description is [below](# basic-rules-special-characters).
* **`@@`** — A marker that is used in rules of exception. To turn off filtering for the query, start your rule with this marker.
* **`modifiers`** — Parameters that "clarify" the basic rule. Some of them limit the scope of the rule and some can completely change they way it works.

<a id="basic-rules-special-characters"></a>
### Special characters

* **`*`** — Wildcard character. It is used to represent "any set of characters". This can also be an empty string or a string of any length.
* **`||`** — Matching the beginning of an address. With this character you don't have to specify a particular protocol and subdomain in adress mask. It means, `||` stands for `http://*.`, `https://*.`, `ws://*.`, `wss://*.` at once.
* **`^`** — Separator character mark. Separator character is any character, but a letter, a digit, or one of the following: `_` `-` `.` `%`. In this example separator characters are shown in bold: `http:`**`//`**`example.com`**`/?`**`t=1`**`&`**`t2=t3`.
* **`|`** — A pointer to the beginning or the end of address. The value depends on the character placement in the mask. For example, a rule `swf|` corresponds to `http://example.com/annoyingflash.swf` , but not to `http://example.com/swf/index.html`. `|http://example.org` corresponds to `http://example.org`, but not to `http://domain.com?url=http://example.org`.

> #### Visual representation
> We recommend to get acquainted with [this article](https://adblockplus.org/filter-cheatsheet#blocking), for better understanding of how such rules should be made.

<a id="regexp-support"></a>
### Regular expressions support

If you want even more flexibility in making rules, you can use [Regular expressions](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions) instead of a default simplified mask with special characters. 

> #### Performance
> Rules with regular expressions work more slowly, therefore it is recommended to avoid them or to limit their scope to specific domains.

If you want a blocker to determine a regular expression, the `pattern` has to look like this:
```
pattern = "/" regexp "/"
```

For example, `/banner\d+/$third-party` this rule will apply the regular expression `banner\d+` to all third-party requests. Exclusion rule with regular expression looks like this: `@@/banner\d+/`.

> #### Compatibility with different versions of Adguard
> Adguard browser extension for Safari and Adguard for iOS do not sully support regular expressions because of [Content Blocking API restrictions](https://webkit.org/blog/3476/content-blockers-first-look/) (look for "The Regular expression format" section).

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
||domain.com$popup,third-party
```

> #### Visual representation

> We recommend to get acquainted with [that article] (https://adblockplus.org/filter-cheatsheet#options), for  better understanding of how modifiers should be applied.

<a id="basic-rules-common-modifiers"></a>
#### Basic modifiers

The following modifiers are the most simple and frequently used.

<a id="domain-modifier"></a>
##### **`domain`**

`domain` limits the rule application area to a list of domains (and their subdomains). To add multiple domains to one rule, use the `|`  character as a separator.

###### `domain` examples 

* `||baddomain.com^$domain=example.org` — a rule to block requests that match the specified mask, and are sent from domain `example.org` or it's subdomains.
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

* `||domain.com$third-party` — rule is applied to all domains, except `domain.com` and it's subdomains. Third-party request example: `http://example.org/banner.jpg`.

If there is a `~third-party` modifier, the rule is only applied to the requests that are not from third-party. Which means, they have to be sent from the same domain.

###### `~third-party` examples

* `||domain.com$~third-party` — this rule is applied to `domain.com`, but not to the other domains. Example of a request that is not a third-party request: `http://domain.com/icon.ico`.

<a id="popup-modifier"></a>
##### **`popup`**

Adguard will try to close the browser tab with any address that matches a blocking rule with this modifier. Please note, that not all the tabs can be closed.

###### `popup`examples

* `||domain.com*^$popup` — if you try to go to `http://domain.com` from any page in the browser, a new tab in which specified site has to be opened will be closed by this rule.

<a id="match-case-modifier"></a>
##### **`match-case`**

This modifier defines a rule which applies only to addresses that match the case. Default rules are case-insensitive.

###### `match-case` examples

* `*/BannerAd.gif$match-case` — this rule will block `http://example.com/BannerAd.gif`, but not `http://example.com/bannerad.gif`.

<a id="content-type-modifiers"></a>
#### Restriction by content type

There is a set of modifiers, which can be used to limit the rule's application area to certain type of content. These modifiers can also be combined to cover, for example, both images and scripts.

> #### Compatibility with different versions of Adguard
>  Please note that there is a big difference in how Adguard determines the content type on different platforms. For browser extensions, content type for every request is provided by browser. Adguard for Windows, Mac and Android use following method: first we try to determine the type of request by filename extension. If the request is not blocked at this stage, the type will be determined using the `Content-Type` header at the beginning of the server response.

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

> #### Compatibility with different versions of Adguard
> Adguard for Windows, macOS and Android often can't accurately determine this type and defines it as `other`.

<a id="font-modifier"></a>
##### **`font`**

The rule corresponds to requests for fonts (e.g. .woff filename extension).

<a id="media-modifier"></a>
##### **`media`**

The rule corresponds to requests for media files (music and video, e.g. .mp4 files).

<a id="subdocument-modifier"></a>
##### **`subdocument`**

The rule corresponds to requests for built-in pages (HTML tags `frame` and `iframe`).

<a id="xmlhttprequest-modifier"></a>
##### **`xmlhttprequest`**

The rule applies only to ajax requests (requests sent via javascript object `XMLHttpRequest`).

> #### Compatibility with different versions of Adguard
> Adguard for Windows, macOS and Android often can't accurately determine this type and defines it as `other` or `script`.

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

Disables any cosmetic rules for corresponding pages. You will find the information about cosmetic rules [further](#cosmetic-rules).

###### `elemhide` example

* `@@||example.com^$elemhide` — disables all cosmetic rules for pages at `example.com` and all subdomains.

<a id="content-modifier"></a>
##### **`content`**

Disables HTML filtering rules for corresponding pages. You will find the information about HTML filtering rules [further](#html-filtering-rules).

###### `content` example

* `@@||example.com^$content` — disables all HTML filtering rules for pages at `example.com` and all subdomains.

<a id="jsinject-modifier"></a>
##### **`jsinject`**

Forbids adding of javascript code to the page. You can read about javascript rules further.

###### `jsinject` example

* `@@||example.com^$jsinject` — disables javascript for pages at `example.com` and all subdomains.

<a id="urlblock-modifier"></a>
##### **`urlblock`**

Disables the blocking for all requests sent from the corresponding pages.

###### `urlblock` example

* `@@||example.com^$urlblock` — any requests sent from the pages at `example.com` and all subdomains are not going to be blocked.

<a id="document-modifier"></a>
##### **`document`**

Completely disables blocking for corresponding pages. It is equal to simultaneous use of `elemhide`, `content`, `urlblock` and `jsinject`.

###### `document` example

* `@@||example.com^$document` — completely disables the blocking for any pages at `example.com` and all subdomains.

<a id="stealth-modifier"></a>
##### **`stealth`**

Disables the Stealth Mode for all corresponding pages and requests.

> #### Compatibility with different versions of Adguard
> Stealth Mode is currently available only in Adguard for Windows. We plan to add it to all our products in future. For now, the products that do not support Stealth Mode will ignore the rules with this modifier.

###### `stealth` example

* `@@||example.com^$stealth` — disables `Stealth Mode` for all pages at `example.com` and all subdomains, and also for all requests and subqueries.

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
### Advanced modifiers

These modifiers are able to completely change the behaviour of basic rules.

> #### Compatibility with different versions of Adguard
> Modifiers from this section are only available in Adguard for Windows, macOS and Android. Browser extension capabilities are limited by browser itself and some methods are just not available to them.

<a id="empty-modifier"></a>
##### **`empty`**

Usually, blocked requests look like a server error to browser. If you use `empty` modifier, Adguard will emulate a blank response from the server with` 200 OK` status.

###### `empty` example

* `||example.org^$empty` — returns an empty response to all requests to `example.org` and all subdomains.

<a id="mp4-modifier"></a>
##### **`mp4`**

As a response to blocked request Adguard returns a short video placeholder.

###### `mp4` example

* `||example.com/videos/$mp4` — block a video downloads from `||example.com/videos/*` and changes the response to a video placeholder.

<a id="replace-modifier"></a>
##### **`replace`**

This modifier completely changes the rule behavior. If it is applied, the rule will not block the request. The response is going to be modified instead. 

> #### Please note
> You will need some knowledge of regular expressions to use this modifier

###### `replace` rules features

* `replace` rules apply to any text response, but will not apply to binary (`media`, `image`, `object`, etc).
* `replace` rules do not apply if the size of the original response is more than 3MB.
* If a `replace` rule was applied to the page, other rules (e.g. cosmetic) are not going to be applied to the code.
* `replace` rules have a higher priority than other basic rules (except for exception rules). So if the request corresponds to two different rules one of which has a `replace` modifier, this rule will be applied.

###### `replace` syntax

In general, `replace` syntax is similar to replacement with regular expressions [in Perl](http://perldoc.perl.org/perlrequick.html#Search-and-replace).

```
replace = "/" regex "/" replacement "/" modifiers
```

* `regex` — regular expression.
* `replacement` — a string, that will be used to replace the string corresponding to` regex`.
* `modifiers` — regular expression flags. For example, `i` - insensitive search, or` s` - single-line mode.

In `replace` value, two characters must be escaped: comma (`,`) and (`$`). Use (`\`) for it. For example, escaped comma looks like this: `\,`.

###### `replace` examples

```
://*.damoh.golem.de/$replace=/(<VAST(.|\s)*?>)(.|\s)*<\/VAST>/\$1<\/VAST>/i,domain=video.golem.de
```

There are three parts in this rule:

* Regular expression: `(<VAST(.|\s)*?>)(.|\s)*<\/VAST>`
* Replacement `\$1<\/VAST>` (please note, that `$` is escaped)
* regular expression flags: `i` (insensitive search)

You can see how this rule works here:
http://regexr.com/3cesk

<a id="cosmetic-rules"></a>
## Cosmetic rules

As the name suggests, cosmetic rules are used not for blocking ad requests, but for changing the page appearance. They can hide the elements or even convert the overall style of pages.

> Work with cosmetic rules requires the basic knowledge of HTML and CSS. So, if you want to learn how to make such rules, we recommend to get acquainted with [this documentation](https://developer.mozilla.org/ru/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

<a id="cosmetic-elemhide-rules"></a>
### Element hiding rules

Element hiding rules are used to hide the elements of web pages. It is similar to applying `{ display: none; }` style to selected element.

<a id="elemhide-syntax"></a>
#### Element hiding rules syntax

```
   rule = [domains] "##" selector
domains = [domain0, domain1[, ...[, domainN]]]
```

* **`selector`** — [CSS selector](https://developer.mozilla.org/ru/docs/Web/Guide/CSS/Getting_Started/Selectors), defines the elements to be hidden.
* **`domains`** — domain restriction for the rule.

If you want to limit the rule application area to certain domains, just enter them separated with commas. For example: `example.org,example.com##selector`.

> Please note that this rule will be also applied to all subdomains of `example.org` and `example.com`.

If you want the rule not to be applied to certain domains, start a domain name with `~` sign. For example:
`~example.org##selector`.

You can use both approaches in a single rule. For example, `example.org,~subdomain.example.org##domain` will work for `example.org` and all subdomains, **except `subdomain.example.org`**.

> #### Please note
> Element hiding rules are not dependent on each other. If there is a rule `example.org##selector` in the filter and you add `~example.org##selector` both rules will be applied independently.

<a id="elemhide-examples"></a>
#### Element hiding rules examples

* `example.com##.textad` — hides a `div` with a class `textad` at `example.com` and all subdomains.
* `example.com,example.org###adblock` - hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
* `~example.com##.textad` - hides a `div` with a class `textad` at all domains, except `example.com` and it's subdomains.

<a id="elemhide-exceptions"></a>
#### Element hiding rules exceptions

Exceptions can disable some rules on particular domains. They are very similar to usual exception rules, but instead of `##` you have to use `#@#`.

For example, there is a rule in the filter:
```
##.textad
```

If you want to disable it for `example.com`, you can make an exception rule:
```
example.com#@#.textad
```
We recommend to use this kind of exceptions only if it is not possible to change the hiding rule itself. In other case it is better to change the original rule, using the domains restrictions.

> #### Please note
> Exception rule without any particular domains in it does not make sense and will be ignored.

<a id="cosmetic-css-rules"></a>
### Cosmetic css rules



















