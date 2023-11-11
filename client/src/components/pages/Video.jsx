// import { useEffect, useState } from "react";
// import React from 'react';
// import styled from 'styled-components';
// import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
// import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
// import SendAndArchiveRoundedIcon from '@mui/icons-material/SendAndArchiveRounded';
// import ContentCutRoundedIcon from '@mui/icons-material/ContentCutRounded';
// import axios from "axios";
// import { Comments } from '../Comments';
// import { Card } from '../../Card';
// import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { format } from 'timeago.js';
// import { dislike, fetchSuccess, like } from "../../redux/videoSlice";
// import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import { subscription } from "../../redux/userSlice";
// import Recommendation from "../Recommendation";
// const Container = styled.div`
//   display: flex;
//   gap: 24px;
// `;
// const Content = styled.div`
//   flex:5;
// `;
// const VideoWrapper = styled.div``;
// const Title = styled.h1`
//   font-size: 20px;
//   font-weight: 700;
//   margin-top: 8px;
//   margin-bottom: 8px;
//   color: ${({theme}) => theme.text };
// `;
// const Details = styled.div`
//   display:flex;
//   align-items: center;
//   justify-content: space-between;
// `;
// const Info = styled.span`
//   color: ${({theme}) => theme.textSoft };
//   font-size: 15px;
// `;
// const Buttons = styled.div`
//   display:flex;
//   gap: 20px;
//   color: ${({theme}) => theme.text };
// `;
// const Button = styled.div`
//   display:flex;
//   align-items: center;
//   gap: 5px;
//   font-size: 15px;
//   cursor: pointer;
// `;
// const HR = styled.hr`
//   margin : 5px 0px;
//   border: 0.6px solid ${({theme}) => theme.soft };;
// `;

// const Chennel = styled.div`
//   display:flex;
//   justify-content: space-between;
// `;
// const ChennelInfo = styled.div`
//   display:flex;
//   gap: 5px;
// `;
// const Image = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   padding:7px;
// `;
// const ChennelDetails = styled.div`
//   display:flex;
//   flex-direction: column;
//   padding:7px;
//   color: ${({theme}) => theme.text };
// `;
// const ChennelName = styled.span`
//   margin-top: 5px;
//   font-weight: 700;
//   font-size: 20px;
// `;
// const ChennelCounter = styled.span`
//   margin-top: 1px;
//   font-weight: 500;
//   font-size: 13px;
//   color: ${({theme}) => theme.textSoft };
// `;
// const Description = styled.p`
//   margin-top: 10px;
//   font-weight: 500;
//   font-size: 15px;
//   color: ${({theme}) => theme.text };
// `;
// const SubcribeButton = styled.button`
//   margin-top: 10px;
//   background-color:#cc1a00;
//   font-weight: 700;
//   color:white;
//   border:none;
//   height: max-content;
//   padding: 10px 20px;
//   cursor: pointer;
//   border-radius: 5px;
// `;
// const VideoFrame = styled.video`
//   max-height: 490px;
//   width: 100%;
//   object-fit: cover;
// `;
// export const Video = () => {
// //   const {currentUser} = useSelector((state)=>state.user);
// //   const {currentVideo} = useSelector((state)=>state.video);
// //   // console.log(currentUser)
// //   // console.log(currentVideo)
// //   const dispatch = useDispatch();
// //   const path = useLocation().pathname.split("/")[2];
// //   //const [video, SetVideo] = useState();
// //  // const [channel, setChannel] = useState();
// //   const [channel, setChannel] = useState({});
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const videoRes = await axios.get(`/videos/find/${path}`);
// //         const channelRes = await axios.get(
// //           `/users/find/${videoRes.data.userId}`
// //         );
// //         setChannel(channelRes.data);
// //         console.log(channel.img)
// //         dispatch(fetchSuccess(videoRes.data));
// //       } catch (err) {}
// //     };
// //     fetchData();
// //   }, [path, dispatch]);

// const { currentUser } = useSelector((state) => state.user);
// const { currentVideo } = useSelector((state) => state.video);
// const dispatch = useDispatch();
// const path = useLocation().pathname.split("/")[2];
// const [channel, setChannel] = useState({});
// //console.log(path)
// useEffect(() => {
//   console.log("zffrfbueriufheruihfioeh")
//     const fetchData = async () => {
//       console.log("zffrfbueriufheruihfioeh")
//       try {
//         const videoRes = await axios.get(`/videos/find/${path}`);
//         const channelRes = await axios.get(
//           `/users/find/${videoRes.data.userId}`
//         );
//         setChannel(channelRes.data);
//         dispatch(fetchSuccess(videoRes.data));
//       } catch (err) {}
//     };
//     fetchData();
//   }, [path, dispatch]);

//   const handleLike = async () => {
//     await axios.put(`/users/like/${currentVideo._id}`);
//     dispatch(like(currentUser._id));
//   };
//   const handleDislike = async () => {
//     await axios.put(`/users/dislike/${currentVideo._id}`);
//     dispatch(dislike(currentUser._id));
//   };

