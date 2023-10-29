import { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
import Greet from "./components/Greet";
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'plum', padding: 60 },
  title: { fontSize: 20 }
})
