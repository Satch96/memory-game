import { useState } from 'react';
import { Card } from './Card';
import "./Game.css"

function GameLogic(props){

    const [score, countScore] = useState(0);
    const [highScore, countHighScore] = useState(0);
    const [letters, addLetters] = useState([]);
    const [gameState, changeGameState] = useState(true)
    
    function getValue(e){

        for (let i = 0; i < letters.length; i++){
            
            if (e.target.innerHTML === letters[i]){
                changeGameState(false)
                console.log("game over")
            }
        }

        addLetters([...letters,e.target.innerHTML])
        countScore(score + 1)

    }

    function playAgain(){
        changeGameState(true)
        if (score-1 > highScore){
            countHighScore(score -1)
        }
        countScore(0)
        addLetters([])
    }

    if (gameState){
        return(
            <div>
                <Card getValue={getValue}/>
                <div className="currentscore">
                    <div>Score: {score}</div>
                    <div>High Score: {highScore > score ? highScore : score}</div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="currentscore end">
                <div>Score: {score -1}</div>
                <div>High Score: {highScore > score -1 ? highScore : score -1}</div>
                <button onClick={playAgain}>Play Again</button>
            </div>
        )
    }
    
        
}

export { GameLogic }