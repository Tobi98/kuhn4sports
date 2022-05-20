import { sbEditable } from "@storyblok/storyblok-editable";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Blok } from "./DynamicComponent";

const Teaser: FunctionComponent<Blok> = ({ blok }) => {
    return (
        <TeaserWrapper {...sbEditable(blok)} key={blok._uid}>
            {blok.image.id && <StageImage src={blok.image.filename} alt={blok.image.alt} />}
            <Headline>{blok.headline}</Headline>
        </TeaserWrapper>
    );
};

export default Teaser;

const TeaserWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    grid-column: span 24;
    position: relative;
`;

const StageImage = styled.img`
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
`;

const Headline = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.palette.primary.main};
`;
