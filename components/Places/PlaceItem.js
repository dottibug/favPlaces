import { View, Text, Image, Pressable } from 'react-native';
import { placeListStyles } from '../../styles/placeListStyles';
import { pressedStyle } from '../../styles/baseStyles';

export default function PlaceItem({ place, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [placeListStyles.placeItemWrapper, pressedStyle]
          : placeListStyles.placeItemWrapper
      }>
      <Image source={{ uri: place.imageUri }} style={placeListStyles.placeItemImage} />
      <View style={placeListStyles.placeItemInfoWrapper}>
        <Text style={placeListStyles.placeItemTitle}>{place.title}</Text>
        <Text style={placeListStyles.placeItemAddress}>{place.address}</Text>
      </View>
    </Pressable>
  );
}
