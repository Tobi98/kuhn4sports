import Teaser from './Teaser';
import Grid from './Grid';
import Placeholder from './Placeholder';
import Page from './Page';

import React, { FunctionComponent } from 'react';
import TileImageBlock from './TileImageBlock';
import Space from './Space';
import HeadlineBlock from './HeadlineBlock';
import TileBlock from './TileBlock';
import SocialMediaBlock from './SocialMediaBlock';
import ContactTileBlock from './ContactTileBlock';
import Global from './Global';
import Columns4Block from './Columns4Block';
import LogoBlock from './LogoBlock';
import TextBlock from './TextBlock';
import LinksBlock from './LinksBlock';
import LinkBlock from './LinkBlock';
import ImageLinkBlock from './ImageLinkBlock';
import { StoryData } from 'storyblok-js-client';
import ColumnsBlock from './ColumsBlock';
import ImageButtonBlock from './ImageButtonBlock';
import ImageBlock from './ImageBlock';

const Components: any = {
    teaser: Teaser,
    // grid: Grid,
    // tileImage: TileImageBlock,
    page: Page,
    // space: Space,
    // headline: HeadlineBlock,
    // tile: TileBlock,
    // socialMedia: SocialMediaBlock,
    // contactTile: ContactTileBlock,
    // global: Global,
    // columns4: Columns4Block,
    // logo: LogoBlock,
    // text: TextBlock,
    // links: LinksBlock,
    // link: LinkBlock,
    // imageLink: ImageLinkBlock,
    // columns: ColumnsBlock,
    // imageButton: ImageButtonBlock,
    // image: ImageBlock
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
    type: 'doc';
    content: Array<any>;
}

export interface Blok {
    blok: ColumnsBlok;
}

export interface ColumnsBlok {
    component: 'page';
    _uid: string;
    body: Array<any>;
    headline?: string;
    image: Image;
    Logo: Image;
    columns: Array<ColumnsBlok>;
}

const DynamicComponent: FunctionComponent<any> = ({ blok }) => {
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component];
        return <Component blok={blok} />;
    }

    return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
