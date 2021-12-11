import React from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Logo from "../../assets/logo.png";

export default function LoginPage() {
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <TextInput placeholder={"Insira Seu Login"} style={styles.input} />
        <TextInput placeholder={"Insira Sua Senha"} style={styles.input} />
        <TouchableOpacity
          onPress={() => {
            console.log("teste");
          }}
          style={styles.button}
          accessibilityLabel="Realizar Login no sistema do BugReports"
        >
          <Text style={styles.textStyle}>Realizar Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
