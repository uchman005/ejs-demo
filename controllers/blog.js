export const getBlog = (req, res) => {
    res.render('blog', { page: "home" })
}

export const viewBlog = (req, res) => {
    res.render('blog', { page: "view" })
}

export const jp = (req, res) => {
    res.render('blog', { page: "jp" })
}