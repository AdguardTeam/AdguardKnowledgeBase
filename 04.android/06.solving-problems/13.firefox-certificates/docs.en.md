---
title: 'Manual installation of the security certificate into the Firefox browser'
published: true
taxonomy:
    category:
        - docs
---

Different versions of Firefox browser require different approaches for AdGuard to perform [HTTPS filtering](https://kb.adguard.com/en/general/https-filtering). Generally, an installation of user's certificate problem appears before Firefox v81.1.1. To solve this issue, try Method 1 described below. It also works with nightly– and beta– version of browser.


### Enabling access to certificates installed on device

#### Method 1 (Certificate located in the User store)

To make the **latest stable**, beta– or nightly– version of Firefox (and browsers based on it) trust user certificates, you need to toggle the hidden option in the browser itself.

1. Run the browser;
2. Navigate to **about:config** page;
3. Type **root** in the search field;
4. Locate the option “security.enterprise_roots.enabled” and toggle it, making it **true**.

#### Method 2 (Certificate located in the System store)

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb; 
> On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).
2. Activate the **developer mode** and enable **USB debugging**:
- Open the **Settings** application on your phone;
- Go to **System** section (last item in the settings menu). In this section find sub-item **About phone**;
- Click on the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
- Open **System Settings** > **Developer Options** > Scroll down and enable **USB debugging** > Confirm debugging is enabled in the window **Allow USB debbuging** after reading the warning carefully.
3. Install the [Firefox](https://www.mozilla.org/en-US/firefox/releases/) browser (release version);
4. Open the **AdGuard settings** > **Network** > **HTTPS Filtering** > Install the certificate in **Firefox** > **INSTALL FOR OLD VERSIONS**;
5. Open the folder `data/data/org.mozilla.firefox/files/mozilla` using `adb shell su` and `cd data/data/...`, then browse to the folder named `xxxxxxx.default` and memorize its name;
6. In the specified folder we are interested in two files:
- `cert9.db`
- `key4.db`
7. We need to move these files to a folder of the browser where the security certificate issue occurred: 
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.
8. The full сommand will look like this:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

In case you received the system notification **permission denied**, you should first move the specified files to the permission-free directory. And after that you should move them to the necessary folder in your Firefox browser.
The full command should look something like this:
- `adb shell su`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download `
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download `
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`. 
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
If `adb shell su` does not work, you should try `adb shell` initially, and then `su`.
