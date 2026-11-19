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
        ]
    }
};
