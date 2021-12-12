import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

export default function Report() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <View style={styles.footer}>
          <View style={styles.userArea}>
            <View style={styles.userAvatar}>
              <Icon name="user" size={22} color={"#fff"} />
            </View>
            <Text style={styles.textDefault}>Matheus Patriota</Text>
          </View>
          <Text style={styles.statusArea}>Status</Text>
        </View>
      </View>
    </>
  );
}
