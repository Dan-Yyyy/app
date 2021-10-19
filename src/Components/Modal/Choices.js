import React from "react";
import styled from "styled-components";

const ChoiceWrap = styled.div`
    column-count: 2;
    max-width: 500px;
    margin: 0 auto;
    column-gap: 15px;
`;

const ChoiceRadio = styled.input`
    width: 20px;
    height: 20px;
    position: relative;
    margin-right: 9px;
    &:after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: white;
        border: 1px solid #C4C4C4;
        cursor: pointer;
        border-radius: 50%;
    }
    &:checked:after {
        background-color: #C4C4C4;
    }
`;

const ChoiseLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Выберите:</h3>
            <ChoiceWrap>
                {openItem.choices.map((item, i) => (
                    <ChoiseLabel key={i}>
                        <ChoiceRadio type='radio'
                        name="choices"
                        checked={choice === item}
                        value={item}
                        onChange={changeChoices}/>
                        {item}
                    </ChoiseLabel>
                ))}
            </ChoiceWrap>
        </>
    )
}