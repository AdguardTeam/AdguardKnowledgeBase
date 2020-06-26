---
title: 'Ошибка "Это соединение является недоверенным"'
taxonomy:
    category:
        - docs
visible: true
---

<img src="https://cdn.adguard.com/public/Adguard/kb/en/certificate/cert_ru.png" style="border: 1px solid #efefef; padding: 2px; max-width: 750" />

Ошибка "Это соединение является недоверенным" чаще всего встречается в браузерах на основе Firefox, таких как Mozilla Firefox, PaleMoon, Waterfox и другие.

Начиная с версии 68, Firefox доверяет сертификатам из системного хранилища при выполнении определённых условий. Но иногда по какой-либо причине (не зависящей от AdGuard) механизм доверия сертификатам из системного хранилища перестаёт работать, что и приводит к возникновению этой ошибки. Чтобы исправить её, необходимо скачать локальный сертификат AdGuard и затем добавить его в собственное хранилище сертификатов вручную. Для этого выполните следующие шаги: 

>Данная инструкция описывает порядок действий в браузере Firefox, названия кнопок и разделов могут немного отличаться в других браузерах на его основе.

1) Запустите AdGuard.

2) Перейдите на страницу [http://local.adguard.org/cert](http://local.adguard.org/cert) и кликните по кнопке *Скачать*. Браузер начнёт загрузку файла **cert.cer**.

>Также вы можете перейти на страницу скачаивания сертификата напрямую из раздела приложения *Настройки - Сеть - Фильтрация HTTPS*.

<img src="https://cdn.adguard.com/public/Adguard/kb/en/certificate/cert_win_ru.png" style="border: 1px solid #efefef; padding: 2px; max-width: 550" />

3) Откройте ваш браузер и затем откройте в нём *Настройки*.

4) Перейдите во вкладку *Приватность и защита*.

5) Прокрутите страницу вниз до раздела *Сертификаты* и кликните по кнопке *Просмотр сертификатов...*.

<img src="https://cdn.adguard.com/public/Adguard/kb/ru/certificate/cert_settings_ru.png" style="border: 1px solid #efefef; padding: 2px; max-width: 750" />

6) Выберите вкладку *Центры сертификации*.

7) Нажмите кнопку *Импортировать...*.

<img src="https://cdn.adguard.com/public/Adguard/kb/ru/certificate/cert_import_ru.png" style="border: 1px solid #efefef; padding: 2px; max-width: 550" />

8) Найдите загруженный файл **cert.cer** и нажмите *Открыть*.

9) Нажмите кнопку *OK*.

Вы успешно установили сертификат AdGuard. Перезапустите браузер и ошибка должна исчезнуть.