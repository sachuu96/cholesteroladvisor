import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { connect } from "react-redux";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { withStyles, Button } from "react-native-ui-kitten";
import CountDown from "react-native-countdown-component";
import ReactStopwatch from "react-stopwatch";
import { Pedometer } from "expo-sensors";
import { Bubbles, DoubleBounce, Bars, Pulse } from "react-native-loader";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

import { serviceManager } from "../../../../services/manager";

class AerobicFitness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchStart: false,
      stopwatchReset: false,
      currentStepCount: 0,
      totalDuration: "",
      finished: "true",
      testResult: null,
      timerStopped: false,
      timeInMinutes: 0,
      loading: false,
      fitnessValue: 0,
      age: 0,
      gender: "male"
    };

    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
    this.getFinalTime = this.getFinalTime.bind(this);
    this.submitTestResult = this.submitTestResult.bind(this);
    this.postLegResultToNode = this.postLegResultToNode.bind(this);
  }

  componentDidMount() {
    this._subscribe();
    this.toggleStopwatch();

    if (this.state.currentStepCount > 30) {
      this.toggleStopwatch();
    }
  }

  postLegResultToNode(data) {
    let excPlanService = serviceManager.get("ExcPlanService");
    excPlanService
      .postWorkout(data)
      .then(response => {
        if (response.error) {
          console.log("Error while saving legs workout results;");
        } else {
          console.log(response.message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  submitTestResult() {
    this.setState({
      ...this.state,
      loading: true
    });

    let excPlanService = serviceManager.get("ExcPlanService");
    excPlanService
      .postLegResult({
        userage: this.state.age,
        usergender: this.state.gender,
        activitymeasurement: this.state.timeInMinutes
      })
      .then(response => {
        response.data.results.Monday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "legs",
            day: "Monday",
            username: "sachini"
          };
          this.postLegResultToNode(newObject);
        });
        response.data.results.Tuesday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "legs",
            day: "Tuesday",
            username: "sachini"
          };
          this.postLegResultToNode(newObject);
        });
        response.data.results.Wednesday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "legs",
            day: "Wednesday",
            username: "sachini"
          };
          this.postLegResultToNode(newObject);
        });
        response.data.results.Thursday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "legs",
            day: "Thursday",
            username: "sachini"
          };
          this.postLegResultToNode(newObject);
        });
        response.data.results.Friday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "legs",
            day: "Friday",
            username: "sachini"
          };
          this.postLegResultToNode(newObject);
        });
        response.data.results.Saturday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "legs",
            day: "Saturday",
            username: "sachini"
          };
          this.postLegResultToNode(newObject);
        });
        response.data.results.Sunday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "legs",
            day: "Sunday",
            username: "sachini"
          };
          this.postLegResultToNode(newObject);
        });
        this.setState({
          ...this.state,
          loading: false,
          fitnessValue: response.data.results.fitnessValue
        });
        if (!this.state.loading) {
          alert("YOUR FITNESS VALUE: " + this.state.fitnessValue);
        }
      })
      .catch(err => {
        console.log(err);
      });
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
      this.setState(
        {
          currentStepCount: result.steps
        },
        () => {
          if (this.state.currentStepCount > 30) {
            //3168
            this.toggleStopwatch();
            alert("Test Result is completed!");
            this._unsubscribe();
            this.setState({
              timerStopped: true
            });
          }
        }
      );
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
  };

  getFinalTime(time) {
    this.setState({
      testResult: time
    });
  }

  toggleStopwatch() {
    this.setState({
      stopwatchStart: !this.state.stopwatchStart,
      stopwatchReset: false
    });
  }

  resetStopwatch() {
    this.setState({
      stopwatchStart: false,
      stopwatchReset: true
    });
  }

  getFormattedTime(time) {
    this.currentTime = time;
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
      <ScrollView>
        <Text style={styles.instructions}>
          This strategy to access your aerobic fitness by timing yourself on a
          1.5miles run or jog.A lower time generally indicates better aerobic
          fitness, and a higher time suggests a need for improvement.
        </Text>
        <Text>{"\n"}</Text>
        <Stopwatch
          style={styles.stopwatchContainer}
          laps
          msecs
          start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
          getTime={this.getFormattedTime}
          handleFinish={this.getFinalTime}
        />

        <Text>{"\n"}</Text>
        <Text style={styles.text1}>Total Distance (steps)</Text>
        <Text style={styles.text2}>{this.state.currentStepCount}</Text>
        <Text>{"\n"}</Text>
        <View>
          <TextInput
            placeholder="Enter Age"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyle}
            keyboardType="numeric"
            onChangeText={value => {
              this.setState({ age: value });
            }}
            text={this.state.age}
          />
          <Text>{"\n"}</Text>
          <View style={styles.selectStyle}>
            <RNPickerSelect
              onValueChange={value => {
                this.setState({ gender: value });
              }}
              items={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" }
              ]}
            />
          </View>
          <Text>{"\n"}</Text>
          <TextInput
            placeholder="Approximate Time in Minutes"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyle}
            keyboardType="numeric"
            onChangeText={value => {
              this.setState({ timeInMinutes: value });
            }}
            text={this.state.timeInMinutes}
          />
        </View>

        <Text>{"\n"}</Text>
        <TouchableOpacity
          //disabled={!this.state.timerStopped}
          style={styles.YesButtonStyle}
          onPress={this.submitTestResult}
        >
          <Text style={styles.textStyle}>Submit Results</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default connect()(AerobicFitness);

const options = {
  container: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 5,
    width: 400
  },
  text: {
    fontSize: 30,
    color: "#FFF",
    marginLeft: 100
  }
};
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
  stopwatchContainer: {
    paddingLeft: 20,
    paddingTop: 20
  },
  TextInputStyle: {
    textAlign: "center",
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#009688",
    marginBottom: 10
  },
  YesButtonStyle: {
    padding: 10,
    paddingTop: 5,
    backgroundColor: "#0c52c9",
    borderRadius: 5
  },
  textStyle: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center"
  },
  loader: {
    justifyContent: "center",
    marginTop: 200,
    paddingLeft: 150,
    backgroundColor: "#ffffff"
  },
  selectStyle: {
    paddingLeft: 70,
    backgroundColor: "green",
    height: 50
  }
});
