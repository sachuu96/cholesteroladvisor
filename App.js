import React from "react";
import { Provider } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";

import configureStore from "./app/store";
import { registerServices, serviceManager } from "./app/services/manager";

import RootScreen from "./app/containers/layouts/root";

const settings = {
  api: {
    baseUrl: "http://localhost:4000"
  }
};

registerServices(settings);

const store = configureStore({}, serviceManager);

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Provider store={store}>
        <RootScreen />
      </Provider>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
