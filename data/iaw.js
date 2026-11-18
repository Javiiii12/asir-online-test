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
        ],
        "Test 2": [
            {
                question: "¿Cuál es el comando correcto para instalar PHP en una distribución Ubuntu?",
                options: [
                    "sudo apt install php",
                    "sudo yum install php",
                    "sudo dnf install php",
                    "sudo pacman -S php"
                ],
                correct: 0,
                explanation: "En Ubuntu/Debian el gestor de paquetes es apt: sudo apt install php instala el intérprete y los módulos base. yum/dnf son de RHEL/Fedora y pacman de Arch. Se parece a la P4 del Test 1, pero allí se pedía instalar una extensión."
            },
            {
                question: "Después de instalar PHP en Ubuntu, ¿qué comando se debe usar para reiniciar Apache y aplicar los cambios?",
                options: [
                    "sudo systemctl restart apache2",
                    "sudo systemctl start apache2",
                    "sudo systemctl restart mysql",
                    "sudo service apache2 reload"
                ],
                correct: 0,
                explanation: "Tras instalar PHP hay que reiniciar Apache para que cargue el módulo: sudo systemctl restart apache2. Nota: en el cuestionario original era una pregunta de respuesta corta; aquí se ofrece como opción múltiple."
            },
            {
                question: "¿Qué comando permite habilitar Apache para que se inicie automáticamente con el sistema?",
                options: [
                    "sudo systemctl enable apache2",
                    "sudo apache2ctl enable",
                    "sudo apache2 -enable",
                    "sudo service apache2 start"
                ],
                correct: 0,
                explanation: "systemctl enable apache2 crea los enlaces para que el servicio arranque automáticamente con el sistema. Ojo: enable no lo inicia en ese momento; para eso está start."
            },
            {
                question: "¿Cuál es el comando que te permite verificar si Apache está corriendo?",
                options: [
                    "sudo systemctl status apache2",
                    "sudo service apache2 install",
                    "sudo systemctl enable apache2",
                    "sudo apache2 -v"
                ],
                correct: 0,
                explanation: "systemctl status apache2 muestra si el servicio está activo, su PID y las últimas líneas de log. apache2 -v solo muestra la versión y enable lo habilita para el arranque."
            },
            {
                question: "Apache es un servidor web que se puede instalar en sistemas Linux mediante el gestor de paquetes.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. Apache está en los repositorios de las distribuciones Linux y se instala con su gestor de paquetes (apache2 mediante apt en Debian/Ubuntu), como veíamos en la P6 del Test 1."
            },
            {
                question: "En Windows, puedes administrar MySQL usando el \"MySQL Workbench\" para tareas gráficas y SQL.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. MySQL Workbench es la herramienta gráfica oficial para diseñar esquemas, ejecutar consultas SQL y gestionar usuarios, disponible también en Windows."
            },
            {
                question: "¿Qué comando se usa para verificar el estado de MySQL/MariaDB en Ubuntu?",
                options: [
                    "sudo systemctl status mysql",
                    "sudo systemctl mysql check",
                    "sudo mysql status",
                    "sudo service check mysql"
                ],
                correct: 0,
                explanation: "systemctl status mysql consulta el estado del servicio MariaDB/MySQL en Ubuntu. Es el equivalente a la P4 de este mismo test, pero sobre el servicio de base de datos."
            },
            {
                question: "MySQL y MariaDB son sistemas gestores de bases de datos relacionales.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. Ambos son SGBD relacionales (MariaDB es un fork de MySQL), usan SQL y organizan la información en tablas, filas y columnas."
            },
            {
                question: "XAMPP es una herramienta que incluye Apache, PHP y MySQL para facilitar el desarrollo local en Windows.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. XAMPP empaqueta Apache, PHP, MySQL/MariaDB y otros componentes en un único instalador para montar un entorno de desarrollo local. Repite la idea de la P8 del Test 1 (XAMPP/WAMP)."
            },
            {
                question: "El comando sudo systemctl status apache2 muestra el estado actual del servicio Apache.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. systemctl status apache2 informa del estado actual del servicio (active/inactive, PID y logs recientes). Es prácticamente la misma comprobación que la P4 de este test, planteada como Verdadero/Falso."
            }
        ],
        "Test 3": [
            {
                question: "El archivo de configuración principal de Apache en distribuciones basadas en Debian se encuentra en /etc/httpd/httpd.conf.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. En Debian/Ubuntu el archivo principal es /etc/apache2/apache2.conf, con la configuración repartida en sites-available/sites-enabled y conf-available. /etc/httpd/httpd.conf es la ruta típica de RHEL/CentOS/Fedora."
            },
            {
                question: "El archivo principal de configuración de PHP en Ubuntu se encuentra en /etc/php/[versión]/apache2/php.ini.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. Con el módulo de Apache (libapache2-mod-php) el php.ini vive en /etc/php/<versión>/apache2/php.ini; para la versión de línea de comandos sería /etc/php/<versión>/cli/php.ini."
            },
            {
                question: "¿Cuál es el comando correcto para verificar la versión de PHP instalada en Ubuntu?",
                options: [
                    "php -v",
                    "php --version",
                    "php -info",
                    "sudo systemctl php -v"
                ],
                correct: 0,
                explanation: "php -v muestra la versión del intérprete. Ojo: php --version también funciona en la práctica, pero el test marca php -v. «php -info» no es válido (sería php -i o phpinfo()) y systemctl no ejecuta binarios de usuario."
            },
            {
                question: "¿Cuál de las siguientes órdenes permite administrar MySQL/MariaDB desde la terminal en Ubuntu?",
                options: [
                    "mysql",
                    "psql",
                    "sqlcmd",
                    "phpmyadmin"
                ],
                correct: 0,
                explanation: "mysql es el cliente de terminal de MySQL/MariaDB. psql pertenece a PostgreSQL, sqlcmd a SQL Server y phpMyAdmin es una interfaz web, no una orden de consola."
            },
            {
                question: "En Windows, el archivo php.ini se encuentra normalmente dentro de la carpeta donde PHP fue instalado.",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. En Windows PHP busca php.ini en su propio directorio de instalación (junto a php.exe); con XAMPP suele estar en la carpeta xampp/php."
            },
            {
                question: "Para instalar MySQL en Windows, es necesario habilitar Windows Subsystem for Linux (WSL).",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. MySQL/MariaDB dispone de instalador nativo para Windows (MSI o ZIP) y no necesita WSL; WSL solo haría falta para ejecutar la edición de Linux dentro de Windows."
            },
            {
                question: "¿Cuál es el puerto por defecto que usa MySQL/MariaDB para escuchar conexiones entrantes?",
                options: [
                    "3306",
                    "3307",
                    "80",
                    "5432"
                ],
                correct: 0,
                explanation: "El puerto por defecto de MySQL/MariaDB es el 3306. El 80 es HTTP, el 5432 de PostgreSQL y el 3307 se usa a veces para una segunda instancia. Nota: en el cuestionario original era una pregunta de respuesta corta; aquí se ofrece como opción múltiple."
            },
            {
                question: "¿Cuál es el directorio por defecto donde Apache almacena los archivos web en distribuciones basadas en Debian?",
                options: [
                    "/var/www/html",
                    "/etc/apache2/",
                    "/home/www/html",
                    "/srv/apache/html"
                ],
                correct: 0,
                explanation: "En Debian/Ubuntu el DocumentRoot por defecto es /var/www/html. /etc/apache2/ guarda la configuración del servidor, no los archivos web."
            },
            {
                question: "¿Cuál es el comando para iniciar el servicio Apache en Linux?",
                options: [
                    "sudo systemctl start apache2",
                    "sudo service apache2 stop",
                    "sudo systemctl status apache2",
                    "sudo apache2ctl -k stop"
                ],
                correct: 0,
                explanation: "systemctl start apache2 inicia el servicio con systemd. status solo consulta el estado y las opciones con stop lo detienen."
            },
            {
                question: "¿Qué comando se usa para acceder a la consola de MySQL desde la terminal en Ubuntu?",
                options: [
                    "mysql -u root -p",
                    "sudo mysql",
                    "mysql -u root",
                    "sudo systemctl start mysql"
                ],
                correct: 0,
                explanation: "La respuesta oficial es mysql -u root -p: indica el usuario y solicita la contraseña. Ojo: en el envío original se respondió «sudo mysql» y la plataforma lo puntuó como incorrecto, aunque en Ubuntu con el plugin auth_socket suele funcionar sin contraseña. Nota: era respuesta corta en el cuestionario; aquí se ofrece como opción múltiple."
            }
        ]
    }
};
