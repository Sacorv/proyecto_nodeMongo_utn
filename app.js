const express = require ('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const Empleo = require('./models/employ')

//IMPORTAMOS EL ARCHIVO DE VARIABLES .ENV
require('dotenv').config()

const app = express()

//asignamos el puerto por default del deploy en un hosting o el puerto 3000
const port = process.env.port || 3000;

//MIDDLEWARE PARA TRABAJAR CON JSON 
app.use(express.json());


// ----------------------------------------------------------------------
app.get('/all', (req, res)=> {
    User.find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({
            message: error
        }))
})


app.post('/createUser', (req, res) => {
    const user = User(req.body)
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>
        res.json({
            message:error
        }))
})


app.put('/:id',(req, res)=>{
    const {id} = req.params;
    const {name, userName} = req.body;
    User.updateOne({_id: id},{$set: {name, userName}})
        .then((data)=>res.json(data))
        .catch((error)=>
        res.json({
            message:error
        }))
})


app.delete('/:id',(req, res)=>{
    const {id} = req.params;
    User.deleteOne({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=>
        res.json({
            message:error
        }))
})



// -----------------------------------------------------------

//CONEXION MONGODB
//mongoose.connect();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conectado con MongoDB Atlas'))
    .catch((error)=>console.error(error))


app.listen(
    port, () => console.log(`Server escuchando en puerto ${port}`)
)

