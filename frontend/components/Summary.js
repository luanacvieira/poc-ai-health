// Summary.js
// Mostra resumo gerado via OpenAI

import React from 'react';

function Summary({ summary }) {
  return (
    <div>
      <h3>Resumo da Consulta</h3>
      <p>{summary}</p>
    </div>
  );
}

export default Summary;
