import { View, Text, Image, Pressable } from 'react-native';
import { placeItemStyles } from '../../styles/placeItemStyles';
import { pressedStyle } from '../../styles/baseStyles';

export default function PlaceItem({ place, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [placeItemStyles.placeItemWrapper, pressedStyle]
          : placeItemStyles.placeItemWrapper
      }>
      <Image source={{ uri: place.imageUri }} style={placeItemStyles.placeItemImage} />
      <View style={placeItemStyles.placeItemInfoWrapper}>
        <Text style={placeItemStyles.placeItemTitle}>{place.title}</Text>
        <Text style={placeItemStyles.placeItemAddress}>{place.address}</Text>
      </View>
    </Pressable>
  );
}
