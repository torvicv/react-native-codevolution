import { useState } from "react";
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar } from "react-native";
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar barStyle='light-content' backgroundColor='lightgreen'>
        <Text>Hello StatusBar</Text>
      </StatusBar>
    </View>
  );
}
