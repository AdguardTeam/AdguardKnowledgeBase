---
title: 'What is the local.adguard.org domain'
taxonomy:
    category:
        - docs
visible: true
---

Users of AdGuard for Windows, Mac, and Android may notice that AdGuard adds a small script to every web page, that is loaded from the `local.adguard.org` domain.

First of all, don't worry, this is not a real domain, and there is actually no real server with that name. But what's going on and why is it done? Please read the technical explanation below.

1. AdGuard is a network-level content blocker so it cannot simply add custom Javascript and CSS to webpages like what browser extensions do. However, doing this is crucial for quality content blocking.
2. In order to do it AdGuard injects a "content script" that looks like this: `<script src="https://local.adguard.com/.../content-script.js">`. This "content script" takes care of cosmetic filtering, hides or removes ad content from the web pages.
3. Connections to the IP address of the `local.adguard.org` domain are intercepted by AdGuard on the network level and **processed locally**. This is why that domain has a "static" IP address that does not change for years.

This is easy to verify. If you disable AdGuard, you'll see that it is simply impossible to establish connection to `local.adguard.org` since there is no server with that address.
