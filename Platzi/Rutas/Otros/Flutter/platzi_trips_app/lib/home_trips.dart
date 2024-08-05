import 'package:flutter/material.dart';

import 'package:platzi_trips_app/review_list.dart';
import 'package:platzi_trips_app/header_appbar.dart';
import 'package:platzi_trips_app/description_place.dart';

class HomeTrips extends StatelessWidget {
  HomeTrips({super.key});

  final String dummyDescription =
      """Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper ornare sodales. Cras condimentum enim purus, sed placerat nunc volutpat et. Nunc malesuada, quam vel consectetur convallis, libero nisi volutpat nibh, ut aliquet diam eros eu tortor. Cras eget accumsan purus. Quisque sed justo convallis, efficitur ipsum sed, hendrerit nisl.
      
      Duis tincidunt, est vitae molestie laoreet elit dolor varius dui, ac malesuada ex orci vel libero.""";

  final List<ReviewData> reviews = [
    ReviewData(
      pathImage: "assets/img/people.jpg",
      name: "Varuna Yasas",
      details: "1 review · 5 photos",
      comment: "There is an amazing place in Sri Lanka",
    )
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Stack(
      children: <Widget>[
        ListView(
          children: <Widget>[
            DescriptionPlace(
                namePlace: 'Bahamas',
                stars: 4,
                descriptionPlace: dummyDescription),
            ReviewList(
              reviews: reviews,
            ),
          ],
        ),
        const HeaderAppbar(),
      ],
    ));
  }
}
