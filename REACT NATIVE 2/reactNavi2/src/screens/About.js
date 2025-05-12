import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const About = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require("../images/icon.png")} style={styles.logo} />

        <Text style={styles.appName}>React Native 2</Text>

        <Text style={styles.sectionTitle}>About This App</Text>
        <Text style={styles.description}>
          This mobile application was developed as the third assignment for the
          Mobile Application Development course (Class A).
        </Text>

        <Text style={styles.sectionTitle}>Developer</Text>
        <Text style={styles.description}>
          Created by Iko Indra Gunawan{"\n"}
          NPM: 22081010003
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  appName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#374151",
    marginTop: 10,
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: "#4B5563",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 22,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default About;
