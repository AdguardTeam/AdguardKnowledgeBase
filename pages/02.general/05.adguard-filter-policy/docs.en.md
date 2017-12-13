---
title: 'AdGuard Filter Policy'
taxonomy:
    category:
        - docs
visible: true
---

When discussing AdGuard ad filters, there is often one topic that causes disputes – whether shall AdGuard block this or that ad. By framing the rules we stick to special criteria. Now it’s time to publish them. Our criteria are much similar to [EasyList Policy](https://easylist.to/pages/policy.html), which we find correct and appropriate. Nevertheless, we have put changes to some points.

![](https://cdn.adguard.com/public/Adguard/Common/page_filtering.png)


## Ad filters

Those are actually language filters, including: Russian, English, German, Dutch, Spanish, Portuguese, Japanese.

##### What shall these filters block?

- The filters shall block ads everywhere possible. 
- Ads shall be blocked regardless of reasons and goals of such ad.
- We will block ads caused by malicious apps or extensions that inject ads. Please note that we do it only on condition that you will specify how to install this app or extension.

##### Limitations and Exceptions

If a rule is subject to the list of limitations described below, then it won’t be added to main filters.

- Websites’ own ads are not to be removed on purpose. On the other side it shouldn’t be unblocked, because such unblocking can cause displaying of third-party ads.
- Rules that are specific to the particular website will be added only if the website has sufficient traffic.  
 Traffic is determined by open statistics (if it has such) or in other ways.  
 Website’s traffic is considered sufficient when it has 30 thousands visitors a month.
- Anti-adblock scripts will be blocked only if they limit functionality of the website or  
 interfere in its use.
- Rules that often cause problems with work of some websites will be deleted.


## Spyware filter

##### What shall be blocked with this filter?

- This filter shall block all counters that collect personal data of users.

##### Limitations and Exceptions

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that cause problems with functioning of websites will be removed.
- Rules that are specific to the particular website will be added only if the website has sufficient traffic.  
 Traffic is determined by open statistics (if it has such) or in other ways.  
 Website’s traffic is considered sufficient when it has 30 thousands visitors a month.


## Social media filter

##### What shall be blocked with this filter?

- Filter shall block social media widgets (on third-party websites) such as: “Like” and “Share” buttons, recommendation widgets and more.

##### Limitations and Exceptions

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Widgets that are a part of website’s functionality are not blocked.  
 Such as “Comments”, “Embedded Post”, “Surveys” widgets or authorization via social networks.
- Links to website’s communities in social networks are not blocked.
- Rules that cause problems with functioning of websites will be removed.
- Rules that are specific to the particular website will be added only if the website has sufficient traffic.  
 Traffic is determined by open statistics (if it has such) or in other ways.  
 Website’s traffic is considered sufficient when it has 30 thousands visitors a month.


## Quality requirements for filtering rules

- The rules should be as efficient as possible in terms of performance.
- Exception rules shall be specified at most, in order to avoid unnecessary unblocking.
- CSS and JS injection rules shall be used as rarely as possible, and only in case when ad blocking is impossible without them.
