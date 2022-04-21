import logoImg from "../../assets/logo.svg";
import { INITIAL_DEVICE_DATA } from "../../constants";
import { useDevices } from "../../hooks/useDevices";
import { useModal } from "../../hooks/useModal";
import { Container, Content } from './styles';

export function Header() {

    console.log('header :>> ');

    const { openModal } = useModal();

    const handleAddDevice = () => {
        console.log("handleAddDevice")

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