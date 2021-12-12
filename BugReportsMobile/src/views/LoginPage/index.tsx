import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo.png";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LoginPage({navigation}:any) {
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Realizar Login</Text>
        <TextInput
          placeholder={"Insira Seu Login"}
          style={styles.inputStyles}
        />
        <TextInput
          placeholder={"Insira Sua Senha"}
          style={styles.inputStyles}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
           navigation.navigate('RoomCode')
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
          <TouchableOpacity style={styles.buttonFooter} onPress={() =>{
            navigation.navigate('NewUser')
          }}>
            <Text style={styles.linkNewUser}>Crie uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
