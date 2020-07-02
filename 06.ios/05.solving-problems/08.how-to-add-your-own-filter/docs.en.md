---
title: 'How to add your own DNS filter'
taxonomy:
    category:
        - docs

---

If you want to block ads or tracking outside of Safari on iOS, you will have to opt for DNS blocking. Most commonly, you need to use a blocking DNS server (for example, [AdGuard DNS](https://adguard.com/en/adguard-dns/overview.html)), but there is another way in AdGuard apps for iOS: you can add your own DNS filter or hosts file.

This method has several advantages:
1) You can use any DNS server at your discretion and you are not tied up to a specific blocking server.
2) You can add multiple DNS filters and/or hosts files at the same time, but you can't use multiple DNS servers at once.

To add your own DNS filter* in the AdGuard app for iOS or AdGuard Pro, follow these steps:

**⠀Don't confuse it with adding a custom filter to Safari.*

1. Open AdGuard Pro Settings —> General —> Enable *Advanced mode*.
<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_en.jpg" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

2. Go to DNS protection —> DNS filtering —> DNS filters —> Press *Add filter*.
<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/Pro/dns_filters.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

Let's illustrate how to add your own DNS filter by an example of our [AdGuard DNS filter](https://kb.adguard.com/en/general/adguard-ad-filters#domains).

> DNS filter is composed from several other filters (English filter, Social media filter, Spyware filter, Mobile ads filter, EasyList and EasyPrivacy) and simplified to be better compatible with DNS-level ad blocking.

3. Paste [this link](https://filters.adtidy.org/extension/chromium/filters/15.txt) to add AdGuard SDN filter (or use a link to any other filter you want to add).
<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/Pro/new_dns_filter.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

That's it! You've successfully added a custom filter!