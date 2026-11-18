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
    },

    "Unidad de Trabajo 2.- Instalación de servidores de gestores de contenidos": {
        "Test 1": [
            {
                question: "La licencia Copyleft:",
                options: [
                    "Recoge que el autor se reserva todos los derechos.",
                    "Se suele utilizar en la distribución de software.",
                    "Permite la libre distribución de copias y modificaciones.",
                    "Hace que se mantengan los mismos derechos en las obras derivadas."
                ],
                correct: [1, 2, 3],
                explanation: "El copyleft se emplea sobre todo en software: permite copiar, modificar y redistribuir, pero obliga a que las obras derivadas conserven esas mismas libertades (cláusula «hereditaria»). La a describe el copyright (todos los derechos reservados), no el copyleft."
            },
            {
                question: "Es aconsejable emplear un usuario con los _______ estrictamente necesarios para realizar las peticiones a la base de datos.",
                options: [
                    "Permisos",
                    "Privilegios",
                    "Roles",
                    "Derechos"
                ],
                correct: 0,
                explanation: "Principio de mínimo privilegio: la cuenta con la que el CMS se conecta a la BD debe tener solo los permisos imprescindibles (SELECT, INSERT, UPDATE...), nunca privilegios de administrador. El término exacto del temario es «permisos»."
            },
            {
                question: "Los portales de contenidos son sitios web que proporcionan varias _______ que varían según los contenidos que posean.",
                options: [
                    "Funciones",
                    "Herramientas",
                    "Plantillas",
                    "Extensiones"
                ],
                correct: 0,
                explanation: "El término exacto es «funciones»: un portal ofrece distintas funciones (foros, buscador, galería, área de usuarios...) según sus contenidos. Ojo: en el intento original se respondió «herramientas» y la plataforma lo puntuó como incorrecto."
            },
            {
                question: "Señala las ventajas de usar un CMS:",
                options: [
                    "Favorece que los usuarios adquieran conocimientos sobre tecnologías web.",
                    "Facilita que los usuarios colaboren realizando el mismo trabajo.",
                    "Simplifica el proceso de realizar copias de seguridad.",
                    "Facilita realizar copias de otros sitios web."
                ],
                correct: [1, 2],
                explanation: "Las ventajas marcadas son la b (varios usuarios pueden colaborar sobre los mismos contenidos) y la c (al centralizar el contenido, las copias de seguridad son más sencillas). La a no es una ventaja inherente del CMS y la d es falsa."
            },
            {
                question: "El respeto por los _______ significa que una persona no puede adjudicarse la autoría de una obra que no ha creado.",
                options: [
                    "Derechos morales",
                    "Derechos de autor",
                    "Derechos patrimoniales",
                    "Derechos de copia"
                ],
                correct: 0,
                explanation: "El término exacto es «derechos morales»: incluyen el derecho de paternidad (reconocimiento de la autoría) y el de integridad de la obra. «Derechos de autor» es el conjunto más amplio (morales + patrimoniales) y fue la respuesta marcada como incorrecta en el intento original."
            },
            {
                question: "Un blog:",
                options: [
                    "No admite la posibilidad de instalación ni personalización.",
                    "Es un sitio web personal.",
                    "No ordena las entradas de ninguna manera.",
                    "Es necesario tener conocimientos avanzados para tener uno."
                ],
                correct: 1,
                explanation: "Un blog es un sitio web personal (originalmente un diario de entradas ordenadas cronológicamente). Sí se puede instalar y personalizar, las entradas se ordenan por fecha y no hacen falta conocimientos avanzados."
            },
            {
                question: "Siempre que se conozca la autoría de una obra:",
                options: [
                    "No importa si modifico, al menos, el 30% de la obra.",
                    "Se debe indicar.",
                    "Se dice el autor cuando te pregunten.",
                    "Se indica según el uso que se haga de esa obra."
                ],
                correct: 1,
                explanation: "La autoría debe indicarse siempre que se conozca: es el derecho moral de paternidad. No depende del uso, de que te pregunten ni de ningún porcentaje de modificación."
            },
            {
                question: "Asocia cada licencia con su característica.",
                match: {
                    lefts: ["Copyright", "Copyleft", "Creative Commons"],
                    rights: [
                        "El autor se reserva algunos derechos.",
                        "El autor se reserva todos los derechos.",
                        "Libre distribución de copias y versiones."
                    ],
                    correct: [1, 2, 0]
                },
                explanation: "Copyright = todos los derechos reservados; Copyleft = libre distribución de copias y versiones (manteniendo la misma licencia en las derivadas); Creative Commons = el autor se reserva algunos derechos (some rights reserved)."
            },
            {
                question: "En los CMS una vez que preparamos algún contenido aparece directamente publicado y no lo podemos ocultar, a no ser que lo eliminemos. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Los CMS permiten guardar borradores, programar la publicación, despublicar u ocultar contenidos sin borrarlos (estados: borrador, pendiente de revisión, publicado, privado...)."
            },
            {
                question: "Un gestor de contenidos consta, básicamente, de:",
                options: [
                    "Menús.",
                    "Back-end y Front-end.",
                    "Imágenes, enlaces y textos.",
                    "Dependiendo del tipo de gestor consta de unas cosas u otras."
                ],
                correct: 1,
                explanation: "Un CMS se divide en back-end (panel de administración donde se crea y gestiona el contenido) y front-end (la parte pública que ven los visitantes)."
            }
        ],
        "Test 2": [
            {
                question: "A la hora de realizar una copia de seguridad del CMS, debo:",
                options: [
                    "Recoger los contenidos debidamente ordenados y clasificados.",
                    "Exportar la base de datos completa en un fichero SQL.",
                    "Guardar la estructura completa de directorios del sitio.",
                    "No es necesario realizar copias de seguridad de un CMS."
                ],
                correct: [1, 2],
                explanation: "La copia de un CMS tiene dos partes: la base de datos (exportada a un fichero SQL, con entradas, usuarios y configuración) y los archivos del sitio (estructura de directorios, temas, plugins e imágenes subidas). La d es falsa y la a no es propiamente una acción de copia."
            },
            {
                question: "Una licencia CC share-alike es igual que una licencia copyleft completa. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. CC BY-SA (share-alike / compartir igual) es una cláusula modular dentro de Creative Commons, que se basa en «algunos derechos reservados». No equivale a un copyleft completo como la GPL, que obliga a mantener la misma licencia en toda obra derivada."
            },
            {
                question: "Los gestores de contenidos requieren grandes conocimientos en programación de portales web. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Precisamente la ventaja de un CMS es permitir crear y gestionar contenidos desde un panel gráfico sin necesidad de saber programar portales web."
            },
            {
                question: "Asocia cada contenido con su tipo:",
                match: {
                    lefts: ["Fotos y dibujos", "Videos y podcasts", "Noticias"],
                    rights: [
                        "Textos.",
                        "Gráfico.",
                        "Multimedia."
                    ],
                    correct: [1, 2, 0]
                },
                explanation: "Fotos y dibujos son contenido gráfico; los vídeos y podcasts, multimedia; las noticias, textos."
            },
            {
                question: "Marca las opciones correctas: Los derechos sobre los que puede actuar una licencia:",
                options: [
                    "Sólo distribución en formato digital.",
                    "Recoge la traducción y adaptación.",
                    "Refleja la Copia y reproducción.",
                    "Ni se crean ni se destruyen, sólo se transmiten."
                ],
                correct: [1, 2],
                explanation: "Una licencia puede abarcar la traducción/adaptación (obras derivadas) y la copia/reproducción, además de la distribución. No se limita solo al formato digital (a) y la d describe una idea de la física, no un derecho de autor."
            },
            {
                question: "En una wiki:",
                options: [
                    "No existe la posibilidad de colaborar en los contenidos.",
                    "El conjunto de páginas está interconectado por enlaces y permite búsquedas temáticas.",
                    "Da igual si los enlaces se rompen, porque tenemos una BD.",
                    "Sería bueno que tuviese implementado un historial de cambios."
                ],
                correct: 1,
                explanation: "Una wiki se caracteriza por páginas interconectadas mediante enlaces (hipertexto) que permiten navegar y buscar por temas. La a es falsa (es colaborativa), la c es falsa (los enlaces rotos sí importan) y la d, aunque deseable, no es la respuesta marcada."
            },
            {
                question: "Asocia cada tipo con su característica:",
                match: {
                    lefts: ["Reconocimiento", "No comercial", "No derivadas", "Misma licencia"],
                    rights: [
                        "Permite la distribución bajo la misma licencia usada.",
                        "El autor se reserva algunos derechos.",
                        "Permite todo siempre que se cite al autor original.",
                        "Permite todo siempre que se no se haga uso comercial."
                    ],
                    correct: [2, 3, 1, 0]
                },
                explanation: "Reconocimiento (BY): citar al autor original; No comercial (NC): sin uso comercial; No derivadas (ND): el autor se reserva algunos derechos; Misma licencia / Compartir igual (SA): distribuir bajo la misma licencia."
            },
            {
                question: "Los foros son sitios web utilizados para compartir opiniones y comentarios en torno a un mismo _______.",
                options: [
                    "Interés",
                    "Tema",
                    "Foro",
                    "Asunto"
                ],
                correct: 0,
                explanation: "El término exacto del temario es «interés»: un foro agrupa a personas en torno a un mismo interés o motivo de debate. Ojo: en el intento original se respondió «tema» y la plataforma lo puntuó como incorrecto, aunque sea casi sinónimo."
            },
            {
                question: "La forma de indicar los términos de la Licencia de Uso, es a través de un texto que resuma lo que se puede hacer con ella. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. Los términos de la licencia se comunican con un texto resumen legible que indica qué se puede y qué no se puede hacer con la obra, acompañado del texto legal completo."
            },
            {
                question: "La licencia recoge la voluntad del autor sobre:",
                options: [
                    "Su capacidad de expresarse libremente.",
                    "Los límites sobre el uso de su obra por terceras personas.",
                    "Su deseo de enriquecerse con su obra.",
                    "La distribución de su obra pero sólo si son libros."
                ],
                correct: 1,
                explanation: "La licencia expresa los límites y condiciones que el autor impone al uso de su obra por terceros (copia, distribución, modificación, uso comercial, etc.)."
            }
        ]
    }
};
