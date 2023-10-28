import { useState } from "react";
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal } from "react-native";
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "yellow", padding: 60 }}>
      <Button title="Press" onPress={() => setIsModalVisible(true)}
        color="midnightblue" />
      <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} 
        animationType="slide" presentationStyle="pageSheet">
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal content</Text>
          <Button title="Close" color="midnightblue"
            onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
