import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Comment from './Comment';
const Container =  styled.div``;
const NewComment =  styled.div`
    display:flex;
    align-items: center;
    gap: 10px;
`;
const Avator =  styled.img`
    width: 50px;
    height: 50px;  
    border-radius: 50%;
    padding:7px;
`;
const Input =  styled.input`
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.soft } ;
    background-color: transparent;
    outline: none;
    padding: 5px;
    width:100%; 
    color: ${({theme}) => theme.text };
`;
const AddComment = styled.button`
background-color:${({theme}) => theme.text };
font-weight: 500;
color: ${({theme}) => theme.bg };
border: none;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`;
export const Comments = ({videoId}) => {
    const { currentUser } = useSelector((state) => state.user);
    const[newMessages , setNewMessages] = useState("");
    const [comments, setComments] = useState([]);
    const { currentVideo } = useSelector((state) => state.video);
    useEffect(() => {
      const fetchComments = async () => {
        try {
          const res = await axios.get(`/comments/${videoId}`);
          setComments(res.data);
        } catch (err) {}
      };
      fetchComments();
    }, [videoId]);
    const hadleSubmit = async (e)=>{
      // e.preventDefault();
      const message = {
        desc: newMessages,
        videoId: currentVideo._id,
      };
      // // const receiverId = currentChat.members.find(member=> member !== user._id)
      // // socket.current.emit("sendMessage",{
      // //     senderId:user._id,
      // //     receiverId,
      // //     text: newMessages
      // // })
      try{
          const res = await axios.post("/comments",message);
          console.log(res.data)
          window.location.reload()
      }catch(err){
          console.log(err);
      }
  };
  return (
    <Container>
        <NewComment>
        {currentUser !== null ? ( <Avator src={currentUser.img}/>):( <Avator src="https://firebasestorage.googleapis.com/v0/b/smarttube-b0596.appspot.com/o/default.png?alt=media&token=66493d31-ee5a-42aa-9822-f97cb23ee54c"/>)}
           
            <Input placeholder='Add aComment ...' onChange={(e)=>setNewMessages(e.target.value)}
                        value={newMessages} />
            <AddComment  onClick={hadleSubmit}>Submit</AddComment>
        </NewComment>
        {comments.map(comment=>(
        <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  )
}
