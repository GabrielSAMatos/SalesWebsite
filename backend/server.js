const express = require('express');
const UsersRoutes = require('./routes/UsersRoutes');
const PostsRoutes = require('./routes/PostsRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Online.');
});

app.post('/test/:codig', (req, res) => {

    const query = req.query.name;
    const params = req.params.codig;
    const body = req.body
    return res.send(query + " " + params + " " + JSON.stringify(body));
});

app.use(UsersRoutes);
app.use(PostsRoutes);

app.listen(3000);