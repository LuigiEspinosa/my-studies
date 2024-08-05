void main() {
  List<Map<String, dynamic>> restaurants = [
    {
      "nombre": "El novillo alegre",
      "tipo": "Argentina",
      "calificaciones": [4, 5, 2, 1, 2]
    },
    {
      "nombre": "Baires Grill",
      "tipo": "Argentina",
      "calificaciones": [3, 1, 3, 5, 5, 2, 3]
    },
    {
      "nombre": "Mario Brothers",
      "tipo": "Italiana",
      "calificaciones": [4, 3, 2, 1, 1]
    },
    {
      "nombre": "Molto bene",
      "tipo": "Italiana",
      "calificaciones": [4, 3, 1, 1, 5]
    }
  ];
  
  // Step 1: Collect ratings by country
  Map<String, List<int>> countryRatings = {};
  
  for (var restaurant in restaurants) {
    String country = restaurant["tipo"];
    List<int> ratings = List<int>.from(restaurant["calificaciones"]);
    
    if (countryRatings.containsKey(country)) {
      countryRatings[country]?.addAll(ratings);
    } else {
      countryRatings[country] = ratings;
    }
  }

  // Step 2: Calculate average rating for each country
  Map<String, double> averageRatings = {};
  int totalSum = 0;
  int totalCount = 0;

  countryRatings.forEach((country, ratings) {
    double average = ratings.reduce((a, b) => a + b) / ratings.length;
    averageRatings[country] = average;

    totalSum += ratings.reduce((a, b) => a + b);
    totalCount += ratings.length;
  });
  
  // Step 3: Calculate the total average rating
  double totalAverage = totalSum / totalCount;
  averageRatings["Total"] = double.parse(totalAverage.toStringAsFixed(2));

  // Print the result
  print(averageRatings);
}
