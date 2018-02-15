const express = require('express');
const hbs = require('hbs');

let app = express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getYear', ()=>{return new Date().getFullYear();});
hbs.registerHelper('screamIt', (text)=>{return text.toUpperCase();});

app.set('view engine', 'hbs');
app.use(express.static(__dirname+ '/public'));

app.use((req, res, next)=>{
    let now = new Date().toDateString();
    console.log(`${now} ${req.method}`);
    next();
});


app.get('/', (req, res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home page new',
        wellcomeMsg: 'Hey there!'
    });
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About page',
    });
});

app.listen(3000, ()=>{
    console.log("Server started...");
});