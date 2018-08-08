---
title: 'Как настроить фоновую работу AdGuard'
published: true
taxonomy:
    category:
        - docs
---

# AdGuard через некоторое время исчезает из фоновой работы?
Приложения на устройствах не всегда продолжают работать и оставаться в фоновом режиме по нескольким причинам, чаще всего это происходит из-за встроенной функции оптимизации операционной системы (ОС) Android или же из-за включения режима энергосбережения поэтому система закрывает приложения для того, что бы снизить нагрузку и освободить оперативную память. Чтобы избежать этого, Вам необходимо выполнить следующие шаги, указанные в инструкции для каждой версии ОС Android. Обратите внимание, что эта инструкция может быть применима практически для каждой версии Android OS.

**Список устройств и версий OS Android:**

* [Xiaomi](#Xiaomi)

* [Samsung](#Samsung)

* [Huawei](#Huawei)

* [Oneplus](#Oneplus)

* [Android stock devices](#Google)

<a id="Xiaomi"></a>
## Xiaomi

Для настройки фоновой работы AdGuard на устройствах Xiaomi Вы должны обратить внимание на раздел "Батарея" и "Разрешения" в настройках.

- Нажмите на *кнопку-меню фоновых приложений* и смахните окно приложения AdGuard вниз, чтобы сделать опции видимыми (как показано на снимке экрана):

<img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/Xiaomi%20Recent%20Tasks.png" width="300">

- Нажмите на значок *"замочка"*. Это не позволит системе автоматически закрыть AdGuard.

<img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/Xiaomi%20locked%20app.png" width="300">

- Перейдите в раздел *"Батарея и производительность"*

- Выберите  *"Выбрать приложение"*

- Найдите и выберите в списке умного режима приложение AdGuard

- Перейдите в режим фоновых настроек и выберите пункт *"Без ограничений"*:


<img src ="https://cloud.githubusercontent.com/assets/8577547/19349402/78d3a9a8-915b-11e6-8c7e-580b3d278433.png" width="300">

- Перейдите в раздел *"Разрешения"*

- Выберите пункт *"Автозапуск"*

- Убедитесь, что функция автозапуска включена для AdGuard:

<img src="https://cloud.githubusercontent.com/assets/8577547/19349511/07b27d2a-915c-11e6-9759-9703df55e36c.png" width="300">

<a id="Samsung"></a>

## Samsung

Для устройств Samsung нет особой необходимости в настройке фоновой работы, но если Вы столкнулись с тем, что приложение закрывается или исчезает из меню недавних задач через некоторое время, сделайте следующее:

- Нажмите кнопку вызова фоновых приложений, коснитесь значка дополнительных настроек. Он должен выглядеть так:
 
 <img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/Samsung%20Options.png" width="300">

 - Нажмите на *"Закрепить приложения"*:
 
 <img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/SamsungLockApps.png" width="300">
 
 - Нажмите на значок *"замочка"*
 
 <img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/SamsungLock.png" width="300">
 
 <a id="Huawei"></a>
 
 ## Huawei
 
 Устройства Huawei наиболее легки в настройке, достаточно выполнить два шага для того, что бы закрепить приложение в фоновом режиме.
 
- Нажмите на кнопку вызова фоновых приложений:
  
  <img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/HUAWEIRECENTAPPS.jpg" width="300">
  
- Нажмите на значок *"замочка"*
  
   <img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/HUAWEILOCK.jpg" width="300">
   
   <a id="Oneplus"></a> 
 ## Oneplus
В OxygenOS встроен внутренний функционал для очистки кэша и оперативной памяти для экономии заряда. Кроме того, OxygenOS может закрыть приложение, если вы его не используете некоторое время. Чтобы исправить это, выполните следующие действия:
 
- Перейдите в настройки
 
- Батарея > Оптимизация батареи
 
- Найдите приложение AdGuard
 
- Нажмите на него и выберите опцию *«Не оптимизировать»*
 
- Нажмите «Готово», чтобы сохранить
 
- Нажмите на кнопку вызова фоновых приложений, затем заблокируйте приложение AdGuard нажав на значок *"замочка"* (как показано на скриншоте):

<img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/05.android/06.solving-problems/09.background-work/Images/Oneplus.png?raw=true" width="300">

<a id="Google"></a>
## Android stock devices

Android на заводкой прошивке не конфликтует с фоновыми процессами, но если вы все же столкнулись с проблемой фоновой работы, то необходимо включить режим «Всегда в VPN».

 - Перейдите в раздел Настройки - Сеть и Интернет
 
 <img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/05.android/06.solving-problems/09.background-work/Images/Nexus%20Network%20&%20Internet.png?raw=true" width="300">

 - Откройте режим VPN и выберите AdGuard
 
 <img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/05.android/06.solving-problems/09.background-work/Images/NexusVPN.png?raw=true" width="300">
 
 - Выберите пункт "Постоянная VPN" 
 
 <img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/05.android/06.solving-problems/09.background-work/Images/NexusAlwaysonVPN.png?raw=true" width="300">
