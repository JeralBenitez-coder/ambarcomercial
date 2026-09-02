import type { Producto } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductCard({ producto }: { producto: Producto }) {
  const { agregar } = useCart();

  return (
    <div className="tarjeta">
      <span className="tarjeta-tag">{producto.categoria}</span>
      <div className="tarjeta-emoji">{producto.emoji}</div>
      <h3 className="tarjeta-nombre">{producto.nombre}</h3>
      <p className="tarjeta-precio">RD${producto.precio}</p>
      <button className="tarjeta-agregar" onClick={() => agregar(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
}
