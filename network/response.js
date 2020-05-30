exports.succes = function (req, res, message){
    res.send(message)
}

exports.error = function (req, res, message, status, details){
    console.error(details);

    res.status(status || 500).send({
        error: message,
        body: '',
    })
        
}