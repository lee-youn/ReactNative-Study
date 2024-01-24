/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({topos, onToggle, onRemove}){
    return (
        <>
        <Text>왜 안되냐고</Text>
        <FlatList
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            style={styles.list}
            data={topos}
            renderItem={({item}) => (
                <TodoItem
                id={item.id}
                text={item.text}
                done={item.done}
                onToggle={onToggle}
                onRemove={onRemove}
                />
            )}
            //Data의 분별을 위한 id를 설정해주는 부분
            keyExtractor={item => item.id.toString()} />
        <Text>왜 안되냐고22</Text>
            </>

    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        height: '100%',
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
    },
});

export default TodoList;
