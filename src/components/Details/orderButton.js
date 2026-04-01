import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OrderButton({ onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$9.99</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>ORDER NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceContainer: {
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 10,
    backgroundColor: "#ff746c",
    alignItems: "center",
    elevation: 3,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: "#5C5552",
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
