import express from 'express';
import blog from './router/blog.js'
import { home } from './controllers/index.js';
const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', home);
app.use('/blog', blog)
// app.get for creating a GET route
// app.post for creating a POST route
// app.put for creating a PUT route
// app.delete for creating a DELETE route
//app.all for creating a route that handles all HTTP methods

// app.all('*', (req, res) => {

// })
app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
});