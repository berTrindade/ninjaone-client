import logoImg from "../../assets/logo.svg";
import { INITIAL_DEVICE_DATA } from "../../constants";
import { useDevices } from "../../hooks/useDevices";
import { useModal } from "../../hooks/useModal";
import { Container, Content } from './styles';

export function Header() {

    const { openModal } = useModal();
    const { updateSelectedDevice } = useDevices()

    const handleAddDevice = () => {
        updateSelectedDevice(INITIAL_DEVICE_DATA);
        openModal();
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Ninja" />
                <button type="button" onClick={handleAddDevice}>
                    New Device
                </button>
            </Content>
        </Container>
    )
}