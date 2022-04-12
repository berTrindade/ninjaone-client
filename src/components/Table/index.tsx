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

    const filteredDeviceTypes =  device => {
        const types = deviceTypes.map(a => a.value);    
        return deviceTypes.length === 0 ? true : types.includes(device.type);
    }

    const filteredDevices = useMemo(
        
    () => devices.filter(filteredDeviceTypes).sort((filterA, filterB) => {

        let filter;

        if(sortBy === '') return 0; 

        if (sortBy == 'hdd_capacity') 
            filter = direction === DIRECTION.SORT_DIRECTION_ASC ? 
                filterA.hdd_capacity - filterB.hdd_capacity: filterB.hdd_capacity - filterA.hdd_capacity
        else {
            if(filterA[sortBy] < filterB[sortBy])
                filter = direction === DIRECTION.SORT_DIRECTION_ASC ? -1 : 1; 
        
            if(filterA[sortBy] > filterB[sortBy]) 
                filter = direction === DIRECTION.SORT_DIRECTION_ASC ? 1 : -1;                    
            }

        return filter;
    }
    
    ),[sortBy, deviceTypes, devices, direction]); 

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

