import styled from 'styled-components';

export const Root = styled.div`
    display: none;
    &.show {
        display: block;
    }
`;

export const Mask = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.8;
    background: black;
    display: none;
    &.show {
        display: block;
    }
`;

export const Content = styled.div`
    position: fixed;
    z-index: 200;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: none;
    &.show {
        display: block;
    }
`;

export const UpdateMessageContainer = styled.div`
    z-index: 999;
    margin: auto;
    top: auto;
    max-width: 900px;
`;
