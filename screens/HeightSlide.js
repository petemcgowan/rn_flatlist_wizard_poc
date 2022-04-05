import { StyleSheet, Text, TextInput, View } from "react-native";

const HeightSlide = ({ heightValue, setHeightValue }) => {
  return (
    <View>
      <Text>HeightSlide3</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={heightValue}
          onChangeText={setHeightValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70,
  },
  input: {
    height: 70,
    backgroundColor: "#666666",
    color: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default HeightSlide;
