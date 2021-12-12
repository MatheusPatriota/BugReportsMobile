import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
import Logo from '../../assets/logo.png'
import { styles } from "./styles";
export default function Header(){

  return(
    <>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo}/>
        <TouchableOpacity style={styles.copyBox}>
        <Icon name="copy" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  )
}