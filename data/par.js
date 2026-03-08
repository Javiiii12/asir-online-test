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
    }
};
