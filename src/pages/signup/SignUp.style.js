import styled from 'styled-components';

export const main = styled.div`
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
  width: 500px;
  height: 600px;
  background: white;
  border-radius: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IdInput = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 20px;
  border: 0px;
  background: lightgray;
`;

export const PwInput = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 20px;
  border: 0px;
  background: lightgray;
`;

export const Button = styled.button`
  width: 350px;
  height: 80px;
  border-radius: 20px;
  border: px;
  background: #546eed;
`;
