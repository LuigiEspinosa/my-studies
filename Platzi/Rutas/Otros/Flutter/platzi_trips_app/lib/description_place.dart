import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'package:platzi_trips_app/button_purple.dart';

class DescriptionPlace extends StatelessWidget {
  final String namePlace;
  final int stars;
  final String descriptionPlace;

  const DescriptionPlace(
      {super.key,
      required this.namePlace,
      required this.stars,
      required this.descriptionPlace});

  @override
  Widget build(BuildContext context) {
    final starBorder = Container(
      margin: const EdgeInsets.only(top: 323.0, right: 3.0),
      child: const Icon(
        Icons.star_border,
        color: Color(0xFFF2C611),
      ),
    );

    final starHalf = Container(
      margin: const EdgeInsets.only(top: 323.0, right: 3.0),
      child: const Icon(
        Icons.star_half,
        color: Color(0xFFF2C611),
      ),
    );

    final star = Container(
      margin: const EdgeInsets.only(top: 323.0, right: 3.0),
      child: const Icon(
        Icons.star,
        color: Color(0xFFF2C611),
      ),
    );

    final titleStar = Row(
      children: <Widget>[
        Container(
          margin: const EdgeInsets.only(top: 320.0, left: 20.0, right: 20.0),
          child: Text(
            namePlace,
            style: GoogleFonts.lato(
                textStyle: const TextStyle(
                    fontSize: 30.0, fontWeight: FontWeight.w900)),
            textAlign: TextAlign.left,
          ),
        ),
        Row(
          children: <Widget>[star, star, star, starHalf, starBorder],
        ),
      ],
    );

    final description = Container(
      margin: const EdgeInsets.only(top: 20.0, left: 20.0, right: 20.0),
      child: Text(
        descriptionPlace,
        style: const TextStyle(
            fontSize: 16.0,
            fontWeight: FontWeight.bold,
            color: Color(0xFF56575A)),
        textAlign: TextAlign.justify,
      ),
    );

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        titleStar,
        description,
        const ButtonPurple(buttonText: 'Navigate')
      ],
    );
  }
}
