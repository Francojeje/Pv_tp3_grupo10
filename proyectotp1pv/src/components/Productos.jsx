
const Productos = () => {
  let productos = [
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Monitor", precio: 120000 },
    { descripcion: "Webcam", precio: 25000 },
  ];

  const productosCaros = productos.filter((p) => p.precio > 35000);

  const productosConIVA = productos.map((p) => ({
    ...p,
    precio: parseFloat((p.precio * 1.21).toFixed(2)),
  }));

  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

  const productosConNuevo = [...productos, { descripcion: "Parlante Bluetooth", precio: 59000 }];

  const precioMin = Math.min(...productosConNuevo.map((p) => p.precio));
  const productosSinMasBarato = productosConNuevo.filter((p) => p.precio !== precioMin);

  return (
    <div>
      <h2 className="seccionprodu">Sección Productos</h2>

      <h3>Lista original</h3>
      <ul className="productosli">
        {productos.map((p, i) => (
          <li key={i}>
            Producto: {p.descripcion} - Precio: ${p.precio}
          </li>
        ))}
      </ul>

      <h3>Productos con precio mayor a $35000</h3>
      <ul className="productosli">
        {productosCaros.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>

      <h3>Productos con IVA (21%)</h3>
      <ul className="productosli">
        {productosConIVA.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>

      <h3>Productos ordenados por precio</h3>
      <ul className="productosli">
        {productosOrdenados.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>

      <h3>Agregado "Parlante Bluetooth"</h3>
      <ul className="productosli">
        {productosConNuevo.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>

      <h3 className="productosli">Eliminado el producto más barato</h3>
      <ul className="productosli">
        {productosSinMasBarato.map((p, i) => (
          <li key={i}>{p.descripcion} - ${p.precio}</li>
        ))}
      </ul>
    </div>
  );
};
export default Productos;
