import React from "react";
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";
import Header from "./src/components/Header";
import LoginPage from "./src/views/LoginPage";
import NewUserPage from "./src/views/NewUserPage";
import ReportsPage from "./src/views/ReportsPage";
import RoomCodePage from "./src/views/RoomCodePage";
import Starting from "./src/views/Starting";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from "./src/views/DashboardPage";
import NewRoomCode from "./src/views/NewRoomPage";

const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Starting" component={Starting} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="RoomCode" component={RoomCodePage} />
        <Stack.Screen name="NewUser" component={NewUserPage} />
        <Stack.Screen name="Reports" component={ReportsPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="NewRoom" component={NewRoomCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
