const express = require('express')
const app = express()
const server = app.listen(3333, () => {
    console.log('App is running on port 3333')
})
app.set('view engine', 'pug')

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