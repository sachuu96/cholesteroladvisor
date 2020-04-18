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
  TouchableWithoutFeedback,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { withStyles, Button } from "react-native-ui-kitten";
import { Bubbles, DoubleBounce, Bars, Pulse } from "react-native-loader";
import FlatListItem from "../pages/flatList";

import { serviceManager } from "../../../../services/manager";

class AbsFitness extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: 0,
      height: 0,
      BMI_value: 0,
      mondayWorkOutPlan: [],
      tuesdayWorkOutPlan: [],
      wednesdayWorkOutPlan: [],
      thursdayWorkOutPlan: [],
      fridayWorkOutPlan: [],
      saturdayWorkOutPlan: [],
      sundayWorkOutPlan: [],
      loading: false,
      fitnessValue: 0,
      maxHeartRate: 0,
      age: 0
    };
    this.calculateBMI = this.calculateBMI.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.postAbsResultToNode = this.postAbsResultToNode.bind(this);
    this.submitHeartRate = this.submitHeartRate.bind(this);
  }

  handleDayClick(day) {
    if (day === "Monday") {
      this.setState({
        ...this.state,
        mondayClicked: true
      });
    }
  }

  postAbsResultToNode(data) {
    let excPlanService = serviceManager.get("ExcPlanService");
    excPlanService
      .postWorkout(data)
      .then(response => {
        if (response.error) {
          console.log("Error while saving abs workout results;");
        } else {
          console.log(response.message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  submitHeartRate() {
    this.setState({
      ...this.state,
      loading: true
    });

    let excPlanService = serviceManager.get("ExcPlanService");
    excPlanService
      .postAbsResult({
        userage: this.state.age,
        activitymeasurement: this.state.maxHeartRate
      })
      .then(response => {
        response.data.results.Monday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Monday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Tuesday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Tuesday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Wednesday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Wednesday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Thursday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Thursday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Friday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Friday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Saturday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Saturday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Sunday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Sunday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        /*response.data.results.Sunday.forEach(element => {
          this.state.sundayWorkOutPlan.push(element);
        });*/
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

  calculateBMI() {
    const bmi =
      this.state.weight /
      (this.state.height *
        this.state.height *
        this.state.height *
        this.state.height);

    this.setState({
      ...this.state,
      loading: true,
      BMI_value: bmi
    });

    let excPlanService = serviceManager.get("ExcPlanService");
    excPlanService
      .postAbsResult({
        userage: this.state.age,
        activitymeasurement: this.state.BMI_value
      })
      .then(response => {
        response.data.results.Monday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Monday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Tuesday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Tuesday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Wednesday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Wednesday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Thursday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Thursday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Friday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Friday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Saturday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Saturday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        response.data.results.Sunday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "abs",
            day: "Sunday",
            username: "sachini"
          };
          this.postAbsResultToNode(newObject);
        });
        /*response.data.results.Sunday.forEach(element => {
          this.state.sundayWorkOutPlan.push(element);
        });*/
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
        <Text style={styles.text1}>
          You can use the target heart rate zone as a guide for making sure your
          exercise is intense enough. If you are not reaching your target zone,
          you may need to increase the intensity. If you are achieving a target
          rate in the lower end of the target rate zone, you can set goals for
          gradually increasing your target.
        </Text>
        <Text>{"\n"}</Text>
        <View>
          {/*<TextInput
            placeholder="Enter Height(m)"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyle}
            keyboardType="numeric"
            onChangeText={value => {
              this.setState({ height: value });
            }}
            text={this.state.height}
          />
          <TextInput
            placeholder="Enter Weight(Kg)"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyle}
            keyboardType="numeric"
            onChangeText={value => {
              this.setState({ weight: value });
            }}
            text={this.state.weight}
          />
          <Text style={styles.text1}>BMI : {this.state.BMI_value}</Text>*/}
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
          <TextInput
            placeholder="Enter Maximum Heart Rate"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyle}
            keyboardType="numeric"
            onChangeText={value => {
              this.setState({ maxHeartRate: value });
            }}
            text={this.state.maxHeartRate}
          />
        </View>
        <Text>{"\n"}</Text>
        <TouchableOpacity
          style={styles.YesButtonStyle}
          //onPress={this.calculateBMI}
          onPress={this.submitHeartRate}
        >
          <Text style={styles.textStyle}>Submit Result</Text>
        </TouchableOpacity>
        <Text>{"\n"}</Text>
      </ScrollView>
    );
  }
}

export default connect()(AbsFitness);

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
  roundButton: {
    borderRadius: 50,
    backgroundColor: "#0c52c9",
    width: 60,
    height: 60
  },
  day: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 20
  }
});
