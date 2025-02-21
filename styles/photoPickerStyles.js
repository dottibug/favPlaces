import { StyleSheet } from 'react-native';
import { colors } from './baseStyles';

export const photoPickerStyles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginTop: 12,
    gap: 12,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.melon,
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.melon,
    width: '100%',
    height: 200,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});
