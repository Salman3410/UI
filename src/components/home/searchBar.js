import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Feather name="search" size={24} style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="#888"
        />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.filterBtn}>
        <Feather name="sliders" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 16,
    paddingHorizontal: 15,
    elevation: 4,
  },
  searchIcon: {
    color: "#888",
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  filterBtn: {
    width: 50,
    height: 50,
    backgroundColor: "#ff544b",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
});
