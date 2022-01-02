import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#2B2D42",
    display: "flex",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  logo: {
    height: 80,
    width: 80,
    margin: 10,
    borderRadius: 50,
  },
  authorDisplay: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  communText: {
    fontSize: 14,
    color: "#fff",
    margin: 10
  },
});
