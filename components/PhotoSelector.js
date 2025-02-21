import { useEffect } from 'react';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import { View, Text, Image, Alert } from 'react-native';
import Button from './Button';
import { photoPickerStyles } from '../styles/photoPickerStyles';

export default function PhotoSelector({ onPhotoTaken, image }) {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  async function verifyPermissions() {
    const permissionResponse = await requestPermission();

    switch (cameraPermissionInformation.status) {
      case PermissionStatus.UNDETERMINED:
        return permissionResponse.granted;
      case PermissionStatus.DENIED:
        Alert.alert(
          'Insufficient Permissions!',
          'You need to grant permission to use the camera.'
        );
        return false;
      default:
        return true;
    }
  }

  async function handleTakePhoto() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    onPhotoTaken(image.assets[0].uri);
  }

  const renderImagePreview = () => {
    if (image) return <Image source={{ uri: image }} style={photoPickerStyles.image} />;
    return <Text>No image added yet.</Text>;
  };

  return (
    <View style={photoPickerStyles.container}>
      <View style={photoPickerStyles.imageWrapper}>{renderImagePreview()}</View>
      <Button onPress={handleTakePhoto} type="outline" icon="photo-camera">
        Take Photo
      </Button>
    </View>
  );
}
