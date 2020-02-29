const express = require('express');

const app = express();

const port = 8001;

app.use(express.json());
app.use(require('./src/middleware/auth'));

app.use('/auth', require('./src/routes/auth'));

app.use('/user', require('./src/routes/user'));

app.listen(port, () => console.log(`App Started on post ${port}`));