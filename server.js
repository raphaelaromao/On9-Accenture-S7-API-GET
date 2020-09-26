const express = require ('express')
const app = express()
const porta = 3000
const biografias = require('./biografias.json')

app.get('/biografias', (req,res) =>{
    res.json(biografias)
})

app.use(express.json())

app.listen(porta, function(){
    console.log('servidor rodando')
})

