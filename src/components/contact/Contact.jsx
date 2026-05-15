import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contacto">
      <div className="container contact-box">
        {/* Columna Izquierda: Información */}
        <div className="contact-info">
          <span className="eyebrow">Contacto</span>
          <h2>¿Querés llevar tu marca al próximo nivel digital?</h2>
          <p>
            Contanos qué necesitás y armamos una propuesta clara 
            para tu marca, tu etapa actual y tus objetivos.
          </p>
        </div>
        
        {/* Columna Derecha: Formulario */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
          </div>
          
          <div className="form-row">
            <input type="text" placeholder="WhatsApp" required />
            <select required defaultValue="">
              <option value="" disabled hidden>Servicio de interés</option>
              <option value="web">Páginas web</option>
              <option value="marketing">Marketing estratégico</option>
              <option value="redes">Redes y contenido</option>
              <option value="ia">Automatización e IA</option>
            </select>
          </div>
          
          <textarea 
            placeholder="Contanos brevemente qué necesitás" 
            rows="4" 
            required
          ></textarea>
          
          <button type="submit" className="btn-submit">
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;