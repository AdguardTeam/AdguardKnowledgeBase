---
title: 'HTTPS 필터링: 알려진 문제'
published: true
taxonomy:
    category:
        - docs
visible: true
---

> 이 기사를 읽으려면 암호화, TLS 프로토콜 및 HTTPS에 대한 기본 지식이 필요할 수 있습니다.
아래의 그림에서 HTTPS 필터링 작동 방식을 확인할 수 있습니다.

![What is HTTPS filtering](https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https_filtering_ko.png)

AdGuard는 브라우저에서 사용하는 TLS 연결 속성을 복사합니다.

* AdGuard는 동일한 TLS 버전을 사용합니다.
* AdGuard는 브라우저와 동일한 암호화 방법(ciphers)을 사용합니다.

최신의 안전한 브라우저를 사용하는 경우, 알려진 TLS 문제에 대처하고 안전하지 않은 암호를 사용하지 않습니다. 인증서의 유효성이 의심되는 경우, AdGuard는 도메인에 대한 모든 연결의 필터링을 중단하고 브라우저가 모든 결정을 담당하도록 합니다.

### 알려진 문제
AdGuard의 HTTPS 필터링에는 단점이 있지만, 이미 이에 대한 업데이트 계획을 가지고 있습니다. 
알려진 문제는 다음과 같습니다.

#### 실제 인증서 확인
HTTPS 필터링을 사용하는 경우, 웹 사이트에서 사용하는 실제 인증서가 숨겨집니다. 실제 인증서를 확인할 수 없으며 AdGuard에서 발급한 인증서만 볼 수 있습니다.
이 문제는 [브라우저 어시스턴트](https://adguard.com/ko/adguard-assistant/overview.html#chrome)에서 해결되었습니다. 어시스턴트를 사용하면 브라우저에서 바로 필터링을 관리하고 모든 웹 사이트의 원본 인증서를 확인할 수 있습니다.

#### 인증서 투명성(Certificate Transparency)
TODO: synchronize with the English and Russian version.

### 의견이나 제안이 있나요?
의견, 제안 또는 질문이 있으시면 devteam@adguard.com으로 문의해 주십시오.
