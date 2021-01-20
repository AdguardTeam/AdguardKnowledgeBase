---
title: 'Пользовательские скрипты'
taxonomy:
    category:
        - docs
visible: true
---

- [Введение](#intro)
    - [Поддерживаемые продукты](#products)
    - [Скрипты от AdGuard](#scripts)
- [Где найти пользовательские скрипты?](#repo)
    - [Userstyles.org](#userstyles)
    - [Greasy Fork](#greasyfork)
    - [OpenUserJS.org](#openuserjs)
    - [Где задать вопрос?](#community)
- [Разработка](#development)
  - [Запросить лицензию](#request-license)
  - [Совместимость](#compatibility)
  - [Примеры](#example)    

<a name="intro"></a>
## Введение

Давайте для начала разберёмся, что же такое в принципе пользовательские скрипты (мы также иногда называем их "расширениями"). Пользовательский скрипт — это, по сути, мини-программа, написанная на языке Javascript и модифицирующая или расширяющая функциональность одного или нескольких сайтов. Пользователям AdGuard уже наверняка знакомы такие расширения, как Помощник AdGuard, Блокировщик всплывающей рекламы и AdGuard Extra.

<a name="products"></a>
### Поддерживаемые продукты

На данный момент пользовательские скрипты поддерживаются в трёх наших продуктах: AdGuard для Windows, AdGuard для Android и AdGuard для Mac (Mac-версия пока не позволяет добавить собственные пользовательские скрипты).

<a name="scripts"></a>
### Пользовательские скрипты от AdGuard

> ### ВНИМАНИЕ
> Эти скрипты были разработаны непосредственно нами, поэтому мы можем ручаться за их эффективность и безопасность. Имейте в виду, что скачивая новый скрипт из незнакомого источника, вы рискуете, ведь скрипты могут также и навредить вашему компьютеру. Старайтесь скачивать новые расширения только из проверенных источников, которым вы доверяете на 100%. Примеры популярных сайтов [приведены ниже](#repo).

* **AdGuard Assistant** - расширение, предназначенное для управления фильтрацией прямо со страницы бразуера (ручная блокировка, занесение сайта в исключения и т.д.).

* **AdGuard Extra** - расширение, блокирующее рекламу в сложных случаях, когда привычного подхода с правилами фильтрации недостаточно. 

* **Блокировщик всплывающей рекламы** - скрипт, блокирующий один из самых раздражающих типов рекламы - всплывающие окна.

<a name="repo"></a>
## Где взять пользовательские скрипты

По большей части пользовательские скрипты создаются любителями, поэтому, устанавливая тот или иной скрипт, нужно быть очень осторожными. Тем не менее, существует великое множество интересных скриптов, которые действительно могут сделать использование некоторых сайтов более удобным.

Мы опишем несколько популярных каталогов пользовательских скриптов:

<a name="userstyles"></a>
### Stylish (userstyles.org)

[Userstyles.org](https://userstyles.org/) - это каталог пользовательских стилей, но при этом он позволяет выгружать их в виде скриптов. Таким образом, любой пользовательский стиль может быть установлен посредством AdGuard. Будьте осторожны, скачивая малопопулярный стиль - он может нести угрозу.

<a name="greasyfork"></a>
### Greasy Fork

[Greasy Fork](https://greasyfork.org/) - каталог пользовательских скриптов от автора [Stylish](#userstyles). Однако, в отличие от userstyles.org, скрипты в этом каталоге проходят модерацию, так что доверие к ним намного выше.

<a name="openuserjs"></a>
### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) - каталог пользовательских скриптов с открытым кодом, написанный на nodeJS. Здесь также нет модерации, так что следует соблюдать осторожность.

<a name="community"></a>
### Сообщество

Если вам понравилась идея персонизировать браузер при помощи пользовательских скриптов, и у вас есть какие-либо вопросы на эту тему, задать их вы можете на любом из этих сайтов:

* [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
* [FreeNode](https://webchat.freenode.net/#greasemonkey)
* [Reddit](https://www.reddit.com/r/userscripts/)

<a name="development"></a>

## Разработка

<a name="request-license"></a>

### Запросить лицензию

Любой автор пользовательского скрипта может запросить лицензию AdGuard для тестирования.

Для этого отправьте нам сообщение [devteam@adguard.com](mailto:devteam@adguard.com?Subject=Userscript%20author%20license%20request&Body=Hello%2C%0A%0AMy%20userscript%28s%29%3A%20LINK) со следующей информацией:

**Тема:** Запрос лицензии для автора пользовательского скрипта

**Текст письма:** Расскажите о пользовательском скрипте, над которым вы работаете.


<a name="compatibility"></a>

### Совместимость

#### Блок метаданных

##### Поддерживаемые свойства

```
@name
@description
@version
@downloadURL
@updateURL
@match
@include
@exclude
@resource
@require
@grant
@connect
@namespace
```

##### Неподдерживаемые свойства

AdGuard проигнорирует эти свойства.

```
@unwrap
@noframes - AdGuard не будет выполнять пользовательский скрипт внутри любого iframe.
@icon
@run-at

```

#### Поддерживаемые функции GM

AdGuard поддерживает как старые функции GM\_, так и новый API GM4, использующий объект GM.

##### Значения

```
GM.getValue / GM_getValue
GM.setValue / GM_setValue
GM.deleteValue / GM_deleteValue
GM.listValues / GM_listValues
GM.getResourceUrl / GM_getResourceURL
GM.setClipboard / GM_setClipboard
GM.xmlHttpRequest / GM_xmlhttpRequest
GM.info / GM_info
GM.notification
unsafeWindow
GM_getResourceText (устарело)
GM_addStyle (устарело)
GM_log (устарело)
```

#### Частично поддерживаемые функции GM

```
GM.openInTab / GM_openInTab - Просто вызывает window.open.
```

<a name="example"></a>

### Примеры

```javascript
// ==UserScript==
// @name            Name as shown to the user when locale is english or unknown
// @name:ru         Name as shown to the user when locale is russian
// @description     Description as shown to the user when locale is english or unknown
// @description:ru  Description as shown to the user when locale is russian
// @icon            https://myhomepage.com/myuserscript.png
// @version         1.0.0.0
// @downloadURL     https://dl.myhomepage.org/myuserscript.user.js
// @updateURL       https://dl.myhomepage.org/myuserscript.meta.js
// @homepageURL     https://myhomepage.com/myuserscript
// @include         *
// @exclude         *://website.com/*
// @resource        https://myhomepage.com/myuserscript.css
// @require         https://myhomepage.com/mylibrary.js
// @grant           property:settings
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_listValues
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @grant           GM_addStyle
// @grant           GM_log
// @grant           GM_setClipboard
// @grant           GM_xmlhttpRequest
// @grant           unsafeWindow
// @grant           GM_info
// @grant           GM_openInTab
// @grant           GM_registerMenuCommand
// @run-at document-start
// ==/UserScript==

!function(){(
    console.log("I am loaded!");
)}();
```
