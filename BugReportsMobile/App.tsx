import React from "react";
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";
import LoginPage from "./src/views/LoginPage";
import Starting from "./src/views/Starting";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <LoginPage />
    </SafeAreaView>
  );
};

export default App;
