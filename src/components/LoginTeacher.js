import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const colorChange = keyframes`
  0% {
    color: #007bff;
  }
  50% {
    color: #ff4500;
  }
  100% {
    color: #007bff;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginForm = styled.form`
  background-color: #167b97;
  padding: 180px;
  border-radius: 118px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out; /* Added fadeIn animation */
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 280px;
  color: #fff;
`;

const LoginButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 60%;
  border-radius: 4px;
  border-radius: 100px;
  margin-top: 30px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: 10px;
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  margin-top: 20px;
  display: block;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.5s ease-in-out;

  &:hover {
    animation: ${colorChange} 2s infinite; /* Added colorChange animation */
  }
`;

const LoginTeacher = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/v1/teachers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          password,
        }),
      });

      if (response.ok) {
        setLoginStatus('success');
        navigate('/adminpage'); // Adjust the redirect path as needed
      } else {
        setLoginStatus('error');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <h2>Login</h2>
        <InputContainer>
          <Icon>
            <FaUser />
          </Icon>
          <Input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </InputContainer>

        <InputContainer>
          <Icon>
            <FaLock />
          </Icon>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputContainer>

        <LoginButton type="submit" onClick={handleLogin}>
          Login
        </LoginButton>

        {loginStatus === 'success' && <SuccessMessage>Login successful!</SuccessMessage>}
        {loginStatus === 'error' && <ErrorMessage>Invalid ID or password. Please try again.</ErrorMessage>}

        <SignUpLink to="/register/teacher">Not registered yet? Register as Teacher</SignUpLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginTeacher;
