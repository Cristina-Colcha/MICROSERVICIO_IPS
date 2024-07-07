# Microservicio para Escanear URL con VirusTotal

Este proyecto implementa un microservicio en Node.js para escanear una URL utilizando la API de VirusTotal. El servicio expone una API RESTful que permite enviar una URL y obtener los resultados del escaneo.

## Requisitos

- Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

## Estructura

├── index.js         # Punto de entrada del servidor
├── package.json     # Configuración de npm y dependencias
├── swagger.json     # Documentación de la API en formato Swagger
└── README.md        # Este archivo


## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://tu-repositorio.git
   cd MICROSERVICIO_URL

Documentación de la API:

Abre tu navegador y visita http://localhost:2003/api-docs para ver la documentación de Swagger y probar la API.

Escanear una URL:

Puedes enviar una solicitud GET a http://localhost:2003/scan-url para escanear una URL. Por ejemplo
curl http://localhost:2003/scan-url?url=8.8.8.8

## Contribucion

Edwin Proaño - Cristina Colcha

 ## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

### Explicación del README.md

- **Descripción del Proyecto**: Breve introducción al propósito del proyecto.
- **Requisitos**: Lista de requisitos previos para poder ejecutar el proyecto.
- **Instalación**: Pasos para clonar el repositorio y instalar las dependencias necesarias.
- **Configuración**: Instrucciones para configurar el proyecto, incluyendo el manejo de claves API.
- **Uso**: Instrucciones detalladas sobre cómo ejecutar el servidor, acceder a la documentación de la API y cómo realizar una solicitud para escanear una URL.
- **Estructura del Proyecto**: Descripción de los archivos y carpetas principales en el proyecto.
- **Contribución**: Guía para aquellos que deseen contribuir al proyecto.
- **Licencia**: Información sobre la licencia bajo la cual se distribuye el proyecto.





