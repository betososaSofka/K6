📄 README - Prueba de carga con K6

Este proyecto contiene una prueba de carga usando K6 para validar el comportamiento del endpoint de login de FakeStoreAPI, con el objetivo de alcanzar 20 TPS, tiempos de respuesta menores a 1.5 segundos y una tasa de error inferior al 3%.

✅ Requisitos

Asegúrate de tener instalado:

K6 (versión recomendada: v0.49.0 o superior)

Node.js si deseas agregar integraciones adicionales (opcional)

Sistema operativo: MacOS (probado en Mac M1)

🚀 Ejecución del test

Abre la terminal y navega hasta el directorio del proyecto:

cd /Users/humberto-sosa/K6

Ejecuta el test de carga:

k6 run login_test.js

Esto comenzará la prueba utilizando los datos en users.csv. Asegúrate de que el archivo CSV esté en la misma ruta.

📊 Reporte de resultados

K6 muestra los resultados directamente en la consola al finalizar la ejecución. Si deseas generar un reporte HTML, puedes:

Instalar el generador de reportes:

npm install -g k6-html-reporter

Ejecutar el script con salida en JSON:

k6 run login_test.js --out json=resultado.json

Generar el HTML:

k6-html-reporter --summary-export resultado.json --out report.html

El archivo report.html se generará en el mismo directorio y puedes abrirlo en tu navegador.
