import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductoItem from '../../componentes/productos/ProductoItem';


const ProductoPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      const cargarProductos = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/productos');
        setProductos (response.data);
        setLoading(false);
      };
      cargarProductos();
    }, []);
    return(
      < section className="holder" >
      <h2>Lista de Productos</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        productos.map(item => <ProductoItem key={item.id_productos}
          name={item.nombre} desc={item.descripcion} cant={item.stock} category={item.categoria} 
          price={item.precio} imagen={item.imagen} />)
      )}
  </section>
    );}

export default ProductoPage;