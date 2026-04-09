import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/common/customInput";
import CustomButton from "../../components/common/customButton";
import ForgetPassword from "../../components/login/forgetPassword";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FoodHere</Text>
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" secureTextEntry={true} />
      <ForgetPassword />
      <CustomButton
        primaryTitle="Login"
        onPrimaryPress={() => navigation.navigate("MainTabs")}
        secondaryTitle="Register account"
        onSecondaryPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff746c",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    marginTop: 100,
    alignItems: "center",
    marginBottom: 220,
    alignSelf: "center",
  },
});
