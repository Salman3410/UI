import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ForgetPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.rememberBox}>
        <TouchableOpacity activeOpacity={0.8}>
          <MaterialIcons
            name="check-box-outline-blank"
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
        <Text style={styles.text}>Remember me</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.text}>Forget password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  rememberBox: {
    flexDirection: "row",
    gap: 2,
  },
  text: {
    color: "#fff",
  },
});
