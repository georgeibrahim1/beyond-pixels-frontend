import React, { useReducer, useState } from 'react'
import { QuizzesData } from '../features/game/data/quizzes';
import QuizCard from '../components/quizCard';
import EditUserForm from '../components/editUserForm';

export default function GamePage() {

    const [userStates,setUserStates] = useState({
        userName: "",
        userIcon: "",
        score: 0,
        badge: "",
    }); // TODO: add it to local storage
    // TODO : default  user icon


    function lastAnsweredStateReducer(state,action) {
        if(action.score == 5) {
            return {mood: "happy"};
        } else if(1 <= action.score < 5 ) {
            return {mood: "good"};
        } else {
            return {mood: "sad"};
        }
    }

    // TODO: add it to local storage
    const [lastAnsweredState, setLastAnsweredState] = useReducer(lastAnsweredStateReducer, {mood: "happy"}); // setLastAnsweredState({score: #})

    // TODO: Add popup achievement based on score


    const [currentQuizNumber,setCurrentQuizNumber] = useState(0); // TODO: add it to local storage
    // TODO : handle 99999 Mode

    const handleEditUser = () => {
        <EditUserForm userStates={userStates} setUserStates={setUserStates}/>
    }

  return (
      <div>
        <div>
            <img src={userStates.userIcon?  userStates.userIcon : "default_icon"}/>
            <span>{userStates.userName}</span>
            <span>{userStates.score}</span>
            <button onClick={handleEditUser}> Edit User </button>
            <button onClick={}> </button>
        </div>
        <div>
            <QuizCard quizObj={QuizzesData[currentQuizNumber-1]} setUserStates={setUserStates} setCurrentQuizNumber={setCurrentQuizNumber} setLastAnswerState={setLastAnsweredState}/>
        </div>
    </div>
  )
}
