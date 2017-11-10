---
title: 'HTTPS filtering: known issues'
taxonomy:
    category:
        - docs
visible: true
---

> Last update: 10 November 2017
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

#### Phasing out SHA-1

All modern browsers are discontinuing the support of SHA-1 certificates. This gradual process has begun in 2016 and is almost finished by the end of 2017. For example, Chrome doesn’t trust SHA-1 certificates starting from v56, Microsoft Edge browser - since 9th of May 2017.

Current stable AdGuard versions do not trust either leaf or 'intermediate' SHA-1 certificates.

**ETA:**

* **Windows:** With the release of v6.2 of Adguard for Windows in November 2017, these certificates are not trusted anymore.
* **Android:** The issue was fixed with the release of v2.9 in July 2017.
* **Mac:** Fixed in v1.5.0 in September 2017.

#### OCSP revocation checking

The Internet security community has some [controversy](https://www.grc.com/revocation/crlsets.htm) regarding how useful OCSP checks are. For example, Chrome developers believe that this approach [doesn’t hold water](https://www.imperialviolet.org/2014/04/19/revchecking.html), and they suggest [an alternative solution](https://www.imperialviolet.org/2012/02/05/crlsets.html). Moreover, Android [doesn’t (and will not) support OCSP revocation checking](https://issuetracker.google.com/issues/36993981).

AdGuard’s behavior depends on the platform. AdGuard for Windows uses Microsoft CryptoAPI to perform OCSP checks, and it has all the drawbacks that Chrome developers describe. AdGuard for Android doesn’t perform OCSP checks whatsoever.

**Our plans:**

* Add a possibility to use CRLSets (an alternative to the OCSP by Google) to the validation library
* Add the OCSP Must-Staple support to the validation library
* Stop using the CryptoAPI in favor of cross-platform implementation of the OCSP revocation checking

**ETA:** This will be implemented after we complete the development of the new cross-platform filtering engine, which is planned for December 2017 — January 2018.

#### HPKP support

[HPKP (HTTP Public Key Pinning)](https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning) is a mechanism that allows websites to defend against the unauthorized attempts to intercept the encrypted (HTTPS) connections to them. This standard is not too widespread so far (of the Alexa top1000 websites, less than 1% uses HPKP) due to the high risks of using and sophisticated configuration process. Some experts even go as far as saying that HPKP is [de-facto dead](https://blog.qualys.com/ssllabs/2016/09/06/is-http-public-key-pinning-dead). Nonetheless, it remains the only protection mechanism to keep working should it happen the center of certification becomes compromised.

There’s one serious problem with using HTTPS filtering - browsers completely ignore HPKP (because it isn’t used alongside with a local root certificate). This is a common issue for all programs that filter HTTPS. The only possible solution is to implement the HPKP standard within AdGuard.

**Our plans:**

* Add the HPKP support to the certificate validation library
* Change the AdGuard’s behavior for the cases when an invalid certificate is spotted. Instead of the current solution (ceasing the filtering for this domain) we should warn the user about the problem.

**ETA:** Just as with OCSP revocation support, we wait until the new filtering engine development is finished. ETA is December 2017 — January 2018.

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

* We are experimenting with TLS 1.3 and plan to add its support to the AdGuard for Windows v6.3.
* It won’t be enabled by default until TLS 1.3 is finalized and browsers start to support the unified standard.
* Mac and Android versions of AdGuard will receive TLS 1.3 support later after we test it on the Windows version.

**ETA:** There is no unified standard for TLS 1.3 yet, we expect it to be agreed on somewhere around Q1 2018.

### Obsolete Key Exchange (RSA) warning

If you check HTTPS connection properties in Chrome, you might see the following warning:

![Obsolete Key Exchange](https://cdn.adguard.com/public/Adguard/Blog/https/obsolete_key_exchange.png)

The thing is that Adguard maintains two encrypted connections: one with the browser, another with the server. For the browser connection, we use a less strong encryption algorithm to achieve higher speed. It does not make it insecure as this is a local connection, though, it might be unnecessary.

**Our plans:**

* Use a more modern key exchange algorithm in AdGuard for Windows v6.2 beta version.
* In case we don’t like the new performance rate, keep the old algorithm but add a flag in Adguard settings to enable the modern one.

**ETA:**
* AdGuard for Windows v6.2 featuring the new algorithm has been released in November 2017.
* AdGuard for Mac already uses the modern algorithm.
* Android version will receive this fix in the v3.0 (approximately, Q1-Q2 2017).

### Have remarks or suggestions?

If you’d like to add something, notice any mistakes or want to ask a question, please contact us: `devteam at adguard.com`.
