const express = require('express');
const UsersRoutes = require('./routes/UsersRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Online.');
});

app.use(UsersRoutes);

app.listen(3000);