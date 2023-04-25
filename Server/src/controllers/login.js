
const arrayPassEimail = require("../utils/users")

const login = (req, res) => {
    const {email,password} = req.query


    
        const emailYPasFind = arrayPassEimail.find((user) => user.email === email && user.password === password)

         return emailYPasFind
         ? res.status(200).json({access: true})
         : res.status(404).json({access: true})
    
         
    
}

module.exports = login