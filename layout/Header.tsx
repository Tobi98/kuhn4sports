import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/logo_header.png';

export interface MenuProps {
    url: string;
    name: string;
    position: number;
}

interface HeaderProps {
    menuItems: MenuProps[];
}

const Header: FunctionComponent<HeaderProps> = ({menuItems}) => {
    console.log("items ", menuItems);

    
    
    return (
        <Wrapper>
            <LogoWrapper>
                <Link href="/" passHref>
                    <a>
                        <Image src={Logo} alt='Logo Kuhn4sports'  />
                    </a>
                </Link>
            </LogoWrapper>
            <MenuItemsWrapper>
                {menuItems.reverse().map((item: MenuProps) => (
                    <MenuItem key={item.position}>
                        <Link passHref href={item.url === 'home' ? '/' : item.url}>
                            <LinkInner>{item.name}</LinkInner>
                        </Link>
                    </MenuItem>
                ))}
            </MenuItemsWrapper>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.palette.background.default};
    width: 100%;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    position: relative;
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

const MenuItemsWrapper = styled.div`
    grid-column: 12 / span 12;
    display: flex;
    align-items: center;
    gap: 25px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
        grid-column: 12 / span 12;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        grid-column: 12 / span 12;
    }
`;

const LinkInner = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.palette.primary.main};
`

const MenuItem = styled.div``;