import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu, { MenuProps } from './Menu';
import LogoSVG from '../assets/logo.svg';
import Link from 'next/link';

interface Props {
    menuState: (state: boolean) => void;
    menuOpen: boolean;
}

const Header: FunctionComponent<Props> = ({ menuState, menuOpen }) => {
    return (
        <Wrapper>
            <LogoWrapper>
                <Link href="/" passHref>
                    <a>
                        <Logo />
                    </a>
                </Link>
            </LogoWrapper>
            <BurgerBtn onClick={() => menuState(!menuOpen)} open={menuOpen} />
            <Overlay onClick={() => menuState(!menuOpen)} open={menuOpen} />
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.palette.primary.main};
    position: absolute;
    top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    position: relative;
`;

const Logo = styled(LogoSVG)`
    padding-top: 20px;
    padding-bottom: 20px;
`;

const LogoWrapper = styled.div`
    grid-column: 2 / span 6;

    ${({ theme }) => theme.breakpoints.up('sm')} {
        grid-column: 2 / span 4;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        grid-column: 2 / span 2;
    }
`;

interface Btn {
    open: boolean;
    onClick?: () => void;
}

const Overlay = styled.div<Btn>`
    position: absolute;
    z-index: 3;
    width: ${({ open }) => (open ? '100vw' : 0)};
    margin-right: ${({ open }) => (open ? 0 : 'auto')};
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    background: #b5b5b5;
    opacity: ${({ open }) => (open ? 0.8 : 0)};
    transition: all 0.8s ease-in;
    cursor: pointer;
`;

const BurgerBtn = styled.div<Btn>`
    grid-column: 23 / span 1;
    width: 25px;
    height: 15px;
    border-top: ${({ open }) => (open ? 0 : 2)}px solid black;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease-in;

    ${({ theme }) => theme.breakpoints.up('md')} {
        width: 50px;
        height: 30px;
        border-top: ${({ open }) => (open ? 0 : 4)}px solid black;
    }

    &:after,
    &:before {
        transition: all 0.5s ease-in;
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        background: black;
        height: 2px;
        margin-left: auto;

        ${({ theme }) => theme.breakpoints.up('md')} {
            height: 4px;
        }
    }

    &:after {
        width: ${({ open }) => (open ? '100%' : '17.5px')};
        top: 5.5px;
        transform: rotate(${({ open }) => (open ? 45 : 0)}deg);

        ${({ theme }) => theme.breakpoints.up('md')} {
            width: ${({ open }) => (open ? '100%' : '35px')};
            top: 11px;
        }
    }

    &:before {
        bottom: 0;
        top: 0;
        margin-top: auto;
        margin-bottom: ${({ open }) => (open ? 'auto' : 0)};
        transform: rotate(${({ open }) => (open ? -45 : 0)}deg);
    }
`;
