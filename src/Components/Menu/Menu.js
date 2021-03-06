import React from 'react';
import styled from 'styled-components';
import DBMenu from '../DBMenu';
import { ListItem } from './ListItem';
import { Banner } from  './Banner';

const MenuStyled = styled.main`
    background-color: #e5e1e1;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem 
                itemList={DBMenu.burger}
                setOpenItem={setOpenItem}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски и напитки</h2>
            <ListItem 
                itemList={DBMenu.other}
                setOpenItem={setOpenItem}/>
        </SectionMenu>
    </MenuStyled>
)