import { StyleSheet, Text, View } from "react-native";

import FramePicker from "../components/FramePicker";

const FrameSlide = ({ frameValue, setFrameValue }) => {
  return (
    <View>
      <Text>FrameSlide4</Text>
      <FramePicker frameValue={frameValue} setFrameValue={setFrameValue} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FrameSlide;
