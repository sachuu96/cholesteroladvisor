import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, withStyles } from "react-native-ui-kitten";
import { connect } from "react-redux";

import ScrollableAvoidKeyboardComponent from "@app/components/common/ScrollableAvoidKeyboardComponent";
import SignUpComponent from "@app/components/auth/SignUpComponent";
import { navigateAndReset } from "@app/actions/routes";

class SignUp extends Component {
  state = {
    formData: null
  };

  onSignUpButtonPress = () => {
    this.props.navigateAndReset("Dashboard");
  };

  onSignInButtonPress = () => {
    this.props.navigateAndReset("Sign In");
  };

  onFormDataChange = formData => {
    this.setState({ formData });
  };

  render() {
    const { themedStyle } = this.props;

    return (
      <ScrollableAvoidKeyboardComponent style={themedStyle.container}>
        <View style={themedStyle.headerContainer}>
          <Text style={themedStyle.SignUpLabel} category="s1">
            Create an account
          </Text>
        </View>
        <SignUpComponent
          style={themedStyle.formContainer}
          onDataChange={this.onFormDataChange}
        />
        <Button
          style={themedStyle.SignUpButton}
          size="giant"
          disabled={!this.state.formData}
          onPress={this.onSignUpButtonPress}
        >
          SIGN UP
        </Button>
        <Button
          style={themedStyle.signInButton}
          appearance="ghost"
          activeOpacity={0.75}
          onPress={this.onSignInButtonPress}
        >
          Already have an account? Sign In
        </Button>
      </ScrollableAvoidKeyboardComponent>
    );
  }
}

const SignUpContainer = connect(
  null,
  { navigateAndReset }
)(SignUp);

export default withStyles(SignUpContainer, (theme: ThemeType) => {
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
    SignUpLabel: {
      marginTop: 16,
      color: "white"
    },
    SignUpButton: {
      marginTop: 16,
      marginHorizontal: 16
    },
    signInButton: {
      marginVertical: 12
    },
    signUpText: {
      color: theme["text-hint-color"]
    }
  };
});
