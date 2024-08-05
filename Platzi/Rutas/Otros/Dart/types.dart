import "dart:math";

void main() {
  // Nombre de la estación en mayúscula
  String station = "Trenes ciudad Paleta";
  station = station.toUpperCase();

  // Grados Celsius y Formula de Conversion a Fahrenheit
  int celsius = 28;
  double fahrenheit = (9 / 5 * celsius) + 32;

  // Lista de Ciudades
  List<String> cities = ["Plateada", "Celeste", "Carmín", "Azulona"];

  // Escoge una ciudad aleatoria
  final _random = new Random();
  String city = cities[_random.nextInt(cities.length)];

  print("""
    Buenos días, trabajadores de $station!!!

    El día de hoy la temperatura es de $celsius grados
    centígrados u $fahrenheit grados Fahrenheit.
    El tren se detendrá en la siguiente ciudad: $city
  """);
}
