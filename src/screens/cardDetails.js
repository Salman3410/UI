import { StyleSheet, View } from "react-native";
import HeaderBar from "../components/Details/headerBar";
import OrderQuantity from "../components/Details/orderQuantity";
import OrderButton from "../components/Details/orderButton";
import DetailCard from "../components/Details/detailCard";

export default function CardDetails({ navigation, route }) {
  const food = route?.params?.food;
  return (
    <View style={styles.container}>
      <HeaderBar onPress={() => navigation.goBack()} />
      <DetailCard food={food} />
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
