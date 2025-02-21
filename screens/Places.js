import { SafeAreaView } from 'react-native-safe-area-context';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AddButton from '../components/AddButton';
import { baseStyles } from '../styles/baseStyles';
import { useState } from 'react';
import PlacesList from '../components/Places/PlacesList';

const HeaderButton = () => <AddButton />;

export default function Places() {
  const navigation = useNavigation();
  const [places, setPlaces] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Your Favourite Places',
      headerRight: HeaderButton,
    });
  }, [navigation]);

  const handlePlacePress = () => {
    console.log('Place pressed');
  };

  return (
    <SafeAreaView style={[baseStyles.screen, baseStyles.centerContent]}>
      <PlacesList places={places} onPress={handlePlacePress} />
    </SafeAreaView>
  );
}
