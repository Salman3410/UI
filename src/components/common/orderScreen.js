import { View } from "react-native";
import { useState } from "react";
import OrderQuantity from "./OrderQuantity";
import OrderButton from "./OrderButton";

export default function OrderScreen() {
  const [quantity, setQuantity] = useState(1);

  const pricePerItem = 9.99;
  const totalPrice = (pricePerItem * quantity).toFixed(2);

  return (
    <View style={{ padding: 20 }}>
      <OrderQuantity quantity={quantity} setQuantity={setQuantity} />
      <OrderButton price={totalPrice} />
    </View>
  );
}
