import { sbEditable } from "@storyblok/storyblok-editable";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

import DynamicComponent, { Blok } from "./DynamicComponent";

const Grid: FunctionComponent<Blok> = ({ blok }) => (
    <Root {...sbEditable(blok)} key={blok._uid}>
        {blok.columns.map((nestedBlok) => (
            <ListItem key={nestedBlok._uid}>
                <DynamicComponent blok={nestedBlok} />
            </ListItem>
        ))}
    </Root>
);

export default Grid;

const Root = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
`;

const ListItem = styled.li`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-column: span 24;
`;
