import { useState } from 'react';
import { GameLogic } from './components/GameLogic';
import "./App.css"

function App() {
  
  const [play, changePlay] = useState(false)

  function playButton(){
    changePlay(true)
  }

  return(
    <div>
        {play ? <GameLogic /> : <div className="button"><button onClick={playButton}>Play</button></div>}
    </div>
    
  )
}

export default App;
