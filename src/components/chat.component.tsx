import { socketContext } from "@/context/socket.context";
import { INewMessage } from "@/messages/message.interface";
import { useState, useContext, useId } from "react";
import ProfileNavbar from "./ProfileNavBar";
import UserMessages from "./Messages.component";
import { IUser } from "@/user/user.interface";

const Chat = ({
  userId,
  messages,
  handleSend,
  users,
}: {
  userId: string;
  messages: INewMessage[];
  handleSend: (message: string) => void;
  users: IUser[];
}) => {
  const socket = useContext(socketContext);
  const [newMessage, setNewMessage] = useState<string>("");

  const userMessages = messages.filter(
    (m) => m.from === userId || m.from === "YourSelf"
  );
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      handleSend(newMessage);
      socket.emit("new:message", { to: userId, content: newMessage });
      setNewMessage("");
    }
  };
  const user = users.filter((u) => u.userID === userId);


  return (
    <section className="flex flex-col bg-gray-200 h-screen">
      <ProfileNavbar username={user[0].username} isConnected={true} />
      <UserMessages userMessages={userMessages}></UserMessages>
      <div className="flex items-center justify-between p-4">
        <input
          type="text"
          className="flex-1 p-2 rounded-l-md border"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r-md"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default Chat;
