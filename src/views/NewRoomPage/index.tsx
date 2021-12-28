import React, { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../assets/logo.png";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import api from "../../services/Api";

export default function NewRoomPage({ navigation: { goBack } }: any) {
  const [roomName, setRoomName] = useState("");
  const [enterpriseName, setEnterpriseName] = useState("");
  const [roomPassword, setRoomPassword] = useState("");

  const createRoom = () => {
    api
      .post("/room", {
        roomName: roomName,
        enterpriseName: enterpriseName,
        password: roomPassword,
      })
      .then((response) => {
        Alert.alert("Sala cadastrada com sucesso!");
        goBack();
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Crie uma nova sala de Projeto</Text>
        <TextInput
          placeholder={"Digite o Nome da Sala"}
          style={styles.inputStyles}
          onChangeText={setRoomName}
        />
        <TextInput
          placeholder={"Digite o Nome da Empresa"}
          style={styles.inputStyles}
          onChangeText={setEnterpriseName}
        />
        <TextInput
          placeholder={"Digite a senha da Sala"}
          style={styles.inputStyles}
          onChangeText={setRoomPassword}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            createRoom();
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
