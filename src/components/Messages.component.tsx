import { INewMessage } from "@/messages/message.interface";

const UserMessages = ({userMessages}:{userMessages:INewMessage[]}) => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-4">
    {userMessages.map((msg, index) => (
      <div
        key={index}
        className={`${
          msg.from === 'YourSelf' ? 'text-right self-end' : 'text-left self-start'
        } mb-2`}
      >
        <p className="bg-white p-2 rounded-md inline-block">{msg.content}</p>
      </div>
    ))}
  </div>
  );
};

export default UserMessages
