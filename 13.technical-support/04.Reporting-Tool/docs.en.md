---
title: 'How to report a website'
taxonomy:
    category:
        - docs
visible: true
---

## Introduction

* [Browser extension](#extension)
* [Windows](#windows)
* [Android](#android)
* [Mac](#mac)
* [iOS](#ios)
* [Filling in the form](#form)
* [Diagnosis of a issue](#solo)

When using ad blockers, you may face incorrect work of certain websites or broken page elements. These problems might arise due to a variety of factors:

* Incorrect user rules;
* Modified algorithms of adding ads;
* Added filters/extensions from third-party developers;
* The authors of one of the filters made a mistake when creating the rule.
* Advertising reinsertion. Find more about this method in our [blog](https://adguard.com/ru/blog/ad-reinsertion.html). 
 
You can help us by filling in an application form with examples of ads you faced with. To do it, please, use instructions for your OS.

## Report a website

> **Note**: When you send a complaint via the app or via AdGuard Browser Assistant, all information is pre-filled automatically. Except for the screenshots, you'll have to make and attach them yourself. If you're using a [direct link](https://reports.adguard.com/new_issue.html), you’ll need to enter data manually.

To report a reinsertion of an ad or incorrect displaying of a website, you need to:

<a id="extension"></a>

### **Browser extension**

* Open the browser extension settings by clicking on the corresponding icon;
* Click on **Submit a complaint about this website**:

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/extension1en.png" width="350"/>

* After you've filled in the form, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

<a id="windows"></a>

### **Windows**

* Open [AdGuard Browser Assistant](https://kb.adguard.com/en/windows/features/browser-assistant) and hit **Report an issue**:

<img src="https://cdn.adguard.com/public/Adguard/kb/Windows/browser-assistant.png" width="500"/>

* Fill in the form for reporting a complaint;
* After you've done it, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

<a id="android"></a>

### **Android**

* Open AdGuard settings;
* **Support**;
* **Send Feedback**.
* **Missed ad or tracker**/**Incorrect blocking**:

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/android1en.png" width="350"/>

* After you've filled in the form, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

<a id="mac"></a>

### **Mac**

* Open [AdGuard Browser Assistant](https://kb.adguard.com/en/macos/overview/browser-assistant) and hit **Report an issue**:

<img src="https://cdn.adguard.com/public/Adguard/kb/MAC/browser-assistant.png" width="500"/>

* Fill in the form for reporting a complaint;
* After you've done it, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

<a id="ios"></a>

### **iOS**

* Open AdGuard settings;
* Send feedback;
* Report incorrect blocking:

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/ios1en.png" width="350"/>

* Fill in the form for reporting a complaint;
* After you've done it, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

<a id="form"></a>

### **Filling in the form**

> **Note**: When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically. Except for the screenshots, you'll have to make and attach them yourself. If you're using a [direct link](agrd.io/report), you’ll need to enter data manually.

1. Filling in the form starts with detailing the type and version of a product;

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma1en.png" width="500"/>

2. Specify the type of problem and additional information on using third-party software (antivirus, VPN);

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma2en.png" width="500"/>

3. Enter the address of the page where you have encountered the problem (or full download link in case of an app), and the browser where you've encountered a problem;

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma3en.png" width="500"/>

4. Application configuration must be specified:
* Filters you use;
* Stealth mode settings, if this function is enabled.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma4en.png" width="500"/>

5. [Provide a screenshot](https://kb.adguard.com/en/miscellaneous/taking-screenshots) that captures the essence of a problem;
* **Important**: Hide your personal information (email, phone number, etc.) because screenshots will become publicly available.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma5en.png" width="500"/>

6. Provide additional information that will help filter developers understand the situation;
Also enter your account on **GitHub**, if available (it's necessary for developers to be able to reach you in case they need some additional details);

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma6en.png" width="500"/>

7. Check each step before sending the form;

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma7en.png" width="500"/>

8. You'll be provided with a link to track progress on your task.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma8en.png" width="500"/>

## Diagnosis of an issue

<a id="solo"></a>

This option is suitable for those who aren’t afraid of difficulties and don’t mind trying to find the problem on their own. This does not require any special skills or in-depth knowledge of HTML and CSS.

For example, you are faced with a situation that your favorite website won’t open, authorization has broken, or some page elements are displayed incorrectly. The cause may be using a specific filter/extension/Stealth Mode setting. To diagnose these problems, you need to do the following:

### **Filters**

1. Disable **Ad Blocker**;
2. If it solved the problem, re-enable the module and disable filters one by one. This is done to identify filters that "break" the page;
3. If you have managed to find out which filter "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings.
4. If turning off all the filters hasn't produced any results, apply rule 
**@@||example.com^$document,extension**,
where **example.com** is an example site name that needs to be replaced by your own option;
5. In case of failure (issue not solved), turn to section **Stealth Mode**.

### **Stealth Mode**. 

1. Disable **Stealth Mode**;
2. If this solved the problem, turn the module on and turn off the **Stealth Mode** options one by one. This is done to detect which filters are "breaking" the page;
3. If you have managed to to detect which setting "breaks" a page, you should inform the developers when filling in the form (see above). In this case, it is desirable to return to the initial settings;
4. In case of failure (issue not solved), turn to section **Extensions**.

### **Extensions**

1. Disable **Extensions**;
2. If this solved the problem, turn on the module and turn off **Extensions** settings one by one. This is done to find out which setting "breaks" the page;
3. If you have managed to detect which setting "breaks" a page, inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;

### **Third-party blockers** 
Some browsers and antivirus programs (such as Yandex Browser, Kaspersky, etc.) have built-in ad blockers. They may affect and cause problems in the operation of sites.
If you use such programs, make sure that the problem is on the side of **AdGuard**: disable **AdGuard** filtering and try to repeat the problem. If it remains, it means that the problem is caused by another application or browser.
If the problem is caused by **AdGuard**, follow the steps described in the previous paragraphs.
