import Link from "next/link";
import { useRouter } from "next/router";

function PayPage() {
  const { query } = useRouter();

  return (
    <div>
      <p>
        Compraste {query.quantity} boletos de la película {query.name}
      </p>

      <Link href="movies">
        <a href>Volver</a>
      </Link>
    </div>
  );
}

export default PayPage;
