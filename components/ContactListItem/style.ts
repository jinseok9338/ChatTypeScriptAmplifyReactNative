import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50,
  },
  container: {
    flexDirection: "row",
    // flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
  midContainer: {
    justifyContent: "space-around",
  },
  leftContainer: {},
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: "grey",
  },
  time: {
    marginLeft: "auto",
    fontSize: 14,
    color: "grey",
  },
});

export default style;
