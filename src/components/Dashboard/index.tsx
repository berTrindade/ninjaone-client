import { Container } from "./styles";
import { Table } from "../Table/index";
import { Filters } from "../FilterAndSort/Filters/Filters";

export function Dashboard() {
    return (
      <Container>
          <Filters />
          <Table />
      </Container>  
    );
}