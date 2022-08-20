import React, {useContext} from 'react';
import { QuizContent } from '../Helpers/Context';
import "../App.css";

export default function MainMenu() {
    const { gameState, setGameState } = useContext(QuizContent);

  return (
    <div className="Menu">
    
    <button
    onClick={() => {
        setGameState("quiz");
    }}
    > 
    Start Quiz
    </button>
    </div>
  );
}
