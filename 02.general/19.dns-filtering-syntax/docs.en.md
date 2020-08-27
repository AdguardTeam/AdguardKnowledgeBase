---
title: DNS filtering rules syntax
taxonomy:
    category:
        - docs
visible: true
---


[AdGuard for Android](https://kb.adguard.com/android) and [Adguard Home](https://kb.adguard.com/home) provides a DNS ad blocking feature. To learn more about the principle of DNS filtering, read [this KB article](https://kb.adguard.com/general/dns-filtering-android). Compared to the [traditional ad blocking](https://kb.adguard.com/general/how-ad-blocking-works), DNS filtering is more "crude" and allows less customization. It doesn't support the complex [syntax](https://kb.adguard.com/general/how-to-create-your-own-ad-filters) we use in our filters, but it does support simplified syntax that allows you to block certain domains.

DNS filtering supports two types of rules:

* Basic filtering rules, which is the same as [AdGuard's basic rules](https://kb.adguard.com/general/how-to-create-your-own-ad-filters#basic-rules), but with a limited set of modifiers supported:

    * [`$important`](https://kb.adguard.com/general/how-to-create-your-own-ad-filters#important-modifier)
    * [`$match-case`](https://kb.adguard.com/general/how-to-create-your-own-ad-filters#match-case-modifier)
    * [`$badfilter`](https://kb.adguard.com/general/how-to-create-your-own-ad-filters#badfilter-modifier)
    * Rules with other modifiers will be ignored

* “Hosts” rules, which is basically the same as `/etc/hosts` <br>
* Domains names

Examples:

General:
1. `||example.org^`- block access to the example.org domain and all its subdomains
2. `@@||example.org^` - unblock access to the example.org domain and all its subdomains
3. `example.org` - block access to the example.org domain, but not its subdomains
4. `0.0.0.0 example.org` - AdGuard will now return 0.0.0.0 address for the example.org domain (but not its subdomains). Other IP addresses can be specified.
5. `/REGEX/` - block access to the domains matching the specified regular expression
6. `123.45.67.89` - block access to all domains whose CNAME response returns this IP address

Wildcarding:
1. `||example.TLD^` block access to "example" domains across all TLDs and all their subdomains
2. `://example.` - block access to domains that begin with "example."
3. `.example.org` - only block access to the subdomains of example.org (incl. "www."), not its main domain
4. `||com^` - block access to the .com top-level domain

! Meta:
1. `! Here goes a comment` - just a comment
2. `# Also a comment` - just a comment
3. `! Title:` - the title that'll be used for the filterlist in AdGuard's settings (`# Title:` won't work).

Based on the examples above, you can create rules for DNS filters. If you have any questions, feel free to post them on our [forum](https://forum.adguard.com/index.php?forums/69/).
