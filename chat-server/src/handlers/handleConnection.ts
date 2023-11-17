import { type Server, type Socket } from 'socket.io';

const handleConnection = async (io: Server, socket: Socket): Promise<void> => {
  const users: any = [];
  for (const [id, socket] of io.of('/').sockets) {
    users.push({
      userID: id,
      username: socket.handshake.auth.username
    });
  }
  socket.emit('conected:users', users);

  socket.broadcast.emit('user:connected', {
    userID: socket.id,
    username: socket.handshake.auth.username
  });

  socket.on('disconnect', () => {
    socket.emit('user:disconnect', {
      id: socket.id
    });
  });
};

export { handleConnection };
