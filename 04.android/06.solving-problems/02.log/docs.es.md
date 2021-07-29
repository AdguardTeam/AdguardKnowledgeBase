---
title: 'Collecting a log on AdGuard for Android'
taxonomy:
    category:
        - docs
visible: true
---

* [¿Cómo recolectar el registro de depuración (log debug)?](#debug)

* [¿Cómo recolectar el registro (log) de las peticiones web?](#web)

Algunas veces, para entender el problema y solucionarlo, necesitamos recoger los **archivos de registro (log)**, o **logs**. Básicamente, estos archivos contienen información acerca dle programa y su trabajo.

<a id="debug"></a>

#### Recolectando el registro de depuración

Para recolectar el registro de **depuración** y enviárnoslo necesita seguir los siguientes pasos:

1. Abra "AdGuard" y diríjase a configuración.

2. Seleccione "Avanzado" en el menú de la izquierda.

3. Establezca "Nivel de registro" en "Registrar todo". Es mejor cerrar todas las aplicaciones en segundo plano que no se relacionan con el problema a registrar.

4. Reproduzca el problema y establezca el nivel de registro de nuevo a "Predeterminado". Fíjese en la hora exacta en la que ocurrió.

5. Envíenos un mensaje desde la aplicación seleccionando "Enviar Retroalimentación" (Feedback) en el menú. No olvide chequear la casilla de verificación "Enviar información detallada del sistema" bajo el campo de texto e incluir la marca de tiempo del paso 4 dentro del mensaje.

Como alternativa, puede exportar los registros (junto con el archivo *state.txt* que contiene la información del sistema e información acerca de la configuración de AdGuard) directamente a un archivo local. Puede ser conveniente, por ejemplo, si está teniendo una conversación con un desarrollador en [GitHub](https://github.com/Adguardteam/), [el foro](https://forum.adguard.com/) u otra plataforma.

Para exportar los registros y la información del sistema a un archivo, diríjase a "Configuración — Avanzado" y presione en "Exportar registros e información del sistema". Seleccione la carpeta de destino y presione en "Guardar".

<a id="web"></a>

#### Recolectando el registro de peticiones web

Para recolectar el registro de **peticiones web** y enviárnoslo necesita seguir los siguientes pasos:

1. Abra AdGuard y diríjase a "Configuración".

2. Seleccione "Avanzado" en el menú de la izquierda.

3. Establezca "Nivel de registro" en "Registrar peticiones web". Es mejor cerrar todas las aplicaciones en segundo plano que no se relacionan con el problema a registrar.

4. Reproduzca el problema y establezca el nivel de registro de nuevo a "Predeterminado". Fíjese en la hora exacta en la que ocurrió.

5. Envíenos un mensaje desde la aplicación seleccionando "Enviar Retroalimentación" (Feedback) en el menú. No olvide chequear la casilla de verificación "Enviar información detallada del sistema" bajo el campo de texto e incluir la marca de tiempo del paso 4 dentro del mensaje.

Como alternativa, puede exportar los registros (junto con el archivo *state.txt* que contiene la información del sistema e información acerca de la configuración de AdGuard) directamente a un archivo local. Puede ser conveniente, por ejemplo, si está teniendo una conversación con un desarrollador en [GitHub](https://github.com/Adguardteam/), [el foro](https://forum.adguard.com/) u otra plataforma.

Para exportar los registros y la información del sistema a un archivo, diríjase a "Configuración — Avanzado" y presione en "Exportar registros e información del sistema". Seleccione la carpeta de destino y presione en "Guardar".
<br>
<br>
<br>
<br>
<br>
