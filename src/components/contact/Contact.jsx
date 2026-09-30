import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    const formData = new FormData(e.target);
    formData.append("access_key", "df921f61-1aa9-4be7-87bd-0f84341c75c4");
    formData.append("subject", "🔥 Nuevo cliente desde la web");
    formData.append("from_name", "Consulta Adon 👽");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("¡Consulta enviada con éxito! Te contactaremos pronto.");
        e.target.reset();
      } else {
        console.log("Error", data);
        setStatus("Hubo un error al enviar. Intentá nuevamente.");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      setStatus("Hubo un error. Revisá tu conexión a internet.");
    }
  };

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
          
          {/* Anexo Brochure */}
          <div className="contact-brochure-box">
            <span>¿Aún evaluando opciones?</span>
            <a href="https://res.cloudinary.com/dmnksm3th/image/upload/v1790799352/Adon.AI_r0o7vd.pdf" target="_blank" rel="noopener noreferrer" className="brochure-link">
              ↓ Descargar presentación corporativa
            </a>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>

          <div className="form-row">
            <input type="text" name="whatsapp" placeholder="WhatsApp" required />
            <select name="servicio_interes" required defaultValue="">
              <option value="" disabled hidden>Servicio de interés</option>
              <option value="web">Páginas web</option>
              <option value="marketing">Marketing estratégico</option>
              <option value="redes">Redes y contenido</option>
              <option value="ia">Automatización e IA</option>
              <option value="servicio-completo">Servicio Completo</option>
            </select>
          </div>

          <textarea
            name="mensaje"
            placeholder="Contanos brevemente qué necesitás"
            rows="4"
            required
          ></textarea>

          <button type="submit" className="btn-submit" disabled={status === "Enviando..."}>
            {status === "Enviando..." ? "Enviando..." : "Enviar consulta"}
          </button>

          {status && status !== "Enviando..." && (
            <p style={{ marginTop: '15px', fontWeight: 'bold', color: status.includes('éxito') ? '#4CAF50' : '#f44336' }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;