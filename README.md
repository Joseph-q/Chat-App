# ChatApp

Este proyecto consiste en una aplicación de chat básica desarrollada con Next.js en el frontend y Node.js en el backend, haciendo uso de las bibliotecas de socket.io para la emisión y escucha de mensajes en tiempo real.

## Iniciar el Cliente

Para poner en marcha el cliente, sigue estos pasos:

1. Navega a la carpeta del proyecto:

```bash
cd ChatApp
```

2. Instala las dependencias necesarias:

```bash
npm install
```

3. Ejecuta el servidor en modo de desarrollo:

```bash
npm run dev
```

El frontend estará disponible en [http://localhost:3000/](http://localhost:3000/).

Aparecerá una pantalla de inicio de sesión como la siguiente:
![startsesion](https://github.com/Joseph-q/Chat-App/assets/70987698/b58a65c5-7015-42a8-a112-a6e5c49f90b3)

## Iniciar el Servidor

Para iniciar el servidor, realiza los siguientes pasos:

1. Accede a la carpeta del servidor:

```bash
cd ChatApp/chat-server
```

2. Instala las dependencias necesarias:

```bash
npm install
```

3. Ejecuta el servidor:

```bash
npm run dev
```

El backend estará en funcionamiento en [http://localhost:8000/](http://localhost:8000/).

¡Listo! Ahora deberías tener la aplicación de chat ejecutándose localmente con el frontend en el puerto 3000 y el backend en el puerto 8000.

Ejemplos:

Aquí aparecerá tu lista de amigos. Si quieres hablar con alguien, haz clic en su nombre:
![friendlist](https://github.com/Joseph-q/Chat-App/assets/70987698/6db4d22f-0887-43a2-b366-534759451cd0)

Si recibes un mensaje, verás una flecha hacia abajo:
![someonemessage](https://github.com/Joseph-q/Chat-App/assets/70987698/fe45e6c6-841e-4509-85e7-ed182ad5e200)

Puedes responder a su mensaje con un "¡Hola Mundo!"
![recivedmessage](https://github.com/Joseph-q/Chat-App/assets/70987698/57855a5d-1691-410c-b079-e48d5e488fd6)
