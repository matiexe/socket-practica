const {io} = require('../server');
io.on('connection',(client)=>{
    console.log('Usuario conectado');
    client.emit('enviarMensaje',{
        usuario:'administrado',
        msg :'bienvenido a esta aplicacion'
    });
    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    })

    //escuchar cliente
    client.on('enviarMensaje',(data,cb)=>{
        console.log(data);
        client.broadcast.emit('enviarMensaje',data);
        // if(msg.usuario){
        //     cb({
        //         resp : ' todo salio bien'
        //     })
        // }else{
        //     cb({
        //         resp:'todo salio mal'
        //     })
        // }
    })
})