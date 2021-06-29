import Form from "../components/Form";
import Link from "next/link";

const movies = [
  {
    name: "Avengers",
    available: 3,
    quantity: 0
  },
  {
    name: "Terminator",
    available: 5,
    quantity: 0
  }
];

function MoviePage() {
  return (
    <div>
      <Link href="/">
        <a href>Atrás</a>
      </Link>

      <h2>Películas</h2>

      {movies.map((movie) => (
        <Form key={movie.name} movie={movie} available={movie.available} />
      ))}
    </div>
  );
}

export default MoviePage;
