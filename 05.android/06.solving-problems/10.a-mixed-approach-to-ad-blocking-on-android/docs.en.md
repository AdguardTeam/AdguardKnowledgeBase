---
title: ' A mixed approach to ad blocking on Android'
published: false
taxonomy:
    category:
        - docs
---

* Enable HTTPS filtering: Setting
* Enable simplified domain names filter
* Disable AdGuard for all apps except browsers and DNS (and maybe Anrdoid OS -- we should test it).
* Enable "Filter DNS requests"

So, in-app ads will be blocked by the DNS filtering, and in-browser ads will be nicely blocked by default filtering.

We should ask people to try it and give their feedback. If they like it, we might add a simple switch for enabling this filtering mode.