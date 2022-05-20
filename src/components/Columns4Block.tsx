import React, { FunctionComponent } from "react";
import styled from "styled-components";

import DynamicComponent, { DefaultBlok } from "./DynamicComponent";

interface Columns extends DefaultBlok {
    column: Array<any>;
}
interface Props {
    blok: Columns;
}

const Columns4Block: FunctionComponent<Props> = ({ blok: { column, component, _editable, _uid } }) => {
    return (
        <Wrapper>
            {column.map((item) => (
                <Column key={item._uid}>
                    <DynamicComponent blok={item} />
                </Column>
            ))}
        </Wrapper>
    );
};

export default Columns4Block;

const Wrapper = styled.div`
    grid-column: 3 / span 20;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
`;

const Column = styled.div`
    grid-column: span 24;
    padding-left: 20px;
    padding-right: 20px;

    ${({ theme }) => theme.breakpoints.up("sm")} {
        grid-column: span 12;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
        grid-column: span 6;
    }
`;
