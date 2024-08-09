const DB = require('../model/ContactModel')





const createContact = async(req,res) => {
  const {name , surname , phone , desc , bussinesname} = req.body

  if(!name || !surname || !phone || !desc || !bussinesname){
    res.json("All Fields Are Required")
  }else{

    const create = await DB.create({
        name:name,
        surname:surname,
        phone:phone,
        desc:desc,
        bussinesname:bussinesname,
    })

    if(create){
        res.status(201).send("Succesfuly Created New COntact")
    }else{
        res.json("Something Went Wrong Please Try Again Later")
    }

  }
}

module.exports = createContact