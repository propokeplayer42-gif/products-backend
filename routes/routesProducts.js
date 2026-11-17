import express from "express";

const routerProduct = express.Router();

//////////////rutas de productos//////////////
routerProduct.get('/', (req, res) => {
  console.log("entro a la ruta home actualizada")


    /////////error simulado/////////
    res.status(400);
    throw new Error("Error simulado");
    /////////////////////////////////
    

  res.send('Hello World!')
})

routerProduct.post('/', (req, res) => {
  console.log("entro a la ruta home de post")
  const products = [
    {name: "camara profesional", id : "1"},
    {name: "micro profesional", id : "2"}
  ]
  res.json({
    "productos":products});
})

export default routerProduct;