import { Header } from "../layouts"
import ToDo from "./ToDo"
const Home = () => {
  return (
      <div className='container mx-auto flex flex-col h-screen bg-gray-300 max-w-2xl rounded-lg p-4'>
          <Header />
          <ToDo/>
    </div>  
  )
}

export default Home