//   const handleSub = async () => {
//     currentUser.subscribedUsers.includes(channel._id)
//       ? await axios.put(`/users/unsub/${channel._id}`)
//       : await axios.put(`/users/sub/${channel._id}`);
//     dispatch(subscription(channel._id));
//   };

//   return (
//     <Container>
//      <Content>
//       <VideoWrapper>
//       {/* <iframe width="100%" height="490" src="https://www.youtube.com/embed/VsUzmlZfYNg" title="Build and Deploy a Full Stack MERN Social Media App with Auth, Pagination, Comments | MERN Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
//       <VideoFrame src={currentVideo.videoUrl} controls />
//       </VideoWrapper>
//       <Title>{currentVideo.title}</Title>
//       <Details>
//         <Info>{currentVideo.views} views  {format(currentVideo.createdAt)}</Info>
//         <Buttons>
//         <Button onClick={handleLike}>
//               {currentVideo.likes.includes(currentUser._id) ? (
//                 <ThumbUpIcon fontSize="small"/>
//               ) : (
//                 <ThumbUpOutlinedIcon fontSize="small" />
//               )}{" "}
//               {currentVideo.likes.length}
//             </Button>
//             <Button onClick={handleDislike}>
//               {currentVideo.dislikes.includes(currentUser._id) ? (
//                 <ThumbDownIcon fontSize="small"/>
//               ) : (
//                 <ThumbDownOutlinedIcon fontSize="small" />
//               )}{" "}
//               Dislike
//             </Button>

//           <Button><ReplyAllRoundedIcon fontSize="small"/> Share</Button>
//           <Button><ContentCutRoundedIcon fontSize="small"/> Clip</Button>
//           <Button><SendAndArchiveRoundedIcon fontSize="small"/> Save</Button>
//         </Buttons>
//       </Details>
//       <HR/>
//       <Chennel>
//         <ChennelInfo>
//           <Image src={channel.img}/>
//           <ChennelDetails>
//             <ChennelName>{channel.name}</ChennelName>
//             <ChennelCounter>{channel.subscribers} subscribers</ChennelCounter>
//             <Description>{currentVideo.desc}</Description>

//           </ChennelDetails>
//         </ChennelInfo>
//         <SubcribeButton onClick={handleSub}>
//             {currentUser.subscribedUsers.includes(channel._id)
//               ? "SUBSCRIBED"
//               : "SUBSCRIBE"}
//           </SubcribeButton>
//       </Chennel>
//       <HR/>
//       <Comments videoId={currentVideo._id} />
//      </Content>
//       <Recommendation tags={currentVideo.tags} />
//     </Container>
//   )
// }

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { dislike, fetchSuccess, like } from '../../redux/videoSlice';
import axios from 'axios';
import { subscription } from '../../redux/userSlice';
import { format } from 'timeago.js';
import { Comments } from '../Comments';
import Recommendation from '../Recommendation';
//import Image1 from '../../Images/logo2.png';
//import Image1 from 'channel.img';
const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 40px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 420px;
  width: 100%;
  object-fit: cover;
`;
const Video = () => {
  const path = useLocation().pathname.split('/')[2];
  const [channel, setChannel] = useState({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    console.log('Enter to useEffect ');

    const fetchData = async () => {
      console.log('Enter to fetchData ');
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  // console.log(PF +channel.img )

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  if (currentVideo === null) {
    return 'Loading...';
  }
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo.videoUrl} controls />
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>
            {currentVideo.views} views • {format(currentVideo.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentUser !== null ? (
                <>
                  {' '}
                  {currentVideo.likes.includes(currentUser._id) ? (
                    <ThumbUpIcon />
                  ) : (
                    <ThumbUpOutlinedIcon />
                  )}{' '}
                  {currentVideo.likes.length}
                </>
              ) : (
                <>
                  <ThumbUpIcon />
                </>
              )}
            </Button>
            <Button onClick={handleDislike}>
              {currentUser !== null ? (
                <>
                  {currentVideo.dislikes.includes(currentUser._id) ? (
                    <ThumbDownIcon />
                  ) : (
                    <ThumbDownOffAltOutlinedIcon />
                  )}{' '}
                  Dislike
                </>
              ) : (
                <>
                  <ThumbDownIcon /> Dislike
                </>
              )}
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image
              src={
                channel.img
                  ? channel.img
                  : 'https://firebasestorage.googleapis.com/v0/b/smarttube-b0596.appspot.com/o/default.png?alt=media&token=66493d31-ee5a-42aa-9822-f97cb23ee54c'
              }
            />
            {/* <Image src={Image1}  /> */}
            {/* <img src={user.coverPicture ? PF + user.coverPicture : PF+"person/default-cover.gif"} alt="" className="profileCoverImage" /> */}
            {/* <img src="../../Images/logo2.png"/> */}
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
              <Description>{currentVideo.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>
            {currentUser !== null ? (
              <>
                {' '}
                {currentUser.subscribedUsers.includes(channel._id)
                  ? 'SUBSCRIBED'
                  : 'SUBSCRIBE'}
              </>
            ) : (
              'SUBSCRIBE'
            )}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={currentVideo._id} />
      </Content>
      <Recommendation tags={currentVideo.tags} />
    </Container>
  );
};

export default Video;
