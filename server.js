const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'))


// Express HBS
hbs.registerPartials(__dirname + '/views/partials')
// [, callback]
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    res.render('home', {
        name: 'Edilberto'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})