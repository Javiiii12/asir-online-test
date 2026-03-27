export const questionsISO = {
    "Tema 1: Introducción a los S.O y su instalación": {
        "Bloque 1 - Parte 1": [
            {
                question: "¿La memoria virtual en Windows y la partición swap sirven para compensar la falta de memoria RAM?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Ambos mecanismos utilizan espacio del disco duro para simular memoria RAM adicional cuando la física se agota."
            },
            {
                question: "En un instante determinado el proceso de un sistema puede estar en dos estados a la vez.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Un proceso solo puede estar en un estado específico en un instante dado, como 'en ejecución', 'bloqueado' o 'listo'."
            },
            {
                question: "Un proceso siempre tiene un hilo o hebra, pero por ejemplo cuando ejecutamos el programa Excel pero abriendo varias hojas de cálculo a la vez decimos que es el mismo proceso pero tiene varios hilos.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Un proceso pesado puede dividirse en múltiples hilos de ejecución o threads que comparten la misma memoria para hacer tareas en paralelo."
            },
            {
                question: "El proceso que controla la cola de procesos se llama:",
                options: ["Bloqueador", "Shell", "Tubería", "Planificador"],
                correct: 3,
                explanation: "También conocido como Scheduler, es el encargado de decidir qué proceso entra a la CPU y en qué orden."
            },
            {
                question: "¿Cuáles se consideran cualidades de Windows Server 2019? (Selección múltiple)",
                options: [
                    "Permite ejecutar varios servidores simultáneamente",
                    "Dispone de posibilidad de administración desde línea de comandos",
                    "Utiliza el sistema de ficheros FAT32 que aporta más seguridad que el NTFS",
                    "Es un tipo de sistema operativo considerado monousuario"
                ],
                correct: [0, 1],
                explanation: "Permite virtualización con Hyper-V y administración mediante PowerShell o Server Core. NTFS es más seguro que FAT32 y es multiusuario."
            },
            {
                question: "En los sistemas de tiempo compartido, multiprocesos, multitarea o multihilo se pueden presentar problemas a la hora de competir por los recursos del sistema. ¿Cómo se soluciona?",
                options: [
                    "Utilizando el algoritmo FIFO",
                    "Mediante el llamado control de bloqueos de los procesos",
                    "Con el tiempo de espera",
                    "Mediante los ciclos del procesador"
                ],
                correct: 1,
                explanation: "Los sistemas operativos implementan mecanismos de sincronización y control de bloqueos / deadlocks para gestionar la concurrencia y los recursos compartidos."
            },
            {
                question: "¿Cómo se denomina al valor que indica el tiempo en el que el procesador está ocupado?",
                options: [
                    "Tiempo de servicio",
                    "Ráfaga de uso de la CPU",
                    "Productividad",
                    "Tiempo de espera"
                ],
                correct: 1,
                explanation: "También conocido como CPU Burst, es el periodo durante el cual un proceso utiliza activamente el procesador."
            },
            {
                question: "¿Cuáles se consideran aplicaciones distribuidas por el servicio que ofrecen? (Selección múltiple)",
                options: [
                    "Servidor Web",
                    "Servidor pesado-cliente ligero",
                    "Multinivel",
                    "Servidor de bases de datos"
                ],
                correct: [0, 3],
                explanation: "El servidor Web y de bases de datos son servicios/aplicaciones. Las otras opciones son arquitecturas de red."
            },
            {
                question: "Indica las respuestas correctas ¿Cuáles se consideran consideraciones previas a la instalación de Windows 10? (Selección múltiple)",
                options: [
                    "Planificar la partición del disco",
                    "Realizar una copia de seguridad del sistema",
                    "Recopilar todos los drivers de los dispositivos conectados",
                    "Preguntar al administrador de la red la configuración de datos de red"
                ],
                correct: [0, 1, 2, 3],
                explanation: "Todas son buenas prácticas fundamentales antes de realizar una instalación de un SO."
            },
            {
                question: "El sistema operativo Linux se considera multiusuario.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Linux está diseñado desde su núcleo para permitir que múltiples usuarios trabajen de forma simultánea e independiente."
            }
        ],
        "Bloque 1 - Parte 2": [
            {
                question: "La memoria caché se considera un tipo de memoria interna.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Se encuentra integrada en el propio procesador o muy cerca de él en la placa base, siendo una memoria interna extremadamente rápida."
            },
            {
                question: "¿Qué modelo de sistema operativo nos permite la instalación de un sistema dentro de otro, permitiéndonos la ejecución de ambos a la vez en el mismo ordenador?",
                options: [
                    "Por virtualización",
                    "Por capas",
                    "Por micronúcleos",
                    "Por capas y por micronúcleos"
                ],
                correct: 0,
                explanation: "Los hipervisores permiten correr máquinas virtuales con sistemas operativos invitados sobre un sistema anfitrión."
            },
            {
                question: "Podemos considerar que el algoritmo de planificación de Round-Robin es el más simple.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "El más simple es FIFO o FCFS. Round-Robin es más complejo porque requiere un temporizador/quantum para interrumpir procesos."
            },
            {
                question: "¿Qué se considera Bootstrap Loader?",
                options: [
                    "El primer sector del disco duro",
                    "Sistema básico de entrada y salida",
                    "El sistema que comprueba el funcionamiento de los componentes",
                    "Proceso que describe el arranque de los sistemas o del cargador de iniciación"
                ],
                correct: 3,
                explanation: "Es el programa de arranque inicial que se encarga de cargar el sistema operativo en la memoria."
            },
            {
                question: "¿Cuál es el componente del sistema operativo que permite al usuario la comunicación con el sistema por medio de entornos gráficos o de texto?",
                options: ["Gestor de procesos", "Shell", "Compilador", "Kernel"],
                correct: 1,
                explanation: "El Shell es la envoltura o interfaz de usuario del sistema operativo."
            },
            {
                question: "¿Qué programa informático tiene la función de actuar como interfaz entre el usuario y el sistema operativo mediante órdenes escritas?",
                options: ["Shell", "Gestión de permisos", "El planificador de tareas", "El gestor de arranque"],
                correct: 0,
                explanation: "Específicamente el intérprete de comandos o CLI (Command Line Interface)."
            },
            {
                question: "Cuál es la orden que sirve para volver a instalar el grub en caso de que esté dañado.",
                options: [
                    "mount grub -o",
                    "grub-install /dev/hda",
                    "install grub",
                    "install-grub /dev/hda"
                ],
                correct: 1,
                explanation: "Es el comando tradicional en entornos Linux para instalar el gestor de arranque GRUB en el primer disco."
            },
            {
                question: "El programa Shell es una parte del sistema operativo que permite la comunicación entre el sistema informático y el ordenador mediante interfaces de pantalla gráfica o mediante comandos.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. El Shell comunica al USUARIO con el SISTEMA OPERATIVO, no al sistema informático con el ordenador."
            },
            {
                question: "Si instalamos una versión o distribución Home de Windows podemos configurar el sistema para pertenecer y poder entrar a un servidor con controlador de dominio.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Las versiones 'Home' de Windows carecen de la característica para unirse a un dominio de Active Directory."
            },
            {
                question: "¿Cuáles se consideran componentes de un sistema informático? (Selección múltiple)",
                options: [
                    "Disco duro externo",
                    "Aplicaciones",
                    "Ordenador",
                    "El usuario administrador"
                ],
                correct: [0, 1, 2, 3],
                explanation: "Un sistema informático clásico se compone de Hardware (ordenador, discos), Software (aplicaciones) y Humanware (usuarios)."
            }
        ],
        "Bloque 2 - Parte 1": [
            {
                question: "¿Qué se considera Bootstrap Loader?",
                options: [
                    "Proceso que describe el arranque de los sistemas o del cargador de iniciación",
                    "Sistema básico de entrada y salida",
                    "El sistema que comprueba el funcionamiento de los componentes",
                    "El primer sector del disco duro"
                ],
                correct: 0,
                explanation: "Es el pequeño programa inicial que carga el sistema operativo principal en memoria."
            },
            {
                question: "¿Cómo se denomina al valor que indica el tiempo en el que el procesador está ocupado?",
                options: [
                    "Tiempo de servicio",
                    "Tiempo de espera",
                    "Productividad",
                    "Ráfaga de uso de la CPU"
                ],
                correct: 3,
                explanation: "También llamado 'CPU Burst', es el tiempo continuo en el que un proceso está ejecutando instrucciones."
            },
            {
                question: "Un proceso siempre tiene un hilo o hebra, pero por ejemplo cuando ejecutamos el programa Excel pero abriendo varias hojas de cálculo a la vez decimos que es el mismo proceso pero tiene varios hilos.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Los programas modernos son 'multihilo', permitiendo tareas concurrentes dentro de un mismo proceso."
            },
            {
                question: "Si instalamos una versión o distribución Home de Windows podemos configurar el sistema para pertenecer y poder entrar a un servidor con controlador de dominio.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Se requiere la versión Pro o superior para unirse a un dominio de Active Directory."
            },
            {
                question: "La memoria caché se considera un tipo de memoria interna.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Es una memoria extremadamente rápida integrada en el procesador o muy cerca de él."
            },
            {
                question: "¿Cuál no es un componente del sistema operativo?",
                options: [
                    "Programas de utilidad",
                    "Shell",
                    "El Kernel",
                    "El procesador"
                ],
                correct: 3,
                explanation: "El procesador (CPU) es hardware físico, no una parte lógica del software del SO."
            },
            {
                question: "El bootstrap es un programa que se ejecuta antes de cargar la BIOS y en Linux tenemos como ejemplos el Lilo y el Grub.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Primero se ejecuta la BIOS/UEFI, la cual busca y ejecuta el gestos de arranque (bootstrap loader)."
            },
            {
                question: "¿Cuál es el componente del sistema operativo que permite al usuario la comunicación con el sistema por medio de entornos gráficos o de texto?",
                options: ["Compilador", "Kernel", "Shell", "Gestor de procesos"],
                correct: 2,
                explanation: "El Shell es la interfaz de usuario, ya sea de línea de comandos (CLI) o gráfica (GUI)."
            },
            {
                question: "¿Qué tipo de núcleo utilizan los sistemas operativos actuales cómo por ejemplo Windows?",
                options: [
                    "Los exonúcleos",
                    "Los monolíticos",
                    "Los micronúcleos",
                    "Los híbridos"
                ],
                correct: 3,
                explanation: "Windows moderno (NT) utiliza núcleos híbridos para mayor rendimiento y flexibilidad."
            },
            {
                question: "¿Qué tipo de licencia usa Linux?",
                options: ["Copyleft", "GNU o GPL", "Copyright", "Shareware"],
                correct: 1,
                explanation: "El kernel de Linux se distribuye bajo la Licencia Pública General de GNU (GPL)."
            }
        ],
        "Bloque 2 - Parte 2": [
            {
                question: "¿Cuáles se consideran cualidades de Ubuntu? (Selección múltiple)",
                options: [
                    "Solamente se puede instalar en plataformas con microprocesador x86",
                    "Es un tipo de sistema operativo monousuario",
                    "Utiliza un sistema de archivos jerárquico, en forma de árbol invertido",
                    "Es un tipo de sistema operativo que permite la multitarea"
                ],
                correct: [2, 3],
                explanation: "Es un sistema jerárquico con raíz '/' y permite ejecutar múltiples procesos simultáneamente."
            },
            {
                question: "Un conjunto de órdenes que se ejecutan siguiendo un orden determinado para realizar un proceso con el fin de obtener unos resultados se conoce como:",
                options: [
                    "Lenguaje de programación",
                    "Instrucción",
                    "Todas son falsas",
                    "Programa informático"
                ],
                correct: 3,
                explanation: "Esta es la definición técnica básica de un programa informático."
            },
            {
                question: "¿Linux y Unix utilizan la técnica de swapping?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Sí, utilizan particiones o archivos 'swap' para intercambiar páginas de memoria con el disco."
            },
            {
                question: "¿Qué programa informático tiene la función de actuar como interfaz entre el usuario y el sistema operativo mediante órdenes escritas?",
                options: ["Gestión de permisos", "El planificador de tareas", "El gestor de arranque", "Shell"],
                correct: 3,
                explanation: "Se refiere al Shell de línea de comandos (como Bash)."
            },
            {
                question: "En los sistemas de tiempo compartido, multiprocesos, multitarea o multihilo se pueden presentar problemas a la hora de competir por los recursos del sistema. ¿Cómo se soluciona?",
                options: [
                    "Mediante los ciclos del procesador",
                    "Utilizando el algoritmo FIFO",
                    "Con el tiempo de espera",
                    "Mediante el llamado control de bloqueos de los procesos"
                ],
                correct: 3,
                explanation: "Gestiona el acceso concurrente a recursos críticos para evitar interbloqueos."
            },
            {
                question: "Cuando se instala un dispositivo en el ordenador, como puede ser una tarjeta gráfica, es necesario cagar el programa denominado controlador para que funcione correctamente.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Los controladores (drivers) actúan como traductores entre el SO y el hardware físico."
            },
            {
                question: "El proceso que controla la cola de procesos se llama:",
                options: ["Planificador", "Bloqueador", "Tubería", "Shell"],
                correct: 0,
                explanation: "El planificador o 'scheduler' gestiona la asignación de tiempo de CPU a los procesos en espera."
            },
            {
                question: "Para poder modificar el fichero de arranque de Windows llamado BCD se utiliza el comando:",
                options: ["msconfig", "bootmgr", "ntldr", "bcdedit"],
                correct: 3,
                explanation: "bcdedit.exe permite gestionar el almacén de datos de configuración de arranque de Windows."
            },
            {
                question: "El método que consiste en permitir que el tamaño conjunto del programa y sus datos sea mayor que la cantidad de memoria física disponible se llama:",
                options: ["Segmentación", "Ninguna de las anteriores", "Memoria virtual", "Paginación"],
                correct: 2,
                explanation: "La memoria virtual utiliza el disco duro como extensión de la RAM física."
            },
            {
                question: "Cuál es la orden que sirve para volver a instalar el grub en caso de que esté dañado.",
                options: [
                    "mount grub -o",
                    "install-grub /dev/hda",
                    "grub-install /dev/hda",
                    "install grub"
                ],
                correct: 2,
                explanation: "Es el comando estándar para reinstalar el gestor de arranque GRUB."
            }
        ],
        "Bloque 3 - Parte 1": [
            {
                question: "¿Cuáles se consideran aplicaciones distribuidas por el servicio que ofrecen? (Selección múltiple)",
                options: [
                    "Servidor de bases de datos",
                    "Servidor pesado-cliente ligero",
                    "Multinivel",
                    "Servidor Web"
                ],
                correct: [0, 3],
                explanation: "Los servidores Web y de Bases de Datos son ejemplos de servicios distribuidos."
            },
            {
                question: "Indica las respuestas correctas ¿Cuáles se consideran consideraciones previas a la instalación de Windows 10? (Selección múltiple)",
                options: [
                    "Recopilar todos los drivers",
                    "Realizar un copia de seguridad del sistema",
                    "Preguntar al administrador de la red",
                    "Planificar la partición del disco"
                ],
                correct: [0, 1, 2, 3],
                explanation: "Todas son tareas esenciales de preparación antes de instalar un SO."
            },
            {
                question: "¿La memoria virtual en Windows y la partición swap sirven para compensar la falta de memoria RAM?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Utilizan el disco duro para simular memoria RAM adicional cuando esta se agota."
            },
            {
                question: "El método que consiste en permitir que el tamaño conjunto del programa y sus datos sea mayor que la cantidad de memoria física disponible se llama:",
                options: ["Ninguna de las anteriores", "Paginación", "Segmentación", "Memoria virtual"],
                correct: 3,
                explanation: "Técnica que permite ejecutar programas más grandes que la RAM física disponible."
            },
            {
                question: "¿Cuáles se consideran componentes de un sistema informático? (Selección múltiple)",
                options: [
                    "Disco duro externo",
                    "Aplicaciones",
                    "Ordenador",
                    "El usuario administrador"
                ],
                correct: [0, 1, 2, 3],
                explanation: "Hardware, Software y Humanware (usuarios) forman el sistema informático."
            },
            {
                question: "¿Cuáles se consideran cualidades de Ubuntu? (Selección múltiple)",
                options: [
                    "Es un tipo de sistema operativo que permite la multitarea",
                    "Utiliza un sistema de archivos jerárquico",
                    "Solamente se puede instalar en plataformas x86 de 32 bits",
                    "Es un tipo de sistema operativo monousuario"
                ],
                correct: [0, 1],
                explanation: "Es multitarea y tiene un sistema de archivos jerárquico."
            },
            {
                question: "¿Linux y Unix utilizan la técnica de swapping?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Utilizan el intercambio de páginas de RAM inactivas al disco."
            },
            {
                question: "Podemos considerar que el algoritmo de planificación de Round-Robin es el más simple.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. El más simple es FIFO. Round-Robin gestiona tiempos o quantums."
            },
            {
                question: "¿Qué tipo de núcleo utilizan los sistemas operativos actuales cómo por ejemplo Windows?",
                options: ["Los micronúcleos", "Los monolíticos", "Los híbridos", "Los exonúcleos"],
                correct: 2,
                explanation: "Windows NT y macOS usan núcleos híbridos."
            },
            {
                question: "¿Qué tipo de licencia usa Linux?",
                options: ["Copyright", "Shareware", "Copyleft", "GNU o GPL"],
                correct: 3,
                explanation: "El kernel de Linux usa la licencia GPL (General Public License)."
            }
        ],
        "Bloque 3 - Parte 2": [
            {
                question: "El sistema operativo Linux se considera multiusuario.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Diseñado para soportar múltiples usuarios concurrentes."
            },
            {
                question: "¿Cuál no es un componente del sistema operativo?",
                options: ["Shell", "El Kernel", "El procesador", "Programas de utilidad"],
                correct: 2,
                explanation: "El procesador es hardware físico, no software del SO."
            },
            {
                question: "El bootstrap es un programa que se ejecuta antes de cargar la BIOS.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. La BIOS se ejecuta primero e inicia la carga del bootstrap."
            },
            {
                question: "Cuando se instala un dispositivo en el ordenador es necesario cargar el controlador, el cual variará según la versión de sistema.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Los drivers son específicos del hardware y de la versión del SO."
            },
            {
                question: "Un conjunto de órdenes que se ejecutan siguiendo un orden determinado para realizar un proceso se conoce como:",
                options: ["Todas son falsas", "Programa informático", "Lenguaje de programación", "Instrucción"],
                correct: 1,
                explanation: "Definición básica de programa informático."
            },
            {
                question: "En un instante determinado el proceso de un sistema puede estar en dos estados a la vez.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Un proceso solo tiene un estado en un momento dado."
            },
            {
                question: "¿Cuáles se consideran cualidades de Windows Server 2019? (Selección múltiple)",
                options: [
                    "Dispone de posibilidad de administración desde línea de comandos",
                    "Utiliza el sistema de ficheros FAT32 que aporta más seguridad",
                    "Permite ejecutar varios servidores simultáneamente",
                    "Es un tipo de sistema operativo considerado monousuario"
                ],
                correct: [0, 2],
                explanation: "Usa PowerShell (CLI) y Hyper-V (virtualización). Usa NTFS y es multiusuario."
            },
            {
                question: "Para poder modificar el fichero de arranque de Windows llamado BCD se utiliza el comando:",
                options: ["msconfig", "ntldr", "bootmgr", "bcdedit"],
                correct: 3,
                explanation: "bcdedit es la herramienta oficial para gestionar el BCD."
            },
            {
                question: "¿Qué modelo de sistema operativo nos permite la instalación de un sistema dentro de otro?",
                options: ["Por virtualización", "Por micronúcleos", "Por capas", "Por capas y por micronúcleos"],
                correct: 0,
                explanation: "La virtualización permite sistemas invitados dentro de un anfitrión."
            },
            {
                question: "El programa Shell es una parte del sistema operativo que permite la comunicación entre el sistema informático y el ordenador.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Permite la comunicación entre el USUARIO y el sistema operativo."
            }
        ]
    }
};
