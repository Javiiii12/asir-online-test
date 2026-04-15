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
    },
    "Tema 2: Instalación, desinstalación y actualización de aplicaciones libres y propietarias": {
        "Test 1": [
            {
                question: "¿Cuál es el fichero donde se encuentran las fuentes de repositorios en Ubuntu?",
                options: [
                    "/etc/conf/sources.list",
                    "/etc/apt/sources.list",
                    "/usr/bin/update-manager",
                    "/etc/apt-get update"
                ],
                correct: 1,
                explanation: "En sistemas basados en Debian como Ubuntu, el gestor de paquetes APT guarda la lista de repositorios en este archivo específico."
            },
            {
                question: "¿Cómo se identifican las aplicaciones en el sistema operativo Linux para saber a qué distribución va dirigida y tipo de paquete?",
                options: [
                    "Mediante un nombre",
                    "Mediante un nombre, una extensión y una numeración",
                    "Mediante un numeración",
                    "Mediante un nombre y una extensión"
                ],
                correct: 1,
                explanation: "Un paquete en Linux suele incluir el nombre, la versión/numeración, la arquitectura y la extensión (ej: .deb o .rpm)."
            },
            {
                question: "El sistema operativo Windows 10 está considerado de tipo multiusuario.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Windows 10 permite crear múltiples cuentas de usuario, cada una con su propia configuración y archivos."
            },
            {
                question: "¿Cuáles se consideran formatos en los que se distribuyen aplicaciones? (Selección múltiple)",
                options: ["RPM", "deb", "ISO", "ZIP"],
                correct: [0, 1, 2, 3],
                explanation: "RPM y deb son paquetes nativos, ISO para imágenes de disco y ZIP para aplicaciones portables o código fuente."
            },
            {
                question: "¿Qué funciones principales tiene el servicio Windows Update?",
                options: [
                    "Actualizar el sistema operativo",
                    "Actualizar el sistema operativo e Instalar Services Packs",
                    "Instalar y desinstalar aplicaciones de propósito general",
                    "Instalar Services Packs"
                ],
                correct: 1,
                explanation: "Windows Update gestiona tanto parches de seguridad como grandes actualizaciones de características (Service Packs)."
            },
            {
                question: "Para mostrar una variable del sistema en Windows se utiliza el comando Set Nombredevariable.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Para mostrar el valor de una variable se utiliza 'echo %Nombre %' o el comando 'set' sin parámetros para ver todas."
            },
            {
                question: "¿Cuando se instala una aplicación no es recomendable realizar una serie de operaciones o fases de implantación?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Es falso porque SÍ es recomendable realizar una planificación y validación cuidadosa antes de instalar software."
            },
            {
                question: "¿Qué archivos contienen los paquetes fuentes en Linux? (Selección múltiple)",
                options: ["dsc", "Data.tar.gz", "fuenteIff.gz", "orig.tar.gz"],
                correct: [0, 3],
                explanation: "En Debian/Ubuntu, constan de un .dsc (descriptor) y un .orig.tar.gz (código fuente original)."
            },
            {
                question: "Normalmente se puede instalar la misma aplicación para un sistema operativo que trabaje a 64 bits que a 32 bits.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Una aplicación de 64 bits no funcionará en un SO de 32 bits, aunque la inversa suele ser posible."
            },
            {
                question: "¿Qué comando ejecutamos para actualizar los cambios del GRUB en el sistema Linux Ubuntu?",
                options: [
                    "sudo update grub-customizer",
                    "sudo apt-get update-grub",
                    "sudo upgrade-grub && sudo upgrade-grub2",
                    "sudo update-grub && sudo update-grub2"
                ],
                correct: 3,
                explanation: "El comando correcto es update-grub para regenerar el archivo de configuración grub.cfg."
            }
        ],
        "Test 2": [
            {
                question: "Podemos considerar que VisualBasic.Net es un programa de utilidad.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "VB.NET es un entorno de desarrollo y lenguaje de programación, no una utilidad del sistema."
            },
            {
                question: "¿Cuál es el fichero Linux Ubuntu que tiene todos los script de inicialización?",
                options: ["/etc/init.d", "/etc/init.d/rc 0", "/etc/inittab", "/etc/rc.d"],
                correct: 2,
                explanation: "En sistemas Linux clásicos (SysV), /etc/inittab era el fichero principal de configuración de inicialización."
            },
            {
                question: "¿Cuál es la orden utilizada para instalar la aplicación nautilus en Ubuntu desde cualquier usuario?",
                options: [
                    "sudo apt-get install nautilus",
                    "rpm install nautilus",
                    "apt-get install nautilus",
                    "sudo Apt-Get install nautilus"
                ],
                correct: 0,
                explanation: "Se requiere 'sudo' para obtener privilegios de administración al instalar software mediante apt-get."
            },
            {
                question: "Es más seguro gestionar las particiones de los sistemas operativos Windows con un sistema de ficheros NTFS.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "NTFS permite permisos de seguridad granulares, cifrado y tiene mejor tolerancia a fallos que FAT32."
            },
            {
                question: "El comando tar es capaz de descomprimir y desempaquetar aplicaciones para poder realizar el proceso de linkaje y compilación.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Se usa frecuentemente para extraer archivos de código fuente (.tar.gz) antes de compilarlos."
            },
            {
                question: "¿Donde se encuentra el archivo de configuración Grub en Linux Ubuntu?",
                options: [
                    "/boot/grub/grub.cfg",
                    "/etc/grub.conf",
                    "/etc/bin/grub.conf",
                    "/boot/grub.conf"
                ],
                correct: 0,
                explanation: "En Ubuntu (GRUB 2), el archivo de configuración autogenerado está en /boot/grub/grub.cfg."
            },
            {
                question: "Con Windows Update podemos ver el historial de actualizaciones.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Sí, existe una sección específica para revisar las actualizaciones instaladas y su estado."
            },
            {
                question: "Para eliminar una variable del sistema en Windows se utiliza el comando Set Nombredevariable=Valor.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Para eliminarla se usa 'Set Nombre= ' (sin valor). Asignarle un valor la crea o la modifica."
            },
            {
                question: "Podemos actualizar el sistema completo de Linux Ubuntu con la herramienta gráfica Synaptic.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Synaptic permite marcar todas las actualizaciones disponibles y aplicarlas de forma conjunta."
            },
            {
                question: "¿Para que el usuario root se convierta de forma permanente en el sistema y no solicite contraseña en cada comando se ejecuta?",
                options: ["sudo su", "sudo comando_demonio", "passwd", "Sudo"],
                correct: 0,
                explanation: "'sudo su' abre una sesión de superusuario, permitiendo ejecutar comandos de administración sin el prefijo sudo."
            }
        ],
        "Test 3": [
            {
                question: "No podemos instalar actualizaciones de Windows sin conexión a Internet.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Se pueden instalar usando archivos .msu independientes descargados previamente o herramientas como WSUS Offline."
            },
            {
                question: "¿Cuál es la herramienta de Windows que permite manipular las opciones de arranque del sistema en Windows Server 2019?",
                options: ["BCDEdit.exe", "Regedit", "Autoexec.bat", "Cmd"],
                correct: 0,
                explanation: "BCDEdit es el editor oficial para los datos de configuración de arranque (BCD) en Windows modernos."
            },
            {
                question: "¿Cuál es el fichero de Linux Ubuntu donde se encuentran los listados de las fuentes que suministran aplicaciones?",
                options: [
                    "/ect/host",
                    "/etc/apt/sources.list",
                    "/usr/bin/update-manager",
                    "/etc/update-manager"
                ],
                correct: 1,
                explanation: "Este archivo contiene las URLs de los repositorios que APT consulta para descargar software."
            },
            {
                question: "El sistema administrador de paquetes de Windows se encuentra en:",
                options: [
                    "Inicio-Panel de control-Programas",
                    "Inicio-Herramientas administrativas",
                    "Configuración-Sistema",
                    "En el repositorios de paquetes"
                ],
                correct: 0,
                explanation: "En el Panel de Control, bajo 'Programas y características', se gestiona la instalación y desinstalación centralizada."
            },
            {
                question: "¿En qué lugar se encuentra la aplicación Synaptic en Windows?",
                options: [
                    "En el escritorio",
                    "Synaptic no se encuentra en Windows",
                    "Inicio-Panel de control-Synaptic",
                    "Inicio-Todos los programas- Synaptic"
                ],
                correct: 1,
                explanation: "Synaptic es un gestor de paquetes exclusivo de entornos Linux basados en Debian/APT."
            },
            {
                question: "¿Cuál es la herramienta utilizada para la gestión de paquetes de tipo .deb?",
                options: ["dpkg", "Gzip", "Rpm", "Zip"],
                correct: 0,
                explanation: "dpkg es el gestor básico que maneja directamente los archivos de paquete .deb."
            },
            {
                question: "Cuando se instala un dispositivo en el ordenador es necesario cargar el programa controlador, el cual variará según la versión de sistema.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Los controladores (drivers) deben ser compatibles tanto con el hardware como con la versión exacta del SO."
            },
            {
                question: "¿Cuál es la orden de Linux Ubuntu utilizada para actualizar el sistema?",
                options: ["apt update", "dist-upgrade", "apt-get update", "more /ect/host"],
                correct: 0,
                explanation: "Tanto 'apt update' como 'apt-get update' sincronizan el índice local con los repositorios."
            },
            {
                question: "¿Cuál es el interprete de comando usado normalmente por defecto en Linux?",
                options: ["Ninguno", "bash", "ksh", "csh"],
                correct: 1,
                explanation: "Bash (Bourne Again SHell) es la consola estándar en la mayoría de las distribuciones Linux."
            },
            {
                question: "Un programa pasa a ser un proceso cuando se carga completamente en memoria y pasa a ser ejecutado.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Se convierte en proceso cuando el SO le asigna recursos (CPU, RAM) y comienza su ejecución activa."
            }
        ]
    },
    "Tema 3: Administración de software base I": {
        "Test 1": [
            {
                question: "Para activar o desactivar servicios en un servidor de Windows, debemos ir al apartado de configuración denominado:",
                options: [
                    "Agregar características.",
                    "Habilitar escritorio remoto.",
                    "Configurar Windows.",
                    "Agregar roles y características."
                ],
                correct: 3,
                explanation: "En Windows Server, la herramienta principal para instalar servicios como DNS o DHCP es el Asistente para agregar roles y características."
            },
            {
                question: "Todas las distribuciones de Windows disponen de una ventana donde se centralizan las herramientas y utilidades de administración ¿Cómo se llama?",
                options: [
                    "Símbolo del sistema.",
                    "Panel de control.",
                    "Sistema y mantenimiento.",
                    "Apariencia y personalización."
                ],
                correct: 1,
                explanation: "El Panel de Control ha sido históricamente el núcleo de configuración centralizado en todas las versiones de Windows."
            },
            {
                question: "La configuración de red en el entorno de escritorio de Linux Ubuntu se encuentra en el apartado:",
                options: [
                    "Mostrar aplicaciones - Configuración - Red.",
                    "Sistema - Administración - Configuración de red.",
                    "Sistema – Preferencias - Propiedades de Interfaz de red.",
                    "Configuración - Red."
                ],
                correct: 0,
                explanation: "En Ubuntu (GNOME), se accede a la red desde el menú Mostrar aplicaciones -> icono de Configuración -> pestaña Red."
            },
            {
                question: "Señala la afirmación correcta para la configuración de la red mediante la utilidad Grupo Hogar.",
                options: [
                    "Esta función no está disponible en Windows 10.",
                    "Permite compartir recursos en cualquier entorno de red Windows.",
                    "Solamente permite compartir carpetas.",
                    "Será necesario hacer una completa configuración de la red para que funcione."
                ],
                correct: 0,
                explanation: "Microsoft eliminó la función Grupo Hogar (HomeGroup) a partir de la versión 1803 de Windows 10."
            },
            {
                question: "¿Qué orden se emplea para mostrar las interfaces activas en Windows y Linux? (Selección múltiple)",
                options: [
                    "ifconfig.",
                    "ipconfig.",
                    "netdom renamecomputer",
                    "netsh interface ipv4",
                    "ifconfig -a"
                ],
                correct: [1, 4],
                explanation: "ipconfig es el comando estándar para Windows, mientras que ifconfig -a se utiliza en sistemas Linux."
            },
            {
                question: "¿Cuál es la variable de entorno de Linux que nos indica la ruta completa del directorio de trabajo actual?",
                options: ["$PWD.", "PWD$.", "pwd.", "$pwd."],
                correct: 0,
                explanation: "La variable $PWD (Print Working Directory) almacena la ruta absoluta del directorio actual en la terminal de Linux."
            },
            {
                question: "En Windows Server, las características mejoran la operatividad de las funciones (roles).",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Los Roles son las funciones principales, mientras que las Características son componentes que los apoyan o añaden funcionalidades extra."
            },
            {
                question: "Mediante la función de bibliotecas de Windows 10 algunas aplicaciones pueden ser utilizadas en cualquier proceso.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Las bibliotecas dinámicas (DLL) permiten que múltiples procesos compartan el mismo código y recursos en memoria."
            },
            {
                question: "¿Para qué sirve la función XP Mode en Windows 10?",
                options: [
                    "Para realizar programas que funcionen en Windows XP.",
                    "Para realizar búsquedas avanzadas de aplicaciones.",
                    "No es compatible con Windows 10.",
                    "Para hacer copias de seguridad del sistema."
                ],
                correct: 2,
                explanation: "XP Mode era una característica de Windows 7; en Windows 10 ya no está disponible ni es compatible."
            },
            {
                question: "¿Cuál es el comando que nos permite abrir la ventana MMC para administrar las Directivas de grupo local?",
                options: [
                    "gepedit.msc.",
                    "gpedit.msc /gpcomputer: “%ComputerName%”.",
                    "gpedit.mcs /gpcomputer: “equipo1”.",
                    "gpedit.mcs \"equipo\": /gpcomputer."
                ],
                correct: 1,
                explanation: "gpedit.msc abre el editor de directivas, y el parámetro /gpcomputer permite especificar el equipo (usando variables de entorno)."
            },
            {
                question: "¿Windows y Linux disponen de las ventanas de entrada de comandos?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Ambos sistemas cuentan con interfaces de línea de comandos (CLI) como CMD/PowerShell en Windows y Bash en Linux."
            },
            {
                question: "¿Qué comando en Windows nos permite configurar parámetros de red como la IP o el Firewall?",
                options: ["Shutdown.", "Netsh.", "NetBios.", "Todas son correctas."],
                correct: 1,
                explanation: "netsh (Network Shell) es la utilidad de comandos para visualizar y modificar casi cualquier parámetro de red en Windows."
            }
        ],
        "Test 2": [
            {
                question: "¿PowerShell es una función (Rol) en Windows Server?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. PowerShell se considera una Característica (Feature), no un Rol o Función principal del servidor."
            },
            {
                question: "Señala la afirmación correcta para la configuración de la red mediante la utilidad Grupo Hogar.",
                options: [
                    "Esta función no está disponible en Windows 10.",
                    "Permite compartir recursos en cualquier entorno de red Windows.",
                    "Solamente permite compartir carpetas.",
                    "Será necesario hacer una completa configuración de la red."
                ],
                correct: 0,
                explanation: "Función retirada por Microsoft en las actualizaciones de 2018 para Windows 10."
            },
            {
                question: "¿Qué opción del menú de arranque del Grub permite la entrada a modo de recuperación para solucionar errores?",
                options: [
                    "Other operating System.",
                    "Ubuntu recuperation.",
                    "Ubuntu. Kernel versión (recovery mode).",
                    "No existe ese modo."
                ],
                correct: 2,
                explanation: "El recovery mode arranca el sistema con servicios mínimos y acceso a consola para realizar reparaciones."
            },
            {
                question: "¿Qué gestiona la consola MMC compmgmt.msc?",
                options: [
                    "Configuración de la política de seguridad.",
                    "Para administrar usuarios y grupos locales.",
                    "Permite acceder a la administración de equipos.",
                    "Comprobar el rendimiento del sistema."
                ],
                correct: 2,
                explanation: "Abre la Administración de Equipos, que incluye gestión de discos, servicios, usuarios locales y eventos."
            },
            {
                question: "¿Qué comando en Windows nos permite configurar parámetros de red?",
                options: ["Shutdown.", "Netsh.", "NetBios.", "Todas son correctas."],
                correct: 1,
                explanation: "Netsh es la herramienta fundamental para administración de red por comandos en Windows."
            },
            {
                question: "Si deseamos cifrar solamente ficheros individuales en NTFS utilizamos:",
                options: [
                    "Bitlocker.",
                    "Device encrypter stage.",
                    "Encrypted File System (EFS).",
                    "Todas son ciertas."
                ],
                correct: 2,
                explanation: "EFS permite cifrar archivos y carpetas individuales, mientras que BitLocker cifra volúmenes de disco completos."
            },
            {
                question: "Las direcciones IP dinámicas se asignan mediante un servidor DNS.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. El servidor DHCP asigna las IP dinámicas. El DNS traduce nombres de dominio a direcciones IP."
            },
            {
                question: "¿Cuál es la variable de entorno de Linux que indica la ruta del directorio de trabajo actual?",
                options: ["$PWD.", "PWD$.", "pwd.", "$pwd."],
                correct: 0,
                explanation: "La variable de entorno $PWD almacena la ruta absoluta del directorio actual."
            },
            {
                question: "En Windows podemos configurar archivos de red sin conexión desde el Centro de sincronización del Panel de Control.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Esta función permite mantener una copia local de archivos de red para trabajar cuando no hay conexión al servidor."
            },
            {
                question: "¿Mediante qué orden en Windows (CMD) podemos obtener la ayuda de un comando?",
                options: ["Ayuda ?", "Cmd comando.", "Help comando.", "Man comando."],
                correct: 2,
                explanation: "El comando 'help' seguido del nombre del comando (o comando /?) muestra la sintaxis y opciones."
            },
            {
                question: "Un gestor de ventanas en Linux es un programa cliente X-Windows que controla la apariencia de otras ventanas.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "El Window Manager se encarga de gestionar los bordes, botones y posicionamiento de las aplicaciones gráficas."
            },
            {
                question: "¿Cuáles se consideran funciones o competencias del usuario administrador? (Selección múltiple)",
                options: [
                    "Configurar la actualización del sistema.",
                    "Diagnosticar el servidor de base de datos.",
                    "Reparar la seguridad del sistema.",
                    "Gestionar equipos y accesos de usuarios."
                ],
                correct: [0, 1, 2, 3],
                explanation: "El administrador tiene control total sobre actualizaciones, diagnóstico de servicios, seguridad y recursos del sistema."
            }
        ],
        "Test 3": [
            {
                question: "El identificador del usuario (UID) root en Linux tiene el valor 0.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "En sistemas tipo Unix/Linux, el UID 0 es el identificador único reservado para el superusuario root."
            },
            {
                question: "¿Qué nombre genérico reciben en Linux sh, csh, ksh y bash?",
                options: [
                    "Shell o Interpretes de comandos.",
                    "Línea de comandos.",
                    "Prompts de entrada de comandos.",
                    "Todas son ciertas."
                ],
                correct: 0,
                explanation: "Son diferentes tipos de shells que actúan como intérpretes entre el usuario y el kernel."
            },
            {
                question: "¿Qué opción del menú de arranque del Grub permite solucionar errores mediante el recovery mode?",
                options: [
                    "Other operating System.",
                    "Ubuntu recuperation.",
                    "Ubuntu (recovery mode).",
                    "No existe ese modo."
                ],
                correct: 2,
                explanation: "Permite iniciar en un entorno simplificado para tareas de mantenimiento y rescate."
            },
            {
                question: "Si deseamos cifrar ficheros individuales en lugar de discos completos usamos:",
                options: [
                    "Bitlocker.",
                    "Device encrypter stage.",
                    "Encrypted File System (EFS).",
                    "Todas son ciertas."
                ],
                correct: 2,
                explanation: "EFS es la herramienta de cifrado de archivos nativa del sistema de ficheros NTFS."
            },
            {
                question: "¿En la nomenclatura de red de Linux, es lo mismo eth1 que eth0:1?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. eth1 es una interfaz física distinta. eth0:1 es una interfaz virtual (alias) asociada a la misma tarjeta eth0."
            },
            {
                question: "¿Qué formato de orden se usa para ver la ayuda de netsh en Windows?",
                options: ["ipconfig /all.", "ipconfig /?", "netsh /all.", "netsh /?"],
                correct: 3,
                explanation: "Casi todos los comandos de Windows aceptan el parámetro '/?' para mostrar su manual de ayuda."
            },
            {
                question: "Desde un terminal de Linux, ¿Qué comando utilizas (en minúsculas) para apagar/reiniciar el equipo?",
                options: ["Sudo poweroff.", "sudo poweroff.", "SUDO POWEROFF.", "Todas son correctas."],
                correct: 1,
                explanation: "Linux distingue entre mayúsculas y minúsculas; los comandos y su prefijo sudo deben ir en minúsculas."
            },
            {
                question: "Para obtener información completa de la configuración de red en Windows se utiliza el comando ifconfig.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. El comando en Windows es ipconfig. ifconfig es para entornos Unix/Linux."
            },
            {
                question: "¿Qué fichero editable de Ubuntu permite configurar dispositivos de red mediante YAML?",
                options: [
                    "etc/resolv.conf.",
                    "/etc/netplan/01-network-manager-all.yaml.",
                    "/etc/hosts.",
                    "/etc/init.d/networking."
                ],
                correct: 1,
                explanation: "Netplan es la herramienta de configuración de red en Ubuntu moderno, basada en archivos YAML."
            },
            {
                question: "¿Qué gestiona la MMC compmgmt.msc?",
                options: [
                    "Configuración de la política de seguridad.",
                    "Administración de usuarios locales.",
                    "Acceso a la administración de equipos.",
                    "Rendimiento del sistema."
                ],
                correct: 2,
                explanation: "Es la consola central de Administración de Equipos de Windows."
            },
            {
                question: "Es necesario configurar DNS manualmente cuando las direcciones IP se asignan de forma estática.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Sin DHCP, el equipo no conoce automáticamente los servidores DNS para resolver nombres de dominio."
            },
            {
                question: "¿Qué comando se usa en Windows para listar los planes de energía disponibles?",
                options: ["Power.msc.", "Powercfg /LIST.", "Powercfg /a.", "Power.msc /a."],
                correct: 1,
                explanation: "Powercfg es la potente utilidad de comandos para gestionar la energía, y /LIST muestra los esquemas disponibles."
            }
        ]
    },
    "Tema 4: Administración de software base II": {
        "Test 1": [
            {
                question: "Al dar de baja a un usuario Linux su carpeta personal se borrará.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Por defecto, al eliminar un usuario en Linux, su directorio personal en /home se mantiene por seguridad."
            },
            {
                question: "Indicar qué nombres de cuentas de usuario son correctos. (Selección múltiple)",
                options: [
                    "Usuario23info.",
                    "1234.",
                    "Alumno 1.",
                    "Alumno.info."
                ],
                correct: 0,
                explanation: "En sistemas Linux clásicos, solo la opción 'a' es estrictamente correcta. Los espacios, puntos o nombres solo numéricos suelen dar problemas."
            },
            {
                question: "La MMC que gestiona las directivas de seguridad local de usuarios es %windir%\\System32\\secpol.msc.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Es la ruta y el nombre exacto de la consola de Directiva de seguridad local en Windows."
            },
            {
                question: "¿Qué salida provoca la ejecución del comando de Linux 'ls -a'?",
                options: [
                    "Visualiza el contenido de los ficheros del directorio actual.",
                    "Lista todos los ficheros del directorio actual.",
                    "Lista todos los ficheros ocultos.",
                    "Visualiza el contenido del fichero a."
                ],
                correct: 2,
                explanation: "Aunque lista todos, la característica distintiva del modificador -a (all) es que permite ver los ficheros ocultos."
            },
            {
                question: "No podemos cambiar el nombre de usuario (login) desde el menú gráfico 'Usuarios y grupos' de Linux.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. En las GUIs clásicas puedes cambiar el nombre real, pero no el login corto. Para eso se usa 'usermod -l' en consola."
            },
            {
                question: "¿Cuál de los siguientes ficheros contiene el UID de un usuario?",
                options: ["/etc/shadow.", "/etc/.profile.d", "/etc/passwd.", "/etc/.profile."],
                correct: 2,
                explanation: "/etc/passwd es el archivo principal que almacena el nombre del usuario, su UID, GID y directorio home."
            },
            {
                question: "¿Cuál es el directorio donde se encuentra el perfil genérico de todos los usuarios de Windows 10?",
                options: ["C:/users/default.", "C:/users/all users.", "C:\\users\\nombre_usuario.", "C:\\users\\default."],
                correct: 3,
                explanation: "La carpeta 'C:\\users\\default' es la plantilla oculta que Windows usa para crear nuevos perfiles de usuario."
            },
            {
                question: "La utilidad del Panel de control 'Cuentas de usuario' de Windows 10 permite gestionar grupos de usuarios.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Esa utilidad básica solo gestiona cuentas individuales. Los grupos se gestionan desde herramientas avanzadas."
            },
            {
                question: "¿Qué fichero de los siguientes guarda la contraseña encriptada en Linux?",
                options: ["/etc/shadow.", "/home/passwd.", "/var/passwd.", "/etc/passwd."],
                correct: 0,
                explanation: "Por seguridad, las contraseñas encriptadas se guardan en '/etc/shadow', que tiene permisos muy restrictivos."
            },
            {
                question: "Cuando se elimina un grupo, también automáticamente se eliminan los usuarios que pertenecen a dicho grupo.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Los usuarios permanecen en el sistema, simplemente dejan de tener los privilegios asociados a ese grupo."
            },
            {
                question: "Indicar qué informaciones contiene el fichero passwd referentes a un usuario Linux. (Selección múltiple)",
                options: [
                    "Nombre de usuario.",
                    "Contraseña encriptada.",
                    "Número de usuario y grupo.",
                    "Directorio local del usuario."
                ],
                correct: [0, 1, 2, 3],
                explanation: "Aunque la contraseña real esté en shadow, el campo estructural de la contraseña encriptada sigue existiendo en el archivo passwd."
            },
            {
                question: "La utilidad para realizar copias de seguridad en Windows Server se encuentra dentro de las Características.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Según la teoría del temario, aunque se instale como característica, se accede a ella desde Herramientas Administrativas."
            }
        ],
        "Test 2": [
            {
                question: "Indicar qué informaciones contiene el fichero passwd referentes a un usuario Linux. (Selección múltiple)",
                options: [
                    "Contraseña encriptada.",
                    "Nombre de usuario.",
                    "Número de usuario y grupo.",
                    "Directorio local del usuario."
                ],
                correct: [0, 1, 2, 3],
                explanation: "Históricamente el archivo passwd contiene los 4 campos: login, password field (x), UID/GID y home directory."
            },
            {
                question: "¿Desde qué entornos o comandos podemos crear un nuevo grupo local en Windows? (Selección múltiple)",
                options: [
                    "CMD: net localgroup /add.",
                    "Panel de Control -> Herramientas Administrativas -> Administración de equipos.",
                    "CMD: lusrmgr.msc.",
                    "Búsqueda: Usuarios y grupos locales."
                ],
                correct: [0, 1, 2, 3],
                explanation: "Windows ofrece múltiples rutas: línea de comandos, consola de administración de equipos o el acceso directo lusrmgr.msc."
            },
            {
                question: "El comando que permite ejecutar el editor de directivas de grupo local es %windir%\\System32\\gpedit.msc.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "gpedit.msc es el nombre correcto de la consola para editar directivas de grupo locales."
            },
            {
                question: "¿Cuál es el comando que elimina una cuenta de usuario jorge incluso si tiene sesión iniciada en Linux?",
                options: ["delete jorge.", "userdel –r jorge.", "userdel jorge.", "userdel –f jorge."],
                correct: 3,
                explanation: "El parámetro -f (force) obliga al sistema a eliminar al usuario aunque esté logueado en ese momento."
            },
            {
                question: "¿Cuál es el directorio donde se encuentra el perfil genérico de todos los usuarios de Windows 10?",
                options: ["C:/users/default.", "C:/users/all users.", "C:\\users\\nombre_usuario.", "C:\\users\\default."],
                correct: 3,
                explanation: "La plantilla de perfil base está en C:\\users\\default (usando contrabarras)."
            },
            {
                question: "¿La utilidad 'Grupo de hogar' para compartir recursos en red?",
                options: [
                    "Funciona con dominio hogar.",
                    "Funciona en cualquier Windows.",
                    "Funciona con grupo trabajo hogar.",
                    "Ya no funciona en Windows 10."
                ],
                correct: 3,
                explanation: "Fue oficialmente retirada por Microsoft en las actualizaciones de Windows 10 de 2018."
            },
            {
                question: "En el CMD de Windows, ¿qué abre el comando control userpasswords2?",
                options: [
                    "Dará error.",
                    "Abrirá Word.",
                    "Mostrará la ventana de Cuentas de usuario avanzada.",
                    "Disco de restablecimiento."
                ],
                correct: 2,
                explanation: "Es un comando clásico que abre la interfaz avanzada de gestión de usuarios (netplwiz)."
            },
            {
                question: "Para acceder desde un terminal con una cuenta creada en un servidor Windows Server:",
                options: [
                    "Terminal en grupo de trabajo.",
                    "Terminal en dominio y cuenta configurada como global.",
                    "Cuenta de acceso local.",
                    "Cuenta de acceso global únicamente."
                ],
                correct: 1,
                explanation: "El equipo debe estar unido al Dominio y el usuario debe ser 'Global' (del dominio) para validarse centralizadamente."
            },
            {
                question: "La utilidad básica del Panel de control 'Cuentas de usuario' permite gestionar grupos.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Solo permite gestionar usuarios individuales y cambios básicos de contraseña/imagen."
            },
            {
                question: "¿Cuál es el directorio particular de cada usuario en Linux?",
                options: ["Mis documentos.", "Documents and setting.", "/etc/passwd", "home"],
                correct: 3,
                explanation: "Las carpetas personales de los usuarios cuelgan del directorio raíz /home."
            },
            {
                question: "¿Cuál de los siguientes ficheros contiene el UID de un usuario?",
                options: ["/etc/.profile.d", "/etc/passwd.", "/etc/shadow.", "/etc/.profile."],
                correct: 1,
                explanation: "/etc/passwd almacena el nombre, UID, GID, home y shell de cada usuario."
            },
            {
                question: "¿Qué cuenta o cuentas se encuentran deshabilitadas por defecto al instalar Windows Server?",
                options: ["Administrador.", "Administrador e Invitado.", "Administrador, Invitado y Usuarios.", "Invitado."],
                correct: 1,
                explanation: "Por seguridad, la cuenta nativa Administrador y la de Invitado suelen venir deshabilitadas inicialmente."
            }
        ],
        "Test 3": [
            {
                question: "Indicar cuáles son cualidades de la cuenta nativa Administrador en Windows. (Selección múltiple)",
                options: [
                    "Deshabilitada de forma predeterminada.",
                    "Nunca se puede eliminar ni quitar del grupo Administradores.",
                    "Gestiona todos los aspectos del sistema.",
                    "Pertenece al grupo Administradores."
                ],
                correct: [0, 1, 2, 3],
                explanation: "Es una cuenta especial protegida: no se puede borrar, siempre es administrador y viene deshabilitada por defecto."
            },
            {
                question: "Un usuario de tipo o grupo estándar puede:",
                options: [
                    "Cambiar el tipo de cuenta.",
                    "Eliminar su cuenta.",
                    "No puede hacer nada con su configuración.",
                    "Cambiar su propio nombre real y contraseña."
                ],
                correct: 3,
                explanation: "El usuario estándar tiene privilegios sobre su propio perfil, permitiéndole cambiar su password o datos personales."
            },
            {
                question: "Al intentar modificar el nombre de un usuario en Linux provocamos crear un usuario nuevo.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Solo se cambia la etiqueta del login o nombre real; el UID interno de la cuenta sigue siendo el mismo."
            },
            {
                question: "Los ordenadores integrados en un dominio no necesitan físicamente estar en la misma red.",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "El dominio es una agrupación lógica. Pueden estar en redes distintas si hay conectividad (ej. VPN)."
            },
            {
                question: "Cuando se crea un usuario nuevo en Linux, ¿por defecto es miembro de qué grupo?",
                options: [
                    "Un grupo con el mismo nombre que el del usuario.",
                    "usuarios.",
                    "estándar.",
                    "root."
                ],
                correct: 0,
                explanation: "Se usa el modelo UPG (User Private Group), creando un grupo privado con el mismo nombre que el usuario."
            },
            {
                question: "¿Cuáles son directivas de seguridad de contraseñas correctas en Windows? (Selección múltiple)",
                options: [
                    "Requisitos de complejidad.",
                    "Vigencia máxima y mínima.",
                    "Longitud mínima.",
                    "Historial de contraseñas."
                ],
                correct: [0, 1, 2, 3],
                explanation: "Todas estas políticas se configuran en secpol.msc para endurecer la seguridad de los accesos."
            },
            {
                question: "Al dar de baja a un usuario Linux su carpeta personal se borrará.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Repetida: el comando userdel por sí solo no borra el directorio /home del usuario."
            },
            {
                question: "¿Qué realiza el comando 'gedit /etc/profile'?",
                options: [
                    "Edita ficheros ocultos.",
                    "Edita el fichero que configura el perfil común de todos los usuarios.",
                    "Ninguna es correcta.",
                    "Edita el perfil del usuario conectado."
                ],
                correct: 1,
                explanation: "/etc/profile es el script global que carga la configuración de entorno para todos los usuarios del sistema."
            },
            {
                question: "¿Cuál es la orden que nos permite ver el nombre de usuario que tiene abierta la sesión?",
                options: ["%USERNAME%.", "set USERNAME.", "set %USERNAME%.", "set %HOMEPATH%."],
                correct: 2,
                explanation: "Aunque 'echo %USERNAME%' es lo común, en el contexto de este test se espera marcar la opción con los porcentajes."
            },
            {
                question: "La utilidad para realizar copias de seguridad en Windows Server se encuentra dentro de las Características.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Repetida: según la evaluación de la plataforma, esta afirmación se considera Falsa."
            },
            {
                question: "Un usuario solamente puede pertenecer a un grupo local de usuarios dentro de un ordenador.",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Los usuarios pueden ser miembros de múltiples grupos simultáneamente para heredar diferentes permisos."
            },
            {
                question: "¿Qué directiva en smb.conf de Samba indica el grupo de trabajo o dominio?",
                options: ["workgroup.", "server.", "domain.", "Grupodetrabajo."],
                correct: 0,
                explanation: "La directiva 'workgroup' define el grupo de trabajo de Windows al que se unirá el servidor Samba."
            }
        ]
    },
    "Tema 5: Administración de la información": {
        "Test 1": [
            {
                question: "¿Cuál de los siguientes volúmenes básicos multidisco corresponde al RAID-0?",
                options: [
                    "El conjunto de bandas con paridad.",
                    "El conjunto de espejos.",
                    "El conjunto de volúmenes.",
                    "El conjunto de bandas sin paridad."
                ],
                correct: 3,
                explanation: "El RAID 0 une discos repartiendo los datos en bandas sin paridad para ganar velocidad, pero sin tolerancia a fallos."
            },
            {
                question: "¿Cuáles de estos sistemas reconocen discos dinámicos? (Selección múltiple)",
                options: [
                    "Windows XP Home.",
                    "Cualquier versión de Windows Server.",
                    "Cualquier versión de Windows 10.",
                    "Cualquier versión de Linux."
                ],
                correct: [1, 2],
                explanation: "Los discos dinámicos son soportados por Windows Server y las versiones profesionales/modernas de Windows de escritorio."
            },
            {
                question: "¿Cuál de las siguientes rutas puede corresponder al Escritorio de Juan?",
                options: [
                    "C:\\PerfLogs\\Juan",
                    "C:\\Usuarios\\Juan\\Escritorio",
                    "C:\\Escritorio\\Juan",
                    "C:\\Windows\\Desktop\\Juan"
                ],
                correct: 1,
                explanation: "En Windows, las carpetas personales se encuentran dentro del perfil del usuario en C:\\Usuarios\\."
            },
            {
                question: "¿Qué nombre reciben los extremos de un archivo?",
                options: ["Principio y fin.", "Cabecera y cola.", "Comienzo y final.", "Cabeza y trasera."],
                correct: 1,
                explanation: "Se utiliza 'Cabecera' (Header) para el inicio y 'Cola' (Tail) para el final del archivo."
            },
            {
                question: "¿Cuál de las siguientes es la modalidad más moderna de la familia FAT?",
                options: ["FAT16.", "FAT12.", "FAT64.", "FAT32."],
                correct: 3,
                explanation: "De la lista de nomenclaturas clásicas, FAT32 es la versión final y más avanzada de la familia FAT."
            },
            {
                question: "En el formateo a bajo nivel:",
                options: [
                    "No se eliminan ni los datos ni los programas.",
                    "Se eliminan los datos pero no los programas.",
                    "Se eliminan los programas pero no los datos.",
                    "Se eliminan tanto los datos como los programas."
                ],
                correct: 3,
                explanation: "El formateo a bajo nivel reescribe la estructura física del disco, destruyendo de forma irreversible toda la información."
            },
            {
                question: "Indica qué tipos de RAID se podrían montar con cinco discos. (Selección múltiple)",
                options: ["RAID-0.", "RAID-1.", "RAID 0+1.", "RAID-5."],
                correct: [0, 3],
                explanation: "RAID 0 (mínimo 2 discos) y RAID 5 (mínimo 3 discos) pueden configurarse con 5 unidades."
            },
            {
                question: "¿En qué lugar se sitúa el sector de arranque (MBR)?",
                options: [
                    "Al final de cada partición.",
                    "Al comienzo del disco.",
                    "Al comienzo de cada partición.",
                    "Al final del disco."
                ],
                correct: 1,
                explanation: "El Master Boot Record (MBR) se sitúa siempre en el primer sector físico absoluto del disco (Sector 0)."
            },
            {
                question: "Señala la afirmación correcta sobre las reglas de particionado UEFI (GPT):",
                options: [
                    "Se pueden crear particiones lógicas y primarias.",
                    "Se pueden crear particiones lógicas.",
                    "Se pueden crear solo particiones primarias.",
                    "Se pueden crear extendidas."
                ],
                correct: 2,
                explanation: "UEFI/GPT permite hasta 128 particiones primarias, eliminando la necesidad de particiones extendidas y lógicas."
            },
            {
                question: "Señala las afirmaciones correctas sobre particionado MBR. (Selección múltiple)",
                options: [
                    "Puede haber más de una partición lógica en un mismo disco.",
                    "La partición extendida es un tipo de partición primaria.",
                    "La partición primaria no puede contener sólo datos.",
                    "Un disco con MBR no puede tener más de cuatro particiones primarias."
                ],
                correct: [0, 3],
                explanation: "El MBR limita a 4 primarias; para tener más, se usa una extendida con múltiples unidades lógicas."
            },
            {
                question: "Señala las afirmaciones correctas. (Selección múltiple)",
                options: [
                    "La partición swap es un tipo de partición típica de Linux.",
                    "La partición activa es en la que se inicia el arranque del sistema.",
                    "La partición extendida puede contener particiones lógicas y primarias.",
                    "Sobre la partición lógica no puede instalarse un sistema operativo."
                ],
                correct: [0, 1],
                explanation: "Swap es la memoria virtual de Linux y la partición activa marca dónde reside el gestor de arranque."
            },
            {
                question: "¿Qué es un clúster?",
                options: ["La capacidad exacta de un bloque.", "Una agrupación de bloques.", "El tamaño de un cilindro.", "El espacio de una pista."],
                correct: 1,
                explanation: "Un clúster o unidad de asignación es el conjunto mínimo de sectores (bloques) que el SO puede gestionar."
            }
        ],
        "Test 2": [
            {
                question: "¿Cuáles de los siguientes nombres de archivo NO son correctos? (Selección múltiple)",
                options: [
                    "archivo.com",
                    "archivo\"a\".com",
                    "Archivo$.com",
                    "3archivos.com"
                ],
                correct: [1, 2],
                explanation: "Las comillas (\") están prohibidas. El símbolo $ también se considera inválido en contextos de temario clásico."
            },
            {
                question: "¿Cuáles de las siguientes afirmaciones son ciertas? (Selección múltiple)",
                options: [
                    "El sistema ext3 incluye journaling sobre ext2.",
                    "El sistema ext2 utiliza una tabla de i-nodos.",
                    "El sistema ext3 está basado en extents.",
                    "El sistema ext4 es compatible con ext3 pero sin journaling."
                ],
                correct: [0, 1],
                explanation: "ext3 añadió journaling a ext2. ext4 fue el que introdujo los extents y mantiene el journaling."
            },
            {
                question: "La técnica de inodos es típica de:",
                options: ["Symbian/Android.", "Windows y Linux.", "sistemas Windows.", "sistemas Linux."],
                correct: 3,
                explanation: "Los i-nodos son la estructura fundamental de gestión de archivos en sistemas tipo Unix/Linux."
            },
            {
                question: "¿A qué equivale un volumen seccionado?",
                options: [
                    "Al conjunto de bandas sin paridad.",
                    "Al conjunto de bandas con paridad.",
                    "Al conjunto de volúmenes.",
                    "Al conjunto de espejos."
                ],
                correct: 0,
                explanation: "Volumen seccionado es el término de Windows para un RAID-0 (bandas sin paridad)."
            },
            {
                question: "¿Cuál de los siguientes no es un tipo de mantenimiento?",
                options: ["Mantenimiento preventivo.", "Mantenimiento predictivo.", "Mantenimiento correctivo.", "Mantenimiento interactivo."],
                correct: 3,
                explanation: "Los mantenimientos estándar son Preventivo, Predictivo y Correctivo. El 'interactivo' no existe."
            },
            {
                question: "¿Cuál de los siguientes directorios de Linux contiene los archivos de configuración del sistema?",
                options: ["/dev", "/etc", "/bin", "/conf"],
                correct: 1,
                explanation: "/etc almacena los archivos de configuración globales y de servicios en sistemas Linux."
            },
            {
                question: "¿Cuáles de las siguientes características son típicas de NTFS? (Selección múltiple)",
                options: [
                    "Está basado en el sistema de archivos HPFS.",
                    "Windows NT no puede manejarlo.",
                    "Soporta dominios.",
                    "Linux no puede manejarlo."
                ],
                correct: [0, 2],
                explanation: "NTFS se basó en HPFS y soporta características de seguridad para Dominios (Active Directory)."
            },
            {
                question: "La ruta '../ventas/octubre' se considera:",
                options: ["No hay datos.", "relativa.", "típica de Windows.", "absoluta."],
                correct: 1,
                explanation: "Es relativa porque empieza con ../, indicando una posición respecto al directorio actual."
            },
            {
                question: "Indica qué tipos de RAID se podrían montar con cinco discos. (Selección múltiple)",
                options: ["RAID-1.", "RAID-5.", "RAID-0.", "RAID 0+1."],
                correct: [1, 2],
                explanation: "RAID-0 (desde 2 discos) y RAID-5 (desde 3 discos) son válidos para un conjunto de 5 unidades."
            },
            {
                question: "¿Cuáles de estos sistemas reconocen discos dinámicos? (Selección múltiple)",
                options: [
                    "Cualquier versión de Linux.",
                    "Windows XP Home.",
                    "Cualquier versión de Windows Server.",
                    "Cualquier versión de Windows 10."
                ],
                correct: [2, 3],
                explanation: "Es una característica de gestión de volúmenes de Windows Server y ediciones Pro/Enterprise de escritorio."
            },
            {
                question: "Señala las afirmaciones correctas sobre particiones. (Selección múltiple)",
                options: [
                    "La partición swap es típica de Linux.",
                    "Sobre la partición lógica no puede instalarse un SO.",
                    "La partición activa inicia el arranque.",
                    "La partición extendida puede contener primarias."
                ],
                correct: [0, 2],
                explanation: "Swap es área de intercambio y la partición activa indica dónde está el sector de arranque."
            },
            {
                question: "Si en la carpeta 'compras' tengo un archivo llamado 'nacional.dat':",
                options: [
                    "Puede haber otro archivo con el mismo nombre en distinta carpeta.",
                    "En Linux no es posible este nombre.",
                    "No puede haber otro en todo el equipo.",
                    "Solo tendrá una ruta absoluta."
                ],
                correct: 0,
                explanation: "Los nombres deben ser únicos dentro de una carpeta, pero pueden repetirse en directorios diferentes."
            }
        ],
        "Test 3": [
            {
                question: "Señala las tareas que se llevan a cabo para mantener un disco. (Selección múltiple)",
                options: [
                    "Comprobar el estado físico.",
                    "Verificación de la integridad de datos.",
                    "Optimización del espacio.",
                    "Desfragmentación."
                ],
                correct: [0, 1, 2, 3],
                explanation: "Todas son tareas esenciales de mantenimiento para asegurar la salud y rendimiento del disco."
            },
            {
                question: "¿Cuáles de las siguientes afirmaciones son ciertas? (Selección múltiple)",
                options: [
                    "El sistema ext3 está basado en extents.",
                    "El sistema ext4 es compatible con ext3 pero sin journaling.",
                    "El sistema ext2 utiliza i-nodos.",
                    "El sistema ext3 incluye journaling sobre ext2."
                ],
                correct: [2, 3],
                explanation: "ext2 usa inodos y ext3 añadió el journaling como mejora principal."
            },
            {
                question: "Señala las afirmaciones correctas sobre RAID. (Selección múltiple)",
                options: [
                    "RAID-5 es una variante de RAID-0 con control de errores.",
                    "RAID-1 utiliza discos en parejas.",
                    "RAID 0+1 es lo mismo que RAID 1+0.",
                    "RAID-0 no es realmente un RAID."
                ],
                correct: [0, 1, 3],
                explanation: "RAID-0 no es 'realmente' un RAID por falta de redundancia. RAID-1 usa pares y RAID-5 añade paridad."
            },
            {
                question: "¿Qué es el Fake RAID?",
                options: [
                    "No existe este término.",
                    "RAID sin discos.",
                    "RAID por hardware gestionado por la placa base.",
                    "RAID simulado por software."
                ],
                correct: 2,
                explanation: "Es un RAID híbrido que usa circuitería en la placa base pero depende de la CPU y drivers del SO."
            },
            {
                question: "¿Se puede convertir un disco básico a dinámico?",
                options: [
                    "Sí, incluso en extraíbles.",
                    "No, sólo de dinámico a básico.",
                    "Sí, pero sólo si los discos son fijos.",
                    "Sí, pero implica pérdida de datos."
                ],
                correct: 2,
                explanation: "Windows permite convertir discos rígidos internos, pero no unidades USB o memorias extraíbles."
            },
            {
                question: "Señala las afirmaciones correctas sobre la conversión de dinámico a básico. (Selección múltiple)",
                options: [
                    "Se mantiene el SO y arranca.",
                    "No es necesario borrar datos.",
                    "Hay que eliminar todos los volúmenes previamente.",
                    "Los volúmenes no pueden convertirse a particiones."
                ],
                correct: [2, 3],
                explanation: "Para pasar de dinámico a básico hay que borrar todos los volúmenes (y datos) primero."
            },
            {
                question: "¿Cuál de las siguientes características es típica de FAT?",
                options: ["Soporta dominios.", "Elimina la fragmentación.", "Control de acceso.", "Soporte para LFNs."],
                correct: 3,
                explanation: "El soporte para nombres largos (LFN) fue una de las mejoras clave del sistema FAT/VFAT."
            },
            {
                question: "Si en la carpeta 'compras' tengo 'nacional.dat':",
                options: [
                    "En Linux no es posible.",
                    "No puede haber otro igual en el equipo.",
                    "Puede haber otro igual en distinta carpeta.",
                    "Solo tendrá una ruta absoluta."
                ],
                correct: 2,
                explanation: "Dos archivos pueden llamarse igual mientras estén en rutas o directorios diferentes."
            },
            {
                question: "¿Qué designa la variable %SystemDrive%?",
                options: [
                    "Directorio Windows.",
                    "Disco duro principal.",
                    "Unidades extraíbles.",
                    "Unidad lógica que contiene el sistema operativo."
                ],
                correct: 3,
                explanation: "Es la variable de entorno que apunta a la letra de unidad donde reside Windows (normalmente C:)."
            },
            {
                question: "Conversión de básico a dinámico en Windows 10. (Selección múltiple)",
                options: [
                    "No es posible si el disco es USB.",
                    "Necesita al menos 1MB libre al final.",
                    "La conversión mantiene las particiones.",
                    "Se mantiene el SO arrancable en otros sistemas."
                ],
                correct: [0, 1],
                explanation: "No funciona en USB y requiere un pequeño espacio al final para la base de datos de gestión de volúmenes."
            },
            {
                question: "La técnica de inodos es típica de:",
                options: ["Windows y Linux.", "sistemas Windows.", "sistemas Linux.", "Symbian/Android."],
                correct: 2,
                explanation: "Es el mecanismo estándar de almacenamiento de metadatos en file systems de Linux."
            },
            {
                question: "Mediante la técnica de asignación indexada:",
                options: [
                    "Acceso más rápido por direcciones cortas.",
                    "Las direcciones de bloques se colocan en una tabla de registros.",
                    "Elimina la fragmentación.",
                    "Cada bloque apunta al siguiente."
                ],
                correct: 1,
                explanation: "Un bloque índice guarda la tabla de punteros hacia todos los bloques de datos del archivo."
            }
        ]
    },
    "Tema 6: Administración de dominios": {
        "Test 1": [
            {
                question: "¿Cómo se llaman las cuentas de los equipos Windows que se añaden a un controlador de dominio Linux?",
                options: ["Cuentas equipos.", "Cuentas de confianza.", "Cuentas que contengan el signo dólar ($).", "Cuentas especiales."],
                correct: 1,
                explanation: "Las cuentas de confianza (Trust Accounts) permiten que los equipos se identifiquen ante el controlador de dominio Linux mediante Samba."
            },
            {
                question: "Cuando se instala el Active Directory en el primer equipo de la red, ¿qué objetos se crean de forma predeterminada?",
                options: ["Solo el dominio raíz.", "Solo el bosque del dominio.", "El dominio raíz y el bosque del dominio.", "Las relaciones de confianza y los equipos clientes."],
                correct: 2,
                explanation: "El primer controlador crea simultáneamente la raíz del dominio y el bosque (Forest) que lo contiene."
            },
            {
                question: "En un entorno de dominio, ¿es válida una contraseña de usuario como \"aluMn101\"?",
                options: [
                    "Sí, porque cumple con los requisitos de complejidad (contiene minúsculas, mayúsculas y números).",
                    "No, porque carece de caracteres especiales obligatorios.",
                    "Sí, pero solo si tiene una longitud mínima de 12 caracteres.",
                    "No, porque una contraseña nunca puede incluir números consecutivos."
                ],
                correct: 0,
                explanation: "Cumple con las 3 categorías básicas: mayúsculas, minúsculas y números, lo que satisface la política de complejidad estándar."
            },
            {
                question: "¿Puede un usuario Administrador de un controlador de dominio Windows Server 2019 tener una contraseña como \"alumno101\"?",
                options: [
                    "Sí, las cuentas de administrador no tienen restricciones de complejidad.",
                    "No, porque no cumple con los requisitos mínimos de complejidad (le falta una mayúscula o un carácter especial).",
                    "Sí, porque supera los 8 caracteres de longitud exigidos.",
                    "No, porque las contraseñas de administrador deben tener al menos 15 caracteres."
                ],
                correct: 1,
                explanation: "Las cuentas administrativas exigen complejidad obligatoria; 'alumno101' solo tiene minúsculas y números."
            },
            {
                question: "¿Es necesario tener instalado Samba para poder compartir una carpeta en Linux con equipos Windows y personalizar el tipo de acceso por usuario?",
                options: [
                    "No, Linux puede compartir carpetas nativamente con Windows sin software adicional.",
                    "Sí, Samba es el servicio indispensable para usar el protocolo SMB y gestionar dichos accesos.",
                    "No, se utiliza el protocolo SSH para compartir carpetas en red local de forma gráfica.",
                    "Sí, pero solo si la red no cuenta con un servidor DNS."
                ],
                correct: 1,
                explanation: "Samba implementa el protocolo SMB/CIFS en Linux, permitiendo la interoperabilidad con sistemas de archivos de Windows."
            },
            {
                question: "¿A qué tipo de usuarios podemos asignar perfiles móviles (roaming profiles) en un entorno de red?",
                options: ["A los usuarios locales de cada equipo.", "A los usuarios globales de un dominio.", "A los usuarios invitados (Guest) del sistema.", "A cualquier usuario, independientemente de si pertenece a un dominio o grupo de trabajo."],
                correct: 1,
                explanation: "Los perfiles móviles requieren una cuenta de dominio global para que el servidor pueda sincronizar el perfil en cualquier equipo de la red."
            },
            {
                question: "¿Qué tipo de configuración de red TCP/IP debe tener el servidor que gestiona el servicio DNS?",
                options: ["Automática (DHCP).", "Dinámica (APIPA).", "Manual / Estática.", "Depende de la versión del sistema operativo."],
                correct: 2,
                explanation: "Un servidor de infraestructura crítica como el DNS debe tener una IP estática para que los clientes siempre puedan localizarlo."
            },
            {
                question: "¿Cuál es el grupo de trabajo que tienen configurado de forma predeterminada los equipos Linux en el fichero de configuración de Samba?",
                options: ["WINDOWS.", "LOCALHOST.", "smb.", "WORKGROUP."],
                correct: 3,
                explanation: "Por compatibilidad con Windows, el valor predeterminado en smb.conf suele ser WORKGROUP."
            },
            {
                question: "¿Cuál es el protocolo más seguro utilizado para acceder remotamente a la consola de un servidor Linux?",
                options: ["ftp.", "telnet.", "SSH.", "samba."],
                correct: 2,
                explanation: "SSH (Secure Shell) utiliza cifrado para proteger la comunicación, a diferencia de protocolos antiguos como Telnet."
            },
            {
                question: "¿Es posible instalar un controlador de dominio secundario (adicional) para un controlador de dominio principal?",
                options: [
                    "No, una red solo puede tener un único controlador de dominio.",
                    "Sí, para proporcionar tolerancia a fallos y balancear la carga de trabajo.",
                    "Sí, pero solo si ambos servidores son Linux.",
                    "No, a menos que el servidor principal esté apagado."
                ],
                correct: 1,
                explanation: "Los controladores adicionales mejoran la redundancia y permiten que los usuarios sigan validándose si el principal falla."
            }
        ],
        "Test 2": [
            {
                question: "¿Podemos crear unidades organizativas dentro de otra unidad organizativa?",
                options: [
                    "Sí, se pueden anidar formando una jerarquía para reflejar la estructura de la organización.",
                    "No, las unidades organizativas solo pueden colgar directamente de la raíz del dominio.",
                    "Sí, pero el sistema operativo limita el anidamiento a un máximo de dos niveles.",
                    "No, para agrupar unidades organizativas dentro de otras es necesario utilizar grupos globales."
                ],
                correct: 0,
                explanation: "Las UO son contenedores jerárquicos que permiten organizar recursos por departamentos, delegaciones, etc."
            },
            {
                question: "¿Cuáles de las siguientes son herramientas administrativas de Active Directory?",
                options: [
                    "Programador de tareas y Windows PowerShell ISE (x86).",
                    "Solo la consola de \"Usuarios y equipos de Active Directory\".",
                    "\"Usuarios y equipos de Active Directory\" y \"Sitios y servicios de Active Directory\".",
                    "El Programador de tareas y \"Sitios y servicios de Active Directory\"."
                ],
                correct: 2,
                explanation: "Son las dos consolas principales para gestionar objetos y la topología física de la red respectivamente."
            },
            {
                question: "¿Cuál es el comando en Linux que permite convertir un usuario del sistema en un usuario de Samba?",
                options: ["passwd", "smbpasswd", "useradd", "adduser"],
                correct: 1,
                explanation: "smbpasswd se encarga de gestionar las contraseñas y el estado de las cuentas de usuario en el servicio Samba."
            },
            {
                question: "¿Cuál es la orden exacta que nos permite añadir el usuario \"baloo\" como usuario del servicio Samba?",
                options: [
                    "sudo AddUser –a baloo",
                    "sudo smbpasswd –a baloo",
                    "sudo SmbPasswd –a baloo",
                    "sudo adduser –a baloo"
                ],
                correct: 1,
                explanation: "El parámetro -a añade el usuario especificado a la base de datos de usuarios de Samba."
            },
            {
                question: "¿Desde qué terminales de una red local podemos acceder como usuarios de un servidor que actúa como controlador de dominio?",
                options: [
                    "Solo en los equipos que tengan una dirección IP estática del mismo rango de red que el servidor.",
                    "Únicamente en los terminales en los que el usuario esté dado de alta de forma local.",
                    "En cualquier equipo cliente o servidor que esté unido o sea miembro del dominio.",
                    "En los equipos donde el grupo de trabajo configurado sea WORKGROUP."
                ],
                correct: 2,
                explanation: "Cualquier equipo miembro permite el inicio de sesión con cuentas del dominio gracias a la confianza establecida."
            },
            {
                question: "Si un usuario tiene permiso de escritura en dos carpetas y tiene asignada una cuota de disco de 2 MB en ese volumen, ¿cuánto puede almacenar en cada carpeta?",
                options: [
                    "Independientemente de cómo lo reparta, la suma de las dos carpetas no puede sobrepasar los 2 MB en total.",
                    "Exactamente 1 MB para cada una de las carpetas.",
                    "Puede almacenar 2 MB en cada carpeta, sumando un total de 4 MB.",
                    "Solamente puede tener permiso para almacenar datos en una de ellas si se aplican cuotas."
                ],
                correct: 0,
                explanation: "Las cuotas se aplican por volumen y usuario, limitando el espacio total consumido por ese usuario en todo el disco."
            },
            {
                question: "¿Qué formato de nombre de usuario ponemos en el login de entrada para acceder localmente a un equipo Windows integrado en un dominio?",
                options: [
                    "Nombre_equipo_local\\nombre_usuario_local",
                    "Nombre_equipo_local/nombre_usuario_local",
                    "Nombre_dominio\\nombre_usuario_local",
                    "No se puede acceder localmente a un equipo que está unido a un dominio."
                ],
                correct: 0,
                explanation: "Para forzar el acceso local se usa la sintaxis Equipo\\Usuario, de lo contrario se intentará validar contra el dominio."
            },
            {
                question: "Siempre que tengamos una cuenta de usuario local creada, podemos iniciar sesión como usuario local en un terminal que está unido a un dominio. ¿Es esto verdadero o falso?",
                options: [
                    "Sí, seleccionando el equipo local en lugar del dominio en la pantalla de inicio de sesión.",
                    "No, al unirse a un dominio las cuentas locales se desactivan automáticamente y no se pueden usar.",
                    "Sí, pero solo si el controlador de dominio está apagado o la red está caída.",
                    "No, las políticas de seguridad del dominio eliminan las cuentas locales preexistentes."
                ],
                correct: 0,
                explanation: "Unirse al dominio no borra ni deshabilita las cuentas locales; estas siguen siendo útiles para mantenimiento local."
            },
            {
                question: "¿Cuál de las siguientes órdenes permite reiniciar el servicio Samba desde la línea de comandos en distribuciones antiguas como Ubuntu 9.04 (basadas en init.d)?",
                options: [
                    "sudo /etc/init.d/samba stop",
                    "sudo /etc/init.d/samba restart",
                    "sudo /etc/init.d/init samba",
                    "sudo systemctl restart smbd"
                ],
                correct: 1,
                explanation: "En sistemas antiguos se invocaban los scripts de /etc/init.d/ con el parámetro restart."
            },
            {
                question: "¿Podemos acceder a un recurso compartido por un equipo mediante la característica \"Grupo en el hogar\" (HomeGroup) desde un Windows XP Profesional?",
                options: [
                    "Sí, Windows XP es totalmente compatible con la característica de Grupo en el hogar.",
                    "No, la característica Grupo en el hogar fue introducida en Windows 7 y no es compatible con Windows XP.",
                    "Sí, pero solo si el equipo con Windows XP tiene instalado el protocolo IPv6 manualmente.",
                    "No, porque Windows XP solo puede unirse a dominios, no a grupos de trabajo convencionales."
                ],
                correct: 1,
                explanation: "HomeGroup es una característica 'nueva' que XP no reconoce, aunque se instale IPv6."
            }
        ],
        "Test 3": [
            {
                question: "¿En qué campo de la pestaña Perfil, en la ventana de Propiedades de la cuenta de un usuario, podemos indicar un script de inicio de sesión que pueda contener, por ejemplo la orden para conectar con una unidad de red de un recurso?",
                options: ["Net use.", "Script de inicio de sesión.", "Ruta de acceso al perfil.", "Fichero bat de arranque."],
                correct: 1,
                explanation: "El campo 'Script de inicio de sesión' apunta al nombre del archivo .bat o .vbs ubicado en la carpeta Netlogon del servidor."
            },
            {
                question: "Cuándo un equipo se integra en el dominio, de forma predeterminada, se crea una cuenta de equipo en la carpeta Computers del Active Directory. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Es el contenedor base donde van a parar todos los nuevos miembros del dominio si no se especifica una UO."
            },
            {
                question: "Si disponemos de los permisos adecuados, podemos acceder a un recurso compartido de otro ordenador mediante la herramienta de Conectarse a una Unidad de red. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Mapear una unidad de red permite asignar una letra de unidad (ej. Z:) a una ruta UNC (\\\\servidor\\recurso)."
            },
            {
                question: "¿Cuál o cuáles son los caminos a seguir en el sistema operativo Windows 10 para acceder a la configuración de la tarjeta de red?",
                options: [
                    "Panel de búsqueda escribimos-Red, hacemos clic en Ver conexiones de red-botón derecho de ratón en el adaptador-Propiedades.",
                    "Panel de búsqueda escribimos-Panel de control-Sistema-Administrador de dispositivos-Adaptador de red.",
                    "Inicio-Equipo, botón derecho de ratón- Propiedades -Sistema-Administrador de dispositivos-Adaptador de red.",
                    "Inicio-Equipo-seleccionar Red-botón derecho del ratón-Ver equipos y dispositivos."
                ],
                correct: 0,
                explanation: "Es el método más directo en las versiones modernas para llegar a las propiedades de IPv4."
            },
            {
                question: "¿Qué servicio es necesario instalar y configurar para poder crear un controlador de dominio?",
                options: ["Dns.", "Ftp.", "Dhcp.", "Wins."],
                correct: 0,
                explanation: "Active Directory depende críticamente del DNS para localizar los servicios del dominio (SRV records)."
            },
            {
                question: "Una cuenta de equipo puede pertenecer a una unidad organizativa dentro del Active Directory. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Movemos cuentas de equipo a UOs para aplicarles políticas de grupo (GPO) específicas."
            },
            {
                question: "¿Cuándo podemos acceder en una red desde un equipo Linux a un recurso compartido de un equipo Windows?",
                options: [
                    "Siempre que se tenga instalado samba y configurado el fichero samb.conf.",
                    "Siempre que el equipo Linux sea un servidor de Windows.",
                    "Siempre que se tenga instalada SWAT.",
                    "No se puede acceder."
                ],
                correct: 0,
                explanation: "Samba proporciona los drivers y protocolos necesarios para que Linux 'entienda' los recursos compartidos de Windows."
            },
            {
                question: "¿Podemos deshabilitar la cuenta de un equipo, para que no pueda entrar al dominio, aunque en ese instante tenga una sesión abierta con el Active Directory?",
                options: [
                    "No, antes hay que borrar los usuarios del equipo.",
                    "No, nunca.",
                    "Si borrando la cuenta de la carpeta Computers.",
                    "Si pero antes debemos forzar a cerrar la sesión."
                ],
                correct: 3,
                explanation: "Deshabilitar la cuenta impide nuevas validaciones, pero para que sea efectiva inmediatamente hay que cerrar las conexiones activas."
            },
            {
                question: "Cuando se comparte una carpeta en un terminal Windows, de forma predeterminada, ¿Quién tiene permiso para modificar?",
                options: [
                    "Los usuarios propietarios de la carpeta y el grupo administradores.",
                    "solamente el propietario.",
                    "solamente el administrador.",
                    "Usuarios del dominio."
                ],
                correct: 0,
                explanation: "El creador (propietario) y los administradores heredan el control sobre el recurso compartido por defecto."
            },
            {
                question: "¿Qué orden escribirías en el terminal para editar el fichero de configuración samba?",
                options: [
                    "sudo nano /etc/var/samba.conf",
                    "sudo nano /etc/samba/samba.conf",
                    "sudo nano /etc/samba/smb.conf",
                    "sudo nano /var/samba/samba.conf."
                ],
                correct: 2,
                explanation: "La ruta estándar de configuración de Samba es /etc/samba/smb.conf."
            }
        ]
    },
    "Tema 7: Administración de dominios (Parte 2)": {
        "Test 1": [
            {
                question: "¿Qué comando se ejecutará para unir una cuenta de equipo Linux al controlador de dominio Windows serviWindows.es, cuyo usuario administrador del Active Directory es administrador con clave Servidor123es?",
                options: [
                    "sudo sudo net ads join –S serviWindows.es",
                    "sudo net join –S serviWindows.es -U administrador%Servidor123es",
                    "sudo join –S serviWindows.es -U administrador%Servidor123es",
                    "sudo net ads join –S serviWindows.es -U administrador%Servidor123es"
                ],
                correct: 3,
                explanation: "Para unir un equipo Linux a un Active Directory, se utiliza el comando net ads join. El parámetro -S indica el servidor/dominio, y -U permite introducir el usuario y la contraseña separados por un %."
            },
            {
                question: "En Windows, si las casillas de verificación del cuadro Permisos para usuario o grupo están sombreadas, o si el botón Quitar no está disponible, el archivo o la carpeta tiene permisos heredados de la carpeta principal. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "En los sistemas de archivos NTFS, las casillas de permisos grises o 'sombreadas' son el indicador visual de que esos permisos no son explícitos, sino que se heredan de un directorio superior."
            },
            {
                question: "¿Qué línea deberemos de añadir el fichero “/etc/exports” de un servidor NFS de Linux para compartir la carpeta “/home/carlos” con los permisos de sólo lectura para todos?",
                options: [
                    "/home/carlos Todos(ro)",
                    "/home/carlos * +ro",
                    "/home/carlos *(ro)",
                    "Todas son correctas."
                ],
                correct: 2,
                explanation: "En la sintaxis de /etc/exports (NFS), el asterisco * equivale a \"todos los equipos/clientes\", y (ro) es el parámetro para indicar \"read-only\" (sólo lectura)."
            },
            {
                question: "¿En qué directorio se encuentran las directivas de grupo local de los diferentes objetos en cada ordenador con sistema Windows?",
                options: [
                    "SystemRoot\\System32\\GroupPolicy",
                    "SystemRoot\\System32",
                    "%windir%\\System32",
                    "windows\\System32"
                ],
                correct: 0,
                explanation: "Las directivas de grupo local se almacenan en una carpeta oculta por defecto ubicada en la variable de entorno de la raíz del sistema, dentro de System32."
            },
            {
                question: "Si el servidor wind con sistema Linux tiene la dirección IP 192.168.1.1 e esta compartiendo la carpeta Apuntes de forma anónima. ¿Qué orden ejecutaremos como usuario root en un cliente de Linux para poderla utilizar el recurso Apuntes?",
                options: [
                    "smbumount /home/carlos",
                    "smbclient //wind/Apuntes –I 192.168.1.1",
                    "Ninguna es correcta.",
                    "smbmount //wind/Apuntes /home/carlos -o guest –I 192.168.1.1"
                ],
                correct: 3,
                explanation: "El comando smbmount monta la carpeta de red en un directorio local. El parámetro -o guest es indispensable para indicar que el acceso es anónimo (sin credenciales)."
            },
            {
                question: "Un usuario que tiene el permiso de lectura sobre una carpeta compartida en un dominio de Windows, puede añadir más carpetas dentro de la carpeta compartida. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "El permiso de \"Lectura\" solo permite ver el contenido. Para crear o añadir carpetas se requiere, como mínimo, el permiso de \"Escritura\"."
            },
            {
                question: "Con la orden “chmod = ejercicios.txt” damos todos los privilegios a todos los usuarios del archivo “ejercicios.txt”. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "La orden chmod = es una sintaxis incompleta. Para dar todos los privilegios a todos se usaría chmod 777 ejercicios.txt o chmod a=rwx ejercicios.txt."
            },
            {
                question: "De forma predeterminada, los permisos de acceso a la carpeta Acceso público serán asignados para el grupo Todos. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Las carpetas de \"Acceso público\" en Windows vienen configuradas de fábrica para que el grupo \"Todos\" pueda leer y escribir, facilitando el intercambio local de archivos."
            },
            {
                question: "Indicar qué permisos especiales en ficheros o carpetas tiene un usuario en un recurso compartido de un dominio, que permite Mostrar el contenido de la carpeta. (Selección múltiple)",
                options: [
                    "Leer permisos.",
                    "Listar carpeta / leer datos.",
                    "Recorre la carpeta o ejecutar archivo.",
                    "Cambiar permisos."
                ],
                correct: [0, 1, 2],
                explanation: "En los permisos avanzados de NTFS, el permiso estándar \"Mostrar el contenido de la carpeta\" es un permiso compuesto que engloba la capacidad de recorrer la estructura, ver (listar) los archivos que contiene, y leer sus atributos y permisos básicos."
            },
            {
                question: "¿Qué comando usaremos para montar el recurso “Apuntes” de servidor SMB “servidorsmb”, en el directorio local “/mnt” como usuario “carlos” e con la contraseña “1234”?",
                options: [
                    "smbmount //servidorsmb/Apuntes /mnt –U carlos –P 1234",
                    "mv //servidorsmb/Apuntes /mnt –U carlos –P 1234",
                    "cp //servidorsmb/Apuntes /mnt –U carlos –P 1234",
                    "mount //servidorsmb/Apuntes /mnt –U carlos –P 1234"
                ],
                correct: 0,
                explanation: "smbmount es la herramienta clásica de Samba para montar recursos. Se pasan el usuario con la etiqueta -U y la contraseña con -P."
            },
            {
                question: "Si tenemos una carpeta compartida llamada “Apuntes” con permisos Linux de lectura, escritura y ejecución para todos, y en el archivo de configuración de samba dicho recurso tiene el parámetro “read only = yes”, no será posible realizar cambios ya que está compartido con permiso de “solo lectura”. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "En Samba siempre prevalece el permiso más restrictivo. Si Samba impone \"read only = yes\", bloqueará la escritura por red sin importar que los permisos locales de Linux sean totales (777)."
            },
            {
                question: "¿Cuál será la respuesta correcta?, si tenemos compartida una carpeta llamada “Distancia” con permisos de escritura para el grupo “Alumnos”, todos los usuarios que pertenezcan al grupo alumnos podrán realizar cambios en la carpeta, pero si dentro de dicha carpeta existe otra llamada “Justificantes” sobre la cual no tiene permiso para entrar el grupo Alumnos.",
                options: [
                    "Ningún alumno podrá ver el contenido de Justificantes.",
                    "Los alumnos solamente pueden ver el contenido de la carpeta Justificantes.",
                    "Los alumnos no pueden ver el contenido de Justificantes y Distancia.",
                    "Los alumnos pueden ver el contenido de Justificantes y Distancia."
                ],
                correct: 0,
                explanation: "Los permisos en subcarpetas pueden romper la herencia. Si tienen denegado el acceso o carecen de permisos en la subcarpeta \"Justificantes\", su interior será inaccesible para ellos, aunque sí puedan ver y modificar \"Distancia\"."
            },
            {
                question: "Ejecutando en Linux como usuario root la orden “chmod 1777 /tmp” se evita el borrado de ficheros ajenos dentro del directorio público /tmp. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "El número 1 inicial activa el \"Sticky bit\" (Bit pegajoso). En un directorio público (777), este bit garantiza que un usuario solo pueda borrar los archivos de los que él mismo es propietario."
            },
            {
                question: "¿De qué manera podemos conseguir que solamente el usuario pueda ver el contenido del directorio /home/Apuntes en Linux?",
                options: [
                    "sudo chmod go-rwx /home/Apuntes",
                    "sudo chmod 711 /home/Apuntes",
                    "sudo chmod 771 /home/Apuntes",
                    "sudo chmod go+rwx /home/Apuntes"
                ],
                correct: 0,
                explanation: "El modificador go-rwx le resta (quita) los permisos de lectura, escritura y ejecución a los Grupos (g) y a los Otros (o). Esto aísla la carpeta para que solo su propietario conserve el acceso."
            },
            {
                question: "¿Cuál es la aplicación que podemos ejecutar desde Símbolo de sistema en Windows Server 2019 e que nos permite administrar las Directivas de grupo?",
                options: [
                    "gpedit.msc",
                    "secpol.msc",
                    "security.msc",
                    "GroupPolicy"
                ],
                correct: 0,
                explanation: "gpedit.msc es el comando que abre directamente el Editor de Directivas de Grupo Local (Group Policy Editor) en la interfaz de Windows."
            }
        ],
        "Test 2": [
            {
                question: "El permiso Modificar predeterminado NTFS que se puede asignar a una carpeta, permite cambiar los ficheros y las carpetas, crear e eliminar ficheros y carpetas nuevas. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Aunque en la práctica \"Modificar\" abarca muchas acciones, en la teoría estricta de Windows (y de este test), el permiso para \"crear\" ficheros y carpetas nuevas recae técnicamente sobre el permiso de \"Escritura\" (Write)."
            },
            {
                question: "En Windows después de configurar los permisos en una carpeta principal, los nuevos archivos y subcarpetas que se crean en la carpeta heredan estos permisos. Si no deseamos que los archivos y las carpetas hereden los permisos, activaremos la opción de Sólo esta carpeta en el cuadro Aplicar al configurar permisos especiales para la carpeta principal. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Cambiar el menú desplegable \"Aplicar a\" hacia \"Sólo esta carpeta\" restringe los permisos exclusivamente al contenedor padre, evitando la herencia."
            },
            {
                question: "Indicar qué permisos especiales en ficheros o carpetas tiene un usuario en un recurso compartido de un dominio que se permite Modificar. (Selección múltiple)",
                options: [
                    "Eliminar subcarpetas e archivos.",
                    "Leer permisos.",
                    "Crear carpetas / Anexar datos.",
                    "Recorre la carpeta o ejecutar archivo."
                ],
                correct: [1, 2, 3],
                explanation: "El permiso especial \"Eliminar subcarpetas e archivos\" es exclusivo del permiso general de Control Total. \"Modificar\" permite borrar archivos individuales pero no árboles enteros."
            },
            {
                question: "Ejecutando en Linux la orden smbclient -L 192.168.1.23 podemos hacer un listado de los recursos que dispone el ordenador que tiene esa dirección IP dentro de la red. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "El parámetro -L (Listar) indica al cliente SMB que pregunte al servidor remoto por todos los recursos disponibles y públicos."
            },
            {
                question: "Gracias a las reglas de directiva de grupo podemos controlar los entornos de trabajo de los usuarios del dominio. Indica de las siguientes actuaciones cuáles pueden ser controlados por directivas en el sistema Windows: (Selección múltiple)",
                options: [
                    "Limitar las funcionalidades de los equipos.",
                    "Activa o no los scripts que se ejecutan al inicio y final de sesión de equipo o usuario.",
                    "Cambiar la actuación de los permisos de usuarios y grupos.",
                    "Bloquear cuentas."
                ],
                correct: [0, 1, 2, 3],
                explanation: "Las GPO de Windows Server permiten gestionar todos estos aspectos: scripts, políticas de bloqueo, privilegios y restricciones."
            },
            {
                question: "Cuando los permisos Linux se contradicen con los permisos samba, el permiso efectivo es el más restrictivo de los dos. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "En la interoperabilidad entre Linux y Samba, siempre prevalece la restricción más fuerte para garantizar la seguridad."
            },
            {
                question: "¿Cuál será el formato de la orden cacls en Windows que permita al usuario Carlos escribir, e al usuario Ana el control total del fichero \\usuarios\\Alumnos\\Trabajos clase\\trab1.doc?",
                options: [
                    "cacls usuarios\\Alumnos\\Trabajos clase\\trab1.doc /g Carlos:w Ana:f",
                    "cacls “usuarios\\Alumnos\\Trabajos clase\\trab1.doc” /g Carlos Ana:f.",
                    "cacls “usuarios\\Alumnos\\Trabajos clase\\trab1.doc” /g Carlos:f Ana:w",
                    "cacls “usuarios\\Alumnos\\Trabajos clase\\trab1.doc” /g Carlos:w Ana:f"
                ],
                correct: 3,
                explanation: "Si la ruta tiene espacios, debe ir entre comillas. El parámetro /g usa la sintaxis Usuario:Permiso (w para escribir, f para control total)."
            },
            {
                question: "¿Qué permisos tiene la carpeta pública predeterminada de Windows?",
                options: [
                    "Permite solamente el acceso de lectura a todos los usuarios.",
                    "solamente leer e escribir a todos los usuarios.",
                    "Todos los usuarios tienen todos los permisos.",
                    "No se asigna ningún permiso hasta que no lo realice el administrador."
                ],
                correct: 0,
                explanation: "Por motivos de seguridad, cuando la carpeta de \"Acceso público\" se comparte en red, Windows asigna por defecto permisos de solo lectura al grupo \"Todos\"."
            },
            {
                question: "¿Cómo podemos hacer para que el archivo “material.txt” tenga los permisos de de lectura e ejecución para todos los usuarios en Linux?",
                options: [
                    "sudo chmod 600 material.txt",
                    "sudo ugo+x, a-r material.txt",
                    "sudo a-rx material.txt",
                    "sudo chmod 555 material.txt"
                ],
                correct: 3,
                explanation: "En octal, 5 (4 lectura + 1 ejecución) para usuario, grupo y otros (555) otorga estos permisos a todos."
            },
            {
                question: "En la ficha Permisos efectivos de Windows se muestra información de permisos existentes. La información presentada en esa página es de sólo lectura e no admite cambiar los permisos de un usuario con la activación o desactivación de las casillas de verificación de permisos. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "\"Permisos efectivos\" es una herramienta de auditoría, no un panel de configuración."
            },
            {
                question: "¿Qué nos indica la siguiente línea?: \"-rwsr-xr–x 1 root shadow 25640 dic 17 12:05 /usr/bin/passwd\"",
                options: [
                    "que los usuarios por seguridad no pueden escribir en el fichero /etc/shadow.",
                    "que cualquier usuarios pueda escribir en el fichero de claves/etc/shadow propiedad de root.",
                    "que cualquiera puede escribir e crear ficheros en el directorio passwd.",
                    "no indica nada ya que esos permisos no existen."
                ],
                correct: 1,
                explanation: "El bit SUID (s) permite que un usuario ejecute el comando con los privilegios del propietario (root), permitiendo modificar indirectamente /etc/shadow."
            },
            {
                question: "Cuando en Windows se utiliza la configuración Denegar e Permitir, los permisos activados en Permitir son acumulativos e reemplazan o priorizan a los de Denegar. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "En NTFS, la denegación explícita (Deny) siempre tiene prioridad sobre el permiso concedido (Allow)."
            },
            {
                question: "De manera predeterminada, por motivos de seguridad, sólo root puede utilizar los comandos smbmount e smbumount ¿Cuáles son las órdenes correctas a ejecutar para establecer permiso de SUID a dichos comandos? (Selección múltiple)",
                options: [
                    "chmod 1755 /usr/bin/smbmount",
                    "chmod 4755 /usr/bin/smbmount",
                    "chmod 4755 /usr/bin/smbumount",
                    "chmod 1755 /usr/bin/smbumount"
                ],
                correct: [1, 2],
                explanation: "El bit SUID se establece con el valor 4 al inicio del modo octal (4755)."
            },
            {
                question: "Explica qué permisos asigna o desasigna el siguiente comando: “chmod go-rw,a+x agenda”",
                options: [
                    "Quita al grupo e a los otros el permiso de leer un archivo, e les da a todos los usuarios el permiso de ejecutarlo.",
                    "Permisos de lectura e escritura al dueño e permisos de lectura al resto.",
                    "Quita a los otros el permiso de leer un archivo, e les da a todos los usuarios el permiso de ejecutarlo telnet.",
                    "Todos los permisos al dueño e permisos de lectura e ejecución al resto."
                ],
                correct: 0,
                explanation: "go-rw retira lectura e escritura a grupo e otros; a+x añade ejecución a todos."
            },
            {
                question: "Las listas de control de acceso o ACLs en Windows no son exclusivas de particiones con formato NTFS. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Las ACLs avanzadas son una característica fundamental e específica de NTFS."
            }
        ],
        "Test 3": [
            {
                question: "¿Qué nos indica la siguiente línea?: \"-rwsr-xr–x 1 root shadow 25640 dic 17 12:05 /usr/bin/passwd\"",
                options: [
                    "que cualquier usuarios pueda escribir en el fichero de claves/etc/shadow propiedad de root.",
                    "que los usuarios por seguridad no pueden escribir en el fichero /etc/shadow.",
                    "que cualquiera puede escribir e crear ficheros en el directorio passwd.",
                    "no indica nada ya que esos permisos no existen."
                ],
                correct: 0,
                explanation: "El bit SUID (s) permite que un usuario ejecute el comando con privilegios de root para cambiar su contraseña en /etc/shadow."
            },
            {
                question: "En Windows, si las casillas de verificación del cuadro Permisos para usuario o grupo están sombreadas, o si el botón Quitar no está disponible, el archivo o la carpeta tiene permisos heredados de la carpeta principal. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "El sombreado gris indica que los permisos fluyen desde una carpeta superior."
            },
            {
                question: "¿Cómo podemos hacer para que el archivo “material.txt” tenga los permisos de de lectura e ejecución para todos los usuarios en Linux?",
                options: [
                    "sudo chmod 600 material.txt",
                    "sudo ugo+x, a-r material.txt",
                    "sudo chmod 555 material.txt",
                    "sudo a-rx material.txt"
                ],
                correct: 2,
                explanation: "555 asigna lectura (4) e ejecución (1) a Usuario, Grupo e Otros."
            },
            {
                question: "Gracias a las reglas de directiva de grupo podemos controlar los entornos de trabajo de los usuarios del dominio. Indica de las siguientes actuaciones cuáles pueden ser controlados por directivas en el sistema Windows: (Selección múltiple)",
                options: [
                    "Limitar las funcionalidades de los equipos.",
                    "Activa o no los scripts que se ejecutan al inicio e final de sesión de equipo o usuario.",
                    "Cambiar la actuación de los permisos de usuarios y grupos.",
                    "Bloquear cuentas."
                ],
                correct: [0, 1, 2, 3],
                explanation: "Las GPO permiten gestionar scripts, bloqueos de cuenta, privilegios e restricciones del sistema."
            },
            {
                question: "Indicar qué permisos especiales en ficheros o carpetas tiene un usuario en un recurso compartido de un dominio que se permite Modificar. (Selección múltiple)",
                options: [
                    "Crear carpetas / Anexar datos.",
                    "Leer permisos.",
                    "Recorre la carpeta o ejecutar archivo.",
                    "Eliminar subcarpetas e archivos."
                ],
                correct: [0, 1, 2],
                explanation: "Modificar permite borrar archivos individuales pero no el permiso especial de 'Eliminar subcarpetas e archivos' de Control Total."
            },
            {
                question: "¿Cuál será el formato de la orden cacls en Windows que permita al usuario Carlos escribir, e al usuario Ana el control total del fichero \\usuarios\\Alumnos\\Trabajos clase\\trab1.doc?",
                options: [
                    "cacls usuarios\\Alumnos\\Trabajos clase\\trab1.doc /g Carlos:w Ana:f",
                    "cacls “usuarios\\Alumnos\\Trabajos clase\\trab1.doc” /g Carlos Ana:f.",
                    "cacls “usuarios\\Alumnos\\Trabajos clase\\trab1.doc” /g Carlos:w Ana:f",
                    "cacls “usuarios\\Alumnos\\Trabajos clase\\trab1.doc” /g Carlos:f Ana:w"
                ],
                correct: 2,
                explanation: "Obligatorio usar comillas si hay espacios. /g concede permisos (w: escribir, f: full control)."
            },
            {
                question: "En la ficha Permisos efectivos de Windows se muestra información de permisos existentes. La información presentada en esa página es de sólo lectura e no admite cambiar los permisos de un usuario con la activación o desactivación de las casillas de verificación de permisos. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Es una herramienta de cálculo e auditoría, no de edición directa."
            },
            {
                question: "¿Cuál será la respuesta correcta?, si tenemos compartida una carpeta llamada “Distancia” con permisos de escritura para el grupo “Alumnos”, todos los usuarios que pertenezcan al grupo alumnos podrán realizar cambios en la carpeta, pero si dentro de dicha carpeta existe otra llamada “Justificantes” sobre la cual no tiene permiso para entrar el grupo Alumnos.",
                options: [
                    "Los alumnos no pueden ver el contenido de Justificantes e Distancia.",
                    "Los alumnos pueden ver el contenido de Justificantes e Distancia.",
                    "Los alumnos solamente pueden ver el contenido de la carpeta Justificantes.",
                    "Ningún alumno podrá ver el contenido de Justificantes."
                ],
                correct: 3,
                explanation: "Si se deniega el acceso a la subcarpeta, esta es inaccesible aunque se tenga permiso en la carpeta padre."
            },
            {
                question: "Explica qué permisos asigna o desasigna el siguiente comando: “chmod go-rw,a+x agenda”",
                options: [
                    "Permisos de lectura e escritura al dueño e permisos de lectura al resto.",
                    "Quita al grupo e a los otros el permiso de leer un archivo, e les da a todos los usuarios el permiso de ejecutarlo.",
                    "Quita a los otros el permiso de leer un archivo, e les da a todos los usuarios el permiso de ejecutarlo telnet.",
                    "Todos los permisos al dueño e permisos de lectura e ejecución al resto."
                ],
                correct: 1,
                explanation: "go-rw quita lectura/escritura a grupo/otros; a+x da ejecución a todos."
            },
            {
                question: "¿Qué permisos tiene la carpeta pública predeterminada de Windows?",
                options: [
                    "solamente leer e escribir a todos los usuarios.",
                    "Todos los usuarios tienen todos los permisos.",
                    "Permite solamente el acceso de lectura a todos los usuarios.",
                    "No se asigna ningún permiso hasta que no lo realice el administrador."
                ],
                correct: 0,
                explanation: "La carpeta 'Acceso público' (Public) permite leer e escribir al grupo Todos para facilitar el intercambio local."
            },
            {
                question: "Con la orden “chmod = ejercicios.txt” damos todos los privilegios a todos los usuarios del archivo “ejercicios.txt”. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "La orden es incompleta e daría error. Se requiere chmod 777 o chmod a=rwx."
            },
            {
                question: "¿Qué línea deberemos de añadir el fichero “/etc/exports” de un servidor NFS de Linux para compartir la carpeta “/home/carlos” con los permisos de sólo lectura para todos?",
                options: [
                    "/home/carlos *(ro)",
                    "/home/carlos * +ro",
                    "/home/carlos Todos(ro)",
                    "Todas son correctas."
                ],
                correct: 0,
                explanation: "El comodín * representa a todos los hosts e (ro) es read-only. No debe haber espacio antes del paréntesis."
            },
            {
                question: "El permiso Modificar predeterminado NTFS que se puede asignar a una carpeta, permite cambiar los ficheros y las carpetas, crear e eliminar ficheros y carpetas nuevas. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "En la teoría de permisos NTFS, la acción de 'crear' recae específicamente sobre el permiso de 'Escritura'."
            },
            {
                question: "Ejecutando en Linux la orden smbclient -L 192.168.1.23 podemos hacer un listado de los recursos que dispone el ordenador que tiene esa dirección IP dentro de la red. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "-L (Listar) indica al cliente SMB que pida la lista de recursos compartidos."
            },
            {
                question: "En Windows después de configurar los permisos en una carpeta principal, los nuevos archivos y subcarpetas que se crean en la carpeta heredan estos permisos. Si no deseamos que los archivos y las carpetas hereden los permisos, activaremos la opción de Sólo esta carpeta en el cuadro Aplicar al configurar permisos especiales para la carpeta principal. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Restringir el ámbito a 'Sólo esta carpeta' detiene la propagación de permisos por herencia."
            }
        ]
    },
    "Tema 8: Supervisión del rendimiento del sistema": {
        "Test 1": [
            {
                question: "¿Qué operaciones sobre registros y alertas puede realizar un usuario estándar del sistema?",
                options: [
                    "Puede ejecutarlos pero no crearlos.",
                    "Puede crearlos pero no ejecutarlos.",
                    "Puede crearlos y ejecutarlos.",
                    "Ninguna. No podrá usar esos elementos."
                ],
                correct: 3,
                explanation: "Los usuarios estándar carecen de privilegios para gestionar o utilizar las herramientas de seguimiento y alertas de rendimiento del sistema."
            },
            {
                question: "¿Qué elemento proporciona información sobre el rendimiento de uno o varios contadores siempre que se produzca un determinado evento?",
                options: [
                    "El registro de eventos.",
                    "Las alertas.",
                    "El registro de seguimiento.",
                    "El registro de contador."
                ],
                correct: 2,
                explanation: "El registro de seguimiento (Trace Log) recopila datos detallados cada vez que ocurre un evento específico del sistema o de una aplicación."
            },
            {
                question: "¿Qué operaciones puedo realizar sobre procesos en el Administrador de tareas? (Selección múltiple)",
                options: [
                    "Cambiar su prioridad.",
                    "Finalizar todo su árbol de procesos.",
                    "Finalizarlo.",
                    "Modificar el propietario."
                ],
                correct: [0, 1, 2],
                explanation: "El Administrador de tareas permite gestionar procesos activos, pero no modificar su propietario original directamente desde esta interfaz."
            },
            {
                question: "¿Para qué se utiliza un evento operativo?",
                options: [
                    "Para registrar operaciones de todos los programas del equipo.",
                    "Para analizar el rendimiento de una operación del sistema.",
                    "Para registrar operaciones de los programas a los que se asocie.",
                    "Para analizar un problema o una condición en el sistema."
                ],
                correct: 3,
                explanation: "Los eventos operativos están diseñados para ayudar a los administradores a identificar y diagnosticar anomalías o estados específicos del sistema."
            },
            {
                question: "¿Para qué se utilizan los diagramas de Kiviat?",
                options: [
                    "Para reducir el coste del estudio del rendimiento.",
                    "Para detectar y reparar fallos en la carga del sistema.",
                    "Para aumentar la potencia del procesador.",
                    "Para identificar posibles cuellos de botella."
                ],
                correct: 3,
                explanation: "Como representación radial, el diagrama de Kiviat ayuda a visualizar de forma rápida qué recurso (CPU, E/S, RAM) está limitando el sistema."
            },
            {
                question: "¿Qué se puede hacer con un conjunto recopilador de datos? (Selección múltiple)",
                options: [
                    "Configurarlo para que se comporte como una alerta.",
                    "Utilizarlo como un supervisor de rendimiento de aplicaciones Linux.",
                    "Asociarlo con otros conjuntos recopiladores de datos.",
                    "Programarlo para que ejecute un script de optimización."
                ],
                correct: [0],
                explanation: "En Windows, un recopilador de datos puede configurarse para disparar una acción o aviso cuando se cumplan ciertos umbrales (comportamiento de alerta)."
            },
            {
                question: "Señala los elementos que pueden formar parte de un conjunto recopilador de datos: (Selección múltiple)",
                options: [
                    "Datos de seguimiento de eventos.",
                    "Información de configuración.",
                    "Registro de aplicaciones y servicios.",
                    "Contador de rendimiento."
                ],
                correct: [0, 1, 3],
                explanation: "Un conjunto recopilador puede agrupar contadores, seguimientos y el estado de la configuración del sistema para un análisis integral."
            },
            {
                question: "¿Qué se puede hacer con el historial de confiabilidad? (Selección múltiple)",
                options: [
                    "Guardarlo para estudiarlo posteriormente.",
                    "Exportarlo a XML.",
                    "Interpretarlo con el monitor de rendimiento.",
                    "Exportarlo a XLS."
                ],
                correct: [0, 1],
                explanation: "Windows permite ver el historial de errores y exportarlo a formato XML para auditoría o análisis externo."
            },
            {
                question: "¿Cómo se puede acceder al Monitor de confiabilidad?",
                options: [
                    "Sólo de forma remota.",
                    "Sólo físicamente.",
                    "Sólo es posible acceder si el equipo no forma parte de una red.",
                    "Físicamente o de forma remota."
                ],
                correct: 3,
                explanation: "Como la mayoría de herramientas de administración de Windows, se puede consultar localmente o a través de la red."
            },
            {
                question: "¿Qué herramienta de Sysstat recoge información del rendimiento de forma más completa?",
                options: [
                    "uidstat.",
                    "sar.",
                    "mpstat.",
                    "oistat."
                ],
                correct: 1,
                explanation: "SAR (System Activity Reporter) es la herramienta más versátil de la suite Sysstat para monitorizar múltiples subsistemas en Linux."
            },
            {
                question: "¿Qué combinación de teclas abre directamente el Administrador de tareas?",
                options: [
                    "Ctrl+Alt+Intro.",
                    "Ctrl+Mayúsc+Esc.",
                    "Ctrl+Alt+Supr.",
                    "Alt+F4."
                ],
                correct: 1,
                explanation: "Esta combinación de teclas lanza la aplicación directa del Administrador de tareas sin pasar por el menú de seguridad de Windows."
            },
            {
                question: "¿Cómo se denomina al conjunto de reglas que se aplica a uno o más registros para obtener sólo aquellos que nos interese? (Selección múltiple)",
                options: [
                    "Una vista personalizada.",
                    "Un filtro de eventos.",
                    "Un conjunto recopilador de datos.",
                    "Un contador de rendimiento."
                ],
                correct: [0, 1],
                explanation: "Tanto las vistas personalizadas como los filtros nos permiten aislar los eventos importantes entre miles de registros."
            },
            {
                question: "¿Qué busca la optimización del sistema?",
                options: [
                    "Mínimo rendimiento con el mayor número de recursos posibles.",
                    "Máximo rendimiento con el menor número de recursos posibles.",
                    "Mínimo rendimiento con el menor número de recursos posibles.",
                    "Máximo rendimiento con el mayor número de recursos posibles."
                ],
                correct: 1,
                explanation: "La eficiencia consiste en exprimir las capacidades de cómputo minimizando el uso innecesario de recursos o hardware."
            },
            {
                question: "¿Cuál de los siguientes eventos es más grave?",
                options: [
                    "Evento crítico.",
                    "Error.",
                    "Evento informativo.",
                    "Advertencia."
                ],
                correct: 0,
                explanation: "Un evento crítico indica un fallo sistémico grave que suele requerir atención inmediata para restablecer el servicio."
            },
            {
                question: "¿Cuándo emite un informe el Monitor de rendimiento?",
                options: [
                    "Cuando ha encontrado fallos en la recogida de datos.",
                    "Siempre que se produzca una determinada condición.",
                    "A la vez que va recopilando los resultados.",
                    "Una vez ha recopilado los resultados."
                ],
                correct: 3,
                explanation: "El informe de diagnóstico o rendimiento se genera como un resumen final tras el periodo de observación y captura de datos."
            }
        ],
        "Test 2": [
            {
                question: "¿Qué significa que un equipo tenga como índice de estabilidad 1?",
                options: [
                    "Que es un equipo muy estable.",
                    "Que es un equipo que no dará fallos en un futuro.",
                    "Que es un equipo muy poco estable.",
                    "Que está totalmente optimizado."
                ],
                correct: 2,
                explanation: "En la escala de confiabilidad de Windows (1-10), el valor 1 representa el nivel más bajo de estabilidad."
            },
            {
                question: "¿Qué hay que escribir en /etc/init.d/sysstat para poder recoger datos de forma periódica y guardarlos en ficheros históricos?",
                options: [
                    "DISABLED=false.",
                    "ENABLED=false.",
                    "DISABLED=true.",
                    "ENABLED=true."
                ],
                correct: 3,
                explanation: "Habilitar (ENABLED=true) el demonio sysstat es necesario para activar la recolección automática de datos históricos en Linux."
            },
            {
                question: "¿Qué monitorizo ejecutando en Ubuntu la orden time?",
                options: [
                    "Nada. Esa orden sirve para mostrar o cambiar la hora.",
                    "El tiempo que emplea el equipo en resolver direcciones IP.",
                    "El tiempo que lleva el usuario la sesión abierta.",
                    "El tiempo de ejecución de un programa."
                ],
                correct: 3,
                explanation: "El comando 'time' mide los recursos y el tiempo real, de usuario y de sistema que consume un proceso al ejecutarse."
            },
            {
                question: "¿Qué orden muestra los usuarios conectados al sistema?",
                options: [
                    "users show.",
                    "users.",
                    "who.",
                    "free."
                ],
                correct: 2,
                explanation: "El comando 'who' lista los usuarios autenticados actualmente y desde qué terminales han accedido."
            },
            {
                question: "¿Cuál de las pestañas del Monitor del sistema de Ubuntu proporciona información a través de gráficos dinámicos?",
                options: [
                    "Recursos.",
                    "Sistemas de archivos.",
                    "Procesos.",
                    "Sistema."
                ],
                correct: 0,
                explanation: "La pestaña 'Recursos' muestra gráficos en tiempo real del uso de CPU, red y memoria RAM."
            },
            {
                question: "¿A qué orden equivale el interfaz gráfico del Monitor del sistema de Ubuntu?",
                options: [
                    "systray.",
                    "ps.",
                    "system-monitor.",
                    "top."
                ],
                correct: 3,
                explanation: "El comando 'top' es la versión en terminal para monitorizar procesos en tiempo real, equivalente a la vista gráfica."
            },
            {
                question: "¿Qué monitorizo ejecutando en Ubuntu la orden vmstat?",
                options: [
                    "La actividad de la memoria.",
                    "El estado actual de la máquina virtual.",
                    "La carga del sistema.",
                    "El ancho de banda disponible en la conexión de red."
                ],
                correct: 0,
                explanation: "Virtual Memory Statistics (vmstat) informa sobre procesos, memoria, paginación, E/S de bloques e interrupciones de CPU."
            },
            {
                question: "Señala las afirmaciones CORRECTAS: (Selección múltiple)",
                options: [
                    "Existen objetos que están presentes en todos los sistemas.",
                    "El proceso tiene un comportamiento similar a una cola.",
                    "Cada proceso lleva asociado un contador que cuantifica su comportamiento.",
                    "Los subprocesos sólo son posibles en equipos con procesadores de más de un núcleo."
                ],
                correct: [0],
                explanation: "En la arquitectura de monitorización de Windows, ciertos objetos (como Procesador o Memoria) son universales a cualquier instalación."
            },
            {
                question: "¿Cómo se llama la herramienta gráfica con la que se puede interpretar información recopilada en ficheros de rendimiento?",
                options: [
                    "graf.",
                    "isag.",
                    "sadf.",
                    "stat."
                ],
                correct: 1,
                explanation: "ISAG (Interactive System Activity Grapher) es una utilidad gráfica clásica de la suite sysstat en Linux."
            },
            {
                question: "¿Qué orden se utiliza para abrir el Monitor de rendimiento?",
                options: [
                    "system-monitor.",
                    "monrend.",
                    "perfmon.",
                    "monmgr."
                ],
                correct: 2,
                explanation: "PERFMON (Performance Monitor) es el comando ejecutable para lanzar la consola de monitorización de Windows."
            },
            {
                question: "Señala las afirmaciones CORRECTAS relacionadas con suscripciones: (Selección múltiple)",
                options: [
                    "Permite recopilar eventos locales pero no globales.",
                    "La información recopilada la trata como un único evento.",
                    "Una suscripción activa recibe información en tiempo real.",
                    "La suscripción sólo es posible con equipos en red."
                ],
                correct: [2],
                explanation: "Las suscripciones a eventos permiten que un servidor centralizado reciba alertas de otros equipos de forma instantánea."
            },
            {
                question: "¿Cuántas líneas me genera la ejecución de la sentencia mpstat 1 5?",
                options: [
                    "Cinco líneas en intervalos de un minuto.",
                    "Cinco líneas en intervalos de un segundo.",
                    "Una línea en intervalos de cinco minutos.",
                    "Una línea en intervalos de cinco segundos."
                ],
                correct: 1,
                explanation: "El parámetro 1 indica el intervalo (segundos) y el 5 indica el número de capturas o líneas de salida."
            },
            {
                question: "¿Cuál de las siguientes herramientas NO forma parte de Sysstat?",
                options: [
                    "sar.",
                    "oistat.",
                    "uidstat.",
                    "mpstat."
                ],
                correct: 2,
                explanation: "uidstat no es una utilidad estándar de la suite Sysstat de Linux."
            },
            {
                question: "Señala los datos que pueden observarse en la pestaña Sistemas de archivos de Ubuntu: (Selección múltiple)",
                options: [
                    "El tipo de sistema operativo (x86/x64).",
                    "El nombre del dispositivo.",
                    "El tipo de sistema de archivos.",
                    "El espacio de disco disponible."
                ],
                correct: [1, 2, 3],
                explanation: "Muestra la tabla de particiones activas, su punto de montaje (/), tipo (ext4, ntfs) y el espacio libre restante."
            },
            {
                question: "¿Cuál de los siguientes elementos no es un parámetro que se muestre en la pestaña Rendimiento del Administrador de tareas?",
                options: [
                    "Procesos.",
                    "CPU.",
                    "Disco.",
                    "Memoria."
                ],
                correct: 0,
                explanation: "En el Administrador de tareas de Windows, 'Procesos' es su propia pestaña independiente, no un recurso dentro de la pestaña 'Rendimiento'."
            }
        ],
        "Test 3": [
            {
                question: "¿Qué elemento proporciona información sobre el rendimiento de uno o varios contadores siempre que se produzca un determinado evento?",
                options: [
                    "El registro de eventos.",
                    "Las alertas.",
                    "El registro de contador.",
                    "El registro de seguimiento."
                ],
                correct: 3,
                explanation: "El registro de seguimiento nos da la visión temporal del rendimiento ligada a eventos específicos."
            },
            {
                question: "¿Cuál de los siguientes elementos no es un parámetro que se muestre en la pestaña Rendimiento del Administrador de tareas?",
                options: [
                    "Memoria.",
                    "Disco.",
                    "Procesos.",
                    "CPU."
                ],
                correct: 2,
                explanation: "Los procesos tienen su propio panel; la pestaña Rendimiento se centra en recursos de hardware (CPU, RAM, Discos, Red)."
            },
            {
                question: "¿Qué se puede hacer con un conjunto recopilador de datos? (Selección múltiple)",
                options: [
                    "Asociarlo con otros conjuntos recopiladores de datos.",
                    "Configurarlo para que se comporte como una alerta.",
                    "Programarlo para que ejecute un script de optimización.",
                    "Utilizarlo como un supervisor de rendimiento de aplicaciones Linux."
                ],
                correct: [1],
                explanation: "Se puede programar una acción automática para que se active cuando un recopilador de datos alcance un valor crítico."
            },
            {
                question: "¿Cuál de los siguientes eventos es más grave?",
                options: [
                    "Advertencia.",
                    "Error.",
                    "Evento crítico.",
                    "Evento informativo."
                ],
                correct: 2,
                explanation: "Los eventos críticos señalan una emergencia que ha detenido alguna función vital del sistema operativo."
            },
            {
                question: "¿Qué orden se utiliza para abrir el Monitor de rendimiento?",
                options: [
                    "system-monitor.",
                    "monrend.",
                    "monmgr.",
                    "perfmon."
                ],
                correct: 3,
                explanation: "perfmon.msc es la consola maestra de rendimiento en todos los sistemas Windows modernos."
            },
            {
                question: "¿A qué orden equivale el interfaz gráfico del Monitor del sistema de Ubuntu?",
                options: [
                    "ps.",
                    "top.",
                    "systray.",
                    "system-monitor."
                ],
                correct: 1,
                explanation: "El comando 'top' ofrece una vista interactiva de procesos y recursos en modo texto."
            },
            {
                question: "¿Cuál de las pestañas del Monitor del sistema de Ubuntu proporciona información a través de gráficos dinámicos?",
                options: [
                    "Sistema.",
                    "Recursos.",
                    "Procesos.",
                    "Sistemas de archivos."
                ],
                correct: 1,
                explanation: "Toda la telemetría visual de consumo se centraliza en la pestaña 'Recursos'."
            },
            {
                question: "¿Qué combinación de teclas abre directamente el Administrador de tareas?",
                options: [
                    "Alt+F4.",
                    "Ctrl+Alt+Intro.",
                    "Ctrl+Mayúsc+Esc.",
                    "Ctrl+Alt+Supr."
                ],
                correct: 2,
                explanation: "Recordar esta combinación ahorra tiempo ya que no requiere un segundo paso de selección como Ctrl+Alt+Supr."
            },
            {
                question: "¿Qué significa que un equipo tenga como índice de estabilidad 1?",
                options: [
                    "Que es un equipo que no dará fallos en un futuro.",
                    "Que está totalmente optimizado.",
                    "Que es un equipo muy poco estable.",
                    "Que es un equipo muy estable."
                ],
                correct: 2,
                explanation: "Un índice bajo sugiere que el sistema ha sufrido cuelgues o errores graves de forma frecuente."
            },
            {
                question: "¿Cuántas líneas me genera la ejecución de la sentencia mpstat 1 5?",
                options: [
                    "Cinco líneas en intervalos de un segundo.",
                    "Cinco líneas en intervalos de un minuto.",
                    "Una línea en intervalos de cinco segundos.",
                    "Una línea en intervalos de cinco minutos."
                ],
                correct: 0,
                explanation: "Segundos=1, Conteo=5. Generará una actualización por segundo hasta llegar a cinco."
            },
            {
                question: "¿Qué operaciones sobre registros y alertas puede realizar un usuario estándar del sistema?",
                options: [
                    "Puede crearlos y ejecutarlos.",
                    "Ninguna. No podrá usar esos elementos.",
                    "Puede crearlos pero no ejecutarlos.",
                    "Puede ejecutarlos pero no crearlos."
                ],
                correct: 1,
                explanation: "Por seguridad, la gestión del rendimiento y las alertas está reservada al administrador o usuarios con privilegios elevados."
            },
            {
                question: "¿Qué monitorizo ejecutando en Ubuntu la orden time?",
                options: [
                    "El tiempo que lleva el usuario la sesión abierta.",
                    "El tiempo que emplea el equipo en resolver direcciones IP.",
                    "Nada. Esa orden sirve para mostrar o cambiar la hora.",
                    "El tiempo de ejecución de un programa."
                ],
                correct: 3,
                explanation: "Permite analizar el rendimiento de un script o programa midiendo su duración."
            },
            {
                question: "¿Qué busca la optimización del sistema?",
                options: [
                    "Mínimo rendimiento con el mayor número de recursos posibles.",
                    "Mínimo rendimiento con el menor número de recursos posibles.",
                    "Máximo rendimiento con el menor número de recursos posibles.",
                    "Máximo rendimiento con el mayor número de recursos posibles."
                ],
                correct: 2,
                explanation: "Optimizar es conseguir el mejor resultado posible gestionando de forma inteligente el hardware limitado."
            },
            {
                question: "¿Cuándo emite un informe el Monitor de rendimiento?",
                options: [
                    "Una vez ha recopilado los resultados.",
                    "Cuando ha encontrado fallos en la recogida de datos.",
                    "Siempre que se produzca una determinada condición.",
                    "A la vez que va recopilando los resultados."
                ],
                correct: 0,
                explanation: "El informe es el producto final de un proceso de monitorización planificado."
            },
            {
                question: "Señala los elementos que pueden formar parte de un conjunto recopilador de datos: (Selección múltiple)",
                options: [
                    "Registro de aplicaciones y servicios.",
                    "Información de configuración.",
                    "Contador de rendimiento.",
                    "Datos de seguimiento de eventos."
                ],
                correct: [1, 2, 3],
                explanation: "Permite una monitorización granular combinando telemetría (contadores) y registros detallados (eventos)."
            }
        ]
    },
    "Tema 9: Directivas de Seguridad y Auditorías": {
        "Test 1": [
            {
                question: "¿Contra qué base de datos se hace el análisis de seguridad?",
                options: [
                    "secedit.sdb",
                    "security.sql",
                    "database.mdb",
                    "auditory.dat"
                ],
                correct: 0,
                explanation: "La herramienta de Configuración y análisis de seguridad de Windows utiliza una base de datos con extensión .sdb, habitualmente secedit.sdb, para comparar la configuración actual del sistema con una plantilla."
            },
            {
                question: "¿Qué es una plantilla de seguridad?",
                options: [
                    "Un archivo de texto que representa una configuración de seguridad.",
                    "Una configuración de una directiva de auditoría.",
                    "Un vínculo con uno o más GPOs de seguridad.",
                    "No existe. En tal caso es una plantilla administrativa."
                ],
                correct: 0,
                explanation: "Las plantillas de seguridad son archivos de texto sin formato con extensión .inf que contienen los parámetros de seguridad definidos."
            },
            {
                question: "¿A qué configuración afecta la directiva de bucle invertido?",
                options: [
                    "A la configuración de usuario.",
                    "A la configuración de equipo.",
                    "A la configuración de usuario y de equipo.",
                    "Ni a la configuración de usuario ni a la de equipo."
                ],
                correct: 0,
                explanation: "El procesamiento de bucle invertido o 'loopback processing' se utiliza para aplicar configuraciones de usuario específicas dependiendo del equipo en el que inicie sesión."
            },
            {
                question: "¿En qué ruta se almacenan todos los GPOs de inicio?",
                options: [
                    "En \\SERVIDOR\\sysvol\\GPOs.",
                    "En \\sysvol\\GPO.",
                    "En \\SERVIDOR\\sysvol\\StarterGPOs.",
                    "En \\sysvol\\StarterGPO."
                ],
                correct: 2,
                explanation: "Los GPOs de inicio o 'Starter GPOs' se guardan en la carpeta de red compartida SYSVOL, dentro de la subcarpeta StarterGPOs."
            },
            {
                question: "¿Cuándo se fuerza un GPO de forma predeterminada?",
                options: [
                    "Nunca.",
                    "Siempre.",
                    "Cuando el GPO sea de inicio.",
                    "Cuando se quiere variar la prioridad de los GPOs existentes."
                ],
                correct: 0,
                explanation: "Por defecto, los GPOs no están configurados como 'Forzados'. El administrador debe habilitar explícitamente esta opción si lo desea."
            },
            {
                question: "¿Cuántos filtros WMI puede tener un GPO?",
                options: [
                    "Uno.",
                    "Dos.",
                    "Tantos como GPOs haya.",
                    "No hay límite."
                ],
                correct: 0,
                explanation: "Un Objeto de Directiva de Grupo (GPO) solo puede tener vinculado un único filtro WMI al mismo tiempo."
            },
            {
                question: "¿Cuál de las siguientes operaciones NO es posible con un GPO de inicio?",
                options: [
                    "Importarlo.",
                    "Exportarlo.",
                    "Eliminar un GPO a partir de él.",
                    "Generar un GPO a partir de él."
                ],
                correct: 2,
                explanation: "Los GPOs de inicio sirven como plantillas base para crear (generar), exportar o importar nuevas configuraciones, pero no tienen la función de eliminar otros GPOs."
            },
            {
                question: "¿En qué circunstancia se puede auditar el acceso a archivos y carpetas (en entornos Windows)?",
                options: [
                    "Cuando el GPO de acceso al objeto esté disponible.",
                    "Siempre.",
                    "Nunca.",
                    "Cuando el sistema de archivos sea NTFS."
                ],
                correct: 3,
                explanation: "Para poder establecer y auditar permisos granulares sobre archivos y carpetas, es un requisito estricto que la partición esté formateada con el sistema de archivos NTFS."
            },
            {
                question: "¿A qué afectan directamente los GPOs?",
                options: [
                    "Al comportamiento de usuarios y de equipos.",
                    "Al comportamiento de usuarios exclusivamente.",
                    "Al comportamiento de equipos exclusivamente.",
                    "Los GPOs no afectan al comportamiento de nada."
                ],
                correct: 0,
                explanation: "Las directivas de grupo se dividen en dos secciones principales: Configuración de equipo y Configuración de usuario."
            },
            {
                question: "¿Cuántos GPOs pueden utilizar un mismo filtro WMI?",
                options: [
                    "Uno.",
                    "Dos.",
                    "Tantos como GPOs haya.",
                    "Tantos como filtros haya."
                ],
                correct: 2,
                explanation: "Aunque un GPO solo puede tener un filtro WMI asignado, ese mismo filtro WMI puede ser reutilizado y vinculado a multitud de GPOs diferentes."
            },
            {
                question: "¿Cuál de las siguientes directivas se proporciona de forma automática en un equipo Windows Server 2019 que es controlador de dominio?",
                options: [
                    "Default Domain Controller Policy.",
                    "Default Server Controller Policy.",
                    "Domain Controller Policy.",
                    "Default Domain Policy."
                ],
                correct: 0,
                explanation: "Al promover un servidor a Controlador de Dominio, se crean automáticamente dos directivas principales, siendo la específica para los controladores la 'Default Domain Controllers Policy'."
            },
            {
                question: "¿Qué sucederá si una directiva de auditoría no está permitida?",
                options: [
                    "No puede darse este caso porque prevalece sobre cualquier directiva.",
                    "Que se informará al administrador para que decida si la autoriza.",
                    "Que los GPOs vinculados a esta directiva no funcionarán.",
                    "Que se omitirá sin más."
                ],
                correct: 3,
                explanation: "Si una directiva entra en conflicto, está bloqueada o no está permitida por herencia y no está forzada, el sistema simplemente la ignora o la omite sin aplicar su configuración."
            }
        ],
        "Test 2": [
            {
                question: "¿Puede hacerse un modelado de GPO sobre cualquier equipo?",
                options: [
                    "Sí, siempre que sea Windows.",
                    "No. Debe ser un equipo Windows Server.",
                    "No. Debe ser un equipo Windows que además sea controlador de dominio.",
                    "No. Debe ser un equipo controlador de dominio."
                ],
                correct: 2,
                explanation: "El modelado de directivas de grupo es una función de simulación que requiere las herramientas presentes en un Controlador de Dominio de Active Directory."
            },
            {
                question: "Si el vínculo de un GPO está forzado, entonces…",
                options: [
                    "Este GPO tendrá prioridad sobre cualquier otro GPO.",
                    "El vínculo se hará automáticamente al crear el GPO.",
                    "No preguntará cuando se vincule el GPO al contenedor.",
                    "El GPO no tendrá ningún efecto sobre el contenedor relacionado."
                ],
                correct: 0,
                explanation: "Un vínculo 'Enforced' (Forzado) asegura que la configuración del GPO prevalezca sobre cualquier directiva conflictiva, incluso aquellas con mayor prioridad jerárquica."
            },
            {
                question: "¿Cuál de los siguientes valores NO es posible para una directiva de auditoría?",
                options: [
                    "Advertencia.",
                    "Correcto.",
                    "Error.",
                    "Sin auditoría."
                ],
                correct: 0,
                explanation: "Las directivas de auditoría se configuran para registrar éxitos (Correcto), fallos (Error) o ambos, pero 'Advertencia' no es un nivel de configuración de auditoría."
            },
            {
                question: "¿A través de qué herramienta se observan los resultados de una auditoría?",
                options: [
                    "Visor de eventos.",
                    "Visor de auditoría.",
                    "Visor de registros.",
                    "Monitor de auditoría."
                ],
                correct: 0,
                explanation: "Todos los sucesos auditados por las directivas de seguridad se registran en el log de Seguridad del Visor de Eventos de Windows."
            },
            {
                question: "¿Cuál de las siguientes directivas tiene mayor prioridad?",
                options: [
                    "Directiva de usuario local.",
                    "Directiva de grupo del dominio.",
                    "Directiva de grupo de la unidad organizativa.",
                    "Directiva de equipo local."
                ],
                correct: 2,
                explanation: "En la jerarquía LSDOU (Local, Sitio, Dominio, OU), la Unidad Organizativa es la que tiene mayor prioridad y sus directivas sobreescriben a las anteriores."
            },
            {
                question: "¿Qué sucede cuando se deshabilita el vínculo de GPO?",
                options: [
                    "Que se impide la ejecución del GPO para el contenedor relacionado.",
                    "Que también se deshabilita el GPO.",
                    "Que también se deshabilita el contenedor.",
                    "Que se deshabilita tanto el contenedor como el GPO."
                ],
                correct: 0,
                explanation: "Deshabilitar el vínculo significa que el GPO sigue existiendo en el dominio, pero deja de aplicarse al sitio, dominio o OU específica."
            },
            {
                question: "¿Qué utilidad tiene una directiva de auditoría?",
                options: [
                    "Aplicar permisos sobre la tarjeta de audio.",
                    "Indicar qué GPOs están vinculados.",
                    "Especificar los contenedores que tienen vínculos de GPO.",
                    "Supervisar eventos relacionados con la seguridad del sistema."
                ],
                correct: 3,
                explanation: "La auditoría permite realizar un seguimiento de quién ha accedido a qué recursos y qué acciones ha realizado para fines de seguridad."
            },
            {
                question: "¿A qué elementos se vinculan los GPO?",
                options: [
                    "Usuario y grupo.",
                    "Usuario y equipo.",
                    "Sitio, dominio y unidad organizativa.",
                    "Usuario, grupo y unidad organizativa."
                ],
                correct: 1,
                explanation: "Las directivas de grupo afectan y se aplican técnicamente a Objetos de Usuario y Objetos de Equipo dentro de la estructura del directorio."
            },
            {
                question: "¿A qué nivel se realiza el análisis de seguridad con el complemento Configuración y análisis de seguridad?",
                options: [
                    "A nivel de dominio.",
                    "A nivel de unidad organizativa.",
                    "A nivel de sitio.",
                    "A nivel local."
                ],
                correct: 3,
                explanation: "Esta herramienta se utiliza para comparar la configuración de seguridad de la máquina local frente a una plantilla de referencia."
            },
            {
                question: "¿Para qué se utiliza el modelado de GPO?",
                options: [
                    "Para observar el efecto de un GPO antes de implantarlo.",
                    "Para observar la forma del GPO al vincularlo a los contenedores.",
                    "Para tener diversidad de GPO para vincular.",
                    "Para comprobar que un GPO se ha implantado adecuadamente."
                ],
                correct: 0,
                explanation: "El asistente de modelado permite simular qué directivas se aplicarían a un usuario o equipo en una ubicación determinada del AD."
            },
            {
                question: "Si se aplica la directiva de bucle invertido…",
                options: [
                    "La directiva de equipo tiene prioridad sobre la de usuario.",
                    "La directiva de usuario tiene prioridad sobre la de equipo.",
                    "Las directivas de usuario y de equipo tienen la misma prioridad.",
                    "Las directivas de usuario y de equipo se anulan."
                ],
                correct: 0,
                explanation: "En modo de bucle invertido, las directivas de usuario que se aplican son las vinculadas a la ubicación del equipo, no las del usuario, dándole el control al 'equipo'."
            },
            {
                question: "El vínculo de un GPO…",
                options: [
                    "Relaciona todos los permisos con su usuario.",
                    "Es único.",
                    "Es permanente.",
                    "Puede establecerse de forma automática."
                ],
                correct: 3,
                explanation: "Los vínculos pueden crearse manualmente o mediante scripts y herramientas de automatización de AD."
            }
        ],
        "Test 3": [
            {
                question: "¿Contra qué base de datos se hace el análisis de seguridad?",
                options: [
                    "secedit.sdb",
                    "security.sql",
                    "database.mdb",
                    "auditory.dat"
                ],
                correct: 0,
                explanation: "La base de datos secedit.sdb es el repositorio local donde se guardan los resultados de las comparaciones de seguridad."
            },
            {
                question: "¿Qué tipo de bucle invertido se aplicará cuando se persigue que todos los usuarios reciban una misma configuración en un determinado lugar?",
                options: [
                    "Un bucle invertido de combinación.",
                    "Un bucle invertido de sustitución.",
                    "Un bucle invertido de unificación.",
                    "Para esta situación no es recomendable aplicar un bucle invertido."
                ],
                correct: 1,
                explanation: "El modo 'Replace' (Sustitución) ignora las directivas de usuario habituales del usuario y las reemplaza por las que indique el equipo."
            },
            {
                question: "¿Desde dónde se establece la directiva de acceso a objetos?",
                options: [
                    "Desde el GPO correspondiente.",
                    "Desde el contenedor correspondiente.",
                    "Desde el GPO de inicio.",
                    "Desde el propio objeto."
                ],
                correct: 0,
                explanation: "Primero se debe habilitar la auditoría de acceso a objetos en un GPO y luego configurar la auditoría en el archivo/carpeta deseado."
            },
            {
                question: "¿Cuántos GPOs pueden utilizar un mismo filtro WMI?",
                options: [
                    "Uno.",
                    "Dos.",
                    "Tantos como GPOs haya.",
                    "Tantos como filtros haya."
                ],
                correct: 2,
                explanation: "Un filtro WMI es un componente independiente que se puede reutilizar en cualquier número de GPOs del dominio."
            },
            {
                question: "¿Qué utilidad tiene una directiva de auditoría?",
                options: [
                    "Aplicar permisos sobre la tarjeta de audio.",
                    "Indicar qué GPOs están vinculados.",
                    "Especificar los contenedores que tienen vínculos de GPO.",
                    "Supervisar eventos relacionados con la seguridad del sistema."
                ],
                correct: 3,
                explanation: "Es una herramienta fundamental para rastrear incidentes y cumplir con normativas de seguridad de la información."
            },
            {
                question: "¿Qué sucede cuando se deshabilita el vínculo de GPO?",
                options: [
                    "Que se impide la ejecución del GPO para el contenedor relacionado.",
                    "Que también se deshabilita el GPO.",
                    "Que también se deshabilita el contenedor.",
                    "Que se deshabilita tanto el contenedor como el GPO."
                ],
                correct: 0,
                explanation: "Al romper el vínculo (link), el GPO deja de tener efecto sobre los objetos que dependen de ese contenedor."
            },
            {
                question: "¿En qué circunstancia se puede auditar el acceso a archivos y carpetas (en entornos Windows)?",
                options: [
                    "Cuando el GPO de acceso al objeto esté disponible.",
                    "Siempre.",
                    "Nunca.",
                    "Cuando el sistema de archivos sea NTFS."
                ],
                correct: 3,
                explanation: "NTFS es el único sistema de archivos de Windows que soporta las listas de control de acceso (ACL) necesarias para la auditoría."
            },
            {
                question: "¿Para qué se utiliza el modelado de GPO?",
                options: [
                    "Para observar el efecto de un GPO antes de implantarlo.",
                    "Para observar la forma del GPO al vincularlo a los contenedores.",
                    "Para tener diversidad de GPO para vincular.",
                    "Para comprobar que un GPO se ha implantado adecuadamente."
                ],
                correct: 0,
                explanation: "Ayuda a predecir el 'Resultant Set of Policy' (RSoP) para usuarios en diferentes escenarios de red."
            },
            {
                question: "¿Cuál de las siguientes operaciones NO puede llevarse a cabo con GPOs?",
                options: [
                    "Cambiar su orden de aplicación respecto del orden por defecto.",
                    "Forzar su aplicación en caso de que otro GPO lo anule.",
                    "Bloquear la herencia del GPO.",
                    "Bloquear la modificación de permisos del GPO."
                ],
                correct: 3,
                explanation: "Los permisos sobre el objeto GPO se gestionan mediante Delegación en la consola ADUC o GPMC, y no existe una opción de 'bloqueo' dentro de la lógica del GPO."
            },
            {
                question: "¿Cuál de las siguientes directivas se aplica antes?",
                options: [
                    "Directiva de grupo del sitio.",
                    "Directiva de grupo de la unidad organizativa.",
                    "Directiva de grupo del dominio.",
                    "Directiva de grupo del controlador de dominio."
                ],
                correct: 0,
                explanation: "Siguiendo el orden LSDOU, la directiva de Sitio es la primera de AD en aplicarse (tras la Local)."
            },
            {
                question: "¿Cuál de estos sistemas operativos NO interpreta los filtros WMI?",
                options: [
                    "Windows 2000.",
                    "Windows XP.",
                    "Windows Vista.",
                    "Windows 7."
                ],
                correct: 0,
                explanation: "Los filtros WMI se introdujeron con Windows XP; los sistemas Windows 2000 simplemente los ignoran."
            },
            {
                question: "¿A través de qué herramienta se pueden observar los Resultados de GPO?",
                options: [
                    "No existe tal herramienta.",
                    "Visor de resultados.",
                    "Administración de directivas de grupo.",
                    "Visor de eventos."
                ],
                correct: 2,
                explanation: "La consola GPMC (Administración de directivas de grupo) incluye un asistente de Resultados de Directiva de Grupo para ver qué se está aplicando realmente."
            }
        ]
    },
    "Tema 10: Resolución de incidencias y soporte técnico": {
        "Test 1": [
            {
                question: "¿Cuál de los siguientes usuarios tiene más privilegios en el sistema?",
                options: [
                    "Administrador avanzado.",
                    "Administrador supervisor.",
                    "Administrador.",
                    "Usuario avanzado."
                ],
                correct: 2,
                explanation: "En la mayoría de los sistemas operativos, la cuenta 'Administrador' (o 'root' en sistemas basados en Unix) es la que posee los privilegios más altos de control total. Las opciones A y B no son roles estándar por defecto."
            },
            {
                question: "¿Qué tipo de aplicaciones pueden utilizarse para dar asistencia remota?",
                options: [
                    "Todas las aplicaciones que existen son gratuitas.",
                    "Cada empresa tiene una propia, ya que no hay oferta en el mercado.",
                    "Sólo existen aplicaciones de pago.",
                    "Existen aplicaciones gratuitas y de pago."
                ],
                correct: 3,
                explanation: "El mercado ofrece una amplia variedad de herramientas. Algunas son de código abierto o gratuitas para uso personal, mientras que otras requieren licencias comerciales."
            },
            {
                question: "¿Qué debe generarse cuando un usuario tiene un problema en el sistema?",
                options: [
                    "Un parte de incidencias.",
                    "Un mensaje de advertencia en el monitor del técnico.",
                    "Un mensaje de advertencia en el monitor del usuario.",
                    "Mensajes de advertencia en todos los equipos implicados."
                ],
                correct: 0,
                explanation: "También conocido como 'ticket', es el procedimiento estándar para registrar, clasificar y realizar el seguimiento de cualquier fallo o petición de un usuario."
            },
            {
                question: "¿Cuál de las siguientes afirmaciones sobre administración remota es CIERTA?",
                options: [
                    "Puede hacerse a través de Internet.",
                    "El técnico no puede saber con exactitud a cuántos equipo da soporte.",
                    "Puede usarse Internet, pero es necesaria la autorización del ISP.",
                    "El alcance máximo es la propia LAN."
                ],
                correct: 0,
                explanation: "La asistencia remota no se limita a la red local (LAN); mediante el uso de Internet y las herramientas adecuadas, un técnico puede acceder a equipos en cualquier parte del mundo."
            },
            {
                question: "¿Qué servicios deben estar activos para poder utilizar WDS?",
                options: [
                    "DFS y DHCP.",
                    "DNS y NFS.",
                    "DFS y DNS.",
                    "DHCP y DNS."
                ],
                correct: 3,
                explanation: "WDS (Windows Deployment Services) requiere que en la red estén configurados y funcionando los servicios de Active Directory, DHCP —para asignar IPs a los equipos que arrancan por red— y DNS."
            },
            {
                question: "El conjunto de medidas orientadas a alargar la vida del sistema corresponden al mantenimiento:",
                options: [
                    "Predictivo.",
                    "Correctivo.",
                    "Paliativo.",
                    "Preventivo."
                ],
                correct: 3,
                explanation: "El mantenimiento preventivo incluye limpieza, actualizaciones de software, revisiones de hardware, etc., con el fin de evitar que ocurran averías y prolongar la vida útil del equipo."
            },
            {
                question: "¿Qué se utiliza para contactar con un usuario en TeamViewer?",
                options: [
                    "La IP de su equipo.",
                    "Su nombre de usuario asociado.",
                    "La MAC de su equipo.",
                    "Su ID de usuario."
                ],
                correct: 3,
                explanation: "TeamViewer genera un número de identificación único (ID) y una contraseña temporal en el equipo cliente para que el técnico pueda establecer la conexión."
            },
            {
                question: "¿Qué significa CAU?",
                options: [
                    "Centro de Atención al Usuario.",
                    "Código de Alta de Usuario.",
                    "Clasificación Automática de Usuarios y equipos.",
                    "Clasificación de Averías Unificada."
                ],
                correct: 0,
                explanation: "También conocido comúnmente como Help Desk o Service Desk, es el punto único de contacto entre los usuarios y el departamento de soporte informático."
            },
            {
                question: "¿Qué debe hacerse con la documentación técnica de un sistema informático?",
                options: [
                    "Recopilarla pero no actualizarla.",
                    "No es necesario recopilarla ni actualizarla, porque está siempre disponible en Internet.",
                    "Recopilarla y actualizarla.",
                    "Actualizarla pero no recopilarla."
                ],
                correct: 2,
                explanation: "Tener un registro documental de la arquitectura, configuraciones e historial de la red es fundamental, y debe actualizarse constantemente cada vez que se realice un cambio para que sea de utilidad real."
            }
        ],
        "Test 2": [
            {
                question: "¿Deben cerrarse todos los partes de incidencia?",
                options: [
                    "Sólo si los problemas se han resuelto.",
                    "No, nunca deben cerrarse.",
                    "Si el problema es nuevo no es necesario cerrarlo.",
                    "Sí, siempre deben cerrarse."
                ],
                correct: 3,
                explanation: "Todo parte de incidencia o 'ticket' debe tener un ciclo de vida que termine en su cierre, ya sea porque se ha resuelto o porque se considera irresoluble, pero no deben quedar abiertos indefinidamente."
            },
            {
                question: "¿Para qué se utiliza WDS?",
                options: [
                    "Para gestionar la asistencia remota.",
                    "Para administrar imágenes y vídeos en el servidor.",
                    "Para poder instalar un programa en varios equipos de forma local.",
                    "Para realizar una instalación utilizando PXE."
                ],
                correct: 3,
                explanation: "Windows Deployment Services se utiliza para desplegar e instalar sistemas operativos Windows a través de la red en equipos cliente, utilizando el protocolo de arranque por red PXE."
            },
            {
                question: "¿Qué es una instalación desatendida?",
                options: [
                    "Aquella que se realiza sin la interacción del usuario.",
                    "La que realiza un técnico de forma remota.",
                    "La que consta de más de un programa.",
                    "La compuesta por programas que no tienen número de serie."
                ],
                correct: 0,
                explanation: "Se automatiza el proceso mediante un archivo de respuesta (por ejemplo, un archivo .xml) para que no haya que hacer configuraciones manualmente durante la instalación."
            },
            {
                question: "¿Cuál es la finalidad de la administración remota?",
                options: [
                    "Gestionar directamente un cliente desde otro cliente.",
                    "Poder gestionar un equipo cliente desde el servidor.",
                    "Dar soporte técnico a un usuario del sistema.",
                    "Poder gestionar el servidor desde un equipo cliente."
                ],
                correct: 3,
                explanation: "La 'Administración remota' tiene como fin principal que el administrador pueda configurar y gestionar un servidor sin tener que estar físicamente presente en la sala de servidores."
            },
            {
                question: "¿Cómo se llama el documento que recoge las medidas que se adoptan para el mantenimiento de un sistema informático?",
                options: [
                    "Plan de Mantenimiento.",
                    "Registro de Mantenimiento.",
                    "Registro de Prevención.",
                    "Plan de Prevención."
                ],
                correct: 0,
                explanation: "El Plan de Mantenimiento es el documento formal donde se definen las tareas, la frecuencia y las herramientas que se van a utilizar para mantener el sistema informático."
            },
            {
                question: "¿Qué es PXE?",
                options: [
                    "Un programa.",
                    "Una característica del microprocesador.",
                    "Un protocolo.",
                    "Un servicio."
                ],
                correct: 2,
                explanation: "PXE (Preboot Execution Environment) es un entorno/protocolo estándar cliente-servidor que permite arrancar un ordenador desde una interfaz de red antes de cargar el SO."
            },
            {
                question: "Por defecto, la herramienta de asistencia remota en Windows 10:",
                options: [
                    "Viene preinstalada y preconfigurada.",
                    "No viene ni instalada ni configurada.",
                    "Viene instalada y configurada.",
                    "Viene instalada pero no configurada."
                ],
                correct: 3,
                explanation: "La herramienta viene incluida e instalada, pero por seguridad no está configurada para aceptar conexiones remotas por defecto; debe habilitarse explícitamente."
            },
            {
                question: "¿Qué elemento del equipo es compatible o no con PXE?",
                options: [
                    "El sistema operativo.",
                    "El microprocesador.",
                    "La memoria RAM.",
                    "La tarjeta de red."
                ],
                correct: 3,
                explanation: "Para que un equipo pueda arrancar a través de la red mediante PXE, es un requisito hardware indispensable que su tarjeta de red (NIC) y su BIOS/UEFI sean compatibles."
            },
            {
                question: "¿Qué parte de la aplicación VNC se instala en el equipo del usuario?",
                options: [
                    "VNC Host.",
                    "VNC User.",
                    "VNC Viewer.",
                    "VNC Server."
                ],
                correct: 3,
                explanation: "En la arquitectura de VNC, el equipo que va a ser controlado (el del usuario) debe ejecutar el 'Server', mientras que el técnico utiliza el 'Viewer' para conectarse."
            }
        ]
    }
};




