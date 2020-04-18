import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { withStyles } from "react-native-ui-kitten";

import { navigate } from "@app/actions/routes";

export default class Thursday extends Component {
    render() {
        return (
            <View>
                <Text>Thursday workout plan from Q table</Text>
            </View>
        );
    }
}