import React, { useReducer, useState } from 'react'
import { QuizzesData } from '../features/game/data/quizzes';
import QuizCard from '../components/quizCard';
import EditUserForm from '../components/editUserForm';
import { useNavigate } from 'react-router';
import './gamePage.css';
import '../components/buttons.css';

export default function GamePage() {

    const navigate = useNavigate();

    const [userStates,setUserStates] = useState({
        userName: "Player",
        userIcon: "🐍",
        score: 0,
    }); // TODO: add it to local storage

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

    const [currentQuizNumber,setCurrentQuizNumber] = useState(99999); // TODO: add it to local storage
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditUser = () => {
        setShowEditForm(true);
    }

    if (currentQuizNumber === 99999) {
        return (
            <div className="game-page">
                <div className="game-container">
                    <div className="game-over">
                        <h1 className="game-over-title">Game Complete!</h1>
                        <p className="game-over-score">
                            Final Score: <span className="user-score-value">{userStates.score}</span>
                        </p>
                        <div className="game-over-actions">
                            <button className="btn btn-primary" onClick={() => {
                                setCurrentQuizNumber(1);
                                setUserStates(prev => ({...prev, score: 0}));
                            }}>
                                Play Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="game-page">
            <div className="game-container">
                <div className="user-info-header">
                    <div className="user-profile">
                        <span className=''>
                            {userStates.userIcon}
                        </span>
                        <div className="user-details">
                            <span className="user-name">
                                {userStates.userName || "Player"}
                            </span>
                            <div className="user-score">
                                Score: <span className="user-score-value">{userStates.score}</span>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="user-actions">
                        <button className="edit-user-button" onClick={handleEditUser}>
                            Edit Profile
                        </button>
                    </div>
                </div>

                <div className="game-stats">
                    <div className="stat-card">
                        <span className="stat-value">{currentQuizNumber}</span>
                        <span className="stat-label">Question</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{userStates.score}</span>
                        <span className="stat-label">Total Score</span>
                    </div>
                </div>

                <div className="quiz-section">
                    <QuizCard 
                        quizObj={QuizzesData[currentQuizNumber-1]} 
                        setUserStates={setUserStates} 
                        setCurrentQuizNumber={setCurrentQuizNumber} 
                        setLastAnsweredState={setLastAnsweredState}
                    />
                </div>

                {showEditForm && (
                    <div className="modal-overlay" onClick={() => setShowEditForm(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <EditUserForm 
                                userStates={userStates} 
                                setUserStates={setUserStates}
                                onClose={() => setShowEditForm(false)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
