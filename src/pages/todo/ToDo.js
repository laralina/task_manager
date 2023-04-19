import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as S from './ToDo.style';
import Card from './Card/Card';

export default function ToDO() {
  const [newInput, setNewInput] = useState('');
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);

  const access_token = localStorage.getItem('access_token');

  const handleNewInput = e => {
    setNewInput(e.target.value);
  };

  const addNewList = () => {
    setLoading(true);
    fetch('https://www.pre-onboarding-selection-task.shop/todos', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: newInput,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setLoading(false);
        setNewInput('');
      });
  };

  useEffect(() => {
    fetch('https://www.pre-onboarding-selection-task.shop/todos', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setCardData(result);
      });
  }, [loading]);

  return (
    <S.Main>
      <S.Container>
        <S.Title>Task Manager</S.Title>
        <S.InputWrapper>
          <S.AddInput
            onChange={handleNewInput}
            value={newInput}
            data-testid="new-todo-input"
          />
          <S.AddButton onClick={addNewList} data-testid="new-todo-add-button">
            Add
          </S.AddButton>
        </S.InputWrapper>
        <S.ListContainer>
          {cardData?.map(item => {
            return <Card key={item.id} item={item} setLoading={setLoading} />;
          })}
        </S.ListContainer>
      </S.Container>
    </S.Main>
  );
}
