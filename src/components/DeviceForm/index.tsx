import SingleDeviceFilter from "../Filters/components/SingleDeviceFilter";
import { ActionsButtonContainer, Container, ErrorMessage } from "./styles";
import { useForm, Controller } from "react-hook-form";
import { useDevices } from "../../hooks/useDevices";

type Device = {
    system_name: string, 
    hdd_capacity: number,
    type: any,
}

const registerOptions = {
    system_name: { 
        required: "System name is required",
        pattern: {
            value: /^[^\s]+(?:$|.*[^\s]+$)/,
            message: "Entered value cant start/end or contain only white spacing"
        }
    },
    hdd_capacity: { 
        required: "HDD Capacity is required",
        minLength: {
            value: 2,
            message: "Value should have at least 2 digits"
        },
        pattern: {
            value: /^(0|[1-9]\d*)(\.\d+)?$/,
            message: "A number should be greater than zero"
        },
    },
    type: { required: "Type is required"}
};

export function DeviceForm({    
    handleOnFinish, 
    handleCancel,
}) {

    const { selectedDevice, updateSelectedDevice } = useDevices();
    const { register, handleSubmit, control, formState: { errors } } = useForm<Device>({ defaultValues: selectedDevice, mode: "onBlur" });

    const onSubmit = handleSubmit(data => {
        updateSelectedDevice({
            ...selectedDevice,
            system_name: data.system_name,
            hdd_capacity: data.hdd_capacity,
            type: data.type.label || data.type
        });

        handleOnFinish();
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
                render={({ field }) => <SingleDeviceFilter field={field} /> }
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