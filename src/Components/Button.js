import React from 'react';
import styled from 'styled-components';

const ButtonClick = styled.button`
    background-color: #1368d1;
    border: none;
    color: white;
    font-size: 21px;
    width: 250px;
    padding: 20px 0;
    text-aligh: center;
`;
export const Button = () => (
    <ButtonClick>
        Добавить
    </ButtonClick>
)