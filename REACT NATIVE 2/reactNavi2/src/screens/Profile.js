import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Profile Picture */}
        <Image
          source={require("../images/profile.jpg")}
          style={styles.profileImage}
        />

        {/* User Info */}
        <Text style={styles.name}>Iko Indra Gunawan</Text>
        <Text style={styles.email}>22081010003@student.upnjatim.ac.id</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Kembail</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 20,
  },
  content: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#000000",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
    width: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Profile;
