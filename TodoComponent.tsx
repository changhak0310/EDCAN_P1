import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';
import TodoList from './TodoComponen/TodoList';
import TodoInsert from './TodoComponen/TodoInsert';

const TodoMain = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text: string) => {
        setTodos([
            ...todos,
            {id: Math.random().toString(), textValue: text, checked: false},
        ]);
    };

    const onRemove = (id: number) => e => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const onToggle = (id: number) => e => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? {...todo, checked: !todo.checked} : todo, ),
        );
    };

    return(
        <SafeAreaViewContainerWappar>
            <TodoTitleWappar>하루 할 일</TodoTitleWappar>
            <TodoContainerWappar>
                <TodoInsert onAddTodo={addTodo}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>       
            </TodoContainerWappar>
        </SafeAreaViewContainerWappar>
    );
}

const SafeAreaViewContainerWappar = styled.SafeAreaView`
    flex: 1;
    background-color: #3143e8;
    border-top-left-radius: 10;
    border-top-right-radius: 10;
`

const TodoTitleWappar = styled.Text`
    color: #fff;
    font-size: 36px;
    margin-top: 30px;
    margin-bottom: 30;
    font-weight: 300;
    text-align: center;
`

const TodoContainerWappar = styled.View`
    background-color: #fff;
    flex: 1;
    border-top-left-radius: 10;
    border-top-right-radius: 10;
    margin : 0px 10px 0px 10px;
`

export default TodoMain;