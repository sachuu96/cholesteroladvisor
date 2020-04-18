import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, withStyles } from "react-native-ui-kitten";
import { connect } from "react-redux";

import { navigateAndReset } from "@app/actions/routes";

import ScrollableAvoidKeyboardComponent from "@app/components/common/ScrollableAvoidKeyboardComponent";
import SignInComponent from "@app/components/auth/SignInComponent";

class SignIn extends Component {
  state = {
    formData: null
  };

  onSignInButtonPress = () => {
    this.props.navigateAndReset("Dashboard");
  };

  onSignUpButtonPress = () => {
    this.props.navigateAndReset("Sign Up");
  };

  onFormDataChange = formData => {
    this.setState({ formData });
  };

  render() {
    const { themedStyle } = this.props;

    return (
      <ScrollableAvoidKeyboardComponent style={themedStyle.container}>
        <View style={themedStyle.headerContainer}>
          <Text style={themedStyle.signInLabel} category="s1">
            Sign in to your account
          </Text>
        </View>
        <SignInComponent
          style={themedStyle.formContainer}
          onDataChange={this.onFormDataChange}
        />
        <Button
          style={themedStyle.signInButton}
          size="giant"
          disabled={!this.state.formData}
          onPress={this.onSignInButtonPress}
        >
          SIGN IN
        </Button>
        <Button
          style={themedStyle.signUpButton}
          appearance="ghost"
          activeOpacity={0.75}
          onPress={this.onSignUpButtonPress}
        >
          Don't have an account? Create
        </Button>
      </ScrollableAvoidKeyboardComponent>
    );
  }
}

const SignInContainer = connect(
  null,
  { navigateAndReset }
)(SignIn);

export default withStyles(SignInContainer, (theme: ThemeType) => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme["background-basic-color-1"]
    },
    headerContainer: {
      justifyContent: "center",
      alignItems: "center",
      minHeight: 216,
      backgroundColor: theme["color-primary-default"]
    },
    formContainer: {
      flex: 1,
      marginTop: 32,
      paddingHorizontal: 16
    },
    signInLabel: {
      marginTop: 16,
      color: "white"
    },
    signInButton: {
      marginHorizontal: 16
    },
    signUpButton: {
      marginVertical: 12
    },
    signUpText: {
      color: theme["text-hint-color"]
    }
  };
});
