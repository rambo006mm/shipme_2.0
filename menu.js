import React, { Component } from 'react';

import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import { createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation";



export default class Student_Screen extends Component {

    static navigationOptions =
        {
            title: 'Student',

        };

    gotoNextActivity = () => {
        this.props.navigation.navigate('Forth');

    }

    render() {

        return (

            <View>

                <Text>This is Student Screen Activity.</Text>

                <Button onPress={this.gotoNextActivity} title='Open Details Activity' />

            </View>
        );
    }
}