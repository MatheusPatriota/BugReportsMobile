import React from "react";
import { Image, View } from "react-native";
import Logo from "../../assets/logo.png";
import { styles } from "./styles";

export default function Starting() {
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo}/>
      </View>
    </>
  );
}
