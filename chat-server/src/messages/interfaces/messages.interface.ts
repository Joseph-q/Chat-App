interface ICreateMessage {
  to: string;
  content: string;
}

interface IMessages {
  id: string;
  username: string;
  content: string;
}

export type { ICreateMessage, IMessages };
