const express = require('express');
const rutas = express.Router();

const customerController = require('../controllers/customerController');

// rutas.get("/",(req,res) =>{
	// res.send("Hola mundo pero en node jajajajua");
// })

rutas.get('/',customerController.list);
//rutas.post('/add', customerController.delete);
rutas.get('/delete', customerController.save);
//rutas.get('/update/:id', customerController.edit);
//rutas.post('/update/:id', customerController.update);

module.exports = rutas;