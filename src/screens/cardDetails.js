import { StyleSheet, View, Image } from "react-native";
import HeaderBar from "../components/Details/headerBar";
import DetailCard from "../components/Details/detailCard";
import OrderQuantity from "../components/Details/orderQuantity";
import OrderButton from "../components/Details/orderButton";

export default function CardDetails({ navigation }) {
  console.log("FROM WHERE:", route);
  return (
    <View style={styles.container}>
      <HeaderBar onPress={() => navigation.goBack()} />
      <Image
        source={require("../../assets/images/cheese_burger.png")}
        style={styles.image}
      />
      <DetailCard />
      <OrderQuantity />
      <OrderButton onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
