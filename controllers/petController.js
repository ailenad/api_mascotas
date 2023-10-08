const petModel = require("../models/petModel");

exports.crearMascota = async(req, res)=>{
    try{
        console.log(req.usuario.id)
        const { name, raza, age, description } = req.body;
      const ownerID= req.usuario.id;
     
  
      const mascota = new petModel({
        name,
        raza,
        age,
        description,
        owner: ownerID, 
      });

      await mascota.save();
      
      res.status(201).json({
        msg:'Mascota creada exitosamente',
        data:mascota
      })

    }catch(error){
        console.error('Error al registrar mascota:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}