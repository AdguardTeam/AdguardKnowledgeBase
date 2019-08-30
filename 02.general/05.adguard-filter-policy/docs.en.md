---
title: 'AdGuard Filter Policy'
taxonomy:
    category:
        - docs
visible: true
---

When discussing AdGuard ad filters, there is often one topic that causes disputes – whether shall AdGuard block this or that ad. By framing the rules we stick to special criteria. Our criteria are much similar to [EasyList Policy](https://easylist.to/pages/policy.html), which we find correct and appropriate. Nevertheless, we've made some changes to it.

![](https://cdn.adguard.com/public/Adguard/Common/page_filtering.png)

## Common criteria

These equally apply to rules in all filters.

- Rules that often cause problems with work of some websites will be deleted.
- Rules that are specific to a particular website will be added only if the website has sufficient traffic. Traffic is determined by open statistics (if it has such) or in other ways, for example social media following. Website’s traffic is considered sufficient when it has 30 thousands visitors a month.


## Ad filters

This part describes AdGuard Base filter, Mobile ads filter and following language-specific filters: Russian, German, Dutch, Spanish/Portuguese, Japanese, Turkish, French.

##### What shall these filters block?

- These filters shall block ads wherever possible. 
- Ads shall be blocked regardless of reasons and goals of such ad.
- We will block ads caused by malicious apps or extensions that inject ads. Please note that we do it only on condition that you will specify how to install this app or extension.

##### Limitations and Exceptions

If a rule is subject to the list of limitations described below, then it won’t be added to main filters.

- Websites’ own ads are not to be removed on purpose. On the other side it shouldn’t be unblocked, because such unblocking can cause displaying of third-party ads.
- Rules that are specific to a particular website will be added only if the website has sufficient traffic. Traffic is determined by open statistics (if it has such) or in other ways, for example social media following. Website’s traffic is considered sufficient when it has 30 thousands visitors a month.
- Anti-adblock scripts will be blocked only if they limit functionality of the website or interfere with its use.
- Anti-adblock scripts will not be blocked in cases when it is prohibited by Law.
- Rules that often cause problems with work of some websites will be deleted.


## Spyware filter

##### What shall be blocked with this filter?

- This filter shall block all counters that collect personal data of users.

##### Limitations and Exceptions

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that cause problems with functioning of websites will be removed.
- Rules that are specific to a particular website will be added only if the website has sufficient traffic. Traffic is determined by open statistics (if it has such) or in other ways, for example social media following. Website’s traffic is considered sufficient when it has 30 thousands visitors a month.


## Social media filter

##### What shall be blocked with this filter?

- Filter shall block social media widgets (on third-party websites) such as: “Like” and “Share” buttons, recommendation widgets and more.

##### Limitations and Exceptions

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that block widgets that are a part of website’s functionality. Such as “Comments”, “Embedded Post”, “Surveys” widgets or authorization via social networks.
- Rules that block links to website’s communities in social networks.
- Rules that cause problems with functioning of websites will be removed.
- Rules that are specific to a particular website will be added only if the website has sufficient traffic. Traffic is determined by open statistics (if it has such) or in other ways, for example social media following. Website’s traffic is considered sufficient when it has 30 thousands visitors a month.


## Annoyances filter

##### What shall be blocked with this filter?

- This filter shall block elements on the page that are not ads but obstruct view and make it harder to see the actual content of the website. Such elements as cookie notices, third-party widgets, in-page popups, email subscription forms and aggressively placed social media widgets.

#### Limitations and Exceptions

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that block elements that are essential for the websites' functioning (e.g. authorization forms) will not be blocked even if they satisfy other requirements.
- Rules that cause problems with functioning of websites will be removed.
- Rules that are specific to a particular website will be added only if the website has sufficient traffic. Traffic is determined by open statistics (if it has such) or in other ways, for example social media following. Website’s traffic is considered sufficient when it has 30 thousands visitors a month.


## Filter for useful ads

Unlike other filters, this filter **unblocks** certain ads. More about it in [this Knowledge Base article](https://kb.adguard.com/en/general/search-ads-and-self-promotion). 

##### What shall be unblocked with this filter?

- Search ads (ads that you see among the results when using an online search engine).
- Websites' self-promotion (when an ad on a website is promoting this very website or other websites/social media/etc closely related to it).

#### Limitations and Exceptions

- Rules that cause problems with functioning of websites will be removed.
- Rules that are specific to a particular website will be added only if the website has sufficient traffic. Traffic is determined by open statistics (if it has such) or in other ways, for example social media following. Website’s traffic is considered sufficient when it has 30 thousands visitors a month.


## Quality requirements for filtering rules

- The rules should be as efficient as possible in terms of performance.
- Exception rules shall be as much specific as possible, in order to avoid unnecessary unblocking.
- CSS and JS injection rules shall be used as rarely as possible, and only in case when ad blocking is impossible without them.