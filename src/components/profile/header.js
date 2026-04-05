import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <FontAwesome6 name="bars-staggered" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Profile</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => console.log(Alert.alert("Logout", "Button Pressed"))}
        >
          <AntDesign name="poweroff" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
