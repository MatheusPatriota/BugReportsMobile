import React, { useEffect } from "react";
import { Image, View } from "react-native";
import Logo from "../../assets/logo.png";
import { styles } from "./styles";

export default function Starting({ navigation }: any) {
  function changeScreenAfterFiveSeconds() {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }

  useEffect(() => {
    changeScreenAfterFiveSeconds();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
      </View>
    </>
  );
}
