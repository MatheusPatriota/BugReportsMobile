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
import PasswordInput from "../../components/PasswordInput";

export default function NewUserPage({ navigation: { goBack } }: any) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const newUser = async () => {
    console.log(name, " ", email, " ", password, " ");
    await api
      .post("/user", {
        name: name,
        email: email,
        admin: false,
        password: password,
      })
      .then((response) => {
        Alert.alert("Usuário Criado com Sucesso!");
        goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const callbackFunction = (childData: any) => {
    setPassword(childData);
  };
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Realizar Cadastro de Usuário</Text>

        <View>
          <Text style={styles.titleIput}>Nome do Usuário</Text>
          <TextInput
            placeholder={"Insira Seu Nome"}
            style={styles.inputStyles}
            onChangeText={setName}
          />
        </View>
        <View>
          <Text style={styles.titleIput}>Email do Usuário</Text>
          <TextInput
            placeholder={"Insira Seu Email"}
            style={styles.inputStyles}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={styles.titleIput}>Informe sua Senha</Text>
          <PasswordInput parentCallBack={callbackFunction} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            newUser();
          }}
          accessibilityLabel="Realizar Cadastro no sistema do BugReports"
        >
          <Icon name="sign-in" size={22} color="#fff" />
          <Text style={styles.buttonText}>Criar Usuário</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
