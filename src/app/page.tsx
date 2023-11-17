"use client";
import { useState, useContext } from "react";
import Sidebar from "@/components/sidebar.component";
import Login from "@/components/login.component";
import { IUser } from "@/user/user.interface";
import { socketContext } from "@/context/socket.context";
import Chat from "@/components/chat.component";
import { INewMessage } from "@/messages/message.interface";

export default function Home() {
  const socket = useContext(socketContext);

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [messages, setMessages] = useState<INewMessage[]>([]);
  const [userId, setUserId] = useState<string>();

  socket.on("conected:users", (arg: IUser[]) => {
    const user=arg.map(u=> {
      return {...u, isSending:false}
    })
    setUsers(user)
  });

  socket.on("user:connected", (user:IUser) => {
    const allUsers = [...users];
    allUsers.push({...user,isSending:false});
    setUsers(allUsers);
  });

  const handleLogin = () => {
    setIsLogin((v) => !v);
  };
  if (!isLogin) {
    return <Login handleLogin={handleLogin}></Login>;
  }

  const HandleClick = (id: string) => {
    setUserId(id);
    setUsers(users.map(u=>{
      if(u.userID===id){
        return {...u, isSending:false}
      }
      return u
    }))

  };
  const handleSend = (message: string) => {
    setMessages([...messages, { from: "YourSelf", content: message }]);
    console.log(messages)
  };

  socket.on("new:message", (arg: INewMessage) => {
    setMessages([...messages, { from: arg.from, content: arg.content }]);

    const hola=users.map(u=>{

      if(userId===u.userID){
        return {...u, isSending:false}
      }
      if(u.userID===arg.from){
        return {...u, isSending:true}
      }
      return u
    })
    setUsers(hola)
  });

  return (
    <div className="flex flex-row">
      <section className="basis-1/4">
        <Sidebar users={users!} handleClic={HandleClick}></Sidebar>
      </section>
      {userId && (
        <section className="basis-3/4">
          <Chat userId={userId} messages={messages} handleSend={handleSend} users={users}></Chat>
        </section>
      )}
    </div>
  );
}
