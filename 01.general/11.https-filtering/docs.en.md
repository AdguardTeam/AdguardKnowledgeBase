---
title: 'HTTPS filtering'
published: true
taxonomy:
    category:
        - docs
visible: true
---

### What is HTTPS?

HTTPS (HyperText Transfer Protocol Secure) is an extension of the HTTP protocol that supports encryption to increase security. This protocol is used to securely transmit valuable information like personal data, credit card details, etc.

Using HTTPS is highly advantageous because encrypted traffic is protected against eavesdropping by a third party, and we can only welcome this. HTTPS acceptance has been growing in recent years, mainly because it is [encouraged by Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) and also due to the emergence of a free certificate authority [Let’s Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt).

The diagram below describes the difference between plain HTTP protocol and secure HTTPS protocol.

![What is HTTPS](https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https.png)

### What is a security certificate?

Simply put, HTTPS means data encryption. But there’s still a problem: how can you be sure that you’ve established an encrypted connection with the right website? That’s where security certificates come into play. A certificate serves as proof that the website is really what it tells you it is. If a website doesn’t have such a certificate, or if the certificate contains incorrect information, the browser will not allow you to establish a secure connection. It is important that the certificate a website uses is issued by a certificate authority (CA) trusted by your browser. Such a CA guarantees that the SSL certificate is, indeed, issued to the website’s owner.

### Why does AdGuard need to be able to filter HTTPS?

The thing is, as more and more websites, blogs, social media, and others switch to HTTPS, more ad networks follow them to HTTPS as well, because it becomes necessary to display ads on HTTPS-based websites. Here are a few popular websites where you can’t remove ads without HTTPS filtering: youtube.com, facebook.com, and twitter.com.

### How does HTTPS filtering work?

If it were easy, HTTPS wouldn’t be that secure. When a browser attempts to connect to a server, AdGuard establishes two secure connections: one with the browser (or another app) and the other with the server. The browser must trust AdGuard and the connections it creates. For this purpose, AdGuard generates a special (and unique) root certificate and installs it into the system and, when it is required, into some browsers (e.g., Firefox). Thus, AdGuard can see what is happening inside the secure connection and do its job — block ads and trackers.

For better understanding we depicted this process:

![How does HTTPS filtering work](https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https_filtering.png)

### Does my traffic remain encrypted and secure?

Of course! Your connection with a remote server remains encrypted and secure. AdGuard, just like your browser, checks the server’s certificate before deciding whether to filter it or not.

However, HTTPS filtering has its drawbacks. The most important one is that it hides from the browser the actual certificate of the website. Instead, the browser sees the certificate issued by AdGuard.

Because of this, we have taken additional measures to improve connection security.

### Financial websites and websites with sensitive personal data

By default, AdGuard doesn’t filter any information on websites of banks, payment systems, or websites with valuable personal data. We maintain a list of more than [1,300 such exclusions](https://github.com/AdguardTeam/HttpsExclusions).

If you believe some website should be added to this list, please [let us know](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### Extended Validation (EV) certificates

AdGuard allows you to disable filtering for all websites that use extended validation certificates.

An EV certificate offers a higher level of security and provides more guarantees than a regular certificate, proving that the website is not fraudulent or fake.

### Problems related to HTTPS filtering

This recent [study](https://cdn.adguard.com/public/Adguard/Blog/https/interception-ndss17.pdf) shows that 5 to 10% of HTTPS connections are established by HTTPS-filtering applications. It is usually done by various kinds of antivirus software. The bad news is that 24 out of 26 tested antiviruses reduced, in various ways, the connection security level, while two-thirds created connections prone to hacking.

The researchers came to a simple conclusion: the Internet security community should pay close attention to applications that filter secure connections. And the developers of such software must pay serious attention to the quality of filtering implementations.

We would like to note that AdGuard was not tested in the above study. We ran estimates according to their set of tests, and at the time of testing, we could have received the maximum score – A\*. However, this score is not perfect. During the study, the researchers identified some issues that were omitted in the final evaluation.

Here at AdGuard, we fully agree with those conclusions. Moreover, we would like to be as open with users as possible and talk about the problems we are currently experiencing and the steps we are taking to improve the quality and security of the filtering mechanism. The list of these problems is sorted by priority.

Most of the problems discovered in the above study are related to certificate validation mechanisms. This is what we want to focus on first. We are working on a separate certificate validation library. Moreover, we want to make it open source. A [separate article](https://kb.adguard.com/en/general/https-filtering/https-filtering-known-issues) lists all the known drawbacks of HTTPS filtering in AdGuard and our plans to fix them.

#### HTTPS filtering issues on Android 7+

[Starting from Android 7](https://blog.adguard.com/en/android-nougat-release-and-what-does-it-mean-for-adguard-users/), developers have to explicitly indicate that their apps trust user-installed certificates. Not everyone wants to, or bothers with it. What does it mean for AdGuard? AdGuard installs a user certificate to be able to filter HTTPS traffic. If an app doesn't trust this certificate, its HTTPS traffic will not be filtered. What to do?

The first thing worth mentioning is that many apps (even modern ones) still trust user certificates. Nothing has changed in this regard. Almost all browsers also trust such certificates. There may be some exotic browsers that do not, but they are a rare exception to common practice.

Finally, if your device is rooted, you can move the AdGuard certificate to the system storage. This way, you don't have to worry about any permissions a particular app may or may not have — HTTPS traffic will be filtered for modern apps just as well as for older ones. Please keep in mind that in this case, some additional security restrictions (e.g., HPKP or `Expect-CT`) apply to AdGuard.

### How to manually check HTTPS quality?

There are several dedicated websites where you can check the quality of your HTTPS connection. These websites check if your browser (or, in our case, your browser plus AdGuard) is susceptible to common vulnerabilities. If you plan to use any program that filters HTTPS, not necessarily AdGuard (e.g., an antivirus), we advise that you check the connection quality on these websites.

* [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
* [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
* [https://badssl.com/](https://badssl.com/)
