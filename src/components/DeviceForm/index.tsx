import { SingleDeviceFilter } from "../Filters/components/SingleDeviceFilter";
import { Container } from "./styles";

export function DeviceForm({
    item = {}, 
    handleChange, 
    handleSave, 
    handleCancel,
}) {
    return (
        <Container>
            <input 
                type="text" 
                placeholder="Name"
                id="system_name"
                name="system_name"
                value={item.system_name || ''}
                onChange={({ target: { name, value }}) => handleChange(name, value)}
            />

            <SingleDeviceFilter
                value={item.type}
                onChange={value => handleChange("type", value)}
            />

            <input 
                type="number" 
                min={0}
                id="hdd_capacity"
                name="hdd_capacity"
                value={item.hdd_capacity || ''}
                placeholder="HDD Capacity"
                onChange={({ target: { name, value }}) => handleChange(name, value)}
            />

            <div>
                <button 
                    type="button" 
                    onClick={handleSave}
                >
                    Save
                </button>
                <button 
                    type="button" 
                    onClick={handleCancel}
                >
                    Cancel  
                </button>
            </div>     
        </Container>
    );
}