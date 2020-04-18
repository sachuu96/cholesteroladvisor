import React, { Component } from "react";
import { View } from "react-native";
import { Button, withStyles } from "react-native-ui-kitten";

import ValidationInput from "../common/ValidationInput";
import {
  NameValidator,
  PasswordValidator,
  DOBValidator,
  StringValidator,
  EmailValidator,
  WeightValidator
} from "../../validators";

class SignUpComponent extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDay: "",
    weight: "",
    height: ""
  };

  componentDidUpdate(prevProps, prevState) {
    const oldFormValid = this.isValid(prevState);
    const newFormValid = this.isValid(this.state);

    const isStateChanged = this.state !== prevState;
    const becomeValid = !oldFormValid && newFormValid;
    const becomeInvalid = oldFormValid && !newFormValid;
    const remainValid = oldFormValid && newFormValid;

    if (becomeValid) {
      this.props.onDataChange(this.state);
    } else if (becomeInvalid) {
      this.props.onDataChange(undefined);
    } else if (isStateChanged && remainValid) {
      this.props.onDataChange(this.state);
    }
  }

  isValid = value => {
    const { username, password } = value;

    return username !== undefined && password !== undefined;
  };

  render() {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.formContainer}>
          <ValidationInput
            label="User Name"
            validator={NameValidator}
            onChangeText={username => this.setState({ username })}
          />
          <ValidationInput
            style={themedStyle.textInput}
            label="Email"
            validator={EmailValidator}
            onChangeText={email => this.setState({ email })}
          />
          <ValidationInput
            style={themedStyle.textInput}
            label="Password"
            secureTextEntry={true}
            validator={PasswordValidator}
            onChangeText={password => this.setState({ password })}
          />
          <ValidationInput
            style={themedStyle.textInput}
            label="Confirm Password"
            secureTextEntry={true}
            validator={PasswordValidator}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
          />
          <ValidationInput
            style={themedStyle.textInput}
            label="Birth Day"
            placeholder="1990-01-01"
            validator={DOBValidator}
            onChangeText={birthDay => this.setState({ birthDay })}
          />
          <ValidationInput
            style={themedStyle.textInput}
            label="Weight (kg)"
            validator={WeightValidator}
            onChangeText={weight => this.setState({ weight })}
          />
          <ValidationInput
            style={themedStyle.textInput}
            label="Height (cm)"
            validator={WeightValidator}
            onChangeText={height => this.setState({ height })}
          />
        </View>
      </View>
    );
  }
}

export default withStyles(SignUpComponent, (theme: ThemeType) => ({
  container: {},
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  textInput: {
    marginTop: 16
  }
}));
