const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('XOXO Course API Running');
});



app.listen(port, () => {
    console.log('XOXO Course Server running on port', port);
})