
import React, { Component } from 'react';
import {Thumbnail, List, ListItem, Separator} from 'native-base';
import { StyleSheet,ScrollView, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import { Divider } from 'react-native-elements';
import { createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator } from "react-navigation";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


export default class Menu_Screen extends Component {

    static navigationOptions =
        {
            title: 'menu',

        };

    gotoNextActivity = () => {
        this.props.navigation.navigate('');

    }


    render(){
        return (
            <View>


                <ScrollView>
                <Collapse style={{padding:15,margin:15,}}>

                    <CollapseHeader>

                        <View>

                            <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15}}>DILLI JUNCTION</Text>
                        </View>

                    </CollapseHeader>

                    <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                             <View style={{flex: 1}}>
                            <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                             </View>
                             </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                        <Text style={{margin:5}}>Ta daa!</Text>
                        <View style={{flex: 1}}>
                            <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                        </View>
                    </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>











                    </CollapseBody>
                </Collapse>







                <Collapse style={{padding:15,margin:15,}}>

                    <CollapseHeader>

                        <View>

                            <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15}}>VASCOS</Text>
                        </View>

                    </CollapseHeader>

                    <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>











                    </CollapseBody>
                </Collapse>















                <Collapse style={{padding:15,margin:15,}}>

                    <CollapseHeader>

                        <View>

                            <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15}}>SANDY SANDWIDCH</Text>
                        </View>

                    </CollapseHeader>

                    <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>



                    </CollapseBody>
                </Collapse>



                <Collapse style={{padding:15,margin:15,}}>

                    <CollapseHeader>

                        <View>

                            <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15}}>birayni darbar</Text>
                        </View>

                    </CollapseHeader>

                    <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>



                    </CollapseBody>
                </Collapse>



                <Collapse style={{padding:15,margin:15,}}>

                    <CollapseHeader>

                        <View>

                            <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15}}>belgian waffle</Text>
                        </View>

                    </CollapseHeader>

                    <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                    </CollapseBody>
                </Collapse>



                <Collapse style={{padding:15,margin:15,}}>

                    <CollapseHeader>

                        <View>

                            <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15}}>drinks and hub</Text>
                        </View>

                    </CollapseHeader>

                    <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>




                    </CollapseBody>
                </Collapse>





                <Collapse style={{padding:15,margin:15,}}>

                    <CollapseHeader>

                        <View>

                            <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15}}>cafe coffe day</Text>
                        </View>

                    </CollapseHeader>

                    <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>



                    </CollapseBody>
                </Collapse>



                <Collapse style={{padding:15,margin:15,}}>

                    <CollapseHeader>

                        <View>

                            <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15}}>paratha darbar</Text>
                        </View>

                    </CollapseHeader>

                    <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>



                    </CollapseBody>
                </Collapse>


                <Collapse style={{padding:15,margin:15,}}>

                    <CollapseHeader>

                        <View>

                            <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15}}>food factory</Text>
                        </View>

                    </CollapseHeader>

                    <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>











                    </CollapseBody>
                </Collapse>






                <Collapse style={{padding:15,margin:15,}}>

                    <CollapseHeader>

                        <View>

                            <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15}}>Take a bite</Text>
                        </View>

                    </CollapseHeader>

                    <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>


                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>

                            <Text style={{margin:5}}>Ta daa!</Text>
                            <View style={{flex: 1}}>
                                <Text style={{marginLeft:15,margin:5,textAlign: 'right'}}>50/-</Text>
                            </View>
                        </View>











                    </CollapseBody>
                </Collapse>














</ScrollView>






            </View>
        );
    }
}