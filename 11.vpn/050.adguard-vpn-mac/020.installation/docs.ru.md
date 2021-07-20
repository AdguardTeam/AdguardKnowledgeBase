---
title: Установка и удаление AdGuard VPN для Mac
published: true
taxonomy:
    category:
        - docs
---
* [Системные требования](#requirements)
* [Установка программы](#install)
* [Удаление программы](#uninstall)
  * [Продвинутое удаление](#advanced-uninstall)

<a id="requirements"></a>

## Системные требования

**Версия операционной системы**: macOS 10.12 (64 bit) или более поздняя

**Объём оперативной памяти**: от 2 Гб

**Свободное пространство на диске**: 120 Мбайт

<a id="install"></a>

## Установка программы

1. Для того, чтобы установить AdGuard VPN для Mac, просто перейдите по [этой ссылке](https://agrd.io/mac_vpn) или откройте браузер, напишите в адресной строке *adguard-vpn.com* и на открывшейся странице нажмите «Попробуйте бесплатно».

<img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru.png" style="max-width: 350px; ">

2. Дождитесь окончания загрузки файла *AdGuardVPN.dmg* и откройте его в папке «Загрузки».

3. Дождитесь, пока откроется окно программы установки. В нём дважды нажмите на иконку.

<img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png" style="max-width: 150px; ">

4. При первом запуске AdGuard VPN операционная система покажет на экране предупреждение о том, что это приложение загружено из интернета. Нажмите *Открыть*.

5. Далее нажмите *Продолжить* и *Установить*.

<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-2.png" style=" max-width: 320px;">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-3.png" style=" max-width: 350px;">
     </div>
</div>

6. Подождите, пока установщик загрузит необходимые файлы.

AdGuard VPN для Mac установлен!

<a id="uninstall"></a>

## Удаление программы

### Стандартное удаление

Чтобы удалить AdGuard VPN для Mac, выполните два простых шага:

1. Откройте «Finder» и в нём перейдите в раздел «Программы».

2. Выберите в списке *AdGuard VPN*, кликните по нему правой кнопкой мыши и нажмите *Переместить в корзину*.

<img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-uninstall-1-ru.png" style="max-width: 350px; ">

<a id="advanced-uninstall"></a>

### Продвинутое удаление

Иногда в результате неправильного удаления или в других редких случаях стандартного удаления может оказаться недостаточно. Тогда служба поддержки может попросить вас произвести продвинутое удаление, чтобы полностью удалить AdGuard VPN с вашего Mac. Для этого выполните следующие шаги:

1. Выполните действия, описаннные в разделе [«Стандартное удаление»](#uninstall).

2. Откройте «Finder» и в поиске введите `Связка ключей`.

<img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-key-chain-ru.png" style="max-width: 350px; ">

3. Нажмите на значок найденной программы и в ней в поиске введите `com.adguard.mac.vpn`. Если в результатах поиска есть такая запись, удалите её.

4. Вернитесь в «Finder» и в поиске введите `Терминал`.

<img src="https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-terminal-ru.png" style="max-width: 350px; ">

5. Откройте найденную программу и введите команду — `defaults delete com.adguard.mac.vpn`.

6. Нажмите *Пробел* и введите ещё одну команду — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN полностью удалён с вашего Mac.

Подробнее об AdGuard VPN для Mac вы можете узнать в [этой статье](https://kb.adguard.com/ru/vpn/adguard-vpn-mac/overview).