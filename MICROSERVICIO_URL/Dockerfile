# Usa la imagen base de Node.js
FROM node:14-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos necesarios (package.json y package-lock.json) al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Expone el puerto en el que la aplicación está escuchando
EXPOSE 2003

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["node", "index.js"]
