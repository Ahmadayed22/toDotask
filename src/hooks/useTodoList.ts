import { useEffect, useRef, useState } from "react"
import type { Ttodo } from "../types/TaskTodo"


const useTodoList = (task: Ttodo) => {
      const [isEditing, setIsEditing] = useState(false)
      const [editValue, setEditValue] = useState(task.name)
      const inputRef = useRef<HTMLInputElement | null>(null)
  
      useEffect(() => {
          if (isEditing) inputRef.current?.focus()
      }, [isEditing])
  
      const handleSave = (editTaskName: (id: number, newName: string) => void) => {
          const trimmed = editValue.trim()
          if (trimmed.length === 0) {
              setEditValue(task.name)
          } else {
              editTaskName(task.id, trimmed)
          }
          setIsEditing(false)
      }
  return {isEditing, setIsEditing,editValue, setEditValue,inputRef, handleSave}
}

export default useTodoList