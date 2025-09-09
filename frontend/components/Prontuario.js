// Prontuario.js
// Exibe prontuário estruturado

import React from 'react';

function Prontuario({ prontuario }) {
  return (
    <div>
      <h3>Prontuário</h3>
      <ul>
        <li><strong>Subjetivo:</strong> {prontuario.Subjetivo}</li>
        <li><strong>Objetivo:</strong> {prontuario.Objetivo}</li>
        <li><strong>Avaliação:</strong> {prontuario.Avaliacao}</li>
        <li><strong>Plano:</strong> {prontuario.Plano}</li>
      </ul>
    </div>
  );
}

export default Prontuario;
