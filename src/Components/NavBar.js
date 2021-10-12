import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import buttonImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #1368d1;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;    
`;

const ButtonImg = styled.img`
    width: 32px;
    margin-bottom: 3px;
`;

const ButtonLogin = styled.button`
    border: none;
    background: none;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 16px;
    margin-right: 25px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        <ButtonLogin>
            <ButtonImg src={buttonImg} alt="sing"/>
            <p>войти</p>
        </ButtonLogin>
    </NavBarStyled>
);