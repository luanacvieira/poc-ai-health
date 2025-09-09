import React from 'react';

const Summary = ({ transcriptions }) => {
    const summaryData = transcriptions.map(transcription => ({
        id: transcription.id,
        summary: transcription.text.substring(0, 100) + '...' // Example summary logic
    }));

    return (
        <div>
            <h2>Summary of Transcriptions</h2>
            <ul>
                {summaryData.map(item => (
                    <li key={item.id}>
                        <strong>Transcription ID: {item.id}</strong>
                        <p>{item.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Summary;