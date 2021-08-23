import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native'
import styled from 'styled-components';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = (newTodo: any) => {
    setNewTodoItem(newTodo);
  }

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  }

  return(
    <InputContainerWappar>
      <TextInputWappar
        placeholder="할 일을 적으세요"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
        <ButtonWappar title={'ADD'} onPress={addTodoHandler}/>
    </InputContainerWappar>
  );
}

const InputContainerWappar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const TextInputWappar = styled.TextInput`
        flex: 1;
        margin: 10px 10px 10px 10px;
        border-bottom-color: #bbb;
        border-bottom-width: 2px;
        font-size: 24px;
        width: 10px;
        text-align: center;
`


const ButtonWappar = styled.Button`
    margin-right: 10px;

`

export default TodoInsert;