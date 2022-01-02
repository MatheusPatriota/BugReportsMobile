import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import LoginPage from "./src/views/LoginPage";
import NewUserPage from "./src/views/NewUserPage";
import ReportsPage from "./src/views/ReportsPage";
import RoomCodePage from "./src/views/RoomCodePage";
import Starting from "./src/views/Starting";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdmRoom from "./src/views/AdmRoom";
import NewReportPage from "./src/views/NewReportPage";
import DashboardPage from "./src/views/DashboardPage";
import NewRoomPage from "./src/views/NewRoomPage";

const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Starting">
        <Stack.Screen
          name="Starting"
          component={Starting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RoomCode"
          component={RoomCodePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewUser"
          component={NewUserPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reports"
          component={ReportsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewRoom"
          component={NewRoomPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminRoom"
          component={AdmRoom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewReport"
          component={NewReportPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
