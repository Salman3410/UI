import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomButton({
  onPrimaryPress,
  onSecondaryPress,
  primaryTitle,
  secondaryTitle,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={onPrimaryPress}
        activeOpacity={0.8}
      >
        <Text style={styles.loginButtonText}>{primaryTitle}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={onSecondaryPress}
        activeOpacity={0.8}
      >
        <Text style={styles.registerButtonText}>{secondaryTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 180,
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 125,
    paddingVertical: 10,
    borderRadius: 16,
    marginBottom: 10,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  registerButton: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 10,
    borderRadius: 16,
    marginBottom: 10,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
