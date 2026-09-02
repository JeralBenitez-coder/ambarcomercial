import type { Producto } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ productos }: { productos: Producto[] }) {
  if (productos.length === 0) {
    return <p className="vacio">No hay dulces en esta categoría todavía.</p>;
  }
  return (
    <div className="grid">
      {productos.map((p) => (
        <ProductCard key={p.id} producto={p} />
      ))}
    </div>
  );
}