import { useCart } from '../context/CartContext';

const NUMERO_WHATSAPP = '18298514281';// <-- cambia esto por tu número real

export default function CartDrawer({ abierto, onClose }: { abierto: boolean; onClose: () => void }) {
  const { items, quitar, cambiarCantidad, total } = useCart();

  const enviarPedido = () => {
    if (items.length === 0) return;
    const lineas = items.map(
      (i) => `• ${i.nombre} x${i.cantidad} — RD$${i.precio * i.cantidad}`
    );
    const mensaje = `¡Hola! Quiero hacer este pedido:%0A%0A${lineas.join('%0A')}%0A%0ATotal: RD$${total}`;
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`, '_blank');
  };

  return (
    <>
      <div className={`carrito-overlay ${abierto ? 'visible' : ''}`} onClick={onClose} />
      <aside className={`carrito-panel ${abierto ? 'abierto' : ''}`}>
        <div className="carrito-header">
          <h2>Tu carrito</h2>
          <button className="carrito-cerrar" onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <p className="carrito-vacio">Aún no has agregado dulces 🍬</p>
        ) : (
          <div className="carrito-lista">
            {items.map((item) => (
              <div className="carrito-item" key={item.id}>
                <span className="carrito-item-emoji">{item.emoji}</span>
                <div className="carrito-item-info">
                  <p className="carrito-item-nombre">{item.nombre}</p>
                  <p className="carrito-item-precio">RD${item.precio}</p>
                  <div className="carrito-item-cantidad">
                    <button onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}>+</button>
                  </div>
                </div>
                <button className="carrito-item-quitar" onClick={() => quitar(item.id)}>🗑</button>
              </div>
            ))}
          </div>
        )}

        <div className="carrito-footer">
          <div className="carrito-total">
            <span>Total</span>
            <span>RD${total}</span>
          </div>
          <button className="carrito-comprar" onClick={enviarPedido} disabled={items.length === 0}>
            Pedir por WhatsApp
          </button>
        </div>
      </aside>
    </>
  );
}