---
title: 'iCloud Private Relay и AdGuard'
taxonomy:
    category:
        - docs
visible: true
---

## Описание проблемы

По-умолчанию, AdGuard использует "default route", таким образом отключая iCloud Private Relay.

В настоящее время AdGuard и iCloud Private Relay не могут работать одновременно. AdGuard не может блокировать рекламу, так как iCloud Private Relay шифрует трафик до того, как AdGuard сможет фильтровать сетевые соединения.  Использование iCloud Private Relay блокирует любую фильтрацию, включая локальную. Таким образом, AdGuard не может фильтровать трафик или выполнять фильтрацию DNS в Safari. Однако AdGuard по-прежнему фильтрует трафик в других браузерах. Если вы хотите использовать iCloud Private Relay, подумайте об установке [AdGuard для Safari](https://adguard.com/adguard-safari/overview.html). 

То же самое касается использования любых VPN-приложений на Mac: либо вы используете iCloud Private Relay, либо VPN-сервис.

## Детальное описание проблемы

AdGuard для Mac теперь использует встроенный в macOS механизм фильтрации сокетов на основе network extensions API. Этот новый и довольно глючный механизм заменил старые добрые Kernel extensions. За последние полтора года мы сообщили Apple более чем о 20 ошибках, связанных с новым методом фильтрации.

Network extensions API имеет VPN-подобную конфигурацию со списком записей, похожих на маршруты.
На Big Sur мы использовали правило "split-tunnel", чтобы избежать создания правила "default route", поскольку оно вызывало проблемы на ранних версиях Big Sur. Эти проблемы исправлены в Monterey, поэтому теперь использованию "default route" ничего не мешает.

На Monterey появилась функция iCloud Private Relay. Функции конфиденциальности в Mail.app также используют серверы iCloud Private Relay.

В результате AdGuard не может работать вместе с iCloud Private Relay и функциями конфиденциальности Mail.app:
1. iCloud Private Relay применяется к соединениям на уровне библиотек - до того, как они достигают уровня сокета, где работает AdGuard.
2. iCloud Private Relay использует QUIC, который AdGuard не может фильтровать в фильтруемых приложениях, поскольку фильтрация HTTP/3 не внедрена.
3. Поэтому AdGuard блокирует QUIC, включая и трафик iCloud Private Relay - иначе блокировка рекламы невозможна.
4. При использовании iCloud Private Relay и переключении AdGuard в режим "split-tunnel" невозможно открыть веб-сайты в Safari. 
5. Чтобы обойти эту проблему для Monterey, мы применяем правило "default rout". Когда Private Relay видит это правило, он автоматически отключается.
Таким образом, AdGuard работает без проблем на Monterey, но iCloud Private Relay отключается.

``network.extension.monterey.force.split.tunnel`` восстанавливает поведение "Big Sur", но этот вариант может нарушить доступ к веб-сайтам из-за (3) и (4).

Мы продолжаем искать решение этой проблемы. Одним из вариантов является внедрение фильтрации HTTP/3.

## Рекомендуемое решение

Мы рекомендуем использовать AdGuard вместе с более традиционным VPN-сервисом, таким как [AdGuard VPN](https://adguard-vpn.com/).

## Альтернативное решение

Вы можете запретить AdGuard использовать "default route", отключив "default route".  Это можно сделать через Расширенные настройки -> ``network.extension.monterey.force.split.tunnel``. 

<img src="https://cdn.adguard.com/public/Adguard/kb/MAC/mac_adguard_advanced_settings_ru.png">. 

Имейте в виду, что в этом случае вы столкнетесь с проблемами, описанными выше.
