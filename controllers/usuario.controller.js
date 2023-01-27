const { ObjectId } = require("mongodb");
const usuario = require("../models/user.model");
const bcrypt = require('bcrypt')

const findAll = async (req, res) => {
  try {
    const usuarios = await usuario.find();
    return res.json(usuarios);
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message,
    });
  }
};
const findOndByName = async (req, res) => {
  try {
    const filter = {
      usuario: req.params.usuario,
    };

    const usuarios = await usuario.find(filter);
    return res.json({ usuarios });
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message,
    });
  }
};



const update = async (req, res) => {
  let id = req.params.id;
  let {
    usuario,
    email,
    password,
   
  } = req.body;
  try {
    let producto;
    await product.findByIdAndUpdate(
      id,
      { usuario,
        email,
        password, },
      (err, prod) => {
        if (err) {
          console.log(err);
        } else {
          producto = prod;
        }
      }
    );

    return res.json({
      msg: "producto guardado",
      details: producto,
    });
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message,
    });
  }
};




const save = async (req, res) => {
  try {
    const sal = await bcrypt.genSalt(10);
    
    const user = new usuario(req.body);
    user.password = await bcrypt.hash(user.password, sal)
    const respuesta = user.save();

    return res.json({
      msg: "usuario guardado",
      details: respuesta,
    });
  } catch (e) {
    return res.json({
      msg: "error",
      details: e.message,
    });
  }
};
const del = async (req, res) => {
  try {
    await product.deleteOne({ name: req.params.name });
    return res.json({
      msg: "Ok!",
      details: `${req.params.name} ha sido borrado`,
    });
  } catch (e) {
    console.log(error);
    return res.json({
      msg: "error",
      details: error.message,
    });
  }
};

module.exports = {
  findAll,
  findOndByName,
  save,
  del,
  update,
};
