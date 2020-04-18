import React, { Component } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { withStyles } from "react-native-ui-kitten";
import CardView from "react-native-cardview";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-material-cards";
import { TabView, Tab } from "react-native-ui-kitten";
import { navigate } from "@app/actions/routes";

export default class CommonWorkout extends Component {
  constructor(props) {
    super(props);
  }
  onSelect = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <ScrollView>
        <Card>
          <CardImage
            source={{
              uri:
                "https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg"
            }}
          />
          <CardTitle title="Mixed Workout" />
          <CardContent text="Your Whole work out plan will be displayed here!" />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                this.props.navigation.navigate("Mixed");
              }}
              title="Start"
              color="blue"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage
            source={{
              uri: "https://i.ytimg.com/vi/URxquPHLRbs/maxresdefault.jpg"
            }}
          />
          <CardTitle title="Arms" />
          <CardContent text="These exercises are suggested based on the fitness value you earned by performing the PUSH UPS test" />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                this.props.navigation.navigate("Arm");
              }}
              title="Start"
              color="blue"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage
            source={{
              uri:
                "https://blackwoodfitness.com.au/wp-content/uploads/2019/11/1911-abs-blog-1.png"
            }}
          />
          <CardTitle title="Abs" />
          <CardContent text="These exercises are suggested based on the fitness value you earned by performing the BMI test" />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                this.props.navigation.navigate("Abs");
              }}
              title="Start"
              color="blue"
            />
          </CardAction>
        </Card>
        <Card>
          <CardImage
            source={{
              uri:
                "https://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/sexy-strong-legs-workout.jpg"
            }}
          />
          <CardTitle title="Legs" />
          <CardContent text="These exercises are suggested based on the fitness value you earned by performing the AEROBIC FITNESS test" />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                this.props.navigation.navigate("Leg");
              }}
              title="Start"
              color="blue"
            />
          </CardAction>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#F5FCFF"
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  cardText: {
    padding: 10,
    fontSize: 16
  }
});
