import { View, Text, Image, ImageBackground, ScrollView, Button } from "react-native";
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "yellow", padding: 60 }}>
      <Button title="Press" onPress={() => console.log("Button pressed")}
        color="midnightblue" disabled />
    </View>
  );
}
