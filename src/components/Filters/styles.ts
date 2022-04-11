import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border-width: 0;
    border-style: solid;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 100%;
    flex-direction: row;

    button {
        border-style: solid;
        font-size: 100%;
        margin: 0;
        text-transform: none;
        background-color: transparent;
        background-image: none;
        cursor: pointer;
        padding: 0;
        margin-left: 0.25rem;
        width: 2.5rem;
        border-radius: 0.25rem;
        border-width: 1px;
        font-weight: 700;
    }
`;

export const Filter = styled.div`
    border-width: 0;
    border-style: solid;
    margin-right: 1rem;
    width: 50%;

    #sortBy {
        border-width: 0;
        border-style: solid;
        width: 100%;
        position: relative;
    }
`;

export const TWO = styled.div`
    border-width: 0;
    border-style: solid;
    display: flex;
    justify-content: space-between;
`;
