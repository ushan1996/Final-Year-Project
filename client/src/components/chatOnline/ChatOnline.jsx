import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";
import React from "react";
export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
 
  return (
    <div className="chatOnline">
     
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg"
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Ushan Jayamanne</span>
        </div>
    
    </div>
  );
}
