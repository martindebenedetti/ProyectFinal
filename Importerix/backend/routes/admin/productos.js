var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');
const util = require('util');
const cloudinary = require ('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload); 
const destroy = util.promisify(cloudinary.uploader.destroy);



router.get('/',async function (req,res,next){

    var productos = await productosModel.getProductos(); //busco los registros de la base.
    productos = productos.map(producto => {
      if (producto.img_id){
        const imagen = cloudinary.image(producto.img_id,{
          width:100,
          height:100,
          crop:'fill'
        });
        return {
          ...producto,
          imagen
        } 
      }else{
        return{
          ...producto,
          imagen:''
        }
      }
    });
    
      res.render('admin/productos',{
        layout: 'admin/layout',
        persona : req.session.nombre, 
        productos
      });
  });
  
  
  router.get('/eliminar/:id_productos',async(req,res,next)=>{
    var id_productos=req.params.id_productos;
    await productosModel.deleteProductosById(id_productos);
    res.redirect('/admin/productos')
  });
   
  router.get('/modificar/:id_productos',async(req,res,next)=>{
    let id_productos= req.params.id_productos;
    let producto = await productosModel.getProductosById(id_productos);
    res.render('admin/modificar',{
      layout: 'admin/layout',
      producto
    });
  });
  // diseño del form modificar
  router.post('/modificar', async (req,res,next)=>{
    try{
      let img_id = req.body.img_original;
      let borrar_img_vieja = false;
      if (req.body.img_delete==="1"){
        img_id = null;
        borrar_img_vieja=true;
      }else{
        if (req.files && Object.keys(req.files).length > 0){
          imagen = req.files.imagen;
          img_id = (await uploader(imagen.tempFilePath)).public_id;
          borrar_img_vieja = true;
        }
      }
      if (borrar_img_vieja && req.body.img_original){
        await (destroy(req.body.img_original));
      }
  
      let obj ={
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        stock: req.body.stock,
        precio: req.body.precio,
        categoria: req.body.categoria,
        img_id
      }
      await productosModel.modificarProductosById(obj, req.body.id_productos);
      res.redirect('/admin/productos');
    }catch(error){
      console.log(error)
      res.render('admin/modificar',{
        layout: 'admin/layout',
        error: true,message: 'No se logro modificar los datos del producto'
      });
    }
  });
  // diseño del form agregar
  router.get('/agregar', (req,res,next)=>{
    res.render('admin/agregar',{
     layout: 'admin/layout'
    }); 
   });
  
   router.post('/agregar', async(req,res,next)=>{
    try{
      let img_id = '';
      if(req.files && Object.keys(req.files).length > 0){
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
      }
      
      if(req.body.nombre != "" && req.body.descripcion != "" && req.body.stock !="" && req.body.precio !="" && req.body.categoria !=""){
        await productosModel.insertProductos({
          ...req.body, 
           img_id
        });
        res.redirect('/admin/productos')
  
      }else{
        res.render('admin/agregar',{
          layout:'admin/layout',
          error: true, 
          message:'Todos los campos son requeridos'
        })
      }
    }catch(error){
      console.log(error)
      res.render('admin/agregar',{
        layout:'admin/layout',
        error:true,
        message:'No se cargo el producto'
      });
    }
   });


   

module.exports = router;

