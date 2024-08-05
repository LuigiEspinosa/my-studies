import 'package:flutter/material.dart';

class FloatingActionButtonGreen extends StatefulWidget {
  const FloatingActionButtonGreen({super.key});

  @override
  State<StatefulWidget> createState() {
    return _FloatingActionButtonGreen();
  }
}

class _FloatingActionButtonGreen extends State<FloatingActionButtonGreen> {
  bool _pressed = false;

  void onPressedFav() {
    setState(() {
      _pressed = !_pressed;
    });

    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: _pressed
            ? const Text("Added to Favorites!")
            : const Text("Removed from Favorites ):")));
  }

  @override
  Widget build(BuildContext context) {
    return FloatingActionButton(
      backgroundColor: const Color(0xFF11DA53),
      mini: true,
      tooltip: "Fav",
      onPressed: onPressedFav,
      shape: const CircleBorder(),
      child: Icon(_pressed ? Icons.favorite : Icons.favorite_border,
          color: Colors.white),
    );
  }
}
