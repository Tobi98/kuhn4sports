import Link from "next/link";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { DefaultBlok, Link as ILink } from "./DynamicComponent";

interface LinkProps extends DefaultBlok {
    link: ILink;
}

interface Props {
    blok: LinkProps;
}

const LinkBlock: FunctionComponent<Props> = ({ blok: { link, component, _editable, _uid } }) => {
    return (
        <Link href={`/${link.cached_url}`} passHref>
            <LinkText target="_blank">{link.story.name}</LinkText>
        </Link>
    );
};

export default LinkBlock;

const LinkText = styled.a`
    color: black;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        color: white;
    }
`;
