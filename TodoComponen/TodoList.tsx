import React from 'react';
import {View, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle} : any) => {
    return(
        <ScrollViewWappar>
            {todos.map(todo => (
                <TodoListItem
                key={todo.id}
                {...todo}
                onRemove={onRemove}
                onToggle={onToggle}/>
            ))}
        </ScrollViewWappar>
    );
}


const ScrollViewWappar = styled.ScrollView`
    /* align-items: center;  */
`

export default TodoList;