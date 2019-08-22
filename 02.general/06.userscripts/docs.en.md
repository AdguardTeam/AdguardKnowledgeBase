---
title: Userscripts
taxonomy:
    category:
        - docs
visible: true
---

* [Introduction](#intro)
    * [Supported apps](#products)
    * [Recommended AdGuard scripts](#scripts)
* [Where to get more userscripts](#repo)
    * [Userstyles.org](#userstyles)
    * [Greasy Fork](#greasyfork)
    * [OpenUserJS.org](#openuserjs)
    * [Community](#community)
* [Development](#development)
*   * [Compatibility](#compatibility)


<a name="intro"></a>
## Introduction

First, let's get it clear. What is a userscript? Userscripts (we also call them 'extensions' sometimes) de-facto are mini-programs written in Javascript. They modify or extend functionality of one or more websites. Many AdGuard users must be already familiar with such userscripts as AdGuard Assistant, PopupBlocker and AdGuard Extra.

<a name="products"></a>
### Supported apps

Currently, custom scripts are supported in: AdGuard for Windows, AdGuard for Android and AdGuard for Mac (Mac version does not yet allow you to add your own custom scripts).

<a name="scripts"></a>
### Recommended AdGuard scripts

>### ATTENTION
>These userscripts come directly from AdGuard developers and we can guarantee that they will be effective and safe. Keep in mind that whenever you download a userscript from an unknown source you expose yourself to a risk. Some scripts can be harmful to your computer. Always get new scripts only from sources you trust 100%. Further are [some examples](#repo) of popular sites with scripts.

* **AdGuard Assistant** - This extension lets you manage the filtering process right from the page.

* **AdGuard Extra** - an extension that blocks advertising in difficult cases when the usual filter-based approach is not enough.

* **PopupBlocker** - The name speaks for itself. It helps get rid of popups - one of the most irritating types of ads out there.

<a name="repo"></a>
## Where can you get more userscripts?

Userscripts are mostly created by enthusiasts, that is why you need to be careful when installing a new one. But nevertheless, there is a great variety of interesting scripts that can really make the use of some websites more convenient.

Here we will describe some of the most popular userscript catalogs.

<a name="userstyles"></a>
### Stylish (userstyles.org)

[Userstyles.org](https://userstyles.org/) is a catalog of user styles, but it allows you to load them as userscripts. Thus, any user style can be installed via AdGuard. Be careful if you decide to install an unpopular script - there's a risk it might be harmful.

<a name="greasyfork"></a>
### Greasy Fork

[Greasy Fork](https://greasyfork.org/) is a userscript catalog by [Stylish](#userstyles) creators. In contrast to the aforemntioned userstyles.org, scripts in this catalog undergo moderation, so their credibility is much higher.

<a name="openUserJs"></a>
### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) is an open source userscript catalog written in nodeJS. It doesn't have moderation so stay alert to any suspicious scripts.

<a name="community"></a>
### Community

If you like the idea of personifying your browser with the help of userscripts, and you have any questions, you can ask them on one of these websites:

* [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
* [FreeNode](https://webchat.freenode.net/#greasemonkey)
* [Reddit](https://www.reddit.com/r/userscripts/)

<a name="development"></a>
## Development

<a name="request-userscript-dev-license"></a>
### Request License

Any userscript author may request an Adguard license key for testing purposes.

To get it, please send an email to devteam at adguard.com with the following information:
**Subject:** Userscript author license request
**Body:**
Please tell us about the userscripts you are working on.

Here is a [mailto link](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK).

<a name="compatibility"></a>
### Compatibility

#### Metadata block
##### Supported properties
`@description`
`@downloadURL`
`@exclude`
`@icon`
`@include`
`@match`
`@name`
`@require`
`@resource`
`@updateURL`
`@version`

##### Partially supported properties
`@run-at` - `document-idle` option is not supported.

##### Unsupported properties
These properties will be simply ignored by Adguard.
`@namespace`
`@unwrap`
`@noframes` - Adguard won't execute a userscript inside of any iframe.
`@grant` - everything is granted by default.
`@connect` - Adguard uses `@grant host:site.com` instead!

#### Supported GM_ functions
##### Values
`GM_getValue`
`GM_setValue`
`GM_deleteValue`
`GM_listValues`

##### Resources
`GM_getResourceText`
`GM_getResourceURL`

##### Other
`GM_addStyle`
`GM_log`
`GM_setClipboard`
`GM_xmlhttpRequest`
`unsafeWindow`

#### Partially supported GM_ functions
`GM_info`
`GM_openInTab` - just a shortcut to window open.
`GM_registerMenuCommand` - you can register a menu command, but it is very unclear for user how to access the menu. There is a hotkey that'll bring up the list of registered menu commands: `Shift+Alt+M`.
