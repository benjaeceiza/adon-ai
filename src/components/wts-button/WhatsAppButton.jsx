
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5490000000000?text=Hola%20Adon.AI%2C%20quiero%20consultar%20por%20sus%20servicios"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
    >
      <FaWhatsapp className="wa-icon" />
      <span className="wa-tooltip">¡Hablemos!</span>
    </a>
  );
};

export default WhatsAppButton;