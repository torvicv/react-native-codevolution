import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  return <View style={{ flex: 1, backgroundColor: "yellow" }}>
    {/*<Image source={logoImg} style={{ width: 300, height: 300 }} />
    <Image source={{ uri: "https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_1280.jpg" }} style={{ width: 300, height: 300 }} />*/}
    {/*<ImageBackground source={logoImg} style={{ flex: 1 }} >
      <Text>Image Text</Text>
  </ImageBackground>*/}
    <ScrollView style={{ padding: 60 }}>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Text style={{ margin: 30 }}></Text>
    </ScrollView>
  </View>
}
