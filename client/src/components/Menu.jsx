import React, { useState } from 'react';
import styled from 'styled-components';
import Image1 from '../Images/logo2.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Rabot from './Robat.jsx';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import Chat from './Chat';
const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bgLighter };
  height: 100vh;
  color: ${({theme}) => theme.text };
  font-size:14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display:flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  margin-bottom: 5px;
  font-size:20px;
`;
const Image = styled.img`
  height: 35px;
`;
const Items = styled.div`
  display:flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 4px 0px;
  transition: transform 4s;
  border-radius:20px;
  padding:10px;
  &:hover{
    background-color:${({theme}) => theme.soft };
    -ms-transform: scale(1.2); /* IE 9 */
    -webkit-transform: scale(1.2); /* Safari 3-8 */
    transform: scale(1.2); 
   
  }
`;
const HR = styled.hr`
  margin : 5px 0px;
  border: 0.7px solid ${({theme}) => theme.soft };
`;
const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color:transparent ;
  border: 1px solid #3ea6ff;
  color:#3ea6ff;
  border-radius: 5px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display:flex;
  align-items: center;
  gap: 5px;

 
`;
const Title = styled.h2`
  font-size: 16px; 
  font-weight: bold;
  color: #aaaaaa;
  margin-bottom: 5px;
`;
const Menu = ({darkMode , setDarkMode}) => {
  const {currentUser} = useSelector(state=>state.user);
  const [open,   setOpen] = useState(false);
  const handleClick = () => {
    window.location.href = "http://127.0.0.1:5000/recomandation";
  };
  return (
    <>
    <Container>
      <Wrapper>
      <Link to="/" style={{ textDecoration: "none", color: "inherit"}}>
        <Logo>
          <Image src={Image1} />SmartTube
        </Logo>
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "inherit"}}>
        <Items>
          <HomeIcon fontSize="small"/>Home  
        </Items>  
      </Link> 
      <Link to="trends" style={{textDecoration:"none", color:"inherit"}}>
        <Items>
          <ExploreIcon fontSize="small" />Explore
        </Items>
      </Link>
      <Link to="subscriptions" style={{textDecoration:"none", color:"inherit"}}>
        <Items>
          <SubscriptionsIcon fontSize="small" />Subscriptions
        </Items>
      </Link>
      <HR/>
      <Title>Recommendations</Title>
      <Items onClick={handleClick}>
          <VideoLibraryIcon fontSize="small"/>Recommendations
      </Items>
      <HR/>
       {!currentUser && <><Login>
        Sign in to like videos, comment & subscribe.  
      <Link to="signin" style={{textDecoration:"none"}}>
        <Button><AccountCircleSharpIcon fontSize="small"/>Sign In</Button>
      </Link>
      </Login><HR/></>}
      <Title>Best of SmartTube</Title>
      <Link to="messenger" style={{textDecoration:"none", color:"inherit"}}>
      <Items >
        <LibraryMusicIcon fontSize="small"/>Chat with Firends
      </Items>
      </Link>
      <Items>
        <SportsBaseballIcon fontSize="small"/>Sports
      </Items>
    
      <Items>
        <SportsEsportsIcon fontSize="small"/>Gamming
      </Items>
      <Items>
        <NewspaperIcon fontSize="small"/>News
      </Items>
      <HR/>
      <Items>
        <SettingsIcon fontSize="small"/>Settings
      </Items>
      <Items>
        <HelpOutlineIcon fontSize="small"/>Help
      </Items>
      <Items onClick={() => setDarkMode(!darkMode)}>
        <SettingsBrightnessIcon fontSize="small"/>
        {darkMode ? "Light" : "Dark"} Mode
      </Items>
      {/* <Rabot/> */}
      </Wrapper>
    </Container>
    </>
  )
}
export default Menu