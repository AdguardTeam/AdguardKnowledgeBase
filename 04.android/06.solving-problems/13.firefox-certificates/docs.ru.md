---
title: 'Проблемы доверия сертификатам безопасности в браузере Firefox'
published: true
taxonomy:
    category:
        - docs
---

Чтобы AdGuard мог [успешно фильтровать HTTPS-трафик](https://kb.adguard.com/ru/general/https-filtering) в Firefox, браузер должен доверять сертификату AdGuard. Этого можно добиться по-разному в зависимости от версии Firefox.

#### Метод 1

> Пока что этот метод работает только в [Firefox Nightly](https://www.mozilla.org/firefox/channel/android/) версии 90.0a1. Как только бета- и обычная сборка Firefox достигнут версии 90, данный метод будет также применим к ним.

Чтобы Firefox Nightly доверял сертификату AdGuard, выполните следующие шаги:

1. Запустите браузер.
2. Перейдите в *Настройки > О Firefox Nightly*.

<img src="https://cdn.adguard.com/public/Adguard/kb/Firefox_cert/ff_nightly_about_ru.jpg" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

3. Несколько раз быстро нажмите на логотип Firefox Nightly в верху экрана.
4. Перейдите в раздел *Настройки > Secret Settings*.

<img src="https://cdn.adguard.com/public/Adguard/kb/Firefox_cert/ff_nightly_secret.jpg" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

5. Включите настройку **Use third party CA certificates**.

#### Метод 2

>Этот метод будет работать **только** на устройствах с рут-доступом!

1. [Установите и настройте ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/);
> При использовании платформы Windows, владельцам **Samsung** может понадобиться установка [данной утилиты](https://developer.samsung.com/mobile/android-usb-driver.html).
2. Активируйте **Режим разработчика** и разрешите **отладку по USB**:
- Откройте **Настройки** на вашем телефоне;
- Перейдите в раздел **Система** (последний пункт меню настроек). В этом разделе найдите подпункт **О телефоне**;
- Кликните по строке **Номер сборки** 7 раз. После этого, вы получите уведомление о том, что стали разработчиком (возможно, вам потребуется ввести код разблокировки устройства);
- Откройте **настройки системы** > **Для разработчиков** > Прокрутите вниз и включите **отладку по USB** > Подтвердите включение отладки в окне **Разрешить отладку по USB**, внимательно прочитав предупреждение.
3. Установите браузер [Firefox](https://www.mozilla.org/en-US/firefox/releases/) (релизную версию);
4. Откройте **настройки AdGuard** > **Сеть** > **Фильтрация HTTPS** > Установить сертификат в браузер **Firefox** > **УСТАНОВИТЬ ДЛЯ СТАРЫХ ВЕРСИЙ**;
5. Откройте папку `data/data/org.mozilla.firefox/files/mozilla` применив `adb shell su` и `cd data/data/…`, далее отыщите папку с названием `xxxxxxx.default` и запомните её название.
6. В указанной папке нас интересуют два файла:
- `cert9.db`
- `key4.db`
7. Нам необходимо перенести данные файлы в папку к браузеру, в котором возникла проблема с сертификатами безопасности: 
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

> Если `adb shell su` не срабатывает, изначально следует попробовать применить `adb shell`, а уже после `su`.
