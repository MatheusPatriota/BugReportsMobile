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
import PasswordInput from "../../components/PasswordInput";
import api from "../../services/Api";
import UserTypes from "./UserTypes";

export default function LoginPage({ navigation }: any) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState<UserTypes>();

  const loadUserInfo = async () => {
    await api
      .get(`/user/email/${email}`)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.res);
      })
      .catch((error) => {
        Alert.alert("Erro Ao tentar Logar", "Email Inválido");
      });
  };

  const callbackFunction = (childData: any) => {
    setPassword(childData);
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Realizar Login</Text>
        <TextInput
          placeholder={"Insira Seu Email"}
          style={styles.inputStyles}
          onChangeText={setEmail}
        />
        <PasswordInput parentCallBack={callbackFunction} />
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (email === "" || !email) {
              Alert.alert("Erro a tentar Logar", "Campo de Email é Necessario");
            } else if (password === "" || !password) {
              Alert.alert("Erro a tentar Logar", "Campo de Senha é Necessario");
            } else {
              await loadUserInfo();
              if (userData) {
                if (password === userData.password) {
                  if(userData.admin){
                    navigation.navigate("Dashboard", {authorId: userData._id});
                  }else{
                    navigation.navigate("RoomCode", {authorId: userData._id});
                  }
                } else {
                  Alert.alert("Erro Ao entrar na sala", "Senha Incorreta");
                }
              }
            }
          }}
          accessibilityLabel="Realizar Login no sistema do BugReports"
        >
          <Text style={styles.text}>Realizar Login</Text>
        </TouchableOpacity>
        <View style={styles.loginOptions}>
          <TouchableOpacity style={styles.circle}>
            <Icon name="google" size={18} color="#d85600" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Icon name="github" size={18} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>É novo aqui?</Text>
          <TouchableOpacity
            style={styles.buttonFooter}
            onPress={() => {
              navigation.navigate("NewUser");
            }}
          >
            <Text style={styles.linkNewUser}>Crie uma conta</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.buttonFooter} onPress={() =>{
            navigation.navigate('NewRoom')
          }}>
            <Text style={styles.linkNewUser}>New Room</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </>
  );
}
