import { StyleSheet, View } from "react-native";
import Header from "../components/checkOut/header";

export default function CheckOutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
