// const http = require("http");
// // const data = require("./utils/data")
// const getCharById = require("./controllers/getCharById")

// const PORT = 3001;



// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req;

//     if(url.includes("/rickandmorty/character/")){
//       let id = url.split("/").at(-1)
//       getCharById(res, +id)
//     }

//     // if (url.includes("/rickandmorty/character/")) {
//     //   let id = url.split("/").at(-1);
//     //   let character = data.find((char)=> char.id ===  Number(id))
      
      
//     //   res.end(JSON.stringify(character));
//     // }
//     // else res.end("Error ruta no encontrada")
    
//   })
//   .listen(PORT, "localhost");


const express = require('express');
const server = express();
const PORT = 3001;
const router = require("./routes/index")
const morgan = require("morgan")

server.use(express.json())
server.use(morgan("dev"))

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use("/rickandmorty", router)

server.listen(PORT, () => {
  console.log('Server raised in port: ' + PORT)
});
