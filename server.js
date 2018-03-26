/* eslint-disable */
const express = require('express');
const app = express()
const path = require('path');
const db = require('./db');
const { Product } = db.models

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/products', (req, res, next) => {
  Product.findAll()
    .then( products => res.send(products))
    .catch(next)
})

app.delete('/api/products/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then( product => product.destroy())
    .then(() => res.sendStatus(204))
    .catch(next)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on da port of ${port}`))

db.sync()
  .then(() => db.seed())
