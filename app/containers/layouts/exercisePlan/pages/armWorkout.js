import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import MyFlatList from "../pages/flatList";
import { navigate } from "@app/actions/routes";
import { serviceManager } from "../../../../services/manager";
import { Bubbles, DoubleBounce, Bars, Pulse } from "react-native-loader";

export default class Arm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arm: "arms",
      loading: false,
      day: "",
      excObjectArray: []
    };
    this.getExcByDay = this.getExcByDay.bind(this);
  }

  getExcByDay(day) {
    const { excObjectArray } = this.state;
    let tempExcObjectArray = [];
    this.setState({
      ...this.state,
      day: day,
      loading: true,
      excObjectArray: null
    });
    let excPlanService = serviceManager.get("ExcPlanService");
    excPlanService
      .getWorkoutForCertainDay(day, this.state.arm)
      .then(response => {
        if (!response.error) {
          response.data.data.forEach(element => {
            let newObject = {
              name: element.name,
              key: element.id.toString(),
              imageUrl: element.imageUrl,
              level: element.level,
              category: element.category,
              week: element.week_id
            };
            tempExcObjectArray.push(newObject);
          });
          this.setState({
            ...this.state,
            loading: false,
            excObjectArray: tempExcObjectArray
          });
        }
        //console.log(response.data.data);
        //console.log(this.state.excObjectArray);
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
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.YesButtonStyle}
              onPress={() => {
                this.getExcByDay("monday");
              }}
            >
              <Text style={styles.textStyle}>Mon</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.YesButtonStyle}
              onPress={() => {
                this.getExcByDay("tuesday");
              }}
            >
              <Text style={styles.textStyle}>Tue</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.YesButtonStyle}
              onPress={() => {
                this.getExcByDay("wednesday");
              }}
            >
              <Text style={styles.textStyle}>Wed</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.YesButtonStyle}
              onPress={() => {
                this.getExcByDay("thursday");
              }}
            >
              <Text style={styles.textStyle}>Thu</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.YesButtonStyle}
              onPress={() => {
                this.getExcByDay("friday");
              }}
            >
              <Text style={styles.textStyle}>Fri</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.YesButtonStyle}
              onPress={() => {
                this.getExcByDay("saturday");
              }}
            >
              <Text style={styles.textStyle}>Sat</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.YesButtonStyle}
              onPress={() => {
                this.getExcByDay("sunday");
              }}
            >
              <Text style={styles.textStyle}>Sun</Text>
            </TouchableOpacity>
          </View>
          {this.state.day === "monday" ||
          this.state.day === "tuesday" ||
          this.state.day === "wednesday" ||
          this.state.day === "thursday" ||
          this.state.day === "friday" ||
          this.state.day === "saturday" ||
          this.state.day === "sunday" ? (
            <MyFlatList flatListData={this.state.excObjectArray}></MyFlatList>
          ) : null}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 12,
    padding: 10,
    backgroundColor: "#ffffff"
  },
  YesButtonStyle: {
    padding: 10,
    paddingTop: 5,
    marginLeft: 5,
    backgroundColor: "#0c52c9",
    borderRadius: 30,
    width: 45,
    height: 45
  },
  textStyle: {
    fontSize: 13,
    color: "#ffffff",
    paddingTop: 8,
    textAlign: "center"
  },
  loader: {
    justifyContent: "center",
    marginTop: 200,
    paddingLeft: 150,
    backgroundColor: "#ffffff"
  }
});
