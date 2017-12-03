// @flow
import GPSCoordinates from './gpscoordinates';
import Review from './review';

export default class Business {
  name: string;
  rating: ?number;
  address: ?string;
  review: ?Review;
  coords: ?GPSCoordinates;

  constructor(
    name: string,
    rating: ?number,
    address: ?string,
    review: ?Review,
    coords: ?GPSCoordinates,
  ) {
    this.name = name;
    this.rating = rating;
    this.address = address;
    this.review = review;
    this.coords = coords;
  }
}
