import Link from "next/link";

async function obtenerLibros() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/libros", {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function LibrosPage() {
  const libros = await obtenerLibros();

  if (!libros) {
    return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Error</h1>
        <p>No se pudieron cargar los libros. Intentá nuevamente más tarde.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📚 Listado de libros</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {libros.map((libro: any) => (
          <li
            key={libro.id}
            style={{
              padding: "1rem",
              marginBottom: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <Link
              href={`/libros/${libro.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <strong>{libro.titulo}</strong> — {libro.autor}
              {!libro.disponible && (
                <span style={{ color: "red", marginLeft: "0.5rem" }}>
                  (No disponible)
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
