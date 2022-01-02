import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type TabBarProps = {
  parentCallBack?: any;
};
export default function TabBar(props: TabBarProps) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            console.log("mudei pra todos")
            props.parentCallBack("all");
          }}
        >
          <Text style={styles.tabText}>Todos</Text>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("mudei pra investigacao")
            props.parentCallBack("underInvestigation");
          }}
        >
          <Text style={styles.tabText}>Em Investigação</Text>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("mudei pra resolvidos")
            props.parentCallBack("solved");
          }}
        >
          <Text style={styles.tabText}>Concluídos</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
