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
  Picker
} from "react-native";
import { connect } from "react-redux";
import { withStyles, Button } from "react-native-ui-kitten";
import { Bubbles, DoubleBounce, Bars, Pulse } from "react-native-loader";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

import { serviceManager } from "../../../../services/manager";

class MuscularFitness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      testResult: "",
      fitnessValue: "",
      age: 0,
      gender: "male"
    };
    this.submitTestResult = this.submitTestResult.bind(this);
    this.postArmResultToNode = this.postArmResultToNode.bind(this);
  }

  postArmResultToNode(data) {
    let excPlanService = serviceManager.get("ExcPlanService");
    excPlanService
      .postWorkout(data)
      .then(response => {
        if (response.error) {
          console.log("Error while saving arm workout results");
        } else {
          console.log(response.message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  submitTestResult(field) {
    this.setState({
      ...this.state,
      loading: true,
      ...field
    });

    let excPlanService = serviceManager.get("ExcPlanService");
    excPlanService
      .postArmResult({
        userage: this.state.age,
        usergender: this.state.gender,
        activitymeasurement: parseInt(this.state.testResult)
      })
      .then(response => {
        response.data.results.Monday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "arms",
            day: "Monday",
            username: "sachini"
          };
          this.postArmResultToNode(newObject);
        });
        response.data.results.Tuesday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "arms",
            day: "Tuesday",
            username: "sachini"
          };
          this.postArmResultToNode(newObject);
        });
        response.data.results.Wednesday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "arms",
            day: "Wednesday",
            username: "sachini"
          };
          this.postArmResultToNode(newObject);
        });
        response.data.results.Thursday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "arms",
            day: "Thursday",
            username: "sachini"
          };
          this.postArmResultToNode(newObject);
        });
        response.data.results.Friday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "arms",
            day: "Friday",
            username: "sachini"
          };
          this.postArmResultToNode(newObject);
        });
        response.data.results.Saturday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "arms",
            day: "Saturday",
            username: "sachini"
          };
          this.postArmResultToNode(newObject);
        });
        response.data.results.Sunday.forEach(element => {
          let newObject = {
            ...element,
            week_id: response.data.results.WeekNumber.toString(),
            fitnessValue: response.data.results.fitnessValue.toString(),
            category: "arms",
            day: "Sunday",
            username: "sachini"
          };
          this.postArmResultToNode(newObject);
        });
        console.log(response.data.results.fitnessValue);
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
    const { testResult, loading } = this.state;
    if (loading) {
      return (
        <View style={styles.loader}>
          <Bars size={30} color="#0c52c9" />
        </View>
      );
    }
    return (
      <ScrollView>
        <Text style={styles.text1}>
          Lie facedown on the floor with your elbows bent and your palms next to
          your shoulders.
        </Text>
        <Text>{"\n"}</Text>
        <Text style={styles.text1}>
          Keeping your back straight, push up with your arms until your arms are
          extended.
        </Text>
        <Text>{"\n"}</Text>
        <Text style={styles.text1}>
          Lower your body until your chin touches the floor. Do as many pushups
          as you can until you need to stop for rest.
        </Text>
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
              style={{ align: "center", paddingTop: 20, fontSize: 20 }}
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
            placeholder="Enter Number of Repetitions"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyle}
            keyboardType="numeric"
            onChangeText={value => {
              this.setState({ testResult: value });
            }}
            text={this.state.testResult}
          />
        </View>
        <Text>{"\n"}</Text>
        <TouchableOpacity
          style={styles.YesButtonStyle}
          onPress={this.submitTestResult}
        >
          <Text style={styles.textStyle}>Submit Results</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default connect()(MuscularFitness);

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
