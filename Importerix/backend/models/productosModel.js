var pool=require('./db');


async function getProductos(){
   
        var query = 'select * from productos';
        var rows = await pool.query(query);
        return rows;
   
}

async function insertProductos(obj){
    try{
    var query = "insert into productos set ?";
    var rows = await pool.query(query,[obj]);
    return rows; 
}catch (error){
console.log(error);
throw(error);
}
}

async function deleteProductosById (id_productos){
    var query = "delete from productos where id_productos = ?";
    var rows = await pool.query(query,[id_productos]);
    return rows;
}

async function getProductosById(id_productos){
    var query="select * from productos where id_productos = ?";
    var rows = await pool.query(query,[id_productos]);
    return rows[0];
}

async function modificarProductosById(obj,id_productos){
    try{
        var query = "update productos set ? where id_productos = ?";
        var rows = await pool.query(query,[obj,id_productos]);
        return rows[0];
    }catch(error){
        throw error;
    }
}



module.exports={getProductos, insertProductos,deleteProductosById, getProductosById,modificarProductosById}