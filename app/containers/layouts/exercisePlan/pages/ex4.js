import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { connect } from "react-redux";

class FourthEx extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uri: null
        }
    }

    componentDidMount() {
        console.log(this.props.ex1)
        const { ex1 } = this.props
        if (ex1 == "crunch with hand resting") {
            this.setState({
                uri: "https://www.ultracarepro.in/wp-content/uploads/2017/12/maxresdefault-51.jpg"
            })
        }
        else if (ex1 == "squat") {
            this.setState({
                uri: "https://www.ultracarepro.in/wp-content/uploads/2017/12/maxresdefault-6.jpg"
            })
        }
        else if (ex1 == "knee push ups") {
            this.setState({
                uri: "https://workoutlabs.com/train/wp-content/uploads/2019/02/Modified_Pushup_F_WorkoutLabs.svg"
            })
        }
        else if (ex1 == "plank") {
            this.setState({
                uri: "http://moorishharem.com/wp-content/uploads/2016/03/maxresdefault-10-1200x520.jpg"
            })
        }
        else if (ex1 == "hindu push ups") {
            this.setState({
                uri: "http://www.bignetindia.com/wp-content/uploads/2015/04/dand-790x482.jpg"
            })
        }
        else if (ex1 == "full vertical crunch") {
            this.setState({
                uri: "https://bodybuilding-wizard.com/wp-content/uploads/2015/07/vertical-leg-crunches-exercise-0-2-702x336.jpg"
            })
        }
        else if (ex1 == "leteral swings with straight leg") {
            this.setState({
                uri: "https://43nnuk1fz4a72826eo14gwfb-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/1227.3-Simple-Warmups-Blog-Inline-Lateral-Swing.jpg"
            })
        }
        else {
            this.setState({
                uri: "https://static.wixstatic.com/media/d34523_bd9f2d81eecd4d889e1739370acdee47~mv2.png/v1/fill/w_549,h_366,al_c,lg_1/d34523_bd9f2d81eecd4d889e1739370acdee47~mv2.png"
            })
        }
        //if (ex1 =="flutter kicks")
    }

    render() {
        return (
            <Card>
                <CardImage
                    source={{ uri: this.state.uri }}
                />
                <CardTitle
                    title={this.props.ex1}
                />

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
                            this.props.navigation.navigate('FifthExcScreen')
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

/* <CardContent text="Start standing or sitting tall. Grab one arm above your elbow with your opposite
hand, and pull it across your body toward your chest until you feel a stretch in your shoulder.
Hold for at 
                    least 30 seconds and then repeat on the other side." />*/

function mapStateToProps(state) {
    return {
        ...state,
        ex1: state.excPlan.ex1
    }
}

export default connect(
    mapStateToProps,
    null
)(FourthEx);