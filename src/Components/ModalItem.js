import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

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
    margin-botoom: 20px;
`;

const NamePrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Pacifico', cursive;
    font-size: 30px;
    padding: 20px 50px 0 40px;
`;

export const ModalItem = ({openItem, setOpenItem}) => {

    function closeModal(e) {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if(!openItem) return null;

    return(
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <NamePrice>
                    <span>{openItem.name}</span>
                    <span>
                        {openItem.price.toLocaleString('ru-RU',
                        {style: 'currency', currency: 'RUB'})}
                        </span>
                </NamePrice>
                <Button/>
            </Modal>
        </Overlay>
    )
};
    