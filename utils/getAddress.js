export default async function getAddress({ location }) {
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
  const { latitude, longitude } = location;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== 'OK') throw new Error('Failed to fetch address');

  const address = data.results[0].formatted_address;
  return address;
}
