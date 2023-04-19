import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './Modal.style';

export default function Modal() {
  const navigate = useNavigate();

  const toLogIn = () => {
    navigate('/signin');
  };

  return (
    <S.Background>
      <S.Container>
        <S.Text>회원가입이 완료되었습니다!</S.Text>
        <S.Button onClick={toLogIn}>확인</S.Button>
      </S.Container>
    </S.Background>
  );
}
