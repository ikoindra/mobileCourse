import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../images/icon.png")} style={styles.image} />
      <Text style={styles.text}>REACT NATIVE 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SplashScreen;
