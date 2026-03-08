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
    "Tema 2: Integración de elementos en red": {
        "Test 1": [
            {
                question: "En IPv6, dependiendo de los interfaces que identifican, tenemos:",
                options: [
                    "Direcciones privadas y públicas.",
                    "Direcciones estáticas y dinámicas.",
                    "Direcciones anycast, unicast y multicast.",
                    "Direcciones anycast, multicast y broadcast."
                ],
                correct: 2,
                explanation: "IPv6 elimina el concepto de broadcast y utiliza Anycast, Unicast y Multicast para la identificación de interfaces."
            },
            {
                question: "La tasa de transferencia es inferior o igual al ancho de banda:",
                options: [
                    "Verdadero.",
                    "Falso."
                ],
                correct: 0,
                explanation: "El ancho de banda es la capacidad máxima teórica, mientras que la tasa de transferencia (throughput) es la velocidad real, que siempre es limitada por factores externos."
            },
            {
                question: "¿Cuál de las siguientes afirmaciones NO es correcta sobre los cables de par trenzado?",
                options: [
                    "Hay varios tipos: UTP, STP, FTP.",
                    "En la conexión cruzada solo cambia el orden de 4 de los 8 hilos.",
                    "En conexión directa los dos extremos tienen el mismo orden de cables.",
                    "El cable no puede comunicar con menos de 8 hilos."
                ],
                correct: 3,
                explanation: "Es incorrecta porque en estándares como 10/100Base-T, solo se necesitan 4 hilos (2 pares) para la comunicación."
            },
            {
                question: "Sobre el Switch, marca la opción correcta:",
                options: [
                    "Es un dispositivo de nivel 2 y un puente multipuerto.",
                    "Mejora las comunicaciones en la red respecto de los hub.",
                    "Trabaja con direcciones MAC.",
                    "Todas las anteriores son correctas."
                ],
                correct: 3,
                explanation: "El switch es un dispositivo de capa de enlace (Nivel 2) que utiliza tablas MAC para conmutar tramas de forma eficiente, superando las limitaciones del hub."
            },
            {
                question: "Marcar las formas de comunicación según el sentido de la transmisión:",
                options: [
                    "Simplex, Semiduplex y Duplex.",
                    "UniPlex, Simplex y Duplex.",
                    "Solo Duplex y Semiduplex.",
                    "Solo Simplex y Duplex."
                ],
                correct: 0,
                explanation: "Son los tres modos básicos: Simplex (un sentido), Half-Duplex o Semiduplex (ambos sentidos, no a la vez) y Full-Duplex (ambos sentidos simultáneos)."
            },
            {
                question: "Si dispones de una conexión a internet de 1 Giga, ¿cuál de las siguientes frases NO es cierta?",
                options: [
                    "Basta con tener tarjetas FastEthernet para aprovechar todo el ancho de banda.",
                    "Si tenemos 3 equipos encendidos el ancho de banda consumido es repartido.",
                    "Si un equipo no está conectado no consume ancho de banda.",
                    "Si están descargando todos, el ancho se reparte entre los equipos."
                ],
                correct: 0,
                explanation: "FastEthernet limita la velocidad a 100 Mbps, por lo que sería imposible aprovechar una conexión de 1 Gbps (Gigabit)."
            },
            {
                question: "Una dirección IP 192.168.1.0/25 puede direccionar:",
                options: [
                    "126 hosts.",
                    "224 hosts.",
                    "254 hosts.",
                    "128 hosts."
                ],
                correct: 0,
                explanation: "Con una máscara /25 quedan 7 bits para hosts (2^7 = 128). Restando la dirección de red y la de broadcast, quedan 126 hosts útiles."
            },
            {
                question: "El crosstalk es:",
                options: [
                    "Una perturbación de la señal.",
                    "La capacidad de transmitir voz a través del cable.",
                    "Una variante de cable de par trenzado.",
                    "Ninguna de las anteriores."
                ],
                correct: 0,
                explanation: "Se refiere a la interferencia electromagnética (diafonía) producida por el acoplamiento entre hilos cercanos."
            },
            {
                question: "Marcar las frases correctas sobre control de acceso al medio:",
                options: [
                    "CSMA es un método muy usado y Ethernet es el más habitual.",
                    "Hay dos métodos básicos: centralizados y descentralizados.",
                    "Reducen colisiones en las transmisiones en medios compartidos.",
                    "Todas las anteriores son correctas."
                ],
                correct: 3,
                explanation: "Los mecanismos de control de acceso al medio (MAC) gestionan cómo los dispositivos comparten el canal físico para evitar o gestionar colisiones."
            },
            {
                question: "Aumentado la máscara de /16 a /17 se producen dos subredes:",
                options: [
                    "Verdadero.",
                    "Falso."
                ],
                correct: 0,
                explanation: "Al tomar un bit prestado de la parte de host (2^1 = 2), dividimos el espacio de direcciones original en exactamente dos subredes."
            }
        ],
        "Test 2": [
            {
                question: "BNC es:",
                options: [
                    "Software de escritorio remoto.",
                    "Conector estándar T568A.",
                    "Conector suscriptor.",
                    "Conector de cable coaxial."
                ],
                correct: 3,
                explanation: "El conector BNC (Bayonet Neill-Concelman) es el estándar utilizado para cables coaxiales en redes antiguas y vídeo."
            },
            {
                question: "El cableado estructurado es:",
                options: [
                    "Una técnica para colocar el cableado dentro del edificio.",
                    "Un conjunto de normas.",
                    "Un recubrimiento para cables.",
                    "Un tipo de cable."
                ],
                correct: 1,
                explanation: "Es el conjunto de estándares (como TIA/EIA) que definen cómo debe diseñarse e instalarse la infraestructura de red en un edificio."
            },
            {
                question: "¿Cuál de ellas es causante de una distorsión en la comunicación?",
                options: [
                    "Elementos por los que pasa la señal.",
                    "Distancia entre emisor y receptor.",
                    "Entorno en el que se da la transmisión.",
                    "Las tres anteriores son correctas."
                ],
                correct: 3,
                explanation: "La señal se degrada por la resistencia del medio, la distancia (atenuación) y las interferencias del entorno."
            },
            {
                question: "¿En qué se fundamenta la transmisión por fibra óptica?",
                options: [
                    "En la transmisión de electricidad.",
                    "En el cable de cobre.",
                    "En los semiconductores.",
                    "En la reflexión de la luz."
                ],
                correct: 3,
                explanation: "Utiliza pulsos de luz que viajan a través del núcleo de vidrio mediante el principio de reflexión total interna."
            },
            {
                question: "Una dirección IPv4 de clase B puede direccionar:",
                options: [
                    "65536 hosts.",
                    "254 hosts.",
                    "256 hosts.",
                    "65534 hosts."
                ],
                correct: 3,
                explanation: "Una Clase B usa 16 bits para hosts (2^16 = 65536). Al restar red y broadcast, obtenemos 65534 hosts."
            },
            {
                question: "WOL, Wake-On-LAN:",
                options: [
                    "Sirve para crear subinterfaces.",
                    "Sirve para conectarse remotamente.",
                    "Sirve para encender un equipo remotamente a través de la red local.",
                    "Sirve para instalar el SO por red."
                ],
                correct: 2,
                explanation: "Es un estándar que permite encender un ordenador apagado mediante el envío de un \"Magic Packet\" a su tarjeta de red."
            },
            {
                question: "Diferencias entre un cable coaxial y un cable de par trenzado:",
                options: [
                    "Tipo de conectores y longitud.",
                    "Número de conductores que lo componen.",
                    "Todas las anteriores.",
                    "Ninguna es correcta."
                ],
                correct: 2,
                explanation: "Difieren en su construcción física (conductores), en los conectores (BNC vs RJ45) y en las distancias máximas que soportan."
            },
            {
                question: "Marcar las topologías inalámbricas:",
                options: [
                    "BBC.",
                    "CBS.",
                    "BCC.",
                    "BSS."
                ],
                correct: 3,
                explanation: "BSS (Basic Service Set) es la topología básica de una red inalámbrica formada por un punto de acceso y sus clientes."
            },
            {
                question: "PoE, Power-Over-Ethernet:",
                options: [
                    "Es una tecnología para encender dispositivos Ethernet.",
                    "Es una tecnología para encender ordenadores por red.",
                    "Permite conectar puntos de acceso con otros dispositivos.",
                    "Permite llevar la electricidad a través de un cable de red."
                ],
                correct: 3,
                explanation: "PoE permite suministrar alimentación eléctrica a dispositivos (cámaras IP, teléfonos VoIP) usando los mismos hilos del cable de datos."
            },
            {
                question: "La máscara habitual en las redes IPv6 es:",
                options: [
                    "48.",
                    "32.",
                    "46.",
                    "64."
                ],
                correct: 3,
                explanation: "El estándar de la industria para prefijos de subred en IPv6 es /64, lo que separa perfectamente el prefijo de red del identificador de interfaz."
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
    }
};
