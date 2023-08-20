import React, { useState } from 'react';
import '../../styles/componentes/pages/ContactoPage.css';
import axios from 'axios';

const ContactoPage = (props) => {
  const initialForm = {
    nombre:'',
    email:'',
    telefono:'',
    mensaje:'',
  }
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]:value 
    }));
  }
  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }
  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto R&aacute;pido</h2>
        <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit} >
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
          </p>
          <p class="acciones">
            <input type="submit" name="" />
          </p>
        </form>
        {sending ? <p>Enviando...</p> :null}
        {msg ? <p>{msg}</p> :null}
      </div>
      <div className="datos">
        <h2>Otras vias de comunicaci&oacute;n </h2>
        <p>Tambi&eacute;n puede contactarse con nosotros usando los siguientes medios </p>
        <ul>
            <li className='lista1'>Tel&eacute;fono: 43423423 <span className='icon'><i class="bi bi-headset" ></i></span></li>
            <li className='lista1'>Email: contacto@importerix.com.ar <span className='icon' ><i class="bi bi-envelope-at"></i> </span></li>
            <li className='lista1'>Facebook <span className='icon'> <i class="bi bi-facebook"></i></span></li>
            <li className='lista1'>Twitter <span className='icon'><i class="bi bi-twitter"></i> </span></li>
            <li className='lista1'>Skype <span className='icon'><i class="bi bi-skype"></i> </span></li>
        </ul>

      </div>
    </main>
  );
};
export default ContactoPage;