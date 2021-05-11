---
title: 'Как настроить системную фильтрацию в AdGuard для iOS?'
taxonomy:
    category:
        - docs
---

Под системной блокировкой понимается блокировка рекламы и трекеров за пределами браузера Safari, то есть в других приложениях и браузерах.

На iOS единственный способ заблокировать рекламу и трекинг на системном уровне — это [DNS-фильтрация](https://kb.adguard.com/ru/general/dns-filtering). Для начала вам понадобится включить DNS-защиту. Сделать это можно, открыв раздел *настройки AdGuard для iOS* —> *DNS-защита*. Передвиньте ползунок переключателя в положение «вкл».

<img src="https://cdn.adguard.com/public/Adguard/Blog/ios_dns_protection_ru.PNG" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

Теперь, если ваша цель — заблокировать рекламу и трекинг везде, а не только в Safari, то у вас две опции:

1. Включить сервер AdGuard DNS (*Настройки* —> *DNS-защита* —> *DNS-сервер* —> *AdGuard DNS*).
2. Добавить DNS-фильтр или hosts-файл, который будет блокировать рекламные и трекинговые домены, например, фильтр AdGuard DNS.

Настройка второго варианта займёт немного больше времени, зато он обладает несколькими преимуществами:

* Можно использовать любой DNS-сервер по своему предпочтению, а не только конкретный блокирующий сервер.
* Вы можете добавлять сразу несколько DNS-фильтров и/или hosts-файлов, но вы не можете одновременно использовать несколько DNS-серверов.

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_ru.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 650px; padding: 2px;">
<p align="center"><i>Схематичное объяснение DNS-фильтрации</i><p>

### Как добавить DNS-фильтр/hosts-файл

Вы можете добавлять любые DNS-фильтры или hosts-файлы, инструкция будет одинаковой для всех. Для примера давайте возьмём [фильтр AdGuard DNS](https://github.com/AdguardTeam/AdguardSDNSFilter). Он составлен из нескольких других фильтров (Базовый фильтр AdGuard, Фильтр счётчиков и системы аналитики, Фильтр виджетов, Фильтр социальных сетей, Фильтр мобильной рекламы, EasyList, EasyPrivacy и т. д.) и упрощён специально, чтобы лучше блокировать рекламу на уровне DNS-запросов.

1. Откройте *настройки AdGuard для iOS* —> *Общие*.
2. Включите *Расширенный режим*. Появится вкладка «Расширенные настройки». Откройте её.

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_ru.jpg" style="border: 0px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Blog/ios_advanced_settings_ru.PNG" style="border: 0px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
</div>

> Важно: мы не рекомендуем трогать другие настройки в этом разделе, особенно *Низкоуровневые настройки*. Изменение некоторых из них может привести к проблемам с интернетом или скомпрометировать вашу онлайн-конфиденциальность. Не меняйте их, если не знаете, что делаете. Далее описаны точные шаги, необходимые для добавления фильтра AdGuard DNS.

3. Скопируйте эту ссылку: `https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt`.
4. Откройте настройки AdGuard для iOS —> *DNS-защита* —> *DNS-фильтрация* (доступна, когда *Режим расширения* включен) —> *DNS-фильтры*.
5. Нажмите кнопку «Добавить фильтр», вставьте ссылку в поле URL фильтра и нажмите кнопку «Далее».

<img src="https://cdn.adguard.com/public/Adguard/Blog/ios_adding_a_filter_ru.PNG" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

> Вы можете добавлять любое количество других фильтров аналогичным образом, подставляя их URL на шаге 3. Огромный выбор различных фильтров и ссылки на них доступны [здесь](https://filterlists.com).