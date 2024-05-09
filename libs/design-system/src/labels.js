import { Text, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 8,
    textAlign: "center",
  },
  text: {
    lineHeight: 10,
    fontSize: 14,
    marginVertical: 5,
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
});

export const Label1 = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export const Label2 = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export const Label3 = ({ children, style }) => {
  return <Text style={[styles.link, style]}>{children}</Text>;
};

export const Label4 = ({ children, style }) => {
  return <Text style={[styles.code, style]}>{children}</Text>;
};
