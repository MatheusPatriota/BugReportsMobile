import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo.png";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import SelectDropdown from "react-native-select-dropdown";
import api from "../../services/Api";

export default function RoomCodePage({ navigation }: any) {
  const [rooms, setRooms] = useState<Array<string>>([]);
  const [roomsId, setRoomsId] = useState<Array<string>>([]);

  const loadRooms = () => {
    let auxRoomName: Array<string> = []
    let auxRoomId: Array<string> = []
    api.get("/rooms").then((response) => {
      console.log("dados brutos: ", response.data.res[0].roomName);
      for (let index = 0; index < response.data.res.length; index++) {
        auxRoomName.push(response.data.res[index].roomName)
        auxRoomId.push(response.data.res[index]._id)
        
      }
      console.log("dados name: ", auxRoomName);
      console.log("dados id : ", auxRoomId);
      setRooms(auxRoomName);
      setRoomsId(auxRoomId);
    });
  };

  useEffect(() => loadRooms(), []);

  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Entar na sala do Sistema</Text>
        <SelectDropdown
          buttonStyle={styles.selectDropdown}
          data={rooms}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        <TextInput
          placeholder={"Digite a senha da sala"}
          style={styles.inputStyles}
          autoComplete="password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Reports");
          }}
          accessibilityLabel="Realizar Login no sistema do BugReports"
        >
          <Icon name="sign-in" size={22} color="#fff" />
          <Text style={styles.text}>Entar na Sala</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>Não é sua conta?</Text>
          <TouchableOpacity
            style={styles.buttonFooter}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.linkNewUser}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
