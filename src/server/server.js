const express = require('express');
const path = require('path');


const startServer = (options) => {
    const {port, public_path = 'public'}= options;
    const app = express();
    //para poder usar middleware de express se usa la funcion use(express.static)
    app.use(express.static(public_path));//middleware de express que sirve archivos estaticos y esten disponibles en la carpeta public
   
   
    app.get('/', (req, res) => {

      const indexPath = path.join(__dirname + `../../../${public_path}public/index.html`);
      res.sendFile(indexPath);	  

    })
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })


}
module.exports = {
    startServer
}