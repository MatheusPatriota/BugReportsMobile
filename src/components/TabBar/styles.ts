import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  tabText:{
      fontSize: 16,
      fontWeight: "bold",
      color: "#000",
  }
});
