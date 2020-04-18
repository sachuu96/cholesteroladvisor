import React, { Component } from "react";
import { View, Text, Picker, ScrollView } from "react-native";
import { connect } from "react-redux";
import { withStyles, Button, Input, ButtonGroup } from "react-native-ui-kitten";

import { navigate } from "@app/actions/routes";

class SelectionScreen extends Component {
    state = {
        med: "No",
        dia: "No",
        smoke: "No"
    };

    updateSmoke = smoke => {
        this.setState({ smoke: smoke });
    };
    updateDiabetes = diabetes => {
        this.setState({ dia: diabetes });
    };
    updateMed = med => {
        this.setState({ med: med });
    };

    render() {
        const { themedStyle } = this.props;
        return (
            <View style={themedStyle.container}>
                <Text style={themedStyle.label}>Current Smoker?</Text>
                <Picker
                    selectedValue={this.state.smoke}
                    onValueChange={this.updateSmoke}
                    style={{ height: 50, width: 380 }}
                >
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                </Picker>

                <Text style={themedStyle.label}>History of Diabetes?</Text>
                <Picker
                    selectedValue={this.state.dia}
                    onValueChange={this.updateDiabetes}
                    style={{ height: 50, width: 380 }}
                >
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                </Picker>

                <Text style={themedStyle.label}>On Hypertension Treatment?</Text>
                <Picker
                    selectedValue={this.state.med}
                    onValueChange={this.updateMed}
                    style={{ height: 50, width: 380 }}
                >
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                </Picker>

                <View style={themedStyle.buttonContainer2}>
                    <Button
                        style={themedStyle.button2}
                        appearance="filled"
                        onPress={() => {
                            this.props.onSubmitSelectionForm({ ...this.state });
                        }}
                    >
                        NEXT >>
          </Button>
                </View>
            </View>
        );
    }
}

const SelectionScreenContainer = connect(
    null,
    { navigate }
)(SelectionScreen);

export default withStyles(SelectionScreenContainer, theme => ({
    container: {
        marginHorizontal: 16,
        flexDirection: "column"
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
        fontSize: 18,
        marginVertical: 12
    }
}));
