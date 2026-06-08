import { CiBoxList } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";
import { GrCompliance } from "react-icons/gr";
import Fcomp from "../common/Fcomp";

type TFilterComp = {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const FilterComp = ({ activeFilter, onFilterChange }: TFilterComp) => {
  return (
      <div className="flex flex-row gap-2 justify-center items-center mt-5 w-full p-2 bg-white rounded">
          <Fcomp
            FilterName="All"
            ReactIcon={CiBoxList}
            isActive={activeFilter === "All"}
            onClick={() => onFilterChange("All")}
          />
          <Fcomp
            FilterName="Pending"
            ReactIcon={LuClock4}
            isActive={activeFilter === "Pending"}
            onClick={() => onFilterChange("Pending")}
          />
          <Fcomp
            FilterName="Completed"
            ReactIcon={GrCompliance}
            isActive={activeFilter === "Completed"}
            onClick={() => onFilterChange("Completed")}
          />
    </div>
  )
}

export default FilterComp