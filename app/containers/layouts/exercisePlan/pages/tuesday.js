import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { withStyles } from "react-native-ui-kitten";

import { navigate } from "@app/actions/routes";

export default class Tuesday extends Component {
    render() {
        return (
            <View>
                <Text>Tuesday workout plan from Q table</Text>
            </View>
        )
    }
}