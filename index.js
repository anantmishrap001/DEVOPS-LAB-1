const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => res.send('Hello, Jenkins CI/CD World!'));


app.listen(port, () => console.log(`Hello app running on port ${port}`));