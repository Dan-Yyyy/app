import React from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.svg';
import {totalPriceItems} from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: unset;
    background-image: url(${trashImg});
    background-position: center;
    background-size: no-repeat;
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 14px 0;
    font-size: 20px;
    flex-wrap: wrap;

`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrise = styled.span`
    margin-left: 30px;
    margin-right: 14px;
    min-width: 65px;
    text-align: right;
`;

const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`;


export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
    const topping = order.topping.filter(item => item.checked)
    .map(item => item.name)
    .join(', ');
    
    return (
        <OrderItemStyled onClick={() => setOpenItem({...order, index})}>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span>{order.count}</span>
            <ItemPrise>{formatCurrency(totalPriceItems(order))}</ItemPrise>
            <TrashButton onClick={() => deleteItem(index)}/>
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemStyled>
    )
};