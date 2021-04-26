const express = require("express") // "express" é a biblioteca, require é a função que está chamando o express, const é a variavel onde a chamada será armazenada
const server = express() // função que vem da bib express (os dois tem o mesmo nome)
const routes = require("./routes")
const path = require("path")

//Usando template engine
server.set('view engine', 'ejs')

//Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

// habilitar arquivos estaticos
server.use(express.static("public"))

//Usar o req body
server.use(express.urlencoded({extended: true}))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando')) // recebe o pedido do cliente para ver a pagina que está no servidor