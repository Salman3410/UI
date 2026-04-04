import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function Options() {
  return (
    <View style={styles.container}>
      <View style={styles.optionCard}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="fast-food-outline" size={24} style={styles.icon} />
          <View>
            <Text style={styles.name}>About Foody</Text>
            <Text style={styles.sub}>Active Bids, In Progress Order</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <AntDesign name="right" size={16} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 16,
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  sub: {
    color: "#555",
    marginTop: 5,
  },
  icon: {
    backgroundColor: "#ff746c",
    color: "#fff",
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
