---
title: '"The connection is not trusted" error'
taxonomy:
    category:
        - docs
visible: true
---

![](https://cdn.adguard.com/public/Adguard/kb/en/cert_en.png)

This problem is more common for the Firefox-based browsers and Opera 12.

<a name="basic"></a>
The easiest way to solve it is to:

1. Go to Network Settings.

2. Scroll to the middle to find 'Reinstall Certificate' button.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Windows7.1/certEn.png" />

3. Click on it and wait until the certificate is automatically reinstalled. Note that browsers all will be closed.

4. Open your browser. The problem should be solved.

If the problem persists, you should use one of specified manuals depending on your browser:
 

* [Firefox](#firefox)
* [Opera](#opera)

<!---
* [Comodo IceDragon](#comodo)
* [K-Meleon](#k-meleon)
--->

<a name="firefox"></a>
#### Firefox

![](ffox_en_1.png)

If [basic manual](#basic) didn't help you, there are two ways to solve the problem.

**First way**

Manual certificate import.

In case you want to keep filtering HTTPS protocol, we suggest you this instruction on manual AdGuard certificate importing.

To do so:
1. Open Firefox browser and proceed to Options menu

![](ffox_en_2.png)

2. Open 'Advanced -> Certificates' tab, and find 'View Certificates' in the window. Click on it.

![](ffox_en_3.png)


3. Choose 'Authorities' tab and click on "Import...".

![](ffox_en_4.png)

4. In the opened window type in ** %ProgramData%\Adguard\NetworkTemp\SSL\ ** and choose AdGuard Personal CA in the shown folder, then press 'Open'.

![](ffox_en_5.png)

5. Check the checkboxes as it is shown on the screenshot and click 'OK'.

![](ffox_cert_trust_en.png)

6. In 'Authorities' window choose 'AdGuard personal CA' and click on 'View...'.

![](ffox_en_7.png)


7. Make sure that the certificate is valid for the current date.

![](ffox_en_8.png)

**Second way**

Disabling HTTPS filtering

To do so:

Go to the Network settings.

Disable the HTTPS filtering as it’s done in this picture:

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Windows7.1/disableHTTPSEn.png" />

We do not recommend this way, as it will leave all your HTTPS traffic unfiltered. Only use it as a temporary measure and contact our [support team](/technical-support).

<a name="opera"></a>
#### Opera

![](opera_en_1.png)

If [basic manual](#basic) didn't help you, there are two ways to solve the problem.

**First way**

Manual certificate import.

In case you want to keep filtering HTTPS protocol, we suggest you this instruction on manual AdGuard certificate importing.

To do so:
1. Open Opera browser and proceed to Settings -> Preferences menu

![](opera_en_2.png)

2. Open 'Advanced -> Security' tab, and find 'Manage Certificates' in the window. Click on it.

![](opera_en_3.png)

3. Choose 'Authorities' tab and click on "Import".

![](opera_en_4.png)


4. In the opened window type in **%ProgramData%\Adguard\NetworkTemp\SSL\ ** and choose AdGuard **Personal CA** in the shown folder, then press 'Open'.

![](opera_en_5.png)


5. In the opened window click on 'View...'.

![](opera_en_6.png)

6. Check the checkboxes as it is shown on the screenshot and click 'OK'.

![](opera_en_7.png)

7. In the opened window confirm that you trust the issuer.

![](opera_en_8.png)

8. In 'Authorities' window choose 'AdGuard personal CA' and click on 'View...'.

![](opera_en_9.png)

9. Make sure that the certificate is valid for the current date.

![](opera_en_10.png)

**Second way**

Disabling HTTPS filtering.

To do so:

Go to the Network settings.

Disable the HTTPS filtering as it’s done in this picture:

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Windows7.1/disableHTTPSEn.png" />

We do not recommend this way, as it will leave all your HTTPS traffic unfiltered. Only use it as a temporary measure and contact our [support team](/technical-support).

<!---
<a name="comodo"></a>
#### Comodo IceDragon

**Adding a security certificate Comodo IceDragon browser.**

If you are using Comodo Icedargon browser, then after installation of AdGuard you are going to have a problem with visiting websites, protected by a security certificate (https).

To solve this problem you need to install the AdGuard root certificate or disable https filtering.

**Instructions for a Comodo IceDragon browser.**

If when using a Comodo IceDragon browser with enabled https filtering you see the message that shown below, you need to install the AdGuard root certificate or disable https filtering in the AdGuard network settings.

![](IceDragon_EN_1.png)

Go to Browser Settings, in the "Advanced" tab click on the "Certificates" and then on "View certificates".

![](IceDragon_EN_2.png)

In the opened window select “Authorities” tab and click on “Import…”.

![](IceDragon_EN_3.png)


In the appeared window, type in the address bar: ** %ProgramData%\Adguard\NetworkTemp\SSL** and press Enter.

![](IceDragon_EN_4.png)

Choose “AdGuard CA.rar” from the list anf click “Open”.

![](IceDragon_EN_5.png)

In the appeared window, you need to select the purposes for which you are importing the certificate. Select all of the proposed options by putting a “tick” next to them and then press the "OK" button.

![](IceDragon_EN_6.png)


Click “Ok” once again.

![](IceDragon_EN_7.png)

After adding the certificate, restart the browser.

![](IceDragon_EN_8.png)




<a name="k-meleon"></a>
#### K-Meleon

##### Adding a security certificate to K-Meleon browser

If you are using K-Meleon browser, then after installation of AdGuard you are going to have a problem with visiting websites, protected by a security certificate (https).

To solve this problem you need to install the AdGuard root certificate or disable https filtering.

##### Instructions for a K-Meleon browser

If a browser shows you the following message, when you visit the website protected by a certificate, then you need to install the root certificate.

![](K-Meleon_1_EN.png)

To install the root certificate, follow the instructions below. Go to the “Tools” tab, then "View details", then click on "View certificates".

![](K-Meleon_2_EN.png)

In the opened window, select the tab "Authorities" and click "Import".

![](K-Meleon_3_EN.png)

In the appeared window, type in the address bar: % ProgramData% \ AdGuard \ NetworkTemp \ SSL and press Enter.

![](K-Meleon_4_EN.png)

Choose “AdGuard CA.rar” from the list and click “Open”.

![](K-Meleon_5_EN.png)

In the opened window, tick all the boxes and press "OK".

![](K-Meleon_6_EN.png)

Click “OK” once again.

![](K-Meleon_7_EN.png)

After adding the certificate, restart the browser.

![](K-Meleon_8_EN.png)

--->
