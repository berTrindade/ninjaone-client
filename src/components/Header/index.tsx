import logoImg from "../../assets/logo.svg";
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Ninja" />
                <button type="button">
                    New Device
                </button>
            </Content>
        </Container>
    )
}