void main() {
  Map restaurant = {
    'Name': 'In Situ',
    'Stars': [1, 2, 3, 4, 5],
  };

  print(restaurant);

  if (restaurant['Stars'] == null) {
    print("Restaurant has no Starts");
  } else {
    List<int> stars = restaurant["Stars"];
    int sum = 0;

    for (int i = 0; i < stars.length; i++) {
      sum += stars[i];
    }

    double average = sum / stars.length;
    restaurant.addAll({'Average': average});
  }

  print(restaurant);
}

