import { StyleSheet, Text, View, Image } from "react-native";
import Options from "./options";

export default function InfroCard() {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Image
          source={require("../../../assets/images/S.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>Sam</Text>
          <Text style={styles.email}>sam123@gmail.com</Text>
        </View>
      </View>
      <Options />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: "#ff544b",
    elevation: 3,
    padding: 15,
    borderRadius: 20,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    color: "#555",
  },
});
