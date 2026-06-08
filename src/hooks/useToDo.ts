import React from 'react'
import { useEffect, useState } from "react"
import type { Ttodo } from '../types/TaskTodo';

const useToDo = () => {
    const [tasks, setTasks] = useState<Ttodo[]>(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
});
  
  const addTask = (taskName: string,setText: React.Dispatch<React.SetStateAction<string>>) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    }
    setTasks([...tasks, newTask])
    setText('')
  }
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }
  const editTaskName = (id: number, newName: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, name: newName } : task))
    )
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
    , [tasks])
  return {tasks, addTask, deleteTask, toggleTaskCompletion, editTaskName}
}

export default useToDo