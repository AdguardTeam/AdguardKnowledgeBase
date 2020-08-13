---
title: 'Manual installation of the security certificate into Firefox browser'
published: true
taxonomy:
    category:
        - docs
---

Different versions of Firefox require different approaches to implement [HTTPS filtering](https://kb.adguard.com/en/general/https-filtering). If the stable version of Firefox allows you to install the certificate directly into the browser itself, in other versions of the specified browser this functionality may be limited (Firefox Nightly, Beta, and Developer Edition). Below we present two options to help you activate HTTPS filtering in different versions of the Firefox browser.


### Enabling access to user certificates

#### Certificate locate in the User section


to enable usage of user certificates in Firefox(and browser based on Firefox) you need to toggle the hidden option in the browser itself.

1. Run **Firefox** browser
2. Navigate to **about:config** page
3. Enter **roots** in the search field
4. Locate an option “security.enterprise_roots.enabled” and toggle it, making it **true**

#### Certificate located in the System section

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb; 
2. Activate **developer mode** and enable **USB debugging**:
- Open the **Settings** application on your phone;
- Go to **System** section (last item in the settings menu). In this section find sub-item **About phone**;
- Click on the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);
- Open **System Settings** > **Developer Options** > Scroll down and enable **USB debugging** > Confirm debugging is enabled in the window **Allow USB debbuging** after reading the warning carefully.
3. Install the [Firefox](https://www.mozilla.org/en-US/firefox/releases/) browser (release version);
4. Open the AdGuard settings > Network > HTTPS Filtering > Install the certificate in Firefox browser;
5. Open the folder `data/data/org.mozilla.firefox/files/mozilla`, then browse to the folder named `xxxxxxx.default` and remember its name.
6. In the specified folder we are interested in two files:
- `cert9.db`
- `key4.db`
7. We need to move these files to a folder on the browser where the security certificate issue occurred: 
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.
8. The full team will look like this:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

In case you received the system notification **permission denied**, you should first move the specified files to the permission-free directory. And after that you should move them to the necessary folder in your Firefox browser.
The full command will have an approximate appearance like this:
- `adb shell su`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download `
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download `
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`. 
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
> If `adb shell su` does not work, you should try `adb shell` initially.