import { Container } from "./styles";
import { Table } from "../Table/index";
import { Filters } from "../Filters/index";

export function Dashboard() {
    return (
      <Container>
          <Filters />
          <Table />
      </Container>  
    );
}