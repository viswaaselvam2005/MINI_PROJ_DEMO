import React from 'react';
import './StoryUI.css'; 
import Navbar from '../Navbar/NavBar';
function StoryUI({SetShow}){
  return (
    <div>
      <Navbar/>
    <div className="container">
      <div className="content">
        <h1>Magical Stories for<br /> Brave Little Dreamers</h1>
        <p>
        StoryZi is a pioneering AI storyteller dedicated to creating personalized children's stories that nurture emotional well-being. Each tale is crafted to help young readers find solace, understanding, and strength during challenging times, making every story a comforting companion in their journey.
        </p>
        <button className="btn" onClick={SetShow}>Start your adventure</button>
      </div>
    </div>
    </div>
  );
};

export default StoryUI;
