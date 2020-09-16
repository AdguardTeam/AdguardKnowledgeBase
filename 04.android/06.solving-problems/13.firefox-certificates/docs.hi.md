---
title: 'Firefox ब्राउज़र में मैनुअली सिक्योरिटी सर्टिफिकेट बको इंस्टॉल करना'
published: true
taxonomy:
    category:
        - docs
---


[HTTPS फ़िल्टरिंग](https://kb.adguard.com/en/general/https-filtering) को काम करने के लिए अलाग अलग Firefox वरजेंस में अलग तरीकों की जरूरत पड़ती है। अगर स्टेबल Firefox वर्जन आपको डिरेक्ल्टी ब्राउज़र में ही सर्टिफिकेट इनस्टॉल करने देता है, फिर भी दूसरे वर्जन्स में फंक्शनलिटी लिमिटेड हो सकती है (Firefox Nightly, Beta, Developer Edition, और दूसरे ब्राउज़र जो Firefox पर बेस्ड हैं)। निचे हम आपको दो तरीके बताएँगे HTTPS फ़िल्टरिंग चालु करने  अलग Firefox वर्जन्स में। 




### डिवाइस पर इनस्टॉल हुए सर्टिफिकेट्स के एक्सेस को चालु करना 

#### यूजर स्टोर में के  स्टोर में के सर्टिफिकेट  


Firefox को (और उस पर बेस्ड ब्रोसेर्स को) यूजर सर्टिफिकेट्स को ट्रस्ट करने के किये, ब्राउज़र में ही मैजूद एक छिपे हुए ऑप्शन को टॉगल करना होगा। 

1. **Firefox** रन करें ;
2. **about:config** पेज पर जाएँ ;
3. सर्च की जगह में **root** टाइप करें ;
4. “security.enterprise_roots.enabled” को ढूंढें और उसे टॉगल करें, उसे **true** करने के लिए। 

#### सिस्टम स्टोर में के सर्टिफिकेट

1. [इनस्टॉल और कॉन्फ़िगर](https://www.xda-developers.com/install-adb-windows-macos-linux/) करें adb को; 
> Windows प्लेटफार्म पर, **Samsung** ओनर्स को [इस यूटिलिटी](https://developer.samsung.com/mobile/android-usb-driver.html) को इनस्टॉल करना होगा। 
2. **डेवलपर मोड** को एक्टिवटे करें और **USB डिबगिंग** को चालू करें:
- अपने फ़ोन पर **सेटिंग्स** एप्लीकेशन को खोलें;
- **सिस्टम** सेक्शन में जाएँ (सेटिंग्स मेनू का आखरी आइटम)। इस सेक्शंन सब-आइटम **अबाउट-फ़ोन** को ढूंढें;
- **बिल्ड नंबर** पर 7 बार क्लिक करें। और उसके बाद आपको एक नोटिफ़िकेशन मिलेगी जो कहती है **अब आप एक डेवेलपर हैं** (अगर जरूरी हो तोह आपके डिवाइस का अनलॉक कोड डालें);
- खोलें  **सिस्टम सेटिंग्स** > **डेवलपर ऑप्शंस** > निचे स्क्रोल करें और चालू करें **USB डिबगिंग** को > **USB डिबगिंग अल्लोव** है या नही कन्फर्म करें चेतावनी पूरी तरीके से पढ़ने के बाद।
3. [Firefox](https://www.mozilla.org/en-US/firefox/releases/) ब्राउज़र (release version) को इनस्टॉल करें;
4. **AdGuard सेटिंग्स** को खोलें > **नेटवर्क** > **HTTPS फ़िल्टरिंग** > **Firefox** में सर्टिफ़िकेट डालें > **स्टेबल** ऑप्शन को चुन कर;
5. `data/data/org.mozilla.firefox/files/mozilla` फोल्डर को खोलें `adb shell su` और `cd data/data/...` से, ब्राउज करें इस नाम के फोल्डर को `xxxxxxx.default` और उसे याद कर लें;
6. जो फोल्डर हम चाहतें हैं वहं दो फाइल्स:
- `cert9.db`
- `key4.db`
7. इन फाइल्स को हमें ब्राउज़र के उस फोल्डर में डालना होगा जहाँ पर सिक्योरिटी सर्टिफिकेट को किया गया थाा। 
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.
8. पूरा कमांड कुछ इस तरह दिखेगा:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.


अगर आपको **परमिशन डिनाइड** नोटिफिकेशन मिलती है सिस्टम से तोह, आपको इन फाइल्स को आपको पहले परमिशन-फ्री डायरेक्टरी में मूव करना होगा:
- `adb shell su`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download `
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download `
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`. 
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
अगर `adb shell su` काम नही करता है तोह, आपको पहले `adb shell` टॉय करना होगा, उसके बाद `su` को। 
