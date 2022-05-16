import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

interface Props {
    name: string;
}

const SEO: FunctionComponent<Props> = ({ name }) => {
    const router = useRouter();
    const path = router.asPath === '/' ? '' : router.asPath;
    const cannocialUrl = `https://hm-autoaufbereitung.de${path}`;
    return (
        <Head>
            <title>{name} | HM Autoaufbereitung im Chiemgau</title>
            <meta
                name="description"
                content="HM Autoaufbereitung, Keramikversiegelung. Versiegle dein Auto mit unsere Keramikversieglung und erhöhe die Lebensdauer deines Lacks."
            ></meta>
            <meta name="keywords" content="Autoaufbereitung, Keramikversiegelung"></meta>
            <meta name="author" content="HM Autoaufbereitung"></meta>
            <meta name="publisher" content="HM Autoaufbereitung"></meta>
            <meta name="robots" content="index" />
            <link rel="canonical" href={cannocialUrl} />

            <meta property="og:title" content={`${name} | HM Autoaufbereitung im Chiemgau`} key="title" />
            <meta
                property="og:description"
                content="HM Autoaufbereitung, Keramikversiegelung. Versiegle dein Auto mit unsere Keramikversieglung und erhöhe die Lebensdauer deines Lacks."
                key="title"
            />
        </Head>
    );
};

export default SEO;
