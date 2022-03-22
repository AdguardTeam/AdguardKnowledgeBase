---
title: "Tracking filter rules statistics"
taxonomy:
    category:
        - docs
published: true
visible: true
---

>NOTE: The *“Send statistics for ad filters usage”* option is disabled by default. Nothing will be sent unless user manually enables it to help us improve our blocking filters.

### Why do we need ad filters?
Let's start by defining what ad filters are. Thanks to these filters, AdGuard removes ads from websites.
They are manually compiled based on your complaints about ads on websites. Ad filters are an essential element of AdGuard - their quality determines the overall quality of AdGuard ad blocking.

However, there is a downside. Over the years, more and more ad filters have been appearing. And the more ad filters are there, the more memory AdGuard consumes, thus slowing down the rendering of web pages.
At the same time, some of the filters start to expire, gradually becoming a dead weight that has no use, only consumes memory, and slows down the program.

### Why do we need statistics?

We want to solve the problem of outdated filtering rules once and for all. But we need your help to do so. By gathering statistics on used filtering rules, we detect and remove the rules that are no longer used. As a result, it will help all those who use AdGuard.

If your computer is powerful enough, it won’t really affect you. But the difference will be very noticeable for users of low-power netbooks or tablets.

### What kind of statistics will be sent?

If you enable the «Send statistics for ad filters usage» option, the following information is sent periodically:
* Extension version
* Browser type (Chrome/Firefox/Opera/Yandex.Browser/Safari).
* List of enabled ad filters.
* The list that consists of the following elements:
  * *The domain name of the website* 
  * *The number of recent page views* 
  * *The list of filtering rules and Filter ID which were activated on this website* 
  * *The domain name of blocked requests is sent for URL rules* 
The list is created based on the website's visit statistics since the last time statistical data was sent.

The collected statistics will be sent periodically to our server for analysis and filter optimization.

It's important to note that all the statistics we get are averaged and anonymized. We don't use these statistics for any purpose other than optimizing the filters, and we do not sell this data to third parties. You can read about our Privacy Policy [here](https://adguard.com/en/privacy.html).

### What does tracking filter rules statistics fraught with?

For the vast majority of users, the change in computer speed will not be really noticeable. However, netbook and tablet users may notice a slight slowdown.

Periodically, we will send the gathered statistics to the server. The size of the transmitted data is not very large and is comparable to the size of an average web page.
