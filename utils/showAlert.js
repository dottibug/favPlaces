import { Alert } from 'react-native';

export default function showAlert({ title, message }) {
  Alert.alert(title, message);
}
