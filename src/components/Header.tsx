import { useCart } from '../context/CartContext';

export default function Header({ onCarritoClick }: { onCarritoClick: () => void }) {
  const { cantidadTotal } = useCart();

  return (
    <header className="header">
      <div className="header-inner">
        <span className="logo">🍬 <span className="logo-text">Ambar Comercial</span></span>
        <nav className="nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#contacto">Contacto</a>
          <button className="carrito-boton" onClick={onCarritoClick}>
            🛒
            {cantidadTotal > 0 && <span className="carrito-badge">{cantidadTotal}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}