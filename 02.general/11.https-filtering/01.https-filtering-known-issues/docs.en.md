---
title: 'HTTPS filtering: known issues'
taxonomy:
    category:
        - docs
visible: true
---

> Last update: 14 June 2019
> Understanding this article may require from you the basic knowledge about encrypting, TLS protocol and HTTPS.

First, look at this simple diagram that shows the general structure of HTTPS protocol:

![What is HTTPS filtering](https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard copies properties of the TLS-connection that your browser uses:

* AdGuard uses the same TLS version.
* AdGuard uses the same encrypting methods (ciphers) as your browser.

Effectively, it means that if you use a modern, safe browser, it will take all known TLS problems into account and won’t attempt to use unsafe ciphers.

**What does AdGuard do when there are any doubts about the certificate’s validity?** In such cases, AdGuard entirely ceases filtering of all connections to this domain and leaves the browser in charge of all decisions.

### Known issues

HTTPS filtering in AdGuard has its drawbacks. Almost all of them are scheduled to be eliminated in the nearest upcoming AdGuard versions. Moreover, we are working on a separate certificate validation library, and we want to make it open source.

Below are listed all issues known to us and ETAs for the fixes.

#### Inspecting the original certificate

The most important drawback of the HTTPS filtering mechanism is that it hides the real certificate that the website uses. You cannot simply check what was the original certificate, and can only see the one issued by AdGuard.

**Our plans:**

* We want to add an option to inspect the original certificate in the future versions of AdGuard. At a minimum, this will be possible with the help of AdGuard's filtering log. Also, we'd like to allow doing it via the AdGuard browser extension.

**ETA:** ETA is Q1 2020.

#### Certificate Transparency

Thanks to modern cryptography, browsers can usually detect malicious websites that are provisioned with forged or fake SSL certificates. However, current cryptographic mechanisms aren’t so good at detecting malicious websites if they’re provisioned with mistakenly issued certificates or certificates that have been issued by a certificate authority (CA) that’s been compromised or gone rogue. Certificate Transparency aims to remedy these certificate-based threats by making the issuance and existence of SSL certificates open to scrutiny by domain owners, CAs, and domain users.

Browsers ignore the `Expect-CT` header in the case of local certificates and to achieve the same level of security we must implement the certificate transparency check on our side.

**Our plans:**

* Add the certificate transparency support to the certificate validation library.

**ETA:** ETA is Q2 2020.

### Have remarks or suggestions?

If you’d like to add something, notice any mistakes or want to ask a question, please contact us: `devteam at adguard.com`.
