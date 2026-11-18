// data/aso.js
// Módulo: Administración de Sistemas Operativos (2º ASIR)

export const questionsASO = {
    "Unidad de Trabajo 1.- Administración de servicios de directorio": {
        "Test 1": [
            {
                question: "Si queremos crear un subdominio en Active Directory. ¿Qué afirmación es correcta?",
                options: [
                    "No hay que hacer nada, se realiza al finalizar el proceso de instalación del Active Directory.",
                    "Hay que configurar el DNS del nuevo servidor para que encuentre el servidor principal del dominio.",
                    "Se crea el subdominio como dominio principal, al reiniciar el equipo, empezará la relación de confianza.",
                    "Sólo hace falta habilitar el Netbios para encontrar el dominio principal y proseguirá con la relación de confianza."
                ],
                correct: 1,
                explanation: "Active Directory utiliza DNS (y sus registros SRV) para localizar los controladores de dominio. El nuevo servidor necesita apuntar al DNS del dominio raíz para poder unirse como subdominio."
            },
            {
                question: "En GNU/Linux el servicio LDAP sustituye al resto de los servicios. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "LDAP centraliza la autenticación y la consulta de usuarios/recursos en un directorio, pero no reemplaza otros servicios de red como DNS, DHCP, web o archivos; simplemente se integra con ellos."
            },
            {
                question: "Los objetos son representaciones de los recursos de red. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Cada elemento físico o lógico de la red (usuarios, grupos, equipos, impresoras, etc.) se representa dentro del servicio de directorio mediante un objeto con sus respectivos atributos."
            },
            {
                question: "¿Las carpetas son parte del directorio activo?",
                options: [
                    "Sí, dejan de controlarse a nivel local para que lo administre el directorio activo.",
                    "No, es parte del sistema operativo a nivel local.",
                    "Sí, porque el directorio activo controla todas las transacciones del sistema.",
                    "Ninguna respuesta es correcta."
                ],
                correct: 1,
                explanation: "Las carpetas residen y se gestionan en el sistema de archivos local del equipo (por ejemplo, NTFS). En Active Directory solo se puede publicar un puntero o acceso a una carpeta compartida para facilitar su búsqueda."
            },
            {
                question: "¿Qué software NO es válido para administrar un LDAP?",
                options: [
                    "phpldapadmin.",
                    "jxplorer.",
                    "konqueror.",
                    "Editor de texto."
                ],
                correct: 2,
                explanation: "phpLDAPadmin y JXplorer son clientes de administración LDAP, y un editor de texto sirve para crear archivos .ldif de configuración/importación. Konqueror es únicamente un navegador web y gestor de archivos de KDE."
            },
            {
                question: "¿Qué es un controlador de dominio?",
                options: [
                    "Es un conjunto de ordenadores interconectados entre sí formando una entidad común.",
                    "Es un servidor del tipo Windows Server en cualquiera de sus versiones.",
                    "Son los servidores del tipo Windows Server en cualquiera de sus versiones en la cual cada uno de los servidores tiene una función específica.",
                    "Es una entidad administrativa."
                ],
                correct: 3,
                explanation: "Según el criterio de evaluación de este test (pregunta corregida), el controlador de dominio se define como la entidad administrativa encargada de gestionar la seguridad, las políticas y la autenticación de los recursos dentro del dominio."
            },
            {
                question: "¿Qué hace el siguiente comando \"ldapsearch -x | grep 'mail:' | cut -f 2 > pp; echo $(cat pp | awk '{print $1\",\" }') > email\"?",
                options: [
                    "El comando cut está mal configurado.",
                    "El archivo email contendrá la lista de todos los e-mail, separados por comas \",\" y en una sola línea.",
                    "El archivo pp tendrá líneas de todos los correos electrónicos.",
                    "El comando awk no existe."
                ],
                correct: 0,
                explanation: "ldapsearch separa los campos con dos puntos y un espacio (mail: usuario@dominio.com). Al no indicar un delimitador (-d \":\" o -d \" \"), cut busca tabuladores por defecto y no divide la línea correctamente."
            },
            {
                question: "En un árbol de directorio, ¿qué es un dominio?",
                options: [
                    "Es un nombre cualificado en Internet que añadiremos como base al LDAP.",
                    "Es la estructura básica que permite agrupar todos los objetos que administrará en forma estructurada y jerárquica.",
                    "Es el alias que recibe todo sistema LDAP.",
                    "Se denomina a la base de datos de tipo jerárquica que gestiona cualquier LDAP."
                ],
                correct: 1,
                explanation: "El dominio es la unidad fundamental dentro del árbol de directorio que organiza y agrupa de manera jerárquica todos los objetos (usuarios, equipos, grupos) bajo una administración común."
            },
            {
                question: "¿Para qué podemos utilizar los filtros de búsqueda?",
                options: [
                    "Para gestionar el LDAP.",
                    "Para separar los usuarios del sistema del árbol del directorio.",
                    "Para buscar un objeto en el árbol de directorio.",
                    "Ninguna respuesta es correcta."
                ],
                correct: 2,
                explanation: "Los filtros LDAP permiten definir condiciones sobre los atributos para localizar objetos específicos dentro de la estructura jerárquica del directorio."
            },
            {
                question: "El comando \"dsquery\" lo utilizamos para:",
                options: [
                    "Consultar sobre elementos del Active Directory.",
                    "Consultar a través de un cuadro de diálogo sobre el Active Directory.",
                    "No existe el comando.",
                    "No necesita parámetros y nos muestra el árbol del directorio."
                ],
                correct: 0,
                explanation: "dsquery es una utilidad de consola en Windows Server diseñada para realizar búsquedas de objetos (usuarios, equipos, unidades organizativas, etc.) dentro de Active Directory."
            }
        ],
        "Test 2": [
            {
                question: "Debemos tener instalado el servicio DNS para que funcione adecuadamente el servidor Active Directory. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Active Directory depende por completo de DNS: los registros SRV permiten localizar los controladores de dominio y servicios como LDAP o Kerberos. Sin DNS el dominio no funciona correctamente."
            },
            {
                question: "¿Qué tipos de grupos tendremos en un Active Directory?",
                options: [
                    "Grupos locales del dominio, unidades organizativas y equipos del dominio.",
                    "Grupos universales.",
                    "Grupos locales del dominio, globales y universales.",
                    "Grupos globales y locales del dominio."
                ],
                correct: 2,
                explanation: "Los tres ámbitos de grupo de Active Directory son: locales de dominio, globales y universales. Las unidades organizativas (OU) y los equipos no son tipos de grupo."
            },
            {
                question: "Podemos crear un dominio LDAP con un nombre cualificado en Internet. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Se puede usar un nombre DNS cualificado (FQDN) como base del directorio, por ejemplo empresa.com traducido a dc=empresa,dc=com como naming context del LDAP."
            },
            {
                question: "Hemos instalado, en el servidor, un software que permite imprimir archivos PDF. Es posible administrar derechos y privilegios de acceso a dicho software a usuarios y/o grupos a través del LDAP. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Según el criterio oficial del test es Verdadero: el directorio puede emplearse para gestionar los derechos de acceso a recursos/servicios publicados para usuarios y grupos. Ojo: en la práctica LDAP centraliza identidad y permisos, pero la aplicación debe consultarlo; en el envío original se marcó «Falso» y la plataforma lo dio por incorrecto."
            },
            {
                question: "Debemos organizar, antes de proceder a la instalación, el árbol de directorio. Es decir, saber todos los usuarios, claves, máquinas, grupos, etc. que se unirán al árbol de directorio. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. No hace falta tener inventariados todos los objetos antes de instalar: se diseña una estructura general y el árbol se amplía y modifica posteriormente creando usuarios, grupos, equipos y OU."
            },
            {
                question: "¿Qué entendemos por \"servicio de directorio\"?",
                options: [
                    "Es una aplicación o conjunto de aplicaciones que se comunica con un servidor llamado controlador de dominio.",
                    "Es una aplicación o conjunto de aplicaciones que almacena y organiza la información sobre los usuarios de una red de ordenadores.",
                    "Es una aplicación que se instala en cada uno de los ordenadores de la red para controlar la difusión y los recursos compartidos de cada ordenador.",
                    "Es una aplicación o conjunto de aplicaciones cliente/servidor que se instala en todos los equipos de la red con sistema operativo Windows."
                ],
                correct: 1,
                explanation: "El servicio de directorio es el conjunto de aplicaciones que almacena y organiza la información de los objetos de una red (usuarios, equipos, grupos, recursos) y permite consultarla y administrarla de forma centralizada."
            },
            {
                question: "La función de un controlador de dominios es:",
                options: [
                    "Gestionar las consultas de un dominio.",
                    "Dar servicio a las máquinas clientes.",
                    "Ceñirse a unas reglas de seguridad y autenticación comunes siendo una entidad administrativa unificada.",
                    "Ninguna respuesta es correcta."
                ],
                correct: 2,
                explanation: "El controlador de dominio actúa como entidad administrativa unificada que aplica unas reglas comunes de seguridad y autenticación a todos los recursos del dominio (en línea con la definición del Test 1)."
            },
            {
                question: "Cuando se procede a realizar la instalación de un controlador de dominio debemos indicar el dominio que va a gestionar. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. Al promover un servidor a controlador de dominio hay que indicar si crea un bosque/dominio nuevo o se añade a uno existente, es decir, qué dominio va a gestionar."
            },
            {
                question: "¿Un nombre de dominio debe estar cualificado por un registrador en Internet?",
                options: [
                    "Sí, todos los dominios deben ser cualificados.",
                    "No, pero el dominio no será \"visible\" por la red.",
                    "No, pero es conveniente que el nombre no sea registrable.",
                    "Ninguna de las otras respuestas es correcta."
                ],
                correct: 2,
                explanation: "No es obligatorio registrar el nombre en Internet; de hecho se recomienda usar un nombre no registrable (o un subdominio propio) para evitar conflictos con dominios DNS públicos."
            },
            {
                question: "En Windows Server en cualquiera de las últimas versiones, ¿qué pasos son correctos para agregar una máquina al dominio?",
                options: [
                    "Configurar el cliente DNS para que resuelva el nombre de dominio.",
                    "Cambiar la configuración de la máquina para agregarse al dominio.",
                    "Sólo se puede agregar manualmente desde el servidor.",
                    "Ninguna es correcta."
                ],
                correct: 0,
                explanation: "La respuesta oficial es la a: antes de unir un equipo hay que configurar el cliente DNS para que resuelva el nombre del dominio y pueda localizar los controladores. Aunque la b también es un paso del proceso, el test marca solo la a."
            }
        ]
    }
};
