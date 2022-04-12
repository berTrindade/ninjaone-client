import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
    }

    input {
        width: 100%;
        padding: 0 0.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: var(--input-background);
        font-weight: 400;
        font-size: 1rem;
        margin: 0.5rem 0 0.8rem 0;

        &::placeholder {
            color: var(--text-body);
        } 
    }

    div + input {
        margin-bottom: 0.8rem;
    }

    #type {
        margin-top: 0.5rem;
    }
`;

export const ActionsButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    button {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
}
`

export const ErrorMessage = styled.p`
    color: var(--error);
    font-size: 1rem;
    padding: 0 0 0.5rem 0;

    &::before {
        display: inline;
        content: "⚠ ";
    }
`;