import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    column-count: 2;
    max-width: 500px;
    margin: 0 auto;
    column-gap: 15px;
`;

const ToppingLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const ToppingCheckbox = styled.input`
    width: 24px;
    height: 24px;
    position: relative;
    margin-right: 20px;
    &:after {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        background-color: white;
        border: 1px solid #C4C4C4;
        cursor: pointer;
    }
    &:checked:after {
        background-color: #C4C4C4;
    }
`;

export function Toppings ({ toppings, checkToppings }) {
    return (
        <>
            <h3>Добавки</h3>
            <ToppingWrap>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                        <ToppingCheckbox type='checkbox'
                        checked={item.cheked}
                        onChange={() => checkToppings(i)}/>
                        {item.name}
                    </ToppingLabel>
                ))}
            </ToppingWrap>
        </>
    )
}