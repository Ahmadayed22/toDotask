import { FaPlus } from "react-icons/fa";
import { Button } from "flowbite-react";
import { useState } from "react";

type Tinput = {
  AddTask: (taskName: string,setText: React.Dispatch<React.SetStateAction<string>>) => void
  
}


const InputTodo = ({ AddTask }: Tinput) => {
  const [taskname, setTaskName] = useState("")
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTaskName(e.target.value)
  
}
  return (
    <div className="flex justify-between mt-5 w-full p-2">
          <input 
            type="text" 
            placeholder="Add a new task..." 
            className="w-[80%] p-2 border border-gray-300 rounded-md" 
            onChange={inputChange}
            value={taskname}
          />
      <Button color="indigo" className="ml-2 bg-indigo-500 p-2 border rounded-md text-white"
      onClick={()=>AddTask(taskname, setTaskName)}>
              <FaPlus className="mr-2" />
              Add Task
          </Button>
    </div>
  )
}

export default InputTodo