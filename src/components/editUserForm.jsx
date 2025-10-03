import React, { useState } from 'react'
import './editUserForm.css'

export default function EditUserForm({userStates, setUserStates, onClose}) {
  const [formData, setFormData] = useState({
    userName: userStates.userName || '',
    userIcon: userStates.userIcon || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserStates(prev => ({
      ...prev,
      userName: formData.userName || 'Player',
      userIcon: formData.userIcon,
    }));
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="edit-user-form">
      {onClose && (
        <button className="form-close-button" onClick={onClose}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      
      <div className="edit-user-form-header">
        <h2 className="edit-user-form-title">Edit Profile</h2>
        <p className="edit-user-form-subtitle">Customize your player information</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName" className="form-label">
            Player Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="form-input"
            maxLength={20}
          />
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            className="form-button form-button-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="form-button form-button-primary"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
