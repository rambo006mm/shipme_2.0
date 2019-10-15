import React, { Component } from 'react';

import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import { createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation";
import Home_Screen from './homescreen';
import Menu_Screen from './menuscreen';
import Student_Screen  from  './studentscreen';
import Details_Screen from './detailsscreen';
import coupun_Screen from './coupun_Screen';
import Orders_Screen from './orders'
import contactus from "./contactus";

class HamburgerIcon extends Component {

    toggleDrawer = () => {

        this.props.navigationProps.toggleDrawer();

    }

    render() {

        return (

            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

                    <Image
                        source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />

                </TouchableOpacity>

            </View>

        );


    }
}















export const Tab_1 = createBottomTabNavigator ({
    First: {
        screen: Home_Screen,
        swipeEnabled: true,
    },
    Second: {
        screen: Menu_Screen,
        swipeEnabled: true,
    },
    Third: {
        screen:Student_Screen,
        swipeEnabled: true,
    },
    Forth: {
        screen: Details_Screen,
        swipeEnabled: true,
    }


}, {

    tabBarPosition: 'bottom',
    swipeEnabled: true,



});

export const Tab_2 = createBottomTabNavigator ({



    initialRouteName:coupun_Screen,
    First: {
        screen: Home_Screen,
        swipeEnabled: true,
    },
    Second: {
        screen: Menu_Screen,
        swipeEnabled: true,
    },
    Third: {
        screen: Student_Screen,
        swipeEnabled: true,
    },
    Forth: {
        screen: Details_Screen,
        swipeEnabled: true,
    },





}, {

    tabBarPosition: 'bottom',
    swipeEnabled: true,



});


export const Tab_3 = createBottomTabNavigator ({



    initialRouteName:Orders_Screen,
    First: {
        screen: Home_Screen,
        swipeEnabled: true,
    },
    Second: {
        screen:Menu_Screen,
        swipeEnabled: true,
    },
    Third: {
        screen: Student_Screen,
        swipeEnabled: true,
    },
    Forth: {
        screen: Details_Screen,
        swipeEnabled: true,
    },





}, {

    tabBarPosition: 'bottom',
    swipeEnabled: true,



});


export const Tab_4 = createBottomTabNavigator ({



    initialRouteName:contactus,
    First: {
        screen: Home_Screen,
        swipeEnabled: true,
    },
    Second: {
        screen: Menu_Screen,
        swipeEnabled: true,
    },
    Third: {
        screen: Student_Screen,
        swipeEnabled: true,
    },
    Forth: {
        screen: Details_Screen,
        swipeEnabled: true,
    },





}, {

    tabBarPosition: 'bottom',
    swipeEnabled: true,



});


export const Tab_5 = createBottomTabNavigator ({



    initialRouteName:Menu_Screen,
    First: {
        screen: Home_Screen,
        swipeEnabled: true,
    },
    Second: {
        screen: Menu_Screen,
        swipeEnabled: true,
    },
    Third: {
        screen: Student_Screen,
        swipeEnabled: true,
    },
    Forth: {
        screen: Details_Screen,
        swipeEnabled: true,
    },





}, {

    tabBarPosition: 'bottom',
    swipeEnabled: true,



});


const First_2_Tabs =createStackNavigator ({
    First: {

        screen: Tab_1,
        navigationOptions: ({ navigation }) => ({
            title: 'SHIP ME',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,

        })
    },


});

const First_3_Tabs =createStackNavigator ({

 cc: {

        screen: Tab_2,
        navigationOptions: ({ navigation }) => ({
            title: 'SHIP ME',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,

        })
    },


});


const First_4_Tabs =createStackNavigator ({

    ccc: {

        screen: Tab_3,
        navigationOptions: ({ navigation }) => ({
            title: 'SHIP ME',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,

        })
    },


});
const First_5_Tabs =createStackNavigator ({

    complain: {

        screen: Tab_4,
        navigationOptions: ({ navigation }) => ({
            title: 'SHIP ME',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,

        })
    },


});
const First_6_Tabs =createStackNavigator ({

    menu: {

        screen: Tab_5,
        navigationOptions: ({ navigation }) => ({
            title: 'SHIP ME',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,

        })
    },


});

const MyDrawerNavigator = createDrawerNavigator({

    Home_Menu_Label: {

        screen: First_2_Tabs,

    },
    coupons:{
        screen:First_3_Tabs,
    },
    orders:{
        screen:First_4_Tabs,

    },
    contact_us:{
        screen:First_5_Tabs,


     },
    menu:{
        screen:First_6_Tabs,
    }

});

export default createAppContainer(MyDrawerNavigator);

