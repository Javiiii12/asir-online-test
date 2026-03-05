// data/fh.js
// Módulo: Fundamentos de Hardware (Estructura Anidada)

export const questionsFH = {
    "Tema 3: Creación de imágenes de software": {
        "Test 1": [
            {
                question: "Para crear una partición primaria…",
                options: [
                    "Debemos ser cautos con los datos, si los contiene.",
                    "Mantenemos los datos si los tuviera.",
                    "Los datos se vuelcan en una memoria virtual temporal.",
                    "No mantiene los datos pero pueden recuperarse con comandos específicos."
                ],
                correct: 0,
                explanation: "Al manipular particiones siempre existe el riesgo de pérdida de datos, por lo que la precaución y el backup previo son fundamentales."
            },
            {
                question: "Una copia de seguridad total es la copia sólo del Sistema Operativo. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Una copia de seguridad total (Full Backup) incluye todos los datos seleccionados, no solo el Sistema Operativo."
            },
            {
                question: "Al elegir una herramienta software para realizar respaldos desde sistemas Windows valoraremos…",
                options: [
                    "Únicamente el coste de la herramienta.",
                    "Buscaremos el más barato del mercado.",
                    "Que sea fácil el manejo de la herramienta, valorando menos su eficacia.",
                    "La utilidad práctica de la herramienta y en menor medida, el coste y sí valoraremos más las alternativas."
                ],
                correct: 3,
                explanation: "La utilidad, funcionalidad y las alternativas disponibles son siempre prioritarias frente al coste único."
            },
            {
                question: "Con Gparted, a la hora de aplicar los cambios debemos reiniciar el ordenador, como con Easeus. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Gparted (basado en Linux) a menudo puede aplicar cambios en caliente si las particiones no están montadas, sin necesidad de reinicio."
            },
            {
                question: "Mantener copias de seguridad en ubicaciones físicas distintas, se realiza para que el propietario o responsable de la empresa tenga acceso en local en su casa, por ejemplo. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Se realiza por redundancia ante desastres físicos (incendios, inundaciones) en la sede principal (Disaster Recovery)."
            },
            {
                question: "Se puede realizar copias de seguridad a través de internet contra un servidor de forma segura mediante túnel certificado. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Se utilizan protocolos y túneles encriptados (VPN, SSH, SFTP) para garantizar la seguridad en tránsito."
            },
            {
                question: "Una partición es…",
                options: [
                    "Un disco duro.",
                    "Un división lógica del espacio en disco donde se crea un sistema de archivos.",
                    "En Windows 10 la unidad C:/.",
                    "Un sistema operativo."
                ],
                correct: 1,
                explanation: "Una partición es una división lógica de una unidad de almacenamiento física, tratada por el SO como una unidad independiente."
            },
            {
                question: "Una imagen de respaldo es…",
                options: [
                    "Una salvaguarda total de particiones.",
                    "Una restauración del sistema de archivos.",
                    "Una salvaguarda total de un disco duro.",
                    "Una salvaguarda de los datos actualizados."
                ],
                correct: 2,
                explanation: "Una imagen de disco es una copia exacta (sector por sector) que contiene el disco duro original completo."
            },
            {
                question: "En la BIOS podemos modificar la secuencia de arranque de los dispositivos de almacenamiento masivo. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. La opción 'Boot Sequence' o 'Boot Priority' permite elegir qué dispositivo arranca primero."
            },
            {
                question: "El comando Fdisk…",
                options: [
                    "Sólo se utiliza en Windows.",
                    "Sólo se utiliza en Linux y Mac.",
                    "Se utiliza tanto en Linux, Mac y Windows y tiene las mismas características de uso en todos los casos.",
                    "Se utiliza tanto en Linux, Mac y Windows, pero tiene características diferenciadas."
                ],
                correct: 3,
                explanation: "Fdisk es un gestor de particiones por línea de comandos cuyas opciones y banderas difieren según el Sistema Operativo."
            }
        ],
        "Test 2": [
            {
                question: "¿Es válida la siguiente afirmación? Como parte de la estrategia de copias de seguridad, se programa el día 1 de cada mes para realizar una copia total de un disco de almacenamiento masivo. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Realizar copias totales periódicas (como el día 1 de cada mes) es la base de cualquier estrategia de retención (ej. Abuelo-Padre-Hijo)."
            },
            {
                question: "La estructura de una partición EXT3 es…",
                options: [
                    "Está descartada por los problemas de seguridad que plantea.",
                    "Es la evolución de EXT2 así como FAT32 es la evolución de FAT16.",
                    "Es igual que el tipo EXT2 salvo que contiene journaling.",
                    "Igual que EXT2 corrigiendo el tamaño máximo de archivos que soporta."
                ],
                correct: 2,
                explanation: "EXT3 es fundamentalmente el sistema de archivos EXT2 al que se le ha añadido la capacidad de registro por diario (journaling)."
            },
            {
                question: "Los sistemas operativos Linux utilizan, indistintamente tanto formatos de i-nodos como formatos con tablas de localizaciones. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Los sistemas nativos de Linux (EXT, ReiserFS, etc.) se basan en i-nodos. Las tablas de localizaciones (como FAT) son propias de sistemas Microsoft."
            },
            {
                question: "En un disco duro pueden convivir dos sistemas operativos pero sólo uno podrá estar activo simultáneamente. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. A través de un gestor de arranque (Dual Boot) puedes tener varios SO instalados, pero físicamente solo se ejecuta uno a la vez en la máquina host."
            },
            {
                question: "El punto de restauración de Windows 10 sirve para...",
                options: [
                    "Recuperar los datos e información de los usuarios del sistema",
                    "Todas son incorrectas",
                    "Recuperar el sistema a un estado anterior previamente salvado, se recupera software, controladores, registro y configuración.",
                    "En Windows 10 dejaron de usar los puntos de restauración"
                ],
                correct: 2,
                explanation: "Los puntos de restauración devuelven los archivos del sistema y el registro a un estado anterior, sin afectar a los archivos personales del usuario."
            },
            {
                question: "Desde un sistema operativo Linux podemos acceder a un sistema de archivos NTFS. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Gracias a controladores como ntfs-3g, Linux puede leer y escribir perfectamente en particiones NTFS."
            },
            {
                question: "Existe una partición de arranque o partition boot sector en los discos duros. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. (Corregido de tu test). Lo que existe a nivel de disco es el MBR (Master Boot Record) o la tabla GPT, no una 'partición de arranque' genérica de esa forma."
            },
            {
                question: "En cualquier herramienta de particionado, para modificar el tamaño de una partición…",
                options: [
                    "Debe existir en el reinicio una opción de deshacer.",
                    "Debe desmontarse la unidad.",
                    "No debe hacerse nada.",
                    "Ninguna de las opciones anteriores es correcta."
                ],
                correct: 1,
                explanation: "Para poder redimensionar de forma segura una partición, el sistema de archivos no puede estar en uso; por tanto, debe desmontarse previamente."
            },
            {
                question: "Un disco duro puede tener varias particiones. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Un disco físico se puede dividir lógicamente en múltiples particiones (primarias, extendidas o lógicas)."
            },
            {
                question: "Con la aplicación Gparted, y en Linux, podemos crear, modificar y borrar particiones NTFS. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Gparted es compatible con multitud de sistemas de archivos, incluyendo NTFS de Windows."
            }
        ],
        "Test 3": [
            {
                question: "EXT4 es un sistema de archivos con registro por diario como una mejora compatible de ext3. Ext4 soporta ahora volúmenes de hasta 1024 Petabytes. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. EXT4 trajo mejoras significativas en el límite de tamaño de volúmenes y archivos respecto a EXT3."
            },
            {
                question: "Un cambio desafortunado de la secuencia de arranque puede suponer…",
                options: [
                    "Puede provocar el “flasheo” de la BIOS.",
                    "No arrancar el Sistema Operativo y tener que entrar en la BIOS para solucionar el problema.",
                    "Eliminar, accidentalmente, el disco duro que soporta el Sistema Operativo.",
                    "Confundir la unidad desde la que puede entrar y eliminar el Sistema Operativo."
                ],
                correct: 1,
                explanation: "Si le indicas a la BIOS que intente arrancar desde un disco sin SO, simplemente mostrará un error de 'Operating System not found'."
            },
            {
                question: "Con una herramienta Linux podemos clonar una máquina con SISTEMA OPERATIVO Windows. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Herramientas como Clonezilla (basadas en Linux) pueden clonar discos Windows a nivel de bloques (sectores) sin importar el SO."
            },
            {
                question: "Con el gestor de arranque de Windows podemos elegir cómo arrancar el Sistema Operativo. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. El gestor de arranque de Windows (Boot Manager) permite seleccionar entre varios sistemas operativos si hay un Dual Boot."
            },
            {
                question: "Si realizamos una imagen del sistema en Windows 10 no realizará una copia del historial de archivos del usuario. Esa copia solo sirve para recuperar el sistema y no los datos del usuario. Además es necesario crear un disco de reparación.",
                options: [
                    "Incorrecto. Esa herramienta de Windows copia todo.",
                    "Incorrecto.",
                    "Es incorrecto porque la creación del disco de reparación no hace falta hacerla, se puede acceder a las herramientas de recuperación desde la instalación de Windows.",
                    "Incorrecto porque se copia el historial y además para realizar la imagen, debe estar inactiva la unidad de la que queremos realizar la imagen."
                ],
                correct: 2,
                explanation: "Es incorrecto porque hoy en día puedes acceder al entorno de recuperación directamente desde un USB de instalación de Windows."
            },
            {
                question: "ReiserFS almacena metadatos sobre los ficheros, entradas de directorio y listas de i-nodos en un único árbol B+ cuya clave principal es un identificador único. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Esta es la característica principal de la arquitectura de ReiserFS para optimizar el acceso."
            },
            {
                question: "El sistema de particiones GPT permite:",
                options: [
                    "Ninguna es correcta",
                    "Particiones de más de 2 terabytes. Se admiten 128 particiones primarias. Ya no se usan particiones extendidas ni secundarias. Mayor seguridad frente a fallos.",
                    "Particiones de más de 2 terabytes. Se admiten 128 particiones primarias. Ya no se usan particiones extendidas ni secundarias. Compatibilidad con MBR.",
                    "Particiones de más de 2 terabytes. Se admiten 128 particiones extendidas. Mayor seguridad frente a fallos."
                ],
                correct: 1,
                explanation: "(Corregido). GPT supera el límite de 2TB del MBR, soporta 128 particiones primarias por defecto y añade redundancia de cabeceras para mayor seguridad."
            },
            {
                question: "Con una memoria USB podemos arrancar un Sistema Operativo ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. Es lo que conocemos como formato Live USB (ej: Live USB de Ubuntu) o medios de instalación."
            },
            {
                question: "Una copia de seguridad diferencial es similar a la incremental, la diferencia es que no desactiva el atributo de modificación. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Verdadero. La copia diferencial no resetea el bit de archivo, por lo que cada copia diferencial guarda todo lo modificado desde la última copia total."
            },
            {
                question: "La aplicación Easeus permite crear particiones para Linux. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "(Corregido). Aunque formatea en ext2/ext3, en el contexto puramente académico de este test la respuesta correcta es Falso, priorizando herramientas nativas como Gparted."
            }
        ]
    },
    "Tema 4: Implantación de Hardware en CPD": {
        "Test 1": [
            {
                question: "¿Es conveniente que un CPD tenga un sistema de esterilización ambiental?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Un sistema de esterilización ambiental ayuda a mantener el aire libre de partículas o contaminantes que puedan dañar el hardware."
            },
            {
                question: "Un sistema NAS es...",
                options: [
                    "Es una tecnología de almacenamiento dedicada a compartir almacenamiento a través de la red.",
                    "Es cualquier disco externo que se conecta o por WiFi o por bluetooth.",
                    "Es una tecnología de almacenamiento a compartir que se conecta a través del conector USB a un equipo.",
                    "Son dispositivos de almacenamiento que se encuentran en la \"nube\", es decir, a través de Internet."
                ],
                correct: 0,
                explanation: "NAS (Network Attached Storage) corresponde a dispositivos de almacenamiento conectados directamente a la red local."
            },
            {
                question: "En caso de desastre en el servidor, la responsabilidad última recaerá sobre el último usuario que accedió a este. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "La responsabilidad ante desastres recae en el administrador del sistema o responsable de seguridad, no en los usuarios finales."
            },
            {
                question: "¿Se debe habilitar un acceso remoto a un servidor para todos los usuarios sin distinción?",
                options: [
                    "Sí, si el responsable del departamento al que está adscrito así lo ordena.",
                    "Sí, debemos dar la oportunidad de realizar tareas de teletrabajo.",
                    "No, en ningún caso.",
                    "Sí, siempre y cuando cumpla con los requisitos previos y bajo supervisión del administrador del servidor."
                ],
                correct: 3,
                explanation: "El acceso remoto es un vector de ataque, por lo que debe concederse sólo tras cumplir requisitos de seguridad y estar bajo supervisión del administrador."
            },
            {
                question: "Con el protocolo SMB/CIFS, en una red local, pueden compartir recursos tanto máquinas de tipo Unix como Windows.",
                options: [
                    "Sí, pero dependerá de la configuración que tenga el servidor Samba.",
                    "No, en ningún caso.",
                    "Sí, los equipos de Linux o Mac pueden acceder a recursos de Windows pero no al revés.",
                    "No, sólo pueden acceder los sistemas operativos hasta Windows XP a recursos de Linux que utilicen Samba."
                ],
                correct: 0,
                explanation: "Samba permite a sistemas Unix interoperar con redes Windows usando el protocolo SMB/CIFS, dependiendo de su configuración."
            },
            {
                question: "Para mantener constante la temperatura, ¿podemos abrir las ventanas de la habitación donde se encuentren los equipos?",
                options: [
                    "No, en ningún caso.",
                    "Sí, si la temperatura así lo aconseja.",
                    "Sí, conseguiremos que baje la temperatura.",
                    "Sólo si hace calor."
                ],
                correct: 0,
                explanation: "Nunca se deben abrir ventanas en un CPD ya que rompe el aislamiento ambiental, introduciendo polvo y descontrolando la humedad y la temperatura."
            },
            {
                question: "Cualquier disco SATA puede añadirse, en caliente, a un equipo. Es decir, abrir la caja, realizar las conexiones y listo. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "No cualquier placa base soporta conexión en caliente (Hot Swap) para discos internos, e introducir componentes mecánicamente en caliente presenta riesgos si no hay bahías extractables."
            },
            {
                question: "¿Qué temperatura crees que es la más adecuada, a un metro del suelo, para mantener en buen estado los equipos?",
                options: [
                    "Entre 15° y 30° C.",
                    "Entre 22° y 28° C.",
                    "Ninguna respuesta es correcta.",
                    "Entre 18° y 22° C."
                ],
                correct: 3,
                explanation: "La temperatura en un CPD debe estar rigurosamente controlada con climatización precisa, normalmente entre 18° y 22° C para mayor eficiencia."
            },
            {
                question: "En un CPD debe existir un control de permanencia de todos y cada uno de los empleados, incluyendo en qué dependencias tienen acceso. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Es fundamental tener registros y control de accesos para mantener la seguridad física integral de las instalaciones."
            },
            {
                question: "Una PDA o un teléfono móvil con PDA, ¿podría conectarse vía WiFi a un servidor remoto?",
                options: [
                    "Sí, siempre y cuando se realicen las configuraciones adecuadas a un punto de acceso.",
                    "Sí, pero necesita un servidor DHCP.",
                    "No, en ningún caso.",
                    "Sí, se realiza de forma automática."
                ],
                correct: 0,
                explanation: "Cualquier dispositivo con capacidad de red puede acceder si las configuraciones del punto de acceso (y permisos del servidor) son las adecuadas."
            }
        ],
        "Test 2": [
            {
                question: "Un servidor cuya función principal es dar servicio web puede, además, dar servicio de correo con software adecuado. ¿Verdadero o falso?",
                options: ["Verdadero", "Falso"],
                correct: 0,
                explanation: "Un servidor físico puede alojar múltiples servicios (web, correo, bases de datos) siempre que tenga el software y recursos adecuados."
            },
            {
                question: "Para proteger la vista es mejor que el monitor tenga un filtro a que exista una buena iluminación. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Una buena iluminación ambiental e indirecta es fundamental y prioritaria frente al simple uso de un filtro de pantalla."
            },
            {
                question: "A la hora de realizar una instalación. Debemos afrontar el informe, ¿Cómo?",
                options: [
                    "De forma global.",
                    "De forma modular.",
                    "Depende de los requerimientos de gerencia.",
                    "Según las necesidades actuales."
                ],
                correct: 0,
                explanation: "En la planificación e informes de instalación de un CPD se requiere una visión global, contemplando todas las variables e infraestructuras en conjunto."
            },
            {
                question: "Un SAI on-line...",
                options: [
                    "Es cualquier fuente de alimentación de un equipo.",
                    "Se intercala entre el suministro de red normal y la carga que se quiere alimentar.",
                    "Se intercala entre la red normal y la carga, por medio de un AVR o acondicionador de red.",
                    "Ninguna de las otras respuestas es correcta."
                ],
                correct: 2,
                explanation: "Un SAI on-line funciona de forma continua filtrando y acondicionando la energía a través del inversor/AVR antes de llegar a la carga (doble conversión)."
            },
            {
                question: "¿Qué nivel de humedad relativa, a un metro del suelo, es el adecuado para mantener en buen estado los equipos?",
                options: [
                    "A 40% constantemente.",
                    "Entre 40% y 60%.",
                    "Entre 20% y 50%.",
                    "Por debajo del 70%."
                ],
                correct: 1,
                explanation: "Para evitar electricidad estática y condensación, un CPD debe mantenerse en un rango de humedad relativa entre el 40% y el 60%."
            },
            {
                question: "Un CPD debe tener, para un supuesto caso de incendio, un...",
                options: [
                    "Personal cualificado para la detección y sofocación de incendios.",
                    "Extintor.",
                    "Sistema de detección de incendios.",
                    "Sistema completo de detección de incendios, evacuación y sofocación de pequeños focos."
                ],
                correct: 3,
                explanation: "La normativa exige un sistema integral que detecte anomalías, avise para evacuar y cuente con agentes de extinción automáticos o manuales."
            },
            {
                question: "¿En el CPD debe existir un control de acceso personalizado?",
                options: [
                    "Sí, mediante un sistema de base de datos identificando a usuarios y lugares de acceso. Que estos pueden estar filtrados mediante sistemas de identificación.",
                    "Sí, mediante un torno controlado por un guarda de seguridad.",
                    "Sí, un guarda de seguridad debe identificar quién entra y a dónde.",
                    "Ninguna de las respuestas es correcta."
                ],
                correct: 0,
                explanation: "El control de accesos debe estar informatizado, registrando en una base de datos las entradas y salidas mediante credenciales seguras."
            },
            {
                question: "Un Centro de proceso de datos es un centro empresarial de uso común. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Es un centro de acceso restringido y crítico para la continuidad de la empresa, no una sala de uso común o general."
            },
            {
                question: "En un disco duro es más importante que sea más rápido las rotaciones (RPM) que la velocidad de transferencia del bus. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Ambas son importantes, pero la velocidad de transferencia sostenida del bus/interfaz a menudo marca el cuello de botella real en el rendimiento final frente a la simple rotación del plato."
            },
            {
                question: "El teletrabajo es el trabajo realizado con un ordenador. ¿Verdadero o Falso?",
                options: ["Verdadero", "Falso"],
                correct: 1,
                explanation: "Falso. Se define por realizarse a distancia (fuera del lugar habitual de la empresa) mediante telecomunicaciones, no simplemente por usar un ordenador en la oficina."
            }
        ]
    }
};
