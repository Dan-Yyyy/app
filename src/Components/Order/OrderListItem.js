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


export const OrderListItem = ({ order }) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>{order.count}</span>
        <ItemPrise>{formatCurrency(totalPriceItems(order))}</ItemPrise>
        <TrashButton/>
    </OrderItemStyled>
)