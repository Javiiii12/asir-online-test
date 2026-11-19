// data/sri.js
// Módulo: Servicios de Red e Internet (2º ASIR)
// Nota: la Unidad de Trabajo 1 está pendiente de que el profesor habilite sus tests.

export const questionsSRI = {
    "Unidad de Trabajo 2.- Servicios de nombres de dominio": {
        "Test 1": [
            {
                question: "El comando de Linux que se puede usar en modo interactivo para enviar consultas DNS a servidores DNS es _______.",
                options: [
                    "nslookup",
                    "dig",
                    "host",
                    "ping"
                ],
                correct: 0,
                explanation: "nslookup abre una consola interactiva al ejecutarse sin argumentos, lo que permite lanzar varias consultas seguidas y cambiar el servidor DNS sobre la marcha. dig y host están pensados para consultas directas de una sola línea."
            },
            {
                question: "Si el nombre DNS de un equipo es \"dominio.pc.net\", el hostname de ese nombre es:",
                options: [
                    "\"dominio.pc\".",
                    "\"dominio\".",
                    "\"pc.net\".",
                    "\"net\"."
                ],
                correct: 1,
                explanation: "En un FQDN, la etiqueta situada más a la izquierda (antes del primer punto) identifica al equipo concreto (hostname); el resto, pc.net, es el dominio al que pertenece. Aquí el hostname es «dominio»."
            },
            {
                question: "En el módulo bind de la herramienta webmin, cuando estamos editando registros de zona, no se pueden usar nombres relativos para los equipos. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Webmin admite nombres relativos (por ejemplo servidor1) y les añade automáticamente el nombre de la zona al guardar. Solo se exige el punto final (.) cuando se escribe un nombre completo o absoluto (FQDN)."
            },
            {
                question: "En un cliente DNS, el resolutor de nombres consulta primero:",
                options: [
                    "Al primer servidor DNS.",
                    "El archivo local host.",
                    "Al primer servidor DNS primario.",
                    "La caché DNS."
                ],
                correct: 3,
                explanation: "El orden habitual de resolución en un cliente es: caché DNS local en memoria → fichero local hosts → servidor DNS configurado. Por eso se consulta primero la caché."
            },
            {
                question: "Un servidor DNS reenviador es:",
                options: [
                    "Cualquiera de los 13 servidores raíz al que los servidores DNS solicitan en primer lugar la resolución de nombres DNS de Internet.",
                    "Un servidor DNS que delega la administración de los nombres de un subdominio a otro servidor DNS.",
                    "Un servidor DNS primario que redirige una consulta de un nombre externo al dominio hacia otro servidor DNS.",
                    "Un servidor dns que ha sido designado por otros servidores DNS para que se resuelvan nombres fuera del dominio en el que se encuentran."
                ],
                correct: 3,
                explanation: "Un reenviador (forwarder) es un servidor DNS externo o superior al que otros servidores locales delegan las peticiones de nombres que no pertenecen a sus propias zonas ni están en su caché."
            },
            {
                question: "Una resolución que obtiene un nombre DNS de un equipo a partir de su dirección IP se dice que es una resolución _______.",
                options: [
                    "Inversa",
                    "Directa",
                    "Recursiva",
                    "Iterativa"
                ],
                correct: 0,
                explanation: "La resolución inversa traduce IP → nombre mediante registros PTR en las zonas in-addr.arpa o ip6.arpa. La directiva opuesta (nombre → IP) usa registros A o AAAA."
            },
            {
                question: "Para declarar que un servidor DNS bind se va a utilizar como servidor DNS reenviador únicamente el servidor con dirección IP 195.235.113.3 hay que escribir en el archivo de configuración global del servicio la directiva:",
                options: [
                    "forwarders {195.235.113.3 };",
                    "forward {195.235.113.3};",
                    "forward 195.235.113.3;",
                    "forwarders {195.235.113.3; };"
                ],
                correct: 3,
                explanation: "La sintaxis de BIND (named.conf.options) exige la directiva en plural (forwarders) y un punto y coma (;) tanto al final de cada IP dentro de las llaves como tras el cierre del bloque: forwarders { 195.235.113.3; };."
            },
            {
                question: "¿Cuál de los siguientes no es un tipo de registro de recursos?",
                options: [
                    "TXT.",
                    "AAAA.",
                    "ALIAS.",
                    "SOA."
                ],
                correct: 2,
                explanation: "TXT, AAAA y SOA son tipos de registro de recursos oficiales definidos en las RFC del estándar DNS. Los alias se declaran con registros CNAME; ALIAS es una funcionalidad propia de algunos proveedores DNS en la nube, no un registro estándar."
            },
            {
                question: "En el módulo de configuración bind de la herramienta gráfica webmin se puede establecer que se creen automáticamente los registros PTR de resolución inversa cuando se están añadiendo registros tipo A. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. Al dar de alta un registro A, el módulo BIND de Webmin ofrece una casilla para crear o actualizar automáticamente el PTR correspondiente en la zona inversa, siempre que dicha zona esté creada previamente."
            },
            {
                question: "Un servidor DNS que tiene una copia de la zona y en el que no se puede editar la zona es un servidor:",
                options: [
                    "Caché.",
                    "Secundario.",
                    "Primario.",
                    "Reenviador."
                ],
                correct: 1,
                explanation: "El servidor secundario (o esclavo) obtiene una copia de solo lectura de los datos de la zona desde el primario mediante una transferencia de zona (AXFR/IXFR), por lo que no permite modificar los registros directamente en él."
            }
        ],
        "Test 2": [
            {
                question: "Si hemos registrado un dominio, tenemos el servidor DNS para ese dominio en nuestra red y nuestro router tiene una IP dinámica, debemos contratar en alguna compañía de Internet un servicio que se llama:",
                options: [
                    "DynDNS.",
                    "DDNS.",
                    "NO-IP.",
                    "Dyn-DNS."
                ],
                correct: 1,
                explanation: "DDNS (Dynamic DNS o DNS dinámico) es el servicio genérico que actualiza automáticamente la IP pública dinámica asociada a un nombre de dominio. DynDNS y No-IP son proveedores comerciales concretos que lo ofrecen, no el nombre del servicio."
            },
            {
                question: "Un dominio de primer nivel de tipo ccTLD:",
                options: [
                    "Integra dominios que pertenecen a un país.",
                    "Tiene un nombre formado por dos o más letras.",
                    "Integra dominios que ofrecen sus servicios en un determinado idioma.",
                    "Integra dominios con objetivos comerciales."
                ],
                correct: 0,
                explanation: "ccTLD (country code Top-Level Domain) son los dominios de nivel superior geográficos asociados a un país o territorio (.es, .fr, .de), formados por exactamente DOS letras según ISO 3166-1. La b dice «dos o más», por eso no es la definición correcta."
            },
            {
                question: "A un nombre DNS de un equipo que representa el nombre completo del equipo dentro del espacio de nombres de dominio, se le conoce con las siglas _______.",
                options: [
                    "FQDN",
                    "FQDNs",
                    "DNS",
                    "DDNS"
                ],
                correct: 0,
                explanation: "FQDN (Fully Qualified Domain Name) es la ruta completa de un equipo en la jerarquía DNS: hostname más todos los dominios superiores hasta la raíz (por ejemplo pc1.aula.org.). Nota: en el cuestionario original era respuesta corta; aquí se ofrece como opción múltiple."
            },
            {
                question: "Para especificar en la zona DNS \"aula.org\" que el ordenador \"info\" es un servidor de correo, hay que añadir en la zona el registro:",
                options: [
                    "\"info IN MX 0 aula.org.\"",
                    "\"aula.org . IN MX 0 info.aula.org.\"",
                    "\"info.aula.org. IN MX 0 1 aula.org.\"",
                    "\" info.aula.org IN MX 0 1 aula.org.\""
                ],
                correct: 1,
                explanation: "Un MX sigue <dominio_destino> IN MX <prioridad> <servidor_correo>. La sintaxis real es aula.org. IN MX 0 info.aula.org. (la opción b de la plataforma incluye un espacio tipográfico antes del primer punto). La a invierte origen y destino; c y d añaden dos prioridades (0 1) y están mal formadas."
            },
            {
                question: "En Linux Debian/Ubuntu, el archivo de configuración del servicio bind llamado named.conf incluye el contenido de varios archivos. De esos archivos, el dedicado a que un administrador declare nuevas zonas para el servidor se llama:",
                options: [
                    "named.conf.local.",
                    "named.conf.options.",
                    "named.conf.default.",
                    "named.conf.zones."
                ],
                correct: 0,
                explanation: "En Debian/Ubuntu (/etc/bind/) named.conf se reparte en named.conf.options (parámetros globales), named.conf.default-zones (zonas predeterminadas como localhost y raíz) y named.conf.local, reservado para que el administrador defina sus propias zonas directas e inversas."
            },
            {
                question: "En un proceso de resolución iterativa, un servidor DNS envía una consulta a uno de los servidores raíz y este le devuelve información sobre los servidores TLD que deben resolver la consulta a continuación. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. En una consulta iterativa el servidor consultado no realiza la búsqueda completa, sino que devuelve la mejor referencia de la que dispone: un servidor raíz responde con las direcciones de los servidores TLD para que el resolver local siga preguntando paso a paso."
            },
            {
                question: "En Internet, todas las resoluciones inversas de cualquier tipo de dirección IP se resuelven dado el dominio \"in-addr.arpa.\". ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. in-addr.arpa. se emplea exclusivamente para la resolución inversa de direcciones IPv4; para IPv6 existe un espacio de nombres distinto: ip6.arpa."
            },
            {
                question: "En el módulo bind de la herramienta webmin, el nombre que se usa para indicar una zona que se encarga de resolver nombres es:",
                options: [
                    "Reenvío.",
                    "Directa.",
                    "Inversa.",
                    "Resolución directa."
                ],
                correct: 0,
                explanation: "En la traducción al español de Webmin (Servidor DNS BIND → Crear zona maestra), «Forward (Names to Addresses)» aparece literalmente como Reenvío (Nombres a Direcciones), frente a Inversa (Direcciones a Nombres). Conceptualmente es la zona directa, pero la interfaz la denomina Reenvío."
            },
            {
                question: "Para especificar en la zona DNS \"aula,org\" que se resuelva el nombre del equipo \"pc1\" perteneciente a la zona con la dirección IP 192.168.7.2, hay que añadir el registro:",
                options: [
                    "\"pc1.aula.org IN A 192.168.7.2\"",
                    "\"pc1 IN A 192.168.7.2\"",
                    "\"pc1. IN A 192.168.7.2\"",
                    "\"pc1.aula.org. IN A 192.168.7.2.\""
                ],
                correct: 1,
                explanation: "Al escribir un nombre relativo sin punto final (pc1), BIND le añade automáticamente el origen de la zona (aula.org.), formando pc1.aula.org. La a duplicaría el dominio por faltarle el punto final, la c trataría pc1. como dominio de primer nivel y la d tiene un punto indebido tras la IPv4. Nota: el enunciado de la plataforma dice «aula,org» por errata."
            },
            {
                question: "Para obtener los servidores NS del dominio ejemplo.com hay que ejecutar:",
                options: [
                    "dig ejemplo.com NS",
                    "dig ns ejemplo.com",
                    "dig ejemplo.com ns",
                    "dig ejemplo.com"
                ],
                correct: 0,
                explanation: "La sintaxis de dig es dig <nombre_dominio> <TIPO_REGISTRO>: primero el dominio y después el tipo de registro, por convención en mayúsculas (NS). En la práctica dig no distingue mayúsculas en el tipo, pero «dig ejemplo.com NS» es la forma canónica."
            }
        ],
        "Test 3": [
            {
                question: "En la declaración de una zona de resolución inversa para direcciones IP pertenecientes a la dirección de red 170.16.0.0/16 el nombre de la zona será:",
                options: [
                    "170.16.0.in-addr.arpa.",
                    "0.0.16.170.in-addr.arpa.",
                    "0.16.170.in-addr.arpa.",
                    "16.170.in-addr.arpa."
                ],
                correct: 3,
                explanation: "Con /16 los dos primeros octetos (170.16) son la parte de red. Para la zona inversa se invierte el orden de esos octetos y se añade el sufijo in-addr.arpa.: 16.170.in-addr.arpa.. Las opciones con más octetos corresponderían a máscaras /24 o /32."
            },
            {
                question: "El servicio DNS se comunica con los clientes DNS usando el puerto:",
                options: [
                    "UDP 53.",
                    "TCP 67.",
                    "UDP 67.",
                    "TCP 25."
                ],
                correct: 0,
                explanation: "Las consultas habituales cliente → servidor DNS usan UDP 53 por su rapidez y baja sobrecarga; TCP 53 se reserva para transferencias de zona y respuestas que superan el tamaño estándar. El puerto 67 es DHCP y el 25 es SMTP."
            },
            {
                question: "En los sistemas Linux se establecen los servidores DNS utilizados por un equipo para que se encarguen de la resolución de los nombres en el archivo /etc/resolv.conf. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. /etc/resolv.conf contiene las directivas nameserver seguidas de las IPs de los servidores DNS que el resolutor del sistema consultará para traducir nombres de dominio."
            },
            {
                question: "Cuando tenemos en nuestra red un servidor DNS que tienen activado DDNS, la actualización de la zona cuando un equipo de la red recibe por DHCP una nueva IP es solicitada por:",
                options: [
                    "El servidor DNS.",
                    "El cliente DHCP.",
                    "El servidor DHCP.",
                    "El cliente DNS del equipo que recibió la IP."
                ],
                correct: 3,
                explanation: "En el esquema estándar de DNS dinámico (DDNS), es el servicio cliente DNS del propio equipo que recibió la IP quien solicita directamente al servidor DNS la actualización de su registro A/AAAA. Pregunta corregida: ni el servidor DHCP ni el servidor DNS piden el cambio."
            },
            {
                question: "En un archivo de zona, para indicar que la zona es secundaria, se utiliza la directiva:",
                options: [
                    "type slave.",
                    "type master.",
                    "type secondary.",
                    "type hint."
                ],
                correct: 0,
                explanation: "En BIND (named.conf.local) se declara type slave; para una zona secundaria, frente a type master; para la primaria y type hint; para las zonas raíz. «type secondary» no existe como directiva."
            },
            {
                question: "El tipo de registro de recursos de una zona que sirve para declarar que un equipo es servidor DNS en la zona se llama _______.",
                options: [
                    "NS",
                    "MX",
                    "A",
                    "SOA"
                ],
                correct: 0,
                explanation: "El registro NS (Name Server) especifica qué servidores de nombres tienen autoridad para gestionar y responder consultas sobre una zona. Nota: en el cuestionario original era respuesta corta; aquí se ofrece como opción múltiple."
            },
            {
                question: "Una zona secundaria sólo la podemos editar en el servidor secundario cuando está apagado o detenido el servidor primario. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Una zona secundaria es SIEMPRE de solo lectura en el secundario: nunca puede editarse directamente en él, esté el primario encendido, apagado o detenido. Sus datos se actualizan exclusivamente mediante transferencias de zona desde el primario. Pregunta corregida."
            },
            {
                question: "Para detener el servicio DNS bind en sistemas Linux Debian/Ubuntu, debes ejecutar el comando _______.",
                options: [
                    "systemctl stop bind9",
                    "service bind9 stop",
                    "systemctl stop named",
                    "service dns stop"
                ],
                correct: 0,
                explanation: "La respuesta esperada es systemctl stop bind9 (systemd, Debian/Ubuntu modernos); en temarios previos a systemd también se admite /etc/init.d/bind9 stop. Ojo: «service bind9 stop» NO fue dado por válido en Moodle porque el corrector de respuesta corta compara cadenas literalmente. Pregunta corregida."
            },
            {
                question: "Una transferencia de zona entre un servidor primario y otro secundario DNS se produce:",
                options: [
                    "Cuando lo solicita el secundario.",
                    "Cada vez que en el secundario se edita la zona.",
                    "Siempre que lo solicite el primario.",
                    "Cuando se hace alguna modificación en la zona."
                ],
                correct: 0,
                explanation: "La transferencia de zona la inicia y solicita siempre el servidor secundario: periódicamente al vencer el temporizador Refresh del registro SOA o tras recibir un aviso NOTIFY del primario. No la provoca una edición en el secundario (es de solo lectura) ni una orden directa del primario."
            },
            {
                question: "Un registro CNAME contiene en propietario:",
                options: [
                    "El nombre del dominio.",
                    "El nombre real de un equipo.",
                    "El nombre alias de un equipo.",
                    "El nombre de la zona."
                ],
                correct: 2,
                explanation: "La sintaxis es alias IN CNAME nombre_real: el campo propietario (a la izquierda) contiene siempre el alias que apunta al nombre canónico o real del equipo."
            }
        ]
    }
};
