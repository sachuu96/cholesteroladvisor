import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { withStyles, Button } from "react-native-ui-kitten";
//import { Accelerometer } from 'expo-sensors';
import { Pedometer } from "expo-sensors";
import CountDown from "react-native-countdown-component";
import ReactNativeTooltipMenu from "react-native-tooltip-menu";

import { navigate } from "@app/actions/routes";

export default class WalkTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPedometerAvailable: "checking",
      pastStepCount: 0,
      minute: 0,
      current_date: "",
      end_minute: 0,
      totalDuration: 0
    };
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.paragraph}>Six Minutes Walk Test</Text>

          <TouchableOpacity
            style={styles.YesButtonStyle}
            onPress={() => {
              this.props.navigation.navigate("Timer");
            }}
          >
            <Text style={styles.textStyle}>Start CountDown</Text>
          </TouchableOpacity>

          <Text>{"\n"}</Text>
          <Text style={styles.paragraph}>Legs Fitness Test</Text>

          <TouchableOpacity
            style={styles.YesButtonStyle}
            onPress={() => {
              this.props.navigation.navigate("AerobicFitness");
            }}
          >
            <Text style={styles.textStyle}>Start Jogging</Text>
          </TouchableOpacity>
          <Text>{"\n"}</Text>
          <Text style={styles.paragraph}>Muscular Fitness Test</Text>

          <TouchableOpacity
            style={styles.YesButtonStyle}
            onPress={() => {
              this.props.navigation.navigate("MuscularFitness");
            }}
          >
            <Text style={styles.textStyle}>Pushup Test</Text>
          </TouchableOpacity>

          <Text>{"\n"}</Text>
          <Text style={styles.paragraph}>Aerobic Fitness Test</Text>

          <TouchableOpacity
            style={styles.YesButtonStyle}
            onPress={() => {
              this.props.navigation.navigate("AbsFitness");
            }}
          >
            <Text style={styles.textStyle}>Target Heart Rate Zone</Text>
          </TouchableOpacity>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>

          <TouchableOpacity
            style={styles.NoButtonStyle}
            onPress={() => {
              this.props.navigation.navigate("CommonWorkout");
            }}
          >
            <Text style={styles.textStyle}>My Workout Plan</Text>
          </TouchableOpacity>
          <Text>{"\n"}</Text>
          <TouchableOpacity
            style={styles.NoButtonStyle}
            onPress={() => {
              this.props.navigation.navigate("CommonChart");
            }}
          >
            <Text style={styles.textStyle}>Fitness Evaluation</Text>
          </TouchableOpacity>
        </View>
        <Text>{"\n"}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            padding: 25,
            zIndex: 999
          }}
        >
          <ReactNativeTooltipMenu
            buttonComponent={
              <View
                style={{
                  backgroundColor: "purple",
                  padding: 10,
                  borderRadius: 25
                }}
              >
                <Text style={{ color: "white", flex: 99 }}>Help!</Text>
              </View>
            }
            items={[
              {
                label:
                  "These test results will be used to calculate an individual fitness value for you. Based on those values a personalized exercise schedule will be generated! We recommend you to engage on these tests one a week"
              }
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  YesButtonStyle: {
    padding: 10,
    paddingTop: 5,
    backgroundColor: "#0c52c9",
    borderRadius: 5
  },
  textStyle: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 5
  },
  container: {
    justifyContent: "center",
    marginTop: 12,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000"
  },
  text1: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#dbdbdb"
  },
  text2: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#dbdbdb"
  },
  text3: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#8f8f8f"
  },
  text4: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#8f8f8f"
  },
  NoButtonStyle: {
    padding: 10,
    backgroundColor: "#bab9b5",
    borderRadius: 5
  },
  helpContainer: {
    marginTop: 5,
    paddingLeft: 10
  }
});
