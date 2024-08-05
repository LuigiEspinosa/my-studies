import 'package:flutter/material.dart';
import 'package:platzi_trips_app/review.dart'; // Ensure you have the correct path for your review.dart file

class ReviewData {
  final String pathImage;
  final String name;
  final String details;
  final String comment;

  ReviewData({
    required this.pathImage,
    required this.name,
    required this.details,
    required this.comment,
  });
}

class ReviewList extends StatelessWidget {
  final List<ReviewData> reviews;

  const ReviewList({super.key, required this.reviews});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: reviews.asMap().entries.map((entry) {
        int index = entry.key;
        ReviewData review = entry.value;
        bool isLastItem = index == reviews.length - 1;

        return Container(
          margin: EdgeInsets.only(bottom: isLastItem ? 20.0 : 0.0),
          child: Review(
            pathImage: review.pathImage,
            name: review.name,
            details: review.details,
            comment: review.comment,
          ),
        );
      }).toList(),
    );
  }
}
