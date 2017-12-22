---
title: 'Updating the Knowledgebase'
taxonomy:
    category:
        - docs
visible: true
---

*   [Introduction](#introduction)
*   [How to suggest a change?](#suggest-change)
*   [Writing new articles](#new-article)
*   [Translating an article](#translating)
*   [Working on open issues](#issues)
*   [Getting free AdGuard license](#license)

<a name="introduction"></a>

## Introduction

The goal of this Knowledgebase is to provide everyone with the most up-to-date information on all kinds of AdGuard-related topics. But things constantly change, and sometimes an article doesn't reflect the current state of things anymore — there are simply not so many of us to keep an eye on every single bit of information and update it accordingly when new versions are released. 

This is why we moved all of our KB content to [GitHub](https://github.com/AdguardTeam/AdguardKnowledgeBase/), and now literally anyone can contribute to it by suggesting edits and translations to existing articles, as well as totally new ones. For those who are unfamiliar with principles of working with GitHub, we'll provide a brief manual.

<a name="suggest-change"></a>

## How to suggest a change?

First things first — you will need a GitHub account. If you don't have one, join at [https://github.com/join](https://github.com/join). Now that this is settled, you can dive directly into writing. Navigate through the list of articles [here](https://github.com/AdguardTeam/AdguardKnowledgeBase/tree/master/pages/) and choose any one that you'd like to propose some changes for. Click on the `docs.en.md` file (provided you are writing in English) and then on the small pencil icon in the top-right corner of the frame.

Here you can finally show what you've got! Alter the article in any way you see fit (use [Markdown](https://github.com/LewisVo/Markdown-Tutorial)!), come up with a short description and a name for your soon-to-be pull request (more about it later), and click on "Propose file change". You'll be taken to another page with a lot of things seemingly going on, but all you have to do is basically click on the green button with "Create pull request" text on it. If you'd like to know more about the whole process, you can find plentiful GitHub tutorials online. 

So, what is pull request (or PR)? To put it simply, it is kind of a message to the repository authors/admins that you did something cool that deserves at least considering being added. In our case, this "something" is a change to the article. Admins will see your PR and review it, and if they find your suggestions legit and useful, they will approve it. Otherwise, they may reject the PR or ask you to change something before approving. Just try it, it is very self-explanatory and intuitive once you give it a shot.

<a name="new-article"></a>

## Writing new articles

To write a completely new article is a much more laborious task. But if you are determined to go down this path, do the following. First, make sure your article has a place in AdGuard Knowledgebase. It should be either related to one of the AdGuard products in some way, or be "Meta" (examples of such "meta-articles" are any of the [General questions](https://kb.adguard.com/en)) articles, or this one. Now, when you have found an appropriate topic, go to the [repository](https://github.com/AdguardTeam/AdguardKnowledgeBase/tree/master/pages/) and then to the most suitable category (for example, let's say it is [Android — Solving Problems](https://github.com/AdguardTeam/AdguardKnowledgeBase/tree/master/pages/05.android/06.solving-problems)). Press the "Create new file" button in the top-right part of the screen and name your file. Take into account that you need to create a new folder (by analogy with all the other folders in this category). The file itself should always be named `docs.en.md` for articles in English.

Notice that at the top of every file there should be a certain header:

```
---
title: 'Your title here'
taxonomy:
    category:
        - docs
visible: true
---
```
Type the rest of the text below (use [Markdown](https://github.com/LewisVo/Markdown-Tutorial)!) and click "Propose file change" to create a PR. The rest is absolutely the same as described [above](#suggest-change).

<a name="translating"></a>

## Translating an article

This part is tricky. Currently, our Knowledgebase only supports the English and Russian languages, but we can envision a future where we have many more to choose from. You can help us lay the foundation of this future by suggesting translations to existing articles. Everything that was said about [writing new articles](#new-article) applies here too, the main difference is that you should always create the new file in the same folder as the original one, and name it accordingly (e.g. `docs.es.md` for Spanish). Use the English original's raw text to copy the structure of the article, it will eliminate a lot of possible misunderstandings and inconsistencies.

<a name="issues"></a>

## Working on open issues

Sometimes there's need to update or complement an existing article, or create a new one, but we can't do it right away for some reason. In such cases usually a task ("issue") gets created in special repository on GitHub. You can get there by [this link](https://github.com/AdguardTeam/AdguardKnowledgeBase/issues/), choose any issue that you find appealing and start working on it. If you have any questions — you can ask them right in the comments in that issue.     

<a name="license"></a>

## Getting free AdGuard license

Our Knowledge base is an important fount of information that lets people learn more about AdGuard. That is why we are always glad to reward with AdGuard licenses people who contribute to its content.

We do not have any strict criteria for how much you need to contribute to get a license key, but if you feel that you’ve done enough, just send us a message to [st@adguard.com](mailto:st@adguard.com).
