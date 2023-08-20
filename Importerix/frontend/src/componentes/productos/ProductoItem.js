import React from 'react';
import '../../styles/componentes/pages/ProductoPage.css'
const ProductoItem = (props) => {
    const {category, imagen, name, desc, price, cant } = props;

    return(
        <div className="productos" >
            <img src= {imagen} alt=""/>
            <div className="data">
            <p><strong>Categoria:</strong> {category}</p>
            <h4>{name}</h4>
            <div dangerouslySetInnerHTML={{__html:desc}}></div>
            <h3>${price}</h3>
            <p>Stock: {cant}</p>
            </div>
        </div>
    );

}

export default ProductoItem;