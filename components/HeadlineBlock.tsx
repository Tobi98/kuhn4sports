import { sbEditable } from '@storyblok/storyblok-editable';
import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { DefaultBlok } from './DynamicComponent';
interface Headline extends DefaultBlok {
    headline: string;
    headlineTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
interface Props {
    blok: Headline;
}

const HeadlineBlock: FunctionComponent<Props> = ({ blok: { headline, headlineTag, _editable, _uid, component } }) => {
    if (headlineTag === 'h1') {
        return (
            <Wrapper
                {...sbEditable({
                    headline,
                    headlineTag,
                    _editable,
                    _uid,
                    component
                })}
                key={_uid}
            >
                <H1>{headline}</H1>
            </Wrapper>
        );
    } else if (headlineTag === 'h2') {
        return (
            <Wrapper
                {...sbEditable({
                    headline,
                    headlineTag,
                    _editable,
                    _uid,
                    component
                })}
                key={_uid}
            >
                <H2>{headline}</H2>
            </Wrapper>
        );
    } else if (headlineTag === 'h3') {
        return (
            <Wrapper
                {...sbEditable({
                    headline,
                    headlineTag,
                    _editable,
                    _uid,
                    component
                })}
                key={_uid}
            >
                <H3>{headline}</H3>
            </Wrapper>
        );
    } else if (headlineTag === 'h4') {
        return (
            <Wrapper
                {...sbEditable({
                    headline,
                    headlineTag,
                    _editable,
                    _uid,
                    component
                })}
                key={_uid}
            >
                <H4>{headline}</H4>
            </Wrapper>
        );
    } else if (headlineTag === 'h5') {
        return (
            <Wrapper
                {...sbEditable({
                    headline,
                    headlineTag,
                    _editable,
                    _uid,
                    component
                })}
                key={_uid}
            >
                <H5>{headline}</H5>
            </Wrapper>
        );
    } else if (headlineTag === 'h6') {
        return (
            <Wrapper
                {...sbEditable({
                    headline,
                    headlineTag,
                    _editable,
                    _uid,
                    component
                })}
                key={_uid}
            >
                <H6>{headline}</H6>
            </Wrapper>
        );
    }

    return (
        <Wrapper
            {...sbEditable({
                headline,
                headlineTag,
                _editable,
                _uid,
                component
            })}
            key={_uid}
        >
            <Default>{headline}</Default>
        </Wrapper>
    );
};

export default HeadlineBlock;

const Wrapper = styled.div`
    grid-column: span 24;
    display: flex;
    justify-content: center;
`;

const HeadlineStyle = css`
    text-align: center;
    font-size: 25px;
    position: relative;
    width: max-content;
    margin: 0;

    ${({ theme }) => theme.breakpoints.up('sm')} {
        font-size: 35px;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 50px;
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;
        margin-left: -2.5%;
        margin-right: -2.5%;
        display: block;
        width: 105%;
        background: #0cbdff;
        bottom: 2px;
        height: 5px;

        ${({ theme }) => theme.breakpoints.up('sm')} {
            bottom: 4px;
            height: 10px;
        }

        ${({ theme }) => theme.breakpoints.up('md')} {
            bottom: 6px;
            height: 15px;
        }
    }
`;

const H1 = styled.h1`
    ${HeadlineStyle}
`;

const H2 = styled.h2`
    ${HeadlineStyle}
`;

const H3 = styled.h3`
    ${HeadlineStyle}
`;

const H4 = styled.h4`
    ${HeadlineStyle}
`;

const H5 = styled.h5`
    ${HeadlineStyle}
`;

const H6 = styled.h6`
    ${HeadlineStyle}
`;

const Default = styled.p`
    ${HeadlineStyle}
`;
