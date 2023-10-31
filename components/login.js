import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../helper/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleChangeInput = (value) => {
    // workaround
    setTimeout(() => {
      setEmail(value)
    }, 1000)
    console.log(email)
  }

  const handleAuthorization = () => {
    login(email).then((data) => {
      console.log(data)
    });
    // router.push('/product-list')
  }

  return (
    <main className="d-flex justify-content-center" 
      style={{  marginTop: '5em' }}
    > 
      <form style={{ width: '500px', maxWidth: '500px', border: '1px solid #ddd', padding: '55px' }}>
        <h1 className="h3 mb-3 fw-normal d-flex justify-content-center p-3">Login</h1>
        <div className="form-floating mb-5">
          <input 
            type="email" 
            className="form-control" 
            onKeyUp={(e) => handleChangeInput(e.target.value)}
          />
          <label>Email</label>
        </div>
        <button 
          className="btn btn-primary w-100 py-2" 
          type="submit"
          onClick={() => handleAuthorization() }
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
