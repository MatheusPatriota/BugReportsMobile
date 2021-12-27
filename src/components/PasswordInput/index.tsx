import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

// const [password, setPassword] = useState("");
type PasswordInputTypes = {
  parentCallBack?: any
}
export default function PasswordInput(props: PasswordInputTypes) {
  const [toggleHidePassword, setToggleHidePassword] = useState(true);

  return (
    <View style={styles.PasswordView}>
      <TextInput
        placeholder={"Insira Sua Senha"}
        style={styles.PasswordInput}
        autoComplete="password"
        secureTextEntry={toggleHidePassword}
        onChangeText={props.parentCallBack}
      />
      <TouchableOpacity
        style={styles.IconBox}
        onPress={() => setToggleHidePassword(!toggleHidePassword)}
      >
        {toggleHidePassword ? (
          <Icon name="eye" size={20} style={styles.Icon} />
        ) : (
          <Icon name="eye-slash" size={20} style={styles.Icon} />
        )}
      </TouchableOpacity>
    </View>
  );
}
