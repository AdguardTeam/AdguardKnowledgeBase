---
title: 'Как получить файлы HAR'
taxonomy:
    category:
        - docs
visible: true
---

HAR-файлы содержат информацию обо всех отфильтрованных HTTP-запросах.

Иногда анализ этих файлов может потребоваться для блокировки специфической рекламы, которую по каким-либо причинам трудно воспроизвести. 

1. Откройте AdGuard и перейдите в "Настройки" -> "Антибаннер";

2. Вернитесь обратно в "Настройки" и выберите в меню пункт "Расширенные";

3. Перейдите в "Низкоуровневые настройки";

4. Активируйте "pref.har.capture" (потребуется перезапустить защиту);

5. Откройте папку с кэшем приложения и проверьте её на наличие уже имеющихся файлов с расширением .har, обычно они расположены в следующей локации:

 **  /storage/emulated/Android/data/com.adguard.android/cache/har**

   или, в зависимости от устройства:

  **   /sdcard/Android/com.adguard.android/cache/har**

  **   /sdcard/data/Android/com.adguard.android/cache/har**

  **   /sdcard/Android/data/com.adguard.android/cache/har**
  
6. Если такие файлы будут обнаружены - удалите их;

7. Теперь нужно воспроизвести проблему: откройте приложение, используйте его, дождитесь появления рекламы; 

8. Теперь "pref.har.capture" необходимо отключить;

9. Откройте папку с кэшем приложения и найдите файлы с расширением .har, обычно они расположены в следующей локации:

 **  /storage/emulated/Android/data/com.adguard.android/cache/har**

   или, в зависимости от устройства:

  **   /sdcard/Android/com.adguard.android/cache/har**

  **   /sdcard/data/Android/com.adguard.android/cache/har**

  **   /sdcard/Android/data/com.adguard.android/cache/har**
