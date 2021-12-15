import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo.png";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function NewRoomCode({navigation}:any) {
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Crie uma nova sala de Projeto</Text>
        <TextInput
          placeholder={"Digite o Nome da sala"}
          style={styles.inputStyles}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Reports')
          }}
          accessibilityLabel="Cadastrar nova sala de Projeto no sistema do BugReports"
        > 
          <Icon name="sign-in" size={22} color="#fff" />
          <Text style={styles.text}>Criar Sala</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
