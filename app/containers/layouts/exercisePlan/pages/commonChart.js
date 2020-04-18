import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { withStyles } from "react-native-ui-kitten";
import Chart from "./chart";
import { Bubbles, DoubleBounce, Bars, Pulse } from "react-native-loader";

import { serviceManager } from "../../../../services/manager";

import { navigate } from "@app/actions/routes";

export default class CommonChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fitnessesForChart: [],
      label: [],
      loading: false
    };
    this.getChart = this.getChart.bind(this);
  }

  getChart(category) {
    let excPlanService = serviceManager.get("ExcPlanService");
    excPlanService.getPastFitnessValuePerCategory(category).then(response => {
      this.setState({
        ...this.state,
        loading: true,
        label: [],
        fitnessesForChart: []
      });
      let tempWeek_ids = [];
      let tempFitnessValue = [];
      response.data.data.forEach(element => {
        tempWeek_ids.push(parseInt(element.week_id));
        tempFitnessValue.push(parseFloat(element.fitnessValue));
      });
      this.setState({
        ...this.state,
        loading: false,
        label: tempWeek_ids,
        fitnessesForChart: tempFitnessValue
      });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <Bars size={30} color="#0c52c9" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.YesButtonStyle}
            onPress={() => {
              this.getChart("arms");
            }}
          >
            <Text style={styles.textStyle}>Arms</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.YesButtonStyle}
            onPress={() => {
              this.getChart("legs");
            }}
          >
            <Text style={styles.textStyle}>Legs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.YesButtonStyle}
            onPress={() => {
              this.getChart("abs");
            }}
          >
            <Text style={styles.textStyle}>Abs</Text>
          </TouchableOpacity>
        </View>
        {this.state.label.length > 0 &&
        this.state.fitnessesForChart.length > 0 ? (
          <Chart
            data={this.state.fitnessesForChart}
            labels={this.state.label}
          ></Chart>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    justifyContent: "center",
    marginTop: 200,
    paddingLeft: 150,
    backgroundColor: "#ffffff"
  },
  container: {
    justifyContent: "center",
    marginTop: 12,
    padding: 10,
    backgroundColor: "#ffffff"
  },
  YesButtonStyle: {
    padding: 10,
    paddingTop: 5,
    marginLeft: 40,
    backgroundColor: "#0c52c9",
    borderRadius: 30,
    width: 60,
    height: 45
  },
  textStyle: {
    fontSize: 13,
    color: "#ffffff",
    paddingTop: 8,
    textAlign: "center"
  }
});

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};
