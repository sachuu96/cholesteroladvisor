import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

export default class SecondEx extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardImage
                    source={{ uri: 'https://www.indoindians.com/wp-content/uploads/2019/06/knee-to-chest-stretch.jpg' }}
                />
                <CardTitle
                    title="Knee to chest Stretch"
                />
                <CardContent text="knees-to-chest stretch is good for more 
                than low back muscle release. As a range of motion exercise, 
                in other words, a movement that increases your joint flexibility, the knees-to-chest 
                stretch may help reduce stiffness associated with spinal arthritis" />
                <CardAction
                    separator={true}
                    inColumn={false}>
                    <CardButton
                        onPress={() => { }}
                        title="Start"
                        color="blue"
                    />
                    <CardButton
                        onPress={()=>{this.props.navigation.navigate('ThirdExcScreen')}}
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