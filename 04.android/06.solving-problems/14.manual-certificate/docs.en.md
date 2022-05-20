---
title: 'Сertificate installation issues on devices with Android 11 and later'
taxonomy:
    category:
        - docs
visible: true
---

To be able to filter HTTPS traffic (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically, but on Android 11 and later users have to [install it manually](https://kb.adguard.com/en/android/overview/install-certificate#anchorname).


<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-5/cert-en.gif" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

If this is the case for you, and you have to install the certificate manually, most likely you won't encounter any difficulties or problems. But some obstacles may still arise, let's look at them in detail. 

<a id="secure-folder"></a>   

## Certificate installation in a "Secure folder"

If you use [the *Secure folder* on your Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. The thing is that the *Secure folder* has its own storage where the certificates are stored. However, in case you do everything according to the instructions [described in this article](https://kb.adguard.com/en/android/overview/https-filtering#anchorname), the certificate is installed into the main storage and plays no role for your ad blocker in the *Secure folder*. So, in order to resolve this issue and install the certificate for your AdGuard for Android into the *Secure folder's* storage, follow this instruction:


1. After installing the application and connecting to VPN tap "Turn on" next to the "HTTPS filtering is off" message.
2. Tap "Next" —> "Next" —> "Save it now" —> "Allow".
3. Save the certificate (at this stage, you can rename it to make it easier to find).
4. After the "How to install a certificate?" screen appears, DO NOT tap "Open Settings".
5. Minimize the application and go to the secure folder.
6. Tap the three-dot menu and go to additional security settings.
7. Tap "Install from memory" —> "CA certificate" —> "Install anyway" —> Enter a graphic key/password/fingerprint —> Find the saved certificate and select it.
8. Return to the AdGuard application and close the screen "How to install a certificate?" by tapping the cross button.
9. Done! The certificate has been installed. 
