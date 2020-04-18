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
import { LineChart, YAxis, XAxis, Grid } from "react-native-svg-charts";

import { navigate } from "@app/actions/routes";

export default class Chart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data);
    /*const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80
    ];*/

    const data = this.props.data.map(item => {
      return item;
    });

    const label = this.props.labels.map(item => {
      return item;
    });

    const contentInset = { top: 20, bottom: 20 };
    return (
      <View style={{ marginTop: 15, height: 400, flexDirection: "row" }}>
        <YAxis
          data={this.props.data}
          contentInset={contentInset}
          svg={{
            fill: "black",
            fontSize: 10
          }}
          numberOfTicks={10}
          formatLabel={value => `${value}`}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={data}
          svg={{ stroke: "rgb(134, 65, 244)" }}
          contentInset={contentInset}
        >
          <Grid />
        </LineChart>
        {/* <XAxis
          data={this.props.labels}
          contentInset={contentInset}
          svg={{
            fill: "grey",
            fontSize: 10
          }}
          numberOfTicks={10}
          formatLabel={value => `${value}`}
        />*/}
      </View>
    );
  }
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};
