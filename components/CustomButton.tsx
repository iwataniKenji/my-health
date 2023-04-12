import { TouchableOpacity, StyleSheet, Text } from "react-native";

type Props = {
  children: string;
  color: string;
  handleClick: () => void;
};

export function CustomButton({ children, color, handleClick }: Props) {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonContainer, backgroundColor: color }}
      onPress={handleClick}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontFamily: "averiaLibre-regular",
  },

  buttonContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 2,
  },
});
