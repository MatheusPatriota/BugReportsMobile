import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

export default function Room() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.description}>
          SALA X.
        </Text>
        <View style={styles.footer}>
          <View style={styles.userArea}>
            <View style={styles.userAvatar}>
              <Icon name="user" size={22} color={"#fff"} />
            </View>
            <Text style={styles.textDefault}>Administrador</Text>
          </View>
        </View>
      </View>
    </>
  );
}
