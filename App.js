import { useState } from "react";
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
import Greet from "./components/Greet";
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name='Victor' />  
    </View>
  );
}
