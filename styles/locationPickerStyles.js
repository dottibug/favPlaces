import { StyleSheet } from 'react-native';
import { colors } from './baseStyles';

export const locationPickerStyles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginTop: 12,
    gap: 12,
  },
  locationWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.melon,
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  mapPreview: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
});
