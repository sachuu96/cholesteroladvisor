import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Image
} from "react-native";
import { connect } from "react-redux";
//backgroundColor:
//this.props.index % 2 == 0 ? "mediumseagreen" : "tomato"
class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.getColor = this.getColor.bind(this);
    this.viewImage = this.viewImage.bind(this);
  }

  viewImage(url) {
    return (
      <Image
        source={{ uri: url }}
        style={{ width: 350, height: 350, margin: 5 }}
      ></Image>
    );
  }
  getColor(level) {
    //console.log("inside get color-level: " + level);
    let color = "";
    if (level === "beginner") {
      color = "#bab9b5";
    }
    if (level === "medium") {
      color = "#F7DC6F";
    }
    if (level === "hard") {
      color = "#F1948A";
    }
    return color;
  }

  render() {
    //console.log(this.props.item);
    return (
      <View
        style={{
          flex: 10,
          flexDirection: "row",
          backgroundColor: this.getColor(this.props.item.level)
        }}
      >
        <Image
          source={{ uri: this.props.item.imageUrl }}
          style={{ width: 200, height: 200, margin: 5 }}
        ></Image>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.flatListItem}>{this.props.item.name}</Text>
          <Text style={styles.flatListItem}>{this.props.item.category}</Text>
          <Text style={styles.flatListItem}>week: {this.props.item.week}</Text>
          {this.props.item.level === "beginner" ? (
            <Text style={styles.flatListItem}>reps : 5</Text>
          ) : null}
          {this.props.item.level === "medium" ? (
            <Text style={styles.flatListItem}>reps : 8</Text>
          ) : null}
          {this.props.item.level === "hard" ? (
            <Text style={styles.flatListItem}>reps : 15</Text>
          ) : null}
          <Text style={styles.flatListItem}>{this.props.item.level}</Text>
        </View>
        <TouchableOpacity
          style={styles.YesButtonStyle}
          onPress={() => alert("marked as done!")}
        >
          <Text style={styles.textStyle}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: "black",
    padding: 10,
    fontSize: 16
  },
  YesButtonStyle: {
    marginRight: 10,
    marginTop: 160,
    width: 50,
    height: 40,
    backgroundColor: "#0c52c9",
    borderRadius: 30
  },
  textStyle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#ffffff",
    paddingTop: 8,
    textAlign: "center"
  }
});

class MyFlatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flatListData: [
        {
          key: "30",
          name: "Arm Raises",
          imageUrl:
            "https://media1.popsugar-assets.com/files/thumbor/-6BYW1kYw8s0ZQQ0bYyk-K20q7A/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/07/08/644/n/1922729/5f0b09a80e77ef5a_lateral-arm-raise/i/Lateral-Arm-Raise.jpg"
        },
        {
          key: "32",
          name: "Skipping WithOut Rope",
          imageUrl:
            "https://media1.popsugar-assets.com/files/thumbor/JCbBm8DvD81AH8sOZcQi1joLbPg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/06/28/880/n/1922729/7a21b37c99787f72_fake-jump-rope/i/Invisible-Jump-Rope.jpg"
        }
      ]
    };
  }

  render() {
    //console.log(this.props);
    return (
      <View style={{ flex: 1, marginTop: 22 }}>
        <FlatList
          data={this.props.flatListData}
          renderItem={({ item, index }) => {
            //console.log(`Item = ${JSON.stringify(item)},index= ${index}`);
            return <FlatListItem item={item} index={index}></FlatListItem>;
          }}
        ></FlatList>
      </View>
    );
  }
}

export default connect()(MyFlatList);
