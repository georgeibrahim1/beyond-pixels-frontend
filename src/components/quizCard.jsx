import React, { useState } from 'react'

export default function QuizCard({quizObj , setScore , rank}) {
    const [trueAnswer , setTrueAnswer] = useState(false);
    const [wrongAnswer , setWrongAnswer] = useState(false);

    const handleChoiceClick = (choice) => {
        if(choice === quizObj.Answer) {
            setTrueAnswer(true);
            setScore(prev => prev + 1)
        } else {
            setWrongAnswer(true);
            if(rank !== "beginner")
                setScore(prev => prev - 1)

        }
    };
    
    // TODO: add another elements with different styles based on wrong or correct states
    return (
    <div>
        <div>
            {quizObj.Question}
        </div>
        <div>
        {quizObj.choices.map((choice) => {
            <button key={choice} onClick={()=> handleChoiceClick(choice)}> </button>
        })}
        </div>
    </div>
  )
}
