import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { DefaultBlok } from './DynamicComponent';
import JuicerFeed from 'react-juicer-feed';

interface SocialMedia extends DefaultBlok {
    apiKey: string;
}

interface Props {
    blok: SocialMedia;
}

const SocialMediaBlock: FunctionComponent<Props> = ({ blok: { apiKey, component, _editable, _uid } }) => {
    return (
        <Wrapper>
            <JuicerFeed feedId={apiKey} />
        </Wrapper>
    );
};

export default SocialMediaBlock;

const Wrapper = styled.div`
    grid-column: 3 / span 20;
`;
