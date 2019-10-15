import React, { Component } from 'react';

import {StyleSheet, Text, View, Button, TouchableOpacity, Image, Picker,input,TextInput,ScrollView} from 'react-native';

import { createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation";



export default class contactus extends Component {

    static navigationOptions =
        {
            title: 'contact',


        };

    state={
        complain: 'catagory'
    }


    gotoNextActivity = () => {
        this.props.navigation.navigate('');

    }

    render() {

        return (

            <View>
                <ScrollView>

                <Text style={{textAlign: 'center',fontSize:25}}>SORRY FOR THE INCONVENIENCE!!!</Text>

                <Picker
                    style={{width: 300}}
                    selectedValue={this.state.complain}
                    onValueChange={(lang) => this.setState({complain: lang})}>
                    <Picker.Item label="SELECT CATEGORY" value="SELECTCATAGORY" />
                    <Picker.Item label="NOT DELIVERED" value="notdeliverd" />
                    <Picker.Item label="LATE DELIVERY" value="latedelivary" />
                    <Picker.Item label="INCONVENIENCE BEHAVIOUR" value="inconvenience" />
                    <Picker.Item label="UNABLE TO PAY" value="unable to pay" />
                    <Picker.Item label="SERVICE NOT UPTO MARK" value="notmark" />
                    <Picker.Item label="OTHERS" value="others" />
                </Picker>



              <TextInput
              placeholder='DESCRIPTION'
              style={{height: 200,borderColor:'grey',borderWidth:2,borderRadius:15,margin:5}}
              />

                <View style={{flexDirection:'row'}}>
                <Text style={{margin:15,fontSize:15}}>OUR EMAIL</Text>
                <Text style={{margin:15,fontSize:15}}>ayushraichand1@gmail.com</Text>
                </View>

                    <View  style={{flexDirection:'row'}}>
                <Text style={{margin:15,fontSize:15}}>OUR CONTACT... </Text>
                <Text style={{margin:15,fontSize:15}}>8594009591</Text>
                    </View>
                </ScrollView>
                </View>
        );
    }
}