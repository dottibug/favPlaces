class Place {
  constructor(id, title, imageUri, address, latitude, longitude) {
    this.id = new Date().toString() + Math.random().toString();
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
