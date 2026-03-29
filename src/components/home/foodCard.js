import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    title: "Cheeseburger",
    sub: "Wendy's Burger",
    rating: "4.9",
    image: require("../../../assets/images/cheese_burger.png"),
  },
  {
    id: "2",
    title: "Hamburger",
    sub: "Veggie Burger",
    rating: "4.8",
    image: require("../../../assets/images/hamburger.png"),
  },
  {
    id: "3",
    title: "Patty Burger",
    sub: "Chicken Burger",
    rating: "4.6",
    image: require("../../../assets/images/patty_Burger.png"),
  },
  {
    id: "4",
    title: "Hamburger",
    sub: "Fried Chicken Burger",
    rating: "4.5",
    image: require("../../../assets/images/hamburger.png"),
  },
];

export default function FoodCard() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.sub}</Text>

        <View style={styles.bottomRow}>
          <View style={styles.rating}>
            <Feather name="star" size={14} color="#ff9f43" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>

          <TouchableOpacity activeOpacity={0.8}>
            <Feather name="heart" size={18} color="#555" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={DATA}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 90,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: -10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  subtitle: {
    fontSize: 13,
    color: "#888",
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 13,
    color: "#555",
  },
});
