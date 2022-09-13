const express = require('express')
const app = express()
const PORT = 9000
const productsRouter = require('./routers/routerProducts')

const server = app.listen(PORT, () => console.log('Server UP'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('public'))
app.use('/api/productos', productsRouter)