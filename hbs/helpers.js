const hbs = require('hbs')

// helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalize', (text) => {
    let palabras = text.split(' ')
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    })

    return palabras.join(' ')
})