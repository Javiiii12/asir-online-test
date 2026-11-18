// data/iaw.js
// Módulo: Implantación de Aplicaciones Web (2º ASIR)

export const questionsIAW = {
    "Unidad de Trabajo 1.- Instalación de servidores de aplicaciones web": {
        "Test 1": [
            {
                question: "¿Cuál es el comando correcto para iniciar el servicio MySQL/MariaDB en Ubuntu?",
                options: [
                    "sudo systemctl start mysql",
                    "sudo service mysql stop",
                    "sudo systemctl enable mysql",
                    "sudo mysql -v"
                ],
                correct: 0,
                explanation: "systemd es el gestor de servicios de Ubuntu: systemctl start mysql arranca el servicio. enable solo lo habilita para el arranque, stop lo detiene y mysql -v muestra la versión del cliente."
            },
            {
                question: "¿Qué página web oficial proporciona la descarga de MariaDB para Windows?",
                options: [
                    "https://mariadb.org",
                    "https://mysql.com",
                    "https://linux.org",
                    "https://github.com/mariadb"
                ],
                correct: 0,
                explanation: "La web oficial del proyecto MariaDB es https://mariadb.org, desde donde se obtienen los instaladores para Windows. mysql.com pertenece a Oracle y GitHub aloja el código fuente, no la descarga oficial."
            },
            {
                question: "¿Cuál es el puerto por defecto que usa Apache para servir contenido web?",
                options: [
                    "80",
                    "8080",
                    "443",
                    "3306"
                ],
                correct: 0,
                explanation: "El puerto por defecto de HTTP es el 80. El 443 corresponde a HTTPS, el 3306 a MySQL/MariaDB y el 8080 es una alternativa habitual. Nota: en el cuestionario original era una pregunta de respuesta corta (80); aquí se ofrece como opción múltiple."
            },
            {
                question: "¿Cuál es el comando correcto para instalar una extensión de PHP en Ubuntu?",
                options: [
                    "sudo apt install php-[nombre-extensión]",
                    "sudo yum install php-[nombre-extensión]",
                    "sudo pacman -S php-[nombre-extensión]",
                    "sudo apt install php-extension"
                ],
                correct: 0,
                explanation: "En Ubuntu/Debian el gestor de paquetes es apt: sudo apt install php-<extensión> (por ejemplo php-mysql). yum es de RHEL/Fedora, pacman de Arch y «php-extension» no es un nombre de paquete real."
            },
            {
                question: "¿Cuál es el comando para instalar MariaDB en Ubuntu?",
                options: [
                    "sudo apt install mariadb-server",
                    "sudo yum install mariadb-server",
                    "sudo pacman -S mariadb-server",
                    "sudo systemctl install mariadb"
                ],
                correct: 0,
                explanation: "En Ubuntu se instala con sudo apt install mariadb-server. yum y pacman pertenecen a otras distribuciones, y systemctl no instala paquetes: gestiona servicios."
            },
            {
                question: "¿Cuál es el comando para instalar Apache en una distribución basada en Debian, como Ubuntu?",
                options: [
                    "sudo apt install apache2",
                    "sudo yum install apache2",
                    "sudo dnf install apache2",
                    "sudo pacman -S apache2"
                ],
                correct: 0,
                explanation: "En Debian/Ubuntu el paquete del servidor web Apache se denomina apache2 y se instala con apt. yum/dnf son gestores de RHEL/Fedora y pacman de Arch."
            },
            {
                question: "PHP es un lenguaje de programación de código abierto que se utiliza principalmente para el desarrollo web.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. PHP es de código abierto y está orientado principalmente al desarrollo web del lado del servidor."
            },
            {
                question: "¿Qué método es el recomendado para instalar PHP en Windows?",
                options: [
                    "Usar XAMPP o WAMP",
                    "Descargar PHP desde la web oficial y configurarlo manualmente",
                    "Instalarlo con apt-get",
                    "Usar PowerShell"
                ],
                correct: 0,
                explanation: "La respuesta recomendada es usar un paquete integrado como XAMPP o WAMP, que incluye Apache, PHP y MariaDB/MySQL listos para funcionar en Windows. apt-get no existe en Windows y la configuración manual es bastante más laboriosa."
            },
            {
                question: "Una vez instalado y ejecutado Apache, es posible acceder al servidor web ingresando http://localhost en un navegador.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. Con Apache en marcha, http://localhost (puerto 80) muestra la página por defecto del servidor web."
            },
            {
                question: "¿Cuál es el comando para reiniciar el servidor MySQL/MariaDB en Ubuntu?",
                options: [
                    "sudo systemctl restart mysql",
                    "sudo systemctl start mysql",
                    "sudo service mysql reload",
                    "sudo systemctl restart apache2"
                ],
                correct: 0,
                explanation: "sudo systemctl restart mysql detiene y vuelve a arrancar el servicio con systemd. start solo lo inicia, reload recarga la configuración y reiniciar apache2 afecta al servidor web, no a la base de datos. Nota: en el cuestionario original era una pregunta de respuesta corta; aquí se ofrece como opción múltiple."
            }
        ]
    }
};
