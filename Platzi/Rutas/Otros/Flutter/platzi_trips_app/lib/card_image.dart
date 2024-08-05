import 'package:flutter/material.dart';
import 'package:platzi_trips_app/floating_action_button_green.dart';

class CardImage extends StatelessWidget {
  final String assetName;

  const CardImage({super.key, this.assetName = 'assets/img/beach.jpeg'});

  @override
  Widget build(BuildContext context) {
    final card = Container(
      height: 350.0,
      width: 250.0,
      margin: const EdgeInsets.only(top: 80.0, left: 20.0),
      decoration: BoxDecoration(
        image: DecorationImage(fit: BoxFit.cover, image: AssetImage(assetName)),
        borderRadius: const BorderRadius.all(Radius.circular(10.0)),
        shape: BoxShape.rectangle,
        boxShadow: const <BoxShadow>[
          BoxShadow(
              color: Colors.black, blurRadius: 15.0, offset: Offset(0.0, 7.0))
        ],
      ),
    );

    return Stack(
      alignment: const Alignment(0.9, 1.1),
      children: <Widget>[card, const FloatingActionButtonGreen()],
    );
  }
}
