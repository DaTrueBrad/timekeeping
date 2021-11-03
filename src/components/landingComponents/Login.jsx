import  React, { useState } from 'react';
import Form from './Form';

function Login() {
  const [emp, setEmp] = useState('')

  const handleChange = (e) => setEmp(e.target.value)

  return (
    <div className="inner-page">
      <h1>Please Log In</h1>
      <Form />
    </div>
  );
}

export default Login;
