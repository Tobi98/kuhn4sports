import Head from "next/head";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

interface Props {
    name: string;
}

const SEO: FunctionComponent<Props> = ({ name }) => {
    const router = useRouter();
    const path = router.asPath === "/" ? "" : router.asPath;
    const cannocialUrl = `https://kuhn4sports.eu${path}`;
    return (
        <Head>
            <title>{name} | Kuhn4sports</title>
            <meta name="description" content="KUHN4SPORTs bietet individuell gestaltete Werbemittel für Ihre Firma oder Veranstaltung an."></meta>
            <meta name="keywords" content="Werbemittel, individuell gestaltet, Werbeprodukte, Werbebotschaft, Sportevent, Promotion"></meta>
            <meta name="author" content="Kuhn4sports"></meta>
            <meta name="publisher" content="Kuhn4sports"></meta>
            <meta name="robots" content="index" />
            <link rel="canonical" href={cannocialUrl} />

            <meta property="og:title" content={`${name} | Kuhn4sports`} key="title" />
            <meta
                property="og:description"
                content="KUHN4SPORTs bietet individuell gestaltete Werbemittel für Ihre Firma oder Veranstaltung an."
                key="title"
            />
        </Head>
    );
};

export default SEO;
