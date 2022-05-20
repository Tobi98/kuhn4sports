import { sbEditable } from "@storyblok/storyblok-editable";
import Link from "next/link";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { DefaultBlok, Image, Link as LinkProps } from "./DynamicComponent";

interface ImageButton extends DefaultBlok {
    title: string;
    image: Image;
    link: LinkProps;
    linkText: string;
}

interface Props {
    blok: ImageButton;
}

const ImageButtonBlock: FunctionComponent<Props> = ({ blok: { title, image, link, linkText, component, _editable, _uid } }) => {
    const [height, setHeight] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getHeight = () => {
            if (ref.current) {
                setHeight(ref.current.clientWidth);
            }
        };
        window.addEventListener("resize", getHeight);
        getHeight();
    }, []);

    return (
        <Wrapper
            ref={ref}
            height={height}
            imageUrl={image.filename}
            {...sbEditable({ title, image, link, linkText, component, _editable, _uid })}
            key={_uid}
        >
            <Image src={image.filename} alt={image.alt} title={image.title} />
            <Link href={link.cached_url ? link.cached_url : ""} passHref>
                <LinkInner>
                    <Title>{title}</Title>
                    {linkText && <LinkText>{linkText}</LinkText>}
                </LinkInner>
            </Link>
        </Wrapper>
    );
};

export default ImageButtonBlock;

interface WrapperProps {
    height: number;
    imageUrl: string;
}

const Wrapper = styled.div<WrapperProps>`
    max-height: ${({ height }) => height}px;
    min-height: ${({ height }) => height}px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-shadow: 2px 10px 62px 0 rgb(0 0 0 / 83%);
    position: relative;
    overflow: hidden;

    &:hover {
        img {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
        }
    }

    &:after {
        content: "";
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.3;
    }
`;

const Image = styled.img`
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
        -webkit-transform: scale(1.2);
        transform: scale(1.3);
    }
`;

const LinkInner = styled.a`
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    flex-direction: column;
    color: black;
    text-decoration: none;
`;

const Title = styled.span`
    text-align: center;
    color: black;
    font-size: 25px;
    font-weight: 900;
`;

const LinkText = styled.span`
    margin-top: 15px;
    padding: 5px;
    border: 1px solid black;
    font-size: 18px;
`;
