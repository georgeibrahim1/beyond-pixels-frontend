import React, { useEffect, useReducer, useState } from 'react'
import { QuizzesData } from '../features/game/data/quizzes';
import QuizCard from '../components/quizCard';
import EditUserForm from '../components/editUserForm';
import './gamePage.css';
import '../components/buttons.css';

export default function GamePage() {

    const [userStates, setUserStates] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser
            ? JSON.parse(storedUser)
            : { userName: "Player", userIcon: "🐍", score: 0 };
    });

    const [currentQuizNumber, setCurrentQuizNumber] = useState(() => {
        const storedCurrentQuizNumber = localStorage.getItem("currentQuizNumber");
        return storedCurrentQuizNumber ? JSON.parse(storedCurrentQuizNumber) : 1;
    });

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(userStates));
    }, [userStates]);

    useEffect(() => {
        localStorage.setItem("currentQuizNumber", currentQuizNumber.toString());
    }, [currentQuizNumber]);

    

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
