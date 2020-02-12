---
title: 'Setup guide'
taxonomy:
    category:
        - docs
---

## Our IP addresses

**Default**
Use these servers to block ads, trackers and phishing websites.

_176.103.130.130_

_176.103.130.131_

**Family Protection**
Use these servers to block ads, trackers, phishing and adult websites, and to enforce safe search in your browser.

_176.103.130.132_

_176.103.130.134_

### Setup guide

* [Setup guide for Windows 10](#win10)
* [Setup guide for Windows 8/8.1](#win8)
* [Setup guide for Windows 7](#win7)
* [Setup guide for Windows Vista](#vista)
* [Setup guide for Windows XP](#xp)
* [Setup guide for macOS](#macos)
* [Setup guide for Android](#android)
* [Setup guide for iOS](#ios)
* [Setup guide for Routers](#router)
* [Setup guide for Ubuntu](#ubuntu)
* [DNSCrypt](#dns)

<a id="win10"></a>

#### Windows 10

1. Open Control Panel through ’Start’ menu or Windows search

2. Go to ’Network and Internet’ category and then to ’Network and Sharing Center’

3. On the left side of the screen find ’Change adapter settings’ and click on it

4. Select your active connection, right-click on it and choose ’Properties’

5. Find ’Internet Protocol Version 4 (TCP/IP)’ in the list, select it and then click on ’Properties’ again

6. Choose ’Use the following DNS server addresses’ and enter these: 

>176.103.130.130 

>176.103.130.131 

for ’Default’ servers; 

>176.103.130.132 

>176.103.130.134 

for ’Family protection’ servers.

<a id="win8"></a>

#### Windows 8/8.1

1. Move the mouse cursor to the bottom or top right corner of the screen and select the cog icon for Settings, then click ’Control Panel’

2. Click ’Network and Internet’ -> ’Network and Sharing Center’

3. Click ’Change adapter settings’ on the left part of the screen

4. Select your active connection, right click on it and choose ’Properties’

5. Highlight the ’Internet protocol version 4 (TCP/IP)’ and click ’Properties’ again (same for ’Internet protocol version 6 (TCP/IP)’ if you use IPv6)

6. Select ’Use the following DNS server addresses’ and enter following:
 
 
>176.103.130.130 

>176.103.130.131 

for ’Default’ servers; 

>176.103.130.132 

>176.103.130.134 

for ’Family protection’ servers.

<a id="win7"></a>
#### Windows 7

1. Click the Start menu, select ’Control Panel’

2. Click ’Network and Internet’ -> ’Network and Sharing Center’

3. Click ’Change adapter settings’ on the left part of the screen

4. Select your active connection, right click on it and choose ’Properties’

5. Highlight the ’Internet protocol version 4 (TCP/IP)’ and click ’Properties’ again (same for ’Internet protocol version 6 (TCP/IP)’ if you use IPv6)

6. Select ’Use the following DNS server addresses’ and enter following: 
 
 
>176.103.130.130 

>176.103.130.131 

for ’Default’ servers; 

>176.103.130.132 

>176.103.130.134 

for ’Family protection’ servers.

<a id="vista"></a>

#### Windows Vista

1. Click the Start menu, select ’Control Panel’

2. Click ’Network and Internet’, then ’Network and Sharing Center’, and open ’Manage network connections’

3. Select your active connection, right click on its icon to invoke the menu, and then click the ’Properties’

4. Scroll down and highlight the ’Internet Protocol (TCP/IP)’

5. Click ’Properties’ again

6. Select ’Use the following DNS server addresses’ and enter following: 
 
 
>176.103.130.130 

>176.103.130.131 

for ’Default’ servers; 

>176.103.130.132 

>176.103.130.134 

for ’Family protection’ servers.

<a id="xp"></a>
#### Windows XP

1. Open Control Panel through ’Start’ menu -> ’Settings’

2. Click on ’Network Connections’ in the Control Panel menu

3. Double-clik on your active connection from the Network Connections window

4. Click Properties button

5. Select Internet Protocol (TCP/IP) and click Properties again

6. Select ’Use the following DNS server addresses’ and enter following: 
 
>176.103.130.130 

>176.103.130.131 

for ’Default’ servers; 

>176.103.130.132 

>176.103.130.134 

for ’Family protection’ servers.

<a id="macos"></a>

#### macOS

1. Click on Apple icon and go to ’System Preferences’

2. Click on ’Network’

3. Select the first connection in your list and click ’Advanced’

4. Select the ’DNS’ tab and add following addresses to the list of DNS servers: 
 
>176.103.130.130 

>176.103.130.131 

for ’Default’ servers; 

>176.103.130.132 

>176.103.130.134 

for ’Family protection’ servers.

<a id="android"></a>

#### Android

> #### Setting up AdGuard DNS for WiFI connections:

1. From the Android Menu home screen, tap «Settings».
2. Tap Wi-Fi on the menu. The screen listing all of the available networks will be shown.
3. Long press the network you’re connected to, and tap «Modify Network».
4. On some devices, you may need to check the box for «Advanced» to see further settings. To adjust your Android DNS settings, you will need to switch the IP settings from «DHCP» to «Static».
5. Change set «DNS 1» and «DNS 2» values to following: 
 
>176.103.130.130 

>176.103.130.131 

for «Default» servers; 

>176.103.130.132 

>176.103.130.134 

for «Family protection» servers.

>#### Setting up Adguard DNS for mobile connections (Android 9+)

On Android version 9+, you can configure AdGuard DNS as follows:

1. Open Android «Settings».
2. «Network & Internet» > «Advanced».
3. Select the «Private DNS» section.
4. Type this address to «Private DNS provider hostname»:
> dns.adguard.com

<a id="iOS"></a>

#### iOS

1. From the home screen, tap ’Settings’

2. Choose ’Wi-Fi’ in the left menu (it is impossible to configure DNS for mobile networks)

4. Tap on the name of the currently active network
In the ’DNS’ field enter our DNS addresses: 
 
>176.103.130.130 

>176.103.130.131 

for ’Default’ servers; 

>176.103.130.132 

>176.103.130.134 

for ’Family protection’ servers.

<a id="router"></a>

####  Routers

1. Open the preferences for your router 
Usually you can access it from your browser via a URL (like **http://192.168.0.1/** or **http://192.168.1.1/**). You may be asked to enter the password. If you don’t remember it, you can often reset the password by pressing a button on the router itself. Some routers have a specific application which should be already installed on your computer in that case.

2. Find the DNS settings 
Look for the ’DNS’ letters next to a field which allows two or three sets of numbers, each broken into four groups of one to three numbers.

3.Enter our DNS server addresses there 
 
>176.103.130.130 

>176.103.130.131 

for ’Default’ servers; 

>176.103.130.132 

>176.103.130.134 

for ’Family protection’ servers.

<a id="ubuntu"></a>

#### Ubuntu

1. Click on ‘Network Icon’ (top-right panel by default) and click on ‘Edit Connections’ to open Network Connections Manager.

2. Find your connection name, highlight it and click on ‘Edit’

3. Now click on ‘IPv4 Settings’ tab and change the ‘Method’ to Automatic (DHCP) addresses only.

4. Type in IP addresses of our DNS servers, separated by commas to the ‘DNS Servers’ field: 
 
>176.103.130.130 

>176.103.130.131 

for ’Default’ servers; 

>176.103.130.132 

>176.103.130.134 

for ’Family protection’ servers.

#### DNSCrypt for AdGuard DNS

* [Setup guide](https://dnscrypt.info/implementations/) 


It is possible that during the DNSCrypt configuring you will need information for **dnscrypt-resolvers.csv** file. 
You can find it [here](https://download.dnscrypt.info/dnscrypt-resolvers/v2/).

