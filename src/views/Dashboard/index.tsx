import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import Room from "../../components/Room";
import { styles } from "./styles";

export default function Dashboard() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>Dashboard</Text>
          <TouchableOpacity style={styles.newReportButton}>
            <Icon name="plus-circle" size={22} color="#fff" />
            <Text style={styles.buttonContent}>Criar nova Sala</Text>
          </TouchableOpacity>
          <ScrollView>
            <Room />
            <Room />
            <Room />
            <Room />
            <Room />
            <Room />
            <Room />
            <Room />
          </ScrollView>
        </View>
      </View>
    </>
  );
}
