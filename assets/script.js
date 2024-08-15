// script.js
document.getElementById('generate').addEventListener('click', function() {
    var qrText = document.getElementById('text').value;
    if (!qrText) {
        alert("Por favor, ingresa un texto o URL.");
        return;
    }

    var qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: qrText,
        image: "./assets/logo2.png", // Ruta del logo
        dotsOptions: {
            color: "#000000", // Color de puntos
            type: "square" // Diseño cuadrado
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 5, // Margen alrededor del logo
        },
        cornersSquareOptions: {
            type: "square", // Esquinas cuadradas
            color: "#000000", // Color negro para las esquinas
        },
        cornersDotOptions: {
            type: "square", // Puntos en las esquinas también cuadrados
            color: "#000000", // Color negro
        },
        backgroundOptions: {
            color: "#ffffff", // Fondo blanco
        },
        qrOptions: {
            errorCorrectionLevel: "H", // Nivel alto de corrección para incluir logo
        },
    });

    var qrContainer = document.getElementById('qr-container');
    qrContainer.innerHTML = ""; // Limpiar contenido previo
    qrCode.append(qrContainer); // Añadir el QR al contenedor

    // Mostrar el contenedor del QR después de generar el código
    qrContainer.style.visibility = 'visible';
});
