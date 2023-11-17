import * as http from 'http';
import { Server as IoServer, type Socket } from 'socket.io';
import { messages } from './messages/message.controller';
import { handleConnection } from './handlers/handleConnection';

const webSock = http.createServer().listen(8000, () => {
  console.log('listening at port 8000');
});

const io = new IoServer(webSock, {
  cors: { origin: 'http://localhost:3000', credentials: true }
});

const onConnection = (socket: Socket): void => {
  void handleConnection(io, socket);
  void messages(io, socket);
};

io.on('connection', onConnection);
