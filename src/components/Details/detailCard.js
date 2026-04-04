import { StyleSheet, Text, View, Image } from "react-native";

export default function CardDetails({ route, navigation }) {
  const food = route?.params?.food;

  if (!food) {
    return (
      <View style={styles.container}>
        <Text>No food data found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {food?.image && <Image source={food.image} style={styles.image} />}

      <Text style={styles.title}>
        {food.title} - {food.sub}
      </Text>

      <View style={styles.row}>
        <Text style={styles.rating}>⭐ {food.rating}</Text>
        <Text style={styles.rating}>14 mins</Text>
      </View>

      <Text style={styles.description}>{food.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 220,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  rating: {
    fontSize: 14,
    color: "#555",
  },
  description: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
});
