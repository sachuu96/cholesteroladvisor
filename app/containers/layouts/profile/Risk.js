import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { withStyles, Button } from "react-native-ui-kitten";
import { navigate } from "@app/actions/routes";

class RiskScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const { themedStyle } = this.props;
        return (
            <ScrollableAvoidKeyboardComponent style={themedStyle.container1}>

            </ScrollableAvoidKeyboardComponent>
        );
    }
}

const RiskScreenContainer = connect(
    null,
    { navigate }
)(RiskScreen);

export default withStyles(RiskScreenContainer, theme => ({
    container: {
        marginHorizontal: 16,
        // marginVertical: 50,
        flexDirection: "column"
    },
    container1: {
        flex: 1,
        backgroundColor: theme["background-basic-color-1"]
    },
    label: {
        textAlign: "left",
        color: "#000000",
        fontSize: 16,
        marginBottom: 10,
        marginTop: 12
    },
    buttonContainer2: {
        flexDirection: "row",
        marginBottom: 40,
        marginTop: 20
    },
    button2: {
        flex: 1,
        backgroundColor: "#028f59",
        color: "white",
        borderColor: "#028f59",
        textColor: "white",
        fontSize: 16,
        marginVertical: 12
    }
}));