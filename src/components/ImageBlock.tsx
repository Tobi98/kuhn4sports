import { sbEditable } from "@storyblok/storyblok-editable";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { DefaultBlok, Image as ImageProp } from "./DynamicComponent";

interface ImageProps extends DefaultBlok {
    image: ImageProp;
}

interface Props {
    blok: ImageProps;
}

const ImageBlock: FunctionComponent<Props> = ({ blok: { image, component, _editable, _uid } }) => {
    return (
        <div {...sbEditable({ image, component, _editable, _uid })} key={_uid}>
            <Image src={image.filename} alt={image.alt} title={image.title} />
        </div>
    );
};

export default ImageBlock;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
