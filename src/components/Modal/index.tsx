
import ReactModal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useModal } from "../../hooks/useModal/index";
import { useDevices } from "../../hooks/useDevices";
import { DeviceForm } from "../DeviceForm";

ReactModal.setAppElement('#root');

export function Modal() { 

    const { selectedDevice, updateDevices, addDevices } = useDevices();
    const { isOpen, closeModal } = useModal();

    const handleSaveDevice = () => {

        if(
          selectedDevice.system_name === '' ||
          selectedDevice.type === '' ||
          selectedDevice.hdd_capacity === ''
        ) return;
          
        if(selectedDevice.id) updateDevices();
        else addDevices();
        
        closeModal();
    }

    // const handleChange = (name, value) => {

    //     console.log('name :>> ', name);
    //     console.log('value', value)

    //     updateSelectedDevice({
    //       ...selectedDevice,
    //       [name]: value,
    //     })
    // }

    console.log('selectedDevice iD', selectedDevice)

    const getTitle = () => selectedDevice.id ? 'Edit device' : 'Add device'

    return (
        <>
            {isOpen ? (
                <ReactModal 
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
                >
                    <button
                        type="button" 
                        className="react-modal-close"
                        onClick={closeModal} 
                    >
                        <FaTimes />
                    </button>

                    <h2>{getTitle()}</h2>
                    <DeviceForm
                        handleSave={handleSaveDevice}
                        handleCancel={closeModal}
                    />
                </ReactModal> 
            ) : null}
        </>
    );
}