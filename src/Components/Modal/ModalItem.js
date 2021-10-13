import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .5);
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    background-color: white;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
`;

const Content = styled.section`
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 20px 40px 40px;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Pacifico', cursive;
    font-size: 30px;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const counter = useCount();

    const order = {
        ...openItem,
        count: counter.count
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    return(
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <span>
                            {openItem.price.toLocaleString('ru-RU',
                            {style: 'currency', currency: 'RUB'})}
                        </span>
                    </HeaderContent>
                    <CountItem {...counter}/>
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                    <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )
};
    