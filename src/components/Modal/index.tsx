import { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface ModalProps {
    isOpen: boolean;
    isEdit: boolean;
    onRequestClose: () => void;
}

export function Modal({ isOpen, isEdit, onRequestClose }: ModalProps) { 

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [capacity, setCapacity] = useState(0);

    const changeFilter = (filter: string) => setType(filter);

    const handleCreateNewDevice = (event: FormEvent) => {
        event.preventDefault();
    }

    return (
        <ReactModal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Close" />
            </button>

            <Container onSubmit={handleCreateNewDevice}>
                <h2>{ isEdit ? 'Edit Device' : 'Add user'}</h2>

                <input 
                    type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <select onChange={event => changeFilter(event.target.value)}>
                    <option defaultValue="">Filter: All</option>
                    <option value="WINDOWS_WORKSTATION">Device Type: Windows Workstation</option>
                    <option value="WINDOWS_SERVER">Device Type: Windows Server</option>
                    <option value="MAC">Device Type: Mac</option>
                </select>

                <input 
                    type="number"
                    placeholder="HDD Capacity"
                    value={capacity}
                    onChange={event => setCapacity(Number(event.target.value))}
                />

                <button type="submit">Add</button>
            </Container>
        </ReactModal>
    );
}