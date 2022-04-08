import logoImg from "../../assets/logo.svg";
import { Container, Content } from './styles';
interface HeaderProps {
    openNewDeviceModal: () => void;
}

export function Header({ openNewDeviceModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Ninja" />
                <button type="button" onClick={openNewDeviceModal}>
                    New Device
                </button>
            </Content>
        </Container>
    )
}