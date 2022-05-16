import styled from 'styled-components';
import React, { FunctionComponent } from 'react';
import { DefaultBlok, RichText } from './DynamicComponent';
import { render } from 'storyblok-rich-text-react-renderer';
import { sbEditable } from '@storyblok/storyblok-editable';

interface Tile extends DefaultBlok {
    text: RichText;
}

interface Props {
    blok: Tile;
}

const TileBlock: FunctionComponent<Props> = ({ blok: { text, component, _editable, _uid } }) => {
    return (
        <Wrapper {...sbEditable({ text, component, _editable, _uid })} key={_uid}>
            {render(text)}
        </Wrapper>
    );
};

export default TileBlock;

const Wrapper = styled.div`
    grid-column: 3 / span 20;
    background: ${({ theme }) => theme.palette.primary.main};
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 2px 10px 62px 0 rgb(0 0 0 / 83%);

    ${({ theme }) => theme.breakpoints.up('md')} {
        grid-column: 8 / span 10;
        min-height: 550px;
        max-height: 550px;
        padding: 50px;
    }

    h2 {
        font-size: 20px;
        text-align: center;
        margin-top: 0;
        margin-bottom: 25px;

        ${({ theme }) => theme.breakpoints.up('md')} {
            font-size: 30px;
            margin-bottom: 50px;
        }
    }

    p {
        font-size: 14px;

        ${({ theme }) => theme.breakpoints.up('md')} {
            font-size: 20px;
        }
    }
`;
