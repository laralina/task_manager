import styled, { keyframes, css } from 'styled-components';

const Mounted = keyframes`
  0%{
    opacity: 0;
    }

    100%{
      opacity: 1;
    }
`;

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
  background: #f7f7f7;
  animation: ${Mounted} 1s;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
`;

export const Title = styled.h1`
  letter-spacing: -1px;
  font-weight: 600;
  font-family: 'Varela Round', sans-serif;
  font-size: 50px;
  color: #5e81f4;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const AddInput = styled.input`
  width: 600px;
  height: 50px;
  padding: 0px 40px;
  border-radius: 30px;
  border: 0px;
  background: lightgray;
  font-size: 20px;
  color: #393939;
  outline: none;
`;

export const AddButton = styled.button`
  position: absolute;
  width: 80px;
  height: 40px;
  right: 10px;
  border-radius: 30px;
  border: 0px;
  background: #5e81f4;
  color: white;
  font-family: 'Varela Round', sans-serif;
  font-size: 15px;
  transition: 0.3s;

  :hover {
    background: white;
    color: #5e81f4;
    transition: 0.3s;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 10% 70% 20%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 0px 10px;
  width: 600px;
  height: 60px;
  border-radius: 30px;
  background: ${props => (props.toggle ? 'gray' : 'white')};
  box-shadow: 14px 16px 24px -12px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 14px 16px 24px -12px rgba(0, 0, 0, 0.2);
  animation: ${FadeIn} 0.3s;
  transition: 0.3s;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const ModifyIcon = styled.img`
  width: 25px;
  opacity: 30%;
  scale: 1;
  transition: 0.2s;

  :hover {
    cursor: pointer;
    scale: 1.2;
    opacity: 80%;
    transition: 0.2s;
  }
`;

export const DeleteIcon = styled.img`
  width: 20px;
  opacity: 30%;
  scale: 1;
  transition: 0.2s;

  :hover {
    cursor: pointer;
    scale: 1.2;
    opacity: 80%;
    transition: 0.2s;
  }
`;

export const CustomCheckboxWrapper = styled.div`
  position: relative;
`;

export const CustomCheckbox = styled.input`
  visibility: hidden;
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: #66bb6a;
          border-color: #66bb6a;
          &:after: {
            opacity: 1;
          }
        `
      : null}
`;

export const CustomLabel = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 28px;
  height: 28px;
  position: absolute;
  left: -2px;
  top: -4px;
  transition: 0.3s;

  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: #5e81f4;
          border-color: #5e81f4;
          &:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: '';
            height: 6px;
            left: 7px;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 12px;
          }
        `
      : css`
          background-color: #fff !important;
          &:after {
            opacity: 1;
          }
        `}
`;

export const CustomP = styled.p`
  justify-self: flex-start;
  font-size: 20px;
  color: gray;
`;

export const ModifyInput = styled.input`
  outline: none;
  width: 400px;
  background: transparent;
  border: 0px;
  color: white;
  font-size: 20px;
`;

export const ConfirmIcon = styled.img`
  width: 25px;
  filter: invert(73%) sepia(18%) saturate(7305%) hue-rotate(194deg)
    brightness(102%) contrast(106%);
  scale: 1;
  transition: 0.2s;

  :hover {
    filter: invert(100%) sepia(100%) saturate(14%) hue-rotate(212deg)
      brightness(104%) contrast(104%);
    cursor: pointer;
    scale: 1.2;
    transition: 0.2s;
  }
`;

export const CancelIcon = styled.img`
  width: 25px;
  opacity: 30%;
  scale: 0.8;
  transition: 0.2s;

  :hover {
    filter: invert(100%) sepia(100%) saturate(14%) hue-rotate(212deg)
      brightness(104%) contrast(104%);
    cursor: pointer;
    scale: 1;
    opacity: 80%;
    transition: 0.2s;
  }
`;
