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
    }
};
