import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const emailInputRef = React.useRef(null);

  useEffect(() => {
    
    emailInputRef.current.focus();
  }, []); 

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    
    if (data.email === 'adilet' && data.password === '1999') {
      navigate('/todolist');
    } else {
      alert('напишите email: adilet password:1999');
    }
    setEmail('')
    setPassword('')
  };

  return (
    <StyledDiv>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          inputRef={emailInputRef} 
        />
        <TextField
          required
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button variant="contained" type="submit" sx={{ m: 1 }}>
          Submit
        </Button>
      </Box>
    </StyledDiv>
  );
};

export default MyForm;

const StyledDiv = styled.div`
  padding: 40px;
  border: none;
  width: 300px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.15);
  margin: 150px auto 0 auto;
`;
