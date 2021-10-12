import React from 'react';
import styled from 'styled-components';
import DBMenu from './DBMenu';
import { ListItem } from './ListItem';
import banner from '../image/banner.png';

const MenuStyled = styled.main`
    background-color: #e5e1e1;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const Banner = styled.div`
    background-image: url(${banner});
    height: 210px;
    background-position: center;
    background-size: cover;
`;

export const Menu = () => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={DBMenu.burger}/>
        </SectionMenu>
        <SectionMenu>
            <h2>Закуски и напитки</h2>
            <ListItem itemList={DBMenu.other}/>
        </SectionMenu>
    </MenuStyled>
)