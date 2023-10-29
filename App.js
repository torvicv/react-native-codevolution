import { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
import Greet from "./components/Greet";
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {

  return (
    <View style={styles.container}>
      <View style={[styles.lightblueBg, styles.box]} >
        <Text style={styles.title}>StyleSheet API</Text>
      </View>
      <View style={[styles.lightgreenBg, styles.box]} >
        <Text style={styles.title}>StyleSheet API</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'plum', padding: 60 },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor: 'pink'
  },
  lightblueBg: {
    backgroundColor: 'lightblue'
  },
  lightgreenBg: {
    backgroundColor: 'lightgreen'
  }
})
