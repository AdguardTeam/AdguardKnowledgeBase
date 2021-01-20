---
title: DNS filtering rules syntax
taxonomy:
    category:
        - docs
visible: true
---


[AdGuard for Android](https://kb.adguard.com/android) and [Adguard Home](https://kb.adguard.com/home) provides DNS ad blocking feature. To learn more about the principle of DNS filtering, read [this KB article](https://kb.adguard.com/general/dns-filtering-android). Compared to the [traditional ad blocking](https://kb.adguard.com/general/how-ad-blocking-works), DNS filtering is more "crude" and allows less customization. It doesn't support the complex [syntax](https://kb.adguard.com/general/how-to-create-your-own-ad-filters) we use in our filters, but it does support simplified syntax that allows you to block certain domains.

DNS filtering supports two types of rules:

* Basic filtering rules, which is the same as [AdGuard's basic rules](https://kb.adguard.com/general/how-to-create-your-own-ad-filters#basic-rules), but with a limited set of modifiers supported:

    * [`$important`](https://kb.adguard.com/general/how-to-create-your-own-ad-filters#important-modifier)
    * [`$match-case`](https://kb.adguard.com/general/how-to-create-your-own-ad-filters#match-case-modifier)
    * Rules with other modifiers will be ignored

* “Hosts” rules, which is basically the same as `/etc/hosts`

Examples:

1. `||example.org^`- block access to the example.org domain and all it's subdomains
2. `@@||example.org^` - unblock access to the example.org domain and all it's subdomains
3. `0.0.0.0 example.org` - AdGuard will now return 0.0.0.0 address for the example.org domain (but not it's subdomains)
4. `! Here goes a comment` - just a comment
5. `# Also a comment` - just a comment
6. `/REGEX/` - block access to the domains matching the specified regular expression

Use this syntax to create or import rules to DNS filter. If you have any questions, feel free to post them on our [forum](https://forum.adguard.com/index.php?forums/69/).
