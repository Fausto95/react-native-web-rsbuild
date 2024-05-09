import { StyleSheet, View } from "react-native";

const circleStyle = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "red",
  },
});

const squareStyle = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});

const diamondStyle = StyleSheet.create({
  diamond: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
  },
});

export const Square = () => {
  return <View style={squareStyle.square} />;
};

export const Diamond = () => {
  return <View style={diamondStyle.diamond} />;
};

export const Circle = () => {
  return <View style={circleStyle.circle} />;
};

export default Circle;
