import React,{ useEffect, useState } from 'react'
import './App.css'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'
import LoginSignupPage from './Components/LoginSignup/LoginSignupPage';
// import './LoginSignup.css'
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';

const App = () => {
  let heroData = [
    {text1:"Your Comfort", text2:"our satisfaction"},
    {text1:"Your Paradise", text2:"within grasp"},
    {text1:"One step" ,text2:"to Pradise"},
]
const [heroCount,setHeroCount]= useState(0);
const [playStatus ,setPlayStatus]=useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setHeroCount((count) => (count === 2 ? 0 : count + 1));
  }, 3000);

  return () => clearInterval(interval);
}, []);
  return (
    <Router>
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      
      <Routes>
        <Route path="/loginsignup" element={<LoginSignupPage/>} />
      </Routes>
    </div>
  </Router>
);
};

export default App;