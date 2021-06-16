import React, { useContext, useState } from 'react';
import {View} from 'react-native';
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import ThemeContext from '../context/ThemeContext'

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const themeMode = useContext(ThemeContext)

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== '') {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldTasks => [...oldTasks, data])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const task = tasks.filter(item => item.id === id)[0]

    task.done = !task?.done

    setTasks([...new Set([task, ...tasks])])
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(task => task.id !== id))
  }

  return (
    <View style={themeMode[0] === 'light' ? {flex: 1, backgroundColor: '#fff'} : {flex: 1, backgroundColor: '#1F1F1F'}}>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}