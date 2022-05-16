import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Blok } from './DynamicComponent';

const Space: FunctionComponent<Blok> = ({ blok }) => {
    return <SpaceWrapper />;
};

export default Space;

const SpaceWrapper = styled.div`
    grid-column: span 24;
    margin-top: 25px;
    margin-bottom: 25px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
        margin-top: 50px;
        margin-bottom: 50px;
    }
`;
