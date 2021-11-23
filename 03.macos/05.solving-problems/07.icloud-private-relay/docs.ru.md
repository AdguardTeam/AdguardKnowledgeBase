---
title: 'iCloud Private Relay и AdGuard'
taxonomy:
    category:
        - docs
visible: true
---

## Описание проблемы

По-умолчанию, AdGuard использует "default route", таким образом отключая iCloud Private Relay.

В настоящее время AdGuard и iCloud Private Relay не могут работать одновременно. AdGuard не может блокировать рекламу, так как iCloud Private Relay шифрует трафик до того, как AdGuard сможет фильтровать сетевые соединения.  Использование iCloud Private Relay блокирует любую фильтрацию, включая локальную. Таким образом, AdGuard не может фильтровать трафик или выполнять фильтрацию DNS в Safari. Однако AdGuard по-прежнему фильтрует трафик в других браузерах. Если вы хотите использовать iCloud Private Relay, подумайте об установке [AdGuard для Safari](https://adguard.com/en/adguard-safari/overview.html). 

То же самое касается использования любых VPN-приложений на Mac: либо вы используете iCloud Private Relay, либо VPN-сервис.

## Рекомендуемое решение

Мы рекомендуем использовать AdGuard вместе с более традиционным VPN-сервисом, таким как [AdGuard VPN](https://adguard-vpn.com/en/welcome.html).

## Альтернативное решение

Вы можете запретить AdGuard использовать "default route", отключив "default route".  Это можно сделать через Дополнительные настройки -> ``network.extension.monterey.force.split.tunnel``. 

<img src="https://cdn.adguard.com/public/Adguard/kb/MAC/mac_adguard_advanced_settings.png" width="300">. 

Имейте в виду, что в этом случае вы столкнетесь с проблемами, описанными выше.
