const express = require('express');
const app = express();
const path = require('path');

app.use( express.static('public') );

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register.html', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login.html', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.post('/registro', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.post('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

const port = process.env.PORT || 3001;
app.listen(port, ()=>console.log(`Servidor corriendo en el puerto ${port}`))