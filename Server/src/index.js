const http = require("http");
// const data = require("./utils/data")
const getCharById = require("./controllers/getCharById")

const PORT = 3001;



http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if(url.includes("/rickandmorty/character/")){
      let id = url.split("/").at(-1)
      getCharById(res,id)
    }

    // if (url.includes("/rickandmorty/character/")) {
    //   let id = url.split("/").at(-1);
    //   let character = data.find((char)=> char.id ===  Number(id))
      
      
    //   res.end(JSON.stringify(character));
    // }
    // else res.end("Error ruta no encontrada")
    
  })
  .listen(PORT, "localhost");
