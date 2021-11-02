---
title: '한국에서 AdGuard와 함께 삼성 페이를 사용하는 방법'
taxonomy:
    category:
        - docs
visible: true
---

AdGuard가 켜진 상태에서 Samsung Pay를 사용할 수 없으면 다음 지침을 따라 주세요. 

1. 고급 설정 -> 로우 레벨 설정으로 이동
2. **pref.samsungpay.autopause.enable** 활성화

해당 기능은 한국 사용자들을 위한 개발한 기능입니다. 이 기능에 대해 더 알아보고 싶으시다면 아래 부가설명을 읽어보세요. 


###  **pref.samsungpay.autopause.enable** 기능에 대한 설명

이 설정은 삼성 페이 관련 문제가 있는 한국인들을 위해 개발되었습니다. 삼성 페이 서비스는 VPN을 실행 중인 기기에서 작동되지 않습니다. 

AdGuard의 경우, 로컬 VPN을 이용해서 트래픽을 필터링하며 이 모드는 기본적으로 켜져 있습니다. 이것으로 인해 한국 사용자들은 삼성 페이로 결제해야 할 때 일일이 AdGuard를 꺼야 했습니다. 하지만 이 기능을 활성화하시면 이러한 불편함을 없앨 수 있습니다. 

**pref.samsungpay.autopause.enable** 옵션이 켜져 있다면, AdGuard는 사용자가 삼성 페이 앱을 켠 상태일 경우 자동으로 중지됩니다. 그리고 앱사용이 중지되면, AdGuard는 다시 정상적으로 작동됩니다.

![](pref_samsungpay_autopause_enable.gif.gif)

**참고:** 이 기능은 AdGuard 설정에서 VPN 필터링 모드가 켜져 있을 때만 작동합니다. 다른 모드를 사용한다면, AdGuard는 정상적으로 작동할 것입니다.

