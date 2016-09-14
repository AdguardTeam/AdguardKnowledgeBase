---
title: 'How to create your own ad filters'
taxonomy:
    category:
        - docs
visible: true
---

* [Introduction](#introduction)
* [Комментарии](#comments)
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

<a id="basic-rules"></a>
## Basic rules

The most simple rules are so-called _"Basic rules"._ They are used to block requests to specific URLs. Or to unblock it, if there is a special marker "@@" at the beginning of the rule. The basic principle for this type of rules is quite simple: you have to specify the address and additional parameters that limit or expand the scope of the rule.
