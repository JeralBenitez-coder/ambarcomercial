export interface Producto {
  id: number;
  nombre: string;
  categoria: 'Chocolates' | 'Gomitas' | 'Paletas' | 'Caramelos' | 'Chicles';
  precio: number;
  emoji: string;
}

export const productos: Producto[] = [
  { id: 1, nombre: 'Chocolate con Leche', categoria: 'Chocolates', precio: 85, emoji: '🍫' },
  { id: 2, nombre: 'Ositos de Goma', categoria: 'Gomitas', precio: 60, emoji: '🐻' },
  { id: 3, nombre: 'Paleta de Caramelo', categoria: 'Paletas', precio: 35, emoji: '🍭' },
  { id: 4, nombre: 'Caramelos Duros Surtidos', categoria: 'Caramelos', precio: 45, emoji: '🍬' },
  { id: 5, nombre: 'Chicle de Menta', categoria: 'Chicles', precio: 25, emoji: '🍡' },
  { id: 6, nombre: 'Bombón Relleno', categoria: 'Chocolates', precio: 95, emoji: '🍫' },
  { id: 7, nombre: 'Gomitas Ácidas', categoria: 'Gomitas', precio: 65, emoji: '🍬' },
  { id: 8, nombre: 'Paleta de Frutas', categoria: 'Paletas', precio: 40, emoji: '🍭' },
  { id: 9, nombre: 'Malvaviscos', categoria: 'Caramelos', precio: 50, emoji: '🤍' },
  { id: 10, nombre: 'Chicle de Fresa', categoria: 'Chicles', precio: 25, emoji: '🍓' },
  { id: 11, nombre: 'Chocolate Blanco', categoria: 'Chocolates', precio: 90, emoji: '🤎' },
  { id: 12, nombre: 'Regaliz Rojo', categoria: 'Gomitas', precio: 55, emoji: '🍭' },
];