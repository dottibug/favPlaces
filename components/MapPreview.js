import { Image } from 'react-native';
import { locationPickerStyles } from '../styles/locationPickerStyles';

const apiKey = process.env.EXPO_PUBLIC_API_KEY;

export default function MapPreview({ location }) {
  const center = `${location.latitude},${location.longitude}`;

  const params = new URLSearchParams({
    center: center,
    zoom: '15',
    size: '600x300',
    maptype: 'roadmap',
    key: apiKey,
  });

  const baseUrl = `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`;
  const markerParam = `&markers=color:black%7Clabel:mid%7C${location.latitude},${location.longitude}`;
  const mapPreviewUrl = `${baseUrl}${markerParam}`;

  return (
    <Image source={{ uri: mapPreviewUrl }} style={locationPickerStyles.mapPreview} />
  );
}
