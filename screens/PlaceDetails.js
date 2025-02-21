import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

export default function PlaceDetails({ place }) {
  function handleViewOnMap() {
    console.log('View on map');
  }

  return (
    <SafeAreaView style={[baseStyles.screen, baseStyles.centerContent]}>
      <Image source={{ uri: place.imageUri }} />
      <Text>{place.address}</Text>
      <Button type="outline" onPress={handleViewOnMap} icon="map">
        View on Map
      </Button>
    </SafeAreaView>
  );
}
