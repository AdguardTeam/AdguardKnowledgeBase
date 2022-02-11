---
title: 'HTTPS filtering: known issues'
taxonomy:
    category:
        - docs
visible: true
---

> Last update: January 18, 2021
> Understanding this article may require some basic knowledge about encryption, the TLS protocol, and HTTPS.

First, look at this simple diagram that shows the general structure of the HTTPS protocol:

![What is HTTPS filtering](https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard copies properties of the TLS-connection that your browser uses:

* AdGuard uses the same TLS version.
* AdGuard uses the same encrypting methods (ciphers) as your browser.

Effectively, it means that if you use a modern, safe browser, it will take all known TLS problems into account and won’t attempt to use unsafe ciphers.

**What does AdGuard do when there are any doubts about the certificate’s validity?** In such cases, AdGuard entirely ceases filtering of all connections to this domain and leaves the browser in charge of all decisions.

### Known issues

HTTPS filtering in AdGuard has its drawbacks. Almost all of them are scheduled to be eliminated in the next few AdGuard versions.

Below are listed all the issues known to us and the ETAs for the fixes.

#### Inspecting the original certificate

The most important drawback of the HTTPS filtering mechanism is that it hides the real certificate that the website uses. You cannot simply check what the original certificate was and can only see the one issued by AdGuard.

This problem has been solved in [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). This browser extension helps you manage filtering right from the browser and allows you to inspect the original certificate of any website.

#### Certificate Transparency

Thanks to modern cryptography, browsers can usually detect malicious websites that are provisioned with forged or fake SSL certificates. However, current cryptographic mechanisms aren’t so good at detecting malicious websites if they’re provisioned with mistakenly issued certificates or certificates that have been issued by a certificate authority (CA) that’s been compromised or gone rogue. Certificate Transparency aims to remedy these certificate-based threats by making the issuance and existence of SSL certificates open to scrutiny by domain owners, CAs, and domain users.

Browsers ignore the `Expect-CT` header in the case of local certificates, and to achieve the same level of security, we must implement the certificate transparency check on our side.

**Our plans:**

* Add the certificate transparency support to the certificate validation library.

**ETA:** ETA is Q3 2021.

### Have remarks or suggestions?

If you’d like to add something, notice any errors, or want to ask a question, please contact us: `devteam at adguard.com`.
