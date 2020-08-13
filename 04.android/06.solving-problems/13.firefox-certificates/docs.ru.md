---
title: 'Ручная установка сертификата безопаности в браузер FireFox'
published: true
taxonomy:
    category:
        - docs
---

Различные версии браузера Firefox требуют разных подходов для осуществления [HTTPS-фильтрации](https://kb.adguard.com/ru/general/https-filtering). Если стабильная версия Firefox позволяет установить сертификат непосредственно в сам браузер, то в других версиях указанного браузера данный функционал может быть ограничен (Firefox Nightly, Beta, Developer Edition, а также в других браузерах на базе Firefox). Ниже мы представлены два варианта, которые помогут вам активировать HTTPS-фильтрацию в различных версиях браузера Firefox.

### Предоставление доступа к сертификатам

#### Сертификат находится в разделе **Пользовательские**

Чтобы начать использовать пользовательские сертификаты в Firefox (и браузерах на основе Firefox), вам необходимо активировать скрытую опцию в настройках браузера:

1. Запустите браузер **Firefox**;
2. Перейдите на страницу **about:config**;
3. Введите **root** в поле поиска;
4. Найдите опцию "security.enterprise_roots.enabled" и переключите ее, выбрав значание **true**.

#### Сертификат перенесен в раздел **системные** (Наличие root-прав)

1. [Установите и настройте ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/);
> При использовании платформы Windows, владельцам **Samsung** может понадобиться установка [данной утилиты](https://developer.samsung.com/mobile/android-usb-driver.html).
2. Активируйте **Режим разработчика** и разрешите **отладку по USB**:
- Откройте **Настройки** на вашем телефоне;
- Перейдите в раздел **Система** (последний пункт меню настроек). В этом разделе найдите подпункт **О телефоне**;
- Кликните по строке **Номер сборки** 7 раз. После этого, вы получите уведомление о том, что стали разработчиком (возможно, вам потребуется ввести код разблокировки устройства);
- Откройте **настройки системы** > **Для разработчиков** > Прокрутите вниз и включите **отладку по USB** > Подтвердите включение отладки в окне **Разрешить отладку по USB**, внимательно прочитав предупреждение.
3. Установите браузер [Firefox](https://www.mozilla.org/en-US/firefox/releases/) (релизную версию);
4. Откройте **настройки AdGuard** > **Сеть** > **Фильрация HTTPS** > Установить сертификат в браузер **Firefox** > выберите вариант **Стабильный**;
5. Откройте папку `data/data/org.mozilla.firefox/files/mozilla` применив `adb shell su` и `cd data/data/…`, далее отыщите папку с названием `xxxxxxx.default` и запомните её название.
6. В указанной папке нас интересуют два файла:
- `cert9.db`
- `key4.db`
7. Нам необходимо перенести данные файлы в папку к браузеру, в котором возникла проблема с сертификатами безопаности: 
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`
8. Полная команда будет иметь примерно такой вид:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyy.default`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyy.default`

В том случае, если вы получили системное уведомление **permission denied**, вам необходимо сначала перенести указанные файлы в свободную от разрешений директорию. А уже после перенести их в нужную папку в браузере Firefox.
Полная команда будет иметь примерное такой вид:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default` 
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`
> Если `adb shell su` не срабатывает, изначально следует попробовать применить `adb shell`, а уже после `su`

