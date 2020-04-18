import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { withStyles } from "react-native-ui-kitten";

import { navigate } from "@app/actions/routes";

export default class CardScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, desc } = this.props
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: "#ffffff"
    },
    YesButtonStyle: {
        padding: 10,
        backgroundColor: '#0c52c9',
        borderRadius: 5
    },
})