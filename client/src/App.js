// import { useState } from "react";
// import styled, { ThemeProvider } from "styled-components";
// import Menu from "./components/Menu";
// import Navbar from "./components/Navbar";
// import { darkTheme, lightTheme } from "./utils/Theme";
// import React from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import { Home } from "./components/pages/Home";

// import Signin from "./components/Signin";
// import Search from "./components/pages/Search";
// import Video from "./components/pages/Video";



// const Container = styled.div`
//     display:flex;
    
// `;
// const Main = styled.div`
//     flex: 7;
//     background-color: ${({theme}) => theme.bg };
// `;
// const Warpper = styled.div`
//     padding-top: 5px;
//     padding-left: 8px;
//     padding-right: 5px;
// `;

// function App() {
//   const [darkMode , setDarkMode] = useState(true);
//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//     <Container>
//       <BrowserRouter>
//       <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
//       <Main>
//         <Navbar />
//         <Warpper>
//           <Routes>
//             <Route path="/">
//               <Route index element={<Home type="random"/>} />
//               <Route path="trends" element={<Home type="trend"/>} />
//               <Route path="subscriptions" element={<Home type="sub"/>} />
//               <Route path="search" element={<Search /> } />
//               <Route path="signin" element={<Signin />} />
//               <Route path="video">
//                 <Route path=":id" element={<Video />} />
//               </Route>
//             </Route>
//           </Routes>
//         </Warpper>
//       </Main> 
//       </BrowserRouter>
//     </Container>
//     </ThemeProvider>
//   );
// }

// export default App;



import React ,{  useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import Search from "./components/pages/Search";
import { useSelector } from "react-redux";
import { Home } from "./components/pages/Home";
import Video from "./components/pages/Video";
import axios from "axios";
import Messanger from "./components/pages/Messanger/Messanger";
const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { currentUser } = useSelector((state) => state.user);
  const [response, setResponse] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/python')
        .then((res) => setResponse(res.data));
      } catch (error) {
        console.error(error);
      }
    };
     getData();
  }, []);
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                < Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trends" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route path="search" element={<Search />} />
              
                  <Route
                    path="signin"  
                    element={currentUser ? <Home /> : <SignIn />}
                  />
                   <Route
                    path="messenger"  
                    element={currentUser ? <Messanger /> : <SignIn />}
                  />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;