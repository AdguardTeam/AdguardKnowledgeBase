---
title: 'How to create your own ad filters'
taxonomy:
    category:
        - docs
visible: false
---

## This is a cheat sheet to easily manage blocking rules and elements to hide. For more detailed information you can find in this article (referrer link, full article).

1. Chapter one, blocking by address parts


 <img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/02.general/17.cheat-sheet/images/Address%20parts.png" width="750">

This rule blocks:

 http://example.com/banner/ads/img

 http://example.com/banner/ads/bar/img?param

 http://example.com/banner/img/ad1 



This rule doesn't block:

http://example.com/banner/img

http://example.com/banner/ads/imgraph

http://example.com/banner/ads/img.gif

----------------- ----------------- ----------------- ----------------- 



2. Chapter two, blocking by domain name
<img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/02.general/17.cheat-sheet/images/Blocking%20by%20domain%20name.PNG" width="750">

This rule blocks:

http://ads.example.com/foo.gif

http://server1.ads.example.com/foo.gif

https://ads.example.com:8000/

This rule doesn't block:
										
http://ads.example.com.ua/foo.gif

http://example.com/redirect/http://ads.example.com/	


----------------- ----------------- ----------------- ----------------- 

													
3. Chapter three, blocking exact address

<img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/02.general/17.cheat-sheet/images/Blocking%20exact%20address.PNG" width="750">

! http://example.com/ — Verbatim text. This text must be present in the address to be blocked.

| — A pointer to the beginning or the end of address.

This rule blocks:

http://example.com/

This rule doesn't block:

http://example.com/banner/img

http://example.com/banner/ads/img.gif
