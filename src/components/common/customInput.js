import { StyleSheet, TextInput, View } from "react-native";

export default function CustomInput({
  placeholder,
  secureTextEntry,
  autoCapitalize,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="#555"
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#eee",
    marginBottom: 10,
    paddingHorizontal: 20,
  },

  input: {},
});
