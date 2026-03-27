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
                explanation: "Siguiendo el estándar del SI, el prefijo Kilo equivale a 1000. Para 1024, el término estricto sería kibibit."
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
                    "en octal, hexadecimal y decimal",
                    "8 en binario, octal, hexadecimal y decimal",
                    "8 en hexadecimal y decimal"
                ],
                correct: 3,
                explanation: "El valor 8 se representa con el mismo símbolo \"8\" tanto en el sistema decimal como en el hexadecimal."
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
                explanation: "La capa de acceso a red/enlace de datos funciona de manera independiente al protocolo de red utilizado en la capa superior."
            },
            {
                question: "La IPv6 2001:05F8:0000:ABCD:0000:AB00:00AB:AB00 se puede resumir en:",
                options: [
                    "2001:5F8::ABCD::AB00:00AB:AB00",
                    "2001:5F8::ABCD:0000:AB00:AB:AB00",
                    "2001:5F8::ABCD::AB::AB",
                    "2001:05F8:0000:ABCD:0000:AB00:00AB:AB00"
                ],
                correct: 1,
                explanation: "Recordando que solo se puede usar un bloque \"::\" para resumir ceros consecutivos."
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
                question: "Indica las igualdades correctas:",
                options: [
                    "1 Megabyte = 1000 Kilobytes",
                    "1 Mebibyte = 1024 Kibibytes",
                    "1 Megabyte = 1000000 bytes",
                    "Todas las igualdades indicadas son correctas"
                ],
                correct: 3,
                explanation: "Según el estándar internacional (SI), el prefijo Mega/Kilo se basa en potencias de 10, mientras que Mebi/Kibi se basa en potencias de 2. Y 1 Mebibyte también es 1048576 bytes."
            },
            {
                question: "Indica las igualdades correctas:",
                options: [
                    "1 Kilobyte = 1024 bytes",
                    "1 Kibibyte = 1000 bytes",
                    "1 Kilobyte = 1000 bytes",
                    "Tanto 1 Kilobyte = 1000 bytes como 1 Kibibyte = 1024 bytes"
                ],
                correct: 3,
                explanation: "El prefijo Kilo representa 1000, y Kibi representa 1024."
            },
            {
                question: "Encapsulamiento es el proceso por el que",
                options: [
                    "Se dividen los datos en paquetes pequeños que serán enviados independientemente",
                    "Se determina la ruta óptima para el envío de datos.",
                    "Cada capa rodea los datos a enviar con información propia de la capa",
                    "Se entran todos los datos dentro de un sistema capsular y se envían"
                ],
                correct: 2,
                explanation: "A medida que los datos atraviesan el modelo de capas de arriba a abajo, cada capa agrega su propia cabecera (encapsula) para poder comunicarse con su capa equivalente en el destino."
            },
            {
                question: "La máscara /25 nos permite",
                options: [
                    "254 combinaciones diferentes",
                    "126 combinaciones diferentes",
                    "128 combinaciones diferentes",
                    "256 combinaciones diferentes"
                ],
                correct: 2,
                explanation: "Al tener /25, quedan 7 bits para hosts, y 2^7 = 128 combinaciones posibles. Ojo: si preguntara por equipos o hosts útiles, serían 126."
            },
            {
                question: "Las direcciones IPs pueden ser",
                options: [
                    "Privadas",
                    "Dinámicas o Públicas",
                    "Estáticas",
                    "Todas las anteriores son características válidas de una dirección IP"
                ],
                correct: 3,
                explanation: "Una IP puede ser asignada de forma dinámica, ser estática, pertenecer a un rango privado o ser pública y enrutable en Internet."
            },
            {
                question: "Indica qué red admite más equipos:",
                options: [
                    "/22",
                    "/24",
                    "/23",
                    "/21"
                ],
                correct: 3,
                explanation: "A menor número en la máscara de red, más bits quedan libres para direccionar equipos, por tanto caben más."
            },
            {
                question: "Una topología lógica en estrella es siempre una topología física en estrella.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Por ejemplo, en redes Token Ring antiguas, la topología física podía ser una estrella (conectadas a un concentrador), pero la topología lógica (cómo viaja la información) era un anillo pasándose el testigo."
            },
            {
                question: "La topología física de red en forma circular es:",
                options: [
                    "Estrella",
                    "Bus",
                    "Árbol",
                    "Anillo"
                ],
                correct: 3,
                explanation: "La topología en anillo conecta los nodos en una ruta circular cerrada donde cada nodo está conectado exactamente a otros dos."
            },
            {
                question: "La expresión 00:90:F5:FB:79:AB es un ejemplo de:",
                options: [
                    "MAC",
                    "IPv4",
                    "Puerto",
                    "IPv6"
                ],
                correct: 0,
                explanation: "Es una Dirección física MAC (Media Access Control) de 48 bits representada en formato hexadecimal."
            },
            {
                question: "La dirección 0.0.0.0:",
                options: [
                    "Si existe y es especial.",
                    "Es pública.",
                    "Es de difusión.",
                    "No existe."
                ],
                correct: 0,
                explanation: "Sí existe y es especial. Se utiliza normalmente para designar una ruta por defecto o representar 'cualquier red'."
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
                    "Megabit = 1048576 bits",
                    "Megabit = 1000000 bytes",
                    "Megabit = 1000000 bits",
                    "Megabit = 1048576 bytes"
                ],
                correct: 2,
                explanation: "Según la norma SI, un Megabit (Mb) expresa un millón de bits."
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
                explanation: "La capa de aplicación es la que interactúa directamente con las aplicaciones de software del usuario."
            },
            {
                question: "Marca qué protocolos pertenecen a la capa Aplicación del modelo TCP-IP",
                options: [
                    "DNS",
                    "TCP",
                    "HTTP",
                    "Tanto DNS como HTTP"
                ],
                correct: 3,
                explanation: "DNS y HTTP operan en la capa de Aplicación. TCP es de transporte e IP es de red."
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
                explanation: "En las conexiones punto a punto, dos nodos se comunican mediante un enlace dedicado y exclusivo."
            },
            {
                question: "Indica las respuestas correctas:",
                options: [
                    "1 Megabyte es menor que 1 Mebibyte",
                    "1 Kilobit es igual a 1 kB",
                    "1 Megabyte es igual que 1 Mebibyte",
                    "1 Megabyte es menor que 1 Mebibyte y 1 Kilobit es menor que 1 Kilobyte"
                ],
                correct: 3,
                explanation: "1 Megabyte (10^6 bytes) es menor que 1 Mebibyte (2^20 bytes). Y 1 Kilobit (1000 bits) es lógicamente menor que 1 Kilobyte (1000 bytes / 8000 bits)."
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
                explanation: "En decimal sería 3 + 3 = 6; y el número 6 en binario es 110."
            },
            {
                question: "La resta hexadecimal FFFFFF - FFFFFE, es",
                options: [
                    "Todas las respuestas indicadas son correctas",
                    "1 en decimal",
                    "1 en binario",
                    "1 en hexadecimal"
                ],
                correct: 0,
                explanation: "La diferencia es 1, y el número 1 se representa exactamente igual en base decimal, binaria y hexadecimal."
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
                explanation: "En octal, 1 grupo de 8 más 7 unidades suman 15."
            },
            {
                question: "Protocolo de red",
                options: [
                    "Componente lógico de red",
                    "Orden de llegada de los datos",
                    "Conjunto de normas que deben cumplirse y que sirven para regular la comunicación",
                    "Conjunto de elementos y dispositivos de una red"
                ],
                correct: 2,
                explanation: "Un protocolo es un conjunto de reglas estandarizadas que formatan y controlan el tránsito de la información en una red."
            }
        ]
    },
    "Tema 2: Integración de elementos en red": {
        "Test 1": [
            {
                question: "En IPv6 dependiendo de los interfaces que identifican tenemos:",
                options: [
                    "Direcciones privadas y públicas",
                    "Direcciones estáticas y dinámicas",
                    "Direcciones anycast, unicast y multicast",
                    "Direcciones anycast, multicast y broadcast"
                ],
                correct: 2,
                explanation: "IPv6 elimina el concepto de broadcast y utiliza Anycast, Unicast y Multicast para la identificación de interfaces."
            },
            {
                question: "La tasa de transferencia es inferior o igual al ancho de banda",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "El ancho de banda es la capacidad máxima teórica, mientras que la tasa de transferencia (throughput) es la velocidad real, que siempre es limitada por factores externos."
            },
            {
                question: "Cuál de las siguientes afirmaciones NO es correcta sobre los cables de par trenzado",
                options: [
                    "Hay varios tipos: UTP, STP, FTP",
                    "En la conexión cruzada solo cambia el orden de 4 de los 8 hilos",
                    "En conexión directa los dos extremos tienen el mismo orden de cables",
                    "El cable no puede comunicar con menos de 8 hilos"
                ],
                correct: 3,
                explanation: "Es incorrecta porque estándares como FastEthernet 10/100 usan solo 4 hilos."
            },
            {
                question: "Switch",
                options: [
                    "Es un dispositivo de nivel 2",
                    "Es un puente multipuerto",
                    "Mejora las comunicaciones en la red respecto de los hub",
                    "Todas son correctas"
                ],
                correct: 3,
                explanation: "El switch es un dispositivo de capa de enlace (Nivel 2) que utiliza tablas MAC para conmutar tramas de forma eficiente."
            },
            {
                question: "Marcar las formas de comunicación según el sentido de la transmisión",
                options: [
                    "Semiduplex",
                    "Duplex",
                    "UniPlex",
                    "Semiduplex, Duplex y Simplex"
                ],
                correct: 3,
                explanation: "Son los tres modos básicos: Simplex (un sentido), Half-Duplex o Semiduplex (ambos sentidos, no a la vez) y Full-Duplex (ambos sentidos simultáneos)."
            },
            {
                question: "Si dispones de una conexión a internet de 1Giga, cuál de las siguientes frases NO es cierta",
                options: [
                    "Basta con tener tarjetas FastEthernet para aprovechar todo el ancho de banda",
                    "Si tenemos 3 equipos encendidos el ancho de banda consumido es repartido para los tres",
                    "Si un equipo no está conectado a internet no consume ancho de banda",
                    "Si están descargando todos los equipos este ancho se reparte entre los equipos"
                ],
                correct: 0,
                explanation: "FastEthernet está limitado a 100 Mbps, por lo que no aprovecharía 1 Gbps."
            },
            {
                question: "Una dirección IP 192.168.1.0/25 puede direccionar:",
                options: [
                    "126 hosts",
                    "224 hosts",
                    "254 hosts",
                    "128 hosts"
                ],
                correct: 0,
                explanation: "Con una máscara /25 quedan 7 bits para hosts (2^7 = 128). Restando la dirección de red y la de broadcast, quedan 126 hosts útiles."
            },
            {
                question: "El crosstalk es:",
                options: [
                    "Una perturbación de la señal",
                    "Ninguna de las anteriores es correcta",
                    "La capacidad de transmitir voz a través del cable",
                    "Una variante de cable de par trenzado"
                ],
                correct: 0,
                explanation: "Se refiere a la interferencia electromagnética (diafonía) producida por el acoplamiento entre hilos cercanos."
            },
            {
                question: "Marcar las frases correctas sobre control de acceso al medio",
                options: [
                    "CSMA es un método muy usado de acceso al medio",
                    "Hay dos métodos básicos: centralizados y descentralizados",
                    "Reducen colisiones en las transmisiones que se producen en medios compartidos",
                    "Todas las anteriores son correctas"
                ],
                correct: 3,
                explanation: "Los mecanismos de control de acceso al medio gestionan cómo los dispositivos comparten el canal físico para evitar colisiones."
            },
            {
                question: "Aumentando la máscara de /16 a /17 se producen dos subredes",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Al tomar un bit prestado de la parte de host (2^1 = 2), dividimos el espacio de direcciones original en exactamente dos subredes."
            }
        ],
        "Test 2": [
            {
                question: "BNC es:",
                options: [
                    "Software de escritorio remoto",
                    "Conector estándar T568A",
                    "Conector suscriptor",
                    "Conector de cable coaxial"
                ],
                correct: 3,
                explanation: "El conector BNC (Bayonet Neill-Concelman) es el estándar utilizado para cables coaxiales en redes antiguas y vídeo."
            },
            {
                question: "El cableado estructurado",
                options: [
                    "Técnica para colocar el cableado dentro de la estructura del edificio",
                    "Es un conjunto de normas",
                    "Es un recubrimiento para cables de par trenzado",
                    "Es un tipo de cable"
                ],
                correct: 1,
                explanation: "Es el conjunto de estándares (como TIA/EIA) que definen cómo debe diseñarse e instalarse la infraestructura de red en un edificio."
            },
            {
                question: "¿De las siguientes opciones indica cuál de ellas es causante de una distorsión en la comunicación?",
                options: [
                    "Elementos por los que tiene que pasar una señal",
                    "Distancia entre emisor y receptor",
                    "Entorno en el que se da la transmisión",
                    "Las tres anteriores son correctas"
                ],
                correct: 3,
                explanation: "La señal se degrada por la resistencia del medio, la distancia (atenuación) y las interferencias del entorno."
            },
            {
                question: "¿En que se fundamenta la transmisión por fibra óptica?",
                options: [
                    "En la transmisión de electricidad",
                    "En el cable de cobre",
                    "En los semiconductores",
                    "En la reflexión de la luz"
                ],
                correct: 3,
                explanation: "Utiliza pulsos de luz que viajan a través del núcleo de vidrio mediante el principio de reflexión total interna."
            },
            {
                question: "Una dirección IPv4 de clase B puede direccionar:",
                options: [
                    "65536 hosts",
                    "254 hosts",
                    "256 hosts",
                    "65534 hosts"
                ],
                correct: 3,
                explanation: "Usando 16 bits para hosts, 2^16 es 65536. Al restar 2 direcciones indispensables (la de red y la de broadcast), quedan 65534."
            },
            {
                question: "WOL, Wake-On-LAN",
                options: [
                    "Sirve para crear subinterfaces en las tarjetas de red",
                    "Sirve para conectarse a un equipo remotamente a través de la red local",
                    "Sirve para encender un equipo remotamente a través de la red local",
                    "Sirve para instalar el sistema operativo a través de la red local"
                ],
                correct: 2,
                explanation: "Es un estándar que permite encender un ordenador apagado mediante el envío de un paquete mágico ('Magic Packet') a su MAC."
            },
            {
                question: "Diferencias entre un cable coaxial y un cable de par trenzado.",
                options: [
                    "La longitud.",
                    "Número de conductores que lo componen.",
                    "Tipo de conectores que utilizan.",
                    "Número de conductores y Tipos de Conectores"
                ],
                correct: 3,
                explanation: "Difieren en su construcción física (b) y en los conectores usados (a)."
            },
            {
                question: "Marcar las topologías inalámbricas",
                options: [
                    "BBC",
                    "CBS",
                    "BCC",
                    "BSS"
                ],
                correct: 3,
                explanation: "BSS (Basic Service Set) es la topología básica de una red inalámbrica formada por un punto de acceso y sus clientes."
            },
            {
                question: "PoE, Power-Over-Ethernet",
                options: [
                    "Es una tecnología que permite encender un dispositivo Ethernet",
                    "Es una tecnología que permite encender un ordenador a través de la red",
                    "Es una tecnología que permite conectar un punto de acceso con otros dispositivos",
                    "Es una tecnología que permite llevar la electricidad a través de un cable de red"
                ],
                correct: 3,
                explanation: "PoE permite suministrar alimentación eléctrica a dispositivos (cámaras IP, teléfonos VoIP) usando los mismos hilos del cable de datos."
            },
            {
                question: "La máscara habitual en las redes IPv6 es",
                options: [
                    "48",
                    "32",
                    "46",
                    "64"
                ],
                correct: 3,
                explanation: "El estándar de la industria para prefijos de subred en IPv6 es /64."
            }
        ],
        "Test 3": [
            {
                question: "NAT",
                options: [
                    "En IPv6 no es necesaria",
                    "La mayoría de los routers-ADSL realiza está técnica",
                    "Suele utilizarse para compartir una IP pública",
                    "Todas son correctas"
                ],
                correct: 3,
                explanation: "NAT (Network Address Translation) permite conectar múltiples dispositivos en una red local bajo una única IP pública hacia internet."
            },
            {
                question: "PLC permite",
                options: [
                    "Transmitir inálambricamente",
                    "Transmitir utilizando las líneas eléctricas",
                    "Transmitir a velocidades superiores a la fibra óptica",
                    "Transmitir a grandes distancias"
                ],
                correct: 1,
                explanation: "El Power Line Communications transmite los datos enviando las señales a través del cableado eléctrico de baja o media tensión."
            },
            {
                question: "Antenas",
                options: [
                    "Una antena direccional es una mezcla de una antena omnidireccional y sectorial",
                    "Para cubrir grandes distancias conviene una antena omnidireccional",
                    "Una antena sectorial tiene más ganancia que una antena direccional",
                    "Una antena direccional suele tener la misma apertura vertical y horizontal"
                ],
                correct: 3,
                explanation: "A diferencia de sectoreales (o en abanico), las direccionales puras condensan la emisión en conos iguales tanto en altura como rotación."
            },
            {
                question: "La sumarización de 172.16.0.0/16 y 172.17.0.0/16 produce la red",
                options: [
                    "172.16.0.0/17",
                    "No se pueden sumarizar",
                    "172.16.0.0/16",
                    "172.16.0.0/15"
                ],
                correct: 3,
                explanation: "Al sumarizar las dos subredes consecutivas, al robar 1 bit a la máscara de host pasamos de /16 a /15."
            },
            {
                question: "Diferencia principal entre fibra óptica monomodo y multimodo",
                options: [
                    "La monomodo transporta un solo rayo de luz",
                    "Una es dúplex y otra Fullduplex",
                    "Velocidad",
                    "Reflexión"
                ],
                correct: 0,
                explanation: "La de Monomodo solo propaga un modo de haz de luz a través del núcleo. Como el haz es un rayo que viaja por el centro, no rebota, haciéndola capaz de llegar mucho más lejos."
            },
            {
                question: "WOL",
                options: [
                    "Todas las tarjetas vienen equipadas con esta característica",
                    "Es un medio de acceso",
                    "Significa Wireless On Line",
                    "Permite encender un ordenador a través de la red"
                ],
                correct: 3,
                explanation: "WOL son las siglas de Wake-On-LAN."
            },
            {
                question: "ICMP es el protocolo en que se basa el comando ping",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Efectivamente, PING usa peticiones ICMP Echo Request y Echo Reply."
            },
            {
                question: "Utilizando la técnica VLSM podemos dividir la red 192.168.0.0/24 en",
                options: [
                    "192.168.0.0/25 192.168.0.128/22 y 192.168.0.192/22",
                    "192.168.0.0/25 192.168.0.64/26 y 192.168.0.128/26",
                    "192.168.0.0/25 192.168.0.128/26 y 192.168.0.192/26",
                    "192.168.0.0/28 y 192.168.0.128/28"
                ],
                correct: 2,
                explanation: "La máscara /25 ocupa de la 0 a la 127. Luego las dos /26 ocupan de la 128 a la 191, y de la 192 a la 255. Son perfectamente contiguas."
            },
            {
                question: "Un router doméstico inalámbrico",
                options: [
                    "Incorpora un router",
                    "Incorpora un punto de acceso",
                    "Incorpora un switch",
                    "Todas las anteriores"
                ],
                correct: 3,
                explanation: "Normalmente los SOHO aúnan las 3 funciones."
            },
            {
                question: "Marca los factores físicos que afectan a la transmisión",
                options: [
                    "Absorción atmosférica y Ruido",
                    "Retardo",
                    "Dicofonías",
                    "Todas son correctas"
                ],
                correct: 0,
                explanation: "Las opciones confirmadas como correctas por el sistema son: Absorción atmosférica y Ruido."
            }
        ]
    },
    "Tema 3: Configuración y administración básica de routers": {
        "Test 1": [
            {
                question: "¿Cuál de las siguientes NO es una característica de la tabla de enrutamiento?",
                options: [
                    "IP del siguiente salto.",
                    "Red destino.",
                    "Ancho de banda.",
                    "Métrica."
                ],
                correct: 2,
                explanation: "Una tabla de enrutamiento contiene información sobre redes destino, métricas para elegir la mejor ruta e IPs del siguiente salto, pero no el ancho de banda disponible en tiempo real."
            },
            {
                question: "Indica qué firmware NO es libre:",
                options: [
                    "DD-WRT.",
                    "Openwrt.",
                    "IOS Cisco.",
                    "Tomato."
                ],
                correct: 2,
                explanation: "IOS (Internetwork Operating System) es el software propietario de Cisco Systems, a diferencia de los otros que son basados en software libre o de código abierto."
            },
            {
                question: "Sobre las ACLs (Listas de Control de Acceso), marca la opción correcta:",
                options: [
                    "Pueden ser permisivas o prohibitivas.",
                    "Es un conjunto de reglas donde importa el orden de las mismas.",
                    "Deben contener al menos 2 reglas.",
                    "Las opciones A y B son correctas."
                ],
                correct: 3,
                explanation: "Las ACLs son conjuntos de reglas que permiten o deniegan tráfico, y el orden es crítico porque el router las procesa secuencialmente hasta encontrar una coincidencia."
            },
            {
                question: "Las formas de conexión al router para acceder a su configuración difieren bastante de las empleadas en los conmutadores. ¿Verdadero o falso?",
                options: [
                    "Verdadero.",
                    "Falso."
                ],
                correct: 1,
                explanation: "En general, los métodos de acceso (consola, Telnet, SSH o entorno web) son muy similares tanto para routers como para switches gestionables."
            },
            {
                question: "Los routers domésticos (típicos para conexión de hogar):",
                options: [
                    "Se suelen configurar por telnet.",
                    "Se suelen configurar por CLI (línea de comandos).",
                    "Se suelen configurar por web.",
                    "Se suelen configurar por SSH."
                ],
                correct: 2,
                explanation: "Para facilitar el uso al usuario medio, los fabricantes de routers domésticos implementan una interfaz gráfica accesible a través de un navegador web."
            },
            {
                question: "Sobre Telnet, indica la opción correcta:",
                options: [
                    "Implica el uso de un navegador como Mozilla.",
                    "Se puede usar con una conexión al puerto LAN del router.",
                    "Implica el uso de un cable serie.",
                    "Implica el uso de un cable RJ45 específico de consola."
                ],
                correct: 1,
                explanation: "Telnet es un protocolo de red que permite el acceso remoto a través de una conexión TCP/IP estándar, como la del puerto LAN."
            },
            {
                question: "¿Cuál es el objetivo principal de un router?",
                options: [
                    "Encontrar la ruta más adecuada para los paquetes.",
                    "Separar en diferentes segmentos de colisión.",
                    "Acceder a una red LAN.",
                    "Conectar los equipos a Internet."
                ],
                correct: 0,
                explanation: "La función básica de un router es el enrutamiento: decidir, basándose en su tabla, qué camino deben seguir los paquetes para llegar a su destino."
            },
            {
                question: "Sobre la DMZ (Zona Desmilitarizada):",
                options: [
                    "Se usa habitualmente para ubicar servidores que deben ser accedidos desde fuera.",
                    "Son las iniciales de \"demilitarized zone\".",
                    "Los routers domésticos suelen incluir esta opción.",
                    "Todas las anteriores son correctas."
                ],
                correct: 3,
                explanation: "La DMZ permite exponer un equipo a la red externa (Internet) separándolo de la red local interna por seguridad."
            },
            {
                question: "La conexión de configuración vía web:",
                options: [
                    "Se emplea solo con navegadores de Microsoft.",
                    "Se debe hacer obligatoriamente desde Internet.",
                    "Se puede emplear con cualquier navegador.",
                    "Se puede hacer solamente desde una conexión LAN."
                ],
                correct: 2,
                explanation: "Al basarse en estándares HTTP/HTTPS, se puede administrar el dispositivo desde cualquier navegador moderno (Chrome, Firefox, Safari, etc.)."
            },
            {
                question: "Un router reenvía por todos sus puertos la información que le llega. ¿Verdadero o falso?",
                options: [
                    "Verdadero.",
                    "Falso."
                ],
                correct: 1,
                explanation: "A diferencia de un hub, un router analiza la dirección de destino y solo reenvía el paquete por la interfaz necesaria según su tabla de rutas."
            }
        ],
        "Test 2": [
            {
                question: "Sobre los Routers en las LAN:",
                options: [
                    "Suelen tener 2 interfaces.",
                    "Suelen tener una red privada y una red pública.",
                    "Suelen hacer NAT.",
                    "Todas las anteriores son correctas."
                ],
                correct: 3,
                explanation: "Un router doméstico típico actúa como frontera, separando la red privada (LAN) de la pública (WAN) mediante dos interfaces físicas o lógicas y utilizando NAT para compartir la IP pública."
            },
            {
                question: "Sobre el proceso de conexión con SSH:",
                options: [
                    "En los routers no funciona la conexión con Telnet.",
                    "Es más seguro que la conexión con Telnet.",
                    "Es preferible la conexión Telnet.",
                    "Nos permite configurar el router mediante una interfaz web."
                ],
                correct: 1,
                explanation: "A diferencia de Telnet, que envía los datos en texto plano, SSH cifra toda la comunicación, impidiendo que alguien intercepte tus contraseñas en la red."
            },
            {
                question: "ACLs en los routers domésticos:",
                options: [
                    "Suelen admitir bloqueos por palabras.",
                    "Suelen admitir bloqueos dentro de horarios.",
                    "Cada fabricante suele diseñar sus propias pantallas de configuración.",
                    "Todas las anteriores son correctas."
                ],
                correct: 3,
                explanation: "Las Listas de Control de Acceso en equipos domésticos son versátiles y permiten desde control parental por horario hasta filtrado de contenido web, variando la interfaz según la marca del router."
            },
            {
                question: "Para conectar al router vía SSH:",
                options: [
                    "Necesitamos conocer la IP del router.",
                    "Necesitamos estar en la misma red.",
                    "Podemos hacerlo con Putty.",
                    "Todas las anteriores son correctas."
                ],
                correct: 3,
                explanation: "El acceso por SSH requiere conectividad IP (misma red o ruta válida) y un software cliente como PuTTY para establecer la sesión segura."
            },
            {
                question: "Para conectar al router vía Telnet:",
                options: [
                    "Necesitamos conocer la IP del router.",
                    "Necesitamos estar en la misma red.",
                    "Podemos hacerlo con Putty.",
                    "Todas las anteriores son correctas."
                ],
                correct: 3,
                explanation: "Al igual que con SSH, Telnet requiere conocer la dirección de destino y utilizar un terminal compatible, aunque carece de cifrado."
            },
            {
                question: "Los componentes básicos de un router son:",
                options: [
                    "Totalmente diferentes que los de un PC.",
                    "Parecidos a los de un conmutador eléctrico.",
                    "Del mismo tipo que un PC.",
                    "Iguales que los de un conmutador."
                ],
                correct: 2,
                explanation: "Un router es, en esencia, un ordenador especializado con su propia CPU, memoria RAM, almacenamiento (Flash) y un sistema operativo dedicado."
            },
            {
                question: "Una zona desmilitarizada (DMZ) es:",
                options: [
                    "Una zona muy segura.",
                    "Software empleado en Firewalls pero nunca en routers.",
                    "Parte de la red LAN accesible desde la WAN.",
                    "Los equipos que pueden acceder a la LAN y a los cuales no se puede acceder."
                ],
                correct: 2,
                explanation: "La DMZ permite que ciertos servicios internos (como un servidor web) sean visibles desde Internet (WAN) sin comprometer totalmente la seguridad del resto de la LAN."
            },
            {
                question: "Características generales de los routers en las LAN:",
                options: [
                    "Suelen venir configurados de fábrica.",
                    "Suelen ser dispositivos multifunción.",
                    "Suelen configurarse por Web.",
                    "Todas las anteriores son correctas."
                ],
                correct: 3,
                explanation: "Los routers SOHO modernos combinan funciones de switch, punto de acceso y router, vienen con IPs predeterminadas y ofrecen una interfaz web sencilla para el usuario."
            },
            {
                question: "Las siglas ACL corresponden a:",
                options: [
                    "Access Control List.",
                    "Anonymus Control List.",
                    "Alternative Control List.",
                    "Todas las anteriores son correctas."
                ],
                correct: 0,
                explanation: "ACL significa Lista de Control de Acceso, que es el mecanismo básico para filtrar tráfico en dispositivos de red."
            },
            {
                question: "Sobre la aplicación de las ACLs:",
                options: [
                    "Se pueden aplicar a la entrada o a la salida de una interfaz.",
                    "Las reglas permisivas se suelen poner antes de las prohibitivas.",
                    "Se aconseja poner al menos una regla permisiva en la mayoría de los sistemas.",
                    "Las opciones A y B son correctas."
                ],
                correct: 3,
                explanation: "Las reglas se procesan en orden secuencial; por ello, se definen los permisos específicos antes de los bloqueos generales, y se asocian al flujo de datos (entrada/salida) de la interfaz."
            }
        ],
        "Test 3": [
            {
                question: "¿Cuál de las siguientes no es una características de la tabla de enrutamiento?",
                options: [
                    "IP del siguiente salto",
                    "Red destino",
                    "Ancho de banda",
                    "Métrica"
                ],
                correct: 2,
                explanation: "Una tabla de enrutamiento contiene IP del salto, red destino y métrica, pero no ancho de banda."
            },
            {
                question: "Indica que firmware NO es libre",
                options: [
                    "DD-WRT",
                    "Openwrt",
                    "IOS Cisco",
                    "Tomato"
                ],
                correct: 2,
                explanation: "IOS Cisco es propietario de Cisco, a diferencia de los otros."
            },
            {
                question: "Sobre las ACLs, señala la afirmación INCORRECTA:",
                options: [
                    "Pueden ser permisivas o prohibitivas",
                    "Es un conjunto de reglas donde importa el orden",
                    "Deben contener al menos 2 reglas para funcionar",
                    "Sirven para controlar el acceso del tráfico"
                ],
                correct: 2,
                explanation: "La afirmación falsa es que deban contener 2 reglas, ya que una ACL puede funcionar perfectamente con una sola regla."
            },
            {
                question: "Las formas de conexión al router para acceder a su configuración difieren bastante de las empleadas en los conmutadores. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. En general los métodos de acceso son muy similares a los de los switches gestionables (consola, ssh, telnet, web)."
            },
            {
                question: "Los routers domésticos (típicos para conexión de hogar)",
                options: [
                    "Se suelen configurar por telnet",
                    "Se suelen configurar por CLI",
                    "Se suelen configurar por web",
                    "Se suelen configurar por SSH"
                ],
                correct: 2,
                explanation: "Se suelen configurar por entorno web para facilitar su uso al usuario doméstico."
            },
            {
                question: "Telnet:",
                options: [
                    "Implica el uso de un navegador como Mozilla.",
                    "Se puede usar con una conexión al puerto LAN del router.",
                    "Implica el uso de un cable serie.",
                    "Implica el uso de un cable RJ45 específico de consola."
                ],
                correct: 1,
                explanation: "Se puede usar con una conexión al puerto LAN del router mediante un cliente de terminal."
            },
            {
                question: "¿Cuál es el objetivo principal de un router?",
                options: [
                    "Encontrar la ruta más adecuada para los paquetes.",
                    "Separar en diferentes segmentos de colisión",
                    "Acceder a una red LAN",
                    "Conectar los equipos a Internet"
                ],
                correct: 0,
                explanation: "Su función principal es el enrutamiento y búsqueda de la mejor ruta."
            },
            {
                question: "Sobre la DMZ, ¿cuál es correcta?",
                options: [
                    "Se usa habitualmente para ubicar servidores expuestos fuera",
                    "Son las iniciales de demilitarized zone",
                    "Los routers domésticos suelen incluir está opción",
                    "Todas las opciones anteriores son correctas"
                ],
                correct: 3,
                explanation: "Todas las características dadas describen correctamente a una DMZ."
            },
            {
                question: "La conexión de configuración vía web:",
                options: [
                    "Se emplea con navegadores de Microsoft.",
                    "Se debe hacer desde Internet.",
                    "Se puede emplear con cualquier navegador",
                    "Se puede hacer solamente desde una conexión LAN"
                ],
                correct: 2,
                explanation: "La administración web funciona bajo estándares que soportan cualquier navegador moderno."
            },
            {
                question: "Un router reenvía por todos sus puertos la información que le llega. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso, un router mira la dirección IP destino y solo envía por el puerto correspondiente de su tabla de enrutamiento."
            }
        ]
    },
    "Tema 4: Configuración y administración de protocolos dinámicos": {
        "Test 1": [
            {
                question: "La ruta por defecto en IPv6 es",
                options: [
                    "::/128",
                    "0:0:0:0:0:0:0/0",
                    "No hay ruta por defecto",
                    "0.0.0.0.0.0.0.0/0"
                ],
                correct: 1,
                explanation: "Aunque en la práctica se suele usar la notación comprimida `::/0`, el test del curso da por válida la opción expandida `0:0:0:0:0:0:0/0`."
            },
            {
                question: "Un protocolo enrutable:",
                options: [
                    "Identifica equipos y grupos de equipos.",
                    "Identifica equipos.",
                    "Identifica grupos de equipos solamente si es de enrutamiento también.",
                    "Identifica grupos de equipos."
                ],
                correct: 0,
                explanation: "Los protocolos enrutados (como IP o IPv6) proporcionan la estructura de direccionamiento que permite identificar tanto hosts individuales (equipos) como redes enteras (grupos)."
            },
            {
                question: "El protocolo enrutable:",
                options: [
                    "Identifica a cada sistema autónomo de manera única.",
                    "Es el encargado de comunicar dos sistemas autónomos.",
                    "Es utilizado por el protocolo de enrutamiento.",
                    "Encuentra la mejor ruta entre dos puntos de la red."
                ],
                correct: 2,
                explanation: "Un protocolo de enrutamiento (ej. OSPF, RIP) se encarga de aprender y mantener las rutas por donde viajan los paquetes encapsulados en el protocolo enrutable (IP)."
            },
            {
                question: "DIJKSTRA es un algoritmo que se emplea en:",
                options: [
                    "Protocolos enrutados.",
                    "Protocolos de estado de enlace.",
                    "En todos los protocolos IGP.",
                    "Protocolos de vector distancia."
                ],
                correct: 1,
                explanation: "El algoritmo Shortest Path First (SPF) de Dijkstra es la base matemática sobre la cual operan los protocolos de Estado de Enlace como OSPF o IS-IS."
            },
            {
                question: "El protocolo OSPF es un protocolo de enrutamiento",
                options: [
                    "Dinámico interior",
                    "Dinámico exterior",
                    "Hibrido",
                    "Estático"
                ],
                correct: 0,
                explanation: "OSPF (Open Shortest Path First) se utiliza como un IGP (Interior Gateway Protocol) para rutear el tráfico dentro de un único Sistema Autónomo."
            },
            {
                question: "Un sistema autónomo:",
                options: [
                    "Es una red LAN gestionada por una sola entidad.",
                    "Es un conjunto de routers con direcciones IP privadas.",
                    "Es un conjunto de redes que incluye routers y que está gestionada por una sola entidad.",
                    "Es una red LAN que incluye routers y que está gestionada por una sola persona."
                ],
                correct: 2,
                explanation: "Un Sistema Autónomo (AS) es una agrupación de redes IP y routers bajo la autoridad de una única organización (ISP, gran empresa) que presenta una política de enrutamiento común y definida hacia internet."
            },
            {
                question: "El enrutamiento estático:",
                options: [
                    "Es mejor en redes extensas",
                    "Todas las anteriores",
                    "Se configura manualmente",
                    "Consume más ancho de banda"
                ],
                correct: 2,
                explanation: "El enrutamiento estático requiere que el administrador ingrese las rutas en la tabla de ruteo de cada router una por una manual y explícitamente."
            },
            {
                question: "La distancia administrativa:",
                options: [
                    "Es el estado de enlace de los routers configurados con BGP.",
                    "Nunca puede tomar el valor cero.",
                    "Es el número de saltos entre dos puntos de la red.",
                    "Es una referencia para comparar diferentes métricas."
                ],
                correct: 3,
                explanation: "La Distancia Administrativa (AD) es la métrica de 'confiabilidad' que usa el router de Cisco para elegir la mejor ruta cuando aprende el mismo destino a través de diferentes protocolos de enrutamiento."
            },
            {
                question: "El enrutamiento en IPv6 respecto a IPv4",
                options: [
                    "Hay protocolos específicos como RIPng, OSPFv3 o MP-BGP",
                    "Solo está permitido el enrutamiento dinámico",
                    "No hay cambios puesto que es el mismo nivel TCP/IP",
                    "No hay cambios puesto que es el mismo nivel OSI"
                ],
                correct: 0,
                explanation: "Dado que IPv6 es un protocolo de Capa 3 diferente e incompatible a nivel de red, los protocolos de enrutamiento necesitaron de nuevas versiones ('Next Generation' o 'v3') capaces de anunciar prefijos de 128 bits."
            },
            {
                question: "Indica el protocolo de enrutamiento exterior:",
                options: [
                    "EIGRP",
                    "IGP",
                    "AGP",
                    "BGP"
                ],
                correct: 3,
                explanation: "El BGP (Border Gateway Protocol) es el EGP estándar que rutea todo el tráfico inter-dominio que conforma internet."
            }
        ],
        "Test 2": [
            {
                question: "Resumen de rutas",
                options: [
                    "Es acortar rutas utilizando el trayecto más corto",
                    "Todas las anteriores",
                    "Persiguen obtener tablas de enrutamiento más pequeñas",
                    "Con la utilización de CIDR desapareció esta técnica"
                ],
                correct: 2,
                explanation: "La sumarización, o supernetting, condensa el anuncio de múltiples redes pequeñas contiguas englobándolas en una sola ruta con prefijo menor para optimizar RAM y recursos del router."
            },
            {
                question: "El enrutamiento estático no consume ancho de banda",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "A diferencia del dinámico, como los routers no deben enviarse mensajes de señalización (hello, actualizaciones) entre ellos su consumo de BW de enlace para rutas es cero."
            },
            {
                question: "Una interface pasiva es aquella por la que no se envía información relativa al enrutamiento dinámico",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Configurar un puerto como 'passive interface', por ejemplo hacia una LAN final, detiene el envío de multicasts de ruteo añadiendo una gran capa de seguridad."
            },
            {
                question: "En la configuración de OSPF, si quiero hacer referencia a una red de clase A, la máscara wildcard será:",
                options: [
                    "0.0.255.255",
                    "10.255.255.255",
                    "255.0.0.0",
                    "0.255.255.255"
                ],
                correct: 3,
                explanation: "La red predeterminada clase A usa bits 11111111 (255) en su primer octeto de subnet, con lo cual su invesa Wildcard es un cero en este y unos para las porciones de host."
            },
            {
                question: "La técnica basada en el vector distancia:",
                options: [
                    "Se utiliza en protocolos enrutados.",
                    "Cuenta el retardo a todos los nodos de la red.",
                    "Se utiliza solo en protocolos EGP",
                    "La información se intercambia entre nodos vecinos."
                ],
                correct: 3,
                explanation: "El enrutamiento 'por rumor' provoca que un router le entregue a sus conectados inmediatos lo que a oido de los demás."
            },
            {
                question: "El área es un parámetro que se configura en:",
                options: [
                    "RIP",
                    "RIPv2",
                    "OSPF",
                    "RIPv1"
                ],
                correct: 2,
                explanation: "OSPF obliga a dividir y escalar la red obligatoriamente mediante un concepto de dominios o 'Áreas' unidos por regla estricta al Área 0 (Backbone)."
            },
            {
                question: "Un protocolo de enrutamiento es exterior o interior:",
                options: [
                    "Si actúa dentro o fuera de una red LAN.",
                    "Si es RIP o OSPF",
                    "Si actúa dentro o fuera de un sistema autónomo.",
                    "Si actúa dentro o fuera de una red WAN."
                ],
                correct: 2,
                explanation: "Si maneja flujos entre la organización e Internet es un EGP, si optimiza cómo alcanzan de origen a destino internamente los paquetes a sus departamentos es IGP."
            },
            {
                question: "Direccionamiento sin clase",
                options: [
                    "Es el primer tipo de direccionamiento que se usó",
                    "Permite usar rangos públicos de máscaras",
                    "Permite 3 tamaños de redes",
                    "Consiste en utilizar una máscara asociada a la IP"
                ],
                correct: 3,
                explanation: "CIDR ignora los bytes fijos del direccionamiento primitivo clásico, dejando que la IP venga adjunta con su correspondiente valor de máscara (ej. /23)."
            },
            {
                question: "RIPv2",
                options: [
                    "Es un protocolo exterior",
                    "Es un protocolo dinámico",
                    "Es un protocolo enrutable",
                    "Es un protocolo con clase"
                ],
                correct: 1,
                explanation: "Es el ejemplo más claro y estudiado de Routing Information Protocol que ya de forma dinámica transporta submáscaras variables logradas por VLSM."
            },
            {
                question: "Indica el protocolo de enrutamiento interior:",
                options: [
                    "EGP",
                    "Estático",
                    "OSPF",
                    "BGP"
                ],
                correct: 2,
                explanation: "OSPF es el Interior Gateway Protocol más usado mundialmente en topologías de tamaño medio a inmenso que exigen convergencia rapidísima."
            }
        ],
        "Test 3": [
            {
                question: "La métrica de una ruta:",
                options: [
                    "Es el costo de una ruta.",
                    "Es el número de saltos que da un mensaje para llegar al destino.",
                    "Es el número de routers que se atraviesan en una ruta.",
                    "Es el ancho de banda de una ruta."
                ],
                correct: 0,
                explanation: "Es el valor algoritmico numérico que representa lo 'costoso' o penalizante de cruzar por dicho trayecto, en la cual el router buscará siempre matemáticamente el número más bajito (coste menor)."
            },
            {
                question: "El protocolo IP es un protocolo enrutable. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Sí, es el protocolo pilar capaz de proveer direcciones a los datos para ir de la IP origen de la cabecera, a la destino de la misa."
            },
            {
                question: "En el enrutamiento dinámico los routers aprenden del entorno y construyen la tabla de enrutamiento",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Sí, logran detectar de manera no supervisada roturas, cortes, congestiones y descubrir nuevas rutas al vuelo para autosanarse sin el administrador."
            },
            {
                question: "Sistema autónomo",
                options: [
                    "Es un grupo de redes que forman parte de una entidad",
                    "Utiliza una misma técnica de enrutamiento",
                    "Está identificado por un número",
                    "Todas las anteriores"
                ],
                correct: 3,
                explanation: "Un AS se reconoce e interactúa bajo un único número lógico universal o privado (ASN) y puede poseer protocolos de gestión central."
            },
            {
                question: "La técnica basada en el estado del enlace:",
                options: [
                    "Calcula el coste con todos los nodos de la red.",
                    "Cuenta sólo el número de routers que hay entre el origen y el destino.",
                    "Es la técnica utilizada por RIP.",
                    "Intercambia información sólo con los nodos vecinos."
                ],
                correct: 0,
                explanation: "Al construir un mapa general sobre el que asiente el SPF para evitar bucles como hace OSPF."
            },
            {
                question: "La wildcard asociada a la red 88.2.188.0/25 es",
                options: [
                    "0.0.0.255",
                    "255.255.255.128",
                    "255.255.255.0",
                    "0.0.0.127"
                ],
                correct: 3,
                explanation: "Al tener la máscara .128 en su último octeto de red nos quedan 127 libres (el máximo posible era 255) haciendo que la diferencia en la subred final equivalga a 0.0.0.127."
            },
            {
                question: "¿Un protocolo enrutable siempre es también un protocolo de enrutamiento?",
                options: [
                    "El enrutable sabe encontrar la mejor ruta y el de enrutamiento tiene otra función.",
                    "No, son dos conceptos diferentes.",
                    "Sí, siempre.",
                    "Solo el IP."
                ],
                correct: 1,
                explanation: "No confundir nunca: 'Enrutable' (la carta postal y su remite/Destino - IP) con 'De Enrutamiento' (los camiones, aviones, centros logísticos y rutas por donde viajan las cartas - RIP, OSFP, BGP)."
            },
            {
                question: "BGP es un protocolo de enrutamiento:",
                options: [
                    "EGP",
                    "Interior",
                    "RIP",
                    "IGP"
                ],
                correct: 0,
                explanation: "Exterior Gateway Protocol (El que une a Telefónica, Amazon y Google en el mundo)."
            },
            {
                question: "Protocolos de enrutamiento para IPv6",
                options: [
                    "MP-BGP",
                    "RIPv2",
                    "RIPng",
                    "MP-BGP, RIPng y OSPFv3"
                ],
                correct: 3,
                explanation: "Son las correspondencias 'Next-Gen' o modificadas para el espacio de direcciones IP largo."
            },
            {
                question: "RIP y BGP son dos protocolos de enrutamiento. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Ambos definen de una forma o su contraria como transportar paquetes."
            }
        ]
    },
    "Tema 5: Configuración y administración de conmutadores. Internet de las cosas": {
        "Test 1": [
            {
                question: "El dispositivo capaz de crear más de un dominio de colisión...",
                options: [
                    "Puede ser concentrador, conmutador o router.",
                    "No existe.",
                    "Es un conmutador.",
                    "Es un concentrador."
                ],
                correct: 2,
                explanation: "Un conmutador (switch) microsegmenta la red, es decir, cada uno de sus puertos pertenece a un dominio de colisión independiente."
            },
            {
                question: "Auto-MDIX",
                options: [
                    "Son las iniciales de Multiple Disconect Interface, X indica el numero del puerto",
                    "Tecnología que detecta la velocidad de la interface y se adapta a la velocidad detectada",
                    "Tecnología que detecta si es necesario cruzar los cables al conectar 2 dispositivos",
                    "Ninguna de las anteriores"
                ],
                correct: 2,
                explanation: "Auto-MDIX (Automatic Medium-Dependent Interface Crossover) permite que el puerto configure internamente los pines de Rx/Tx para que no importe si usas un cable cruzado o directo."
            },
            {
                question: "Todos los conmutadores trabajan en el nivel 1, 2 y 3 de OSI, ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Los conmutadores 'puros' o clásicos solo trabajan en los niveles 1 (físico) y 2 (enlace). Solamente los switches 'Multicapa' o 'Capa 3' llegan hasta el nivel de red."
            },
            {
                question: "Los puertos de un switch:",
                options: [
                    "También se denominan interfaces",
                    "Siempre es un número par",
                    "Son un número de 16 bits",
                    "No pueden superar 24 puertos"
                ],
                correct: 0,
                explanation: "En la terminología de redes, los puertos físicos de conexión de un switch o router se denominan comúnmente 'interfaces'."
            },
            {
                question: "¿Qué es segmentar una red?",
                options: [
                    "Crear varios dominios de colisión.",
                    "Crear un segmento de red.",
                    "Conectar un hub.",
                    "Conectar dos nodos entre sí."
                ],
                correct: 0,
                explanation: "Segmentar es dividir físicamente un gran dominio donde todos colisionan con todos, en dominios pequeñitos e independientes mediante switches o puentes."
            },
            {
                question: "Un switch gestionable es lo mismo que un switch apilable, ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Apilable (Stackable) significa que se pueden unir varios mediante cables especiales para que actúen como uno solo. Gestionable significa que tiene sistema operativo (CLI/Web) para configurarlo."
            },
            {
                question: "Las tablas alojadas en los conmutadores...",
                options: [
                    "Los conmutadores no pueden contener tablas.",
                    "Contienen solamente las direcciones MAC de los equipos de la red.",
                    "Son aprendidas del entorno y almacenan direcciones y puertos.",
                    "Se graban cuando se fabrican y no se pueden cambiar."
                ],
                correct: 2,
                explanation: "La tabla CAM (Content Addressable Memory) se va autocompletando dinámicamente según el switch 'escucha' en qué puerto está hablando cada MAC de origen."
            },
            {
                question: "Un switch de configuración fija:",
                options: [
                    "No se puede conectar a un switch modular",
                    "Ninguna de las anteriores",
                    "No se puede conectar a otro switch de configuración fija",
                    "No se puede conectar a un switch apilable"
                ],
                correct: 1,
                explanation: "Que un switch sea de configuración fija (no se le pueden añadir más puertos mediante módulos o tarjetas) no limita en absoluto a qué otros aparatos lo puedes conectar por Ethernet."
            },
            {
                question: "Tasa de reenvío",
                options: [
                    "Define la capacidad de procesamiento de un switch",
                    "Es la velocidad en bits por segundo a la que un switch envía un paquete",
                    "Define la capacidad de reenvio simultaneo",
                    "Es la velocidad en bytes por segundo a la que un switch envía un paquete"
                ],
                correct: 0,
                explanation: "La 'Forwarding Rate' (Tasa de Reenvío), expresada en Mpps (Millones de paquetes/tramas por segundo), mide la potencia pura del procesador del switch."
            },
            {
                question: "QoS:",
                options: [
                    "Es recomendable en VoIP",
                    "Sirve para asegurar un ancho de banda a un determinado servicio",
                    "Son las iniciales de Quality of Service",
                    "Todas las anteriores"
                ],
                correct: 3,
                explanation: "QoS (Calidad de Servicio) etiqueta y prioriza tráfico crítico como la voz (VoIP) o vídeo para que no sufra retrasos ni pérdida de calidad aunque la red esté saturada."
            }
        ],
        "Test 2": [
            {
                question: "Todos los switchs trabajan en la capa:",
                options: [
                    "Ninguna de las anteriores",
                    "Al menos capa 4",
                    "Al menos capa 2",
                    "Al menos capa 3"
                ],
                correct: 2,
                explanation: "La característica definitoria de cualquier switch es leer cabeceras MAC para enviar tramas, una tarea exclusiva de la Capa 2 del modelo OSI (Enlace de datos)."
            },
            {
                question: "Para pasar de modo usuario a modo privilegiado empleamos el comando:",
                options: [
                    "exec enable.",
                    "config.",
                    "enable.",
                    "exec."
                ],
                correct: 2,
                explanation: "En los sistemas IOS de Cisco, el comando `enable` realiza la transición del modo User EXEC (`>`) al Privileged EXEC (`#`)."
            },
            {
                question: "Configuración de switchs:",
                options: [
                    "Todos los switchs son configurables al menos por telnet",
                    "Los switchs de gama baja no son configurables",
                    "Todos los switchs son configurables",
                    "Todos los switchs son configurables o por telnet o vía web"
                ],
                correct: 1,
                explanation: "Los switches domésticos o baratos (Unmanaged o 'Tontos') no traen sistema operativo ni IP, por lo tanto no pueden ser configurados ni gestionados de ninguna manera."
            },
            {
                question: "Agregación de enlaces:",
                options: [
                    "Puede estar formada por 2 o más cables entre dos switchs",
                    "Hay switchs que no disponen de esta característica",
                    "Todas las anteriores",
                    "Es una técnica que permite aumentar el ancho de banda entre 2 switchs"
                ],
                correct: 2,
                explanation: "El Link Aggregation (LACP / EtherChannel) suma varios cables físicos (ej: 4 cables Gigabit) para lograr un colector unificado de más velocidad (ej: 4 Gbps lógicos)."
            },
            {
                question: "Conmutación asimétrica",
                options: [
                    "Significa que se descarga a más velocidad que se sube",
                    "Significa que se descarga a menos velocidad que se sube",
                    "Permite conectar, por ejemplo, una interface 100Mbps con otra 1Gbps",
                    "La mayoría de los switchs actuales son simétricos"
                ],
                correct: 2,
                explanation: "La conmutación asimétrica se dota de memoria RAM (buffers) en sus puertos para poder recibir un chorro gigantesco de datos de un servidor Gigabit y frenarlo para inyectarlo sin pérdidas a un PC de 10 Mbps."
            },
            {
                question: "Protocolo ARP",
                options: [
                    "Solo: Asocia IPs y direcciones MAC",
                    "Solo: Mantiene una caché de asignaciones",
                    "Asocia IPs a MACs, mantiene una caché, y es similar a DNS pero en un nivel inferior",
                    "Es la última versión y se llama RARP"
                ],
                correct: 2,
                explanation: "ARP se encarga de gritar preguntando '¿Quién tiene esta IP?' para conseguir su MAC y guardarla un rato en una tabla/caché para no volver a preguntar. Por ello actúa conceptualmente como un DNS pero de IPs a MACs."
            },
            {
                question: "Un conmutador de nivel 3...",
                options: [
                    "También trabaja en los niveles 1 y 2.",
                    "Trabaja solamente en el nivel enlace.",
                    "No es posible, los conmutadores son de nivel 2.",
                    "Opera solamente en el nivel de red pero no en el nivel enlace."
                ],
                correct: 0,
                explanation: "Como todo dispositivo de red, si sube a una capa superior (Nivel 3, para rutear) debe forzosamente entender los campos de las capas inferiores por las que han circulado los bits antes (el cable físico 1 y la MAC 2)."
            },
            {
                question: "STP",
                options: [
                    "Crea una red lógica en árbol",
                    "Sirve para evitar bucles de broadcast",
                    "Crea un árbol lógico para evitar bucles. Significa Spanning Tree Protocol y dispone de versiones actuales",
                    "Ninguna de sus siglas es Spanning Tree"
                ],
                correct: 2,
                explanation: "STP (Spanning Tree Protocol) monitoriza todas las rutas redundantes conmutadas de la red y desactiva algunas selectivamente (dejando un 'árbol' sin ciclos o bucles) para que una trama de broadcast no gire y bloquee el switch infinitamente."
            },
            {
                question: "Power over Ethernet en un switch:",
                options: [
                    "Todos los switchs tienen esta característica",
                    "Es aconsejable adquirir siempre los switchs con esta característica",
                    "Un switch siempre tiene al menos un puerto con la característica PoE",
                    "Si no se va a usar esta característica es mejor adquirirlo sin PoE para ahorrar costes"
                ],
                correct: 3,
                explanation: "Las fuentes de alimentación robustas que requieren los switchs PoE disparan muchísimo los costes operativos y de adquisición. Por eso no es rentable un despliegue de estas características si solo conectaras PCs normales."
            }
        ],
        "Test 3": [
            {
                question: "Cuando una trama entra en un conmutador por un puerto de origen:",
                options: [
                    "Diferente al de destino, se descarta.",
                    "Igual al puerto destino, se reenvía por ese puerto.",
                    "Diferente al de destino, se reenvía por el puerto destino.",
                    "Igual al de destino, se descarta"
                ],
                correct: 3,
                explanation: "Si el destino y el origen están ambos colgando por el mismo puerto físico (porque haya un pequeño hub conectado ahí con ambos equipos enchufados), enviar la trama desde el origen a través de dicho puerto solo la devolvería hacia atrás. Por consiguiente se queda local dentro del hub y el switch simplemente la descarta."
            },
            {
                question: "Cuando administramos un conmutador y podemos cambiar su configuración utilizando la línea de comandos podemos trabajar en modo:",
                options: [
                    "Modo usuario porque podemos consultar el estado de la configuración.",
                    "Modo usuario y modo privilegiado.",
                    "Modo usuario porque nos permite cambiar parámetros.",
                    "Modo privilegiado."
                ],
                correct: 3,
                explanation: "El modo usuario (`User EXEC`) solo permite utilizar contados comandos básicos de monitorización. No se puede configurar de ninguna forma si  no se escalan los privilegios."
            },
            {
                question: "Telnet:",
                options: [
                    "Es menos seguro que ssh.",
                    "Es lo mismo que ssh.",
                    "Es más seguro que ssh.",
                    "Se utiliza para configurar concentradores."
                ],
                correct: 0,
                explanation: "Telnet viaja en texto total y absolutamente plano. Cualquier software sniffer conectado en medio puede capturar la sesión y ver tu contraseña escrita sin ninguna dificultad."
            },
            {
                question: "Una pila de conmutadores es:",
                options: [
                    "Varios conmutadores unidos entre sí por el puerto uplink.",
                    "Un conjunto de conmutadores que funcionan como una sola entidad.",
                    "Varios conmutadores unidos entre sí por un puerto RJ45.",
                    "Varios conmutadores unidos por el puerto consola."
                ],
                correct: 1,
                explanation: "El apilado ('Stacking') en switches permite unificarlos a través de cables propietarios especiales de enorme velocidad (que ni son uplink, ni son RJ45 simple) para luego configurarlos todos desde un único menú maestro logico."
            },
            {
                question: "SNMP",
                options: [
                    "Es un protocolo para administración de red",
                    "Es un protocolo de gestión de correo",
                    "Es un protocolo para evitar tormentas de broadcast",
                    "Es un protocolo para evitar bucles"
                ],
                correct: 0,
                explanation: "Significa Simple Network Management Protocol. Se usa extensivamente con agentes en los dispositivos para recoger datos en tiempo real de temperatura, uso de cpu o interfaces caídas y volcarlo a herramientas visuales y alertas centralizadas de administración."
            },
            {
                question: "Un conmutador reenvía por todos sus puertos la información que le llega, ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Rotundamente falso, porque precisamente esa es la labor destructiva de los obsoletos concentradores (Hubs). El switch aprende dónde se ubican los destinatarios de las tramas buscando en su tabla, y las reenvía ÚNICAMENTE por el puerto estricto y exacto el cual corresponda al destinatario."
            },
            {
                question: "Los dispositivos que crean diferentes dominios de colisión son",
                options: [
                    "Routers y hubs",
                    "Solamente los hubs.",
                    "Puentes, switchs y routers.",
                    "Solamente los routers."
                ],
                correct: 2,
                explanation: "Históricamente lo lograban los costosos puentes. Hoy en día es el pan de cada día de los conmutadores multicapa (switchs). Los routers cortan tanto colisiones como broadcast."
            },
            {
                question: "Al segmentar una red...",
                options: [
                    "Disminuyo el ancho de banda",
                    "Reparto el ancho de banda.",
                    "Aumento el ancho de banda.",
                    "Creo un único segmento de red."
                ],
                correct: 1,
                explanation: "En vez de que el canal se inunde con todo emitiendo a la vez de forma estruendosa en un único hilo, repartes matemáticamente la banda de capacidad equitativamente en pequeñas parcelas (anillos/pianos de cables) con ancho garantizado sin que tropiecen."
            },
            {
                question: "El conmutador envía la información hacia uno u otro segmento de red.",
                options: [
                    "Porque reconoce las direcciones físicas de los equipos conectados.",
                    "Porque utiliza las direcciones IP para identificar los destinos.",
                    "Por el protocolo http.",
                    "Porque reenvía la información a todos sus puertos."
                ],
                correct: 0,
                explanation: "Su función y existencia tiene sentido y viabilidad económica gracias a que su firmware y chips ASIC detectan la Dirección Física ('MAC address') y encarrilan el tren digital por la correspondiente aguja."
            },
            {
                question: "Un concentrador reenvía por todos sus puertos la información que le llega excepto por el puerto que la recibe. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Un hub o concentrador copia a nivel voltaje 1:1 toda modulación de datos por cada pin eléctrico de la caja para que los demás lo escuchen. Como no tiene lógica propia para filtrar, es imposible que reenvíe algo hacia atrás si choca contra sí misma (por simple ley física de cables directos de tx/rx)."
            }
        ]
    },
    "Tema 6: Configuración del acceso a Internet desde una LAN": {
        "Test 1": [
            {
                question: "HSDPA es una tecnología...",
                options: ["WAN", "PAN", "LAN", "MAN"],
                correct: 0,
                explanation: "High Speed Downlink Packet Access (HSDPA) es una mejora de la red 3G (UMTS) que proporciona mayor velocidad de descarga en redes móviles WAN."
            },
            {
                question: "Dirección local externa es la dirección...",
                options: [
                    "IP externa (normalmente pública) que se asigna al dispositivo interno cuando sale del router NAT.",
                    "IP local (normalmente privada) del dispositivo que origina la comunicación.",
                    "IP local del dispositivo destino en la red externa.",
                    "IP externa (normalmente pública) de destino."
                ],
                correct: 3,
                explanation: "En NAT, la dirección 'Local Externa' se refiere a la dirección IP pública del destino tal como se ve desde la red local."
            },
            {
                question: "LTE es una tecnología...",
                options: ["2G", "4G", "3G", "G+"],
                correct: 1,
                explanation: "Long Term Evolution (LTE) es el estándar comercial de cuarta generación (4G) para comunicaciones móviles."
            },
            {
                question: "Marca los accesos inalámbricos correctos:",
                options: ["ADSL", "BPL", "WIFI", "Tanto WIFI como Bluetooth son inalámbricos"],
                correct: 3,
                explanation: "WIFI y Bluetooth son tecnologías inalámbricas, mientras que ADSL y BPL son cableadas."
            },
            {
                question: "Los canales WIFI de los estándares 802.11b y 802.11g...",
                options: [
                    "Son 15",
                    "Se debe elegir el primero si está libre.",
                    "Son una referencia, se pueden usar otras frecuencias.",
                    "Sus frecuencias se solapan"
                ],
                correct: 3,
                explanation: "En la banda de 2.4 GHz, los canales se solapan entre sí. Los únicos canales que no se solapan son el 1, 6 y 11."
            },
            {
                question: "NAT es una técnica...",
                options: [
                    "Utilizada habitualmente en los routers domésticos.",
                    "Consistente en manipular los datos de los paquetes.",
                    "Utilizada por los grandes routers empresariales.",
                    "Ninguna de las anteriores."
                ],
                correct: 0,
                explanation: "Network Address Translation (NAT) permite conectar múltiples dispositivos de una red privada a Internet usando una sola dirección IP pública."
            },
            {
                question: "La asignación de IPs en Europa la realiza...",
                options: ["ARIN", "IANA", "RIPE", "LANIC"],
                correct: 2,
                explanation: "RIPE NCC es el registro regional de Internet (RIR) para Europa, Oriente Medio y partes de Asia Central."
            },
            {
                question: "UMTS es una tecnología...",
                options: ["G+", "2G", "4G", "3G"],
                correct: 3,
                explanation: "Universal Mobile Telecommunications System (UMTS) es la tecnología sucesora de GSM y pertenece a la tercera generación (3G)."
            },
            {
                question: "La diferencia entre NAT dinámica con sobrecarga y sin sobrecarga es...",
                options: [
                    "Con sobrecarga solo manipula las IPs.",
                    "Sin sobrecarga no manipula los puertos.",
                    "Sin sobrecarga permite tener la misma IP pública asignada a dos IPs privadas.",
                    "Ninguna"
                ],
                correct: 1,
                explanation: "La NAT con sobrecarga (PAT) utiliza los números de puerto para distinguir entre diferentes flujos de datos desde una sola IP pública."
            },
            {
                question: "Marca los accesos cableados correctos:",
                options: ["BPL", "HomeRF", "FTTH", "BPL, ADSL y FTTH son cableados"],
                correct: 3,
                explanation: "BPL (luz), ADSL (teléfono) y FTTH (fibra) son medios físicos cableados. HomeRF es inalámbrico."
            }
        ],
        "Test 2": [
            {
                question: "¿Qué es una red Ad-hoc?",
                options: [
                    "Es una topología de red inalámbrica",
                    "Es una tecnología WPAN",
                    "Es un tipo de encriptación",
                    "Es un modo de seguridad"
                ],
                correct: 0,
                explanation: "Una red Ad-hoc es una topología descentralizada donde los dispositivos se conectan directamente entre sí sin un punto de acceso central."
            },
            {
                question: "Medidas de seguridad recomendadas en conexiones WIFI:",
                options: [
                    "Seguridad WPA3",
                    "Filtrado de direcciones MAC",
                    "Evitar el uso de parámetros predeterminados",
                    "Todas las anteriores son medidas de seguridad válidas"
                ],
                correct: 3,
                explanation: "Aunque WPA3 es la más fuerte, el filtrado MAC y cambiar las claves por defecto son prácticas comunes de seguridad adicional."
            },
            {
                question: "NAT inversa se puede entender como:",
                options: [
                    "Permitir entrar en una LAN desde internet",
                    "Puerto activo y listo para usar por una aplicación",
                    "Conceder permisos en un firewall",
                    "Escuchar por un puerto"
                ],
                correct: 0,
                explanation: "La NAT inversa (DNAT o Port Forwarding) permite que una petición externa llegue a un servidor específico dentro de nuestra red local."
            },
            {
                question: "WIFI 2.4 GHz tiene más alcance que WIFI 5GHz:",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Las frecuencias bajas (2.4 GHz) tienen mayor longitud de onda y penetran mejor las paredes, ofreciendo más alcance que las frecuencias altas (5 GHz)."
            },
            {
                question: "La 'Dirección global interna' es la dirección:",
                options: [
                    "IP local (normalmente privada) del dispositivo que origina la comunicación",
                    "IP local del dispositivo destino en la red externa",
                    "IP externa (normalmente pública) de destino",
                    "IP externa (normalmente pública) que se asigna al dispositivo interno cuando sale del router NAT"
                ],
                correct: 3,
                explanation: "Global Interna es como el mundo exterior ve a nuestro equipo: con nuestra dirección IP pública."
            },
            {
                question: "NAT dinámica (con sobrecarga) puede tratarse de:",
                options: [
                    "Traducción de uno a uno",
                    "No hay traducción",
                    "Traducción de varios a uno",
                    "Traducción de varios a varios"
                ],
                correct: 2,
                explanation: "También conocido como PAT, permite que muchos dispositivos internos compartan una única dirección IP pública."
            },
            {
                question: "La 'Dirección local interna' es la dirección:",
                options: [
                    "IP local del dispositivo destino en la red externa",
                    "IP externa que se asigna al dispositivo interno",
                    "IP local (normalmente privada) del dispositivo que origina la comunicación",
                    "IP externa (normalmente pública) de destino"
                ],
                correct: 2,
                explanation: "Local Interna es la dirección IP privada real del dispositivo dentro de nuestra propia red local."
            },
            {
                question: "Marca la seguridad más fiable:",
                options: ["WEP", "WPA3", "WPA2", "WPA"],
                correct: 1,
                explanation: "WPA3 es el estándar de seguridad más moderno y robusto actualmente disponible para redes Wi-Fi."
            },
            {
                question: "ZigBee es una tecnología:",
                options: ["WMAN", "WLAN", "WWAN", "WPAN"],
                correct: 3,
                explanation: "ZigBee es un protocolo de bajo consumo para redes de área personal inalámbricas (WPAN), orientado a domótica."
            },
            {
                question: "NAT Masivo (Carrier-Grade NAT) se caracteriza por:",
                options: [
                    "Usar el rango 100.64.0.0/10",
                    "Compartir IPs públicas para muchos usuarios",
                    "Ser una traducción realizada por el ISP",
                    "Todas las anteriores son características de CGNAT"
                ],
                correct: 3,
                explanation: "El CGNAT permite que los operadores (ISP) ahorren direcciones IPv4 traduciendo el tráfico dentro de su propia infraestructura central."
            }
        ],
        "Test 3": [
            {
                question: "NAT Destino",
                options: [
                    "Consiste en cambiar el puerto destino.",
                    "Es lo mismo que la NAT Origen.",
                    "Es manipular la IP de Origen.",
                    "Suele estar asociada a una NAT Origen."
                ],
                correct: 3,
                explanation: "La NAT de destino se usa para redirigir peticiones entrantes, y a menudo requiere una regla de NAT de origen para gestionar la vuelta del tráfico."
            },
            {
                question: "NAT dinámica (sin sobrecarga) puede tratarse de:",
                options: [
                    "Traducción de varios a varios o varios a uno según disponibilidad",
                    "No hay traducción",
                    "Traducción de uno a uno estricta",
                    "Traducción de puertos exclusivamente"
                ],
                correct: 0,
                explanation: "En la NAT dinámica sin sobrecarga, una IP local se mapea a una IP pública disponible de un pool o grupo, de forma temporal."
            },
            {
                question: "NFC es una tecnología:",
                options: ["LAN", "WAN", "MAN", "PAN"],
                correct: 3,
                explanation: "Near Field Communication (NFC) es de muy corto alcance, por lo tanto se clasifica como Red de Área Personal (PAN)."
            },
            {
                question: "SSID",
                options: [
                    "Es un identificador de PC",
                    "Ninguna de las anteriores",
                    "Es la MAC asociada a un dispositivo inalámbrico",
                    "Es un identificador que permite elegir una red inalámbrica entre varias"
                ],
                correct: 3,
                explanation: "El Service Set Identifier (SSID) es el nombre público de una red inalámbrica."
            },
            {
                question: "NAT estática es una:",
                options: [
                    "Traducción de varios a varios",
                    "Traducción de uno a varios",
                    "Traducción de uno a uno",
                    "Traducción de varios a uno"
                ],
                correct: 2,
                explanation: "La NAT estática crea un mapeo fijo y permanente entre una IP privada local y una IP pública externa."
            },
            {
                question: "WIFI es una tecnología:",
                options: ["MAN", "PAN", "WAN", "LAN"],
                correct: 3,
                explanation: "Wi-Fi (IEEE 802.11) es el estándar por excelencia para Redes de Área Local inalámbricas (WLAN)."
            },
            {
                question: "WDS:",
                options: [
                    "Permite comunicar entre sí equipos y da acceso a puntos de acceso",
                    "Ninguna de las anteriores",
                    "Permite comunicar entre sí puntos de acceso y da acceso a equipos",
                    "Permite comunicar entre sí puntos de acceso pero no da acceso a equipos"
                ],
                correct: 2,
                explanation: "Wireless Distribution System (WDS) permite que los puntos de acceso hablen entre sí sin cables y a la vez den servicio a los clientes."
            },
            {
                question: "Para redes privadas locales NO se puede utilizar la red:",
                options: [
                    "192.0.0.0/24",
                    "172.23.0.0/16",
                    "192.168.0.0/24",
                    "172.16.0.0/16"
                ],
                correct: 0,
                explanation: "192.0.0.0/24 es un rango especial reservado para protocolos de infraestructura, no es para uso en red privada (RFC 1918)."
            },
            {
                question: "NAT Origen:",
                options: [
                    "Cambia el puerto de origen",
                    "Ninguna de las anteriores",
                    "Cambia la IP de origen.",
                    "Cambia los puertos de origen."
                ],
                correct: 2,
                explanation: "La SNAT (Source NAT) modifica la cabecera IP para que el paquete parezca venir de la IP externa del router en lugar del PC interno."
            },
            {
                question: "Puedo trabajar a través mi móvil con el PC de casa:",
                options: ["Verdadero", "Falso", "N/A", "Depende del router"],
                correct: 0,
                explanation: "Sí, mediante técnicas como VPN, Escritorio Remoto con NAT inversa o herramientas como AnyDesk/TeamViewer."
            }
        ]
    },
    "Tema 7: Configuración de redes virtuales": {
        "Test 1": [
            {
                question: "¿Cuáles son los niveles del diseño jerárquico de una red?",
                options: [
                    "Núcleo, tronco y final",
                    "Todos los anteriores",
                    "Núcleo, enlaces troncales y dispositivos finales",
                    "Distribución, acceso y núcleo"
                ],
                correct: 3,
                explanation: "El modelo jerárquico de Cisco divide la red en tres capas: Acceso (conecta dispositivos), Distribución (agrega acceso y aplica políticas) y Núcleo (conmutación de alta velocidad)."
            },
            {
                question: "Los dispositivos finales de una red se encuentran",
                options: [
                    "En la capa de acceso",
                    "En la capa final",
                    "En la capa de núcleo",
                    "En la capa de distribución"
                ],
                correct: 0,
                explanation: "La capa de acceso es el punto en el que los usuarios y los dispositivos finales se conectan a la red de la organización."
            },
            {
                question: "Una VPN es",
                options: [
                    "Es una red personal visible",
                    "Una red privada que usa una red pública",
                    "Una red pública que usa una red privada",
                    "Una red personal virtual"
                ],
                correct: 1,
                explanation: "Una Virtual Private Network (VPN) crea un túnel cifrado sobre una infraestructura pública (como Internet) para extender una red privada de forma segura."
            },
            {
                question: "Un switch multicapa puede funcionar como un router",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Un switch de Capa 3 o multicapa tiene hardware especializado (ASICs) que le permite realizar enrutamiento IP a velocidades de cable."
            },
            {
                question: "La agregación de enlaces permite",
                options: [
                    "Estabilizar el ancho de banda",
                    "Disminuir el ancho de banda",
                    "Mantener el ancho de banda",
                    "Ampliar el ancho de banda"
                ],
                correct: 3,
                explanation: "La agregación de enlaces (como EtherChannel) combina varios enlaces físicos en uno lógico para aumentar el ancho de banda total y proporcionar redundancia."
            },
            {
                question: "¿En cuál de las capas del modelo jerárquico se da la mayor velocidad?",
                options: [
                    "Distribución",
                    "VLAN",
                    "Núcleo",
                    "Acceso"
                ],
                correct: 2,
                explanation: "La capa de núcleo (Core) es el backbone de la red y está diseñada para conmutar paquetes lo más rápido posible sin realizar procesos lentos como el filtrado de ACLs."
            },
            {
                question: "La capa de distribución",
                options: [
                    "Suele ser estática",
                    "Proporciona acceso de red",
                    "Gestiona la calidad de servicio",
                    "Es la periferia de la red"
                ],
                correct: 2,
                explanation: "La capa de distribución actúa como interfaz entre el acceso y el núcleo, encargándose de la agregación de enlaces, políticas de seguridad (ACL) y gestión de QoS."
            },
            {
                question: "Para comunicar equipos que están en dos VLANs diferentes necesitamos",
                options: [
                    "Es imposible comunicarlos",
                    "Enrutar el tráfico entre las VLANs",
                    "Conectar las VLANs a un puerto de la VLAN predeterminada",
                    "Conectar físicamente las 2 VLANs"
                ],
                correct: 1,
                explanation: "Como cada VLAN es un dominio de difusión diferente (Capa 2), se requiere un dispositivo de Capa 3 (router o switch multicapa) para enrutar el tráfico entre ellas."
            },
            {
                question: "Cada puerto configurado en modo acceso admite tráfico de",
                options: [
                    "Todas las VLAN",
                    "1 VLAN como máximo",
                    "La VLAN predeterminada y la VLAN asignada",
                    "2 VLANs como máximo"
                ],
                correct: 1,
                explanation: "Un puerto de acceso pertenece a una única VLAN de datos (aunque en telefonía IP puede admitir adicionalmente una VLAN de voz)."
            },
            {
                question: "Si ponemos todos los puertos en modo troncal",
                options: [
                    "Solo los puertos de la VLAN predeterminada comunicarán entre ellos",
                    "Todos los puertos comunican entre sí",
                    "No hay comunicación entre ellos",
                    "Solo los puertos de la VLAN nativa comunican entre sí"
                ],
                correct: 1,
                explanation: "Los enlaces troncales (trunk) están diseñados para transportar tráfico de múltiples VLANs; si todos los puertos son troncales, todos podrán transportar los datos de todas las VLANs."
            }
        ],
        "Test 2": [
            {
                question: "VTP es lo mismo que",
                options: [
                    "Virtual Trunking Protocol",
                    "Virtual Technical Protocol",
                    "Virtual Trust Protocol",
                    "Virtual Local Area Network Trunking Protocol"
                ],
                correct: 3,
                explanation: "VTP (VLAN Trunking Protocol) es un protocolo propietario de Cisco que permite sincronizar la base de datos de VLANs a través de múltiples switches en un mismo dominio."
            },
            {
                question: "La capa de acceso es la capa donde la velocidad es mayor",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. La capa de acceso suele tener las velocidades más bajas del modelo jerárquico (ej. 1Gbps hacia el usuario frente a 10/40/100Gbps en el núcleo)."
            },
            {
                question: "Un tipo de conexión VPN es",
                options: [
                    "De sitio a sitio",
                    "De internet a internet",
                    "De internet a sitio",
                    "De sitio a Internet"
                ],
                correct: 0,
                explanation: "Las VPN Site-to-Site conectan oficinas enteras entre sí de forma permanente y transparente para el usuario final."
            },
            {
                question: "Switch multicapa también se suele conocer como",
                options: [
                    "Switch capa 2",
                    "Switch capa 3",
                    "Switch OSI",
                    "Switch capa 4"
                ],
                correct: 1,
                explanation: "Se denomina Switch de Capa 3 porque es capaz de procesar cabeceras IP y tomar decisiones de enrutamiento además de las funciones básicas de Capa 2."
            },
            {
                question: "Al crear VLAN en un switch",
                options: [
                    "Enrutamos entre equipos conectados",
                    "Separamos físicamente los equipos",
                    "Desconectamos equipos",
                    "Separamos lógicamente los equipos"
                ],
                correct: 3,
                explanation: "Una VLAN (Virtual Local Area Network) permite segmentar una red física en múltiples redes lógicas independientes sin cambiar el cableado."
            },
            {
                question: "El encapsulamiento 802.1q también se denomina",
                options: [
                    "dotq1",
                    "Etherchannel",
                    "802.3ad",
                    "dot1q"
                ],
                correct: 3,
                explanation: "IEEE 802.1Q es el estándar de la industria para el etiquetado de VLANs (tagging), coloquialmente conocido como dot1q."
            },
            {
                question: "STP no afecta a la agregación de enlaces",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. STP opera sobre el enlace lógico resultante de la agregación (ej. EtherChannel) tratándolo como un único puerto para evitar bucles."
            },
            {
                question: "Una VPN es una red privada",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Aunque utilice una red pública como transporte, es 'privada' porque los datos viajan cifrados y solo son accesibles por los extremos autorizados."
            },
            {
                question: "Dot1q es lo mismo que",
                options: [
                    "Dotq1",
                    "802.1ak",
                    "802.3ad",
                    "802.1q"
                ],
                correct: 3,
                explanation: "Dot1q es la forma abreviada de referirse al protocolo estándar IEEE 802.1Q de etiquetado de tramas VLAN."
            },
            {
                question: "Un puerto configurado en modo troncal",
                options: [
                    "Admite solo tráfico de la VLAN nativa",
                    "Admite tráfico de diferentes VLANs",
                    "Admite tráfico nativo",
                    "Admite solo tráfico de la VLAN predetermina"
                ],
                correct: 1,
                explanation: "La función principal de un puerto 'trunk' es permitir el paso de múltiples VLANs a través de un único enlace físico entre switches."
            }
        ],
        "Test 3": [
            {
                question: "La agregación de enlaces consiste",
                options: [
                    "Utilizar varios enlaces entre dos dispositivos como si se tratase de un único enlace",
                    "Añadir más puertos a un router",
                    "Puentear varios enlaces",
                    "Añadir más puertos a un switch"
                ],
                correct: 0,
                explanation: "Consiste en agrupar interfaces físicas para formar una interfaz lógica de mayor capacidad (suma de anchos de banda) y con tolerancia a fallos."
            },
            {
                question: "La situación inicial en un switch que admite VLANs es",
                options: [
                    "Todos los puertos están en la VLAN predeterminada",
                    "Todos los puertos están en la VLAN administrativa",
                    "Todos los puertos están desconectados entre sí",
                    "Todos los puertos están en la VLAN nativa"
                ],
                correct: 0,
                explanation: "De fábrica, en los switches Cisco todos los puertos están asignados a la VLAN 1 (VLAN predeterminada)."
            },
            {
                question: "Marca los protocolos de túnel",
                options: [
                    "PPTP",
                    "L2TP",
                    "L2F",
                    "Todas las anteriores"
                ],
                correct: 3,
                explanation: "Protocolos como PPTP, L2TP, L2F e IPsec son tecnologías utilizadas para encapsular datos y crear túneles seguros en conexiones VPN."
            },
            {
                question: "Indica los protocolos para administración de redes virtuales",
                options: [
                    "MRP",
                    "VTP",
                    "VLAN Trunking Protocol",
                    "Todas las anteriores"
                ],
                correct: 3,
                explanation: "VTP (VLAN Trunking Protocol) y MRP son ejemplos de protocolos que ayudan a gestionar la creación y propagación de VLANs en la red."
            },
            {
                question: "Un tipo de conexión VPN es",
                options: [
                    "De acceso remoto",
                    "De acceso privado",
                    "De acceso público",
                    "De acceso local"
                ],
                correct: 0,
                explanation: "La VPN de acceso remoto permite a usuarios móviles o teletrabajadores conectarse de forma segura a la red interna de su empresa."
            },
            {
                question: "802.1q",
                options: [
                    "Encapsula a una trama Ethernet",
                    "Se encapsula dentro de una trama Ethernet",
                    "Es un protocolo",
                    "Todas las anteriores"
                ],
                correct: 1,
                explanation: "A diferencia del antiguo ISL de Cisco, el estándar 802.1Q inserta una etiqueta de 4 bytes entre la dirección de origen y el campo Type/Length de la trama Ethernet original."
            },
            {
                question: "En un switch que admite VLAN y que tiene 24 puertos ¿cuantos dominios de difusión puede haber?",
                options: [
                    "Entre 1 y 24 dependiendo de las VLANs que se creen",
                    "Un máximo de 23",
                    "23"
                ],
                correct: 0,
                explanation: "Cada VLAN creada constituye un dominio de difusión único. Al asignar cada puerto a una VLAN distinta, podríamos tener hasta 24 dominios."
            },
            {
                question: "VLAN de nivel 2",
                options: [
                    "Asocia por puerto físico del switch",
                    "Asocia por IP",
                    "Asocia por puerto TCP",
                    "Asocia por MAC"
                ],
                correct: 3,
                explanation: "Las VLANs de Nivel 2 (Enlace de Datos) se pueden basar en el puerto del switch o, de forma más avanzada, en la dirección física (MAC) del dispositivo conectado."
            },
            {
                question: "Cuando no hay conexión entre VLANs diferentes es posible que",
                options: [
                    "El enlace troncal este asignado a la VLAN predeterminada",
                    "Falle el enrutamiento",
                    "Todas las anteriores",
                    "Tengan el mismo número de VLAN predeterminada"
                ],
                correct: 1,
                explanation: "Al estar en redes lógicas distintas, el tráfico debe pasar por un router (enrutamiento inter-VLAN). Si este falla o no está configurado, la comunicación es imposible."
            },
            {
                question: "SVI son las iniciales de",
                options: [
                    "Switch Virtual IP",
                    "Software Virtual Interface",
                    "Ninguna de las anteriores",
                    "Switch Virtual Interface"
                ],
                correct: 3,
                explanation: "Una SVI es una interfaz lógica de Capa 3 configurada en un switch para permitir el enrutamiento inter-VLAN o la gestión del dispositivo."
            }
        ]
    }
};
