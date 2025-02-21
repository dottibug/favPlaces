import { FlatList, Text } from 'react-native';
import PlaceItem from './PlaceItem';
import { textBodyCenterLight } from '../../styles/baseStyles';

export default function PlacesList({ places, onPress }) {
  return places.length === 0 ? (
    <Text style={textBodyCenterLight}>
      {`No places added yet. \nClick + to add a new place.`}
    </Text>
  ) : (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onPress={onPress} />}
    />
  );
}
