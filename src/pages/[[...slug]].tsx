import React, { FunctionComponent } from "react";
import { StoryData } from "storyblok-js-client";

import DynamicComponent from "../components/DynamicComponent";
import SEO from "../components/SEO";
import { MenuProps } from "../layout/Header";
import Layout from "../layout/Layout";
import Storyblok, { useStoryblok } from "../utils/storyblok";

interface Props {
    story: StoryData;
    preview: boolean;
    locale: string;
    locales: Array<string>;
    defaultLocale: string;
    footer?: StoryData[];
    menuItems: Array<MenuProps>;
    popUp?: StoryData[];
}

interface PropsStatic {
    props: Props;
    revalidate: Number;
}

interface StaticProps extends Props {
    params: any;
}

const Page: FunctionComponent<Props> = ({ story, preview, locale, locales, defaultLocale, footer, menuItems, popUp }) => {
    const enableBridge = true;
    story = useStoryblok(story, enableBridge, locale);

    return (
        <>
            <SEO name={story.name} />
            <Layout menu={menuItems} popUp={popUp}>
                <DynamicComponent blok={story.content} />
            </Layout>
        </>
    );
};

export default Page;

export async function getStaticProps({ locale, locales, defaultLocale, params, preview = false }: StaticProps): Promise<PropsStatic> {
    const slug: string = params.slug ? params.slug.join("/") : "home";

    type Params = {
        version: "draft" | "published" | undefined;
        resolve_relations?: Array<string>;
        language: any;
        cv?: any;
    };

    const sbParams: Params = {
        version: "published", // or "published"
        language: locale,
    };

    if (preview) {
        sbParams.version = "draft";
        sbParams.cv = Date.now();
    }

    const { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

    const {
        data: { stories },
    } = await Storyblok.getStories({
        version: "draft",
        cv: Date.now(),
        resolve_links: "story",
    });

    const menuItems = getMenu(stories);

    return {
        props: {
            story: data ? data.story : false,
            preview,
            locale,
            locales,
            defaultLocale,
            menuItems,
        },
        revalidate: 600, // revalidate every 10 min
    };
}

const getMenu = (stories: Array<StoryData>): Array<MenuProps> => {
    const menu: Array<MenuProps> = [];

    stories.map((story: StoryData) => {
        if (story.content.component === "page") {
            const menuItem: MenuProps = { url: story.slug, name: story.name, position: story.position };
            menu.push(menuItem);
        }
    });

    return menu;
};

export async function getStaticPaths({ locales }: { locales: Array<string> }) {
    const { data } = await Storyblok.get("cdn/links/");

    const paths: { params: { slug: any }; locale: string }[] = [];
    Object.keys(data.links).forEach((linkKey) => {
        if (data.links[linkKey].is_folder) {
            return;
        }

        // get array for slug because of catch all
        const slug = data.links[linkKey].slug;
        let splittedSlug = slug.split("/");
        if (slug === "home") splittedSlug = false;

        // create additional languages
        for (const locale of locales) {
            paths.push({ params: { slug: splittedSlug }, locale });
        }
    });

    return {
        paths: paths,
        fallback: false,
    };
}
