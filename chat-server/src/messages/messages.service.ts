import { type IMessages } from './interfaces/messages.interface';
import { MessageModel } from './models/message.model';

const addMessage = async (username: string, content: string): Promise<void> => {
  const newMessage = new MessageModel({ username, content });
  await newMessage.save();
};

const findOwnMessage = async (
  username: string
): Promise<IMessages[] | null> => {
  return await MessageModel.findOne({ username });
};

export { addMessage, findOwnMessage };
