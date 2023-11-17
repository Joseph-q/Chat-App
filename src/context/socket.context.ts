import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000/", { autoConnect: false });

export const socketContext = createContext(socket);
