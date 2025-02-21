import { StyleSheet } from 'react-native';
import { colors } from './baseStyles';

export const headerIconButtonStyles = StyleSheet.create({
  headerIconButtonPressable: {
    width: 32,
    height: 32,
  },
});

export const buttonStyles = StyleSheet.create({
  buttonSolid: {
    backgroundColor: colors.melon,
    borderRadius: 5,
    padding: 12,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 12,
    borderWidth: 2,
    borderColor: colors.melon,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextLight: {
    color: colors.melon,
  },
  buttonTextDark: {
    color: colors.jet,
  },
  iconButtonWrapper: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRowItem: {
    flex: 1,
  },
  buttonSolidText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.jet,
  },
  buttonOutlineText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.melon,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
