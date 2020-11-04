import styled from 'styled-components';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ForcedSquare;
    font-size: 1.2em;
    padding: 2em;
    border: 2px solid black;
    margin: 2em;
    box-shadow: 5px 5px black;
    background-color: white;
`;

export const Input = styled.input`
    border: 2px solid black;
    flex-grow: 1;
    min-width: 200px;
    height: 30px;
    padding-left: 5px;
    margin-right: 1em;
    &::placeholder {
        font-family: ForcedSquare;
        font-size: 1.2em;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;

export const TextArea = styled.textarea`
    border: 2px solid black;
    &::placeholder {
        font-family: ForcedSquare;
        font-size: 1.2em;
    }
    min-height: 100px;
    margin-bottom: 1em;
`;

const Button = styled.button`
    font-family: ForcedSquare;
    border-radius: 0;
    width: 100px;
    height: 40px;
    border: 2px solid black;
    box-shadow: 5px 5px black;
    margin: 0em 1em;
    &:last-of-type {
        margin: 0;
    }
    &.enabled {
        background-color: lightblue;
    }
    &.disabled {
        background-color: grey;
    }
    right: 0;
    font-size: 1em;
`;

export const ToggleButton = styled(Button)`
    &:hover.disabled {
        cursor: pointer;
        box-shadow: -5px -5px black;
    }
`;

export const SubmitButton = styled(Button)`
    &:hover:not(.disabled) {
        cursor: pointer;
        box-shadow: -5px -5px black;
    }
`;

export const SourceDestinationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1em;
`;
