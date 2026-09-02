import { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './context/CartContext';
import { productos } from './data/products';
import './App.css';

function App() {
  const [categoria, setCategoria] = useState('Todos');
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const categorias = useMemo(
    () => Array.from(new Set(productos.map((p) => p.categoria))),
    []
  );

  const filtrados = useMemo(
    () =>
      categoria === 'Todos'
        ? productos
        : productos.filter((p) => p.categoria === categoria),
    [categoria]
  );

  return (
    <CartProvider>
      <Header onCarritoClick={() => setCarritoAbierto(true)} />
      <Hero />
      <main className="catalogo" id="catalogo">
        <CategoryFilter
          categorias={categorias}
          seleccionada={categoria}
          onSelect={setCategoria}
        />
        <ProductGrid productos={filtrados} />
      </main>
      <Footer />
      <CartDrawer abierto={carritoAbierto} onClose={() => setCarritoAbierto(false)} />
      <WhatsAppButton />
    </CartProvider>
  );
}

export default App;