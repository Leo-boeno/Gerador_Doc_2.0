import React, { useState } from "react";
import "./DocumentManager.css";
import DocumentService from "../../services/DocumentService";

const DocumentManager = ({ user, onLogout }) => {
  const [docType, setDocType] = useState("");

  const handleDocTypeChange = (e) => setDocType(e.target.value);

  const documentURL = DocumentService.getDocumentURL(docType);

  return (
    <div className="document-manager">
      <h2>Bem-vindo, {user.name}</h2>
      <button onClick={onLogout}>Logout</button>
      <h3>Seleção de Documentos</h3>
      <label htmlFor="docType">Tipo de Documento:</label>
      <select id="docType" value={docType} onChange={handleDocTypeChange}>
        <option value="">Selecione o tipo de documento</option>
        {user.permissions.map((perm) => (
          <option key={perm} value={perm}>
            {DocumentService.getDocumentName(perm)}
          </option>
        ))}
      </select>
      {documentURL && (
        <iframe
          src={documentURL}
          title="Documento"
          className="document-preview"
        ></iframe>
      )}
    </div>
  );
};

export default DocumentManager;
