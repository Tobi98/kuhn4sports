export default async function exit(
    req: { query: { slug?: "" | undefined } },
    res: {
        clearPreviewData: () => void;
        getHeader: (arg0: string) => any;
        setHeader: (arg0: string, arg1: any) => void;
        redirect: (arg0: string) => void;
    },
) {
    const { slug = "" } = req.query;
    // Exit the current user from "Preview Mode". This function accepts no args.
    res.clearPreviewData();

    // set the cookies to None
    const cookies = res.getHeader("Set-Cookie");
    res.setHeader(
        "Set-Cookie",
        cookies.map((cookie: string) => cookie.replace("SameSite=Lax", "SameSite=None;Secure")),
    );

    // Redirect the user back to the index page.
    res.redirect(`/${slug}`);
}
