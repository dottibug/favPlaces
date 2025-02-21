import { StyleSheet } from 'react-native';

export const colors = {
  taupe: '#463F3A',
  battleship: '#8A817C',
  silver: '#BCB8B1',
  isabelline: '#F4F3EE',
  melon: '#E0AFA0',
  white: '#FFFFFF',
  jet: '#292929',
};

export const baseStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.taupe,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenPadding: {
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export const textStyles = StyleSheet.create({
  textLight: {
    color: colors.isabelline,
  },
  textDark: {
    color: colors.jet,
  },
  textMelon: {
    color: colors.melon,
  },
  center: {
    textAlign: 'center',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export const textBodyDark = [textStyles.textDark, textStyles.body];

export const textBodyCenterLight = [
  textStyles.textLight,
  textStyles.body,
  textStyles.center,
];

export const textSubtitleMelon = [
  textStyles.textMelon,
  textStyles.subtitle,
  textStyles.uppercase,
];

export const textSubtitleDark = [
  textStyles.textDark,
  textStyles.subtitle,
  textStyles.uppercase,
];

export const headerStyles = {
  headerStyle: {
    backgroundColor: colors.isabelline,
  },
  headerTintColor: colors.jet,
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export const inputStyles = StyleSheet.create({
  input: {
    backgroundColor: colors.isabelline,
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    color: colors.jet,
    marginTop: 12,
    marginBottom: 12,
  },
});

export const pressedStyle = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
