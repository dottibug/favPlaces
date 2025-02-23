import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AddButton from '../components/AddButton';
import { baseStyles } from '../styles/baseStyles';
import { useState, useEffect, useCallback } from 'react';
import PlacesList from '../components/Places/PlacesList';
import { fetchPlaces } from '../utils/database';
import showAlert from '../utils/showAlert';

const HeaderButton = () => <AddButton />;

export default function Places() {
  const navigation = useNavigation();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: 'Your Favourite Places',
      headerRight: HeaderButton,
    });
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      async function loadSavedPlaces() {
        try {
          const savedPlaces = await fetchPlaces();
          setPlaces(savedPlaces);
        } catch (error) {
          console.error('Error loading places:', error);
          showAlert({
            title: 'Error',
            message: 'Could not load places. Please try again later.',
          });
        }
      }

      loadSavedPlaces();
    }, []) // Empty dependency array is fine here
  );

  const handlePlacePress = () => {
    console.log('Place pressed');
  };

  return (
    <SafeAreaView style={[baseStyles.screen, baseStyles.centerContent]}>
      <PlacesList places={places} onPress={handlePlacePress} />
    </SafeAreaView>
  );
}
