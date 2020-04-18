import React, { Component } from "react";
import axios from "axios";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { withStyles } from "react-native-ui-kitten";
import CardView from "react-native-cardview";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage
} from "react-native-material-cards";
import { TabView, Tab } from "react-native-ui-kitten";
import { navigate } from "@app/actions/routes";

export default class Monday extends Component {
  constructor(props) {
    super(props);
  }
  onSelect = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <Card>
        <CardImage
          source={{
            uri:
              "https://www.indoindians.com/wp-content/uploads/2019/06/knee-to-chest-stretch.jpg"
          }}
          title="Above all i am here"
        />
        <CardTitle title="This is a title" subtitle="This is subtitle" />
        <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
        <CardAction separator={true} inColumn={false}>
          <CardButton onPress={() => {}} title="Push" color="blue" />
          <CardButton onPress={() => {}} title="Later" color="blue" />
        </CardAction>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#F5FCFF"
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  cardText: {
    padding: 10,
    fontSize: 16
  }
});
/*<View>
<Text>Monday workout plan from Q table</Text>
    <Text>day: {this.state.day}</Text>
    <Text>time_slot {this.state.time_slot}</Text>
    <Text>ex1: {this.state.ex1}</Text>
    <Text>ex2: {this.state.ex2}</Text>
    <Text>{this.state.data}</Text>

     </View >*/

/**<CardView
           cardElevation={2}
           cardMaxElevation={2}
           cornerRadius={5}>
           <Text>
               Elevation 0
               </Text>
       </CardView> */

/**<Card>
         <CardImage
             source={{ uri: '../../images/myimage.png' }}
             title="Above all i am here"
         />
         <CardTitle
             title="This is a title"
             subtitle="This is subtitle"
         />
         <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
         <CardAction
             separator={true}
             inColumn={false}>
             <CardButton
                 onPress={() => { }}
                 title="Push"
                 color="blue"
             />
             <CardButton
                 onPress={() => { }}
                 title="Later"
                 color="blue"
             />
         </CardAction>
     </Card> */

/**<View style={styles.container}>
           <TouchableOpacity style={styles.Card}>
               <Image style={styles.CardImage} source={{ uri: "https://www.indoindians.com/wp-content/uploads/2019/06/knee-to-chest-stretch.jpg" }}></Image>
               <Text style={styles.cardText}>Card Title</Text>

           </TouchableOpacity>

       </View> */
