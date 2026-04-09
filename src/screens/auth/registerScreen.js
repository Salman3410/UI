import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/common/customInput";
import CustomButton from "../../components/common/customButton";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <CustomInput placeholder="Name" />
      <CustomInput placeholder="Email" autoCapitalize="none" />
      <CustomInput placeholder="Password" secureTextEntry={true} />
      <CustomInput placeholder="Confirm password" secureTextEntry={true} />
      <View style={styles.textContainer}>
        <Text style={styles.primaryText}>
          By signing up, you agree to our{" "}
          <Text style={styles.secondaryText}>Terms and Conditions</Text> and{" "}
          <Text style={styles.secondaryText}>Privacy Policy.</Text>
        </Text>
      </View>
      <CustomButton
        primaryTitle="Register"
        onPrimaryPress={() => navigation.navigate("Login")}
        secondaryTitle="Back"
        onSecondaryPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff746c",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 160,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  primaryText: {
    color: "#fff",
  },
  secondaryText: {
    color: "#555",
  },
});
