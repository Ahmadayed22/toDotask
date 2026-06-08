import { FaTasks } from "react-icons/fa";
const Header = () => {
  return (
      <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex gap-2 items-center justify-center text-2xl font-bold mb-2">
              <FaTasks className="text-indigo-500" size={30}/>
              <h1 className="">My Tasks</h1>
              
          </div>
          <p className="text-gray-500">organize your day,one task at a time</p>
    </div>
  )
}

export default Header