import {envs}  from './config/env.js'
import {startServer}  from './server/server.js'

const main = () => {
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH
    })
}



//funcion agnostica(no tiene nombre) autoconvocada(se ejecuta con los parentesis al final) asincrona(async) que llama a la funcion main
( async() => {
    main()
})()
