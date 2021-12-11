import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    backgroundColor: "#2b2d42",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 52.85,
    width: 251.42,
    margin: 10,
  },
  inputStyles: {
    height: 50,
    backgroundColor: "#fff",
    width: 320,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  button: {
    height: 50,
    width: 320,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#0066e8",
    margin: 10,
    borderRadius: 10,

    display: 'flex',
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
    color: "#fff",
  },
  loginOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 5,
    color: "#fff",
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  footer: {
    color: "#fff",
  },
  buttonFooter: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
  },
  linkNewUser: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    color: "#0066e8",
    fontSize: 15,
    fontWeight: "bold",
  },
});
