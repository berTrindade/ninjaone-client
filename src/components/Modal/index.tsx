
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
        console.log('first');

        console.log('selectedDevice', selectedDevice)

        if(selectedDevice.id) {

            console.log('selectedDevice.id', selectedDevice.id)

            updateDevices();
        }
        else {
            console.log('selectedDevice')

            addDevices();
        } 
        
        closeModal();
    }

    // const handleChange = (name, value) => {
    //     updateSelectedDevice({
    //       ...selectedDevice,
    //       [name]: value,
    //     })
    // }

    function getTitle() {
        return selectedDevice.id ? 'Edit device' : 'Add device';
    }

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