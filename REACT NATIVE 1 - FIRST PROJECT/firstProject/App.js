import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  ToastAndroid,
  Linking,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [header, setHeader] = useState("Home");
  const [switchV, setSwitchV] = useState(true);
  const [username, setUsername] = useState("");
  const [dataMahasiswa, setDataMahasiswa] = useState([
    {
      namaMhs: "Iko Indra Gunawan",
      npmMhs: 22081010003,
    },
    {
      namaMhs: "Sarah",
      npmMhs: 13650027,
    },
    {
      namaMhs: "Dion",
      npmMhs: 13650097,
    },
    {
      namaMhs: "Virza",
      npmMhs: 13650077,
    },
    {
      namaMhs: "Reza",
      npmMhs: 13650197,
    },
    {
      namaMhs: "Linda",
      npmMhs: 13650057,
    },
  ]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#09bd75"></StatusBar>
      <View style={styles.imagecontainer}>
        <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 25 }}>
          {header}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.Image}
        onPress={() =>
          Alert.alert("Information", "Anda akan menghapus gambar ini?", [
            {
              text: "Cancel",
              onPress: () => console.log("cancel ditekan"),
              style: "cancel",
            },
            {
              text: "Ok",
              onPress: () => console.log("ok ditekan"),
            },
          ])
        }
      >
        <ImageBackground
          source={require("./src/images/image1.jpg")}
          style={{
            width: 300,
            height: 300,
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>React-Native</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL("https://google.com/")}
      >
        <Text style={{ color: "white" }}>Klik Google</Text>
      </TouchableOpacity>
      <FlatList
        style={{ flex: 1, paddingTop: 20 }}
        data={dataMahasiswa}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.flatlistitem}
            onPress={() =>
              ToastAndroid.show(item.namaMhs + " diklik", ToastAndroid.SHORT)
            }
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              {item.namaMhs}
            </Text>
            <Text style={{ color: "white" }}>{item.npmMhs}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.npmMhs}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#09bd75",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 3,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#09bd75",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    color: "black",
  },
  switch: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  Image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  imagecontainer: {
    backgroundColor: "#03fc98",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
  },
  flatlistitem: {
    marginBottom: 20,
    backgroundColor: "#09bd75",
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
export default App;
