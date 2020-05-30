const express = require('express');
const response = require ('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', function(req,res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then((messageList)=>{
            response.succes(req, res, messageList, 200);
        })
        .catch(e =>{
            response.error(req, res, 'Unexpected error', 500);
        })
});

router.post('/', function(req, res){

    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=> {
        response.succes(req, res, fullMessage, 201);
    })
    .catch(e => {
        response.error(req, res, 'Información invalida', 400, 'Error en el contenido');
    })

});

router.patch('/:id', function(req, res){
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.succes(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })

    res.send('Ok');
});

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.succes(req, res, 'Usuario eliminado');
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })
})

module.exports = router;