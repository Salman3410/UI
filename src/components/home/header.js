import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.row}>
        <View>
          <Text style={styles.header}>FoodHere</Text>
          <Text style={styles.tagline}>Order your favourite food!</Text>
        </View>
        <Image
          source={require("../../../assets/images/S.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  tagline: {
    fontSize: 18,
    color: "#555",
    fontStyle: "italic",
  },
});
