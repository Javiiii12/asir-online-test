// data/asgbd.js
// Módulo: Administración de Sistemas Gestores de Bases de Datos (2º ASIR)
// Nota: las claves con formato "Carpeta/Nombre" se agrupan en una carpeta
//       desplegable en la app (ver buildThemeStructure en js/app2.js).
//       Ej.: "Bloques UT1/Tarea 1" -> carpeta «Bloques UT1» > test «Tarea 1».

export const questionsASGBD = {
    "Tema 1: Instalación y configuración de un Sistema Gestor de Base de Datos": {
        "Test 1": [
            {
                question: "Como deseamos realizar pruebas antes de instalar MySQL en un entorno de producción, escogemos la versión estable frente a la de desarrollo. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Para producción se elige siempre la versión estable (GA, General Availability). La versión de desarrollo incluye cambios aún sin validar y no ofrece garantías de funcionamiento."
            },
            {
                question: "La lógica de negocio en un SGBD de tres capas se sitúa en el _______.",
                options: [
                    "Cliente / Nivel medio / Servidor",
                    "Nivel externo (vistas de usuario)",
                    "Nivel interno (almacenamiento físico)",
                    "Diccionario de datos (DD)"
                ],
                correct: 0,
                explanation: "El cuestionario admite como válidas las respuestas «cliente», «nivel medio» o «servidor». En una arquitectura de tres capas la lógica de negocio reside en la capa intermedia (servidor de aplicaciones), aunque el test acepta también las otras denominaciones."
            },
            {
                question: "El coste suele ser un factor importante a la hora de escoger el SGBD. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "El coste de licencias, soporte y hardware es uno de los criterios habituales al elegir un SGBD, junto al rendimiento, la escalabilidad, la compatibilidad o el soporte de la comunidad."
            },
            {
                question: "¿Cuáles de las siguientes afirmaciones referentes al Diccionario de Datos (DD) son ciertas? (Selección múltiple)",
                options: [
                    "Antes de realizar cualquier operación sobre los datos reales de la BD por petición del usuario, el SGBD consulta el DD.",
                    "Almacena todas las características de los datos guardados en las BD del servidor.",
                    "Es una parte fundamental de cualquier BD.",
                    "Se crea en el momento de la instalación del SGBD."
                ],
                correct: [0, 1, 3],
                explanation: "El test marca como correctas la a, la b y la d. El DD contiene los metadatos que el SGBD consulta antes de cada operación, describe los datos de las bases del servidor y se genera al instalar el SGBD. La opción c queda fuera según el criterio oficial del cuestionario, aunque técnicamente el DD sí es esencial."
            },
            {
                question: "La diferencia entre ODBC y JDBC es:",
                options: [
                    "ODBC conecta clientes con servidores.",
                    "ODBC es un conector, pero JDBC es una API.",
                    "JDBC conecta aplicaciones programadas en Java.",
                    "No la hay, porque funcionan igual."
                ],
                correct: 2,
                explanation: "JDBC (Java Database Connectivity) es la API que conecta aplicaciones escritas en Java con bases de datos, mientras que ODBC es un estándar de conexión independiente del lenguaje. La respuesta oficial del test es la c."
            },
            {
                question: "Los programas de código libre son aquellos que permiten el acceso y libre distribución del código fuente, pero no su modificación. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. El software libre permite estudiar, modificar y redistribuir el código fuente. Si no se permite la modificación, no se considera software libre (sería, como mucho, código abierto con licencia restrictiva o freeware)."
            },
            {
                question: "¿Cuál de las siguientes no es una función de un SGBD?",
                options: [
                    "Restricción de acceso.",
                    "Control de accesos concurrentes.",
                    "Gestión del espacio de almacenamiento del servidor.",
                    "Asegurar la integridad."
                ],
                correct: 2,
                explanation: "La gestión del espacio de almacenamiento físico del servidor corresponde al sistema operativo y al sistema de archivos. El SGBD sí se encarga de controlar accesos, concurrencia, integridad y recuperación."
            },
            {
                question: "Un Sistema Gestor de Bases de Datos consiste en una colección de datos relacionados, junto con un _______ que facilita el acceso y control de esos datos.",
                options: [
                    "Software / Programa",
                    "Conjunto de índices",
                    "Diccionario de datos",
                    "Lenguaje de consultas"
                ],
                correct: 0,
                explanation: "El test admite «software» o «programa». Un SGBD es la base de datos más el software que permite definir, consultar, modificar y controlar esos datos."
            },
            {
                question: "No existen programas que ayudan a la realización de la documentación de una BD en su origen. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Existen herramientas de modelado y documentación (MySQL Workbench, ERwin, PowerDesigner, DBeaver, DataGrip...) que generan y mantienen la documentación del diseño de la base de datos desde el principio."
            },
            {
                question: "El gestor de memoria intermedia se encarga de decidir qué datos quedan en memoria principal y cuáles se envían a memoria caché. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero según el criterio del test. El gestor de memoria intermedia (buffer manager) administra qué páginas de datos permanecen en memoria principal y cuáles se vuelcan, reduciendo los accesos a disco."
            }
        ],
        "Test 2": [
            {
                question: "Los SGBD monocapa:",
                options: [
                    "Se emplean en hogares y pequeños negocios.",
                    "Suelen estar incorporados dentro de paquetes ofimáticos.",
                    "Soportan macros.",
                    "Son más potentes que los multicapa.",
                    "Incorporan asistentes para crear formularios."
                ],
                correct: [0, 1, 2, 4],
                explanation: "Los SGBD monocapa (Access, Base...) se usan en hogares y pequeños negocios, van integrados en suites ofimáticas, admiten macros e incluyen asistentes para formularios. Son MENOS potentes que los multicapa, por eso la d es falsa."
            },
            {
                question: "La sentencia empleada para limpiar los ficheros LOG es: _______",
                options: [
                    "RESET MASTER",
                    "FLUSH LOGS;",
                    "DELETE LOGS;",
                    "CLEAR LOGS;"
                ],
                correct: 0,
                explanation: "Según el epígrafe de ficheros de registro de la UT1, RESET MASTER elimina/limpia los logs binarios, mientras que FLUSH LOGS solo cierra y abre nuevos ficheros para rotarlos. Ojo: en Moodle «FLUSH LOGS;» se puntuó 0,00 por el punto y coma; en respuesta corta las sentencias se guardan SIN el ; final (también se acepta FLUSH LOGS sin punto y coma). Es la versión en respuesta corta de la pregunta «¿Qué comando limpia los archivos de log en MySQL?» de la Tarea 1."
            },
            {
                question: "La arquitectura ANSI/SPARC establece los niveles de abstracción:",
                options: [
                    "Interno y externo.",
                    "Interno, lógico y conceptual.",
                    "Interno, conceptual y externo.",
                    "Lógico, conceptual y externo."
                ],
                correct: 2,
                explanation: "ANSI/SPARC define tres niveles: interno o físico, conceptual (esquema lógico global) y externo (vistas de usuario)."
            },
            {
                question: "En un SGBD de dos capas, las aplicaciones de usuario:",
                options: [
                    "Almacenan los datos en el cliente.",
                    "Se ejecutan en el lado cliente.",
                    "Se carga una copia de la base de datos en el cliente.",
                    "Se ejecutan en el lado servidor."
                ],
                correct: 1,
                explanation: "En la arquitectura cliente/servidor de dos capas la aplicación se ejecuta en el cliente y el SGBD reside en el servidor. Los datos no se copian ni se almacenan en el cliente."
            },
            {
                question: "La sentencia que se utiliza para ver las variables de sistema es:",
                options: [
                    "show variables;",
                    "set variable = valor;",
                    "show variables like \"%log%\";",
                    "show status;"
                ],
                correct: 0,
                explanation: "show variables; lista todas las variables de sistema. show status; muestra las de estado, set variable = valor; permite modificarlas y show variables like ... solo filtra un subconjunto."
            },
            {
                question: "Las reglas que establecen el paso entre niveles se denominan:",
                options: [
                    "Transiciones.",
                    "Correspondencias.",
                    "Reglas de paso.",
                    "No tienen un nombre específico."
                ],
                correct: 1,
                explanation: "En ANSI/SPARC las reglas que definen el paso (mapeo) entre el esquema conceptual y los esquemas interno/externo se denominan correspondencias (mappings), y son la base de la independencia de datos."
            },
            {
                question: "Los tipos de variables que emplea el SGBD son variables de _______",
                options: [
                    "sistema y de estado",
                    "sistema y estado.",
                    "sistema y configuración",
                    "usuario y de entorno"
                ],
                correct: 0,
                explanation: "La frase literal del temario es «variables de sistema y de estado»; la cadena a introducir es «sistema y de estado» (también se admite «sistema y estado»). En Moodle «sistema y estado.» se puntuó 0,00 por el punto final: la respuesta corta exige coincidencia literal sin puntuación."
            },
            {
                question: "La documentación de un SGBD debe de guardar, entre otros, los siguientes datos:",
                options: [
                    "Sistema operativo.",
                    "Capacidad de disco.",
                    "Tiempo que se ha invertido en la instalación.",
                    "Actualizaciones de las versiones del SGBD."
                ],
                correct: [0, 1, 3],
                explanation: "La documentación debe recoger el sistema operativo, la capacidad de disco y el histórico de actualizaciones de versión del SGBD. El tiempo invertido en la instalación no es un dato que se conserve."
            },
            {
                question: "MySQL sólo permite conectarse a él a través de un entorno gráfico de la empresa que lo desarrolla. ¿Verdadero o falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. MySQL admite la consola/CLI (mysql), conectores desde lenguajes de programación (JDBC, ODBC, PHP...) y herramientas gráficas de terceros (MySQL Workbench, phpMyAdmin, DBeaver...)."
            },
            {
                question: "Si deseamos instalar MySQL seleccionando distintas opciones en la instalación, deberemos escoger la distribución de _______",
                options: [
                    "código fuente",
                    "código fuente.",
                    "binaria",
                    "automática"
                ],
                correct: 0,
                explanation: "La distribución de código fuente permite compilar MySQL eligiendo opciones y características; la binaria ya viene precompilada. En Moodle la respuesta corta exige la cadena exacta «código fuente» sin punto final. Es la versión en respuesta corta de la pregunta «¿Qué tipo de instalación permite modificar características específicas?» de la Tarea 5."
            }
        ],
        "Bloques UT1/Tarea 1": [
            {
                question: "¿Qué formato adicional soporta MySQL además de SQL?",
                options: ["JSON", "YAML", "XML", "CSV"],
                correct: 0,
                explanation: "MySQL incorpora el tipo de dato JSON y funciones específicas para consultarlo desde la versión 5.7. YAML, XML y CSV no son formatos de datos nativos del motor."
            },
            {
                question: "¿Qué tipo de almacenamiento XML utiliza estructuras irregulares y da importancia al orden?",
                options: ["Basado en documentos", "Relacional", "Estructurado", "Jerárquico"],
                correct: 0,
                explanation: "El almacenamiento basado en documentos conserva estructuras irregulares y el orden de los elementos, propio del XML semiestructurado."
            },
            {
                question: "¿Qué nivel de la arquitectura ANSI/SPARC describe cómo se almacenan los datos?",
                options: ["Nivel interno", "Nivel lógico", "Nivel conceptual", "Nivel externo"],
                correct: 0,
                explanation: "El nivel interno (físico) describe cómo se guardan realmente los datos: ficheros, bloques, índices y métodos de acceso."
            },
            {
                question: "¿Qué tipo de arquitectura es adecuada para pocos usuarios?",
                options: ["Arquitectura de tres capas", "Arquitectura monocapa", "Arquitectura distribuida", "Arquitectura de dos capas"],
                correct: 1,
                explanation: "La arquitectura monocapa concentra interfaz, lógica y datos en la misma máquina; es la típica de uno o pocos usuarios (por ejemplo Microsoft Access)."
            },
            {
                question: "¿Qué archivo registra todas las conexiones y sentencias?",
                options: ["ERROR LOG", "GENERAL LOG", "BINARY LOG", "SLOW QUERY LOG"],
                correct: 1,
                explanation: "El general log registra cada conexión de cliente y todas las sentencias que recibe el servidor, por lo que es muy verboso."
            },
            {
                question: "¿Qué base de datos almacena el Diccionario de Datos en MySQL?",
                options: ["SYSTEM_SCHEMA", "INFORMATION_SCHEMA", "DATA_DICTIONARY", "MYSQL_SCHEMA"],
                correct: 1,
                explanation: "INFORMATION_SCHEMA es el esquema de solo lectura que expone los metadatos (diccionario de datos) de todas las bases del servidor."
            },
            {
                question: "¿Qué tipo de variable indica el estado del servidor MySQL?",
                options: ["Variable de estado", "Variable de sistema-estado", "Variable de entorno del sistema", "Variable de configuración"],
                correct: 0,
                explanation: "Las variables de estado (SHOW STATUS) informan de la actividad y el estado del servidor y son de solo lectura, frente a las variables de sistema."
            },
            {
                question: "¿Qué tipo de variable se relaciona con operaciones de lectura y escritura?",
                options: ["Tipo Com", "Tipo Threads", "Tipo Key", "Tipo Handler"],
                correct: 3,
                explanation: "Los contadores Handler_* registran las operaciones de lectura, escritura, actualización y borrado de filas."
            },
            {
                question: "¿Qué herramienta permite generar documentación visual del diccionario de datos en MySQL?",
                options: ["MySQL Workbench", "Access Designer MySQL", "SQL Server Studio", "Toad Data Generator MySQL"],
                correct: 0,
                explanation: "MySQL Workbench permite ingeniería inversa, modelado E/R y generación de documentación visual del diccionario de datos."
            },
            {
                question: "¿Qué estándar permite independencia entre SGBD y aplicaciones?",
                options: ["SOAP", "ODBC", "JDBC", "REST"],
                correct: 1,
                explanation: "ODBC es una interfaz estándar independiente del fabricante que desacopla la aplicación del SGBD; JDBC cumple esa función solo para Java."
            }
        ],
        "Bloques UT1/Tarea 2": [
            {
                question: "¿Qué modelo lógico define los datos en una estructura de árbol?",
                options: ["Modelo Relacional", "Modelo Orientado a Objetos", "Modelo Jerárquico", "Modelo XML"],
                correct: 2,
                explanation: "El modelo jerárquico organiza los datos en árbol invertido (padre-hijo), donde cada hijo tiene un único padre."
            },
            {
                question: "¿Qué comando limpia los archivos de log en MySQL?",
                options: ["RESET LOGS;", "FLUSH LOGS;", "DELETE LOGS;", "CLEAR LOGS;"],
                correct: 1,
                explanation: "FLUSH LOGS cierra y vuelve a abrir los archivos de log (rotación). Las otras tres órdenes no existen en MySQL."
            },
            {
                question: "¿Qué componente de un SGBD se encarga de traer datos desde el disco a la memoria principal?",
                options: ["Motor de evaluación de consultas", "Gestor de archivos", "Gestor de memoria intermedia", "Gestor de transacciones"],
                correct: 2,
                explanation: "El gestor de memoria intermedia (buffer manager) carga páginas del disco en RAM y decide cuáles se vuelcan de vuelta."
            },
            {
                question: "¿Qué herramienta permite generar documentación visual en MySQL?",
                options: ["Access Designer MySQL PLUS", "SQL Server Studio", "Toad Data Modeler", "Toad Data Modeler MySQL"],
                correct: 2,
                explanation: "Toad Data Modeler es la herramienta de modelado que genera documentación visual; el resto de nombres son inventados o pertenecen a otros fabricantes."
            },
            {
                question: "¿Qué tipo de variable contabiliza operaciones sobre la memoria de alta velocidad de consultas?",
                options: ["Tipo Qcache", "Tipo ComCache", "Tipo Key Cache", "Tipo Threads"],
                correct: 0,
                explanation: "Las variables Qcache_* miden los aciertos, inserciones y actividad de la caché de consultas (query cache)."
            },
            {
                question: "¿Cuál es una función principal de un SGBD?",
                options: ["Diseño de interfaces gráficas de BD", "Gestión del sistema operativo de BD", "Optimización de red en las conexiones a las BD", "Control de redundancia"],
                correct: 3,
                explanation: "Evitar y controlar la redundancia es función central del SGBD: garantiza integridad, consistencia y ausencia de anomalías al actualizar."
            },
            {
                question: "¿Dónde se puede obtener información relativa al espacio asociado a cada objeto en la base de datos?",
                options: ["Informe de Oracle", "Informe de Workbench", "Informe de Access", "Informe de SQL Server"],
                correct: 1,
                explanation: "Los informes de MySQL Workbench detallan el espacio y las características de cada objeto (tablas, vistas, índices) de la base de datos."
            },
            {
                question: "¿Qué tipo de variable se puede modificar en tiempo de ejecución?",
                options: ["Variable de estado", "Variable de usuario", "Variable de sistema", "Variable de entorno"],
                correct: 2,
                explanation: "Las variables de sistema son configurables y muchas pueden cambiarse en caliente con SET GLOBAL / SET SESSION; las de estado son de solo lectura."
            },
            {
                question: "¿Qué tipo de almacenamiento XML usa estructuras complejas?",
                options: ["Estructurado", "Relacional", "Basado en documentos", "Almacenamiento en ficheros planos"],
                correct: 0,
                explanation: "El almacenamiento XML estructurado trabaja con estructuras complejas y regulares, frente al basado en documentos, que admite estructuras irregulares."
            },
            {
                question: "¿Qué estructura almacena cada elemento hijo del elemento de mayor nivel como una chain en una tupla separada de la base de datos?",
                options: ["Estructura tabular", "Almacenamiento como cadena", "Representación en árbol", "Asignación a relaciones"],
                correct: 1,
                explanation: "En el almacenamiento como cadena, cada hijo del elemento raíz se guarda como una cadena (chain) en una tupla independiente."
            }
        ],
        "Bloques UT1/Tarea 3": [
            {
                question: "¿Qué tipo de documentación incluye los usuarios de la base de datos?",
                options: ["Informe de SQL Server", "Informe de Workbench", "Informe de Oracle", "Informe de Access"],
                correct: 1,
                explanation: "Los informes de MySQL Workbench recogen también las cuentas de usuario y sus privilegios dentro de la documentación de la BD."
            },
            {
                question: "¿Qué SGBD es relacional y orientado a objetos?",
                options: ["MySQL", "PostgreSQL", "DB2", "Oracle"],
                correct: 1,
                explanation: "PostgreSQL es un SGBD objeto-relacional: mantiene el modelo relacional y añade tipos definidos por el usuario, herencia de tablas y funciones."
            },
            {
                question: "¿Qué tipo de variable cuenta las operaciones sobre índices?",
                options: ["Tipo ComKey", "Tipo Threads", "Tipo Key", "Tipo Handler y Key"],
                correct: 2,
                explanation: "Los contadores Key_* miden las operaciones sobre la caché de claves/índices (lecturas, escrituras y aciertos)."
            },
            {
                question: "¿Qué tipo de SGBD permite acceso al código fuente?",
                options: ["SGBD monousuario", "SGBD privativo", "SGBD comercial", "SGBD libre"],
                correct: 3,
                explanation: "Un SGBD libre publica su código fuente y permite estudiarlo, modificarlo y redistribuirlo. «Comercial» no implica necesariamente acceso al código."
            },
            {
                question: "¿Qué tipo de base de datos puede construirse sobre una relacional?",
                options: ["Bases de datos XML", "Capa SQL", "Capa CSV", "Capa JSON"],
                correct: 0,
                explanation: "Las bases de datos XML (XML-enabled) se implementan como una capa sobre un SGBD relacional, mapeando documentos y elementos a tablas."
            },
            {
                question: "¿Qué tipo de arquitectura usa interfaz de formularios en el cliente?",
                options: ["Arquitectura de tres capas", "Arquitectura distribuida", "Arquitectura de dos capas", "Arquitectura monocapa"],
                correct: 0,
                explanation: "En la arquitectura de tres capas el cliente se dedica a la presentación (formularios), el servidor de aplicaciones a la lógica y el SGBD a los datos."
            },
            {
                question: "¿Qué tipo de independencia permite modificar el nivel interno sin afectar el conceptual?",
                options: ["Independencia lógica", "Independencia física", "Independencia estructural", "Independencia externa"],
                correct: 1,
                explanation: "La independencia física permite cambiar el esquema interno (discos, índices, ficheros) sin alterar el esquema conceptual ni las aplicaciones."
            },
            {
                question: "¿Qué tipo de variable facilita la optimización del motor InnoDB?",
                options: ["Tipo KeyInnoDB", "Tipo Threads", "Tipo InnoDB", "Tipo InnoDBCom"],
                correct: 2,
                explanation: "Las variables InnoDB_* exponen el estado del motor (buffer pool, filas, bloqueos) y sirven para ajustar su rendimiento."
            },
            {
                question: "¿Qué componente del SGBD asegura la consistencia de los datos ante fallos?",
                options: ["Gestor de memoria intermedia", "Gestor de consultas", "Gestor de transacciones", "Gestor de archivos"],
                correct: 2,
                explanation: "El gestor de transacciones garantiza las propiedades ACID mediante commit, rollback, bloqueos y recuperación ante fallos."
            },
            {
                question: "¿Cuál de los siguientes SGBD es de código libre y orientado a objetos?",
                options: ["Oracle", "PostgreSQL", "DB2", "Microsoft SQL Server"],
                correct: 1,
                explanation: "PostgreSQL es de código libre (licencia PostgreSQL) y objeto-relacional; Oracle, DB2 y SQL Server son productos propietarios."
            }
        ],
        "Bloques UT1/Tarea 4": [
            {
                question: "¿Qué tipo de almacenamiento XML da importancia a la colocación de las cosas en el lugar que les corresponde?",
                options: ["Relacional", "Basado en documentos", "Estructurado XML", "Jerárquico"],
                correct: 1,
                explanation: "El almacenamiento basado en documentos preserva la posición y el orden de cada elemento dentro del documento XML."
            },
            {
                question: "¿Cuál de los siguientes es un tipo de SGBD según el modelo lógico empleado?",
                options: ["Modelo secuencial", "Modelo de pago", "Modelo relacional", "Modelo monousuario"],
                correct: 2,
                explanation: "Atendiendo al modelo lógico los SGBD se clasifican en relacionales, jerárquicos, en red, orientados a objetos, etc. «Monousuario» es una clasificación por número de usuarios."
            },
            {
                question: "¿Qué tipo de base de datos usa XML como modelo de datos?",
                options: ["Base de datos orientada a objetos", "Base de datos mixtas relacional-XML", "Base de datos XML", "Base de datos jerárquica no XML"],
                correct: 2,
                explanation: "Una base de datos XML nativa adopta el propio modelo XML (nodos, elementos, atributos, orden) como modelo lógico de datos."
            },
            {
                question: "¿Qué herramienta permite obtener informes de tablas y vistas?",
                options: ["MySQL Workbench", "SQL Server Studio", "Toad Data Modeler", "Access Designer"],
                correct: 0,
                explanation: "MySQL Workbench genera informes a partir del catálogo con el detalle de tablas, vistas, columnas e índices."
            },
            {
                question: "¿En qué tipo de documentación se incluyen las restricciones y relaciones de una base de datos?",
                options: ["Documentación del sistema operativo", "Documentación del hardware", "Documentación del SGBD", "Documentación del usuario"],
                correct: 2,
                explanation: "La documentación del SGBD (o de la propia BD) recoge esquema, restricciones, relaciones, usuarios y privilegios."
            },
            {
                question: "¿Qué nivel de la arquitectura ANSI/SPARC representa las vistas de usuario?",
                options: ["Nivel lógico", "Nivel externo", "Nivel de red", "Nivel físico"],
                correct: 1,
                explanation: "El nivel externo está formado por las vistas parciales y adaptadas que cada usuario o aplicación tiene de la base de datos."
            },
            {
                question: "¿Qué versión de MySQL es adecuada para producción?",
                options: ["Versión de desarrollo", "Versión beta", "Versión estable GA", "Versión experimental"],
                correct: 2,
                explanation: "Para producción se elige la versión estable GA (General Availability); las de desarrollo, beta o experimental no ofrecen garantías."
            },
            {
                question: "¿Qué programa permite automatizar tareas repetitivas en SGBD monocapa?",
                options: ["Triggers", "Macros", "Functions", "Procedures"],
                correct: 1,
                explanation: "En entornos monocapa como Access, las macros permiten automatizar tareas repetitivas sin escribir código."
            },
            {
                question: "¿Qué tipo de estructura permite indexación en almacenamiento XML?",
                options: ["Elementos hijos", "Elementos padre", "Elementos extra", "Elementos raíz"],
                correct: 2,
                explanation: "Según el temario, los «elementos extra» son los que posibilitan la indexación dentro del almacenamiento XML."
            },
            {
                question: "¿Qué tipo de SGBD se ejecuta en la misma máquina del usuario?",
                options: ["SGBD de dos capas", "SGBD distribuido", "SGBD de tres capas", "SGBD monocapa"],
                correct: 3,
                explanation: "En un SGBD monocapa todo (interfaz, lógica y datos) corre en el equipo del usuario, sin servidor independiente."
            }
        ],
        "Bloques UT1/Tarea 5": [
            {
                question: "¿Qué estructura representa datos XML como una pareja de relaciones?",
                options: ["Representación en árbol", "Almacenamiento como cadena", "Estructura tabular", "Asignación a relaciones"],
                correct: 0,
                explanation: "Respuesta oficial del test: «Representación en árbol». Ojo: el enunciado («pareja de relaciones») sugeriría «Asignación a relaciones», pero la plataforma marca la a."
            },
            {
                question: "¿Qué tipo de instalación permite modificar características específicas?",
                options: ["Instalación por script", "Instalación automática", "Distribución binaria", "Distribución de código fuente"],
                correct: 3,
                explanation: "La distribución de código fuente permite compilar el motor ajustando opciones y modificando características; la binaria ya viene precompilada."
            },
            {
                question: "¿Qué sentencia permite visualizar las variables de sistema en MySQL?",
                options: ["SHOW STATUS;", "SHOW VARIABLES;", "SET variable=valor;", "SHOW TABLES;"],
                correct: 1,
                explanation: "SHOW VARIABLES; lista las variables de sistema. Nota: en el original aparecían 5 opciones por un fallo de importación (SET variable=valor; se partió en dos con el signo =); aquí se ha unificado en la c y se deja como respuesta única."
            },
            {
                question: "¿Qué archivo registra los errores críticos y el arranque del servidor MySQL?",
                options: ["BINARY LOG", "SLOW QUERY LOG", "GENERAL LOG", "ERROR LOG"],
                correct: 3,
                explanation: "El error log anota el arranque y la parada del servidor, además de errores críticos y advertencias."
            },
            {
                question: "¿Qué tipo de SGBD es adecuado para aplicaciones web?",
                options: ["MySQL", "DB2", "Access", "Oracle"],
                correct: 0,
                explanation: "MySQL es el SGBD libre habitual del stack web (LAMP/LEMP), por su rendimiento en lectura, sencillez y licencia."
            },
            {
                question: "¿Qué tipo de arquitectura encapsula la lógica de negocio en un servidor de aplicaciones?",
                options: ["Arquitectura monocapa", "Arquitectura de tres capas", "Arquitectura de dos capas", "Arquitectura distribuida"],
                correct: 1,
                explanation: "En tres capas la capa intermedia (servidor de aplicaciones) contiene la lógica de negocio, separada de la presentación y del almacenamiento."
            },
            {
                question: "¿Qué tipo de información debe incluir la documentación sobre las bases de datos?",
                options: ["Documentación del usuario", "Documentación del hardware", "Documentación del gráfico del modelo Entidad-Relación.", "Documentación del sistema operativo"],
                correct: 2,
                explanation: "El diagrama Entidad-Relación es pieza clave de la documentación: recoge entidades, atributos, claves y relaciones."
            },
            {
                question: "¿Qué herramienta permite comprobar la suma MD5?",
                options: ["mysqlmd5", "md5log", "mysqldumpslow", "md5.exe"],
                correct: 3,
                explanation: "md5.exe verifica la suma MD5 de la distribución descargada. mysqldumpslow, en cambio, analiza el slow query log."
            },
            {
                question: "¿Qué archivo registra las consultas menos rápidas?",
                options: ["GENERAL LOG", "SLOW QUERY LOG", "ERROR LOG", "BINARY LOG"],
                correct: 1,
                explanation: "El slow query log guarda las consultas que superan long_query_time, es decir, las más lentas, para su posterior optimización."
            },
            {
                question: "¿Qué archivo registra las sentencias que actualizan datos?",
                options: ["GENERAL LOG", "SLOW QUERY LOG", "BINARY LOG", "ERROR LOG"],
                correct: 2,
                explanation: "El binary log registra todos los cambios en los datos y el esquema; se usa para replicación y recuperación point-in-time."
            }
        ]
    },

    "Tema 2: Acceso a la información": {
        "Test 1": [
            {
                question: "Marca la opción incorrecta a la hora de asignar una máquina desde la que puede actuar un usuario usando GRANT.",
                options: [
                    "@%",
                    "@'192.168.12.%'",
                    "@conta.administracion.net",
                    "@'%'"
                ],
                correct: 0,
                explanation: "La opción incorrecta es @%: el comodín % debe ir entre comillas (@'%'). Según el criterio del test, son válidos el patrón de red entrecomillado, el nombre de host explícito y el comodín total entrecomillado."
            },
            {
                question: "Para visualizar los permisos que tiene un usuario empleamos el comando en consola: _______",
                options: [
                    "SHOW GRANTS",
                    "SHOW PRIVILEGES",
                    "SHOW USERS",
                    "SELECT * FROM mysql.user"
                ],
                correct: 0,
                explanation: "SHOW GRANTS (o SHOW GRANTS FOR 'usuario'@'host') muestra los privilegios concedidos a una cuenta, leyéndolos de las tablas de permisos."
            },
            {
                question: "Asocia el comando con su resultado:",
                match: {
                    lefts: ["RENAME", "GRANT", "RELOAD", "REVOKE"],
                    rights: [
                        "Refresca las tablas de permisos.",
                        "Quita permisos de un usuario.",
                        "Cambia el nombre de un usuario.",
                        "Asigna permisos a un usuario."
                    ],
                    correct: [2, 3, 0, 1]
                },
                explanation: "Correspondencia correcta: RENAME cambia el nombre de un usuario, GRANT concede privilegios, RELOAD recarga las tablas de permisos (FLUSH PRIVILEGES) y REVOKE retira privilegios."
            },
            {
                question: "Asocia el tipo de bloqueo con su acción:",
                match: {
                    lefts: ["Exclusivo", "Compartido"],
                    rights: [
                        "Se pueden leer por varios a la vez, pero no actualizar.",
                        "Una y sólo una transacción puede acceder al elemento, escribiendo datos."
                    ],
                    correct: [1, 0]
                },
                explanation: "El bloqueo exclusivo (X) deja acceder a una única transacción, que además puede escribir. El compartido (S) permite lecturas simultáneas de varias transacciones pero impide cualquier actualización."
            },
            {
                question: "LOCK TABLES bloquea tablas para el flujo actual. Si alguna de las tablas la bloquea otro flujo...",
                options: [
                    "Bloquea hasta que pueden adquirirse todos los bloqueos.",
                    "Deshace los bloqueos del flujo actual para no estorbar a otros flujos.",
                    "Depende del uso que se quiera dar al bloqueo.",
                    "La tabla es bloqueada por ambos simultáneamente."
                ],
                correct: 0,
                explanation: "LOCK TABLES espera (bloquea el flujo) hasta poder adquirir todos los bloqueos solicitados; no libera los que ya posee ni permite que dos flujos bloqueen la misma tabla a la vez."
            },
            {
                question: "Las vistas nos permiten:",
                options: [
                    "Proteger la base de datos.",
                    "Dar permisos a los usuarios.",
                    "Acceder a las tablas.",
                    "Proteger la base de datos y acceder a los datos."
                ],
                correct: 3,
                explanation: "Las vistas cumplen una doble función: dan acceso a los datos y protegen la BD, ya que permiten ocultar columnas o filas y mostrar a cada usuario solo la información que le corresponde."
            },
            {
                question: "Un rol viene definido por el conjunto de _______ que se agrupan para realizar una serie de funciones.",
                options: [
                    "Privilegios",
                    "Permisos",
                    "Usuarios",
                    "Tablas"
                ],
                correct: 0,
                explanation: "El término exacto del temario es «privilegios». Ojo: en la revisión del test «permisos» se marcó como error, aunque en la práctica ambos vocablos se usan casi como sinónimos."
            },
            {
                question: "En cuanto se ha realizado la comprobación de la cuenta de usuario y contraseña el usuario ya puede operar en el sistema. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Primero se autentica (usuario y contraseña), pero después aún queda la fase de autorización: el SGBD comprueba en las tablas de privilegios qué operaciones puede realizar esa cuenta."
            },
            {
                question: "Un usuario anónimo se define utilizando: ' ' en lugar de poner un nombre de usuario o insertando una entrada semejante en mysql.user. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. La cuenta anónima se crea con '' (cadena vacía) como nombre de usuario, o con una entrada equivalente en mysql.user, y coincide con cualquier conexión que no haya identificado un usuario concreto."
            },
            {
                question: "Para usar GRANT o REVOKE, debe tener el permiso GRANT OPTION además de los permisos que está dando o quitando. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. Para conceder o retirar privilegios se necesita el privilegio GRANT OPTION (además de los privilegios que se están otorgando o revocando), precisamente para evitar que un usuario conceda más permisos de los que posee."
            }
        ],
        "Test 2": [
            {
                question: "Para utilizar la sentencia CREATE USER:",
                options: [
                    "Basta con estar conectado en el sistema.",
                    "Hace falta tener el permiso CREATE USER.",
                    "Hace falta tener el permiso INSERT en la BD mysql.",
                    "Es mejor emplear otro método."
                ],
                correct: [1, 2],
                explanation: "El test marca la b y la c: hace falta el privilegio CREATE USER o, en versiones antiguas de MySQL, INSERT sobre la BD del sistema mysql (donde se almacenan las cuentas). No basta con estar simplemente conectado."
            },
            {
                question: "Selecciona la opción incorrecta. Al utilizar SET PASSWORD [FOR nombre_usuario] = 'contraseña':",
                options: [
                    "Cambiamos la contraseña de un usuario.",
                    "Encriptamos la contraseña con la función PASSWORD().",
                    "Nos obliga a introducir una contraseña ya encriptada.",
                    "Si no indico un nombre de usuario está cambiando la contraseña del que ejecuta la sentencia."
                ],
                correct: 2,
                explanation: "La afirmación falsa es la c. En la versión de MySQL del temario, SET PASSWORD = 'contraseña' acepta texto plano y lo cifra internamente; no obliga a introducir el hash ya encriptado (eso sería con IDENTIFIED BY PASSWORD)."
            },
            {
                question: "El deadlock:",
                options: [
                    "Termina al liberar la transacción con Rollback.",
                    "Es un fenómeno que ya no se produce nunca.",
                    "Se produce cuando entre dos transacciones se bloquean entre sí los recursos que necesita la otra.",
                    "Se arregla reiniciando la transacción que lleva más operaciones realizadas."
                ],
                correct: [2],
                explanation: "Aunque la plataforma la etiqueta como opción múltiple, solo la c es válida: dos transacciones se bloquean mutuamente esperando el recurso que retiene la otra. Se resuelve abortando (rollback) una de ellas, normalmente la de menor coste, no la que más operaciones lleva."
            },
            {
                question: "El DBA sólo debe preocuparse de que funcione el SGBD. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. El DBA también gestiona cuentas y permisos, copias de seguridad y recuperación, rendimiento, integridad, seguridad, diseño del esquema y planificación de capacidad, además de que el servicio esté operativo."
            },
            {
                question: "Al utilizar la palabra PASSWORD en la sentencia CREATE USER:",
                options: [
                    "Nos obliga a introducir la contraseña ya encriptada.",
                    "Esa opción no aparece.",
                    "Encriptamos la contraseña.",
                    "Creamos la contraseña."
                ],
                correct: 0,
                explanation: "Con IDENTIFIED BY PASSWORD 'hash' se entrega una contraseña ya cifrada (el hash). Si se usa IDENTIFIED BY 'texto' es el propio SGBD quien la encripta. Ojo: es justo lo contrario del caso de SET PASSWORD."
            },
            {
                question: "Deseo insertar un registro que dependerá de otro en otra tabla (el nuevo será hijo suyo). Accedo al registro padre para verificar que existe. Para evitar que me borren el registro padre entre la lectura y la modificación:",
                options: [
                    "Para qué perder el tiempo con la lectura, inserta directamente.",
                    "Lo borro yo para que no me lo borre nadie, y luego lo vuelvo a insertar.",
                    "Utilizo una SELECT...FOR UPDATE.",
                    "Utilizo una SELECT...LOCK IN SHARE MODE."
                ],
                correct: 3,
                explanation: "La respuesta oficial es la d: LOCK IN SHARE MODE coloca un bloqueo compartido sobre el registro padre, de modo que otros pueden leerlo pero no borrarlo ni modificarlo mientras dure la transacción. FOR UPDATE sería un bloqueo exclusivo (más restrictivo)."
            },
            {
                question: "Para poder realizar la operación de insertar, no es necesario que la vista incluya todas las columnas de la tabla que no tengan valor por defecto. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Para insertar a través de una vista, esta debe incluir todas las columnas NOT NULL sin valor por defecto de la tabla subyacente; si falta alguna, el SGBD no puede rellenarla y la inserción falla."
            },
            {
                question: "Selecciona las opciones correctas:",
                options: [
                    "Se puede utilizar DELETE en vistas sobre varias tablas.",
                    "Para poder insertar es necesario que la vista incluya todas las columnas de la tabla que no tengan un valor por defecto.",
                    "CREATE VIEW vista01 AS SELECT * FROM Jugadores;",
                    "En vistas multitabla se puede utilizar la sentencia INSERT, solo cuando se opera sobre una de las tablas."
                ],
                correct: [1, 2, 3],
                explanation: "El test marca b, c y d. La a es falsa: las vistas sobre varias tablas no son actualizables con DELETE (ni con UPDATE/INSERT salvo el caso indicado en d)."
            },
            {
                question: "Los bloqueos se emplean para evitar que se corrompan los datos por accesos simultáneos y preservar la integridad y coherencia de la BD. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. Los bloqueos son el mecanismo de control de concurrencia que serializa los accesos conflictivos y garantiza el aislamiento de las transacciones (ACID)."
            },
            {
                question: "Una cuenta de usuario (login) está formada por:",
                options: [
                    "El nombre de usuario y máquina desde la que se conecta.",
                    "Los permisos de acceso a bases de datos.",
                    "Nombre de usuario y contraseña.",
                    "El nombre de usuario."
                ],
                correct: 0,
                explanation: "En MySQL una cuenta se identifica como 'usuario'@'host': nombre de usuario y máquina (o patrón de máquinas) desde la que se conecta. La contraseña y los privilegios son atributos de la cuenta, no lo que la define."
            }
        ],
        "Test 3": [
            {
                question: "Para crear las cuentas de usuario:",
                options: [
                    "Podemos usar la sentencia CREATE USER.",
                    "Podemos utilizar una herramienta gráfica.",
                    "Podemos manipular las tablas de la BD mysql si tenemos permisos.",
                    "Necesitamos el permiso RELOAD activo y el permiso INSERT en la BD mysql."
                ],
                correct: [0, 1, 2, 3],
                explanation: "El test marca las cuatro: CREATE USER, una herramienta gráfica (Workbench, phpMyAdmin...) o manipular directamente mysql.user. Para esta última vía hacen falta INSERT sobre mysql y RELOAD (para recargar las tablas de permisos)."
            },
            {
                question: "Un dato de carácter personal es cualquier información que permite _______ a una persona.",
                options: [
                    "Identificar",
                    "Autenticar",
                    "Autorizar",
                    "Cifrar"
                ],
                correct: 0,
                explanation: "Es la definición legal (RGPD / LOPDGDD): un dato personal es toda información que permite identificar, directa o indirectamente, a una persona física (nombre, DNI, IP, correo, etc.)."
            },
            {
                question: "Si modificamos los permisos con GRANT, REVOKE o SET PASSWORD el servidor recarga las tablas de permisos automáticamente. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 0,
                explanation: "Verdadero. GRANT, REVOKE y SET PASSWORD actualizan y recargan las grant tables por sí mismos. Solo hace falta FLUSH PRIVILEGES cuando se manipulan las tablas mysql.* directamente con INSERT/UPDATE/DELETE."
            },
            {
                question: "¿Cuáles de las siguientes vistas se crean en la BD actual (Baloncesto)?",
                options: [
                    "CREATE VIEW baloncesto.vista01 AS SELECT * FROM Jugadores;",
                    "CREATE VIEW soccer.vista01 AS SELECT * FROM Jugadores;",
                    "CREATE VIEW vista01 AS SELECT * FROM Jugadores;",
                    "CREATE VIEW quidditch.vista01 AS SELECT * FROM Jugadores;"
                ],
                correct: [0, 2],
                explanation: "La a califica la vista con la BD actual (baloncesto) y la c no califica ninguna BD, por lo que se crea en la BD en uso. La b y la d apuntan a otras bases de datos (soccer y quidditch)."
            },
            {
                question: "Establecer una adecuada política de accesos es tarea del:",
                options: [
                    "Administrador de la base de datos.",
                    "De los propios usuarios del SGBD.",
                    "Dueño de la empresa.",
                    "Administrador de la red corporativa."
                ],
                correct: 0,
                explanation: "Definir cuentas, roles, privilegios y la política de accesos es responsabilidad del DBA (administrador de la base de datos), no del administrador de red ni de los propios usuarios."
            },
            {
                question: "En vistas a varias tablas, sólo se pueden listar las columnas de una de las tablas; a menos que en la definición de la vista se haya hecho utilizando _______",
                options: [
                    "INNER JOIN",
                    "JOIN a secas",
                    "LEFT JOIN / OUTER JOIN",
                    "CROSS JOIN"
                ],
                correct: 0,
                explanation: "El término exacto es INNER JOIN: en MySQL solo las vistas multitabla definidas con INNER JOIN son actualizables (permiten INSERT/UPDATE). No vale «JOIN a secas» ni los joins externos."
            },
            {
                question: "Si realizo el INSERT en la tabla mysql.user:",
                options: [
                    "No es la función PASSWORD(), porque se emplea otra.",
                    "Introduzco la contraseña directamente.",
                    "Encripto la contraseña usando la función PASSWORD().",
                    "Puedo introducir la contraseña encriptada directamente."
                ],
                correct: [2, 3],
                explanation: "Al insertar a mano en mysql.user no se admite texto plano: hay que cifrarlo con PASSWORD('texto') dentro del INSERT (c) o escribir directamente el hash ya encriptado (d). Por eso la b es falsa."
            },
            {
                question: "El bloqueo de tipo _______, restringe el acceso a los registros seleccionados a otras transacciones, aunque sea para lectura.",
                options: [
                    "Escritura / WRITE",
                    "Lectura / READ (compartido)",
                    "Compartido / SHARED",
                    "De intención / INTENTION"
                ],
                correct: 0,
                explanation: "El bloqueo de escritura (WRITE / exclusivo) impide que otras transacciones accedan a los registros, incluso solo para leerlo. El de lectura (READ / compartido) sí permite lecturas simultáneas."
            },
            {
                question: "De la política de accesos al SGBD depende la _______ del mismo.",
                options: [
                    "Seguridad",
                    "Velocidad de respuesta",
                    "Capacidad de almacenamiento",
                    "Portabilidad"
                ],
                correct: 0,
                explanation: "La política de accesos (quién puede conectarse, desde dónde y con qué privilegios) es el pilar de la seguridad del SGBD: confidencialidad, integridad y disponibilidad de los datos."
            },
            {
                question: "Todos los SGBD existentes hoy en día soportan el uso de roles de usuario. ¿Verdadero o Falso?",
                options: [
                    "Verdadero",
                    "Falso"
                ],
                correct: 1,
                explanation: "Falso. Los roles no son universales: MySQL no los incorporó hasta la versión 8.0, SQLite no los soporta y muchos motores NoSQL o versiones antiguas carecen de ellos."
            }
        ]
    }
};
