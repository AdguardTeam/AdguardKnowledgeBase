---
title: 'Report website'
taxonomy:
    category:
        - docs
visible: true
---

## Introduction


* [Windows](#Windows)
* [Android](#Android)
* [MAC](#MAC)
* [iOS](#iOS)
* [Filling in the form](#form)
* [Diagnosis of a issue](#solo)

Form

When using ad blockers, you may face incorrect work of certain websites or broken page elements. These problems might arise due to a variety of factors:

* Incorrect user rules;
* Modified algorithms of adding ads;
* Added filters/extensions from third-party developers;
* The authors of one of the filters made a mistake when creating the rule.
 
Advertisement creators don’t stay put, they’re constantly changing ways to implement ads. A website finds out that an ad was removed and inserts it back, bypassing protection. As a general rule, developers of such sites are testing new algorithms all the time on certain user groups, meanwhile all the rest receive ads where algorithms of the earlier versions were used (to which we’ve provided a solution). This makes it very difficult to find the reason, as this advertising is not displayed by the developers. You can help us by filling out an application using instructions depending on your operating system.

## Report a website

To report a re-insertion of an ad or incorrect displaying of a website, you need to:

> ### **Note**: When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically(except for the screenshots, you'll have to make and attach them yourself). If you're using a [direct link](agrd.io/report), you’ll need to enter data manually.


<a id="Windows"></a>

### **Windows**

To submit a complaint, choose a method you like:

1) Via [direct link](agrd.io/report) (All settings have to be entered manually);
2) Using [AdGuard Assistant](https://uploads.adguard.com/Chinaskifgjv7.png) (By default shown in the right lower corner of a browser):

* Нit **Report the website**, as shown in the screenshot:

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/win1en.png" width="350"/>

* Fill in the form for reporting a complaint;
* After you've filled in the form, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

<a id="Android"></a>

### **Android**

1) Via [direct link](agrd.io/report) (All settings have to be entered manually).
2) Directly form the AdGuard application:

* Open AdGuard settings;
* **Support**;
* **Send Feedback**.
* Missed ad or tracker/Incorrect blocking.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/android1en.png" width="350"/>

5. After you've filled in the form, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

<a id="MAC"></a>

### **MAC**

The complaint can be sent in two ways:

1) Via [direct link](agrd.io/report) (All settings have to be entered manually);
2) Using [AdGuard Assistant](https://uploads.adguard.com/Chinaskifgjv7.png) (By default shown in the right lower corner of a browser):

* Нit **Report the website**, as shown in the screenshot:

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/mac1en.png" width="350"/>

* Then you'll need to fill in the form for reporting a complaint;
* After you've filled in the form, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

<a id="iOS"></a>

### **iOS**

1) Open AdGuard settings;
2) Send feedback;
3) Report incorrect blocking;

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/ios1en.png" width="350"/>

4) Fill in the form for reporting a complaint;
5) After you've filled in the form, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress owards the solution of your problem.

<a id="form"></a>

### **Filling in the form**

> ### **Note**: When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically(except for the screenshots, you'll have to make and attach them yourself). If you're using a [direct link](agrd.io/report), you’ll need to enter data manually.

1. Filling in the form starts with detailing the type and version of a product;

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma1en.png" width="500"/>

2. Specify the type of problem and additional information on using third-party software (antivirus, VPN);

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma2en.png" width="500"/>

3. Enter page or app address and the browser where you've encountered a problem;

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma3en.png" width="500"/>

4. Application configuration must be specified:
* Filters you use;
* Stealth mode settings, if this function is enabled.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma4en.png" width="500"/>

5. [Provide a screenshot](https://kb.adguard.com/en/miscellaneous/taking-screenshots) that captures the essence of a problem;
* **Important**: Hide your personal information (email, phone number, etc.) because screenshots will become publicly available.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma5en.png" width="500"/>

6. Provide additional information that will help filter developers understand the situation
Also enter your account on **GitHub**, if available;

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma6en.png" width="500"/>

7. Check each step before sending the form;

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma7en.png" width="500"/>

8. You'll be provided with a link to track progress on your task.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Techsupp/forma8en.png" width="500"/>

## Diagnosis of a issue

<a id="solo"></a>

This option is suitable for those who aren’t afraid of difficulties and don’t mind trying to find the problem on their own. This does not require any special skills or in-depth knowledge of HTML and CSS.

For example, you are faced with a situation that your favorite website won’t open, authorization has broken, or some page elements are displayed incorrectly. The cause may be using a specific filter/extension/Stealth Mode setting. To diagnose these problems, you need to do the following:

### **Filters**

1. Disable **Ad Blocker**;
2. If it solved the problem, re-enable the module and disable filters one by one. This is done to identify filters that "break" the page;
3. If you have managed to find out which filter "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is advisable to return the filters to their original position.
3. If turning off all the filters hasn't produced any results, rule **@@||example.com^$document,extension** should be applied(Where **example.com** is an example site name, you need to substitute your own option);
4. In case of failure (issue not solved), turn to section **Stealth Mode**.


### **Stealth Mode**. 

1. Disable **Stealth Mode**;
2. If this solves the problem, turn the module on and turn off the **Stealth Mode** options one by one. This is done to detect which filters are "breaking" the page;
3 If you are able to detect which setting "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is advisable to return the settings to their original position;
3. In case of failure(issue not solved), turn to section **Extensions**.


### **Extensions**

1. Disable **Extensions**;
2. If this solves the problem, turn on the module and turn off the settings **Extensions** one by one. This is done to find out which setting "breaks" the page;
3. If you are able to detect which setting "breaks" a page, you should inform the developers when filling out the form (see above). In this case it is desirable to return the settings to their original position;
