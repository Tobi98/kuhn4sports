import { sbEditable } from "@storyblok/storyblok-editable";
import React, { FunctionComponent } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import styled from "styled-components";

import { DefaultBlok, RichText } from "./DynamicComponent";

interface ContactTile extends DefaultBlok {
    mapUrl: string;
    detail: RichText;
}

interface Props {
    blok: ContactTile;
}

const ContactTileBlock: FunctionComponent<Props> = ({ blok: { mapUrl, detail, component, _editable, _uid } }) => {
    return (
        <BlockWrapper {...sbEditable({ mapUrl, detail, component, _editable, _uid })} key={_uid}>
            <Map src={mapUrl} />
            <Detail>{render(detail)}</Detail>
        </BlockWrapper>
    );
};

export default ContactTileBlock;

const BlockWrapper = styled.div`
    grid-column: 3 / span 20;
    background: ${({ theme }) => theme.palette.primary.main};
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    box-shadow: 2px 10px 62px 0 rgb(0 0 0 / 83%);

    ${({ theme }) => theme.breakpoints.up("md")} {
        min-height: 550px;
        max-height: 550px;
    }
`;

const Map = styled.iframe`
    grid-column: span 24;
    width: 100%;
    min-height: 350px;
    border: 0;

    ${({ theme }) => theme.breakpoints.up("md")} {
        grid-column: span 15;
        min-height: 100%;
        width: 100%;
        height: 100%;
    }
`;

const Detail = styled.div`
    grid-column: span 24;
    padding: 25px;

    ${({ theme }) => theme.breakpoints.up("md")} {
        grid-column: span 9;
        padding: 50px;
    }

    h2 {
        font-size: 20px;

        ${({ theme }) => theme.breakpoints.up("md")} {
            font-size: 30px;
        }
    }

    p,
    a {
        font-size: 14px;
        color: black;

        ${({ theme }) => theme.breakpoints.up("md")} {
            font-size: 20px;
        }
    }
`;
