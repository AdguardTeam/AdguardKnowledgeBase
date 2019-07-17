---
title: 'Install/Uninstall'
taxonomy:
    category:
        - docs
---

## System  requirements

**Operating system version:** OS X 10.10 (64 bit) or higher

**RAM:** at least 2 GB

**Browsers:** Safari, Google Chrome, Opera, Yandex.Browser, Mozilla Firefox, any other macOS compatible browser

**Free disk space:** 120 Mbytes

## Installation

To install AdGuard for macOS on your computer, launch your browser, type _adguard.com_ in the address bar, and press **Download** on the page that opens.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/MacOs/mainpageEn.png" />

Wait for _Adguard.release.dmg_ to download and double-click on its icon in the list of downloaded files in the Dock panel. The AdGuard icon will appear on your Desktop. Cick on it to open the installation app.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Ru/MacOs/installerRu.png" />

 Upon the first AdGuard launch, your operating system will warn you that this application has been downloaded from the Internet. Click **Open**.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/MacOs/notificationEn.png" />

In the next step, you just need to click **Install**.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/MacOs/installEn.png" />

To use the application, you will need the administrator password for your macOS account. Enter the password when propped in the dialogue box and press **OK**.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/MacOs/userpwEn.png" />

<a name="uninstall"></a>
## Uninstall

### Regular
First of all, open 'Finder' app by clicking on a respective icon:

![](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/finder.png)

Go to 'Applications' section. Find AdGuard there, right-click on it and choose 'Move to Trash'.

![](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/delete_mac.png)

### Advanced
**Use this instruction only after performing all steps from 'regular uninstall'.** After that, do the following:

* Delete following AdGuard files:
    * */Library/Application Support/com.adguard.Adguard* (folder)
    * *~/Library/Application Support/com.adguard.Adguard* (folder)
    * *~/Library/Preferences/com.adguard.Adguard.plist* (file)

* Run ’Activity Monitor’ app.
* Using search tool, find process **cfprefsd**.

![](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/cfprefsd_find.png)

* Stop the process which is being&nbsp;run under the user (not the one run under root).

![](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/cfprefsd_abort.png)

AdGuard is removed from your computer.
