import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

export default class ThirdEx extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardImage
                    source={{ uri: 'https://media.self.com/photos/5bdb15b9266cd1106865308e/4:3/w_746/cross-body-shoulder-stretch.jpg' }}
                />
                <CardTitle
                    title="Cross-body shoulder Stretch"
                />
                <CardContent text="Start standing or sitting tall. Grab one arm above your elbow with your opposite
                    hand, and pull it across your body toward your chest until you feel a stretch in your shoulder. 
                    Hold for at 
                    least 30 seconds and then repeat on the other side." />
                <CardAction
                    separator={true}
                    inColumn={false}>
                    <CardButton
                        onPress={() => { }}
                        title="Start"
                        color="blue"
                    />
                    <CardButton
                        onPress={() => this.props.navigation.navigate('ForthExcScreen')}
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