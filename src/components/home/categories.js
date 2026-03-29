import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CATEGORIES = ["All", "Combos", "Sliders", "Classic", "Drinks"];

export default function Categories() {
  const [active, setActive] = useState("All");
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.btn, active === item && styles.activeBtn]}
            onPress={() => setActive(item)}
            activeOpacity={0.8}
          >
            <Text style={[styles.text, active === item && styles.activeText]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  btn: {
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  activeBtn: {
    backgroundColor: "#ff544b",
  },
  text: {
    color: "#888",
    fontWeight: "500",
  },
  activeText: {
    color: "#fff",
  },
});
