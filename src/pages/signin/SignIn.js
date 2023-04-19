import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from './SignIn.style';
import Modal from '../../components/Modal/Modal';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [isValid, setIsValid] = useState(false);

  const { email, password } = inputs;

  const navigate = useNavigate();

  const handleInput = e => {
    const { value, id } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });

    checkValid();
  };

  const checkValid = () => {
    if (email.includes('@') && password.length >= 8) {
      return setIsValid(true);
    } else {
      return setIsValid(false);
    }
  };

  const signIn = () => {
    fetch('https://www.pre-onboarding-selection-task.shop/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        localStorage.setItem('access_token', result.access_token);
        navigate('/todo');
      });
  };

  return (
    <S.Main>
      <S.Container>
        <S.Text>로그인 해주세요</S.Text>
        <S.Line />
        <S.InputWrapper>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input
            data-testid="email-input"
            id="email"
            onChange={handleInput}
          />
          <S.Label htmlFor="password">Password</S.Label>
          <S.Input
            data-testid="password-input"
            id="password"
            type="password"
            onChange={handleInput}
          />
        </S.InputWrapper>
        <S.Button
          data-testid="signin-button"
          disabled={!isValid}
          onClick={signIn}
        >
          Sign In
        </S.Button>
      </S.Container>
    </S.Main>
  );
}
