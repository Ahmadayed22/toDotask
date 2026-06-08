import { useState } from "react"
import { FilterComp, InputTodo, ToDoList } from "../components"
import useToDo from "../hooks/useToDo"

const ToDo = () => {
  const {tasks, addTask, deleteTask, toggleTaskCompletion, editTaskName} = useToDo()
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const getFilteredTasks = () => {
    switch(activeFilter) {
      case "Completed":
        return tasks.filter(task => task.completed)
      case "Pending":
        return tasks.filter(task => !task.completed)
      case "All":
      default:
        return tasks
    }
  }

  const filteredTasks = getFilteredTasks()

  return (
      <div className="flex flex-col justify-center items-center">
          <InputTodo AddTask={addTask} />
          <FilterComp activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        {filteredTasks.map((task) => (
          <ToDoList key={task.id} task={task} deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTaskName={editTaskName} />
        ))}
    </div>
  )
}

export default ToDo