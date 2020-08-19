---
title: '배터리 및 트래픽 소비 문제'
taxonomy:
    category:
        - docs
visible: true
---

Android 내장 통계에 따르면 AdGuard가 많은 트래픽 및 배터리를 소비한다는 것을 아실 수 있습니다.

이것은 동전의 양면과 같은 문제입니다. 필터링 적용 시 모든 모바일 트래픽이 AdGuard를 통과하므로 Android는 AdGuard가 이 트래픽을 소비한다고 판단합니다. 그러나 실제로는 그렇지 않습니다.

기기 통계에 표시된 배터리 및 트래픽 소비는 잘못 표시되는 것입니다. Android가 소비한 것으로 표시되는 트래픽은 실제 WiFi 및 모바일 트래픽을 사용하는 다른 앱에서 사용됩니다. 이 때문에 총 소비 트래픽 및 배터리 리소스에서 AdGuard의 점유율이 증가하고 반대로 다른 앱의 점유율이 감소한 형태로 보여집니다.

### 자체 배터리 사용 통계 화면

위로 인해 발생할 수 있는 오해를 해소하기 위해 AdGuard에 '배터리 사용량' 기능이 추가되었습니다. 메뉴에서 “배터리 사용량"을 탭하여 액세스할 수 있습니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Ko/Battery1.jpg?" width="300">

이 페이지는 지난 24시간 동안의 AdGuard 배터리 리소스 소모량을 보여주는 차트를 표시하며, 차트를 탭하여 더 자세한 시간별 데이터를 얻을 수 있습니다. 또한 데이터의 숫자 분석과 간단한 기술 설명도 있습니다.

### 예시

아래 스크린샷에서 밤과 다음날 아침의 배터리 리소스 소비 통계를 볼 수 있습니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Ko/Battery2.jpg?" width="300">
<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Ko/Battery3.jpg?" width="300">
<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Ko/Battery4.jpg?" width="300">

위 스크린샷을 참조해주세요.

1. 스마트폰 등 대부분의 경우에 AdGuard는 차트 상단에 위치합니다. (단, WiFi의 배터리 소모가 적기 때문에 4G 미사용 태블릿 등에서는 순위가 낮을 수 있습니다)

2. 스크린샷 # 2: AdGuard의 전송된 모바일 및 WiFi 패키지 수를 확인해주세요.

3. 스크린샷 # 3: 실제 트래픽을 사용하는 음악 서비스인 Yandex.Music의 통계입니다.  트래픽을 거의 사용하지 않은 것처럼 보이지만 실제로는 전체 트래픽의 70%를 소비합니다.

### AdGuard는 실제로 얼마나 많은 배터리를 소비합니까?

먼저 필요한 데이터에 대한 정보와 링크를 제공합니다.

1. Android는 모든 제조업체에서 제공하는 소위 ‘전력 프로필’을 기준으로 트래픽 소비를 유도합니다: <https://source.android.com/devices/tech/power/values.html>

2. 전원 프로필의 주 사항은 기기의 모든 구성 요소에 대한 배터리 소모량을 정의하는 mAh 값들입니다: <https://source.android.com/devices/tech/power/values.html>

예를 들어, 위 표에서:

_wifi.active=_ WiFi 데이터 교환으로 인한 mAh 단위의 추가 소비량은 31mA입니다.

_radio.active=_ 모바일 네트워크를 통한 데이터 교환으로 인한 100-300mA 추가 소비량 

_cpu.active=_ CPU 사용으로 인한 100-200mA 추가 소비량 (mAh).

3. AdGuard는 트래픽을 거의 소비하지 않으므로 배터리 리소스 소비를 평가하기 위해 '모바일/WiFi 패킷'을 제거하고 'CPU'에 집중합시다.

소비량 계산 공식 :

>"CPU TIME (ms)" X "cpu.active" / (60 * 60 * 1000) = "POWER USE mAh"

이 공식에 숫자를 대입합니다.
두 번째 스크린샷에서 총 CPU를 밀리초(506000)로 변환해 보겠습니다.

2GHz에 대한 _cpu.active_ 계수는 대략 225mA와 같습니다.


결과

>506000 * 225 / (60 * 60 * 1000) = 31,625mAh

### 결론

실제 소비는 Android 통계에 표시된 것보다 몇 배나 적습니다. 220mAh 대신 31-40mAh 정도입니다. 반면 브라우저의 소비량은 66mAh가 아니라 ~ 200mAh 입니다.

