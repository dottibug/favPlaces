import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './baseStyles';

const screenWidth = Dimensions.get('window').width;
const imageWidth = 120;
const horizontalMargin = 12;
const infoWidth = screenWidth - imageWidth - horizontalMargin * 2;

export const placeListStyles = StyleSheet.create({
  placeList: {
    flex: 1,
    marginHorizontal: 12,
  },
  contentContainer: {
    flex: 1,
  },
  placeItemWrapper: {
    borderRadius: 6,
    flexDirection: 'row',
    marginBottom: 18,
  },
  placeItemImage: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    width: 120,
    alignSelf: 'stretch',
    height: 150,
  },
  placeItemInfoWrapper: {
    width: infoWidth,
    padding: 12,
    gap: 9,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: colors.melon,
    justifyContent: 'center',
  },
  placeItemTitle: {
    color: colors.jet,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  placeItemAddress: {
    color: colors.jet,
    fontSize: 16,
    lineHeight: 24,
    flexWrap: 'wrap',
  },
});
