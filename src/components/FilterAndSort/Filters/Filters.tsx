import { MultiDeviceFilter } from './MultiDeviceFilter';
import { SortBy } from './SortBy';
import { DirectionFilter } from './DirectionFilter';
import { useFilter } from "../../../hooks/useFilters";

export function Filters() {
  
  const { deviceTypes, setDeviceTypes, sortBy, setSortBy, direction, toggleDirection } = useFilter();

  return (
    <div>
      <div> Device type : 
        <MultiDeviceFilter
          value={deviceTypes}
          onChange={setDeviceTypes}
        />
      </div>
      <div> Sort by :  
        <div>
          <SortBy
            value={sortBy}
            onChange={setSortBy}
          />
          <DirectionFilter 
            direction={direction}
            changeDirection={toggleDirection}
          />
        </div>
      </div>
    </div>
  );
};
