export interface Story {
    name: string;
    created_at: string;
    published_at: string;
    id: number;
    uuid: string;
    content: any;
    slug: string;
    full_slug: string;
    sort_by_date: any;
    position: number;
    tag_list: Array<any>;
    is_startpage: boolean;
    parent_id: number;
    meta_data: any;
    group_id: string;
    first_published_at: string;
    release_id: any;
    lang: string;
    path: string;
    alternates: Array<any>;
    default_full_slug: any;
    translated_slugs: any;
}
