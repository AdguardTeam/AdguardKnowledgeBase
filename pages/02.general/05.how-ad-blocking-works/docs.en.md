---
title: 'How ad blocking works'
taxonomy:
    category:
        - docs
visible: true
---

*   [Introduction](#introduction)
*   [Ad filtering](#filtering)
*   [Page code filtering](#html)
*   [Request blocking](#block)
*   [CSS Injection and Javascript](#inject)
*   [Post-processing of pages](#cosmetic)
*   [Do you want to help?](#report)

<a name="introduction"></a>

## Introduction

One of the main functions of Adguard is filtering ads on websites. In this article, we will describe in details how exactly Adguard filters online advertising.

Adguard's work is based on the use of various advertising filters that define rules, based on which the program removes ads. Adguard may use a variety of different ad filters. We create some of them ourselves (you can learn more about it on [this page](/general/adguard-ad-filters.html)), some of the filters are created by enthusiasts.



<a name="filtering"></a>

## Ad filtering

Ad filtering mechanism depends on what product you use. Browser extensions rely on the capabilities that browsers provide them with. Adguard for Windows, Mac and Android works independently of your browser, using a completely different filtering algorithm. Below we describe all the stages of ad filtering that Adguard uses.



<a name="html"></a>

#### Page code filtering

Before a page is loaded into browser, Adguard processes its code removing elements according to the ad filtering rules. Thus browser does not recognize that there were actually those elements on this page and will not try to load them.

![Adguard: Page code filtering](https://images.adguard.com/public/Adguard/Common/page_filtering.png)

Page code filtering technology is used **only in Adguard for Windows, Mac or Android (if high quality filtering is enabled)**. That is because of the fact that capabilities of browser extensions are limited, and they can not change the page code before the browser processed it.



<a name="block"></a>

#### Request blocking

Browser loads all the necessary elements on a page, defined by the page code. Based on filtering rules, Adguard can block the load of advertising elements, such as banners ads or Flash objects.

![Adguard: Blocking of queries](https://images.adguard.com/public/Adguard/Common/url_filtering.png)



<a name="inject"></a>

#### CSS Injection and Javascript

Not all advertising can be blocked within the first two steps. For instance, there is such a kind of advertising that is embedded in the page dynamically with the help of Javascript, and does not require loading of additional items that we could block.

CSS is a special language used for web pages design. Display style of elements on a web page can be set by rules. By style we mean color, font, location, and even the visibility of the element. And that is of interest to us, because we want to hide the banner from you. Javascript is also a special language that allows you to dynamically change any element on the page.



<a name="cosmetic"></a>

#### Post-processing of pages

This is an approach for browser extensions only. It is necessary, because the first step of processing (page code filtering) is unavailable to them. During post-processing, the browser extension removes all the elements, loading of which was blocked, from a web page. If we didn't remove them, you would see not fully loaded elements, such as "broken" graphic.



<a name="report"></a>

## Do you want to help?

All ad filters are created manually, based on complaints on ads from users. You can send us a complaint via the program itself or write about it [on our Forum](http://forum.adguard.com/forumdisplay.php?51-Filter-Rules).