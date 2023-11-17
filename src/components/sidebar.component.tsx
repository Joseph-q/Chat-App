import React, { useContext, useState } from "react";
import { socketContext } from "@/context/socket.context";
import { IUser } from "@/user/user.interface";
import { INewMessage } from "@/messages/message.interface";

const Sidebar = ({
  users,
  handleClic,
}: {
  users: IUser[];
  handleClic: (userID: string) => void;
}) => {
  const socket = useContext(socketContext);
  const user = users.filter((user) => user.userID !== socket.id);
  return (
    <div className="bg-gray-800 text-white p-4 h-screen">
      <h2 className="text-lg font-bold mb-4">Lista de amigos</h2>
      <ul>
        {user.map((user) => (
          <li
            key={user.userID}
            onClick={() => {
              handleClic(user.userID);
            }}
            className="mb-8 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            <div className="flex flex-row items-center">
              <span className="bg-green-500 w-2 h-2 rounded-full inline-block mr-2"></span>
              {user.username}
              {user.isSending && (
                 <span className="inline-block">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   className="h-4 w-4 transform rotate-180"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M19 14l-7-7m0 0l-7 7m7-7v18"
                   />
                 </svg>
               </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
