import styled from 'styled-components'

interface ContainerProps {
    isTrue: boolean;
}

export const ContainerHeader = styled.header<ContainerProps>`
height: 80px;
padding: 1rem;
background: #f0f0f5;
display: flex;
justify-content: space-between;
background: ${(props) => props.isTrue ? '#202020' : '#f0f0f5'};

div {
    font-size: 40px;
    font-weight: 100;
    font-family: cursive;
    color: ${(props) => props.isTrue ? '#ffffff' : '#141414'};
    position: relative;
    left: 10%;
}

button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    background: transparent;
    cursor: pointer;

    svg {
        width: 100%;
        height: 50px;
        transition: 0.4s;
        color: ${(props) => props.isTrue ? '#f0f0f5' : '#000000'};

        &:hover {
            color: #a0a0b3;
        }
    }
}
`


export const ContainerDiv = styled.div<ContainerProps>`
width: 100%;
height: 100vh;
background: ${(props) => props.isTrue ? '#141414' : '#a8a8b3'};
`