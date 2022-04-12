
import { createContext, useContext, useEffect, useState } from "react";
import { INITIAL_DEVICE_DATA } from "../constants";
import { addDevice, deleteDevice, getDevices, updateDevice } from "../services/devices";

export const DeviceContext = createContext({});

export const DeviceProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, updateSelectedDevice] = useState(INITIAL_DEVICE_DATA);
  
  useEffect(()=>{
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {

      const response = await getDevices();
      setDevices(response);

    } catch (error) {
      console.log(error)
    }
  }

  const updateDevices = async () => {
    try {
      
      await updateDevice(selectedDevice.id, {
        ...selectedDevice
      });
      
      fetchDevices();
      
    } catch (error) {
      console.log(error)
    }
  }

  const deleteDevices = async (device) => {
    try {
      await deleteDevice(device.id);

      fetchDevices();

    } catch (error) {
      console.log(error)
    }
  }

  const addDevices = async () => {
    try {

      await addDevice(selectedDevice);
  
      fetchDevices();

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DeviceContext.Provider value={{ 
      devices,
      selectedDevice,
      updateSelectedDevice,
      setDevices,
      addDevices,
      updateDevices,
      deleteDevices
    }}>
      {children}
    </DeviceContext.Provider>
  )
}

export const useDevices = () => {
    const context = useContext(DeviceContext);

    if (!context) throw new Error("useDevices must be used within DeviceProvider");
    
    return context;
}
