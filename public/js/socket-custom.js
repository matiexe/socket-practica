var socket = io();
        //Escuchar
        socket.on('connect',function(){
            console.log('conectado al servidor');
        })

        socket.on('disconnect',function(){
            console.log('se perdio conexion con el servidor');
        });
        socket.on('enviarMensaje',function(msg){
            console.log(msg);
        })
        //enviar informacio
        socket.emit('enviarMensaje',{
            usuario:'Matias',
            mensaje:'hola Mundo'
        },function(res){
            console.log('servidor',res);
        });