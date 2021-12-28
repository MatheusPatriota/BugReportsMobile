import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#2B2D42",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  inputTitle: {
    height: 50,
    backgroundColor: "#fff",
    width: 320,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  description: {
    height: 100,
    backgroundColor: "#fff",
    width: 320,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    margin: 10,
  },
  button: {
      width:320,
      height: 50,
      backgroundColor: "#0066E8",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  }
});
