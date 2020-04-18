import React, { Component } from "react";
import { View } from "react-native";
import { Text, withStyles, Toggle } from "react-native-ui-kitten";

class ToggleInput extends Component {
  static defaultProps = {
    value: ""
  };

  state = {
    value: this.props.value
  };

  onChange = (text: string) => {
    const { formatter } = this.props;

    const value: string = formatter ? formatter(text, this.state.value) : text;

    this.setState({ value }, this.onValueChange);
  };

  onValueChange = () => {
    const { value } = this.state;

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };
  render() {
    const { label, themedStyle } = this.props;
    return (
      <View style={themedStyle.formToggle}>
        <Text>{label}</Text>
        <Toggle value={this.state.value} onChange={this.onChange} />
      </View>
    );
  }
}

export default withStyles(ToggleInput, theme => ({
  formToggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  }
}));
