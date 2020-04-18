import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

export default class SixEx extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardImage
                    source={{ uri: 'https://english.cdn.zeenews.com/sites/default/files/2015/02/03/321202-jogging.jpg' }}
                />
                <CardTitle
                    title="Slow run to warm down"
                />
                <CardContent text="Warming up may also help reduce muscle soreness and lessen your risk of injury. 
                Cooling down after your workout allows for a gradual recovery of preexercise 
                heart rate and blood pressure" />
                <CardAction
                    separator={true}
                    inColumn={false}>
                    <CardButton
                        onPress={() => { }}
                        title="Start"
                        color="blue"
                    />
                    
                    <CardButton
                        onPress={() => {
                            this.props.navigation.navigate('WalkTest')
                        }}
                        title="Finish"
                        color="blue"
                    />
                </CardAction>
            </Card>
        );
    }
}
/**
 * <CardButton
                        onPress={()=>{this.props.navigation.navigate('ThirdExcScreen')}}
                        title="Skip"
                        color="blue"
                    />
 */