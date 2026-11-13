async function obtenerLibro(id: string) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/libros/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function LibroDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const libro = await obtenerLibro(id);

  if (!libro) {
    return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>❌ No encontrado</h1>
        <p>El libro que buscás no existe o hubo un error al cargarlo.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📖 Detalle del libro</h1>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "1.5rem",
          borderRadius: "8px",
        }}
      >
        <h2>{libro.titulo}</h2>
        <p>
          <strong>Autor:</strong> {libro.autor}
        </p>
        <p>
          <strong>Año:</strong> {libro.anio_publicacion}
        </p>
        <p>
          <strong>Disponible:</strong> {libro.disponible ? "Sí ✅" : "No ❌"}
        </p>
      </div>
    </main>
  );
}
