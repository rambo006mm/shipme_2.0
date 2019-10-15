import React, { Component } from 'react';

import { StyleSheet, ScrollView,Text, View, Button, TouchableOpacity, Image } from 'react-native';

import { createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation";





export default class Details_Screen extends Component {

    static navigationOptions =
        {
            title: 'Details',

        };

    gotoNextActivity = () => {
        this.props.navigation.navigate('Second');

    }

    render() {

        return (

            <View>
<ScrollView>


                <View    style={{flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                <Image    style={{justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:25,
                    width: 200,
                    height: 200,
                    borderRadius:50
                }}        source={require('./app/img/i1.jpg')}    />
                </View>

                <View style={{borderWidth:2,borderColor:'grey',borderRadius:20,padding:20,margin:15 }}>
                    <Text style={{fontWeight:'bold'}}> NAME</Text>
                    <Text style={{textAlign: 'center',marginTop:10}} >AYUSH KUMAR</Text>
                </View>

                    <View style={{borderWidth:2,borderColor:'grey',borderRadius:20,padding:20,margin:15  }}>
                        <Text style={{fontWeight:'bold',}}> RESIDENTIAL ADDRESS</Text>
                        <Text style={{textAlign: 'center',marginTop:10}} >room no:505 B boys hostel 2</Text>
                    </View>

                        <View style={{borderWidth:2,borderColor:'grey',borderRadius:20,padding:20,margin:15  }}>
                            <Text style={{fontWeight:'bold',}}>REGESTRATION NUMBER</Text>
                            <Text style={{textAlign: 'center',marginTop:10}} >11806897</Text>

                        </View>
                            <View style={{borderWidth:2,borderColor:'grey',borderRadius:20,padding:20,margin:15  }}>
                                <Text style={{fontWeight:'bold',}}> CONTACT NUMBER</Text>
                                <Text style={{textAlign: 'center',marginTop:10}} >8594009591</Text>

                            </View>
                            <View style={{borderWidth:2,borderColor:'grey',borderRadius:20,padding:20,margin:15  }}>
                                <Text style={{fontWeight:'bold',}}> SHIPLITE POINTS</Text>
                                <Text style={{textAlign: 'center',marginTop:10}} >10</Text>

                            </View>
</ScrollView>


            </View>





        );
            }
            }

