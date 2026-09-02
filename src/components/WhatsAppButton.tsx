const NUMERO_WHATSAPP = '18298514281';

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-flotante"
      href={`https://wa.me/${NUMERO_WHATSAPP}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
    >
      💬
    </a>
  );
}