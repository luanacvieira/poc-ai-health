import React, { useState } from 'react';
import Recorder from './components/Recorder';
import Transcription from './components/Transcription';
import Summary from './components/Summary';
import Prontuario from './components/Prontuario';

function App() {
  const [transcription, setTranscription] = useState('');
  const [summary, setSummary] = useState('');
  const [prontuario, setProntuario] = useState({});

  return (
    <div className="App">
      <h1>POC Saúde com IA</h1>
      <Recorder onStop={(audioBlob) => {
        // lógica para enviar áudio ao backend
      }} />
      <Transcription text={transcription} />
      <Summary summary={summary} />
      <Prontuario prontuario={prontuario} />
    </div>
  );
}

export default App;
