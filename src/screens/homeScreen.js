import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/home/header";
import SearchBar from "../components/home/searchBar";
import Categories from "../components/home/categories";
import FoodCard from "../components/home/foodCard";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <SearchBar />
      <Categories />
      <FoodCard
        onPress={() => navigation.navigate("FoodDetails", { food: item })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
