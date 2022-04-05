import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const WeightSlide = ({ weightValue, setWeightValue, handleCalculate }) => {
  return (
    <View>
      <Text>WeightSlide5/Calc</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.input}>Slide2</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculate </Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#1D1D1B",
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#FFCB1F",
    fontWeight: "bold",
  },
});

export default WeightSlide;
