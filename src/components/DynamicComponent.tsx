import React, { FunctionComponent } from "react";
import { StoryData } from "storyblok-js-client";

import Grid from "./Grid";
import HeadlineBlock from "./HeadlineBlock";
import ImageBlock from "./ImageBlock";
import LinkBlock from "./LinkBlock";
import Page from "./Page";
import Placeholder from "./Placeholder";
import Teaser from "./Teaser";
import TextBlock from "./TextBlock";

const Components: any = {
    teaser: Teaser,
    grid: Grid,
    page: Page,
    headline: HeadlineBlock,
    text: TextBlock,
    link: LinkBlock,
    image: ImageBlock,
};

export interface DefaultBlok {
    _editable: string;
    component: string;
    _uid: string;
}

export interface Image {
    id: number;
    alt: string;
    name: string;
    focus: any;
    title: string;
    filename: string;
    copyright: string;
    fieldtype: string;
}

export interface Link {
    url: string;
    cached_url: string;
    fieldtype: string;
    id: string;
    linktype: string;
    story: StoryData;
}

export interface RichText {
    type: "doc";
    content: Array<any>;
}

export interface Blok {
    blok: ColumnsBlok;
}

export interface ColumnsBlok {
    component: "page";
    _uid: string;
    body: Array<any>;
    headline?: string;
    image: Image;
    Logo: Image;
    columns: Array<ColumnsBlok>;
}

const DynamicComponent: FunctionComponent<any> = ({ blok }) => {
    if (typeof Components[blok.component] !== "undefined") {
        const Component = Components[blok.component];
        return <Component blok={blok} />;
    }

    return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
