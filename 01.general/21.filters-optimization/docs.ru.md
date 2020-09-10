---
title: 'Оптимизация фильтров'
taxonomy:
    category:
        - docs
visible: true
---

Для каждого фильтра существуют две версии: полную и оптимизированную. Оптимизированная версия более лёгкая и не содержит правил, которые вообще не используются или используются редко. Поэтому она работает быстрее, и с ней легче работать.

Обычно, если какое-то правило используется редко, оно просто удаляется из фильтра. Поэтому, если вы добавляете правило, которое нежелательно удалять, используйте [хинт *NOT_OPTIMIZED*](https://kb.adguard.com/ru/general/how-to-create-your-own-ad-filters#not_optimized).

Частота использования правил определяется собранной [статистикой по рекламным фильтрам](https://kb.adguard.com/ru/general/filter-rules-statistics). Но оптимизация фильтров основана не только на этом - некоторые фильтры имеют определенную исходную конфигурацию для этого процесса.

**"Предустановленные" параметры оптимизации фильтров:**
```
"filter": Базовый фильтр AdGuard,
"percent": 30,
"minPercent": 20,
"maxPercent": 40,
"strict": true

"filter": Фильтр виджетов социальных сетей,
"percent": 65,
"minPercent": 40,
"maxPercent": 75,
"strict": true

"filter": Фильтр раздражителей,
"percent": 60,
"minPercent": 40,
"maxPercent": 70,
"strict": true

"filter": Русский фильтр,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": Немецкий фильтр,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": false

"filter": Французский фильтр,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": EasyList,
"percent": 35,
"minPercent": 25,
"maxPercent": 45,
"strict": true

"filter": EasyPrivacy,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": EasyList China,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": ChinaList+EasyList,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": Liste FR,
"percent": 35,
"minPercent": 25,
"maxPercent": 45,
"strict": true

"filter": RU AdList,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": false

"filter": RU AdList: BitBlock,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": Fanboy's Annoyances,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true

"filter": Fanboy's Social Blocking List,
"percent": 45,
"minPercent": 35,
"maxPercent": 55,
"strict": true
```

Где:

* **filter** — идентификатор фильтра
* **percent** — ожидаемый процент оптимизации `~= (количество правил в оптимизированном фильтре) / (количество правил в исходном фильтре) * 100`
* **minPercent** — нижняя граница значения `percent` 
* **maxPercent** — верхняя граница значения `percent`
* **strict** — если `percent < minPercent` ИЛИ `percent > maxPercent` и включен режим strict, то компиляция фильтра должна завершиться неудачно, в противном случае должны использоваться оригинальные правила

>Иными словами, `percent` это "уровень сжатия". Например, "уровень сжатия" для Базового фильтра настроен на 40%. Это значит, что алгоритм оптимизации удалит 60% правил.


В итоге, как уже упоминалось выше, **мы создаём 2 версии каждого фильтра: полную и оптимизированную**. 
Вот так, например, выглядят версии Базового фильтра для браузерного расширения AdGuard:
- полная: https://filters.adtidy.org/extension/chromium/filters/2.txt
- оптимизированная: https://filters.adtidy.org/extension/chromium/filters/2_optimized.txt

Каждый продукт затем использует для фильтрации подходящую с учетом всех остальных условий версию. 
А именно:
- AdGuard для Android, AdGuard для iOS и AdGuard для Safari используют оптимизированные фильтры;
- AdGuard для Windows и AdGuard для Mac используют полные версии фильтров;
- Браузерное расширение AdGuard может использовать обе версии, пользователи могут выбрать нужную в разделе «Настройки»/«Разное» (по умолчанию используются полные версии).

