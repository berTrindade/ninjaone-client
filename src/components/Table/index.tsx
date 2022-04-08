import { useState } from "react";
import { Modal } from "../Modal";
import deleteImg from "../../assets/delete.svg";
import { Container } from "./styles";

export function Table() {

    const [isNewDeviceModalOpen, setIsNewDeviceModalOpen] = useState(false);
    const [isEdit, seIsEdit] = useState(false);

    const handleOpenEditDeviceModal = () =>  {
        setIsNewDeviceModalOpen(true);
        seIsEdit(true);
    }

    const handleCloseNewDeviceModal = () => {
        setIsNewDeviceModalOpen(false);
        seIsEdit(false);
    }

    return (
        <>
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>
                            <button type="button" onClick={() => {}}>
                                ID
                            </button>
                            </th>
                            <th>System Name</th>
                            <th>Type</th>
                            <th>HDD Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SUSAN-DESKTOP</td>
                            <td>Window Workstation</td>
                            <td>128 GB</td>
                            <td>
                                <button type="button">
                                    <img src={deleteImg} alt="Delete" />
                                </button>
                                <button type="button">
                                    <img src={deleteImg} alt="Delete" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>MAC-LOCAL-FREDDY</td>
                            <td>Mac</td>
                            <td>256 GB</td>
                            <td>
                                <button type="button">
                                    <img src={deleteImg} alt="Delete" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>SMART-SERVER</td>
                            <td>Window Server</td>
                            <td>1024 GB</td>
                            <td>
                                <button type="button">
                                    <img src={deleteImg} alt="Delete" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Container>
            <Modal 
                isEdit={isEdit}
                isOpen={isNewDeviceModalOpen}
                onRequestClose={handleCloseNewDeviceModal}
            />
        </>
    );
}

