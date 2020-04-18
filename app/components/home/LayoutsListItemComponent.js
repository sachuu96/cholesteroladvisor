import React, { Component } from "react";
import { Image } from "react-native";
import { List, ListItem, Text, withStyles } from "react-native-ui-kitten";

class LayoutsListItem extends Component {
  render() {
    const { style, themedStyle, data, ...restProps } = this.props;

    return (
      <ListItem {...restProps} style={[themedStyle.container, style]}>
        <Image source={data.icon} style={{ width: 60, height: 60 }} />
        <Text style={themedStyle.title} category="s2">
          {data.title}
        </Text>
      </ListItem>
    );
  }
}

export default withStyles(LayoutsListItem, (theme: ThemeType) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 8,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  icon: {
    width: 64,
    height: 64
  },
  title: {
    marginTop: 15
  }
}));
