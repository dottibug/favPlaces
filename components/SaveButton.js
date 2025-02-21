import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, pressedStyle } from '../styles/baseStyles';
import { headerIconButtonStyles } from '../styles/buttonStyles';

export default function SaveButton({ onPress }) {
  return (
    // NOTE: onPressOut is a temporary workaround for a bug in react-navigation which causes header buttons (and only header buttons) to not work properly with onPress for Android)
    <TouchableOpacity
      onPressOut={onPress}
      style={({ pressed }) => [
        headerIconButtonStyles.headerIconButtonPressable,
        pressed && pressedStyle,
      ]}>
      <MaterialIcons name="check" size={32} color={colors.jet} />
    </TouchableOpacity>
  );
}
