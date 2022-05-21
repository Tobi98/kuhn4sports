import React, { FunctionComponent } from "react";
import { StoryData } from "storyblok-js-client";
import styled from "styled-components";

import DynamicComponent from "../components/DynamicComponent";

interface Props {
    footer: StoryData;
}

const Footer: FunctionComponent<Props> = ({ footer }) => {
    console.log("Fo ", footer);

    return <Wrapper>{footer && <DynamicComponent blok={footer.content} />}</Wrapper>;
};

export default Footer;

const Wrapper = styled.footer`
    width: 100%;
    background: ${({ theme }) => theme.palette.primary.main};
    padding-top: 40px;
    padding-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    margin-top: auto;
`;
