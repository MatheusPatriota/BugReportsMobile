import React from "react";
import {
  ScrollView,
  ScrollViewComponent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";
import Report from "../../components/Report";
import { styles } from "./styles";

export default function ReportsPage() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>Project Name</Text>
          <TouchableOpacity style={styles.newReportButton}>
            <Icon name="plus-circle" size={22} color="#fff" />
            <Text style={styles.buttonContent}>Criar nova Ocorrência</Text>
          </TouchableOpacity>
          <ScrollView>
            <Report />
            <Report />
            <Report />
            <Report />
            <Report />
            <Report />
            <Report />
            <Report />
          </ScrollView>
        </View>
      </View>
    </>
  );
}
