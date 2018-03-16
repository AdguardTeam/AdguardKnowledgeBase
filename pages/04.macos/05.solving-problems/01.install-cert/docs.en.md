---
title: 'Manual certificate installation'
taxonomy:
    category:
        - docs
visible: true
---

AdGuard for Mac needs to install the root certificate into browser's certificate storage to be able to filter https traffic. This action is performed automatically in most cases, but users of Gecko-based browsers (Firefox, Waterfox etc.) who have a master password set up for their browser may encounter a situation where they are prompted for manual certificate installation. 

To manually install the certificate into Firefox-like browser:

  1. Open "Preferences"
  
  2. Go to "Privacy & Security" — "Certificates" 
  
  3. Click on "View Certificates"
  
  4. Navigate to "Authorities" tab and click on "Import..." button
  
  5. Select file `/Library/Application Support/com.adguard.Adguard/NfApiConfiguration/SSL/Adguard Perosnal CA.cer`
  
Exact actions required for different Gecko-based browsers may vary, but the general sequence and the path to `AdGuard Personal CA.cer` file will be the same.
