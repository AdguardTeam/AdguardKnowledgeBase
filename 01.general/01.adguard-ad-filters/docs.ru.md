---
title: 'Рекламные фильтры AdGuard'
taxonomy:
    category:
        - docs
visible: true
---

*   [Введение](#introduction)
*   [Политика фильтров AdGuard](#policy)
*   [Участвовать в развитии фильтров AdGuard](#contribute)
*   [Фильтры AdGuard](#filters)

<a name="introduction"></a>
## Введение

Эта статья посвящена фильтрам, которые мы создаём для использования в AdGuard и в других блокировщиках рекламы (например, uBlock Origin). Каждый фильтр представляет собой набор правил в текстовом формате, использующийся приложениями и программами AdGuard для фильтрации рекламного контента и контента, угрожающего приватности (такого, как баннеры, попапы, счётчики и т.д.). Правила, нацеленные на конкретный сегмент интернета (Немецкий фильтр, Русский фильтр и т.д.), либо служащие определённой цели (Фильтр счётчиков и систем аналитики, Фильтр виджетов социальных сетей и т.д.) объединяются в один список, называемый фильтром, и могут быть включены или выключены как единое целое.

<a name="policy"></a>
## Политика фильтров AdGuard

Наша политика фильтров доступна [здесь](https://kb.adguard.com/ru/general/adguard-filter-policy).

<a name="contribute"></a>
## Участвовать в развитии фильтров AdGuard

Нам крайне повезло иметь вокруг себя сообщество, которое не только любит AdGuard, но и непосредственно поддерживает нас. Большое количество людей становятся волонтёрами и самыми различными способами помогают улучшить AdGuard для себя и всех остальных. Вы тоже можете помочь! Мы, в свою очередь, счастливы вознаградить наиболее активных членов сообщества. Так что же можно сделать? 

### Сообщать о проблемах

Мы полагаемся на сообщество в вопросе обратной связи по нашим фильтрам. Таким образом мы можем быть уверены, что наши фильтры всегда релевантны, и мы эффективно их обновляем. Чтобы сообщить о проблеме (незаблокированная реклама, ложное срабатывание), используйте этот [веб-инструмент](https://agrd.io/report).

### Предложить правило фильтрации

В нашем [репозитории фильтров на GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) вы найдёте большое количество открытых задач. Каждая из них относится к проблеме на каком-либо сайте — пропущенная реклама, ложное срабатывание и т.д. — выбирайте любую и предлагайте в комментариях новые правила для фильтров. Инженеры фильтров AdGuard рассмотрят ваше предложение и добавят правило в фильтры, если оно окажется корректным.

Здесь вы можете найти [официальную документацию](https://kb.adguard.com/ru/general/how-to-create-your-own-ad-filters) по синтаксису правил фильтрации AdGuard. Вам потребуется ознакомиться с ней перед тем, как вы сможете создавать собственные правила фильтрации. 

### Другие способы помочь

У нас есть [специальная страница](https://adguard.com/contribute.html), на которой вы можете узнать больше о способах поучаствовать в развитии AdGuard.


<a name="filters"></a>

* **Базовый фильтр AdGuard** — убирает рекламу с сайтов на английском языке. Изначально основан на фильтре [EasyList](https://easylist.to) и доработан нами исходя из жалоб и пожеланий пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_English/filter.txt)
* **Фильтр счётчиков и системы аналитики** — содержит наиболее полный список различных интернет-счётчиков и систем интернет-аналитики. Используйте его, чтобы избежать слежки за вашими действиями онлайн. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
* **Фильтр параметров отслеживания** — повышает приватность путём удаления параметров отслеживания из адресов страниц и их ресурсов. Когда пользователь включает блокировку параметров отслеживания в модуле Антитрекинга, автоматически включается этот фильтр. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
* **Фильтр виджетов социальных сетей** — скрывает многочисленные кнопки «Мне нравится», «Поделиться» и подобные им интеграции с социальными сетями на популярных сайтах.
[Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
* **Фильтр раздражителей** — блокирует раздражающие элементы на сайтах. Основан на фильтре Fanboy Annoyances List, но не дублирует его. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt)
Включает следующие фильтры AdGuard:
	* Фильтр cookie-уведомлений — блокирует уведомления о файлах cookie на веб-страницах. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
	* Фильтр всплывающих окон — блокирует всплывающие окна, не имеющие отношения к функциональности сайта. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
	* Фильтр баннеров мобильных приложений — блокирует баннеры, рекламирующие мобильные приложения сайтов. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
	* Фильтр виджетов — блокирует виджеты онлайн-ассистентов, чатов службы поддержки и т.п. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
	* Фильтр других раздражителей — блокирует элементы на веб-страницах, не включённые в популярные категории раздражителей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)
* **Фильтр полезной рекламы** — разблокирует рекламу, которая может быть полезна пользователям. Подробнее об этом фильтре можете узнать на [его странице](https://kb.adguard.com/ru/general/search-ads-and-self-promotion). [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
* **Русский фильтр** — убирает рекламу с сайтов на русском языке. Изначально за основу был взят фильтр [RU AdList](https://code.google.com/p/ruadlist/). В дальнейшем фильтр развивался самостоятельно, и на данный момент пересечений с RU AdList практически не осталось. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
* **Немецкий фильтр** — убирает рекламу с сайтов на немецком языке. Изначально основан на фильтре [EasyList Germany](https://easylist.adblockplus.org/) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
* **Французский фильтр** — убирает рекламу с сайтов на французском языке. Изначально основан на фильтре [Liste FR](https://forums.lanik.us/viewforum.php?f=91) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
* **Японский фильтр** — убирает рекламу с сайтов на японском языке. Изначально основан на фильтре [Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
* **Голландский фильтр** — убирает рекламу с сайтов на голландском языке. Изначально основан на фильтре [EasyList Dutch](https://easylist.adblockplus.org/) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
* **Испано-португальский фильтр** — убирает рекламу с сайтов на испанском и португальском языках. Изначально основан на фильтре [Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
* **Турецкий фильтр** — убирает рекламу с сайтов на турецком языке. Разрабатывается нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
* **Китайский фильтр** — убирает рекламу с сайтов на китайском языке. Изначально основан на фильтре [EasyList China](http://abpchina.org/forum/forum.php) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
* **Экспериментальный фильтр** — предназначен для проверки некоторых новых правил фильтрации, которые потенциально могут вызывать конфликты или ломать работу сайтов. В случае успешной проверки правила из Экспериментального фильтра добавляются в основные фильтры. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
* **Фильтр мобильной рекламы** — блокирует рекламу на мобильных устройствах. Содержит все известные нам рекламные сети. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
* **DNS-фильтр** — составлен из нескольких фильтров (Базовый фильтр AdGuard, Фильтр социальных сетей, Фильтр счётчиков и систем аналитики, Фильтр мобильной рекламы, EasyList и EasyPrivacy), и специально упрощён для лучшей совместимости с блокировкой рекламы на уровне DNS. Этот фильтр используется серверами [AdGuard DNS](https://adguard.com/ru/adguard-dns/overview.html) для блокировки рекламы и трекинга. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)