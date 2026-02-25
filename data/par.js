export const questionsPAR = [
    {
        question: "¿Cuál es el rango de direcciones IP privadas para la clase B según la RFC 1918?",
        options: [
            "10.0.0.0 - 10.255.255.255",
            "172.16.0.0 - 172.31.255.255",
            "192.168.0.0 - 192.168.255.255",
            "169.254.0.0 - 169.254.255.255"
        ],
        correct: 1,
        explanation: "La RFC 1918 reserva el bloque 172.16.0.0/12 para redes privadas de clase B."
    },
    {
        question: "¿Qué protocolo de la capa de transporte garantiza la entrega ordenada y sin errores de los paquetes?",
        options: ["UDP", "ICMP", "TCP", "IP"],
        correct: 2,
        explanation: "TCP (Transmission Control Protocol) es orientado a conexión y garantiza la entrega fiable y ordenada de los datos."
    },
    {
        question: "En un switch Ethernet, ¿qué tabla se utiliza para asociar las direcciones MAC con los puertos físicos?",
        options: ["Tabla de enrutamiento", "Tabla ARP", "Tabla CAM (MAC Address Table)", "Tabla NAT"],
        correct: 2,
        explanation: "El switch utiliza la tabla CAM (Content Addressable Memory) o tabla de direcciones MAC para reenviar las tramas al puerto de destino correcto."
    }
];
