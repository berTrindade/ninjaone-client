import { Container } from "./styles";

export function Table() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
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
                            <button type="button">Edit</button>
                            <button type="button">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>MAC-LOCAL-FREDDY</td>
                        <td>Mac</td>
                        <td>256 GB</td>
                        <td>
                            <button type="button">Edit</button>
                            <button type="button">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>SMART-SERVER</td>
                        <td>Window Server</td>
                        <td>1024 GB</td>
                        <td>
                            <button type="button">Edit</button>
                            <button type="button">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}