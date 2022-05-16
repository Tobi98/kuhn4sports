import React, { FunctionComponent } from 'react';
import DynamicComponent, { Blok } from './DynamicComponent';

const Global: FunctionComponent<Blok> = ({ blok }) => {
    return (
        <>
            {blok.body.map((nestedBlok) => (
                <DynamicComponent key={nestedBlok._uid} blok={nestedBlok} />
            ))}
        </>
    );
};

export default Global;
