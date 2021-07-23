---
title: 'iOS용 AdGuard로 전체 시스템 차단을 설정하는 방법'
taxonomy:
    category:
        - docs
---

   * [전체 시스템 차단](#system-wide)
   * [DNS 필터/호스트 파일을 추가하는 방법](#filters)

<a name="system-wide"></a>
전체 시스템 차단은 Safari를 넘어 다른 앱과 브라우저에서 추적기와 광고를 차단하는 것입니다. iOS 기기에서 전체 시스템 차단을 설정하는 방법을 살펴볼까요?

iOS 기기의 전체 시스템에서 추적기와 광고를 차단하려면 [DNS 필터링](https://kb.adguard.com/ko/general/dns-filtering)을 사용해야 합니다. 사용하기 위해서는 이 단계들을 따라서 DNS 보호를 키세요 (iOS용 AdGuard 설정 —> DNS 보호 —> 켜기).

<img src="https://cdn.adguard.com/public/Adguard/Blog/ios_dns_protection_ko.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

전체 시스템에서 광고와 추적기를 차단하려면 두 가지 방법이 있습니다.

1. AdGuard DNS 서버를 활성화하세요 (**설정** —> **DNS 보호** —> **DNS 서버** —> **AdGuard DNS**).

2. AdGuard DNS 필터와 같은 광고와 추적 도메인을 차단하는 DNS 필터/호스트를 추가하세요. 

두 번째 방법은 더 어렵지만 여러 장점이 있습니다.
* 특정한 서버에 제한되지 않고 원하시는 모든 DNS 서버를 사용할 수 있습니다.



* DNS 서버와 달리 DNS 필터/호스트는 여러개를  동시에 추가할 수 있습니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_ko.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
<p align="center"><i>DNS 필터링 작동 원리</i></p>

<a name="filters"></a>
### DNS 필터/호스트 파일을 추가하는 방법

어느 DNS 필터나 호스트 파일을 추가하는 방법은 모두 다 동일합니다. 예시로 [AdGuard DNS 필터](https://github.com/AdguardTeam/AdguardSDNSFilter)를 추가하는 방법을 살펴보겠습니다. AdGuard DNS 필터는 다른 여러 필터(AdGuard 베이스 필터, 소셜미디어 필터, 추적 보호 필터, 모바일 광고 필터, EasyList, EasyPrivacy 등)로 구성되며 특히 DNS 수준 광고 차단에 더 적합하도록 단순화되었습니다.


1. *.iOS용 AdGuard 설정** —> **일반**

2. **고급 모드**를 활성화한 후 **고급 설정** 열기

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_ko.jpg" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Blog/ios_advanced_settings_ko.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
</div>

> 참고: **고급 설정** 탭에서 다른 설정, 특히 **로우 레벨 설정**은 사용하지 않는 것이 좋습니다. 어떤 설정으로 인해 인터넷 연결이 떨어질 수 있거나 개인 정보 및 보안이 손상될 수 있습니다. 

3. 해당 링크 복사: `https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt`

4. **AdGuard for iOS 설정** —> **DNS 보호** —> **DNS 필터링**(**고급 모드**가 활성화된 동안 사용 가능) —> **DNS 필터**

5. **필터 추가** 버튼을 클릭한 후 URL 필터의 필드에 링크를 붙여넣고 '다음' 클릭

<img src="https://cdn.adguard.com/public/Adguard/Blog/ios_adding_a_filter.PNG" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

> 3 단계에서 다른 URL을 붙여넣어 동일한 방식으로 다른 DNS 필터를 추가하세요. [여기](https://filterlists.com)에서 다양한 필터와 링크를 확인할 수 있습니다.
