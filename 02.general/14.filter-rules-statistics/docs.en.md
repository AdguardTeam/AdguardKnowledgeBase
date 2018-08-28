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
Let us begin with the definition of what ad filters are. Thanks to these filters, AdGuard removes ads from websites. 
They are compiled manually, based on your complaints about ads on any of the websites. This is one of the most important elements of AdGuard’s work – namely the quality of ad filters determines the quality of the whole AdGuard’s work.

But there is a reverse side. Over the years, there are more and more advertising filters. And the more ad filters appear, the more memory AdGuard consumes and the slower are the web pages rendered. 
At the same time, some of the filters begin to expire, gradually becoming a dead weight that does not have any use, only consumes memory and slows down the program.

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

Important to notice that all the statistics we get is being averaged and impersonalized. We don't use this statistics for any other goal other than optimizing the filters, and we do not sell this data to any third parties. You can read about our Privacy Policy [here](https://adguard.com/en/privacy.html).

### What does tracking filter rules statistics fraught with?
For the vast majority of users the change in speed of their computer will not be really noticeable. But if you use a netbook or a tablet, you may notice a slight slowdown.

Periodically, we will send the gathered statistics to the server. The size of data being sent is not very large and comparable with the size of an average web page.
