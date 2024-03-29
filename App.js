import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  FlatList,
  Animated,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import GenderSlide from "./screens/GenderSlide";
import AgeSlide from "./screens/AgeSlide";
import HeightSlide from "./screens/HeightSlide";
import FrameSlide from "./screens/FrameSlide";
import WeightSlide from "./screens/WeightSlide";
import ResultSlide from "./screens/ResultSlide";

const { width, height } = Dimensions.get("screen");

const imagesData = [
  {
    key: 1,
    title: "gender",
    image: require("./assets/beach-footsteps-small.jpg"),
  },
  {
    key: 2,
    title: "age",
    image: require("./assets/beach-solo-running-sand-small.jpg"),
  },
  {
    key: 3,
    title: "height",
    image: require("./assets/beach-triangle-palms-small.jpg"),
  },
  {
    key: 4,
    title: "frame",
    image: require("./assets/beach-multi-palm-trees-argh-small.jpg"),
  },
  {
    key: 5,
    title: "weight",
    image: require("./assets/beach-white-sands-oh-so-ronery-small.jpg"),
  },
];

export default function App() {
  const [genderValue, setGenderValue] = useState();
  const [ageValue, setAgeValue] = useState();
  const [heightValue, setHeightValue] = useState();
  const [frameValue, setFrameValue] = useState();
  const [weightValue, setWeightValue] = useState();

  const handleCalculate = () => {
    console.log("handleCalculate, genderValue:" + genderValue);
    console.log("handleCalculate, ageValue:" + ageValue);
    console.log("handleCalculate, heightValue:" + heightValue);
    console.log("handleCalculate, frameValue:" + frameValue);
    console.log("handleCalculate, weightValue:" + weightValue);

    imagesData.push({
      key: 6,
      title: "result",
      image: require("./assets/blue-palm-trees-small.jpg"),
    });
  };

  // **********  Gender  **********
  // **********  Age     **********
  // **********  Height  **********
  // **********  Frame   **********
  // **********  Weight  **********   Calculate here

  // Result page
  // Settings page = Imperial, Algorithm type (1958, 1963 etc)

  // Swipe-up 1 (Height) - how to change imperial setting
  // Swipe-up 2 (Weight) - how to change imperial or some info on weight categories e.g. overweight
  // Swipe-up 3 (Frame) - how to measure frame etc.  wrist icon.
  // Swipe-up 4 (Age) - Maybe no swipe up on last

  // TODO Doesn't Intro page have calculate buttons?  Use the **tick button** for now
  // TODO Result page appears after calculate press.

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        data={imagesData}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <ImageBackground
                // source={{ uri: item.image }}
                source={item.image}
                style={{ flex: 1, resizeMode: "cover" }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {/* ************************************* */}
                  {
                    {
                      gender: (
                        <GenderSlide
                          genderValue={genderValue}
                          setGenderValue={setGenderValue}
                        />
                      ),
                      age: (
                        <AgeSlide
                          ageValue={ageValue}
                          setAgeValue={setAgeValue}
                        />
                      ),
                      height: (
                        <HeightSlide
                          heightValue={heightValue}
                          setHeightValue={setHeightValue}
                        />
                      ),
                      frame: (
                        <FrameSlide
                          frameValue={frameValue}
                          setFrameValue={setFrameValue}
                        />
                      ),
                      weight: (
                        <WeightSlide
                          frameValue={weightValue}
                          setWeightValue={setWeightValue}
                          handleCalculate={handleCalculate}
                        />
                      ),
                      result: <ResultSlide />,
                    }[item.title]
                  }
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />
    </View>
  );
}

// {/* man: (
//    <HeightSlide
//     heightValue={heightValue}
//     setHeightValue={(value) => setHeightValue(value)}
//   />
// ),  */}

// const HeightSlide = ({ heightValue, setHeightValue }) => {
//   return (
//     <View>
//       {/* <Label>HeightSlide1, text1</Label>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={heightValue}
//           onChangeText={setHeightValue}
//         />
//       </View> */}
//     </View>
//   );
// };

// const FrameSlide = () => {
//   return (
//     <View>
//       <Text style={styles.input}>FrameSlide</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
