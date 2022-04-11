
import ReactModal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useModal } from "../../hooks/useModal";
import { useDevices } from "../../hooks/useDevices";
import { DeviceForm } from "../DeviceForm";

ReactModal.setAppElement('#root');

export function Modal() { 

    const { selectedDevice, updateDevices, addDevices, updateSelectedDevice } = useDevices();
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

    const handleChange = (name, value) => {
        updateSelectedDevice({
          ...selectedDevice,
          [name]: value,
        })
    }

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
                        item={selectedDevice}
                        handleChange={handleChange}
                        handleSave={handleSaveDevice}
                        handleCancel={closeModal}
                    />
                </ReactModal> 
            ) : null}
        </>
    );
}