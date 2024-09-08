import { useState } from 'react';
import './App.css';
import StoryUI from './StoryUI/StoryUI';
import StoryGenerator from './StoryCreation/StoryGenerator';
function App() {
  const[isShow , setIsShow] = useState(false)
  function SetShow()
  {
   setIsShow(!isShow)
  }
  return (
    <div>
    {!isShow ? <StoryUI SetShow={setIsShow} /> : <StoryGenerator/>}
    </div>
  );
}

export default App;
