import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function CustomTabBar({ state, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => navigation.navigate("Home")}
        activeOpacity={0.8}
      >
        <Feather
          name="home"
          size={24}
          color={state.index === 0 ? "#fff" : "#ffdada"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => navigation.navigate("Profile")}
        activeOpacity={0.8}
      >
        <Feather
          name="user"
          size={24}
          color={state.index === 1 ? "#fff" : "#ffdada"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.floatingBtn}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("CheckOut")}
      >
        <Ionicons name="cart-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#ff544b",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconBtn: {
    padding: 10,
  },
  floatingBtn: {
    position: "absolute",
    top: -25,
    alignSelf: "center",
    backgroundColor: "#ff544b",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
});
