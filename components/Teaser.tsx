import React, { FunctionComponent } from 'react';
import { sbEditable } from '@storyblok/storyblok-editable';
import { Blok } from './DynamicComponent';
import styled from 'styled-components';

const Teaser: FunctionComponent<Blok> = ({ blok }) => {
    return (
        <TeaserWrapper {...sbEditable(blok)} key={blok._uid}>
            {blok.image && <StageImage src={blok.image.filename} alt={blok.image.alt} />}
        </TeaserWrapper>
    );
};

export default Teaser;

const TeaserWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    grid-column: span 24;
`;

const StageImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
