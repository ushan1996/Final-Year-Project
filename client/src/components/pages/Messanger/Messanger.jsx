 import './messanger.css'
import React, { useEffect, useRef, useState } from 'react'
import Conversation from '../../conversations/Conversation'
import Message from '../../message/Message'
import ChatOnline from '../../chatOnline/ChatOnline'
import { useSelector } from 'react-redux'
import io from 'socket.io-client'

import axios from 'axios'
export default function Messanger() {
    const { currentUser } = useSelector((state) => state.user);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const socket = useRef();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const scrollRef = useRef();
    const [arrivalMessage, setArrivalMessage] = useState(null)
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  useEffect(() => {
    arrivalMessage &&
      currentChat.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);
    useEffect(()=>{
      socket.current.emit("addUser", currentUser._id);
      socket.current.on("getUsers",users=>{
        console.log(users)
      })
    })
    useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await axios.get("/conversation/" + currentUser._id);
            setConversations(res.data)
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
      }, [currentUser._id]);
      useEffect(() => { 
        const getMessages = async () => {
          try {
            const res = await axios.get("/message/" +  (currentChat ? currentChat._id : null));
            setMessages(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getMessages();
      }, [currentChat]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
          sender: currentUser._id,
          text: newMessage,
          conversationId: currentChat._id,
        };
    
        const receiverId = currentChat.members.find(
          (member) => member !== currentUser._id
        );
    
        socket.current.emit("sendMessage", {
          senderId: currentUser._id,
          receiverId,
          text: newMessage,
        });
    
        try {
          const res = await axios.post("/message", message);
          setMessages([...messages, res.data]);
          setNewMessage("");
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [messages]);
  return (
    <div className='messenger'>
        <div className="chatMenu">
        <div className="chatMenuWrapper">
        <input placeholder="Search for friends" className="chatMenuInput" />
        {conversations.map((c) => (
          <div className='fetchConvesation' onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c}  currentUser={currentUser}/>
          </div>
            ))}
        </div>
        </div>
        <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? <>
          
            <div className="chatBoxTop">
               {messages.map((m) => (
                  <div ref={scrollRef}>
                      <Message message={m} own={m.sender === currentUser._id} />
                  </div>
                  ))}
            </div>
          
          
          
         
            <div className="chatBoxBottom">
            <textarea className="chatMessageInput" placeholder="write something..." 
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}></textarea>
            <button className="chatSubmitButton" onClick={handleSubmit} >
                Send
            </button>
            </div>
            </>:  <span className="noConversationText">Open a convasation to  start a chat</span>}
        </div>
        </div>
    </div>
  )
}
