import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { withStyles } from "react-native-ui-kitten";

import { navigate } from "@app/actions/routes";
import { getStressPlan } from "../../../actions/stressPlan";

class ActivitySuggestion extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { index } = this.props;

    this.props.getStressPlan({ index, risk: "law" });
  }

  onPressNext() {
    const { index, getStressPlan } = this.props;

    getStressPlan({ index, risk: "law" });
  }

  render() {
    const { themedStyle } = this.props;
    const { loading, stressPlan } = this.props;

    if (loading) {
      return <ActivityIndicator size="large" color="#000000" />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>
          We will help you to release your stress
        </Text>
        <Text style={styles.activityHeader}>{stressPlan.activityHeader}</Text>
        <Text style={styles.activityDescription}>
          {stressPlan.activityDescription}
        </Text>
        <TouchableOpacity
          style={styles.YesButtonStyle}
          onPress={() => {
            this.onPressNext();
          }}
        >
          <Text style={styles.textStyle}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.YesButtonStyle}
          onPress={() => {
            alert("Accepted the activity");
          }}
        >
          <Text style={styles.textStyle}>Accept</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  YesButtonStyle: {
    padding: 10,
    backgroundColor: "#0c52c9",
    borderRadius: 5,
    marginTop: 20
  },
  textHeader: {
    color: "#053299",
    textAlign: "center",
    fontSize: 22,
    marginBottom: 30
  },
  text: {
    textAlign: "center",
    fontSize: 16
  },
  textStyle: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center"
  },
  activityHeader: {
    textAlign: "center",
    color: "#66b2ff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10
  },
  activityDescription: {
    textAlign: "center",
    color: "black",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 30
  }
});

const Actions = {
  getStressPlan,
  navigate
};

function mapStateToProps(state) {
  return {
    ...state,
    loading: state.stressPlan.loading,
    stressPlan: state.stressPlan.stressPlan,
    index: state.stressPlan.index
  };
}

const StressReleaseScreenContainer = connect(
  mapStateToProps,
  Actions
)(ActivitySuggestion);

export default withStyles(StressReleaseScreenContainer, theme => ({}));
