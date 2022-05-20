import React, { FunctionComponent, useEffect, useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import styled from "styled-components";

import { DefaultBlok, Image, RichText } from "../components/DynamicComponent";

interface Content extends DefaultBlok {
    aktive: boolean;
    component: "popUp";
    image: Image;
    startDate: string;
    text: RichText;
}
interface Props {
    content: Content;
}

const PopUp: FunctionComponent<Props> = ({ content: { aktive, component, image, startDate, text } }) => {
    const [shown, setShown] = useState<boolean>(aktive);

    useEffect(() => {
        const element = document.getElementById("__next");

        if (localStorage.getItem("popUpDate")) {
            if (localStorage.getItem("popUpDate") === startDate) {
                setShown(false);
            } else {
                element?.setAttribute("style", "overflow-y: hidden;     max-height: 100vh;");
            }
        } else {
            element?.setAttribute("style", "overflow-y: hidden;     max-height: 100vh;");
        }
    }, []);

    useEffect(() => {
        const element = document.getElementById("__next");

        if (!shown) {
            localStorage.setItem("popUpDate", startDate);
            element?.setAttribute("style", "");
        }
    }, [shown]);

    if (!aktive) {
        localStorage.removeItem("popUpDate");
    }

    if (!shown) {
        return null;
    }

    return (
        <>
            <Overlay />
            <Close onClick={() => setShown(false)} />
            <Wrapper>
                <Content>
                    {image.id !== null && (
                        <ImageBox>
                            <Img src={image.filename} alt={image.alt} title={image.title} />
                        </ImageBox>
                    )}
                    <Description image={image !== null}>{render(text)}</Description>
                </Content>
            </Wrapper>
        </>
    );
};

export default PopUp;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: white;
    opacity: 0.8;
`;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
`;

const Content = styled.div`
    position: relative;
    z-index: 101;
    opacity: 1;
    grid-column: 3 / span 20;
    background: ${({ theme }) => theme.palette.primary.main};
    margin-top: auto;
    margin-bottom: auto;
    display: grid;
    grid-template-columns: repeat(24, 1fr);

    ${({ theme }) => theme.breakpoints.up("md")} {
        min-height: 550px;
        max-height: 550px;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageBox = styled.div`
    grid-column: span 24;
    height: 100%;
    overflow: hidden;

    ${({ theme }) => theme.breakpoints.up("md")} {
        grid-column: span 12;
    }
`;

interface DescriptionProps {
    image: boolean;
}

const Description = styled.div<DescriptionProps>`
    grid-column: span 24;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${({ theme }) => theme.breakpoints.up("md")} {
        grid-column: span ${({ image }) => (image ? 12 : 24)};
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

const Close = styled.div`
    width: 35px;
    height: 35px;
    position: absolute;
    z-index: 101;
    top: 15px;
    right: 15px;
    display: block;
    cursor: pointer;

    ${({ theme }) => theme.breakpoints.up("md")} {
        width: 60px;
        height: 60px;
        top: 40px;
        right: 40px;
    }

    &:after,
    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 35px;
        height: 2px;
        margin: auto;
        background: black;

        ${({ theme }) => theme.breakpoints.up("md")} {
            width: 60px;
            height: 4px;
        }
    }

    &:after {
        transform: rotate(45deg);
    }
    &:before {
        transform: rotate(-45deg);
    }
`;
