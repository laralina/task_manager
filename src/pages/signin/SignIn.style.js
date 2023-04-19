import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  0%{
    scale: 0;
    opacity: 0;
    }

    100%{
      scale: 1;
      opacity: 1;
    }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: lightgray;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 550px;
  background: white;
  border-radius: 20px;
  box-shadow: 14px 16px 24px -12px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 14px 16px 24px -12px rgba(0, 0, 0, 0.4);
  animation: ${FadeIn} 0.5s;
`;

export const Text = styled.h2`
  font-size: 30px;
  color: #242529;
`;

export const Line = styled.div`
  width: 350px;
  margin-top: 30px;
  border-bottom: 1px solid #e9e9e9;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  gap: 20px;
`;

export const Input = styled.input`
  width: 350px;
  height: 50px;
  padding: 20px;
  border-radius: 30px;
  border: 0px;
  background: #dddddd;
`;

export const Label = styled.label`
  margin-left: 20px;
  font-size: 15px;
  color: gray;
`;

export const Button = styled.button`
  width: 350px;
  height: 70px;
  margin-top: 50px;
  border-radius: 40px;
  border: 0px;
  background: #5e81f4;
  color: white;
  font-size: 20px;
  transition: 0.3s;

  :disabled {
    background: gray;
  }
`;
