---
title: 'HTTPS filtering: known issues'
taxonomy:
    category:
        - docs
visible: true
---

> Last update: 3 April 2018
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

#### OCSP revocation checking

The Internet security community has some [controversy](https://www.grc.com/revocation/crlsets.htm) regarding how useful OCSP checks are. For example, Chrome developers believe that this approach [doesn’t hold water](https://www.imperialviolet.org/2014/04/19/revchecking.html), and they suggest [an alternative solution](https://www.imperialviolet.org/2012/02/05/crlsets.html). Moreover, Android [doesn’t (and will not) support OCSP revocation checking](https://issuetracker.google.com/issues/36993981).

AdGuard’s behavior depends on the platform. AdGuard for Windows uses Microsoft CryptoAPI to perform OCSP checks, and it has all the drawbacks that Chrome developers describe. AdGuard for Android doesn’t perform OCSP checks whatsoever.

**Our plans:**

* Add a possibility to use CRLSets (an alternative to the OCSP by Google) to the validation library
* Add the OCSP Must-Staple support to the validation library
* Add the Expect-Staple header support
* Stop using the CryptoAPI in favor of the cross-platform implementation of the OCSP revocation checking

**ETA:** This will be implemented after we complete the development of the new cross-platform filtering engine, which is planned for Q2-Q3 2018.

#### Certificate Transparency

Thanks to modern cryptography, browsers can usually detect malicious websites that are provisioned with forged or fake SSL certificates. However, current cryptographic mechanisms aren’t so good at detecting malicious websites if they’re provisioned with mistakenly issued certificates or certificates that have been issued by a certificate authority (CA) that’s been compromised or gone rogue. Certificate Transparency aims to remedy these certificate-based threats by making the issuance and existence of SSL certificates open to scrutiny by domain owners, CAs, and domain users.

Browsers ignore the `Expect-CT` header in the case of local certificates and to achieve the same level of security we must implement the certificate transparency check on our side.

**Our plans:**

* Add the certificate transparency support to the certificate validation library

**ETA:** We are planning to enable this functionality after all AdGuard products start using the new filtering engine. ETA is Q3-Q4 2018.

#### HPKP support

[HPKP (HTTP Public Key Pinning)](https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning) is a mechanism that allows websites to defend against the unauthorized attempts to intercept the encrypted (HTTPS) connections to them. This standard is not too widespread so far (of the Alexa top1000 websites, less than 1% uses HPKP) due to the high risks of using and sophisticated configuration process. Some experts even go as far as saying that HPKP is [de-facto dead](https://blog.qualys.com/ssllabs/2016/09/06/is-http-public-key-pinning-dead). Nonetheless, it remains the only protection mechanism to keep working should it happen the center of certification becomes compromised.

There’s one serious problem with using HTTPS filtering - browsers completely ignore HPKP (because it isn’t used alongside with a local root certificate). This is a common issue for all programs that filter HTTPS. The only possible solution is to implement the HPKP standard within AdGuard.

**Our plans:**

* Add the HPKP support to the certificate validation library
* Change the AdGuard’s behavior for the cases when an invalid certificate is spotted. Instead of the current solution (ceasing the filtering for this domain) we should warn the user about the problem.

**ETA:** We are planning to enable this functionality after all AdGuard products start using the new filtering engine. ETA is Q3-Q4 2018.

>Note: *Google's ["intent to remove"](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/he9tr7p3rZ8) HPKP support adds some controversy and may end up interfering with our plans.*

### TLS v1.3 support

By this moment, the latest stable TLS version is 1.2, dated by 2008. This protocol is pretty safe, provided it is configured correctly. On the other hand, an incorrect configuration leads to various vulnerabilities: [POODLE](https://blog.qualys.com/ssllabs/2014/10/15/ssl-3-is-dead-killed-by-the-poodle-attack), [FREAK](https://censys.io/blog/freak), [Logjam](https://weakdh.org/) and others.

New TLS version is still under development, but several browsers and some popular [websites and services](https://blog.cloudflare.com/introducing-tls-1-3/) already support it.

The main advantages to TLS 1.3 are:

* Improved performance
* Enhanced security

Better security is achieved through removing support for older broken forms of cryptography, supported by TLS 1.2.

Currently, the situation with TLS 1.3 support in popular browsers is following: 

* Firefox - supports TLS 1.3, it is enabled and being used
* Chrome - supports TLS 1.3, it is disabled by default (can be enabled in chrome://flags)
* Safari - doesn’t support TLS 1.3
* Edge - doesn’t support TLS 1.3

**Our plans:**

* The new filtering engine supports TLS 1.3 so every AdGuard version will receive it soon.

**ETA:** The ETA is Q2-Q3 2018.

### Obsolete Key Exchange (RSA) warning

If you check HTTPS connection properties in Chrome, you might see the following warning:

![Obsolete Key Exchange](https://cdn.adguard.com/public/Adguard/Blog/https/obsolete_key_exchange.png)

The thing is that AdGuard maintains two encrypted connections: one with the browser, another with the server. For the browser connection, we use a less strong encryption algorithm to achieve higher speed. It does not make it insecure as this is a local connection, though, it might be unnecessary.

**Our plans:**

* Use a more modern key exchange algorithm in AdGuard for Windows v6.2 beta version.
* In case we don’t like the new performance rate, keep the old algorithm but add a flag in AdGuard settings to enable the modern one.

**ETA:**
* AdGuard for Windows v6.2 featuring the new algorithm has been released in November 2017. (**UPD:** done)
* AdGuard for Mac already uses the modern algorithm.
* Android version will receive this fix alongside with the new filtering engine migration (approximately, Q2 2018).

### Have remarks or suggestions?

If you’d like to add something, notice any mistakes or want to ask a question, please contact us: `devteam at AdGuard.com`.
