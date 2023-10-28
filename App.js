import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable } from "react-native";
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "yellow", padding: 60 }}>
      <Pressable  onPress={() => console.log("Image pressed")} style={{ width: 300, height: 300}} >
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
    </View>
  );
}
