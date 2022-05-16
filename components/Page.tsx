import DynamicComponent, { Blok } from './DynamicComponent';
import { sbEditable } from '@storyblok/storyblok-editable';
import React, { FunctionComponent } from 'react';

const Page: FunctionComponent<Blok> = ({ blok }) => {
    return (
        <main {...sbEditable(blok)} key={blok._uid}>
            {blok.body ? blok.body.map((blok) => <DynamicComponent blok={blok} key={blok._uid} />) : null}
        </main>
    );
};

export default Page;
