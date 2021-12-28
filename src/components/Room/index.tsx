import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import api from "../../services/Api";
import { styles } from "./styles";

type RoomProps = {
  roomName: string,
  roomId: string,
}

export default function Room(props: RoomProps) {

  const deleteRoom = () => {
    api.delete(`/room/${props.roomId}`).then((response) => {
      Alert.alert("Sala Excluida com sucesso!");

    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.description}>{props.roomName}</Text>
        <View style={styles.footer}>
          <View style={styles.userArea}>
            <View style={styles.userAvatar}>
              <Icon name="user" size={22} color={"#fff"} />
            </View>
            <Text style={styles.textDefault}>Administrador</Text>
          </View>
          <TouchableOpacity onPress={() => {
            Alert.alert(
              'Excluir Sala',
              'Você está prestes a excluir uma sala, deseja continuar?',
              [{
                text: 'Sim',
                onPress: () => deleteRoom()
              },{
                text: 'Não',
                onPress: () => console.log('No Pressed'), style: 'cancel'
              }],
              {cancelable: true},
            )
          }}>
            <Icon name="trash" size={30} color={"#ff0b0b"} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
