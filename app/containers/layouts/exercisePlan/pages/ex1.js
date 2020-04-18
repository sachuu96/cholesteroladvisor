import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { navigate } from "@app/actions/routes";

export default class FirstEx extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Card>
                <CardImage
                    source={{ uri: 'https://achieveyourfullpotential.net/wp-content/uploads/2014/07/2-1.jpg' }}
                />
                <CardTitle
                    title="Jogging - 200m/30mins"
                />
                <CardContent text="Gentle jogging can help prevent heart attacks and strokes. 
                Running for just 20 to 30 minutes a day even at slow speeds could help reduce your 
                risk of dying prematurely from a heart attack or stroke according to research." />
                <CardAction
                    separator={true}
                    inColumn={false}>
                    <CardButton
                        onPress={() => { 
                         //   this.props.navigation.navigate('HeartRate')
                        }}
                        title="Start"
                        color="blue"
                    />
                    <CardButton
                        onPress={() => {
                            this.props.navigation.navigate('SecondExcScreen')
                         }}
                        title="Skip"
                        color="blue"
                    />
                    <CardButton
                        onPress={() => {
                            this.props.navigation.navigate('WalkTest')
                        }}
                        title="Back to plan"
                        color="blue"
                    />
                </CardAction>
            </Card>
        );
    }
}

