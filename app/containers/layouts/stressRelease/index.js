import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";

import { TabView, Tab, Text } from "react-native-ui-kitten";
import { FoodIntakeIcon, FoodScanIcon } from "@app/assets/icons";

import FaceScan from "./faceScan";
import ActivityScreen from "./ActivitySuggetions";

class StressReleaseScreen extends Component {
  state = {
    selectedIndex: 0
  };

  onSelect = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <TabView
        selectedIndex={this.state.selectedIndex}
        onSelect={this.onSelect}
        style={{ flex: 1, color: "#008B8B" }}
      >
        <Tab title="Scan Your Face" icon={FoodScanIcon}>
          <FaceScan />
        </Tab>
        <Tab title="Activity Suggestion" icon={FoodIntakeIcon}>
          <ActivityScreen />
        </Tab>
      </TabView>
    );
  }
}

export default StressReleaseScreen;
