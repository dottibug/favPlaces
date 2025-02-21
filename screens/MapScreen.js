import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { baseStyles } from '../styles/baseStyles';
import { mapStyles } from '../styles/mapStyles';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SaveButton from '../components/SaveButton';
import { Alert } from 'react-native';

export default function MapScreen() {
  const navigation = useNavigation();
  const [tappedLocation, setTappedLocation] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      title: 'Your Favourite Places',
      headerRight: () => <SaveButton onPress={handleSaveLocation} />,
    });
  }, [navigation, tappedLocation]);

  const region = {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setTappedLocation({
      latitude,
      longitude,
    });
  };

  const handleSaveLocation = () => {
    if (!tappedLocation) {
      Alert.alert('No location selected', 'Please select a location on the map');
      return;
    }
    navigation.popTo('Add Place', { location: tappedLocation });
  };

  return (
    <SafeAreaView
      style={[baseStyles.screen, baseStyles.centerContent]}
      edges={['left', 'right']}>
      <MapView initialRegion={region} style={mapStyles.map} onPress={handleMapPress}>
        {tappedLocation && (
          <Marker coordinate={tappedLocation} title="Selected Location" />
        )}
      </MapView>
    </SafeAreaView>
  );
}
