const axios = require("axios")


const getCharById = (res, id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((resp)=> resp.data)
    .then(data => {
        let obj ={
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status:data.status
        }
        res.writeHead(200, {"Contenet-type": "application/json"})
        .end(JSON.stringify(obj))
    })
    .catch(error => res.writeHead(500, {"Contenet-type": "text/plain"}).end("Personaje no se encontro"))

}

module.exports = getCharById