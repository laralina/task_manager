import styled, { keyframes } from 'styled-components';

const PopUp = keyframes`
  0%{
    scale: 0;
    opacity: 0;
    }

    60%{
      scale: 1.1;
      opacity: 1;
      }

    100%{
      scale: 1;
      opacity: 1;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 200px;
  border-radius: 40px;
  background: white;
  box-shadow: 14px 16px 24px -12px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 14px 16px 24px -12px rgba(0, 0, 0, 0.4);
  animation: ${PopUp} 0.5s;
`;

export const Background = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

export const Text = styled.span`
  font-size: 20px;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 20px;
  border-radius: 30px;
  border: 0px;
  color: white;
  background: #5e81f4;
`;
