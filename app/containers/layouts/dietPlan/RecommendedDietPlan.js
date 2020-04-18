import React, { Component } from "react";

import { View, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { withStyles, Button } from "react-native-ui-kitten";
import { getFoodPattern, saveCalorieIntake } from "../../../actions/dietPlan";

import { navigate } from "@app/actions/routes";

class RecommendedDietPlanScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { patternIndex, getFoodPattern } = this.props;
    getFoodPattern({ risk: "law", index: patternIndex });
  }

  onIgnoreList = () => {
    const { getFoodPattern, patternIndex } = this.props;

    getFoodPattern({ risk: "law", index: patternIndex });
  };

  onAcceptList = () => {
    const { saveCalorieIntake, user, calorieAmount } = this.props;

    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();

    date = yyyy + "-" + mm + "-" + dd;

    saveCalorieIntake({ date, user, calorieIntake: calorieAmount });
  };

  render() {
    const {
      themedStyle,
      theme,
      loading,
      foodPattern,
      calorieAmount
    } = this.props;

    if (loading) {
      return <ActivityIndicator size="large" color="#000000" />;
    }

    return (
      <View style={themedStyle.container}>
        <Text category="h5" style={themedStyle.header}>
          Your Meal Plan
        </Text>
        {foodPattern.length > 0 ? (
          <View style={themedStyle.mealPlan}>
            {foodPattern.map((foodItem, index) => {
              return (
                <Text key={index} style={themedStyle.column1}>
                  {foodItem}
                </Text>
              );
            })}
            <Text style={themedStyle.amount}>
              Amount of Calories: {calorieAmount}
            </Text>
          </View>
        ) : null}
        <View style={themedStyle.buttonContainer}>
          <Button
            appearance="filled"
            style={{ flex: 1, color: "white" }}
            textStyle={{ color: "white" }}
            onPress={this.onAcceptList}
          >
            Accept
          </Button>
          <View style={{ width: 20 }} />
          <Button
            appearance="filled"
            style={{ flex: 1, backgroundColor: "#6a6c6e" }}
            textStyle={{ color: "white" }}
            onPress={this.onIgnoreList}
          >
            Ignore
          </Button>
        </View>
      </View>
    );
  }
}

const Actions = {
  getFoodPattern,
  saveCalorieIntake,
  navigate
};

function mapStateToProps(state) {
  return {
    loading: state.dietPlan.loading,
    foodPattern: state.dietPlan.foodPattern,
    patternIndex: state.dietPlan.patternIndex,
    calorieAmount: state.dietPlan.calorieAmount,
    user: state.auth.user
  };
}

const RecommendedDietPlanScreenContainer = connect(
  mapStateToProps,
  Actions
)(RecommendedDietPlanScreen);

export default withStyles(RecommendedDietPlanScreenContainer, theme => ({
  container: {
    marginHorizontal: 16,
    marginVertical: 50,
    flexDirection: "column"
  },
  header: {
    textAlign: "center",
    color: "#66b2ff",
    fontSize: 24,
    fontWeight: "800"
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 40,
    marginTop: 20
  },
  mealPlan: {
    marginTop: 20,
    marginBottom: 20
  },
  column2: {
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "white",
    marginBottom: 2,
    padding: 10
  },
  column1: {
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#cccccc",
    marginBottom: 2,
    padding: 10
  },
  amount: {
    color: "#66b2ff",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 20
  }
}));
