import Chat from "../models/chat.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/Socket.js";
import { io } from "../socket/Socket.js";

const getMessages = async (req, res) => {
    try{
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const chat = await Chat.findOne({
            participants: {$all: [senderId, userToChatId]},
        }).populate("messages"); //NOT REFERENCE BUT ACTUAL MESSAGES

        if(!chat) 
            return res.status(200).json([]);
        
        const messages = chat.messages; 
        res.status(200).json(messages);
    }
    catch(error){
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

const sendMessage = async (req, res) => {
    try{
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let chat = await Chat.findOne({
            participants: {$all: [senderId, receiverId]},
        });

        if(!chat){
            chat = await Chat.create({
                participants:[senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage)
            chat.messages.push(newMessage._id);

        //will not run in parallel
        // await chat.save();
        // await newMessage.save();

        //will run in parallel
        await Promise.all([chat.save(), newMessage.save()]);

        //SOCKET.IO FUNCTIONALITY WILL GO HERE
        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverSocketId){
            //io.to(<socket_id>).emit() is used to send events to specific client
            io.to(receiverSocketId).emit('newMessage', newMessage)
        }


        res.status(201).json(newMessage);
    }
    catch(error){
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({error:"Internal server error"});
    }
};

export {getMessages, sendMessage};