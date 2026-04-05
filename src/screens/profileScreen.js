import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/profile/header";
import InfoCard from "../components/profile/infoCard";

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <InfoCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
