const express = require('express')
const sass = require('node-sass-middleware')

const app = express()
const server = app.listen(3333, () => {
    console.log('App is running on port 3333')
})
app.set('view engine', 'pug')

app.use(sass({
    src: __dirname + '/sass',
    dest: __dirname + '/public',
    debug: true,
    outputStyle: 'compressed',
}))

app.use(express.static('./public'))

const links = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/about',
        name: 'About'
    }
]

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        links
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        links
    })
})