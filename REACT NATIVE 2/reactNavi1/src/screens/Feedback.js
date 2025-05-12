import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const feedbackOptions = [
  { label: "Saran", value: "Saran" },
  { label: "Keluhan", value: "Keluhan" },
  { label: "Lainnya", value: "Lainnya" },
];

const Feedback = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackType, setFeedbackType] = useState("Saran");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(feedbackOptions);

  const handleSubmit = () => {
    alert("Terima Kasih atas masukan anda!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Form Saran & Keluhan</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <DropDownPicker
        open={open}
        value={feedbackType}
        items={items}
        setOpen={setOpen}
        setValue={setFeedbackType}
        setItems={setItems}
        placeholder="Pilih tipe pesan"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        dropDownStyle={styles.dropdownList}
        itemStyle={styles.dropdownItem}
      />

      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Tulis pesan di sini..."
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Kirim</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Kembali</Text>
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  dropdownContainer: {
    width: "100%",
    height: 50,
    marginBottom: 12,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  dropdownList: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  dropdownItem: {
    justifyContent: "flex-start",
  },
  messageInput: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    paddingVertical: 12,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#6c757d",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Feedback;
