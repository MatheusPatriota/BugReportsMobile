import React, { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import BugLogo from "../../assets/bug_logo.png";
import api from "../../services/Api";

export default function NewReportPage({ route, navigation: { goBack }  }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createNewReport = () => {
    console.log("entrei na funcao");
    api
      .post("/report", {
        title: title,
        authorId: route.params.authorId,
        roomId: route.params.roomId,
        description: description,
      })
      .then((response) => {
        Alert.alert("Ocorrência cadastrada com sucesso!");
        goBack();
      });
  };
  return (
    <View style={styles.container}>
      <Image source={BugLogo} style={styles.logo} />
      <View>
        <Text style={styles.title}>Titulo da Ocorrência</Text>
        <TextInput
          placeholder={"Digite o Titulo da Ocorrência"}
          style={styles.inputTitle}
          onChangeText={setTitle}
        />
      </View>
      <View>
        <Text style={styles.title}>Descrição da Ocorrência</Text>
        <TextInput
          placeholder={"Informe a Descrição da Ocorrência"}
          style={styles.description}
          onChangeText={setDescription}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => createNewReport()}>
        <Text style={styles.buttonText}>Cadastrar Nova Ocorrência</Text>
      </TouchableOpacity>
    </View>
  );
}
