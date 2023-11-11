import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import React from "react";
export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios("/users/find/" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser()
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user
            ? user.img
              ? user.img
              : `https://www.pngarts.com/files/11/Avatar-Transparent-Images.png`
            : null
        }
        alt=""
      />
      <span className="conversationName">{user ? user.name  : null}</span>
    </div>
  );
}
