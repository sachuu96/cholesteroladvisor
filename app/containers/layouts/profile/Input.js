import React, { Component } from "react";
import { View, Text, Picker, Item, ScrollView } from "react-native";
import { connect } from "react-redux";
import { withStyles, Input, Button, ButtonGroup } from "react-native-ui-kitten";
import ScrollableAvoidKeyboardComponent from "@app/components/common/ScrollableAvoidKeyboardComponent";
import FinalView from "./Finalview";
import ValidationInput from "../../../components/common/ValidationInput";
import {
    AgerValidator,
    SBPValidator,
    TCValidator,
    HDLValidator
} from "../../../validators";

import { navigateAndReset } from "@app/actions/routes";

import { navigate } from "@app/actions/routes";

class InputScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            age: "",
            hdl: "",
            tc: "",
            sbp: "",
            gender: "Male"
        };
    }


    updateGender = gender => {
        this.setState({ gender: gender });
    };

    render() {
        const { themedStyle } = this.props;

        return (

            <View style={themedStyle.container}>
                <ValidationInput
                    label="Current Age"
                    labelStyle={themedStyle.label}
                    caption="Age must be between 20-79"
                    validator={AgerValidator}
                    onChangeText={age => this.setState({ age })}
                    value={this.state.age}
                />
                <Text style={themedStyle.label}>Gender</Text>
                <Picker
                    selectedValue={this.state.gender}
                    onValueChange={this.updateGender}
                    style={{ height: 50, width: 380 }}
                >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                </Picker>

                <ValidationInput
                    label="HDL-Cholesterol (mg/dl)"
                    labelStyle={themedStyle.label}
                    validator={HDLValidator}
                    caption="Value must be between 20-100"
                    onChangeText={hdl => this.setState({ hdl })}
                    value={this.state.hdl}
                />

                <ValidationInput
                    label="Total Cholesterol (mg/dl)"
                    labelStyle={themedStyle.label}
                    validator={TCValidator}
                    caption="Value must be between 130-320"
                    onChangeText={tc => this.setState({ tc })}
                    value={this.state.tc}
                />

                <ValidationInput
                    label="Systolic Blood Pressure (mmHg)"
                    labelStyle={themedStyle.label}
                    validator={SBPValidator}
                    caption="Value must be between 90-200"
                    onChangeText={sbp => this.setState({ sbp })}
                    value={this.state.sbp}
                />
                <View style={themedStyle.buttonContainer2}>
                    <Button
                        style={themedStyle.button2}
                        appearance="filled"
                        onPress={() => this.props.onSubmitInputForm({ ...this.state })}
                    >
                        NEXT >>
          </Button>
                </View>
            </View>

        );
    }
}

const InputScreenContainer = connect(
    null,
    { navigate }
)(InputScreen);

export default withStyles(InputScreenContainer, theme => ({
    container1: {
        flex: 1,
        backgroundColor: theme["background-basic-color-1"]
    },
    container: {
        marginHorizontal: 16,
        marginTop: 10,
        flexDirection: "column",
    },

    buttonContainer1: {
        flexDirection: "row",
        marginBottom: 10
    },
    buttonContainer2: {
        flexDirection: "row",
        marginBottom: 40,
        marginTop: 20
    },
    label: {
        textAlign: "left",
        color: "#000000",
        fontSize: 16,
        marginBottom: 10,
        marginTop: 12,
        fontWeight: "bold"
    },
    button1: {
        flex: 1,
        color: "white",
        textColor: "white",
        fontSize: 16,
        marginVertical: 12
    },
    button2: {
        flex: 1,
        color: "white",
        textColor: "white",
        fontSize: 16,
        marginVertical: 12
    }
}));
