import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {format} from 'timeago.js';
const Container = styled.div`
    width:  ${(props)=>props.type !== "sm" && "320px"};
    margin-bottom: ${(props)=>props.type === "sm" ? "10px": " 25px"};
    cursor: pointer;
    display: ${(props)=>props.type === "sm" && "flex"}

`;
const Image = styled.img`
    width:${(props)=>props.type === "sm" ? "150px": "100%"};
    height: ${(props)=>props.type === "sm" ? "100px": " 190px"};
    border-radius: 10px;
    flex:1;
    margin-right: ${(props)=>props.type === "sm" && "15px"};
`;
const Details = styled.div`
    display: flex;
    margin-top: ${(props)=>props.type !== "sm" && "16px"};
    gap: 12px;
    flex:1;
`;
const ChanalImage = styled.img`
    width:38px;
    height: 38px;
    border-radius: 50%;
    display: ${(props)=>props.type === "sm" && "none"}
`;
const Texts = styled.div``;
const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme}) => theme.text };
`;
const ChannelName = styled.h2`
    font-size: 12px;
    color: ${({theme}) => theme.textSoft };
    margin: 0px 0px;
    margin-top: 5px;
`;
const Info = styled.div`
    font-size: 12px;
    color: ${({theme}) => theme.textSoft };
    margin-top: 5px;
`;
export const Card = ({type , video}) => {
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [channel, setChannel] = useState([]);
    useEffect(()=>{
    const fetchChannel = async () =>{
      const res = await axios.get(`users/find/${video.userId}`);
      setChannel(res.data);
    }
    fetchChannel();
  },[video.userId]); 
  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none"}}>
    <Container type={type}>
        <Image type={type} src={video.imgUrl}></Image>
        <Details type={type}>
            <ChanalImage type={type} src={channel.img ? channel.img :  "https://firebasestorage.googleapis.com/v0/b/smarttube-b0596.appspot.com/o/default.png?alt=media&token=66493d31-ee5a-42aa-9822-f97cb23ee54c"}/>


            <Texts>
                <Title>{video.title}</Title>
                <ChannelName>{channel.name}</ChannelName>
                <Info>{video.views} Views {format(video.createdAt)} </Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}
