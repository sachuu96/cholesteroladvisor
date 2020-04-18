import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { withStyles, Button } from "react-native-ui-kitten";
import CountDown from "react-native-countdown-component";
import { Pedometer } from "expo-sensors";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    //initialize the counter duration
    this.state = {
      totalDuration: "",
      finished: "true",
      currentStepCount: 0,
      distance_in_meters: 0,
      recommended_distance_in_meters: 0,
      disable_workout_btn: true
    };
  }

  componentDidMount() {
    this._subscribe();
  }
  componentWillUnmount() {
    this._unsubscribe();
  }
  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
        distance_in_meters: this.state.currentStepCount * 0.76
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    //end.setMinutes(end.getMinutes() + 6);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.instructions}>
          This strategy is to suggest suitable distance for jogging. You will be
          recommended to run 70% of distance from your whole capacity within 30
          minutes.
        </Text>
        <Text>{"\n"}</Text>
        <CountDown
          until={60 * 6 + 0}
          //duration of countdown in seconds
          timeToShow={["M", "S"]}
          //formate to show
          onFinish={() => {
            alert("Congratulations! You have finished the test.");
            //this.props.navigation.navigate('ExPlan');
            this._unsubscribe();
            this.setState({
              recommended_distance_in_meters:
                ((this.state.distance_in_meters / 6) * 30 * 70) / 100,
              disable_workout_btn: false
            });
          }}
          digitStyle={{
            backgroundColor: "#FFF",
            borderWidth: 2,
            borderColor: "#1CC625"
          }}
          digitTxtStyle={{ color: "#1CC625" }}
          timeLabelStyle={{ color: "red", fontWeight: "bold" }}
          separatorStyle={{ color: "#1CC625" }}
          timeLabels={{ m: "MM", s: "SS" }}
          //on Finish call
          onPress={() => alert("You are performing the SIX MINUTES WALK TEST")}
          //on Press call
          size={30}
        />

        <Text>{"\n"}</Text>
        <Text style={styles.text1}>Total Distance Walked (m)</Text>
        <Text style={styles.text2}>{this.state.distance_in_meters}</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.text1}>
          Recommended Distance within 30 min. (m)
        </Text>
        <Text style={styles.text2}>
          {this.state.recommended_distance_in_meters}
        </Text>
        <Text>{"\n"}</Text>
        <TouchableOpacity
          style={[
            this.state.disable_workout_btn
              ? styles.DisabledYesBtn
              : styles.YesButtonStyle
          ]}
          disabled={this.state.disable_workout_btn}
          onPress={
            () => {
              this.props.navigation.navigate("Sugestion");
            }
            //need to do a node back end call to store the recommended distance per user
          }
        >
          <Text
            style={[
              this.state.disable_workout_btn
                ? styles.disbledTextStyle
                : styles.textStyle
            ]}
          >
            MY WORKOUT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  instructions: {
    fontSize: 12,
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
  YesButtonStyle: {
    padding: 10,
    backgroundColor: "#0c52c9",
    borderRadius: 5
  },
  DisabledYesBtn: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5
  },
  textStyle: {
    fontSize: 15,
    color: "#ffffff",
    textAlign: "center"
  },
  disbledTextStyle: {
    fontSize: 15,
    color: "#b3b3b3",
    textAlign: "center"
  }
});
//until={60 * 6 + 0}
