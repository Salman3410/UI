import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";

export default function OrderQuantity() {
  return (
    <View>
      <Text style={styles.portion}>Portion</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <FontAwesome6 name="minus" size={16} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.quantity}>1</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <FontAwesome5 name="plus" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  portion: {
    fontWeight: "500",
    marginTop: 140,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: "#ff746c",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  counter: {
    fontSize: 22,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
    marginRight: 10,
  },
});
