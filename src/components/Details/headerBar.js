import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderBar({ onPress }) {
  return (
    <View style={styles.headerBar}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="search-sharp" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
