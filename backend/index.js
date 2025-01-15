import "dotenv/config";
import express from "express";
import ImageKit from "imagekit";
import cors from "cors";
import mongoose from "mongoose";
const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.post("/api/chats", async (req, res) => {
  const { userId, text } = req.body;
  try {
    //CREAT NEW CHT
    const newChat = new Chat({
      userId: userId,
      history: [{ role: "user", parts: [{ text }] }],
    });
    const savedChat = await chat.save();
    // CHECK IF CHAT EXISTS
    const userChats = await userChats.findOne({ userId: userId });
    // IF DOESNT EXIST CREATE NRE ONDE AND ADD THE CHAT IN THE ARRAY
    if (!userChats.length) {
      const newUserChats = new userChats({
        userId: userId,
        chats: [
          {
            _id: savedChat.id,
            title: text.substring(0, 40),
          },
        ],
      });
    }else{
      //IF EXISTS PUSH THE CHAT TO THE EXISTING ARRAY
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("error creating chat");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connect();
});
