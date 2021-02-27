import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: { padding: 10 },
  messageBox: {
    borderRadius: 20,
    padding: 10,
  },
  time: {
    marginLeft: "auto",
    fontSize: 10,
  },
  message: {
    fontSize: 15,
    paddingTop: 5,
    marginBottom: 5,
  },
  name: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});

export default styles;
