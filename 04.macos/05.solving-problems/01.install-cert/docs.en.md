---
title: 'Manual certificate installation'
taxonomy:
    category:
        - docs
visible: true
---

AdGuard for Mac needs to install the root certificate into certificate storage to be able to [filter HTTPS traffic](https://kb.adguard.com/en/general/https-filtering). This action is performed automatically in most cases as you run the app for the first time, but users of Gecko-based browsers (Firefox, Waterfox etc.) who have a master password set up for their browser may be required to take additional steps (because these browsers use their own certificate storage instead of the system one). They need to either enter the master password when prompted (to grant AdGuard access to the certificate storage) or manually install the certificate.

To manually install the certificate into Firefox-like browser:

  1. Open "Preferences"
  
  2. Go to "Privacy & Security" — "Certificates" 
  
  3. Click on "View Certificates"
  
  4. Navigate to "Authorities" tab and click on "Import..." button
  
  5. Select file `/Library/Application Support/com.adguard.Adguard/NfApiConfiguration/SSL/Adguard Perosnal CA.cer`
  
Exact actions required for different Gecko-based browsers may vary, but the general sequence and the path to `AdGuard Personal CA.cer` file will be the same.
