// const axios = require("axios")


// const getCharById = (res, id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((resp)=> resp.data)
//     .then(data => {
//         let obj ={
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status:data.status
//         }
//         res.writeHead(200, {"Contenet-type": "application/json"})
//         .end(JSON.stringify(obj))
//     })
//     .catch(error => res.writeHead(500, {"Contenet-type": "text/plain"}).end(error.message))

// }

// module.exports = getCharById
const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character"

const getCharById = (req, res) => {
    const {id} = req.params

    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(data => {
        if(id && data.name){

             let character ={
            id: data.id,
            status:data.status,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            
        }
        
         return res.status(200).json(character)
    }
           
       return res.status(404).send("Not found")
        
    })

    .catch((error) =>  res.status(500).send(error.message)
    )
    
    
    

}

module.exports = getCharById