# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación al contenedor
COPY package.json package-lock.json index.js swagger.yaml /app/

# Instala las dependencias de la aplicación
RUN npm install

# Expone el puerto en el que corre tu aplicación
EXPOSE 2002

# Comando para iniciar la aplicación dentro del contenedor
CMD ["node", "index.js"]
