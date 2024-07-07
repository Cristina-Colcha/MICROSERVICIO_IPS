# Microservicio de VirusTotal API

Este repositorio contiene un microservicio Node.js que consume la API de VirusTotal para obtener información de direcciones IP. La aplicación está Dockerizada para facilitar su despliegue y ejecución en cualquier entorno compatible con Docker.

## Requisitos

- Docker instalado y configurado en tu máquina local.

## Configuración

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/microservicio-virustotal.git
   cd microservicio-virustotal
2. **CONTRUIR Y CORRER MICROSERVICIO**

docker build -t microservicio-reputacion .

docker run -p 2002:2002 --name reputacion microservicio-reputacion

http://localhost:2002/getIPInfo

### Notas Adicionales

- **Personalización**: Asegúrate de personalizar el archivo `README.md` con detalles específicos de tu proyecto, como el nombre del repositorio, los comandos específicos para tu configuración de Docker, y cualquier instrucción adicional relevante para los usuarios y colaboradores del proyecto.
  
- **Documentación**: Mantén tu `README.md` actualizado a medida que evoluciona el proyecto, agregando nuevas secciones según sea necesario para proporcionar la información más útil y relevante.

Este README proporciona una guía básica para que los usuarios y colaboradores puedan entender y usar tu microservicio Dockerizado que consume la API de VirusTotal de manera efectiva.
