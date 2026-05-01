import React from "react";

const LoginButton = ({ logedIn }) => {
  return logedIn ? <button>Logout</button> : <button>Login</button>;
};

export default LoginButton;
