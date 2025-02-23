export default class Place {
  id;
  title;
  imageUri;
  address;
  latitude;
  longitude;

  constructor(title, image, address, latitude, longitude) {
    this.id = new Date().toString() + Math.random().toString();
    this.title = title;
    this.imageUri = image;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
