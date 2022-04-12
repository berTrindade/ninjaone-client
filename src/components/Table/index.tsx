import { Key, useMemo } from "react";
import { Container } from "./styles";
import { useDevices } from "../../hooks/useDevices";
import { Device } from "../Device";
import { useModal } from "../../hooks/useModal";
import { useFilter } from "../../hooks/useFilters";
import { DIRECTION } from "../../constants";

export function Table() {

    const { devices, deleteDevices, updateSelectedDevice } = useDevices();
    const { openModal } = useModal();
    const { sortBy = '', deviceTypes, direction = DIRECTION.SORT_DIRECTION_ASC} = useFilter();

    const handleEditDevice = (device) => {
        openModal();
        updateSelectedDevice(device);
    }

    const handleDeleteDevice = (device) => deleteDevices(device);

    const filteredDevices = useMemo(()=> devices.filter(
        device =>{
    
          const props = deviceTypes.map(a => a.value);    
          return deviceTypes.length === 0 ? true : props.includes(device.type);
        }
    ).sort((a, b)=> {
        if(sortBy === '') return 0; 
        switch (sortBy) {
          case 'hdd_capacity':
            return direction === DIRECTION.SORT_DIRECTION_ASC ? a.hdd_capacity - b.hdd_capacity: b.hdd_capacity - a.hdd_capacity
        
            default:
                if(a[sortBy] < b[sortBy]) { 
                return direction === DIRECTION.SORT_DIRECTION_ASC ? -1 : 1; 
                }
                if(a[sortBy] > b[sortBy]) { 
                return  direction === DIRECTION.SORT_DIRECTION_ASC ? 1 : -1; 
                }
                return 0;
            }
    }),[sortBy, deviceTypes, devices, direction]); 

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>System Name</th>
                        <th>Type</th>
                        <th>HDD Capacity</th>
                    </tr>
                </thead>
                <tbody>
                {filteredDevices.map((item: { id: Key | null | undefined; }) => (
                    <Device 
                        key={item.id}
                        item={item} 
                        handleEdit={handleEditDevice}
                        handleRemove={handleDeleteDevice}
                    />
                ))}
                </tbody>
            </table>
        </Container>
    );
}

