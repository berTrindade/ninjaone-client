import { SingleDeviceFilter } from "../Filters/components/SingleDeviceFilter";
import { ActionsButtonContainer, Container, ErrorMessage } from "./styles";
import { useForm, Controller } from "react-hook-form";
import { useDevices } from "../../hooks/useDevices";
import { updateDevice } from "../../services/devices";

type Device = {
    system_name: string, 
    hdd_capacity: number,
    type: string,
}

const registerOptions = {
    system_name: { required: "System name is required" },
    hdd_capacity: { 
        required: "required",
        minLength: {
            value: 2,
            message: "HDD Capacity is required"
        }
    },
};

export function DeviceForm({
    handleSave, 
    handleCancel,
}) {

    const { selectedDevice, updateDevices, updateSelectedDevice } = useDevices();
    const { register, handleSubmit, control, formState: { errors } } = useForm<Device>({ defaultValues: selectedDevice, mode: "onBlur" });

    const onSubmit = handleSubmit((data) => {
        updateSelectedDevice(data);

        console.log('data', data);

        updateDevices();
    });

    return (
        <Container onSubmit={onSubmit}>
            <input 
                {...register('system_name', registerOptions.system_name)}
                type="text" 
                placeholder="Name"
                id="system_name"
                name="system_name"
            />

            { errors?.system_name && <ErrorMessage>{errors.system_name.message}</ErrorMessage> }

            <Controller
                control={control}
                rules={registerOptions.type}
                name="type"
                render={({ field: { value, onChange }}) => {

                    return (
                    <SingleDeviceFilter
                        value={value}
                        onChange={item => onChange(item)} 
                    />)
                }}
            />

            { errors?.type && <ErrorMessage>{errors.type.message}</ErrorMessage> }

            <input 
                {...register("hdd_capacity", registerOptions.hdd_capacity)}
                type="number" 
                min={0}
                id="hdd_capacity"
                name="hdd_capacity"
                placeholder="HDD Capacity"
            />

            { errors?.hdd_capacity && <ErrorMessage>{errors.hdd_capacity.message}</ErrorMessage> }

            <ActionsButtonContainer>
                <button 
                    type="submit">
                    Save
                </button>
                <button 
                    type="button" 
                    onClick={handleCancel}
                >
                    Cancel  
                </button>
            </ActionsButtonContainer>     
        </Container>
    );
}