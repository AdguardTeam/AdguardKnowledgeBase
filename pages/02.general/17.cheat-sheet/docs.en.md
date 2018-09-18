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


## Basic exception rules

Example 1: Exception for particular requests

@@||ads.example.com/notbanner^$~script

Rule parts

@@ — Exception marker. Rules starting like this are exceptions, they will override blocking rules;

|| — Matching the beginning of an address. http://, https://, ws://, wss:// at once;

ads.example.com/notbanner — Verbatim text. This text must be present in the address to be blocked;

^ — Separator. The address must either end here or a separator character like ? or / has to follow;

$ — option separator. This character indicates that the following text defines filter option;

~script — Restriction by content type. This type option prevents the exception from being applied to scripts.

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



## Options in blocking rules

<img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/02.general/17.cheat-sheet/images/Options%20in%20blocking%20rules.png" width="750">

||ads.example.com^$script,image,domain=example.com|~foo.example.info
Rule parts

|| — Matching the beginning of an address. http://, https://, ws://, wss:// at once;

ads.example.com — Verbatim text. This text must be present in the address to be blocked;

^ — Separator. The address must either end here or a separator character like ? or / has to follow;

$ — option separator. This character indicates that the following text defines filter option;

script, image — Restriction by content type. Type options define request types to be blocked.

domain — Domain option. Limits the rule application area to a list of domains (and their subdomains).


----------------- ----------------- ----------------- ----------------- 

## Comments

For additional explanation you should use this "!" symbol at the beginning of the rule that indicates a comment (!This is a comment)

<img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/02.general/17.cheat-sheet/images/Comment.PNG" width="700">
