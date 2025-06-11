# 📄 README - Prueba de carga con K6

Este proyecto contiene una prueba de carga usando **K6** para validar el comportamiento del endpoint de login de [FakeStoreAPI](https://fakestoreapi.com/auth/login), con el objetivo de alcanzar 20 TPS, tiempos de respuesta menores a 1.5 segundos y una tasa de error inferior al 3%.

---

## ✅ Requisitos

Asegúrate de tener instalado:

- [K6](https://k6.io/docs/getting-started/installation/) (versión recomendada: v0.49.0 o superior)
- [Node.js](https://nodejs.org/) si deseas agregar integraciones adicionales (opcional)
- Sistema operativo: macOS (probado en Mac M1)


---

## 🚀 Ejecución del test

1. Abre la terminal y navega hasta el directorio del proyecto:

  cd /Users/humberto-sosa/K6

2. Ejecuta el test de carga:

  k6 run login_test.js

  ## Evidencia
  ### Script
  ![Captura de pantalla 2025-06-11 a la(s) 6 03 26 p m](https://github.com/user-attachments/assets/8ce6291a-092c-4a56-b963-8292608a7582)

  ### Reporte
  ![Captura de pantalla 2025-06-11 a la(s) 5 25 10 p m](https://github.com/user-attachments/assets/7f7f58e7-9674-4ae1-9948-873d95210cd1)


## 📊 Reporte de resultados

K6 muestra los resultados directamente en la consola al finalizar la ejecución. Si deseas generar un reporte JSON, puedes:

  k6 run login_test.js --out json=resultado.json


## 📌 Datos de entrada

Los usuarios están definidos en el archivo users.csv:

user,passwd
donero,ewedon
kevinryan,kev02937@
johnd,m38rmF$
derek,jklg*_56
mor_2314,83r5^_


## 🧪 Conclusiones

 ### Archivo separado: conclusiones.txt con detalles técnicos. Resumen breve:

  ✅ Se alcanzaron los 20 TPS requeridos en escenarios de prueba.<br>
  ✅ El 100% de las respuestas estuvieron por debajo de 1.5s.<br>
  ✅ No se detectaron errores mayores ni timeouts en los intentos.

### Impedimentos o dificultades:
  🧩 Manejo inicial de rutas de archivos CSV en K6.<br>
  🔐 Configuración del entorno con permisos (uso de token para subir a GitHub).<br>
  📂 Generar reportes en HTML requiere pasos adicionales (output JSON + convertidor).
