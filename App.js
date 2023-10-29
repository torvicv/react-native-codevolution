import { useState } from "react";
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button onPress={() => Alert.alert('Invalid data')} title="Alert" />
      <Button title="Alert 2" onPress={() => Alert.alert("Invalid data", "DOB Incorrect", [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed')
        },
        {
          text: 'OK',
          onPress: () => console.log('OK pressed')
        }
      ])
    } />
    </View>
  );
}
