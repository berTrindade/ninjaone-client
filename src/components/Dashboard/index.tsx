import { Container } from "./styles";
import { Table } from "../Table/index";
import { FilterAndSort } from "../FilterAndSort/index";

export function Dashboard() {
    return (
      <Container>
          <FilterAndSort />
          <Table />
      </Container>  
    );
}