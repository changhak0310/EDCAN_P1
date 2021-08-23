import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { AntDesign, Feather } from '@expo/vector-icons';


const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
    return(
        <Container>
            <TouchableOpacity onPressOut={onToggle(id)}>
                {checked ? 
                (<CompleteCircleWappar>
                    <AntDesign 
                        name="checkcircleo" 
                        size={26.5} 
                        color="blue"
                        style={styles.completeCircleIcon}/>
                </CompleteCircleWappar>) 
                : (<CircleIconWappar/>)
                }
            </TouchableOpacity>
            <Text style={[
                styles.text, 
                checked ? styles.strikeText : styles.unstrikeText]}>{textValue}</Text>
            <View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text onPress={onRemove(id)}>
                        <Feather name="trash-2" size={26.5} color="red" />
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        width: 100,
      },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    completeCircleIcon: {
        marginRight: 20,
        marginLeft: 20,
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
})

const Container = styled.View`
    flex: 1;
    border-bottom-color: #bbb;
    border-bottom-width: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const CompleteCircleWappar = styled.Text`
    margin-right: 20px;
    margin-left: 20px;
`

const CircleIconWappar = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border-color: blue;
    border-width: 2px;
    margin-right: 20px;
    margin-left: 20px;
`


const ScrollViewWappar = styled.ScrollView`
    /* align-items: center; */
`

export default TodoListItem;