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
        <Text style={styles.text}>Entar na sala do Sistema</Text>
        <TextInput
          placeholder={"Digite o código da sala"}
          style={styles.inputStyles}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Reports')
          }}
          accessibilityLabel="Realizar Login no sistema do BugReports"
        > 
          <Icon name="sign-in" size={22} color="#fff" />
          <Text style={styles.text}>Entar na Sala</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>Não é sua conta?</Text>
          <TouchableOpacity style={styles.buttonFooter} onPress={() => {
            navigation.navigate('Login');
          }}>
            <Text style={styles.linkNewUser}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
