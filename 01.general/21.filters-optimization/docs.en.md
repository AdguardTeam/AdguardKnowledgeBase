---
title: 'About Filters Optimization'
taxonomy:
    category:
        - docs
visible: true
---

For each filter, AdGuard compiles two versions: full and optimized. Optimized version is much more lightweight and does not contain rules which are not used at all or used rarely. So it works faster and is easier to operate. 

Basically, if some rule is used rarely, it becomes deleted from a filter list. That is why, if you add a rule, which you don’t want to be deleted, use the *[NOT_OPTIMIZED](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#not_optimized)* hint. 

Rules usage frequency comes from the collected [filter rules statistics](https://kb.adguard.com/en/general/filter-rules-statistics). But filters optimization is based on more than that — some filters have specific configuration for the process to be happening.

**Here is the optimization configuration:**
```
"filter": AdGuard Base filter,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true

"filter": AdGuard Social Media filter,
"percent": 65,
"minPercent": 40,
"maxPercent": 75,
"strict": true

"filter": AdGuard Annoyances filter,
"percent": 60,
"minPercent": 40,
"maxPercent": 70,
"strict": true

"filter": AdGuard Russian filter,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": AdGuard German filter,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": false

"filter": AdGuard French filter,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": EasyList,
"percent": 35,
"minPercent": 25,
"maxPercent": 45,
"strict": true

"filter": EasyPrivacy,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": EasyList China,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": ChinaList+EasyList,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": Liste FR,
"percent": 35,
"minPercent": 25,
"maxPercent": 45,
"strict": true

"filter": RU AdList,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": false

"filter": RU AdList: BitBlock,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": Fanboy's Annoyances,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": Fanboy's Social Blocking List,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true
```

Where:

* **filter** — Filter identifier
* **percent** — Expected optimization percent `~= (rules count in optimized filter) / (rules count in original filter) * 100`
* **minPercent** — Lower bound of `percent` value
* **maxPercent** — Upper bound of `percent` value
* **strict** — If `percent < minPercent || percent  > maxPercent` and strict mode is on then filter compilation should fail, otherwise original rules must be used

>In other words, `percent` is the "compression level".
>For instance, "compression level" for the Base filter is configured to 40%. It means that optimization algorithm should strip 60% of rules.


Eventually, as already mentioned, **we create two versions of each filter: full and optimized**. 
For e.g, this is how the Base filter for AdGuard browser extension looks like:
- full: https://filters.adtidy.org/extension/chromium/filters/2.txt
- optimized: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt


Each product then uses the version that it needs for the quality filtering, considering all other conditions. Namely:
- AdGuard for Android, AdGuard for iOS and AdGuard for Safari use optimized filters;
- AdGuard for Windows and AdGuard for Mac use full versions of filters;
- AdGuard Browser extension can use both, users can choose it in Setting/Miscellaneous (defaults to full versions).
