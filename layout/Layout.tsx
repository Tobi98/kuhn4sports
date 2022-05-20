import React, { FunctionComponent, useEffect, useState } from 'react';
import { StoryData } from 'storyblok-js-client';
import styled from 'styled-components';
import Footer from './Footer';
import Header, { MenuProps } from './Header';
import CookieBot from 'react-cookiebot';
import PopUp from './PopUp';

interface Props {
    footer?: StoryData;
    menu: MenuProps[];
    popUp: any;
    children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = ({ footer, children, menu, popUp }) => {
    const cookiebotId: string = String(process.env.REACT_APP_COOKIEBOT);

    return (
        <>
            {/* <PopUp content={popUp[0].content} /> */}
            <Header menuItems={menu} />
            <Content open={false}>
                {children}
                {/* <Footer footer={footer} /> */}
            </Content>
            {/* <CookieBot domainGroupId={cookiebotId} /> */}
        </>
    );
};

export default Layout;

interface ContentProps {
    open: boolean;
}

const Content = styled.main<ContentProps>`
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
