import React, { Component } from "react";
import { connect } from "react-redux";

import { serviceManager } from "../../../services/manager";
import Routes from "../../../navigation/Routes";

type RootScreenProps = {};
class RootScreen extends Component<RootScreenProps> {
  componentDidMount() {
    const NavigationService = serviceManager.get("NavigationService");
    NavigationService.navigateAndReset("Sign In");
  }
  render() {
    const NavigationService = serviceManager.get("NavigationService");
    return (
      <Routes
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

const mapStateToProps = state => ({});

const Action = {};

export default connect(
  mapStateToProps,
  Action
)(RootScreen);
