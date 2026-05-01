import React from "react";

const Warning = ({ warning }) => {
  if (!warning) {
    return null;
  }

  return <div>Warning: {warning}</div>;
};// Retorna null para não renderizar nada

export default Warning;
