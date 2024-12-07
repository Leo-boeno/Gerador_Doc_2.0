const DocumentService = {
    getDocumentURL: (type) => {
      const docs = {
        "solicitacao-material": "/SolicitacaoMaterial.html",
        "contrato": "/contrato.html",
      };
      return docs[type] || null;
    },
    getDocumentName: (type) => {
      const docs = {
        "solicitacao-material": "Solicitação de Material",
        "contrato": "Contrato",
      };
      return docs[type] || "Documento Desconhecido";
    },
  };
  
  export default DocumentService;
  