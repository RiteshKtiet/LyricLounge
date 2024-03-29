import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import { useFonts } from '@expo/vector-icons';
// import * as Font from '@expo/vector-icons';

export default function App() {
  // const [fontsLoaded, error] = useFonts({
  //   'Calistoga-Regular': require('./assets/fonts/Calistoga-Regular.ttf'), // Ensure correct font name
  // });

  // if (error) {
  //   // Handle font loading error here (e.g., display an error message or fallback font)
  //   return <Text>Error loading fonts: {error}</Text>;
  // } else if (!fontsLoaded) {
  //   // Show a loading indicator or placeholder while fonts are loading
  //   return <Text>Loading fonts...</Text>;
  // }

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/bgapp.jpeg")}
        style={styles.image}
        blurRadius={2}
      />
      <View style={styles.signInBox}>
        <Text style={styles.signInText}>Sign In</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder="Username"
            placeholderTextColor="#7D8287"
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            placeholderTextColor="#7D8287"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Confirm Password"
            placeholderTextColor="#7D8287"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    opacity: 1, // Add slight opacity for overlay effect
  },
  signInBox: {
    backgroundColor: "#7D8287",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    width: "80%",
  },
  signInText: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Calistoga-Regular", // Use loaded font
  },
  inputContainer: {
    alignItems: "center",
  },
  inputBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#3897f0", // Match theme (can be adjusted)
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    marginBottom: 0,
    // marginRight: 0
    // marginLeft: 0,
    width: "60%",
    alignSelf: 'center',
  },
  submitText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Calistoga-Regular", // Use loaded font
  },
});
