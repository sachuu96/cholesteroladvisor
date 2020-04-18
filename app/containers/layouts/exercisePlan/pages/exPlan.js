import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FoodIntakeIcon, FoodScanIcon } from "@app/assets/icons";
import Monday from "./monday";
import Tuesday from "./tuesday";
import Wednesday from "./wednesday";
import Thursday from "./thursday";
import Friday from "./friday";
import Sunday from "./sunday";

import FirstEx from "./ex1";
import SecondEx from "./ex2";

import { TabView, Tab, Text } from "react-native-ui-kitten";

import { navigate } from "@app/actions/routes";

export default class ExPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
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
        <Tab title="1">
          <FirstEx onSelect={this.onSelect} />
        </Tab>
        <Tab title="2">
          <SecondEx onSelect={this.onSelect} />
        </Tab>
        <Tab title="3">
          <Wednesday />
        </Tab>
        <Tab title="4">
          <Thursday></Thursday>
        </Tab>
        <Tab title="5">
          <Friday></Friday>
        </Tab>
        <Tab title="7">
          <Sunday></Sunday>
        </Tab>
      </TabView>
    );
  }
}
