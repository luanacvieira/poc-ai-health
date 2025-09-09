// gerarProntuario.js
// Organiza os dados extraídos em modelo SOAP

function gerarProntuario({ relato, observacoes, diagnostico, medicamentos }) {
  return {
    Subjetivo: relato,
    Objetivo: observacoes,
    Avaliacao: diagnostico,
    Plano: medicamentos
  };
}

module.exports = { gerarProntuario };
