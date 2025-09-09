// Recorder.js
// Grava áudio com react-mic

import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

function Recorder({ onStop }) {
  const [record, setRecord] = useState(false);

  return (
    <div>
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button onClick={() => setRecord(true)}>Iniciar Gravação</button>
      <button onClick={() => setRecord(false)}>Parar Gravação</button>
    </div>
  );
}

export default Recorder;
