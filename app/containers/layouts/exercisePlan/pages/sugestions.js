import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { connect } from "react-redux";

import { getExcPattern, postExcPattern } from "../../../../actions/excPlan";

class Sugestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: "",
            timeSlot: ""
        }
        this.acceptPattern = this.respondToPattern.bind(this);
        this.displayDay = this.displayDay.bind(this);
        this.displayTimeSlot = this.displayTimeSlot.bind(this);
    }
    componentDidMount() {
        ///should i add brackets at the end?
        this.props.getExcPattern();
    }

    respondToPattern(data) {

        if (data == "Acpected") {
            this.props.postExcPattern(
                {
                    "userresponse": "y",
                    "notlike": 0
                }
            )
            this.props.navigation.navigate('FirstExcScreen')
        }
        else if (data == "exc_change") {
            this.props.postExcPattern(
                {
                    "userresponse": "n",
                    "notlike": 0
                }
            )
        }
        else if (data == "change_timeSlot") {
            this.props.postExcPattern(
                {
                    "userresponse": "n",
                    "notlike": 1
                }
            )
        }
        else {
            this.props.postExcPattern(
                {
                    "userresponse": "n",
                    "notlike": 2
                }
            )
        }
    }

    displayTimeSlot() {
        if (this.props.timeSlot == "0") {
            return "6.00 - 8.00 A.M"
        }
        else if (this.props.timeSlot == "1") {
            return "8.00 - 10.00 A.M"
        }
        else if (this.props.timeSlot == "2") {
            return "10.00 A.M - 12.00 P.M"
        }
        else if (this.props.timeSlot == "3") {
            return "12.00 - 2.00 P.M"
        }
        else if (this.props.timeSlot == "4") {
            return "2.00 - 4.00 P.M"
        }
        else if (this.props.timeSlot == "5") {
            return "4.00 - 6.00 P.M"
        }
        else if (this.props.timeSlot == "6") {
            return "6.00 - 8.00 P.M"
        }

    }
    displayDay() {
        if (this.props.day == "1") {
            return "Monday"
        }
        else if (this.props.day == "2") {
            return "Tuesday"
        }
        else if (this.props.day == "3") {
            return "Wednesday"
        }
        else if (this.props.day == "4") {
            return "Thursday"
        }
        else if (this.props.day == "5") {
            return "Friday"
        }
        else if (this.props.day == "6") {
            return "Saturday"
        }
        else if (this.props.day == "7") {
            return "Sunday"
        }
    }
    render() {
        const { day, timeSlot, ex1, ex2 } = this.props;
        return (
            <View style={styles.container}>

                <Text>
                    {"\n"}
                </Text>

                <Text>Welcome to {this.displayDay()} Excersice Plan Creator. We encourage you to live an active and healthy lifestyle! Our suggestion...</Text>

                <Text>
                    {"\n"}
                </Text>
                <Text style={styles.text}>Time suggestion - {this.displayTimeSlot()}</Text>
                <Text>
                    {"\n"}
                </Text>
                <Text style={styles.text}>{ex1}</Text>
                <Text>
                    {"\n"}
                </Text>
                <Text style={styles.text}>{ex2}</Text>

                <Text>
                    {"\n"}
                </Text>
                <TouchableOpacity style={styles.YesButtonStyle}
                    onPress={() => {
                        this.respondToPattern("Acpected");
                    }
                    }>
                    <Text style={styles.btnText}>Accept Pattern</Text>
                </TouchableOpacity>
                <Text>
                    {"\n"}
                </Text>
                <TouchableOpacity style={styles.YesButtonStyle}
                    onPress={() => {
                        this.respondToPattern("exc_change");
                    }
                    }>
                    <Text style={styles.btnText}>Next Excersice Pattern</Text>
                </TouchableOpacity>
                <Text>
                    {"\n"}
                </Text>
                <TouchableOpacity style={styles.YesButtonStyle}
                    onPress={() => {
                        this.respondToPattern("change_timeSlot");
                    }
                    }>
                    <Text style={styles.btnText}>Change Time Slot</Text>
                </TouchableOpacity>
                <Text>
                    {"\n"}
                </Text>
                <TouchableOpacity style={styles.YesButtonStyle}
                    onPress={() => {
                        this.respondToPattern("change_both");
                    }
                    }>
                    <Text style={styles.btnText}>Change Both</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Actions = {
    getExcPattern,
    postExcPattern
};

function mapStateToProps(state) {
    return {
        loading: state.excPlan.loading,
        day: state.excPlan.day,
        timeSlot: state.excPlan.timeSlot,
        ex1: state.excPlan.ex1,
        ex2: state.excPlan.ex2
    };
}

export default connect(
    mapStateToProps,
    Actions
)(Sugestion);

const styles = StyleSheet.create({
    YesButtonStyle: {
        padding: 10,
        backgroundColor: '#0c52c9',
        borderRadius: 5
    },
    container: {
        justifyContent: 'center',
        marginTop: 5,
        padding: 20,
        backgroundColor: "#ffffff"
    },
    text: {
        textAlign: "center",
        fontSize: 18
    },
    title: {
        textAlign: "auto"
    },
    btnText: {
        textAlign: "center",
        fontSize: 16,
        color: "#ffffff"
    },
    highlightDay: {
        fontSize: 16
    }
})
