import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, View, ScrollView } from 'react-native';
import { baseStyles, textSubtitleMelon, inputStyles } from '../styles/baseStyles';
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import PhotoSelector from '../components/PhotoSelector';
import LocationSelector from '../components/LocationSelector';
import { useRoute } from '@react-navigation/native';

export default function AddPlace() {
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

  const handleAddPlace = () => {
    console.log('add place');
    console.log(`title: ${title}`);
    console.log(`image: ${image}`);
    console.log(`location: ${JSON.stringify(location)}`);

    // get readable address
    // create a Place object
    // save it to device storage
    // navigate back to the places screen
  };

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
