import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, pressedStyle } from '../styles/baseStyles';
import { headerIconButtonStyles } from '../styles/buttonStyles';
import { useNavigation } from '@react-navigation/native';

export default function AddButton() {
  const navigation = useNavigation();
  return (
    // NOTE: onPressOut is a temporary workaround for a bug in react-navigation which causes header buttons (and only header buttons) to not work properly with onPress for Android)
    <TouchableOpacity
      onPressOut={() => navigation.navigate('Add Place')}
      style={({ pressed }) => [
        headerIconButtonStyles.headerIconButtonPressable,
        pressed && pressedStyle,
      ]}>
      <MaterialIcons name="add" size={32} color={colors.jet} />
    </TouchableOpacity>
  );
}
