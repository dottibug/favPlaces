import { View, Text } from 'react-native';
import Button from './Button';
import { buttonStyles } from '../styles/buttonStyles';
import { locationPickerStyles } from '../styles/locationPickerStyles';
import { useState, useEffect } from 'react';
import {
  useForegroundPermissions,
  PermissionStatus,
  getCurrentPositionAsync,
} from 'expo-location';
import MapPreview from './MapPreview';
import { useNavigation } from '@react-navigation/native';

export default function LocationSelector({
  onLocationSelected,
  selectedLocation = null,
}) {
  const navigation = useNavigation();
  const [locationPermissionStatus, requestPermission] = useForegroundPermissions();
  const [loading, setLoading] = useState(false);

  async function verifyLocationPermissions() {
    const permissionResponse = await requestPermission();

    switch (locationPermissionStatus.status) {
      case PermissionStatus.UNDETERMINED:
        return permissionResponse.granted;
      case PermissionStatus.DENIED:
        Alert.alert(
          'Insufficient Permissions!',
          'Please grant permission to use your location.'
        );
        return false;
      default:
        return true;
    }
  }

  async function handleUseLocation() {
    const hasPermission = await verifyLocationPermissions();
    if (!hasPermission) return;

    setLoading(true);

    try {
      const position = await getCurrentPositionAsync();
      const { latitude, longitude } = position.coords;
      onLocationSelected({ latitude, longitude });
    } catch (error) {
      Alert.alert(
        'Error',
        'Could not fetch location. Please try again or pick a location on the map.'
      );
    } finally {
      setLoading(false);
    }
  }

  const handleUseMap = () => navigation.navigate('Map');

  const renderLocationPreview = () => {
    if (selectedLocation) return <MapPreview location={selectedLocation} />;
    if (loading) return <Text>Getting your location...</Text>;
    return <Text>No location chosen yet.</Text>;
  };

  return (
    <View style={locationPickerStyles.container}>
      <View style={locationPickerStyles.locationWrapper}>{renderLocationPreview()}</View>

      <View style={buttonStyles.buttonRow}>
        <Button onPress={handleUseLocation} type="outline" icon="location-on" isRowButton>
          My Location
        </Button>
        <Button onPress={handleUseMap} type="outline" icon="map" isRowButton>
          Use Map
        </Button>
      </View>
    </View>
  );
}
