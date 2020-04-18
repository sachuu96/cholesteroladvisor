import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { connect } from "react-redux";
import { withStyles, Button } from "react-native-ui-kitten";
import ScrollableAvoidKeyboardComponent from "@app/components/common/ScrollableAvoidKeyboardComponent";
import { navigate } from "@app/actions/routes";
import ValidationInput from "../../../components/common/ValidationInput";
import {
    NameValidator,
    PasswordValidator,
} from "../../../validators";

class FinalviewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Parameters
            age: "",
            hdl: "",
            tc: "",
            sbp: "",
            gender: "",
            med: "",
            dia: "",
            smoke: "",
            username: "",
            password: "",
            confirmPassword: ""
        };
    }

    // showAlert1() {
    //   if (input.gender == "Male") {
    //     this.setState({
    //       gender: 1
    //     })
    //   }
    //   else if (input.gender == "Female") {
    //     this.setState({
    //       gender: 2
    //     })
    //   }
    //   if (input.smoke == "Yes") {
    //     this.setState({
    //       smoke: 1
    //     })
    //   }
    //   else if (input.smoke == "No") {
    //     this.setState({
    //       smoke: 0
    //     })
    //   }
    //   if (input.med == "Yes") {
    //     this.setState({
    //       med: 1
    //     })
    //   }
    //   else if (input.med == "No") {
    //     this.setState({
    //       med: 2
    //     })
    //   }
    //   if (input.dia == "Yes") {
    //     this.setState({
    //       dia: 1
    //     })
    //   }
    //   else if (input.dia == "No") {
    //     this.setState({
    //       dia: 0
    //     })
    //   }

    //   this.postRiskFactors(
    //     {
    //       sex: this.state.gender,
    //       age: input.age,
    //       tc: input.tc,
    //       hdl: input.hdl,
    //       sbp: input.sbp,
    //       smoke: input.smoke,
    //       med: input.med,
    //       dia: input.dia
    //     }
    //   )

    //   // Alert.alert("", "Do you want to continue?", [
    //   //   {
    //   //     text: "Cancel",
    //   //     onPress: () => console.log("Cancel Pressed"),
    //   //     style: "cancel"
    //   //   },
    //   //   { text: "OK", onPress: () => console.log("OK Pressed") }
    //   // ]);


    // }

    onSubmitForm = () => {
        const { form: { input, selection } } = this.props;

        this.props.postRiskFactors({
            age: input.age,
            hdl: input.hdl,
            tc: input.tc,
            sbp: input.sbp,
            sex: input.gender === "Male" ? "1" : "2",
            med: selection.med === "Yes" ? "1" : "2",
            smoke: selection.smoke === "Yes" ? "1" : "0",
            dia: selection.dia === "Yes" ? "1" : "0",

        });

        this.props.navigate('Home');




    }

    render() {
        const {
            themedStyle, ped_result,
            form: { input, selection }
        } = this.props;


        return (
            <View style={themedStyle.container}>
                <View style={themedStyle.container3}>
                    {/* <View style={themedStyle.space}>
            <Text style={themedStyle.label}>Age</Text>
            <Text>{input.age}</Text>
          </View> */}
                    <Text style={themedStyle.label}>Age: {input.age}</Text>
                    <Text style={themedStyle.label}>Gender: {input.gender}</Text>
                    <Text style={themedStyle.label}>HDL-Cholesterol (mg/dl): {input.hdl}</Text>
                    <Text style={themedStyle.label}>Total Cholesterol (mg/dl): {input.tc}</Text>
                    <Text style={themedStyle.label}>Systolic Blood Pressure (mmHg): {input.sbp}</Text>
                    <Text style={themedStyle.label}>Current Smoker: {selection.smoke}</Text>
                    <Text style={themedStyle.label}>History of Diabetes: {selection.dia}</Text>
                    <Text style={themedStyle.label}>On Hypertension Treatment: {selection.med}</Text>
                </View>
                <View style={themedStyle.container}>
                    <Text style={themedStyle.label2}>Enter Following Details</Text>

                    <ValidationInput
                        label="User Name"
                        validator={NameValidator}
                        onChangeText={username => this.setState({ username })}
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
                </View>

                <View style={themedStyle.buttonContainer2}>
                    <Button
                        style={themedStyle.button2}
                        appearance="filled"
                        onPress={this.onSubmitForm}
                    >
                        Register
          </Button>
                </View>
            </View>
        );
    }
}


const FinalviewScreenContainer = connect(
    null,
    { navigate }
)(FinalviewScreen);

export default withStyles(FinalviewScreenContainer, theme => ({
    container: {
        marginHorizontal: 16,
        // marginVertical: 50,
        flexDirection: "column",
        marginTop: 20

    },
    container3: {
        marginHorizontal: 16,
        // marginVertical: 50,
        flexDirection: "column",
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
        marginTop: 12,
        fontWeight: "bold"
    },
    label2: {
        textAlign: "left",
        color: "#000000",
        fontSize: 20,
        marginBottom: 10,
        marginTop: 12,
    },
    space: {
        flex: 1,
        justifyContent: "space-between"
    },

    buttonContainer2: {
        flexDirection: "row",
        marginBottom: 40,
        marginTop: 20
    },
    button2: {
        flex: 1,
        color: "white",
        textColor: "white",
        fontSize: 16,
        marginVertical: 12
    }
}));
