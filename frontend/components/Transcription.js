import React from 'react';

const Transcription = ({ transcribedText, onEdit, onSave }) => {
    return (
        <div>
            <h2>Transcription</h2>
            <textarea 
                value={transcribedText} 
                onChange={(e) => onEdit(e.target.value)} 
                rows="10" 
                cols="50" 
            />
            <br />
            <button onClick={onSave}>Save Transcription</button>
        </div>
    );
};

export default Transcription;