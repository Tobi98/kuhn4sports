import { sbEditable } from "@storyblok/storyblok-editable";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import styled from "styled-components";

import { Image, Link as LinkInterface, RichText } from "./DynamicComponent";

interface TileImage {
    image: Image;
    description: RichText;
    moreDetail: LinkInterface;
    price: string;
    component: string;
    position: "left" | "right";
    _editable: string;
    _uid: string;
}

interface Props {
    blok: TileImage;
}

const TileImageBlock: FunctionComponent<Props> = ({ blok: { image, description, price, moreDetail, component, position, _editable, _uid } }) => {
    return (
        <BlockWrapper {...sbEditable({ image, description, price, component, position, _editable, _uid })} key={_uid} position={position}>
            {moreDetail ? (
                <Link href={moreDetail.cached_url} passHref>
                    <LinkInner>
                        <ImageBox>
                            <Img src={image.filename} alt={image.alt} title={image.title} />
                        </ImageBox>
                        <Description>
                            {render(description)}
                            <Price>{price}</Price>
                        </Description>
                    </LinkInner>
                </Link>
            ) : (
                <>
                    <ImageBox>
                        <Img src={image.filename} alt={image.alt} title={image.title} />
                    </ImageBox>
                    <Description>
                        {render(description)}
                        <Price>{price}</Price>
                    </Description>
                </>
            )}
        </BlockWrapper>
    );
};

export default TileImageBlock;

interface Position {
    position: "left" | "right";
}

const BlockWrapper = styled.div<Position>`
    grid-column: 3 / span 20;
    background: ${({ theme }) => theme.palette.primary.main};
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    direction: ${({ position }) => (position === "left" ? "ltr" : "rtl")};
    box-shadow: 2px 10px 62px 0 rgb(0 0 0 / 83%);

    ${({ theme }) => theme.breakpoints.up("md")} {
        min-height: 550px;
        max-height: 550px;
        overflow: hidden;
    }
`;

const ImageBox = styled.div`
    grid-column: span 24;
    height: 100%;
    overflow: hidden;

    ${({ theme }) => theme.breakpoints.up("md")} {
        grid-column: span 12;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Description = styled.div`
    grid-column: span 24;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${({ theme }) => theme.breakpoints.up("md")} {
        grid-column: span 12;
        padding: 50px;
    }

    h2 {
        font-size: 20px;

        ${({ theme }) => theme.breakpoints.up("md")} {
            font-size: 30px;
        }
    }

    p {
        font-size: 14px;

        ${({ theme }) => theme.breakpoints.up("md")} {
            font-size: 20px;
        }
    }
`;

const Price = styled.p`
    font-size: 20px;
    font-weight: 600;
    width: max-content;
    margin-left: auto;
`;

const LinkInner = styled.a`
    grid-column: span 24;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    cursor: pointer;
    color: black;
    text-decoration: none;
    ${({ theme }) => theme.breakpoints.up("md")} {
        min-height: 550px;
        max-height: 550px;
        overflow: hidden;
    }
`;
