---
title: '아웃바운드 프록시를 설정하는 방법'
taxonomy:
    category:
        - docs
visible: true
---

* [Tor와 함께 AdGuard를 사용하는 방법](#tor)
* [PIA(Private Internet Access)와 함께 AdGuard를 사용하는 방법](#pia)
* [TorGuard와 함께 AdGuard를 사용하는 방법](#torguard)
* [NordVPN과 함께 AdGuard를 사용하는 방법](#nordvpn)
* [Shadowsock과 함께 AdGuard를 사용하는 방법](#shadowsocks)
* [제안](#limitations)

인기 프록시와 AdGuard를 함께 작동하도록 하기 위해 설정해야하는 방법을 확인하세요. 

<a name="tor"></a>
### Tor와 함께 AdGuard를 사용하는 방법

1. AdGuard를 열고 **설정** -> **네트워크** -> **프록시**로 이동합니다.  
**Tor와 통합** 버튼을 누르거나 [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess)에서 ‘Orbot: Proxy with Tor’를 다운로드합니다.

2. Orbot을 열고 애플리케이션의 메인 화면에서 **시작** 버튼을 누릅니다.

2. AdGuard의 **프록시** 섹션으로 돌아갑니다.

3. **Tor와 통합** 버튼을 누릅니다.

4. 모든 필수 필드는 다음과 같이 미리 채워집니다.

필드    |  값
-------    | --------- 
프록시 유형 | SOCKS4 또는 SOCKS5
프록시 호스트 | 127.0.0.1
프록시 포트 | 9050
   
또는 **프록시 서버 추가**를 탭하고 값을 수동으로 입력한 후, Orbot 프록시를 기본으로 설정할 수 있습니다.   

5. AdGuard 보호를 활성화합니다.

> 이제는 AdGuard가 Orbot 프록시를 통해 트래픽을 전달합니다. Orbot 프록시를 비활성화하는 경우, AdGuard에서 아웃바운드 프록시 설정을 비활성화할 때까지 인터넷 연결을 사용할 수 없습니다.

<a name="pia"></a>
### PIA(Private Internet Access)와 함께 AdGuard를 사용하는 방법

기기에 PIA VPN이 이미 설치되어 있는 경우 다음 단계를 따르세요.

1. AdGuard를 열고 **설정** -> **네트워크** -> **프록시**로 이동합니다.  

2. **프록시 서버 추가** 버튼을 누르고 다음 데이터를 입력합니다.
 
필드     |  값
-------    | --------- 
프록시 유형 | SOCKS5
프록시 호스트 | proxy-nl.privateinternetaccess.com
프록시 포트 | 1080
	
3. **프록시 사용자 이름**과 **비밀번호** 필드도 작성해야 합니다. **프록시 사용자 이름**과 **비밀번호** 필드를 작성하려면 PIA 웹 사이트의 [클라이언트 제어판](https://www.privateinternetaccess.com/pages/client-sign-in )에 로그인하세요. PPTP/L2TP/SOCKS 비밀번호 생성 섹션에서 비밀번호 생성 버튼을 클릭하신 다음, ‘x’로 시작하는 사용자 이름과 임의의 비밀번호가 표시됩니다. AdGuard에서 이 사용자 이름과 임의의 비밀번호를 작성하세요.

4. 스위치를 전환하여 이 프록시를 기본으로 설정한 후 **저장**을 누릅니다.

5. AdGuard 보호를 활성화합니다.

<a name="torguard"></a>
### TorGuard와 함께 AdGuard를 사용하는 방법

기기에 TorGuard가 이미 설치되어 있는 경우 다음 단계를 따르세요.

1. AdGuard를 열고 **설정** -> **네트워크** -> **프록시**로 이동합니다.  

2. **프록시 서버 추가** 버튼을 누르고 다음 데이터를 입력합니다.

필드      |  값
-------    | --------- 
프록시 유형 | SOCKS5 
프록시 호스트 | proxy.torguard.org 또는 proxy.torguard.io
프록시 포트 | 1080 또는 1085 또는 1090 
	
3. **프록시 사용자 이름**과 **비밀번호** 필드에 TorGuard 가입 시 선택한 프록시 사용자 이름과 비밀번호를 입력합니다.

4. 스위치를 전환하여 이 프록시를 기본으로 설정한 후 **저장**을 누릅니다.

5. AdGuard 보호를 활성화합니다.

<a name="nordvpn"></a>
### NordVPN과 함께 AdGuard를 사용하는 방법

1. AdGuard를 열고 **설정** -> **네트워크** -> **프록시**로 이동합니다.  

2. **프록시 서버 추가** 버튼을 누르고 다음 데이터를 입력합니다.


필드    |  값
-------    | --------- 
프록시 유형 | SOCKS5 
프록시 호스트 | [이 목록](https://nordvpn.com/servers/)에서 ‘난독화’ 외에 모든 서버 사용 가능 
프록시 포트 | 1080

3. **사용자 이름** 및 **비밀번호** 필드에 NordVPN 사용자 이름과 비밀번호를 입력하십시오.

4. 스위치를 전환하여 이 프록시를 기본으로 설정한 후 **저장**을 누릅니다.

5. AdGuard 보호를 활성화합니다.

<a id="shadowsocks"></a>

### Shadowsock과 함께 AdGuard를 사용하는 방법

기기에 Shadowsock가 이미 설치되어 있는 경우 다음 단계를 따르세요.

**참고: 무한 루프와 드롭을 방지하려면 설정하기 전에 필터링에서 Shadowsock 앱을 제거해야 합니다. (AdGuard -> 앱 관리 -> Shadowsocks -> 보호 비활성화).**

1. AdGuard를 열고  **설정** -> **네트워크** -> **프록시**로 이동합니다.

2. **프록시 서버 추가**를 탭하고 필드를 입력합니다.

필드    |  값
-------    | ---------
프록시 유형 | SOCKS5
프록시 호스트 | 127.0.0.1
프록시 포트 | 1080

3. **저장 및 선택**을 누릅니다.

<a name="limitations"></a>

### 제한

특정 트래픽이 발신 프록시를 통해 라우팅되는 것을 방지할 수 있는 요소가 있습니다. 

1. AdGuard는 자신을 통과하는 트래픽만 다시 라우팅합니다. **앱 관리** 탭에서 **광고 차단** 확인란이 활성화된 앱을 의미합니다.

2. AdGuard는 프록시를 통해 UDP를 라우팅하지 않습니다. 향후 SOCKS5를 통해 UDP 지원을 추가할 계획이지만 지금까지는 아웃바운드 프록시를 통한 TCP 트래픽만 허용됩니다.
