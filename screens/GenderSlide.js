import { StyleSheet, Text, View } from "react-native";

import GenderPicker from "../components/GenderPicker";

const GenderSlide = ({ genderValue, setGenderValue }) => {
  return (
    <View>
      <Text>GenderSlide1</Text>
      <GenderPicker genderValue={genderValue} setGenderValue={setGenderValue} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GenderSlide;
