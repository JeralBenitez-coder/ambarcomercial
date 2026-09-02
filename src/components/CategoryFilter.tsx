interface Props {
  categorias: string[];
  seleccionada: string;
  onSelect: (cat: string) => void;
}

export default function CategoryFilter({ categorias, seleccionada, onSelect }: Props) {
  return (
    <div className="filtros">
      {['Todos', ...categorias].map((cat) => (
        <button
          key={cat}
          className={`pill ${seleccionada === cat ? 'pill-activa' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}