import { MultiDeviceFilter } from './components/MultiDeviceFilter';
import { SortByFilter } from './components/SortByFilter';
import { DirectionFilter } from './components/DirectionFilter';
import { useFilter } from "../../hooks/useFilters";
import { Container, Filter, TWO } from './styles';

export function Filters() {
  
  const { deviceTypes, setDeviceTypes, sortBy, setSortBy, direction, toggleDirection } = useFilter();

  return (
    <Container>
      <Filter> 
        <MultiDeviceFilter
          value={deviceTypes}
          onChange={setDeviceTypes}
        />
      </Filter>
      <Filter>
          <TWO>
          <SortByFilter
            value={sortBy}
            onChange={setSortBy}
          />
          <DirectionFilter 
            direction={direction}
            changeDirection={toggleDirection}
          />
          </TWO>  
      </Filter>
    </Container>
  );
};
