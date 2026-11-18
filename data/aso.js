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
        ]
    }
};
