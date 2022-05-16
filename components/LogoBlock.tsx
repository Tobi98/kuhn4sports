import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { DefaultBlok, Image } from './DynamicComponent';

interface Logo extends DefaultBlok {
    logo: Image;
}

interface Props {
    blok: Logo;
}

const LogoBlock: FunctionComponent<Props> = ({ blok: { logo, component, _editable, _uid } }) => {
    return (
        <Wrapper>
            <img src={logo.filename} alt={logo.alt} title={logo.title} />
        </Wrapper>
    );
};

export default LogoBlock;

const Wrapper = styled.div`
    padding-top: 16px;
`;
