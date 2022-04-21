
import ReactModal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useModal } from "../../hooks/useModal/index";
import { useDevices } from "../../hooks/useDevices";
import { DeviceForm } from "../DeviceForm";
import { useEffect } from "react";

export function Modal() { 

    const { isOpen, closeModal } = useModal();
    const { selectedDevice, addDevices, updateDevices } = useDevices();

    useEffect(() => {
        if(selectedDevice.id) 
            updateDevices();
        else addDevices();
    }, [selectedDevice]);

    const handleOnFinish = () => closeModal();

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
                        handleOnFinish={handleOnFinish}
                        handleCancel={closeModal}
                    />
                </ReactModal> 
            ) : null}
        </>
    );
}