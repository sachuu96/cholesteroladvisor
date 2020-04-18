import React, { Component } from "react";
import { TabView, Tab, Text } from "react-native-ui-kitten";
import { View } from "react-native";
import Input from "./Input";
import Selection from "./Selection";
import Finalview from "./Finalview";
import { One, Two, Three } from "@app/assets/icons";
import { postRiskFactors } from "../../../actions/profile";
import { connect } from "react-redux";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      input: {
        age: "",
        hdl: "",
        tc: "",
        sbp: "",
        gender: ""
      },
      selection: {
        smoke: "",
        med: "",
        dia: ""
      }
    };
  }


  onSelect = selectedIndex => {
    this.setState({ selectedIndex });
  };

  onSubmitInputForm = input => {
    const step = 2;
    this.setState({
      input,
      step
    });
  };

  onSubmitSelectionForm = selection => {
    const step = 3;
    this.setState({
      selection,
      step
    });
  };

  getStepForms = () => {
    const { step } = this.state;

    switch (step) {
      case 1:
        return <Input onSubmitInputForm={this.onSubmitInputForm} />;
      case 2:
        return <Selection onSubmitSelectionForm={this.onSubmitSelectionForm} />;
      case 3:
        return <Finalview form={this.state} postRiskFactors={this.props.postRiskFactors} />;
      default:
        return null;
    }
  };

  render() {
    return <View>{this.getStepForms()}</View>;
  }
}

const Actions = {
  postRiskFactors
};

function mapStateToProps(state) {
  return {
    loading: state.profile.loading,
    riskFactors: state.profile.riskFactors
  };
}

export default connect(
  mapStateToProps,
  Actions
)(ProfileScreen);
