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

Using HTTPS is strictly advantageous, since encrypted traffic is protected from ‘eavesdropping’ by third parties, and we can only welcome this. HTTPS spread has been on the rise in the recent years, mostly because it is being [encouraged by Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html), and also due to the emergence of a free certification center [Let’s Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt).

The diagram below describes the difference between plain HTTP protocol and secure HTTPS protocol.

![What is HTTPS](https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https.png)

### What is a security certificate?

Simply put, HTTPS means data encryption. But there’s still a problem: how can you be sure you’ve established an encrypted connection with exactly the website you intended to? That’s where security certificates come into play. The certificate is proof that the website is actually what it tells you it is. If a website doesn’t have such certificate, or the certificate contains incorrect information, the browser won’t let you establish a secure connection. It is important that the certificate a website uses was issued by a certification authority (CA) trusted by your browser. Such CA guarantees that the SSL certificate is, indeed, issued to the website’s owner.

### Why does AdGuard need to be able to filter HTTPS?

The thing is, more and more websites, blogs, social media, etc. switch to HTTPS every day. And following blogs and websites, more ad networks switch to HTTPS too, because it becomes necessary to display ads on the HTTPS-based website. Here are few examples of popular websites, where you can’t remove ads without filtering the HTTPS: youtube.com, facebook.com, twitter.com.

### How does HTTPS filtering work?

If it were easy, HTTPS wouldn’t be that secure. Upon browser’s attempt to connect to a server, AdGuard establishes two secure connections: one with the browser (or another app), and the other with the server. It is crucial that browser trusts AdGuard and the connections created by it. For this purpose, AdGuard generates a special (and unique) root certificate and installs it into the system and, when it is required, into some browsers too (e.g. Firefox). Thus, AdGuard can see what is happening inside of the secure connection and do its job - block ads and tracking.

For better understanding we depicted this process:

![How does HTTPS filtering work](https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https_filtering.png)

### Does my traffic remain encrypted and secure?

Of course! Your connection with a remote server remains encrypted and secure. AdGuard, just as your browser, checks the server’s certificate before deciding whether to filter it or not.

Nevertheless, HTTPS filtering has its drawbacks. The most important of them is the fact that it hides from the browser the real certificate that the website uses. Instead, the browser sees the certificate issued by AdGuard.

Because of this, we undertake several additional measures to improve the connection’s security.

### Financial websites and websites with sensitive personal data

By default, AdGuard doesn’t filter any information for the bank websites, websites of the payment systems and websites with valuable personal data. We maintain a list of more than [1300 such exclusions](https://github.com/AdguardTeam/HttpsExclusions).

If you believe some website should be added to this list, please [let us know](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### Extended Validation (EV) certificates

AdGuard provides an ability to exclude from filtering all websites that use extended validation certificates. 

EV certificate means a higher security level and provides more guarantees than a regular certificate, proving that the website is not fraudulent or fake. When you visit a website protected by such certificate, the address bar becomes green, and the organization’s name appears in the browser’s interface.

![EV certificate](https://cdn.adguard.com/public/Adguard/Blog/https/ev_certificate.png)

### Problems related to HTTPS filtering

The recent [research](https://cdn.adguard.com/public/Adguard/Blog/https/interception-ndss17.pdf) shows that 5 to 10% of HTTPS connections are established by HTTPS filtering applications. It is usually done by various kinds of antivirus software. The bad news is that 24 of 26 tested antiviruses were in one way or another reducing the connection security level and two-thirds were creating vulnerable to hacking connections.

The researchers’ conclusion was simple - Internet security community has to pay close attention to applications that filter secure connections. And the developers of such programs have to attend to the quality of filtering implementation most seriously.

I want to note that AdGuard has not been tested by the researchers. According to our estimates, and judging by the set of tests, at the time of testing we would get the maximum score - A\*. Nevertheless, that score is not perfect. There are some problems that have been identified by researchers but were not taken into account in the final evaluation.

Here in AdGuard, we completely agree with those conclusions. Moreover, we would like to be as open with users as possible and talk about the problems we are having at the moment, and what steps we are taking to improve the quality and security of filtering mechanism. The list of these problems is sorted by their priority.

The majority of the problems discovered in the research above are connected with certificate validation mechanisms. This is what we want to focus on firstly. We are working on a separate certificate validation library. Moreover, we want to make it open source. A [separate article](https://kb.adguard.com/en/general/https-filtering/https-filtering-known-issues) lists all known drawbacks of HTTPS filtering in AdGuard and estimates when we will fix them.

#### HTTPS filtering issues on Android 7+

[Starting from Android 7](https://blog.adguard.com/en/android-nougat-release-and-what-does-it-mean-for-adguard-users/), developers have to explicitly indicate that their apps trust user-installed certificates. Not everyone wants to, or bothers with it. What does it mean for AdGuard? AdGuard installs a user certificate to be able to filter HTTPS traffic. If an app doesn't trust this certificate, its HTTPS traffic will not be filtered. What to do?

The first thing to mention is, some (many, even) modern apps still trust user certificates. Nothing changes in their regard. Almost all browsers do, too — maybe there are some exotic ones that don't, but they are a huge exception compared to the field.

Finally, if your device is rooted, you can move AdGuard certificate to system storage. This way you don't have to worry about any permissions a particular app may or may not have — HTTPS traffic will be filtered for modern apps just as well as for older ones. Please keep in mind that in this case some additional security restrictions like HPKP or Expect-CT apply to AdGuard.

### How to manually check HTTPS quality?

There are several websites created specifically for the purpose of checking HTTPS connections quality. These websites check if your browser (or, in our case, browser + AdGuard) is susceptible to common vulnerabilities. If you plan to use any program that filters HTTPS (not necessarily AdGuard, it may be an antivirus, etc.), we advise checking the connection quality on these websites.

* [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
* [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
* [https://badssl.com/](https://badssl.com/)
