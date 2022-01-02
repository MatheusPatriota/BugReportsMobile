import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function TabBar() {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.tabText}>Todos</Text>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity>
          <Text style={styles.tabText}>Em Investigação</Text>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity>
          <Text style={styles.tabText}>Concluídos</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
