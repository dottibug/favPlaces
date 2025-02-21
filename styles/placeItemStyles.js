import { StyleSheet } from 'react-native';
import { textSubtitleDark, textBodyDark, colors } from './baseStyles';

export const placeItemStyles = StyleSheet.create({
  placeItemWrapper: {
    borderRadius: 6,
    flexDirection: 'row',
    marginVertical: 12,
  },
  placeItemImage: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    width: 100,
    height: 100,
  },
  placeItemInfoWrapper: {
    padding: 12,
    gap: 8,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: colors.melon,
  },
  placeItemTitle: {
    ...textSubtitleDark,
  },
  placeItemAddress: {
    ...textBodyDark,
  },
});
