
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import useTodoList from "../../hooks/useTodoList";
import type { Ttodo } from "../../types/TaskTodo";


type TtodoList = {
    task: Ttodo
    deleteTask: (id: number) => void
        toggleTaskCompletion: (id: number) => void
        editTaskName: (id: number, newName: string) => void
}

const ToDoList = ({ task, deleteTask, toggleTaskCompletion, editTaskName }: TtodoList) => {
    const {isEditing, setIsEditing,editValue, setEditValue,inputRef, handleSave}= useTodoList(task) 

    return (
      <div className="w-full p-2 flex flex-row justify-between items-center text-2xl bg-white rounded mt-5">
          <div className="flex gap-2 items-center">
              <input type="checkbox" className="w-6 h-6 cursor-pointer" checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)} />
                            {isEditing ? (
                                <input
                                    ref={inputRef}
                                    className="border rounded px-2 py-1 text-lg"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => { handleSave(editTaskName) }} />)
                    : task.completed ? <span className="line-through text-gray-500">{task.name}</span>
                                : <span>{task.name}</span>}
          </div>
          <div className="flex gap-2 items-center">
                            {!isEditing ? (
                                <FaEdit
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setEditValue(task.name)
                                        setIsEditing(true)
                                    }}
                                />
                            ) : (
                                <>
                                    <FaCheck className="cursor-pointer text-green-600" onClick={() => handleSave(editTaskName)} />
                                    <FaTimes className="cursor-pointer text-red-600" onClick={() => { setIsEditing(false); setEditValue(task.name) }} />
                                </>
                            )}
                            <MdDeleteForever className="cursor-pointer" onClick={() => deleteTask(task.id)}/>
          </div>
    </div>
  )
}

export default ToDoList