const blogs = [
  {
    id: 1,
    title: 'My first blog',
    content: 'This is the content of my first blog',
    author: 'John Doe',
    date: '2021-01-01'
  },
  {
    id: 2,
    title: 'My second blog',
    content: 'This is the content of my second blog',
    author: 'Jane Doe',
    date: '2021-01-02'
  }
]
export const home = (req, res) => {
  res.render('index', { blogs });
}