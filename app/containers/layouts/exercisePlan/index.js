import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { withStyles } from "react-native-ui-kitten";

import { navigate } from "@app/actions/routes";

import { getExcPattern } from "../../../actions/excPlan";

class ExercisePlanScreen extends Component {
  componentDidMount() {
    ///should i add brackets at the end?
    this.props.getExcPattern();
  }
  render() {
    const { themedStyle } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Do You have any signs or symptoms suggestive of {"\n"}
        </Text>
        <Text>{"\n"}</Text>
        <Text style={styles.bullets}>1. Cardiovascular disease</Text>
        <Text style={styles.bullets}>2. Metobolic disease</Text>
        <Text style={styles.bullets}>3. Renal disease</Text>

        <Text>{"\n"}</Text>

        <TouchableOpacity
          style={styles.YesButtonStyle}
          onPress={() => {
            alert(
              "Discountinue exercises and seek medical clearence before returning to exercises"
            );
            //when alert is closed
            this.props.navigation.navigate("Home");
          }}
        >
          <Text style={styles.textStyle}>Yes</Text>
        </TouchableOpacity>

        <Text>{"\n"}</Text>

        <TouchableOpacity
          style={styles.NoButtonStyle}
          onPress={() => this.props.navigation.navigate("WalkTest")}
        >
          <Text style={styles.textStyle}>No</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Actions = {
  getExcPattern
};

function mapStateToProps(state) {
  return {
    loading: state.excPlan.loading,
    day: state.excPlan.day,
    timeSlot: state.excPlan.timeSlot,
    ex1: state.excPlan.ex1,
    ex2: state.excPlan.ex2
  };
}

export default connect(
  mapStateToProps,
  Actions
)(ExercisePlanScreen);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  },
  bullets: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    color: "#34495e"
  },
  YesButtonStyle: {
    padding: 10,
    backgroundColor: "#0c52c9",
    borderRadius: 5
  },
  NoButtonStyle: {
    padding: 10,
    backgroundColor: "#bab9b5",
    borderRadius: 5
  },
  textStyle: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center"
  }
});
/*const ExercisePlanScreenContainer = connect(
  null,
  { navigate }
)(ExercisePlanScreen);*/

//export default withStyles(ExercisePlanScreenContainer, theme => ({}));
