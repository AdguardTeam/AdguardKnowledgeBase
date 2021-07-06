---
title: 'Install/Uninstall'
taxonomy:
    category:
        - docs
---
* [System requirements](#system-requirements)
* [Installation](#installation)
* [Uninstall](#uninstall)
	* [Advanced uninstall](#uninstall-advanced)

<a id="system-requirements"></a>
## System  requirements

**Operating system version:** macOS 10.12 (64 bit) or higher

**RAM:** at least 2 GB

**Browsers:** Safari, Google Chrome, Opera, Yandex.Browser, Mozilla Firefox, and any other macOS compatible browser

**Free disk space:** 120 Mbytes

<a id="installation"></a>
## Installation


To install AdGuard for macOS on your computer, launch your browser, type _adguard.com_ in the address bar, and press **Download** on the page that opens.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/1.png" width="600" />

Wait for _AdguardInstaller.dmg_ to download and double-click on its icon in the list of downloaded files on the Dock panel. 

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/2.png" width="600" />

The AdGuard icon will appear on your Desktop. Click on it to open the installation app. Then double-click on the AdGuard icon in the opened installation window.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/3.png" width="300" />

 Upon the first AdGuard launch, your operating system will warn you that this application has been downloaded from the Internet. Click **Open**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/4.png" width="400" />

In the next step, you'll need to click **Install**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/5.png" width="300" />

Wait for the installer to download the required files.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/6.png" width="500" />

To use the application, you will need the administrator password for your macOS account. Enter the password when propped in the dialogue box and press **OK**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/7.png" width="300" />


Now, you'll see a quick installation wizard where we will offer you to configure protection to your needs. You can either start fine-tuning right away ("Let's do it!") or skip for now ("Leave as it is").

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/installation-wizard.png?" width="600" />

Here we are, AdGuard is installed on your Mac! 

<a id="uninstall"></a>
## Uninstall

### Regular
First of all, open 'Finder' app by clicking on a respective icon:

![](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/finder.png)

Go to 'Applications' section. Find AdGuard there, right-click on it and choose 'Move to Trash'.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/uninstall/1.png" width="600" />

<a id="uninstall-advanced"></a>
### Advanced

**Use this instruction only if you know what you are doing or if our support service specifically recommended you the 'advanced uninstall'. Also, do all the steps from the 'regular uninstall first'.** After that, do the following:

* Delete following AdGuard files:
    * */Library/Application Support/com.adguard.mac.adguard* (folder)
    * *~/Library/Application Support/com.adguard.mac.adguard* (folder)
    * *~/Library/Group Containers/TC3Q7MAJXF.com.adguard.com* (folder)
    * *~/Library/Preferences/com.adguard.mac.adguard.plist* (file)

**To do so**, open the Terminal app, then enter and execute the following commands: 

`sudo rm -R "/Library/Application Support/com.adguard.mac.adguard"`
`rm -R "~/Library/Application Support/com.adguard.mac.adguard"`
`rm -R "~/Library/Group Containers/TC3Q7MAJXF.com.adguard.com"`
`rm ~/Library/Preferences/com.adguard.mac.adguard.plist`

* Run ’Activity Monitor’ app.
* Using search tool, find the process **cfprefsd**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/uninstall/2.png" width="600" />

* Stop the process which is being&nbsp;run under the user (not the one run under root). To do so, click on the process and then on the X on the upper left. Confirm it in the dialogue window.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/uninstall/3.png" width="400" />

AdGuard is removed from your computer now.
