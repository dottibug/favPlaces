import { Pressable, View, Text } from 'react-native';
import { colors } from '../styles/baseStyles';
import { buttonStyles } from '../styles/buttonStyles';
import { MaterialIcons } from '@expo/vector-icons';

export default function Button({
  children,
  onPress,
  type = 'solid',
  icon = '',
  width,
  isRowButton = false,
}) {
  const buttonStyle = {
    ...(type === 'solid' ? buttonStyles.buttonSolid : buttonStyles.buttonOutline),
    ...(width && { width }),
    ...(isRowButton && buttonStyles.buttonRowItem),
  };

  const buttonTextStyle =
    type === 'solid' ? buttonStyles.buttonSolidText : buttonStyles.buttonOutlineText;

  const isIconButton = icon !== '';
  const isSolidButton = type === 'solid';

  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [buttonStyle, buttonStyles.buttonPressed] : buttonStyle
      }
      onPress={onPress}>
      <View
        style={
          isIconButton ? buttonStyles.iconButtonWrapper : buttonStyles.buttonWrapper
        }>
        {isIconButton && (
          <MaterialIcons
            name={icon}
            size={24}
            color={isSolidButton ? colors.jet : colors.melon}
          />
        )}
        <Text style={buttonTextStyle}>{children}</Text>
      </View>
    </Pressable>
  );
}
