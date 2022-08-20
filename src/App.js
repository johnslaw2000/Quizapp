import './App.css';
import React, { useState} from 'react';
import MainMenu from './Component/MainMenu';
import Quiz from './Component/Quiz';
import EndScreen from './Component/EndScreen';

import { QuizContent } from "./Helpers/Context";

function App() {
  const [gameState, setGameState ] = useState("menu");
 const [score, setScore] = useState(0)
  return (
    <div className="App">
    <h1>Quiz App</h1>
<QuizContent.Provider value={{gameState, setGameState, score, setScore }}>
{gameState === "menu" && <MainMenu/> }
{gameState === "quiz" && <Quiz/> }
{gameState === "endScreen" && <EndScreen/> }
</QuizContent.Provider>
    </div>
  ); 
}

export default App;
 