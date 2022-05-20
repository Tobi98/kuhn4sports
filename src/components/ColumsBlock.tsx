import { sbEditable } from "@storyblok/storyblok-editable";
import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import DynamicComponent, { DefaultBlok } from "./DynamicComponent";

interface Columns extends DefaultBlok {
    columns: Array<any>;
    schema: string;
}

interface Props {
    blok: Columns;
}

const ColumnsBlock: FunctionComponent<Props> = ({ blok: { columns, schema, component, _editable, _uid } }) => {
    return (
        <Wrapper {...sbEditable({ columns, schema, component, _editable, _uid })} key={_uid}>
            {columns.map((column) => (
                <Column key={column._uid} columns={Number(schema)}>
                    <DynamicComponent blok={column} />
                </Column>
            ))}
        </Wrapper>
    );
};

export default ColumnsBlock;

const Wrapper = styled.div`
    grid-column: 3 / span 20;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-row-gap: 25px;

    ${({ theme }) => theme.breakpoints.up("sm")} {
        grid-column-gap: 15px;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }
`;

interface ColumnsProps {
    columns: number;
}

const Column = styled.div<ColumnsProps>`
    grid-column: span 24;

    ${({ theme }) => theme.breakpoints.up("sm")} {
        ${({ columns }) =>
            columns > 1
                ? css`
                      grid-column: span 12;
                  `
                : css`
                      grid-column: span 24;
                  `}
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
        grid-column: span ${({ columns }) => 24 / columns};
    }
`;
