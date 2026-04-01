import { StyleSheet, Text, View } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Cheese Wendy's Burger",
    description:
      "Enjoy our delicious Cheeseburger Wendy's Burger, made with a savory blend of fresh vegetables and herbs, topped with crisp lettuce, juicy tomatoes and tangy pickles, all served on a soft, toasted bun.",
    rating: "4.9",
    image: require("../../../assets/images/cheese_burger.png"),
  },
  {
    id: "2",
    title: "Hamburger Veggie Burger",
    description:
      "Enjoy our delicious Cheeseburger Wendy's Burger, made with a savory blend of fresh vegetables and herbs, topped with crisp lettuce, juicy tomatoes and tangy pickles, all served on a soft, toasted bun.",
    rating: "4.8",
    image: require("../../../assets/images/hamburger.png"),
  },
  {
    id: "3",
    title: "Patty Chicken Burger",
    description:
      "Enjoy our delicious Cheeseburger Wendy's Burger, made with a savory blend of fresh vegetables and herbs, topped with crisp lettuce, juicy tomatoes and tangy pickles, all served on a soft, toasted bun.",
    rating: "4.6",
    image: require("../../../assets/images/patty_Burger.png"),
  },
  {
    id: "4",
    title: "Hamburger Fried Chicken Burger",
    description:
      "Enjoy our delicious Cheeseburger Wendy's Burger, made with a savory blend of fresh vegetables and herbs, topped with crisp lettuce, juicy tomatoes and tangy pickles, all served on a soft, toasted bun.",
    rating: "4.5",
    image: require("../../../assets/images/hamburger.png"),
  },
];

export default function DetailCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cheese Wendy's Burger</Text>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text style={styles.rating}>4.8</Text>
        <Text style={styles.rating}>14 mins</Text>
      </View>
      <Text style={styles.description}>
        Enjoy our delicious Cheeseburger Wendy's Burger, made with a savory
        blend of fresh vegetables and herbs, topped with crisp lettuce, juicy
        tomatoes and tangy pickles, all served on a soft, toasted bun.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  rating: {
    fontSize: 14,
    color: "#555",
  },
  description: {
    fontSize: 15,
    color: "#555",
  },
});
