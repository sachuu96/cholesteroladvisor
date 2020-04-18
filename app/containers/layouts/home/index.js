import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from "react-native";
import Speedometer from "react-native-speedometer-chart";
import { List, withStyles } from "react-native-ui-kitten";
import { connect } from "react-redux";

import {
  imageProfileIcon,
  imageExercisePlanIcon,
  imageStressReleaseIcon,
  imageDietPlanIcon,
  imageSummaryIcon
} from "@app/assets";
import LayoutsListItem from "@app/components/home/LayoutsListItemComponent";
import { navigate } from "@app/actions/routes";

const { width } = Dimensions.get("window");
const itemWidth = width / 2 - 16;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: ""
    };
  }
  renderItem = info => {
    return (
      <LayoutsListItem
        style={this.props.themedStyle.item}
        data={info.item}
        onPress={() => this.props.navigate(info.item.route)}
      />
    );
  };

  render() {
    const { themedStyle, loading, ped_result } = this.props;

    const { level } = this.state;

    if (loading) {
      return <ActivityIndicator size="large" color="#000000" />;
    }

    let value = this.props.ped_result * 100 - 10;

    //console.log(value);

    let valuemax = "Normal";

    if (value <= 26) {
      valuemax = "Normal";
    } else if (26 < value <= 51) {
      valuemax = "Low";
    } else if (51 < value <= 76) {
      valuemax = "Intermediate";
    } else if (76 < value) {
      valuemax = "Highest";
    }

    return (
      <View>
        <View style={themedStyle.topContainer}>
          <Speedometer
            value={value}
            totalValue={100}
            size={300}
            outerColor="#d3d3d3"
            internalColor="#ff0000"
            showText
            text={valuemax}
            textStyle={{ color: "#009900", fontSize: 16 }}
            showLabels
            labelStyle={{ color: "blue" }}
            showPercent
            percentStyle={{ color: "red" }}
          />
        </View>
        <List
          style={themedStyle.container}
          numColumns={2}
          renderItem={this.renderItem}
          data={[
            {
              title: "Profile",
              icon: imageProfileIcon,
              route: "Profile"
            },
            {
              title: "Diet Plan",
              icon: imageDietPlanIcon,
              route: "Diet Plan"
            },
            {
              title: "Exercise Plan",
              icon: imageExercisePlanIcon,
              route: "Exercise Plan"
            },
            {
              title: "Stress Release",
              icon: imageStressReleaseIcon,
              route: "Stress Release"
            }
          ]}
        />
      </View>
    );
  }
}

const Actions = {
  navigate
};

const HomeScreenContainer = withStyles(HomeScreen, () => ({
  topContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: "center"
  },
  container: {
    paddingTop: 8
  },
  item: {
    flex: 1,
    height: 160,
    maxWidth: itemWidth,
    marginHorizontal: 8,
    marginVertical: 8
  }
}));

function mapStateToProps(state) {
  return {
    ...state,
    ped_result: state.profile.ped_result,
    loading: state.profile.loading
  };
}

export default connect(
  mapStateToProps,
  Actions
)(HomeScreenContainer);
