void main() {
  List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  print('List of Integers: $numbers');

  List<int> even = [
    for (int i = 0; i < numbers.length; i++)
      if (numbers[i] % 2 == 0) numbers[i]
  ];
  print('List of even numbers: $even');

  List<int> odd = [
    for (int i = 0; i < numbers.length; i++)
      if (numbers[i] % 2 != 0) numbers[i]
  ];
  print('List of odd numbers: $odd');
}
