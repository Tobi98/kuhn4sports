import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface MenuProps {
    url: string;
    name: string;
    position: number;
}

interface Props {
    items: MenuProps[];
    open: boolean;
    menuState: (state: boolean) => void;
}

const Menu: FunctionComponent<Props> = ({ items, open, menuState }) => {
    return (
        <Wrapper open={open}>
            <Close onClick={() => menuState(!open)} />
            {items.map((item: MenuProps) => (
                <MenuItem key={item.position}>
                    <Link passHref href={item.url === 'home' ? '/' : item.url}>
                        <LinkInner onClick={() => menuState(!open)}>{item.name}</LinkInner>
                    </Link>
                </MenuItem>
            ))}
        </Wrapper>
    );
};

export default Menu;

interface Toggle {
    open: boolean;
}

const Close = styled.div`
    width: 35px;
    height: 35px;
    position: absolute;
    top: 15px;
    left: 15px;
    display: block;

    ${({ theme }) => theme.breakpoints.up('sm')} {
        display: none;
    }

    &:after,
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 35px;
        height: 2px;
        margin: auto;
        background: black;
    }

    &:after {
        transform: rotate(45deg);
    }
    &:before {
        transform: rotate(-45deg);
    }
`;

const Wrapper = styled.nav<Toggle>`
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100vw - 30px);
    min-height: calc(100vh - 60px);
    background-color: ${({ theme }) => theme.palette.primary.main};
    padding-top: 60px;
    padding-left: 15px;
    padding-right: 15px;
    box-shadow: 2px 10px 62px 0 rgb(0 0 0 / 83%);

    ${({ theme }) => theme.breakpoints.up('sm')} {
        width: 390px;
        padding-left: 30px;
        padding-right: 30px;
    }
`;

const LinkInner = styled.a`
    width: 100%;
    color: black;
    font-size: 25px;
    font-weight: 300;
    text-decoration: 0;
`;

const MenuItem = styled.div`
    margin-bottom: 15px;
`;
