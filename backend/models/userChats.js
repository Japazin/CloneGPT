import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  history: [
    {
      role: {
        enum: ["user", "admin"],
        type: String,
        required: true,
      },
      parts: [
        {
          text: {
            type: String,
            required: true,
          },
        },
      ],
      img: {
        type: String,
        required: false,
      },
    },
  ],
},{
    timestamps: true,
});
export default mongoose.models.chat || mongoose.model("UserChats", ChatSchema);
