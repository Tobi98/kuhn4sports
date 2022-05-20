import React, { FunctionComponent } from "react";
import styled from "styled-components";

import DynamicComponent, { DefaultBlok } from "./DynamicComponent";

interface Links extends DefaultBlok {
    links: Array<any>;
}

interface Props {
    blok: Links;
}

const LinksBlock: FunctionComponent<Props> = ({ blok: { links, component, _editable, _uid } }) => {
    return (
        <UnorderList type={links[0].component}>
            {links?.map((link) => (
                <ListItem key={link._ui}>
                    <DynamicComponent blok={link} />
                </ListItem>
            ))}
        </UnorderList>
    );
};

export default LinksBlock;

interface List {
    type: "link" | "imageLink";
}

const UnorderList = styled.ul<List>`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: ${({ type }) => (type === "link" ? "column" : "row")};
`;

const ListItem = styled.li`
    margin-bottom: 16px;
`;
