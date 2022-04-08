import styled from "styled-components";

export const Container = styled.div`

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:nth-child(2) {
                color: var(--text-title);
            }

            &:last-child {
                display: flex;
                gap: 1rem;
            }

            button {
                font-size: 1rem;
                color: #FFF;
                background-color: var(--blue-light);
                border: 0;
                padding: 0 2rem;
                border-radius: 0.25rem;
                height: 3rem;

                transition: filter 0.2s;
        
                &:hover {
                    filter: brightness(0.9);
                }
            }
        }
    }
`;