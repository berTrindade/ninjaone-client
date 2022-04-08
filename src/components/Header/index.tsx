import logoImg from "../../assets/logo.svg";
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img alt="Example of alt text" title="Example of title text"  src={logoImg} />
                <button type="button">
                    New Device
                </button>
            </Content>
        </Container>
    )
}