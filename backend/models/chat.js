import mongoose from "mongoose";

const userChatsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  chats: [
    {
      _id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      creatA: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
},{
    timestamps: true,
});
export default mongoose.models.userChat || mongoose.model("UserChats", userChatsSchema);    