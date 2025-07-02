import React, { useState } from "react";
import "./DocumentManager.css";
import DocumentService from "../../services/DocumentService";

const DocumentManager = ({ user, onLogout }) => {
  const [docType, setDocType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDocTypeChange = (e) => {
    setDocType(e.target.value);
    if (e.target.value) {
      setIsLoading(true);
      // Simular carregamento
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  const documentURL = DocumentService.getDocumentURL(docType);

  return (
    <div className="document-manager">
      <div className="card">
        <div className="card-header">
          <h2 className="text-blue">Bem-vindo, {user.name}</h2>
          <button className="btn btn-secondary" onClick={onLogout}>
            Sair do Sistema
          </button>
        </div>
      </div>

      <div className="document-controls">
        <h3 className="text-blue">Seleção de Documentos</h3>
        
        <div className="form-group">
          <label htmlFor="docType" className="form-label">
            Tipo de Documento:
          </label>
          <select 
            id="docType" 
            className="form-select"
            value={docType} 
            onChange={handleDocTypeChange}
          >
            <option value="">Selecione o tipo de documento</option>
            {user.permissions.map((perm) => (
              <option key={perm} value={perm}>
                {DocumentService.getDocumentName(perm)}
              </option>
            ))}
          </select>
        </div>

        {user.permissions.length === 0 && (
          <div className="alert alert-info">
            Você não possui permissões para visualizar documentos. 
            Entre em contato com o administrador.
          </div>
        )}
      </div>

      {isLoading && (
        <div className="document-loading">
          <div className="loader"></div>
          Carregando documento...
        </div>
      )}

      {documentURL && !isLoading && (
        <div className="iframe-container">
          <h3 className="text-blue">
            {DocumentService.getDocumentName(docType)}
          </h3>
          <div className="iframe-wrapper">
            <iframe
              src={documentURL}
              title="Documento"
              className="document-preview"
            ></iframe>
          </div>
        </div>
      )}

      {!documentURL && !isLoading && docType && (
        <div className="alert alert-info">
          Documento não encontrado ou não disponível no momento.
        </div>
      )}
    </div>
  );
};

export default DocumentManager;
