---
title: "DNS filtering"
taxonomy:
    category:
        - docs
published: true
visible: true
---
### What is DNS?

DNS stands for 'Domain name system', and its purpose is to translate websites 'names' into something browser can understand, i.e. IP addresses. Thus, each time you go to a website, your browser sends a request to a special server. That server either redirects the request to another server or replies with an IP address. Very schematically it can be represented like this:

![dns-request-scheme](dns_request_scheme.png)

The same applies, of course, to all apps and programs that send any web requests.

### How does DNS filtering work?

Usually, your ISP provides a DNS server that does all the job. But in reality you are free to use any DNS server, and there are plenty of them to choose from (in fact, Adguard has its own DNS servers - you can read about Adguard DNS in [another article](https://kb.adguard.com/en/dns/overview)). Many of these DNS servers are designed to do more than just return IP addresses, and one of the extra applications can be ad blocking. Imagine that your browser sends a request to such DNS server, and the server is able to determine that this is an ad request. The server now has an option to send a null response, and as a result you don't see the ad you would have seen otherwise.

>#### DNS filtering on Android
>Adguard for Android app has a special 'Simplified domain names filter' containing a large amount of 'bad' domains, which it uses in conjunction with User filter to block ad and tracking servers. Just as it was explained above, every request is checked against this filter, and if there's a hit, a null response is sent back. Mind you, all this happens locally on your device with no extermal servers involved.

The main advantage of this approach is it is extremely economical and saving. Once a domain is blocked, it won't be requested again within an hour. The disadvantage being the roughness of this method: specific URLs can't be blocked, only whole domains. It can sometimes lead to 'breaking' of a websites functionality.

### What is DNSCrypt and why is it important?

If you use regular client-server protocol, you are at risk of your DNS requests being intercepted and, subsequently, eavesdropped and/or altered. For example, if you use default DNS servers, your ISP redirects all your DNS traffic to it’s own DNS servers and resolves the domain names there.

![dns-intercept-scheme](dns_intercept_scheme.png)

The experiments [show that](https://blog.adguard.com/dns-track-you/) the DNS tracking can even be used to collect a 'profile of interests' for any user. Luckily, Adguard offers [DNSCrypt](dnscrypt.org) - a special protocol that encrypts communication with the DNS server, thus preventing tampering and tracking by any third party including your ISP. If you care about your online privacy, using it is an important part of your defence suit.
