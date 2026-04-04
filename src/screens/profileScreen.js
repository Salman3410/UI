import { StyleSheet, Text, View } from "react-native";
import Header from "../components/profile/header";
import InfroCard from "../components/profile/infroCard";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <InfroCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
