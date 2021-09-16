---
title: FAQ
taxonomy:
    category:
        - docs
---
* [¿Qué es AdGuard?](#wtf)
* [¿Cómo funciona la protección de AdGuard?](#howitworks)
* [¿Necesito acceso root?](#root)
* [¿Cómo configurar manualmente un proxy HTTP local?](#http)
* [¿Cómo utilizar una VPN de terceros junto con AdGuard?](#vpn)
* [¿Qué restricciones tiene el modo VPN?](#restrictions)
* [Cuando se me pregunta para habilitar la VPN, no puedo chequear "Confío" ("I trust"). ¿Por qué?](#trust)
* [¿Por qué recibo el mensaje "VPN no es soportada"?](#supp)
* [¿Por qué las estadísticas de Android muestran que AdGuard consume más trafico que el que dice?](#traf)
* [¿Por qué el anclaje a red Wi-Fi y USB no funciona con AdGuard?](#usb)
* [¿Cuáles navegadores no están soportados por AdGuard?](#browsers)
* [¿Por qué una VPN no puede ser iniciada en Android 5.0?](#a5)
* [¿Cómo resolver asuntos de compatibilidad con otras apps?](#apps)
* [¿Por qué la función del cortafuegos es parcial and y las estadísticas de datos no son tan precisas en el modo proxy?](#prxy)
* [Entonces, ¿el modo proxy es malo?](#badproxy)
* [¿Por qué algunas apps están excluidas?](#excluded)
* [¿Cómo funciona el filtrado DNS?](#DNS)
* [¿Cómo funciona el filtrado HTTPS?](#https)
* [Muy bien, ¿cómo puedo activarlo?](#how)
* [¿Cómo remover un certificado del sistema?](#remove)
* [¿Cuál es la diferencia entre los modos de filtrado de AdGuard?](#methods)
* [¿Cómo gestionar las notificaciones de AdGuard?](#notifications)

<a id="wtf"></a>

## ¿Qué es AdGuard?

 AdGuard es un notable filtro de internet que le protege no los molestos anuncios, sitios web maliciosos y de phishing, rastreo online y mucho más. AdGuard maneja todo tipo de anuncios de Internet, aumenta la velocidad en la carga de sitios web, ahorra ancho de banda e incrementa la protección de su dispositivo ante posibles amenazas.
 
 
## ¿Cómo funciona la protección de AdGuard?

AdGuard filtra el tráfico de su navegador bloqueando las peticiones a sitio maliciosos y de phishing y removiendo anuncios intrusivos. AdGuard puede usar dos modos de filtrado de tráfico:

1. Modo de VPN local.
2. Modo de proxy HTTP local.

### Modo de VPN local

Si está usando este modo, AdGuard no necesita privilegios ROOT para realizar el filtrado. Al mismo tiempo, un servidor VPN se encuentra en su dispositivo, así que no hay necesidad de pasar su tráfico a través de un servidor remoto para filtrarlo.

### Modo de proxy HTTP local.

En esto modo AdGuard lanza un servidor de proxy HTTP local en su dispositivo. Este modo es recomendado si su dispositivo está rooteado. De otra manera, necesitará el ajuste manual de un proxy HTTP para usar este modo, y el filtrado en redes móviles (Edge/3G/4G) será imposible.

<a id="root"></a>
## ¿Necesito acceso root?

A diferencia de la mayoría de las aplicaciones que se dedican a filtrar el tráfico, AdGuard no requiere acceso ROOT a su dispositivo. En el modo de servidor VPN local, se filtrará todo su tráfico y no se necesita acceso ROOT.

<a id="http"></a>
## ¿Cómo configurar manualmente un proxy HTTP local?

Si su dispositivo no soporta configuración automática de proxy, entonces usted puede configurar un servidor proxy manualmente, usando las siguientes instrucciones:

En la configuración de AdGuard seleccione el modo *Proxy HTTP local* y el modo de configuración del proxy - *Manual*.

Vaya a la configuración de su teléfono y elija Wi-Fi. Una lista de redes inalámbricas se abrirá.

Si el dispositivo no estaba conectado, conéctelo a la red Wi-Fi que necesite. Abra la configuración de red presionando la línea con esta red. Aparecerá el siguiente menú de la red Wi-Fi seleccionada.

Seleccione *Modificar red*. En la nueva ventana seleccione *Mostrar opciones avanzadas*.

En *Proxy* seleccione *Manual*.

Ingrese *127.0.0.1* como nombre del host del proxy e ingrese el puerto que se muestra en la configuración del proxy en la misma aplicación de AdGuard (puerto *8080* es usado en la configuración de AdGuard por defecto).

Un servidor proxy ha sido configurado. Ahora todo el tráfico de Wi-Fi desde su dispositivo será filtrado.

<a id="vpn"></a>
## ¿Cómo utilizar una VPN de terceros junto con AdGuard?

Si usted ya estaba usando una VPN para otros propósitos, para que AdGuard también funcione, puede cambiar esto en la configuración del *modo de servidor de proxy HTTP*. El modo de filtrado puede ser cambiado en los *ajustes avanzados*.

En este modo, hay dos formas de configurar un proxy: *automático* y *manual*.

### Modo automático

En el modo automático, la habilitación del filtrado no requiere ninguna acción por parte de usted. El filtrado trabajará tanto en redes móviles como en Wi-Fi. El problema es que el modo automático solo funciona en dispositivos rooteados.

### Modo manual

Este enfoque puede que no funcione en algunas situaciones. Esto depende de su firmware y de la aplicación VPN actual. En algunos casos el tráfico evita un proxy configurado manualmente.

En el modo manual, el filtrado solo trabajará en redes Wi-Fi. Usted tendrá que configurarlo manualmente el uso de proxy para cada red Wi-Fi.

<a id="restrictions"></a>
## ¿Qué restricciones tiene el modo VPN?

AdGuard filtra el tráfico utilizando un servidor VPN local por defecto. En este modo hay algunas restricciones.

* En el modo VPN local, AdGuard no correrá automáticamente después de encender el teléfono, ya que esto está bloqueado por el sistema operativo Android.

* No puede ser usado a la vez que otras aplicaciones VPN.

<a id="trust"></a>
## Cuando se me pregunta para habilitar la VPN, no puedo chequear "Confío" ("I trust"). ¿Por qué?

Si usted está usando una aplicación que mejora su pantalla (por ejemplo, un modo oscuro o amarillento), necesitará deshabilitar temporalmente esa aplicación. Android previene su selección por razones de seguridad.

<a id="supp"></a>
## ¿Por qué recibo el mensaje "VPN no es soportada"?

Este cuadro de diálogo aparece cuando AdGuard falla al crear una conexión VPN en el dispositivo. Hasta ahora, hemos identificado las siguientes situaciones donde esto puede ocurrir:

**1. Firmware personalizado**
 
 Si usted está usando un firmware personalizado al que le falta un módulo tun.ko del kernel, necesario para el apropiado soporte de una VPN en Android.
 
 **2. Configuración de Firmware incorrecta**

El firmware e nel dispositivo no ha sido configurado correctamente. Se el fabricante está al tanto del problema, el asunto puede ser arreglado en actualizaciones futuras del firmware.

### Restablecer soporte VPN

Si su dispositivo tiene acceso ROOT usted puede restablecer el módulo VPN (tun.ko) usando una aplicación especial de **instalador de tun.ko**.

### Cambiar el modo de filtrado

Puede cambiar el modo de filtrado a *proxy HTTP local* en la configuración extendida de AdGuard.

<a id="traf"></a>
## ¿Por qué las estadísticas de Android muestran que AdGuard consume más trafico que el que dice?

En la página de uso de datos de Android o en su aplicación favorita de rastreo de uso de tráfico, puede que vea la indicación de que AdGuard ha consumido todos o la mayoría de su tráfico móvil. No se confunda, esto no se debe a AdGuard, sino a sus aplicaciones. Hay un asunto conocido con Android cuando una VPN o Proxy es establecido, con todo el tráfico de todas las aplicaciones asignado a AdGuard.

Esperamos que esto clarifique qué es lo que pasa.

<a id="usb"></a>
## ¿Por qué el anclaje a red Wi-Fi y USB no funciona con AdGuard?

Android no permite que las conexiones ancladas pasen a través de la VPN. Esto es una regla de Android que aplica a todas las aplicaciones VPN que corren en dispositivos no rooteados. Esto se hace por seguridad, por la preocupación de que si un individuo malintencionado fuera capaz de obtener acceso a su conexión, podría aprovecharse de la conexión VPN.

**Soluciones**

1. Deshabilitar AdGuard cuando usted quiera utilizar el anclaje.
2. Si su dispositivo tiene ROOT, puede cambiar al modo de filtrado proxy en vez de usar el modo VPN. Esto lo puede hacer en los ajustes extendidos de AdGuard.

<a id="browsers"></a>
## ¿Cuáles navegadores no están soportados por AdGuard?

En general, AdGuard no soporta navegadores con la opción de comprimir tráfico. El único navegador soportado con esta opción es **Google Chrome**. Podemos filtrar su tráfico incluso si la compresión está activa.

**Opera**

AdGuard puede filtrar el navegador Opera si usted no utiliza el modo **Turbo**. De otra manera el tráfico es comprimido, así que no lo podemos filtrar.

**Opera mini**

El navegador de Opera Mini siempre comprime el tráfico así que AdGuard no puede filtrarlo.

**UC Browser**

AdGuard puede filtrar el navegador UC si el **modo de velocidad** o **Aceleración en la Nube** está deshabilitado. De otra manera, parte del tráfico es comprimido y encriptado, así que no podemos filtrarlo.

**Navegador Puffin**

El navegador Puffin siempre comprime el tráfico, así que AdGuard no puede filtrarlo.

<a id="a5"></a>
## ¿Por qué una VPN no puede ser iniciada en Android 5.0?

Hay dos bugs conocidos de Android 5.0 que pueden romper la puesta en marcha de una VPN. La única solución es reiniciar su dispositivo.

<a id="apps"></a>
## ¿Cómo resolver asuntos de compatibilidad con otras apps?

Esta sección se refiere a aplicaciones de terceros que son conocidas por su incompatibilidad en algún grado con AdGuard. En algunos casos, AdGuard o la aplicación conflictiva puede ser configurada para resolver la incompatibilidad.

### Orbot: Proxy con Tor

**Problema:** *Orbot: Proxy con Tor* es una aplicación VPN y usted no puede tener dos aplicaciones VPN activas a la vez.

**Solución:** configure AdGuard para usar Orbot como un Proxy de salida.

1. Corra Orbot.
2. Abra AdGuard, diríjase a la Configuración - Avanzado.
3. Abra la configuración de Proxy.
4. Utilice las siguientes configuraciones:
Tipo de Proxy: SOCKS4, host: 127.0.0.1, port: 9050.
5. Corra la protección de AdGuard.

### Opera Max

**Problema:** *Opera Max* es una VPN y usted no puede tener dos aplicaciones VPN activas a la vez.

**Solución:** (Acceso ROOT es requerido), cambie el modo de filtrado a *proxy HTTP local* en la configuración avanzada.

<a id="prxy"></a>
## ¿Por qué la función del cortafuegos es parcial and y las estadísticas de datos no son tan precisas en el modo proxy?

Hay muchos tipos de tráfico de datos en Internet: la Web, VoIP, Juegos, VPNs, tráfico UDP (incluidas las peticiones DNS) y más. En el modo VPN, nosotros controlamos cada paquete de datos que proviene de cualquier aplicación, pero en modo proxy controlamos solo un subconjunto del tráfico. Por lo tanto, no podemos garantizar la desactivación total de la conexión para aplicaciones particulares y los números que aparecen en las estadísticas de AdGuard pueden ser inexactos.

<a id="badproxy"></a>
## Entonces, ¿el modo proxy es malo?

No, en absoluto. Si no le importan tanto las estadísticas y el tráfico UDP puede usarlo sin dudarlo.

<a id="excluded"></a>
## ¿Por qué algunas apps están excluidas?

Hay algunos casos en los que algunas aplicaciones necesitan formas muy poco convencionales de comunicarse a través de Internet, o el procedimiento de filtrado está rompiendo alguna funcionalidad de la aplicación. Por lo tanto, algunas aplicaciones necesitan ser excluidas del filtrado. Esperamos que estas medidas sean temporales ya que estamos mejorando constantemente nuestros algoritmos de filtrado y de red.

<a id="DNS"></a>
## ¿Cómo funciona el filtrado DNS?

AdGuard puede filtrar peticiones de resolución de dominio a los servidores del Sistema de Nombres de Dominio, manejarlos localmente, y bloquear las peticiones a sistemas de phishing, maliciosos, anuncios o rastreadores en tales dominios.

El bloqueo se implementa enviando una respuesta especialmente diseñada que redirige todo el tráfico a la interfaz de red local (con la dirección IP 127.0.0.1). 
Entonces el navegador o la aplicación que se intentan conectar a tal dominio intentará conectarse a un servidor en ese dispositivo en particular, y eventualmente obtendrá un error.

P:  Si esta parece la mejor manera de filtrar los anuncios, ¿por qué utilizar otra cosa?

R: Ya que hay muchos sistemas de anuncios que usan los mismos dominios para anuncios y también algunos servicios útiles. El filtrado DNS solo puede ser utilizado para aumentar la velocidad en b proceso de filtrado general y para ahorrar algo de batería.

P: ¿Por qué no puedo solo utilizar el filtrado DNS con el modo proxy HTTP local?

R: Porque necesitamos filtrar todo el tráfico (todos los paquetes de red) enviados desde su dispositivo para el filtrado DNS.  Solo el modo VPN puede lograr tal cosa.

<a id="https"></a>
## ¿Cómo funciona el filtrado HTTPS?

**¿Qué es HTTPS?**

HTTPS es similar a HTTP (Hyper Text Transfer Protocol), pero usando un protocolo de encriptación (llamado SSL/TLS), como se indica por la última letra "S" (seguro). Este protocolo es usado para la transmisión de contenido sensible, como números de tarjetas MasterCard/Visa y datos personales.

**¿Por qué esto debería ser filtrado?**

Ahora más y más sitios, blogs y redes sociales están cambiando a HTTPS. Entonces, siguiendo blogs y sitios web, más y más redes de anuncios están cambiando a HTTPS también, ya que es necesario para mostrar anuncios en los sitios que trabajan sobre HTTPS.

Los siguientes son ejemplos de sitios web populares, donde los anuncios no pueden ser removidos sin utilizar el filtrado HTTPS: youtube.com, facebook.com and twitter.com.

**¿Cómo el funciona el filtrado de tráfico encriptado?**

Si esto fuera fácil, HTTPS no sería seguro. Para filtrar el tráfico seguro, AdGuard creará dos conexiones. Una a un navegador, u otras apps; y otra a un servidor. Es importante que en este caso el navegador "confía" en AdGuard y la conexión es creada. Para este propósito AdGuard genera e instala un certificado root especial en el sistema y, si es necesario, en algunos navegadores como Firefox.

**¿Mi tráfico permanece seguro y encriptado?**

¡Por supuesto! Su conexión al servidor remoto permanece encriptada y segura. Como un navegador AdGuard verifica el certificado del servidor antes de empezar a filtrarlo.

Por defecto, AdGuard no filtra sitios web de servicios financieros y sitios web con importante información personal.

Hay dos modos de filtrado HTTPS:

Filtrar SOLO conexiones a los dominios en la lista negra.

Filtrar TODAS las conexiones EXCEPTO aquellos dominios en la lista blanca. Hemos pre-añadido dominios de instituciones financieras y bancos aquí, y esta lista se actualizará en el futuro.

<a id="how"></a>
## Muy bien, ¿cómo puedo activarlo?

Instale el certificado dentro del almacenamiento de certificados del sistema.

Si usted no tiene una contraseña o patrón de bloqueo, entonces Android requerirá una de las opciones para ser configurado. Esto es un requerimiento de Android.

Reinicie la protección. Si ha hecho todo correctamente, el filtrado HTTPS trabajará como el filtrado usual.

<a id="remove"></a>
## ¿Cómo remover un certificado del sistema?

Diríjase a la configuración de Android -> Seguridad <> Credenciales confiadas
Diríjase a la sección de "Usuario"
Seleccione "AdGuard Personal CA" (puede que sea el único certificado aquí).
En el cuadro de diálogo abierto baje y presione "Remover".

<a id="methods"></a>
## ¿Cuál es la diferencia entre los modos de filtrado de AdGuard?

Hay tres métodos de filtrado de AdGuard:

+ Alta calidad;
+ Alta velocidad;
+ Simplificado.

**Método de alta calidad** puede utilizar todos los [tipos de reglas de filtrado](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters) y puede filtrar todo. Este método permite cambiar el código HTML de una página recortando todos los elementos indeseados incluso antes de que el navegador cargue la página.

El método de filtrado de alta calidad puede incrementar el tiempo de carga de la página, así que es recomendado usarlo solo en dispositivos potentes.

**Método de alta velocidad** puede utilizar todas las reglas guardadas para [el filtrado HTML](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#html-filtering-rules) y filtra todo excepto el contenido de la página. Este método usa las llamadas [reglas de filtrado cosmético](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-rules) las cuales son usadas no para bloquear peticiones de anuncios, sino para cambiar la apariencia de la página. Las reglas cosméticas incluyen añadir algunas reglas de CSS especiales (estilos) las cuales ocultan los anuncios indeseados en una página y enmascara los restos de los elementos eliminados tras el bloqueo, como campos vacíos en el lugar del banner bloqueado, etc.

**Método de filtrado simplificado** puede utilizar solo las [reglas de filtrado básico](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules) y permite bloquear solo peticiones de anuncios.

En contraste con el método de filtrado de alta calidad y el método de alta velocidad, el método simplificado no utiliza reglas de filtrado cosmético.

<a id="notifications"></a>
## ¿Cómo gestionar las notificaciones de AdGuard?

En versiones de Android 8 y más nuevas AdGuard proporciona muchos canales de notificaciones (los cuales también son llamados "categorías"). Con su ayuda usted puede fácilmente manejar las notificaciones de AdGuard en su dispositivo - customizar canales, priorizarlos, deshabilitar notificaciones secundarias, etc. Consigue más instrucciones de cómo hacerlo y aprenda acerca de las opciones que proporcionamos para versiones más antiguas de Android abajo:

### Android 8 y posteriores

AdGuard para Android 8 y posteriores tiene 6 categorías diferentes de notificaciones. Antes de describirlas, veamos la forma en la que usted puede encontrar la configuración apropiada en su dispositivo - *Configuración -> Aplicaciones y Notificaciones -> AdGuard -> Notificaciones de aplicaciones*.

Aparte de esta forma, usted puede conseguir acceso simple y rápido a estos ajustes con un largo clic en cualquier notificación de AdGuard y eligiendo *Todas las categorías*.

Muy bien, está en la sección correcta. Ahora usted puede ver 6 categorías diferentes, las cuales son mostradas en la parte izquierda de la siguiente captura de pantalla:

<img src="https://cdn.adguard.com/public/Adguard/kb/en/Android/Notifications.png" width="950">

Cada categoría incluye cierto tipo de notificación:

+ **Estado de protección** (una notificación permanente con es estado de protección de la aplicación y estadísticas de filtrado);
+ **Estado de licensia** (notificación acerca de cambios en el estado de su licensia);
+ **Actualizaciones** (notificaciones acerca de actualizaciones de nuevas apps y filtros);
+ **Proxy de salida** (una notificación permanente con el estado del proxy de salida);
+ **Firewall** (notificaciones que le permiten manejar el acceso a la red);
+ **Otros** (notificaciones acerca de errores críticos, registros, conflicto con otras apps, etc.).

Todos ellos están habilitados por defecto. Puede customizar los ajustes de cada categoría (mire la parte derecha de la captura de pantalla anterior) - cambie el estado de importancia, seleccione cualquier sonido soportado de notificaciones, seleccione si las notificaciones deben vibrar en su teléfono o no, usted puede deshabilitar las respectivas categorías.

Como se mencionó, también puede elegir el estado de Importancia el cual le permitirá dar a cada categoría de notificación la prioridad necesaria. Por favor mire la captura de pantalla:

<img src="https://cdn.adguard.com/public/Adguard/kb/en/Android/importance.png" width="300">

Por favor tenga en cuenta que desde Android 9 "Importancia" se renombró como "Comportamiento".

Tiene cuatro estados para elegir:

+ **Urgente** (notificaciones harán sonido y aparecerá una ventana emergente en la pantalla);
+ **Alto** (notificaciones harán sonido);
+ **Medio** (notificaciones no harán sonido);
+ **Bajo** (notificaciones no harán sonido y no harán interrupción visual).

Por favor tenga en cuenta: no puede activar la vibración para las notificaciones configuradas en el estado medio o bajo.

Esperamos que estas categorías de notificaciones le ayuden a ordenar todas las notificaciones de AdGuard y permitirle disfrutar del uso de nuestro producto sin distracciones innecesarias.

### Android 7 y anteriores

Para aquellos que tienen dispositivos con Android 7 y anteriores AdGuard también tiene algunas opciones útiles para manejar notificaciones:

Primero, puede abrir la configuración del dispositivo - *configuración -> notificaciones -> AdGuard* o *configuración -> apps -> AdGuard -> Notificaciones* - y active las siguientes opciones si es necesario:

+ **Mostrar silenciosamente** - significa que la notificación no hará sonido, vibración o se asomará a la vista;
+ **En la pantalla bloqueada** - significa que el contenido de las notificaciones se mostrará en la pantalla de bloqueo;
+ **Ignorar no molestar** - esta opción le permite a las notificaciones continuar interrumpiendo cuando el modo de No Molestar está en Solo Prioridad.

O puede deshabilitar todas las notificaciones de AdGuard (que no le recomendamos que haga) eligiendo la opción **"Bloquear todas"**.

Además, usted puede gestionar las notificaciones del estado de protección en la Configuración General de AdGuard (*AdGuard -> Configuración -> General  -> Ícono de notificaciones*).

Aquí puede seleccionar de las opciones:

+ **Ícono predeterminado** (el cual significa que usted no solo verá las notificaciones sino también un ícono de notificación en la parte superior de la pantalla);
+ **Notificaciones sin ícono** (usted verá solo notificaciones sin el ícono);
+ **Ninguna** (no verá notificaciones ni el ícono).

Por favor tenga en cuenta: si el ícono es removido, Android podría detener la función de AdGuard en cualquier momento. Esto es por lo cual no le recomendamos seleccionar la opción "Ninguna". Por favor use "notificación sin ícono" en vez de "Ninguna".
