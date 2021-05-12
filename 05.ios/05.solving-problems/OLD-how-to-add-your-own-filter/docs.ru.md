---
title: 'Как добавить собственный DNS-фильтр'
taxonomy:
    category:
        - docs
   
---

Если вы хотите блокировать рекламу или трекинг за пределами браузера Safari на iOS, вам придётся прибегнуть к DNS-блокировке. Как правило, для этого необходимо использовать блокирующий DNS-сервер (например, [AdGuard DNS](https://adguard.com/ru/adguard-dns/overview.html)), но в приложениях AdGuard для iOS есть и другой способ: можно добавить свой DNS-фильтр или hosts-файл.

У этого метода есть несколько преимуществ:
1) Вы можете использовать любой DNS-сервер на своё усмотрение и не привязаны к конкретному блокирующему серверу.
2) Вы можете добавить сразу несколько DNS-фильтров и/или файлов hosts одновременно, но не можете использовать сразу несколько DNS-серверов.

Чтобы добавить собственный DNS-фильтр* в приложении AdGuard для iOS или AdGuard Pro, выполните следующие шаги:

**⠀Не путайте с добавлением своего фильтра в Safari.*

1. Открыть Настройки AdGuard Pro —> Общие —> Включить Режим разработчика.
<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_ru.jpg" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

2. Перейти в DNS-защиту —> Фильтрацию DNS-запросов —> DNS-фильтры —> Нажать «Добавить фильтр».
<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/Pro/dns_filters_ru.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

Для примера возьмём наш [DNS-фильтр](https://kb.adguard.com/ru/general/adguard-ad-filters#domains).

> DNS-фильтр составлен из нескольких фильтров (Английский фильтр, Фильтр социальных сетей, Фильтр счётчиков и систем аналитики, Фильтр мобильной рекламы, EasyList и EasyPrivacy) и упрощён для лучшей совместимости с блокировкой рекламы на уровне DNS.

<img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/Pro/new_dns_filter_ru.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

3. Вставить эту ссылку: [https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt) (или используйте ссылку для любого другого фильтра, который вам нужен).

Вот и всё! Вы успешно добавили свой фильтр.