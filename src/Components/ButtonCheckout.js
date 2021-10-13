import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;
    margin: 0 auto;
    background-color: #1368d1;
    border: 1px solid transparent;
    color: white;
    font-size: 21px;
    width: 250px;
    height: 65px;
    transition-property: color, background-color, border;
    transition-duration: .3s;
    &:hover {
        background-color: #edf5ff;
        color: black;
        border: 1px solid #1368d1;
    }
`;