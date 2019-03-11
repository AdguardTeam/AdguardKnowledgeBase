---
title: 'Как настроить фоновую работу AdGuard'
published: true
taxonomy:
    category:
        - docs
---

Приложения на устройствах не всегда продолжают работать и оставаться в фоновом режиме по нескольким причинам, чаще всего это происходит из-за встроенной функции оптимизации операционной системы (ОС) Android или же из-за включения режима энергосбережения. Поэтому система закрывает приложения для того, чтобы снизить нагрузку и освободить оперативную память. Чтобы избежать этого, вам необходимо выполнить следующие шаги, указанные в инструкции (отдельно для каждого производителя/версии ОС Android). Обратите внимание, что эта инструкция может быть применима практически для любой версии Android OS.

**Список устройств и производителей/версий OS Android:**

* [Xiaomi](#Xiaomi)

* [Samsung](#Samsung)

* [Huawei](#Huawei)

* [Meizu](#Meizu)

* [Nokia](#Nokia)

* [Oneplus](#Oneplus)

* [Стоковые устройства Pixel/Nexus/Essential на базе Android](#Google)

<a id="Xiaomi"></a>
## Xiaomi

Для настройки фоновой работы AdGuard на устройствах Xiaomi вы должны обратить внимание на разделы "Батарея" и "Разрешения" в настройках.

- Нажмите на *кнопку-меню фоновых приложений* и смахните окно приложения AdGuard вниз, чтобы сделать опции видимыми (как показано на снимке экрана):

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/xiaomirecent.png" width="300">

- Нажмите на значок *"замочка"*. Это не позволит системе автоматически закрыть AdGuard.

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/xiaomilocked.png" width="300">

- Перейдите в раздел *"Батарея и производительность"*

- Выберите *"Выбрать приложение"*

- Найдите и выберите в списке умного режима приложение AdGuard

- Перейдите в режим фоновых настроек и выберите пункт *"Без ограничений"*:

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/xiaomirest.png" width="300">

- Перейдите в раздел *"Разрешения"*

- Выберите пункт *"Автозапуск"*

- Убедитесь, что функция автозапуска включена для AdGuard:

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/xiaomiautostart.png" width="300">

<a id="Samsung"></a>

## Samsung

Для устройств Samsung нет особой необходимости в настройке фоновой работы, но если вы столкнулись с тем, что приложение закрывается или исчезает из меню недавних задач через некоторое время, сделайте следующее:

- Нажмите кнопку вызова фоновых приложений, коснитесь значка дополнительных настроек. Он должен выглядеть так:
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsungoptions.png" width="300">

 - Нажмите на *"Закрепить приложения"*:
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsunglockapps.png" width="300">
 
 - Нажмите на значок *"замочка"*
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsunglock.png" width="300">
 
 <a id="Huawei"></a>
 
 ## Huawei
 
 Устройства Huawei наиболее легки в настройке, достаточно выполнить два шага для того, что бы закрепить приложение в фоновом режиме.
 
- Нажмите на кнопку вызова фоновых приложений:
  
  <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/huaweirecentapps.jpg" width="300">
  
- Нажмите на значок *"замочка"*:
  
   <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/huaweilock.jpg" width="300">
   
   Also, don't forget to follow these steps:
   
- Phone settings > Advanced Settings > Battery manager > Power plan is set to Performance
- Phone Settings > Advanced Settings > Battery Manager > Protected apps – check for your app as Protected
- Phone Settings > Apps > Your app > Battery > Power-intensive prompt [x] and Keep running after screen off [x]
- Phone settings > Apps > Advanced (At the bottom) > Ignore optimisations > Press Allowed > All apps > Find your app on the list and set to Allow

#### Huawei P9 Plus:

Phone settings > Apps > Settings > Special access > Ignore battery optimisation > select allow for your app.

#### Huawei P20:

Phone settings > Battery > App launch and then set your app to “Manage manually” and make sure everything is turned on.

#### Huawei Honor 9 Lite and Huawei Mate 9 Pro:

Phone settings > Battery > Launch and then set your app to “Manage manually” and make sure everything is turned on.
   
   
   <a id="Meizu"></a> 
   
 ## Meizu
 
Meizu is probably on par with Huawei and Xiaomi in their approach to background process limitations, but they get a better rank probably just because those devices are not that common on the market and thus do not cause such a pain to the developers as the aforementioned.

Adjust your settings:

- Device Settings > Advanced Settings > Battery manager > Power plan set to Performance
- Device Settings > Advanced Settings > Battery Manager > Protected apps – check your app as Protected
- Enable Device Settings > Apps > your app > Battery > Power-intensive prompt and Keep running after screen off
 
<a id="Nokia"></a> 
   
 ## Nokia
 
 Nokia on Android O and P kills any background process including sleep tracking (or any other sport tracking) after 20 minutes if the screen is off. Also when killed all alarms are stopped which renders for example any alarm clock apps useless.
 
 What need to be done:

- Go to Phone settings > Apps > See all apps.
- Tap on the right top corner menu > Show system.
- Find Power saver app in the list, select it and Force close. It will remain stopped until the next restart.
- From now on, background apps should work normally and use the standard Android battery optimizations.

Still 3rd party alarm clocks or any task scheduling of foreground tasks at a particular time won’t work. We do not have any solution for this at the moment UPDATE: in our preliminary tests it seems that force stopping or uninstalling the Power saver app also fixes alarms and starting of foreground services.

#### Nokia 1 (Android Go)

Uninstall the com.evenwell.emm package via the following adb commands:

`adb shell`
`pm uninstall --user 0 com.evenwell.emm`

#### Other Nokia models

Uninstall the com.evenwell.powersaving.g3 package via the following adb commands:

`adb shell`
`pm uninstall --user 0 com.evenwell.powersaving.g3`
   
   <a id="Oneplus"></a> 
   
 ## Oneplus
 
В OxygenOS встроен внутренний функционал для очистки кэша и оперативной памяти для экономии заряда. Кроме того, OxygenOS может закрыть приложение, если вы его не используете некоторое время. Чтобы исправить это, выполните следующие действия:
 
- Перейдите в настройки
 
- Батарея > Оптимизация батареи
 
- Найдите приложение AdGuard
 
- Нажмите на него и выберите опцию *«Не оптимизировать»*
 
- Нажмите «Готово», чтобы сохранить изменения
 
- Нажмите на кнопку вызова фоновых приложений, затем зафиксируйте приложение AdGuard нажав на значок *"замочка"* (как показано на скриншоте):

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/onepluslock.png" width="300">

- Нажмите на значок замочка:

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/oneplusdots.png" width="300">

<a id="Google"></a>

## Стоковые устройства Pixel/Nexus/Essential на базе Android

Android на заводской прошивке как правило не конфликтует с фоновыми процессами, но если вы все же столкнулись с проблемой фоновой работы, то необходимо включить режим «Всегда в VPN».

 - Перейдите в раздел Настройки - Сеть и Интернет
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/stocknetwork.png" width="300">

 - Откройте режим VPN и выберите AdGuard
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/stockvpn.png" width="300">
 
 - Выберите пункт "Постоянная VPN" 
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/stockadguard.png" width="300">
