import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  return <View style={{ flex: 1, backgroundColor: "yellow", padding: 60 }}>
    {/*<Image source={logoImg} style={{ width: 300, height: 300 }} />
    <Image source={{ uri: "https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_1280.jpg" }} style={{ width: 300, height: 300 }} />*/}
    <ImageBackground source={logoImg} style={{ flex: 1 }} >
      <Text>Image Text</Text>
    </ImageBackground>
  </View>
}
