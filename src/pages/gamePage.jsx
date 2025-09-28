import React, { useState } from 'react'
import { QuizzesData } from '../features/game/data/quizzes';
import QuizCard from '../components/quizCard';

export default function GamePage() {

    const [score,setScore] = useState(0); // TODO: add it to local storage
    const [user,setUser] = useState({
        name: "ok",
        photo: "",
    }); // TODO: add it to local storage
    const [rank,setRank] = useState("beginner"); // TODO: add it to local storage
    // TODO: Add rank photo based on score
    // TODO: Add popup achievement based on score
    const totalQuizzesNumber = QuizzesData.length; 
    const [currentQuizNumber,setCurrentQuizNumber] = useState(0); // TODO: add it to local storage

  return (
      <div>
        <div>
            {/* user stuff, rank , score, rankphoto -> button to see rankPage*/}
        </div>
        <div>
            <QuizCard quizObj={QuizzesData[currentQuizNumber-1]} setScore={setScore} rank={rank}/>
        </div>
    </div>
  )
}
