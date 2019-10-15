import React from 'react'
import {Text, View,ScrollView} from "react-native";

 export default class coupun_Screen extends React.Component {

    static navigationOptions =
        {
            title: 'coupun',

        };

    gotoNextActivity = () => {
        this.props.navigation.navigate('coup');

    }

    render() {

        return (

            <ScrollView horizontal={true}>

                <View style={{flexDirection:'row',height:500,borderRadius:15,backgroundColor:'white',margin:10}}>


                    <View style={{width:250,height:450,borderRadius:15,backgroundColor:'red',margin:5,}}>

                    </View>
                    <View style={{width:250,height:450,borderRadius:15,backgroundColor:'red',margin:5}}>

                    </View>

                    <View style={{width:250,height:450,borderRadius:15,backgroundColor:'red',margin:5}}>

                    </View>
                    <View style={{width:250,height:450,borderRadius:15,backgroundColor:'red',margin:5}}>

                    </View>
                    <View style={{width:250,height:450,borderRadius:15,backgroundColor:'red',margin:5}}>

                    </View>

                </View>
            </ScrollView>

        );
    }
}

