---
title: AdGuard VPN for Mac installation and removal
published: true
taxonomy:
    category:
        - docs
---
* [System requirements](#requirements)
* [Installation](#install)
* [Uninstallation](#uninstall)
  * [Advanced uninstallation](#advanced-uninstall)

<a id="requirements"></a>

## System requirements

**Operating system version**: macOS 10.12 (64 bit) or higher

**RAM**: at least 2 GB

**Free disk space**: 120 Mb

<a id="install"></a>

## Installation

1. To install AdGuard VPN for Mac, just follow [this link](https://agrd.io/mac_vpn) or open a browser, type *adguard-vpn.com* in the address bar and on the opened page click "Try for free".

<img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-en.png" style="max-width: 350px; ">

2. Wait until the download of the *AdGuardVPN.dmg* file is finished and open it in the "Downloads" folder.

3. Wait until the installation program window opens. Double-click the icon in it.

<img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png" style="max-width: 350px; ">

4. When you first start AdGuard VPN, the operating system will show a warning on the screen that this application has been downloaded from the Internet. Click *Open*.

5. Then click *Continue* and *Install*.

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-2-en.png" style=" max-width: 320px;">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-3-en.png" style=" max-width: 350px;">
     </div>
</div>

6. Wait for the installer to download the necessary files.

AdGuard VPN for Mac is installed!

<a id="uninstall"></a>

## Uninstallation

### Standard uninstallation

To uninstall AdGuard VPN for Mac, follow two simple steps:

1. Open "Finder" and go to the "Programs" section.

2. Select *AdGuard VPN* from the list, right-click on it and then click *Move to Trash*.

<img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png" style="max-width: 350px; ">

<a id="advanced-uninstall"></a>

### Advanced uninstallation

Sometimes, as a result of incorrect removal, or in other rare cases, the standard uninstallation may not be enough. Then the support service may ask you to do an advanced uninstallation in order to completely remove AdGuard VPN from your Mac. To do this, do the following:

1. Follow the steps described in the section ["Standard uninstallation"](#uninstall).

2. Open "Finder" and enter `Keychain` in the search.

<img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png" style="max-width: 350px; ">

3. Click the icon of the found program and enter `com.adguard.mac.vpn` in the search. If there is such a record in the search results, delete it.

4. Go back to "Finder" and enter `Terminal` in the search.

<img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-terminal-en.png" style="max-width: 350px; ">

5. Open the program and enter the command — `defaults delete com.adguard.mac.vpn`.

6. Press *Space bar* and enter another command — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN has been completely removed from your Mac.

You can learn more about AdGuard VPN for Mac in [this article](https://kb.adguard.com/en/vpn/adguard-vpn-mac/overview).