import React, { useState } from 'react'

export default function QuizCard({quizObj , setUserStates , setLastAnsweredState, setCurrentQuizNumber }) {

    const [selectedChoice,setSelectedChoice] = useState([]);
    const [isAnswered,setIsAnswered] = useState(false);

    const handleChoiceClick = (choice) => {
        setIsAnswered(true);
        setSelectedChoice(choice);

        setUserStates(prev => {
            return {...prev, score: prev.score + choice[1]};
        })

        setLastAnsweredState({score: choice[1]});
    };

    // TODO: Add Styles BASED ON SCORE OF QUIZ
    const getButtonStyle = (choice) => {

        // no answer style
        if(!isAnswered) {
            return "" ;
        }

        // answered style -> selected choice
        if(selectedChoice[0] === choice[0]) {
            if(choice[1] == 5) {
                return "";
            }
        }

        // not selected
        if(choice[1] == 5) {
                return "";
            }
    };

    const handleNextClick = () => {
        setCurrentQuizNumber(prev => {
            if(prev == 85) {
                return 99999; // end of questions
            }

            return prev + 1;
        });
    }


    return (
        <div>
            <div>
                {quizObj.question}
            </div>
            <div>
            {
                quizObj.choices.forEach((choice) => {
                    return <button className={`${getButtonStyle}`} onClick={()=> {handleChoiceClick(choice)}}>
                        {choice[0]}
                    </button>
                })
            }
            </div>
            <div> {isAnswered && 
                <button onClick={handleNextClick}> Next Button </button> }
            </div>
        </div>
    );
}
