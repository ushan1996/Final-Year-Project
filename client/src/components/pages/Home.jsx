import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import { Card } from '../../Card';
import axios from 'axios';
const Container = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Home = ({type}) => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const fetchVideos = async () =>{
      const res = await axios.get(`videos/${type}`);
      setVideos(res.data);
      console.log("")
    }
    fetchVideos(); 
  },[type]); 
  return (
    <>
    <Container>
         
         {videos.map((video) => (
           <Card key={video._id} video={video}/>
         ))}
       </Container>
    </>
     
    
   
  )
}
