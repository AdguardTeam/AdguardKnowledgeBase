---
title: "DNS 필터링"
taxonomy:
    category:
        - docs
published: true
visible: true
---

* [DNS는 무엇인가요?](#what-is-dns)
* [DNS 필터링 작동 원리](#dns-filtering)
    * [DNS 서버](#dns-servers)
    * [로컬 DNS 차단 목록](#dns-blocklists)
* [DNS 필터링과 네트워크 필터링 비교](#compare)

<a id="what-is-dns"></a>
### DNS는 무엇인가요?

DNS(Domain name system)는 도메인 네임 시스템을 의미합니다. DNS는 웹 사이트의 이름을 브라우저가 읽을 수 있는 IP 주소로 변환합니다. 웹 사이트를 방문할 때마다 브라우저는 특수 서버(DNS 서버)에 요청을 보냅니다. 해당 서버는 요청된 도메인 이름을 확인하고 해당 IP 주소로 응답합니다. 개략적으로 다음과 같이 나타낼 수 있습니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/1_how_dns_filtering_works_ko.png" style="border: 1px solid #efefef; padding: 2px;" />

마찬가지로 브라우저뿐만 아니라 웹 요청을 보내는 모든 앱과 프로그램에서도 똑같이 작동합니다. 

<a id="dns-filtering"></a>
### DNS 필터링 작동 원리

DNS 필터링을 지원하는 AdGuard 앱을 사용하면 기기와 DNS 서버 사이의 버퍼 역할을 합니다. 브라우저나 앱이 보내려는 DNS 요청은 AdGuard에서 처리됩니다. ISP에서 제공하는 기본 DNS 서버를 사용하는 경우 DNS 트래픽이 암호화되지 않으므로 스누핑 및 하이재킹될 수 있습니다. AdGuard는 모든 DNS 요청이 유출되지 않도록 기기를 떠나기 전에 암호화합니다. 또한 AdGuard는 광고, 추적 및 성인 도메인에 대한 요청을 식별하고 DNS 서버로 전달하는 대신 ‘블랙홀’로 리디렉션할 수 있습니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_ko.png" style="border: 1px solid #efefef; padding: 2px;" />

DNS 필터링은 강력한 도구이며 [Windows용 AdGuard](https://adguard.com/ko/adguard-windows/overview.html), [Mac용 AdGuard](https://adguard.com/ko/adguard-mac/overview.html), [Android용 AdGuard](https://adguard.com/ko/adguard-android/overview.html) 및 [iOS용 AdGuard](https://adguard.com/ko/adguard-ios/overview.html)와 같은 주요 AdGuard 앱에서 지원됩니다.

DNS 필터링은 2 가지 기능을 수행할 수 있습니다. 첫 번째 기능은 DNS 트래픽을 암호화하고 DNS 서버로 다시 라우팅하는 것이고, 두 번째 기능은 DNS 차단 목록을 적용하여 일부 도메인을 로컬로 차단하는 것입니다.

<a id="dns-servers"></a>
#### DNS 서버

수많은 DNS 서버가 있으며 속성과 목적이 모두 특별합니다. 대부분의 DNS 서버는 단순히 요청된 도메인의 IP 주소를 반환하지만 일부는 광고, 추적, 성인 도메인 등을 차단하는 추가 기능이 있습니다. 요즘 주요 DNS 서버는 DNS-over-HTTPS, DNS-over-TLS와 같은 안정적인 암호화 프로토콜을 사용합니다. 또한 AdGuard [DNS 서비스](https://adguard-dns.com/ko/welcome.html)는 세계 최초로 새로운 [DNS-over-QUIC](https://adguard.com/ko/blog/dns-over-quic.html) 암호화 프로토콜을 제공합니다. AdGuard는 다양한 목표를 위한 서로 다른 서버가 있습니다. 아래 다이어그램은 AdGuard 차단 서버의 작동 방식을 보여줍니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/3_how_dns_filtering_works_ko.png" style="border: 1px solid #efefef; padding: 2px;" />

어떠한 DNS 공급자는 다르게 작동할 수 있으므로 DNS 서버를 선택하기 전에 해당 공급자에 대해 자세히 알아보는 것이 중요합니다. [이 기사](https://kb.adguard.com/en/general/dns-providers )에서 가장 널리 사용되는 DNS 공급자에 대한 정보를 확인할 수 있습니다. DNS 기능을 지원하는 AdGuard 앱에는 원하시는 DNS 서버 목록과 사용자 지정 DNS 서버를 선택할 수 있습니다.

<a id="dns-blocklists"></a>
#### 로컬 DNS 차단 목록

그러나 DNS 트래픽 필터링에 대해 DNS 서버에만 의존하면 문제가 생깁니다. 
선택한 서버가 도메인을 차단하면 액세스할 수 없습니다. AdGuard를 사용하면 DNS 트래픽을 필터링하기 위해 특정 DNS 서버를 설정할 필요가 없습니다. 모든 AdGuard 제품에서 호스트 파일이든 [고급 신텍스](https://kb.adguard.com/en/general/dns-filtering-syntax)를 사용하는 목록이든 상관 없이 DNS 차단 목록을 사용할 수 있습니다. DNS 요청이 활성 필터 목록의 규칙 중 하나와 일치하면 일반 차단과 유사하게 차단됩니다.

> iOS용 AdGuard에서 DNS 차단 기능을 사용하려면 설정에서 **고급 모드**를 활성화하십시오.

원하시는 만큼 사용자 지정 차단 목록을 추가할 수 있고, 예를 들어, AdGuard DNS 필터 사용이 가능합니다. [AdGuard DNS 필터](https://github.com/AdguardTeam/AdGuardSDNSFilter)는 AdGuard DNS 서버가 차단하는 걸 똑같이 차단합니다. 그리고 AdGuard DNS 필터를 사용하면 다른 DNS 서버를 사용할 수 있습니다. 또한 더 많은 필터를 추가하거나 사용자 지정 예외 규칙을 만들 수 있고, 반면에 ‘차단 DNS 서버 사용' 설정을 사용하면 해당 작업을 수행할 수 없습니다. 

>다른 DNS 차단 목록을 [여기](https://filterlists.com/)에서 확인할 수 있습니다.

<a id="compare"></a>
### DNS 필터링과 네트워크 필터링 비교

네트워크 필터링은 AdGuard 독립 실행형 앱이 네트워크 트래픽을 처리하는 '일반' 방식입니다. [이 기사](https://kb.adguard.com/en/general/how-ad-blocking-works )에서 광고 차단 작동 원리에 대해 확인할 수 있습니다.

AdGuard에는 일반 네트워크 필터링과 DNS 필터링이 동시에 사용될 수 있습니다. 그러나 이러한 필터링 방법의 주요 차이점은 이해하는 것이 중요합니다.DNS 필터링의 장점과 단점은 다음과 같습니다. 

**DNS 필터링의 장점**

1. 일부 플랫폼에서 시스템 전체 필터링을 수행하는 방법은 DNS 필터링 밖에 없습니다. 예를 들어, iOS 경우 Safari 브라우저에서만 일반적으로 광고가 차단되지만 브라우저 외에 광고를 차단하려면 DNS 필터링이 필요합니다.

2. [CNAME 클로킹 추적](https://adguard.com/ko/blog/cname-tracking.html)과 같은 일부 추적 형식은 DNS 필터링으로만 차단될 수 있습니다.

3. DNS 요청을 처리하는 단계는 광고 또는 추적기를 차단할 수 있는 방법 중 초기 단계에서 처리하는 방법이며, 이는 배터리 수명과 트래픽을 약간 절약하는 데 도움이 됩니다.

**DNS 필터링의 단점**

1. DNS 필터링은 차단된 광고 뒤에 남겨진 공백을 제거하거나 보정 규칙을 적용하지는 않습니다. 더 복잡한 광고는 DNS 수준에서 차단할 수 없습니다 (또는 오히려 차단할 수 있지만 다른 목적으로 사용되는 전체 도메인도 차단될 것입니다).

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/dns_diff.jpg" style="max-width: 550px; border: 1px solid #efefef; padding: 2px;" />

<p align="center"><i>DNS와 네트워크 필터링의 차이점</i></p>

2. DNS 요청의 출처는 알 수 없으므로 DNS 수준에서 서로 다른 앱을 구별할 수 없습니다. 이로 인해 통계 결과가 손상되면서 앱별 필터링 규칙을 만들기가 어렵습니다.

네트워크 필터링 대신 DNS 필터링을 사용하는 것보다 되도록이면 네트워크 필터링과 함께 DNS 필터링을 같이 사용하는 것이 좋습니다.
