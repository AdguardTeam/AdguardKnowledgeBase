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

> #### Compatibility
> Adguard browser extension for Safari and Adguard for iOS do not sully support regular expressions because of  [Content Blocking API restrictions](https://webkit.org/blog/3476/content-blockers-first-look/) (look for "The Regular expression format" section).

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



