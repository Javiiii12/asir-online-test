export const questionsISO = [
    {
        question: "¿Qué comando en Linux se utiliza para cambiar los permisos de un archivo de forma octal?",
        options: ["chown", "chmod", "chgrp", "attrib"],
        correct: 1,
        explanation: "El comando chmod (change mode) se usa para cambiar los permisos de acceso de un archivo o directorio."
    },
    {
        question: "En Windows Server, ¿qué función principal tiene Active Directory?",
        options: [
            "Actuar como un firewall de red corporativo.",
            "Proporcionar servicios de directorio y gestión de identidades centralizada.",
            "Alojar páginas web de alto rendimiento.",
            "Realizar copias de seguridad incrementales automatizadas."
        ],
        correct: 1,
        explanation: "Active Directory es el servicio de directorio de Microsoft que centraliza la administración de usuarios, equipos y políticas de seguridad."
    },
    {
        question: "¿Cuál de los siguientes no es un tipo de RAID que ofrezca tolerancia a fallos por sí solo?",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        correct: 0,
        explanation: "RAID 0 (Data Striping) distribuye los datos entre varios discos para mejorar el rendimiento, pero no ofrece redundancia ni tolerancia a fallos."
    }
];
