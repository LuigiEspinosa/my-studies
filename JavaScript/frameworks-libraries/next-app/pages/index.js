import Link from "next/link";

function IndexPage() {
  return (
    <div>
      <p>Este es un sitio para comprar boletos de tus películas favoritas</p>

      <Link href="movies">
        <a href>Ir a comprar</a>
      </Link>
    </div>
  );
}

export default IndexPage;
