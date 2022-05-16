import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { DefaultBlok, Image, Link as ILink } from './DynamicComponent';

interface ImageLink extends DefaultBlok {
    icon: Image;
    link: ILink;
}

interface Props {
    blok: ImageLink;
}

const ImageLinkBlock: FunctionComponent<Props> = ({ blok: { icon, link, component, _editable, _uid } }) => {
    return (
        <Link href={link.url}>
            <LinkInner target="_blank">
                <img src={icon.filename} alt={icon.alt} title={icon.title} />
            </LinkInner>
        </Link>
    );
};

export default ImageLinkBlock;

const LinkInner = styled.a`
    cursor: pointer;
    margin-right: 10px;
`;
