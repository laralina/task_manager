import React, { useState } from 'react';
import styled from 'styled-components';
import * as S from './SignUp.style';
import Modal from '../../components/Modal/Modal';

export default function SignUp() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [isValid, setIsValid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { email, password } = inputs;

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

  const signUp = () => {
    fetch('https://www.pre-onboarding-selection-task.shop/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(result => {
      console.log(result);
      setModalOpen(true);
    });
  };

  return (
    <S.main>
      {modalOpen && <Modal />}
      <S.Container>
        <S.Text>회원 가입을 진행해주세요</S.Text>
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
          data-testid="signup-button"
          disabled={!isValid}
          onClick={signUp}
        >
          Sign Up
        </S.Button>
      </S.Container>
    </S.main>
  );
}
