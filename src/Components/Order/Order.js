import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    background: white;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0,0,0,.25);
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 50px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
    max-height: 450px;
    overflow-y: auto;
    margin-bottom: 20px;
`;

const OrderList = styled.ul`
    
`;

const Total = styled.div`
    display: flex;
    margin-bottom: 50px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrise = styled.div`
    text-align: right;
    min-width: 65px;
    margin-left: 30px;
    margin-right: 40px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({ orders, setOrders, setOpenItem }) => {

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    }

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order) => 
        order.count + result, 0);

    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderContent>
                { orders.length ?
                    <OrderList>
                        { orders.map((order, index) => <OrderListItem 
                            key={index}
                            order={order} 
                            deleteItem={deleteItem}
                            index={index}
                            setOpenItem={setOpenItem}
                        />) }
                    </OrderList> : 
                    <EmptyList>
                        Список заказов пуст
                    </EmptyList>
                }           
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrise>{formatCurrency(total)}</TotalPrise>
            </Total>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>  
    )
}