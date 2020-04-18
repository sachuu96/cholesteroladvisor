import React, { Component } from "react";
import { connect } from "react-redux";
import { TabView, Tab, Text } from "react-native-ui-kitten";

import { FoodIntakeIcon, FoodScanIcon } from "@app/assets/icons";
import RecommendedDietPlan from "./RecommendedDietPlan";
import ScanFoodDish from "./ScanFoodDish";

class DietPlanScreen extends Component {
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
        <Tab title="Diet Plan" icon={FoodIntakeIcon}>
          <RecommendedDietPlan />
        </Tab>
        <Tab title="Scan Your Dish" icon={FoodScanIcon}>
          <ScanFoodDish />
        </Tab>
      </TabView>
    );
  }
}

export default DietPlanScreen;
