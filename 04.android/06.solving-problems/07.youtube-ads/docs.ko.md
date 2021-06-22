---
title: 'YouTube/ KakaoTalk/Facebook 광고 차단하는 방법'
taxonomy:
    category:
        - docs
visible: true
---

AdGuard는 Windows, Mac, iOS, Android와 같은 다양한 플랫폼에서 사용이 가능합니다. 이번에는 Android 기기에서 KakaoTalk, YouTube와 Facebook 광고를 차단하는 방법을 살펴보겠습니다. 기술적인 제한 때문에 Android 기기에서 해당 앱의 광고를 차단하는 방법은 다른 플랫폼과 다릅니다.

## YouTube 광고 차단하는 방법
Android의 기술적인 제한 때문에 광고를 차단하는 방법은 복잡할 수 있습니다. AdGuard를 사용하여 YouTube 광고 차단하는 방법은 2 가지가 있습니다.

1. **브라우저에서 YouTube 시청**

브라우저에서 YouTube를 열면 AdGuard가 완벽하게 모든 광고를 차단합니다.

2. **YouTube 앱에서 시청**

YouTube 앱에서 광고를 차단하기 위해 특별한 방법을 찾았습니다.
- ‘공유’ 버튼 클릭
- ‘AdGuard’ 선택
- 광고 없이 동영상 보기

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/share.gif" style="max-width: 700px; margin-bottom: 0px;" /><p align="center">


## KakaoTalk 광고 차단하는 방법

KakaoTalk 광고 차단하려면 다음과 같은 규칙을 사용해 보세요. 

- ||tg.kakao.com$app=com.kakao.talk,important

- ||more-api.kakao.com$app=com.kakao.talk

- ||talkchannel-api.kakao.com/api/home/v1/slots.json$app=com.kakao.talk

(설정-> 콘텐츠 차단-> 사용자 규칙-> + -> 규칙 입력 -> 저장 )

안타깝게도 KakaoTalk이 9.0.5 버전으로 업데이트되었을 경우, Android용 AdGuard는 채팅목록 상단에 광고 배너를 차단할 수 없습니다.

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/kakao.png" style="border: 0px solid #efefef; max-width: 350px; padding: 2px;">

## Facebook 광고 차단하는 방법
안타깝게도 기술적인 제한으로 인해 Android 기기에서 Facebook 광고를 브라우저에서만 차단합니다. Facebook를 광고 없이 사용하기 위해 브라우저를 여십시오.
