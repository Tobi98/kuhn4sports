export default async function preview(req: { query: { secret?: any; slug?: any; }; url: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; setPreviewData: (arg0: {}) => void; getHeader: (arg0: string) => any; setHeader: (arg0: string, arg1: any) => void; redirect: (arg0: string) => void; }) {
    const { slug = "" } = req.query;
    // get the storyblok params for the bridge to work
    const params = req.url.split("?");

    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (req.query.secret !== "MY_SECRET_TOKEN") {
        return res.status(401).json({ message: "Invalid token" });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});

    // Set cookie to None, so it can be read in the Storyblok iframe
    const cookies = res.getHeader("Set-Cookie");
    res.setHeader(
        "Set-Cookie",
        cookies.map((cookie: string) =>
            cookie.replace("SameSite=Lax", "SameSite=None;Secure")
        )
    );

    // Redirect to the path from entry
    res.redirect(`/${slug}?${params[1]}`);
}
