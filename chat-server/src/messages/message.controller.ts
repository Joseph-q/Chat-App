import { type Server as IoServer, type Socket } from 'socket.io';
import { type ICreateMessage } from './interfaces/messages.interface';

const messages = async (io: IoServer, socket: Socket): Promise<void> => {
  const createPrivMessage = async (args: ICreateMessage): Promise<void> => {
    const { content, to } = args;
    socket.to(to).emit('new:message', { content, from: socket.id });
  };
  socket.on('new:message', createPrivMessage);
};

export { messages };
