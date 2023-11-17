import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const MessageModel = mongoose.model("Messages", messageSchema);


export { MessageModel };
