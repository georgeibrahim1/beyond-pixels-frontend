import React, { useState } from 'react'
import './quizCard.css'

export default function QuizCard({quizObj , setUserStates, setCurrentQuizNumber }) {

    const [selectedChoice,setSelectedChoice] = useState([]);
    const [isAnswered,setIsAnswered] = useState(false);

    const handleChoiceClick = (choice) => {
        if (isAnswered) return;
        
        setIsAnswered(true);
        setSelectedChoice(choice);

        setUserStates(prev => {
            return {...prev, score: prev.score + choice[1]};
        })

    };

    const getButtonStyle = (choice) => {
        let classes = 'quiz-choice-button';

        if (!isAnswered) {
            return classes;
        }

        // Selected choice
        if (selectedChoice[0] === choice[0]) {
            classes += ' selected';
            if (choice[1] === 5) {
                classes += ' correct';
            } else if(choice[1] >= 1 && choice[1] < 5) {
                classes += ' good';
            } else {
                classes += ' incorrect';
            }
        } else {
            // Not selected choices
            classes += ' not-selected';
            if (choice[1] === 5) {
                classes += ' correct';
            }
        }

        return classes;
    };

    const handleNextClick = () => {
        setCurrentQuizNumber(prev => {
            if(prev == 85) {
                return 99999; // end of questions
            }

            return prev + 1;
        });

        setIsAnswered(false);
        setSelectedChoice([]);
    }

    return (
        <div className="quiz-card">
            <div className="quiz-question">
                {quizObj.question}
            </div>
            
            <div className="quiz-choices">
                {quizObj.choices.map((choice, index) => (
                    <button 
                        key={index}
                        className={getButtonStyle(choice)} 
                        onClick={() => handleChoiceClick(choice)}
                        disabled={isAnswered}
                    >
                        {choice[0]}
                    </button>
                ))}
            </div>
            
            <div className="quiz-next-section">
                {isAnswered && 
                    <button className="quiz-next-button" onClick={handleNextClick}>
                        Next Question
                    </button>
                }
            </div>
        </div>
    );
}
