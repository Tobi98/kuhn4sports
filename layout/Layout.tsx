import React, { FunctionComponent, useEffect, useState } from 'react';
import { StoryData } from 'storyblok-js-client';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Menu, { MenuProps } from './Menu';
import CookieBot from 'react-cookiebot';
import PopUp from './PopUp';

interface Props {
    footer: StoryData;
    menu: MenuProps[];
    popUp: any;
    children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = ({ footer, children, menu, popUp }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const updateMenu = (state: boolean) => {
        setMenuOpen(state);
    };

    useEffect(() => {
        const body = document.querySelector('body');

        if (body) {
            if (menuOpen) {
                body.style.overflowY = 'hidden';
            } else {
                body.style.overflowY = '';
            }
        }
    }, [menuOpen]);

    const cookiebotId: string = String(process.env.REACT_APP_COOKIEBOT);

    return (
        <>
            <PopUp content={popUp[0].content} />
            <Menu items={menu} open={menuOpen} menuState={updateMenu} />
            <Content open={menuOpen}>
                <Header menuOpen={menuOpen} menuState={updateMenu} />
                {children}
                <Footer footer={footer} />
            </Content>
            <CookieBot domainGroupId={cookiebotId} />
        </>
    );
};

export default Layout;

interface ContentProps {
    open: boolean;
}

const Content = styled.div<ContentProps>`
    transition: all 0.5s ease-in;
    margin-left: ${({ open }) => (open ? -100 : 0)}vw;
    position: relative;
    width: 100vw;
    background: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.breakpoints.up('sm')} {
        margin-left: ${({ open }) => (open ? -450 : 0)}px;
    }
`;
