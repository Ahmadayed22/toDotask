import type { IconType } from "react-icons"

type Tfcom = {
    ReactIcon : IconType
    FilterName: string
    isActive: boolean
    onClick: () => void
}

const Fcomp = ({ FilterName, ReactIcon, isActive, onClick }: Tfcom) => {
  return (
        <div
          className={`flex flex-row gap-2 items-center cursor-pointer p-2 rounded-md transition ${
            isActive
              ? 'bg-indigo-500 text-white'
              : 'hover:bg-gray-200'
          }`}
          onClick={onClick}
        >
          <ReactIcon />
          <span>{FilterName}</span>
        </div>
  )
}

export default Fcomp