import 'package:flutter/material.dart';
import 'package:platzi_trips_app/card_image.dart';

class CardImageList extends StatelessWidget {
  const CardImageList({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 350.0,
      child: ListView(
        padding: const EdgeInsets.all(25.0),
        scrollDirection: Axis.horizontal,
        children: const <Widget>[
          CardImage(assetName: 'assets/img/beach_palm.jpeg'),
          CardImage(assetName: 'assets/img/beach.jpeg'),
          CardImage(assetName: 'assets/img/mountain_stars.jpeg'),
          CardImage(assetName: 'assets/img/mountain.jpeg'),
          CardImage(assetName: 'assets/img/river.jpeg'),
          CardImage(assetName: 'assets/img/sunset.jpeg'),
        ],
      ),
    );
  }
}
