import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo.png";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function NewUserPage() {
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Realizar Cadastro de Usuário</Text>
        <TextInput
          placeholder={"Insira Seu Nome"}
          style={styles.inputStyles}
        />
        <TextInput
          placeholder={"Insira Seu Email"}
          style={styles.inputStyles}
        />
        <TextInput
          placeholder={"Insira Seu Senha"}
          style={styles.inputStyles}
        />
        <TextInput
          placeholder={"Confirme Sua Senha"}
          style={styles.inputStyles}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("teste");
          }}
          accessibilityLabel="Realizar Cadastro no sistema do BugReports"
        >
          <Icon name="sign-in" size={22} color="#fff" />
          <Text style={styles.text}>Criar Usuário</Text>
        </TouchableOpacity>
        
      </View>
    </>
  );
}
