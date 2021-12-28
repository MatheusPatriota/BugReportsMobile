import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import Room from "../../components/Room";
import api from "../../services/Api";
import { styles } from "./styles";

export default function DashboardPage({navigation}: any) {
  const [rooms, setRooms] = useState([]);

  const loadRooms = () => {
    api.get("/rooms").then((response) => {
      setRooms(response.data.res);
    });
  };

  useEffect(() => loadRooms(), []);
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>Dashboard</Text>
          <TouchableOpacity style={styles.newReportButton} onPress={() => {
            navigation.navigate("NewRoom")
          }}>
            <Icon name="plus-circle" size={22} color="#fff" />
            <Text style={styles.buttonContent}>Criar nova Sala</Text>
          </TouchableOpacity>
          <ScrollView>
            {rooms != []
              ? rooms.map((room: any) => {
                  return (
                    <TouchableOpacity onPress={() => navigation.navigate("AdminRoom", {
                      roomId:room._id,
                      roomName: room.roomName,
                    })}>
                      <Room roomName={room.roomName} roomId={room._id} />
                    </TouchableOpacity>
                  );
                })
              : "Não Existe Sala disponiveis"}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
