const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({
    defaultlayout: 'main'
}));

app.set('view engine', 'handlebars');

const port = 3000;

app.get('/',(req, res) => {
    res.send('Welcome to Social Media App');
});

app.get('/about',(req, res) => {
    res.send('About Page');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})