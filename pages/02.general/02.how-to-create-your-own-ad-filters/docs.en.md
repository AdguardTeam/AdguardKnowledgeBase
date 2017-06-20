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
            * [$csp](#csp-modifier)
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
* [Information for filters maintainers](#for_maintainers)
    * [Hints](#hints)
        * [Hints syntax](#hints_syntax)
        * [NOT_OPTIMIZED hint](#not_optimized)
        * [PLATFORM and NOT_PLATFORM hints](#platform_not_platform)
* [Good luck with creating filters!](#good-luck)

<a id="introduction"></a>
## Introduction

A filter is a set of filtering rules applied to specific content (banners, popups, etc).  Adguard has a list of standard filters created by our team. Our team constantly improves and updates them, and we hope our filters meet the needs of most of our users.

At the same time, Adguard allows you to create your own custom filters, using the same type of rules that we have in our filters.

To describe the syntax of our filtering rules we use [Augmented BNF for Syntax Specifications] (https://tools.ietf.org/html/rfc5234), but we do not always strictly follow this specification.

> Adguard syntax is originally based on syntax of Adblock Plus rules, but it was extended with new types of rules for better ad filtering.  Some parts of this article's content about the rules common to both Adguard and ABP was taken from this article [this article](http://adblockplus.org/en/filters).

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

* **`pattern`** — address mask. Every request's URL is collated to this mask. You can also use special characters in the template, their description is [below](# basic-rules-special-characters).
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
||domain.com^$popup,third-party
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

* `||domain.com^$third-party` — rule is applied to all domains, except `domain.com` and it's subdomains. Third-party request example: `http://example.org/banner.jpg`.

If there is a `~third-party` modifier, the rule is only applied to the requests that are not from third-party. Which means, they have to be sent from the same domain.

###### `~third-party` examples

* `||domain.com$~third-party` — this rule is applied to `domain.com`, but not to the other domains. Example of a request that is not a third-party request: `http://domain.com/icon.ico`.

<a id="popup-modifier"></a>
##### **`popup`**

Adguard will try to close the browser tab with any address that matches a blocking rule with this modifier. Please note, that not all the tabs can be closed.

###### `popup`examples

* `||domain.com^$popup` — if you try to go to `http://domain.com/` from any page in the browser, a new tab in which specified site has to be opened will be closed by this rule.

<a id="match-case-modifier"></a>
##### **`match-case`**

This modifier defines a rule which applies only to addresses that match the case. Default rules are case-insensitive.

###### `match-case` examples

* `*/BannerAd.gif$match-case` — this rule will block `http://example.com/BannerAd.gif`, but not `http://example.com/bannerad.gif`.

<a id="csp-modifier"></a>
##### **`csp`**

This modifier completely changes the rule behavior. If it is applied to a rule, it will not block the matching request. The response headers are going to be modified instead.

> In order to use this type of rules, it is required to have the basic understanding of the [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) security layer.

For the requests matching a $csp rule, we will strengthen response's security policy by adding additional content security policy equal to the $csp modifier contents. csp rules are applied independently from any other rule type. Other basic rules have no influence on it.

>Multiple rules matching a single request.
>In case if multiple $csp rules match a single request, we will apply each of them.

**csp syntax**

_csp_ value syntax is similar to the Content Security Policy header syntax.

_csp_ value can be empty in the case of exception rules. See examples section for further information.

>Limitations

>1. Please note, that there're a few characters forbidden in the csp value: (,), ($)
>2. csp rules support limited list of modifiers: domain, important, subdocument
>3. Rules with report-* directives are considered invalid.

###### `csp` examples

* ||example.org^$csp=frame-src 'none' — prohibits all frames on example.org and it's subdomains.
* @@||example.org/page/*$csp=frame-src 'none' — disables all rules with csp modifier exactly matching frame-src 'none' on all the pages matching the rule pattern. For instance, the rule above.
* @@||example.org/page/*$csp — disables all the $csp rules on all the pages matching the rule pattern.
* ||example.org^$csp=script-src 'self' 'unsafe-eval' http: https: — disables inline scripts on all the pages matching the rule pattern.

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

* `@@||example.com^$stealth` — disables `Stealth Mode` for all pages at `example.com` and all subdomains, and also for all requests and sub-requests.

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

> Work with cosmetic rules requires the basic knowledge of HTML and CSS. So, if you want to learn how to make such rules, we recommend to get acquainted with [this documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/What_is_CSS).

<a id="cosmetic-elemhide-rules"></a>
### Element hiding rules

Element hiding rules are used to hide the elements of web pages. It is similar to applying `{ display: none; }` style to selected element.

<a id="elemhide-syntax"></a>
#### Element hiding rules syntax

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
#### Element hiding rules examples

* `example.com##.textad` — hides a `div` with a class `textad` at `example.com` and all subdomains.
* `example.com,example.org###adblock` - hides an element with attribute `id` equals `adblock` at `example.com`, `example.org` and all subdomains.
* `~example.com##.textad` - hides a `div` with a class `textad` at all domains, except `example.com` and it's subdomains.

<a id="elemhide-exceptions"></a>
#### Element hiding rules exceptions

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
### Cosmetic css rules

Sometimes, simple hiding of an element is not enough to deal with advertising. For example, blocking an advertising element can just break the page layout. In this case Adguard can use rules that are much more flexible than hiding rules. With this rules you can basically add any CSS styles to the page.

<a id="cosmetic-css-rules-syntax"></a>
#### Cosmetic css rules syntax

```
   rule = [domains] "#$#" selector "{" style "}"
domains = [domain0, domain1[, ...[, domainN]]]
```

* **`selector`** — [CSS selector](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), defines the elements we want to apply the style to.
* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#elemhide-syntax).
* **`style`** — CSS style, that we want to apply to selected elements.

<a id="cosmetic-css-rules-examples"></a>
#### Cosmetic css rules examples

```
example.com#$#body { background-color: #333!important; }
```

This rule will apply a style `background-color: #333!important;` to the `body` element at `example.com` and all subdomains.

<a id="cosmetic-css-rules-exceptions"></a>
#### Cosmetic css rules exceptions

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

CSS 3.0 is not always enough to block ads. To solve this problem Adguard extends CSS capabilities by adding support for the new pseudo-elements. To use extended CSS selectors we have developed a separate open source [module](https://github.com/AdguardTeam/ExtendedCss).

> #### Backward compatibility
> In common filters we use so-called backward compatible syntax. The thing is, extended pseudo-classes can break cosmetic rules in previous versions of Adguard or in other ad blockers that do not support extended CSS. For example, instead of pseudo-class `:has(selector)` it is possible to use `[-ext-has="selector"]` attribute.

> #### Application area
> Extended selectors can be used in any cosmetic rule, whether they are [element hiding rules](#cosmetic-elemhide-rules) or [CSS rules](#cosmetic-css-rules).

<a id="extended-css-has"></a>
#### pseudo-class `:has()`

CSS 4.0 specification describes [pseudo-class `:has`](https://drafts.csswg.org/selectors/#relational). Unfortunately, it is not yet supported by browsers.

##### `:has()` syntax

```
:has(selector)
```

Backward compatible syntax:
```
[-ext-has="selector"]
```

Pseudo-class `:has()` selects the elements that includes the elements that fit to `selector`.

##### `:has()` examples

###### Selection of all `div` elements, which contain an element with a `banner` class.

**HTML code**
```html
<div>Do not select this div</div>
<div>Select this div<span class="banner"></span></div>
```

**Selector**
```css
div:has(.banner)
```

Backward compatible syntax:
```css
div[-ext-has=".banner"]
```

<a id="extended-css-contains"></a>
#### Pseudo-class `:contains()`

This pseudo-class principle is very simple: it allows to select the elements that contain specified text. Please note that it should be text, not a code. Use `innerText` property for verification.

##### `:contains()` syntax

```css
:contains(text)
```

Backward compatible syntax:
```css
[-ext-contains="text"]
```

Pseudo class `:contains()` selects the elements, that containt the text `text`.

##### `:contains()` examples

###### Selection of all `div` elements, that contain text `banner`.

**HTML code**
```html
<div>Do not select this div</div>
<div id="selected">Select this div (banner)</div>
<div>Do not select this div <div class="banner"></div></div>
```

**Selector**
```css
div:contains(banner)
```

Backward compatible syntax:
```css
div[-ext-contains="banner"]
```

Please note that in this example only a `div` with `id=selected` will be selected, because the next element does not contain any text (`banner` is a part of code, not text).

<a id="extended-css-matches-css"></a>
#### Pseudo-class `:matches-css()`

This pseudo-class allows to select an element by his current property.

##### `:matches-css()` syntax

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
Value mask. We use the same syntax as in basic rules `pattern`.

##### `:matches-css()` examples

###### Selection of `div` elements that contain pseudo-class `::before` with specified content.

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
```css
div.banner:matches-css-before(content: block me)
```

Backward compatible syntax:
```css
div.banner[-ext-matches-css-before="content: block me"]
```

<a id="html-filtering-rules"></a>
## HTML filtering rules

In most cases, the basis and cosmetic rules are enough to filter ads. But sometimes it is necessary to change the HTML-code of the page itself before it is loaded. This is when you need filtering rules for HTML content. They allow to indicate the HTML elements to be cut out before the browser loads the page.

> #### Compatibility with different versions of Adguard
> Rules are supported by Adguard for Windows, Mac and Android (you have to set "filtering method" for "High-quality" in Android).
> This type of rules don't work in browsers extension, because it is unable to modify content on network level.

<a id="html-filtering-rules-syntax"></a>
### HTML filtering rules syntax

```
      rule = [domains] "$$" tagName [attributes]
   domains = [domain0, domain1[, ...[, domainN]]]      
attributes = "[" name0 = value0 "]" "[" name1 = value2 "]" ... "[" nameN = valueN "]"
```

* **`tagName`** — name of the element in lower case, for example `div` or `script`.
* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules syntax](#elemhide-syntax).
* **`attributes`** — a list of attributes, that limit the elements selection. `name` - attribute name, `value` - substring, that is contained in attribute value.

<a id="html-filtering-rules-examples"></a>
### HTML filtering rules example

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
### Special attributes

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

<a id="parent-elements-attribute"></a>
##### `parent-elements`

This attribute seriously modifies the rule behaviour. A common HTML filtering rule uses attributes to find and delete elements on the page. If `parent-elements` is set, then the element's parent element (with a name specified by `parent-elements` attribute) will be deleted instead.

Here is an example:

**HTML code**
```html
<table style="background: url('http://domain.com/banner.gif')">
    <tr>
        <td>
            <a href="http://example.org/ads">TEXT ADS</a>
        </td>
    </tr>
</table>
```

The problem with this code is that cutting out ads is not enough here. The banner is displayed using the parent table (as a `background`). This is where we can use the `parent-elements`.

Let's use the following rule to block the entire table:
```
$$a[href="example.org/ads"][parent-elements="table"]
```
When Adguard finds an element `a` with a `href` attribute that contain `example.org/ads`, rather then cut it out, it will keep looking for the closest parent element `table` and will cut it out instead.

You can specify few parent elements separated by commas. The closest one will be blocked.

<a id="parent-search-level-attribute"></a>
##### `parent-search-level`

Specifies the maximum parent element search depth. The defaul maximum search depth is `3`.
That was set in order not to cut too much, if `HTML` page changes. Do not use too large values for this attribute.

<a id="html-filtering-rules-exceptions"></a>
### HTML filtering rules exceptions

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

Adguard supports a special type of rules that allows you to inject any javascript code to websites pages.

> #### Restrictions
> Please note that this type of rules can be used **only in trusted filters**. This category includes your own **User filter** and all the filters created by Adguard Team.

<a id="javascript-rules-syntax"></a>
### Javascript rules syntax

```
rule = [domains]  "#%#" script
```

* **`domains`** — domain restriction for the rule. Same principles as in [element hiding rules](#elemhide-syntax).
* **`script`** — arbitrary javascript code **in one string**.

<a id="javascript-rules-examples"></a>
### Javascript rules examples

* `example.org#%#window.__gaq = undefined;` — executes the code `window.__gaq = undefined;` on all pages at `example.org` and all subdomains.

<a id="javascript-rules-exceptions"></a>
### Javascript rules exceptions

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

<a id="for_maintainers"></a>
## Information for filters maintainers 

If you maintain a third-party filter that is known to Adguard, you might be interested in the information presented in this section. Please note, that hints will be applied to registered filters only. The filter is considered to be registered and known by Adguard, if it is present in the [known filters index](https://filters.adtidy.org/extension/chromium/filters.json).  If you want your filter to be registered, please file an issue to [AdguardFilters repo](https://github.com/AdguardTeam/AdguardFilters).

<a id="hints"></a>
### Hints

We recommend to use the hint for disabling rule optimization. "Hint" is a special comment, instruction to the filters compiler used on the server side.

<a id="hints_syntax"></a>
#### Hints syntax 

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

* mac - Example: English filter for Mac - [https://filters.adtidy.org/mac/filters/2.txt](https://filters.adtidy.org/mac/filters/2.txt)

* android - Example: English filter for Android - [https://filters.adtidy.org/android/filters/2.txt](https://filters.adtidy.org/android/filters/2.txt)

* ios - Example: English filter for iOS - [https://filters.adtidy.org/ios/filters/2.txt](https://filters.adtidy.org/ios/filters/2.txt)

* ext_chromium - Example: Adguard browser extension for Chrome - [https://filters.adtidy.org/extension/chromium/filters/2.txt](https://filters.adtidy.org/extension/chromium/filters/2.txt)

* ext_ff - Example: Adguard browser extension for Firefox - [https://filters.adtidy.org/extension/firefox/filters/2.txt](https://filters.adtidy.org/extension/firefox/filters/2.txt)

* ext_edge - Example: Adguard browser extension for Edge - [https://filters.adtidy.org/extension/edge/filters/2.txt] (https://filters.adtidy.org/extension/edge/filters/2.txt)

* ext_ublock - Example: uBlock Origin - [https://filters.adtidy.org/extension/ublock/filters/2.txt](https://filters.adtidy.org/extension/ublock/filters/2.txt)

* ext_safari - Example: Adguard browser extension for Safari - [https://filters.adtidy.org/extension/safari/filters/2.txt](https://filters.adtidy.org/extension/safari/filters/2.txt)

* ext_android_cb - Example: Adguard Content Blocker - [https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt](https://filters.adtidy.org/extension/android-content-blocker/filters/2.txt)

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
