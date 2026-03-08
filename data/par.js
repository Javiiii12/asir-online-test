// data/par.js
// Módulo: Planificación y Administración de Redes (Estructura Anidada)

export const questionsPAR = {
    "Tema 1: Caracterización de redes": {
        "Test 1": [
            {
                question: "La máscara /16 en notación corta equivale a",
                options: [
                    "00000000.00000000.11111111.11111111",
                    "128.0.0.0 - 191.255.255.255",
                    "255.255.0.0",
                    "Una clase C"
                ],
                correct: 2,
                explanation: "Una máscara /16 significa que los primeros 16 bits son \"1\", lo que equivale a dos octetos completos de 255 (255.255.0.0)."
            },
            {
                question: "Indica la igualdad correcta",
                options: [
                    "Byte = 10 Bit",
                    "Kilobyte = 100 Byte",
                    "Kilobit = 1024 bits",
                    "Kilobit = 1000 bits"
                ],
                correct: 3,
                explanation: "Siguiendo el estándar del SI, el prefijo Kilo equivale a 10^3 (1000)."
            },
            {
                question: "Las normas que debe cumplir una tarjeta de red se tratan en la capa del modelo TCP-IP",
                options: [
                    "Aplicación",
                    "Transporte",
                    "Internet",
                    "Acceso a red"
                ],
                correct: 3,
                explanation: "La capa de Acceso a Red (o Interfaz de Red) es la encargada de los aspectos físicos y del hardware como las tarjetas de red."
            },
            {
                question: "Una trama Ethernet",
                options: [
                    "Es un direccionamiento a nivel internet",
                    "Contiene dos MAC",
                    "Es única a nivel mundial",
                    "Tiene 48 bits"
                ],
                correct: 1,
                explanation: "Una trama Ethernet incluye la dirección MAC de origen y la dirección MAC de destino."
            },
            {
                question: "Las capas del modelo OSI son",
                options: [
                    "Aplicación, Transporte, Internet y Acceso a red",
                    "Aplicación, Transporte, internet y enlace de datos",
                    "Aplicación, Transporte, internet y Red",
                    "Aplicación, Presentación, Sesión, Transporte, Red, Enlace de datos y Físico"
                ],
                correct: 3,
                explanation: "El modelo OSI se define tradicionalmente por estas 7 capas específicas."
            },
            {
                question: "¿Por qué se segmenta la información?",
                options: [
                    "Para ordenarla",
                    "Por el \"divide y vencerás\"",
                    "Para evitar transmitir grandes cantidades de datos que saturen el canal",
                    "Para hacer segmentos potencias de 2"
                ],
                correct: 2,
                explanation: "La segmentación permite que varios usuarios compartan el canal y evita que un solo envío de gran tamaño bloquee la red."
            },
            {
                question: "El número hexadecimal 8 es:",
                options: [
                    "8 en hexadecimal",
                    "8 en hexadecimal y decimal",
                    "en octal, hexadecimal y decimal",
                    "8 en binario, octal, hexadecimal y decimal"
                ],
                correct: 1,
                explanation: "El dígito \"8\" existe y representa el mismo valor tanto en el sistema decimal (base 10) como en el hexadecimal (base 16)."
            },
            {
                question: "¿Cómo afecta el cambio de protocolo de IPv4 a IPv6 a la capa de Acceso a Red?",
                options: [
                    "Hay que cambiar también los protocolos en esta capa",
                    "No afecta",
                    "No solo hay que rediseñar toda la capa sino todo el modelo",
                    "Las MAC deben aumentar su tamaño en bits"
                ],
                correct: 1,
                explanation: "IPv4 e IPv6 operan en la capa de Red (Internet); la capa de Acceso a Red es independiente del protocolo de capa superior que se utilice."
            },
            {
                question: "La IPv6 2001:05F8:0000:ABCD:0000:AB00:00AB:AB00 se puede resumir en:",
                options: [
                    "2001:5F8:0:ABCD:0:AB00:AB:AB00",
                    "2001:5F8::ABCD:0000:AB00:AB:AB00",
                    "2001:5F8::ABCD::AB::AB:AB",
                    "2001:05F8:0000:ABCD:0000:AB00:00AB:AB00"
                ],
                correct: 0,
                explanation: "Se eliminan los ceros a la izquierda de cada segmento y se puede sustituir un grupo de ceros por un solo \"0\". Ésta es una representación simplificada válida."
            },
            {
                question: "Una red pequeña suele conocerse como",
                options: [
                    "WAN",
                    "SAN",
                    "LAN",
                    "MAN"
                ],
                correct: 2,
                explanation: "LAN (Local Area Network) es el término para redes de área local, típicamente de corto alcance como una oficina o un hogar."
            }
        ],
        "Test 2": [
            {
                question: "El número decimal 15 es",
                options: [
                    "10 en binario",
                    "E en hexadecimal",
                    "F en hexadecimal",
                    "1110 en binario"
                ],
                correct: 2,
                explanation: "En el sistema hexadecimal, el 15 se representa con la letra F."
            },
            {
                question: "Indica la igualdad correcta",
                options: [
                    "1 MiB = 1.000.000 bytes",
                    "1 MiB = 1.000.000 bits",
                    "1 MiB = 1.048.576 bytes",
                    "1 MiB = 1.048.576 bits"
                ],
                correct: 2,
                explanation: "El Mebibyte (MiB) es una unidad binaria que equivale exactamente a 2^20 bytes."
            },
            {
                question: "El número binario 1010 equivale a",
                options: [
                    "12 en decimal",
                    "10 en decimal",
                    "A en hexadecimal",
                    "Las respuestas b y c son correctas"
                ],
                correct: 3,
                explanation: "1010 en binario es 8+2=10 en decimal, lo cual se representa como 'A' en hexadecimal."
            },
            {
                question: "La capa del modelo TCP/IP que se encarga del enrutamiento de paquetes es",
                options: [
                    "Acceso a red",
                    "Internet",
                    "Transporte",
                    "Aplicación"
                ],
                correct: 1,
                explanation: "La capa de Internet (donde reside el protocolo IP) es la responsable de determinar la mejor ruta para los datos."
            },
            {
                question: "Una dirección IPv4 consta de",
                options: [
                    "16 bits",
                    "32 bits",
                    "48 bits",
                    "128 bits"
                ],
                correct: 1,
                explanation: "Las direcciones IPv4 están formadas por 4 octetos (4 x 8 = 32 bits)."
            },
            {
                question: "¿Cuál de las siguientes es una dirección MAC válida?",
                options: [
                    "192.168.1.1",
                    "2001:0db8:85a3::8a2e:0370:7334",
                    "00:1A:2B:3C:4D:5E",
                    "FF-FF-FF-FG-FF-FF"
                ],
                correct: 2,
                explanation: "Una dirección MAC tiene 48 bits (6 pares hexadecimales). La opción 'd' es incorrecta porque la 'G' no es un carácter hexadecimal."
            },
            {
                question: "El protocolo encargado de asignar direcciones IP de forma automática es",
                options: [
                    "DNS",
                    "HTTP",
                    "DHCP",
                    "TCP"
                ],
                correct: 2,
                explanation: "DHCP (Dynamic Host Configuration Protocol) permite que los dispositivos obtengan su configuración de red automáticamente."
            },
            {
                question: "La topología de red en la que todos los nodos están conectados a un punto central se llama",
                options: [
                    "Bus",
                    "Anillo",
                    "Estrella",
                    "Malla"
                ],
                correct: 2,
                explanation: "En la topología en estrella, todos los equipos se conectan a un switch o hub central."
            },
            {
                question: "Un Megabyte (MB) equivale a",
                options: [
                    "1024 Kilobits",
                    "8 Megabits",
                    "1000 bits",
                    "1 Mebibyte"
                ],
                correct: 1,
                explanation: "Como 1 Byte = 8 bits, 1 Megabyte equivale a 8 Megabits."
            },
            {
                question: "¿Qué dispositivo opera principalmente en la capa de Acceso a Red (Capa 2 del modelo OSI)?",
                options: [
                    "Router",
                    "Switch",
                    "Hub",
                    "Servidor"
                ],
                correct: 1,
                explanation: "El Switch trabaja con direcciones MAC, situándose en la capa de enlace de datos (Acceso a red en TCP/IP)."
            }
        ],
        "Test 3": [
            {
                question: "El número F hexadecimal es",
                options: [
                    "10 en decimal",
                    "10 en binario",
                    "1111 en binario",
                    "16 en binario"
                ],
                correct: 2,
                explanation: "F en hexadecimal equivale a 15 en decimal, que en binario de 4 bits es 1111 (8+4+2+1)."
            },
            {
                question: "Indica la igualdad correcta",
                options: [
                    "Megabit = 1.048.576 bits",
                    "Megabit = 1.000.000 bytes",
                    "Megabit = 1.000.000 bits",
                    "Megabit = 1.048.576 bytes"
                ],
                correct: 2,
                explanation: "Según el SI, el prefijo Mega indica 10^6 (un millón)."
            },
            {
                question: "La capa más cercana al usuario en el modelo TCP/IP es",
                options: [
                    "Enlace de datos",
                    "Presentación",
                    "Aplicación",
                    "Física"
                ],
                correct: 2,
                explanation: "La capa de aplicación proporciona la interfaz para que los programas de usuario accedan a los servicios de red."
            },
            {
                question: "Marca qué protocolos pertenecen a la capa Aplicación del modelo TCP-IP",
                options: [
                    "DNS",
                    "TCP",
                    "DNS y HTTP",
                    "IP"
                ],
                correct: 2,
                explanation: "DNS y HTTP operan en la capa superior de Aplicación, mientras que TCP es de transporte e IP es de red."
            },
            {
                question: "La tecnología de comunicación que se caracteriza por usar un canal exclusivo es:",
                options: [
                    "Difusión",
                    "Ninguna de las anteriores",
                    "Punto a multipunto",
                    "Punto a punto"
                ],
                correct: 3,
                explanation: "Las conexiones punto a punto establecen un enlace directo y dedicado entre dos nodos."
            },
            {
                question: "Indica la afirmación correcta referente a las capacidades",
                options: [
                    "1 Megabyte es menor que 1 Mebibyte y 1 Kilobit es menor que 1 Kilobyte.",
                    "1 Kilobit es igual a 1 kB",
                    "1 Kilobit es menor que 1 Kilobyte, pero 1 Megabyte es igual que 1 Mebibyte",
                    "1 Megabyte es igual que 1 Mebibyte"
                ],
                correct: 0,
                explanation: "Un MB (10^6) es menor que un MiB (2^20). Un Kilobit (1000 bits) es mucho menor que un Kilobyte (8000 bits)."
            },
            {
                question: "La suma binaria 11 + 11, en binario es",
                options: [
                    "110",
                    "22",
                    "1111",
                    "No se pueden sumar números binarios"
                ],
                correct: 0,
                explanation: "11 en binario es 3. 3 + 3 = 6. El número 6 en binario es 110."
            },
            {
                question: "La resta hexadecimal FFFFFF - FFFFFE, es",
                options: [
                    "Todas las opciones son correctas",
                    "1 en decimal",
                    "1 en binario",
                    "1 en hexadecimal"
                ],
                correct: 0,
                explanation: "La resta da como resultado 1, que se representa exactamente igual en los tres sistemas numéricos."
            },
            {
                question: "El número 15 decimal es",
                options: [
                    "10 en binario",
                    "E en hexadecimal",
                    "17 en octal",
                    "1110 en binario"
                ],
                correct: 2,
                explanation: "15 dividido por 8 da cociente 1 y resto 7, por lo que su representación es 17 en base 8."
            },
            {
                question: "Protocolo de red se define como:",
                options: [
                    "Componente lógico de red",
                    "Orden de llegada de los datos",
                    "Conjunto de normas que deben cumplirse y que sirven para regular la comunicación",
                    "Conjunto de elementos y dispositivos de una red"
                ],
                correct: 2,
                explanation: "Un protocolo define las normas, reglas y formatos acordados para el intercambio de mensajes entre dispositivos."
            }
        ]
    },
    "Tema 2 Integración de elementos en red": {
        "Test 1": [
            {
                question: "¿Qué es un servicio de red?",
                options: [
                    "Un dispositivo físico que conecta cables.",
                    "Una aplicación que permite la comunicación entre diferentes dispositivos en una red.",
                    "Un tipo de cable de fibra óptica.",
                    "El sistema operativo de un router."
                ],
                correct: 1,
                explanation: "Los servicios de red son programas o protocolos que facilitan recursos o comunicación entre clientes y servidores."
            },
            {
                question: "¿Cuál de los siguientes es un ejemplo de un servicio de red?",
                options: [
                    "CPU.",
                    "Memoria RAM.",
                    "DNS.",
                    "Disco duro."
                ],
                correct: 2,
                explanation: "DNS (Domain Name System) es el servicio encargado de traducir nombres de dominio en direcciones IP."
            },
            {
                question: "¿Qué protocolo se utiliza para la transferencia de archivos en una red?",
                options: [
                    "HTTP.",
                    "FTP.",
                    "SMTP.",
                    "SSH."
                ],
                correct: 1,
                explanation: "FTP (File Transfer Protocol) es el protocolo estándar diseñado específicamente para mover archivos entre un cliente y un servidor."
            },
            {
                question: "¿Qué función cumple el protocolo DHCP?",
                options: [
                    "Cifra los datos de navegación.",
                    "Asigna direcciones IP de forma dinámica a los dispositivos de la red.",
                    "Bloquea el acceso a sitios web no autorizados.",
                    "Traduce nombres de dominio."
                ],
                correct: 1,
                explanation: "El Dynamic Host Configuration Protocol permite que los dispositivos obtengan su configuración de red (IP, máscara, puerta de enlace) automáticamente."
            },
            {
                question: "¿Qué es un servidor de correo electrónico?",
                options: [
                    "Un hardware que solo almacena archivos de texto.",
                    "Un servicio que permite el envío y recepción de mensajes a través de una red.",
                    "Una aplicación para chatear en tiempo real.",
                    "Un tipo de conexión inalámbrica."
                ],
                correct: 1,
                explanation: "Utiliza protocolos específicos como SMTP para el envío y POP3 o IMAP para la gestión de la recepción de mensajes."
            },
            {
                question: "¿Qué significa HTTP?",
                options: [
                    "HyperText Transfer Protocol.",
                    "High Transfer Text Protocol.",
                    "Hyper Technology Total Protocol.",
                    "Home Text Transfer Protocol."
                ],
                correct: 0,
                explanation: "Es el protocolo base de intercambio de información en la World Wide Web para la transferencia de documentos hipermedia."
            },
            {
                question: "¿Qué es una dirección IP?",
                options: [
                    "El nombre del fabricante del equipo.",
                    "Un identificador numérico único para cada dispositivo en una red.",
                    "La velocidad de conexión a internet.",
                    "Una contraseña de seguridad."
                ],
                correct: 1,
                explanation: "La dirección IP funciona como una dirección postal lógica para que los paquetes de datos encuentren el destino correcto."
            },
            {
                question: "¿Cuál es la diferencia principal entre IPv4 e IPv6?",
                options: [
                    "IPv4 es más rápido que IPv6.",
                    "IPv6 tiene un espacio de direcciones mucho mayor que IPv4.",
                    "IPv4 usa letras y IPv6 solo números.",
                    "No hay diferencia, son iguales."
                ],
                correct: 1,
                explanation: "IPv4 usa 32 bits (4.300 millones de direcciones), mientras que IPv6 usa 128 bits para garantizar direcciones infinitas ante el agotamiento de las anteriores."
            },
            {
                question: "¿Qué es un puerto en términos de redes?",
                options: [
                    "Un conector físico detrás del ordenador.",
                    "Un punto final de comunicación lógico.",
                    "Una antena de Wi-Fi.",
                    "El lugar donde se conectan los cables submarinos."
                ],
                correct: 1,
                explanation: "Los puertos permiten que un mismo dispositivo pueda gestionar múltiples servicios (ej: puerto 80 para web, puerto 21 para FTP) de forma simultánea."
            },
            {
                question: "¿Qué herramienta se utiliza para verificar la conectividad entre dos dispositivos en una red?",
                options: [
                    "Format.",
                    "Copy.",
                    "Ping.",
                    "Delete."
                ],
                correct: 2,
                explanation: "Ping envía paquetes de eco ICMP para comprobar si un destino responde y calcular la latencia de la conexión."
            }
        ],
        "Test 2": [
            {
                question: "¿Qué es un servidor DNS?",
                options: [
                    "Un servidor que almacena archivos de música.",
                    "Un servidor que traduce nombres de dominio en direcciones IP.",
                    "Un servidor que protege la red de virus.",
                    "Un servidor que gestiona las impresoras."
                ],
                correct: 1,
                explanation: "El DNS (Domain Name System) actúa como una \"agenda telefónica\", convirtiendo nombres legibles en IPs numéricas."
            },
            {
                question: "¿Qué significa FTP?",
                options: [
                    "Fast Transfer Protocol.",
                    "File Transfer Protocol.",
                    "Format Text Protocol.",
                    "Fiber Transfer Protocol."
                ],
                correct: 1,
                explanation: "Es el protocolo estándar para la transferencia de archivos entre sistemas conectados a una red TCP."
            },
            {
                question: "¿Cuál es la función del protocolo SMTP?",
                options: [
                    "Recibir correos electrónicos.",
                    "Enviar correos electrónicos.",
                    "Almacenar archivos en la nube.",
                    "Cifrar la conexión web."
                ],
                correct: 1,
                explanation: "Simple Mail Transfer Protocol se utiliza específicamente para el intercambio de mensajes de correo electrónico entre servidores."
            },
            {
                question: "¿Qué es un servidor proxy?",
                options: [
                    "Un dispositivo que aumenta la velocidad de internet.",
                    "Un intermediario entre un cliente y un servidor.",
                    "Un software de edición de fotos.",
                    "Un tipo de cable de red."
                ],
                correct: 1,
                explanation: "Actúa como punto intermedio, pudiendo filtrar contenido, mejorar la seguridad o cachear datos para acelerar el acceso."
            },
            {
                question: "¿Qué protocolo se utiliza para la navegación web segura?",
                options: [
                    "HTTP.",
                    "HTTPS.",
                    "FTP.",
                    "SNMP."
                ],
                correct: 1,
                explanation: "El HTTPS utiliza el puerto 443 y cifra la comunicación mediante SSL/TLS para proteger la privacidad de los datos."
            },
            {
                question: "¿Qué es una red local (LAN)?",
                options: [
                    "Una red que conecta dispositivos en todo el mundo.",
                    "Una red que conecta dispositivos en un área geográfica pequeña.",
                    "Una red de satélites.",
                    "Una red de telefonía móvil."
                ],
                correct: 1,
                explanation: "Local Area Network; es la que solemos tener en casa, en una oficina o en un edificio."
            },
            {
                question: "¿Qué es un router?",
                options: [
                    "Un dispositivo que permite la conexión inalámbrica.",
                    "Un dispositivo que dirige los paquetes de datos entre diferentes redes.",
                    "Un programa para navegar por internet.",
                    "Un tipo de monitor."
                ],
                correct: 1,
                explanation: "Su función principal es el enrutamiento: decidir qué camino deben seguir los datos para llegar a su red de destino."
            },
            {
                question: "¿Qué es el protocolo TCP/IP?",
                options: [
                    "Un lenguaje de programación.",
                    "Un conjunto de protocolos que permiten la comunicación en internet.",
                    "Un sistema operativo para servidores.",
                    "Un fabricante de hardware de red."
                ],
                correct: 1,
                explanation: "Es el modelo fundamental sobre el que se basa internet, dividiendo la comunicación en capas funcionales."
            },
            {
                question: "¿Qué función cumple el firewall?",
                options: [
                    "Aumenta la capacidad de almacenamiento del servidor.",
                    "Protege la red de accesos no autorizados.",
                    "Limpia los cables de red.",
                    "Mejora la calidad de imagen en streaming."
                ],
                correct: 1,
                explanation: "El cortafuegos monitoriza y controla el tráfico entrante y saliente basándose en reglas de seguridad predefinidas."
            },
            {
                question: "¿Qué es la latencia de red?",
                options: [
                    "El número de dispositivos conectados.",
                    "El tiempo que tarda un paquete de datos en viajar de un punto a otro.",
                    "El tamaño de los archivos que se transfieren.",
                    "El coste de la conexión a internet."
                ],
                correct: 1,
                explanation: "Se mide generalmente en milisegundos (ms) y es clave para servicios en tiempo real como juegos online o videollamadas."
            }
        ],
        "Test 3": [
            {
                question: "¿Qué es un servidor DNS?",
                options: [
                    "Un servidor que almacena archivos de música.",
                    "Un servidor que traduce nombres de dominio en direcciones IP.",
                    "Un servidor que protege la red de virus.",
                    "Un servidor que gestiona las impresoras."
                ],
                correct: 1,
                explanation: "El DNS (Domain Name System) actúa como una \"agenda telefónica\", convirtiendo nombres legibles en IPs numéricas."
            },
            {
                question: "¿Qué significa FTP?",
                options: [
                    "Fast Transfer Protocol.",
                    "File Transfer Protocol.",
                    "Format Text Protocol.",
                    "Fiber Transfer Protocol."
                ],
                correct: 1,
                explanation: "Es el protocolo estándar para la transferencia de archivos entre sistemas conectados a una red TCP."
            },
            {
                question: "¿Cuál es la función del protocolo SMTP?",
                options: [
                    "Recibir correos electrónicos.",
                    "Enviar correos electrónicos.",
                    "Almacenar archivos en la nube.",
                    "Cifrar la conexión web."
                ],
                correct: 1,
                explanation: "Simple Mail Transfer Protocol se utiliza específicamente para el intercambio de mensajes de correo electrónico entre servidores."
            },
            {
                question: "¿Qué es un servidor proxy?",
                options: [
                    "Un dispositivo que aumenta la velocidad de internet.",
                    "Un intermediario entre un cliente y un servidor.",
                    "Un software de edición de fotos.",
                    "Un tipo de cable de red."
                ],
                correct: 1,
                explanation: "Actúa como punto intermedio, pudiendo filtrar contenido, mejorar la seguridad o cachear datos para acelerar el acceso."
            },
            {
                question: "¿Qué protocolo se utiliza para la navegación web segura?",
                options: [
                    "HTTP.",
                    "HTTPS.",
                    "FTP.",
                    "SNMP."
                ],
                correct: 1,
                explanation: "El HTTPS utiliza el puerto 443 y cifra la comunicación mediante SSL/TLS para proteger la privacidad de los datos."
            },
            {
                question: "¿Qué es una red local (LAN)?",
                options: [
                    "Una red que conecta dispositivos en todo el mundo.",
                    "Una red que conecta dispositivos en un área geográfica pequeña.",
                    "Una red de satélites.",
                    "Una red de telefonía móvil."
                ],
                correct: 1,
                explanation: "Local Area Network; es la que solemos tener en casa, en una oficina o en un edificio."
            },
            {
                question: "¿Qué es un router?",
                options: [
                    "Un dispositivo que permite la conexión inalámbrica.",
                    "Un dispositivo que dirige los paquetes de datos entre diferentes redes.",
                    "Un programa para navegar por internet.",
                    "Un tipo de monitor."
                ],
                correct: 1,
                explanation: "Su función principal es el enrutamiento: decidir qué camino deben seguir los datos para llegar a su red de destino."
            },
            {
                question: "¿Qué es el protocolo TCP/IP?",
                options: [
                    "Un lenguaje de programación.",
                    "Un conjunto de protocolos que permiten la comunicación en internet.",
                    "Un sistema operativo para servidores.",
                    "Un fabricante de hardware de red."
                ],
                correct: 1,
                explanation: "Es el modelo fundamental sobre el que se basa internet, dividiendo la comunicación en capas funcionales."
            },
            {
                question: "¿Qué función cumple el firewall?",
                options: [
                    "Aumenta la capacidad de almacenamiento del servidor.",
                    "Protege la red de accesos no autorizados.",
                    "Limpia los cables de red.",
                    "Mejora la calidad de imagen en streaming."
                ],
                correct: 1,
                explanation: "El cortafuegos monitoriza y controla el tráfico entrante y saliente basándose en reglas de seguridad predefinidas."
            },
            {
                question: "¿Qué es la latencia de red?",
                options: [
                    "El número de dispositivos conectados.",
                    "El tiempo que tarda un paquete de datos en viajar de un punto a otro.",
                    "El tamaño de los archivos que se transfieren.",
                    "El coste de la conexión a internet."
                ],
                correct: 1,
                explanation: "Se mide generalmente en milisegundos (ms) y es clave para servicios en tiempo real como juegos online o videollamadas."
            }
        ]
    }
};
