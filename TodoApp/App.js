/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
//import AsyncStorage from '@react-native-community/async-storage';
import todosStorage from './storages/todosStorage';


function App() {
  const today = new Date();
  const [topos, setTopos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);
  console.log(topos);

  useEffect(() => {
    todosStorage
    .get()
    .then(setTopos)
    .catch(console.error);
  }, []);

  useEffect(() => {
    todosStorage.set(topos).catch(console.error);
  }, [topos]);


  const onInsert = text => {
    const nextId =
      topos.length > 0 ? Math.max(...topos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTopos(topos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = topos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTopos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = topos.filter(todo => todo.id !== id);
    setTopos(nextTodos);
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.avoid}>
        <DateHead date={today} />
        {topos.length === 0 ? (
          <Empty />
        ) : (
          <TodoList topos={topos} onToggle={onToggle} onRemove={onRemove} />
        )}
        <AddTodo onInsert={onInsert} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avid: {
    flex: 1,
  },
});

export default App;
