import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as S from '../ToDo.style';

export default function Card({ item, setLoading }) {
  const { id, todo, isCompleted } = item;

  const [toggle, setToggle] = useState(false);
  const [updateInput, setUpdateInput] = useState({});
  const [isChecked, setIsChecked] = useState(isCompleted);

  const access_token = localStorage.getItem('access_token');

  const handleCheck = () => {
    setIsChecked(prev => !prev);
  };

  const handleUpdateInput = e => {
    setUpdateInput({
      todo: e.target.value,
      isCompleted: isChecked,
    });
  };

  const deleteCard = () => {
    setLoading(true);
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    }).then(result => {
      console.log(result);
      setLoading(false);
    });
  };

  const updateCard = () => {
    setLoading(true);
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateInput),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setLoading(false);
      });
    setToggle(false);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo: todo, isCompleted: isChecked }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setLoading(false);
      });
  }, [isChecked]);

  return (
    <S.Card toggle={toggle}>
      <S.CustomCheckboxWrapper>
        <S.CustomCheckbox type="checkbox" isChecked={isChecked} />
        <S.CustomLabel onClick={() => handleCheck()} isChecked={isChecked} />
      </S.CustomCheckboxWrapper>
      {toggle ? (
        <>
          <S.ModifyInput
            defaultValue={todo}
            onChange={handleUpdateInput}
            data-testid="modify-input"
          />
          <S.IconWrapper>
            <S.ConfirmIcon
              alt="modify"
              src={process.env.PUBLIC_URL + '/images/checkIcon.svg'}
              onClick={updateCard}
              data-testid="submit-button"
            />
            <S.CancelIcon
              alt="modify"
              src={process.env.PUBLIC_URL + '/images/deleteIcon.svg'}
              onClick={() => setToggle(false)}
              data-testid="cancel-button"
            />
          </S.IconWrapper>
        </>
      ) : (
        <>
          <S.CustomP>{todo}</S.CustomP>
          <S.IconWrapper>
            <S.ModifyIcon
              alt="modify"
              src={process.env.PUBLIC_URL + '/images/modifyIcon.svg'}
              onClick={() => setToggle(true)}
              data-testid="modify-button"
            />
            <S.DeleteIcon
              alt="delete"
              src={process.env.PUBLIC_URL + '/images/deleteIcon.svg'}
              onClick={() => deleteCard()}
              data-testid="delete-button"
            />
          </S.IconWrapper>
        </>
      )}
    </S.Card>
  );
}
