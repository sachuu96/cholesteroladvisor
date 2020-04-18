import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { withStyles, Button } from "react-native-ui-kitten";

import { navigate } from "@app/actions/routes";

import ImageUpload from "./components/imageUpload";

import { getNetCalorieIntake, getDetectedFood } from "@app/actions/dietPlan";

class ScanFoodDishScreen extends Component {
  componentDidMount() {
    const { user } = this.props;
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();

    date = yyyy + "-" + mm + "-" + dd;

    this.props.getNetCalorieIntake({ user, date });
  }

  onTakePhoto = () => {
    const { getDetectedFood } = this.props;

    getDetectedFood({ detectedType: "Apple", detectedCalorie: "95" });
  };

  render() {
    const { themedStyle } = this.props;
    return (
      <View style={themedStyle.container}>
        <View style={themedStyle.photoContainer}>
          <ImageUpload onFinishUploading={this.onTakePhoto} />
        </View>
        <Text style={themedStyle.listItem}>
          Food Item : {this.props.detectedType}
        </Text>
        <Text style={themedStyle.listItem}>
          Calorie Intake : {this.props.detectedCalorie}
        </Text>
        <View style={themedStyle.buttonContainer}>
          <Button
            appearance="filled"
            style={{ flex: 1, color: "white" }}
            textStyle={{ color: "white" }}
            onPress={() => {}}
          >
            Take
          </Button>
          <View style={{ width: 20 }} />
          <Button
            appearance="filled"
            style={{ flex: 1, backgroundColor: "#6a6c6e" }}
            textStyle={{ color: "white" }}
            onPress={() => {}}
          >
            Reset
          </Button>
        </View>
        <Text style={themedStyle.remainHeader}>
          Remaining Eligible Calorie Amount
        </Text>
        <Text style={themedStyle.remain}>
          {2500 - this.props.netCalorieIntake}
        </Text>
      </View>
    );
  }
}

const Actions = {
  getNetCalorieIntake,
  getDetectedFood,
  navigate
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    netCalorieIntake: state.dietPlan.netCalorieIntake,
    detectedType: state.dietPlan.detectedType,
    detectedCalorie: state.dietPlan.detectedCalorie
  };
}

const ScanFoodDishScreenContainer = connect(
  mapStateToProps,
  Actions
)(ScanFoodDishScreen);

export default withStyles(ScanFoodDishScreenContainer, theme => ({
  container: {
    marginHorizontal: 16,
    marginVertical: 50,
    flexDirection: "column"
  },
  photoContainer: {
    marginTop: 30,
    marginLeft: "25%"
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 40,
    marginTop: 20
  },
  listItem: {
    textAlign: "center",
    color: "#66b2ff",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10
  },
  remainHeader: {
    textAlign: "center",
    color: "#66b2ff",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10
  },
  remain: {
    textAlign: "center",
    color: "#009900",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 10
  }
}));
