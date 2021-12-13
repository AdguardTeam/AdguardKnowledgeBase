---
title: 'Как работает AdGuard VPN'
taxonomy:
    category:
        - docs
---
* [Функции VPN](#functions)
* [Устройство VPN](#structure)
* [Типы VPN-протоколов](#types)
* [Применение VPN](#use)
* [Недостатки VPN](#drawbacks)
* [AdGuard VPN](#adguard-vpn)

Для понимания того, как устроен AdGuard VPN, необходимо сначала понять общие принципы работы VPN-сервиса. 

<a name="functions"></a>

## Функции VPN

VPN — это виртуальная частная сеть (Virtual Private Network), которая помогает скрыть ваше местонахождение и защитить ваши данные в сети. VPN соединяет компьютер или мобильное устройство с VPN-сервером и использует IP-адрес этого сервера для того, чтобы стороннему наблюдателю казалось, что вы находитесь в другом месте. Это, в свою очередь, позволяет получить доступ к различным интернет-ресурсам и защитить личные данные.

Таким образом, у VPN есть 3 главных преимущества:
1. *Анонимность*. VPN скрывает ваше настоящее местонахождение путём замены IP-адреса вашего устройства на IP-адрес выбранного VPN-сервера.

2. *Обход геоблокировки*. Некоторые сайты доступны только пользователям из определённых стран и регионов. Подключаюсь к VPN-серверу, который находится в одной из этих стран, вы сможете пользоваться прежде недоступными ресурсами.

3. *Защита данных*. VPN создаёт зашифрованный туннель между вашим устройством и удалённым сервером, через который проходит ваш сетевой трафик. На этом пути все ваши данные будут надежно защищены.

<a name="structure"></a>

## Устройство VPN

При подключении к сети вашему компьютеру или мобильному устройству присваивается уникальный числовой идентификатор, или IP-адрес. Обычно, он состоит из чисел от 0 до 255, разделенных точками или двоеточиями. Зная эту последовательность, можно определить геолокацию устройства, а значит, и ваше местоположение. IP-адрес, как правило, устанавливается вашим интернет-провайдером, и он будет виден на всём вашем пути к искомому сетевому ресурсу. Поэтому веб-сервер сайта, на который вы заходите, может регистрировать ваш IP-адрес и записывать то, что вы на нём запросили. Эта запись может быть затем использована, прежде всего, для сбора данных и анализа трафика. 

VPN создаёт между вашим девайсом и VPN-сервером своеобразный туннель, в котором ваши данные зашифровываются и уже затем в защищённом виде попадают в открытый интернет. Поэтому веб-серверу будет казаться, что ваше устройство имеет уже не ваш настоящий IP-адрес, а IP-адрес конечного пункта туннеля, то есть VPN-сервера. Таким образом, сайт, на который вы попадаете, пройдя через VPN-туннель, будет считать вашим настоящим местоположением геолокацию выбранного вами VPN-сервера. А зашифрованные данные не попадут в руки рекламодателей, хакеров и спецслужб.

<img src="https://cdn.adguard.com/public/Adguard/Website/Images/seo/ru/how_vpn_3.jpg" style="max-width: 350px; ">

<a name="types"></a>

## Типы VPN-протоколов

Протоколы безопасности VPN — это инструменты, которые шифруют данные в VPN-туннеле и позволяют сохранить конфиденциальность пользователя в открытой сети. На данный момент подавляющее большинство современных VPN-сервисов используют один из трёх следующих VPN-протоколов:

1. [*IPSec*](https://ru.wikipedia.org/wiki/IPsec). Одно из его основных преимуществ в том, что он доступен на большинстве устройств и операционных систем и обеспечивает высокий уровень безопасности. Однако использование двойной [инкапсуляции](https://ru.wikipedia.org/wiki/Инкапсуляция_(компьютерные_сети)) в этом протоколе может привести к более низкой скорости соединения.

2. [*OpenVPN*](https://ru.wikipedia.org/wiki/OpenVPN). Этот современный протокол имеет открытый исходный код, поэтому сторонние производители могут улучшать и обновлять технологию.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Его главные преимущества — простота использования, высокая производительность и низкая уязвимость для атак.

Помимо этих VPN-протоколов есть и другие (например, TLS, SSTP, IKEv2), но они малопопулярны либо не соответствуют современным стандартам шифрования данных.

<object data="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/4-ru.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/4-ru.svg"></object>

У AdGuard VPN также есть собственный [*протокол*](link). Одно из его преимуществ состоит в том, что трафик, передаваемый с помощью протокола AdGuard, сложно отличить от обычного трафика. То есть VPN-туннель выглядит как обычный HTTPS-трафик, поэтому его чрезвычайно трудно обнаружить и заблокировать. Помимо этого, он основан на механизмах современного протокола HTTP/2, что обеспечивает высокую скорость соединения.

<object data="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5-ru.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5-ru.svg"></object>

<a name="use"></a>

## Применение VPN

VPN выполняет три важные функции:

1. **Сохранение анонимности**

Используя интернет-соединение, пользователь оставляет свой цифровой след, который затем может быть проанализирован и использован третьими лицами. Например, один из онлайн-магазинов, который вы посетили, может сохранить вашу историю поиска и затем на ее основе предлагать вам свою продукцию через таргетированную рекламу. Или секретные службы, узнав ваше местоположение через IP-адрес вашего устройства и определив вашу личность, могут тайно следить за вашей активностью в сети. К тому же, сами веб-браузеры и интернет-провайдеры могут как использовать вашу историю посещений в своих целях, так и продавать ее рекламодателям и предоставлять государственным институтам. VPN позволяет скрыть ваш IP-адрес и заменить его на IP-адрес VPN-сервера, к которому вы подключены. Таким образом вы сможете сохранить свою конфиденциальность и анонимно искать информацию в интернете.

2. **Защита данных**

При подключении к ненадёжной или общедоступной сети данные на вашем устройстве могут стать уязвимыми для киберпреступников. Реквизиты банковских карт, логины и пароли, паспортные данные — все эти данные могут быть перехвачены онлайн-мошенниками. VPN-туннель шифрует информацию, которую вы отправляете и получаете из сети, поэтому она не сможет попасть в чужие руки.

3. **Обход геоблокировки**

Многие сайты, в том числе стриминговые сервисы и онлайн-платформы, доступны лишь в определённых странах. В частности, многие российские онлайн-кинотеатры доступны только на территории РФ, и, например, выезжая на отдых за рубеж, вы не сможете пользоваться ими без VPN. С помощью VPN вы сможете изменить свой IP-адрес (а значит, и местоположение, которое будет отображаться в сети) и пользоваться прежде заблокированными ресурсами.

<a name="drawbacks"></a>

## Недостатки VPN

Несмотря на очевидные преимущества, VPN неидеален и обладает некоторыми недостатками:

**Скорость**

Так как ваш трафик идет не напрямую к веб-серверу, а сначала проходит через VPN-сервер, скорость при VPN-соединении снижается. На скорость при использовании VPN влияют и другие факторы: загруженность VPN-сервера, его пропускная способность, совместимость VPN-протокола с вашей операционной системой. Все эти факторы, а также скорость самой сети могут снизить качество вашего VPN-соединения.

**Блокировка доступа**

Многие VPN-провайдеры используют протоколы, которые не позволяют VPN-соединению мимикрировать под обычный трафик. Поэтому некоторые онлайн-сервисы могут обнаружить VPN-соединение и заблокировать использующих его пользователей.

**Обрыв VPN-соединений**

Слабый сигнал, перегруженность сети, несовместимость VPN с брандмауэром, антивирусом и другими программами, устаревший VPN-протокол — всё это может стать причиной внезапного сбоя в VPN-соединении, особенно у не самых надежных VPN-провайдеров.

<a name="adguard-vpn"></a>

## AdGuard VPN

Наш VPN-сервис обладает несколькими важными [преимуществами](https://kb.adguard.com/ru/vpn/adguard-vpn-general/adguard-vpn-is-the-better-option):

* [*собственный VPN-протокол*](https://kb.adguard.com/ru/vpn/adguard-vpn-general/how-adguard-vpn-works), который стабильно работает даже при слабом интернет-соединении и маскируется под обычный трафик, отчего его сложнее отследить и заблокировать;

* [*политика «без логов»*](https://adguard-vpn.com/ru/privacy.html), которая означает, что AdGuard VPN не собирает ваши личные данные и не передаёт их третьим лицам;

* *более 50 VPN-серверов в десятках стран*;

* *простота использования и широкие возможности кастомизации*.

На данный момент AdGuard VPN доступен как:

* [браузерное расширение](https://adguard-vpn.com/ru/vpn/vpn-for-browser-extentions) для Chrome, Firefox и Edge;
* мобильное приложение для [Android](https://adguard-vpn.com/ru/vpn/vpn-for-android) и [iOS](https://adguard-vpn.com/ru/vpn/vpn-for-ios);
* десктопное приложение для [Windows](https://adguard-vpn.com/ru/vpn/vpn-for-windows) и [Mac](https://adguard-vpn.com/ru/vpn/vpn-for-mac).

Подробнее об особенностях AdGuard VPN (в том числе безлимитной версии) вы можете узнать [здесь](https://adguard-vpn.com/ru/welcome.html).