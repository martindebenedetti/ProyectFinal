import React from "react";
import "../../styles/componentes/pages/HomePage.css";

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="img/home.jpg" className="portada" alt="tienda"></img>
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Nuestra historia</h2>
          <p>
            Nuestro equipo de expertos en computación se formó en 2003, cuando
            vimos una oportunidad en el mercado para ofrecer productos de
            computación de alta calidad a precios competitivos. Empezamos como
            una pequeña empresa, pero hemos crecido rápidamente a lo largo de
            los años. Hoy en día, somos uno de los principales proveedores de
            productos importados de computación en el mundo. Siempre estamos
            buscando nuevas formas de mejorar nuestra empresa. Creemos que la
            tecnología es poderosa y que puede cambiar el mundo. Por eso nos
            comprometemos a ofrecer productos de alta calidad a precios
            competitivos, junto con un excelente servicio al cliente. Estamos
            orgullosos de lo que hemos logrado hasta ahora, y estamos ansiosos
            por ver lo que nos depara el futuro. Estamos comprometidos a brindar
            a nuestros clientes la mejor experiencia de compra posible, y
            estamos seguros de que continuaremos creciendo y prosperando en los
            años venideros.
          </p>
        </div>
        <div className="testimonios">
          <h2>Testimonios</h2>
          <div class="testimonio">
            <span class="cita">
              "¡Estoy muy contento con mi nuevo producto! Es exactamente lo que
              estaba buscando, y el servicio al cliente fue excelente.
              Respondieron a todas mis preguntas y me ayudaron a elegir el
              producto adecuado para mí. ¡Definitivamente recomendaría esta
              tienda a cualquiera que busque un producto de computación!"
            </span>
            <span class="autor"> Carlos Lopez - Bs As</span>
          </div>

          <div class="testimonio">
            <span class="cita">
              "He estado comprando en esta tienda durante años y siempre he
              estado satisfecho con mis compras. Los productos son de alta
              calidad, los precios son competitivos, y el servicio al cliente es
              excelente. Siempre están dispuestos a ayudarme y responder a mis
              preguntas. ¡Definitivamente recomendaría esta tienda a cualquiera
              que busque un producto de computación!"
            </span>
            <span class="autor"> Roberto Carlos - La Pampa</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
