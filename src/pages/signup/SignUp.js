import React from 'react';
import styled from 'styled-components';
import * as S from './SignUp.style';

export default function Dashboard() {
  return (
    <S.main>
      <S.Container>
        <S.InputWrapper>
          <S.IdInput>ID</S.IdInput>
          <S.PwInput>Pw</S.PwInput>
        </S.InputWrapper>
        <S.Button>Sign Up</S.Button>
      </S.Container>
    </S.main>
  );
}
