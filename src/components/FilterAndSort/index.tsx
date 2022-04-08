import { Container } from "./styles";

export function FilterAndSort() {

    const changeFilter = (filter: string) => {
        console.log('filter', filter)
    }
    
    const changeSort = (sort: string) => {
        console.log('sort', sort)
    }

    return (
      <Container>
            <select onChange={(e) => changeFilter(e.target.value)}>
                <option defaultValue="">Filter: All</option>
                <option value="WINDOWS_WORKSTATION">Device Type: Windows Workstation</option>
                <option value="WINDOWS_SERVER">Device Type: Windows Server</option>
                <option value="MAC">Device Type: Mac</option>
            </select>
            <select onChange={e => changeSort(e.target.value)}>
                <option defaultValue="">Sort by: All</option>
                <option value="system_name">Sort by: System Name</option>
                <option value="hdd_capacity">Sort by: HDD Capacity</option>
            </select>
      </Container>  
    );
}