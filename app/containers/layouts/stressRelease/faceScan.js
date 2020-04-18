import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { withStyles, Button } from "react-native-ui-kitten";

import { navigate } from "@app/actions/routes";

import ImageUpload from "../dietPlan/components/imageUpload";

import { getDetectedFace } from "@app/actions/stressPlan";

class ScanFaceScreen extends Component {
  onTakePhoto = () => {
    const { getDetectedFace } = this.props;

    getDetectedFace({ detectedType: "Angry" });
  };

  render() {
    const { themedStyle, detectedType } = this.props;
    return (
      <View style={themedStyle.container}>
        <View style={themedStyle.photoContainer}>
          <ImageUpload onFinishUploading={this.onTakePhoto} />
        </View>
        {detectedType !== "" ? (
          <View>
            <Text style={themedStyle.listItem}>
              You are in a {detectedType} mode
            </Text>
            <View style={themedStyle.buttonContainer}>
              <Button
                appearance="filled"
                style={{ flex: 1, color: "white" }}
                textStyle={{ color: "white" }}
                onPress={() => {}}
              >
                TakeAction
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
          </View>
        ) : null}
      </View>
    );
  }
}

const Actions = {
  getDetectedFace,
  navigate
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    detectedType: state.stressPlan.detectedType
  };
}

const ScanFaceScreenContainer = connect(
  mapStateToProps,
  Actions
)(ScanFaceScreen);

export default withStyles(ScanFaceScreenContainer, theme => ({
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
