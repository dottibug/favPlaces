import { FlatList, Text } from 'react-native';
import PlaceItem from './PlaceItem';
import { textBodyCenterLight } from '../../styles/baseStyles';
import { placeListStyles } from '../../styles/placeListStyles';

export default function PlacesList({ places, onPress }) {
  if (!places || places.length === 0) {
    return (
      <Text style={textBodyCenterLight}>
        {`No places added yet. \nClick + to add a new place.`}
      </Text>
    );
  }

  return (
    <FlatList
      style={placeListStyles.placeList}
      contentContainerStyle={placeListStyles.contentContainer}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onPress={onPress} />}
    />
  );
}
