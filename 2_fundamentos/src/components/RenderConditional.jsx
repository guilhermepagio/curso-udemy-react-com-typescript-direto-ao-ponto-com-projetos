import React from "react";

const RenderConditional = ({ user }) => {
  return <div>{user ? <p>Bem-vindo, {user}!</p> : <p>Please log in.</p>}</div>;
};

export default RenderConditional;
