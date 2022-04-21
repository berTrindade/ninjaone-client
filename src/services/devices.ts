import axios from 'axios';

export const getDevices = async () => {
    const { data } = await axios.get("http://localhost:3333/devices");  

    return data
}

export const updateDevice = async (id: string, data: any) => {
    await axios.put(`http://localhost:3333/devices/${id}`, {
        ...data
    });
}

export const deleteDevice = async (id: string) => {
    await axios.delete(`http://localhost:3333/devices/${id}`);
}

export const addDevice = async (data: any) => {
    await axios.post(`http://localhost:3333/devices`, {
        ...data
    });
}