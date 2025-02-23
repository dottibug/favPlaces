import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, View, ScrollView } from 'react-native';
import { baseStyles, textSubtitleMelon, inputStyles } from '../styles/baseStyles';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import PhotoSelector from '../components/PhotoSelector';
import LocationSelector from '../components/LocationSelector';
import { useRoute } from '@react-navigation/native';
import getAddress from '../utils/getAddress';
import showAlert from '../utils/showAlert';
import Place from '../models/Place';
import { savePlace } from '../utils/database';
import { useNavigation } from '@react-navigation/native';

export default function AddPlace() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const route = useRoute();

  useEffect(() => {
    if (route.params?.location) {
      setLocation(route.params.location);
    }
  }, [route.params?.location]);

  const handleTitle = (text) => setTitle(text);
  const handleImage = (image) => setImage(image);
  const handleLocation = (location) => setLocation(location);

  function handleFormError() {
    if (!title) showAlert({ title: 'Error', message: 'Please enter a title.' });
    else if (!image) showAlert({ title: 'Error', message: 'Please take a photo.' });
    else showAlert({ title: 'Error', message: 'Please pick a location on the map.' });
  }

  async function handleAddPlace() {
    if (!title || !image || !location) {
      handleFormError();
      return;
    }

    try {
      const address = await getAddress({ location });

      const place = new Place(
        title,
        image,
        address,
        location.latitude,
        location.longitude
      );

      await savePlace(place);
      navigation.popToTop();
    } catch (error) {
      console.error(error);
      showAlert({
        title: 'Error',
        message: 'Could not save place. Please try again later.',
      });
    }
  }

  const tempFinalButtonWrapperStyle = {
    marginBottom: 12,
    marginTop: 12,
  };

  return (
    <SafeAreaView style={[baseStyles.screen, baseStyles.screenPadding]}>
      <ScrollView>
        <Text style={textSubtitleMelon}>Title</Text>
        <TextInput style={inputStyles.input} value={title} onChangeText={handleTitle} />

        <PhotoSelector onPhotoTaken={handleImage} image={image} />
        <LocationSelector
          onLocationSelected={handleLocation}
          selectedLocation={location}
        />

        <View style={tempFinalButtonWrapperStyle}>
          <Button onPress={handleAddPlace} type="solid">
            Add Place
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
