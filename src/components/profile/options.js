import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const OPTIONS = [
  {
    id: 1,
    title: "About Foody",
    sub: "Active Bide, In Progress Order",
    icon: "fast-food-outline",
  },
  {
    id: 2,
    title: "Language & Settings",
    sub: "Active Asks, Sales, Seller Profile",
    icon: "language-outline",
  },
  {
    id: 3,
    title: "Favorites",
    sub: "Items and Lists You've Saved",
    icon: "heart-outline",
  },
  {
    id: 4,
    title: "Settings",
    sub: "Security And Notifications",
    icon: "settings-outline",
  },
  {
    id: 5,
    title: "FAQ",
    sub: "Security And Notifications",
    icon: "information-circle-outline",
  },
  {
    id: 6,
    title: "Terms of use",
    sub: "Security And Notifications",
    icon: "pencil-outline",
  },
  {
    id: 7,
    title: "Privacy Policy",
    sub: "Security And Notifications",
    icon: "accessibility-outline",
  },
];

export default function Options() {
  return (
    <View style={styles.container}>
      {OPTIONS.map((item) => (
        <View key={item.id} style={styles.optionCard}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <View style={styles.icon}>
              <Ionicons name={item.icon} size={24} color="#000" />
            </View>
            <View>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.sub}>{item.sub}</Text>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.8}>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 16,
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  sub: {
    color: "#555",
  },
  icon: {
    backgroundColor: "#ccc",
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
