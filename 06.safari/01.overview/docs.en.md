---
title: Overview
taxonomy:
    category:
        - docs

visible: true
---

*   [General](#general)
*   [Filters](#filters)
* 	[Content Blockers](#contentblockers)
    * [AdGuard General](#aggeneral)
	* [AdGuard Privacy](#agprivacy)
	* [AdGuard Social](#agsocial)
	* [AdGuard Security](#agsecurity)
    * [AdGuard Other](#agother)
    * [AdGuard Custom](#agcustom)
* 	[User Rules](#userrules)
* 	[About](#about)

AdGuard for Safari was released in November, 2018 and soon became one of the most popular ad blockers for this browser. It [replaced](https://adguard.com/en/blog/adguard-safari-extension.html) our classic browser extension that existed before Apple’s restrictions, and we had to do our best to make the current extension comparable to the previous one. AdGuard for Safari can’t be compared to full-fledged desktop ad blocking apps, but has many virtues.  

It’s free and it will protect you from ads, trackers, phishing, and malicious websites. But first things first.

<a name="general"></a>

## General
<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Blog/AG_for_Safari_in-depth_review/General1.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
</div>

The first tab is the General screen where you can set up basic things like notifications, update intervals, and launching AdGuard at system startup. You can also choose to display the AG icon in the menu bar. And most importantly, you can choose which content blockers you’re going to use, but more on that later.

<a name="filters"></a>

## Filters
<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters1.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
</div>
 
A filter is a list of rules written in a special syntax. Following these rules, content blockers can filter web traffic, in particular, block advertising content (banners, pop-ups and such) and stop tracking. For the convenience of users we have combined them into thematic categories. Eight categories of filters are at your disposal: *Ad Blocking, Privacy, Social widgets, Annoyances, Security, Language-specific, Custom and Other filters*. If you’re curious to know more, here are extensive articles [about AdGuard filters](https://kb.adguard.com/en/general/adguard-ad-filters) and about [ad filtering in general](https://kb.adguard.com/en/general/how-ad-blocking-works).

In the Filters tab you can enable/disable the whole category, or fine-tune separate filters inside it. If you make changes, this would be reflected in the Content Blockers section (located in the General tab). In other words, you can adjust things in the Filters tab and see what has changed in the Content Blockers section.

<a name="contentblockers"></a>

## Content Blockers
<img src="https://cdn.adguard.com/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png" style="border: 1px solid #efefef; max-width: 800px; padding: 2px;">

A сontent blocker is a thematic cluster of filters. For instance, all filters that come within the topic of privacy will be included in the content blocker with the corresponding name — *AdGuard Privacy*. There were two reasons to make content blockers: it’s much more convenient to manage structured filters and there still exists Apple’s restriction.

As you might [remember](https://adguard.com/en/blog/adguard-safari-1-5.html), Apple has put limitations on ad blockers for Safari, particularly it allowed them to use only 50,000 filtering rules simultaneously. Don’t be deceived with this seemingly big number – actually, it’s too small. Luckily, there is a way to bypass this restriction. One ad blocker can be divided into several content blockers each containing up to 50K rules. This measure seems appropriate. 

Here is a list of 6 content blockers grouped thematically. The good thing about content blockers is that all filters and lists enabled and number of rules used are here before your eyes. For example:
> AdGuard General
> 21700 rules used
> Enabled: AdGuard Base filter

<a name="aggeneral"></a>
 
### AdGuard General
*AdGuard General* is a category for filters of overall orientation – basically, that’s all you need to know. We recommend that you keep the AdGuard Base filter from here always enabled.

> Note that to enable any filters, blocking and tracking lists attributed to any given content blocker, you should go to the Filters tab. Here, in the Content blockers section, you can only see what is already enabled and working. 
 
<a name="agprivacy"></a>

### AdGuard Privacy
Then goes *AdGuard Privacy* where the *Tracking Protection filter* developed by our specialists is enabled by default. This content blocker is the main tool against counters and other web analytics tools. Look into other filters and lists in the *Privacy filter* (found in the Filters tab) – they will help you hide your online activity from tracking. 

<a name="agsocial"></a>

### AdGuard Social
If you’re sick and tired of Like buttons and such, choose the *Social Media filter* – our own filter that we support. There are other options, for instance, a world-renowned *Fanboy's Social Blocking List*. It blocks social content, widgets, scripts and icons. To enable any of them, go to the Filters tab, press *Social Widgets* and switch the above-mentioned filters on.

<a name="agsecurity"></a>

### AdGuard Security
This content blocker unites several security-related filters. *Malware Domains Blocklist* blocks domains that are notorious for spreading malware and spyware. *Spam404* protects you from Internet fraudsters. Finally, *NoCoin Filter List* disrupts browser-based cryptominers such as Coinhive.

<a name="agother"></a>

### AdGuard Other 
*AdGuard Other* is a group of ‘eclectic’ filters. For example, there is a filter that unblocks searches and self-promo ads. In some cases, it helps find exactly what you are looking for, because these kinds of ads are more relevant and less intrusive than others. 

> Disclaimer: we don’t have any ‘acceptable ads’ paid by advertisers. Instead, we provide users with an option to see search ads and websites' self-promotion. Read more about it [here](https://kb.adguard.com/en/general/search-ads-and-self-promotion).

<a name="agcustom"></a>   

### AdGuard Custom
<img src="https://cdn.adguard.com/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png" width="800" />

*AdGuard Custom* is extra space left for supplementary filters you may want to add. Adding a filter is not rocket science. There is no need to know how to create user rules, you can use the ready-made filters. Just enter a valid URL of the filter subscription in the field.

<a name="userrules"></a>

## User Rules
<img src="https://cdn.adguard.com/public/Adguard/Blog/AG_for_Safari_in-depth_review/Userrules.png" width="800" />
<p align="center"><i>User rules</i></p> 

User rules are a great option for those who want to customize the filtering process. Of course, certain skills are required to write and apply those: in particular, you would need to master rule syntax. If you feel like learning something new, here is [a comprehensive guide](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters) to that.

<a name="about"></a>

## About
<img src="https://cdn.adguard.com/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png" style="border: 1px solid #efefef; max-width: 800px; padding: 2px;">
<p align="center"><i>About AdGuard</i></p> 

Last but not least important tab. Here you can see what version you have, read EULA (End-User License Agreement) and privacy policy accurately. If interested, you can also see credits and acknowledgements to third-party developers and others who contributed to our products a lot. 

Finally, there is a link to our repository on GitHub. If you are even a little bit of a geek, it might be of interest to you. You can monitor the product development, create feature requests and report bugs there, for instance. 

> Reminder: AdGuard for Safari can be downloaded for free [from the App Store](https://apps.apple.com/en/app/adguard-for-safari/id1440147259). A detailed setup instruction is available [here](https://www.kb.adguard.com/en/safari/installation).
