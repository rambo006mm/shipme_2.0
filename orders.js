import React from 'react'
import {Text, TextInput,View, ScrollView, Button,Picker} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { Jiro } from 'react-native-textinput-effects';




export default class Orders_Screen extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            company: 'select company',
            checked:'first',
            hostel:'select hostel',
            block:'select block'
        }
    }


    static navigationOptions =
        {
            title: 'Orders',

        };

    gotoNextActivity = () => {
        this.props.navigation.navigate('');

    }




    render() {

        const { checked } = this.state;

        return (

            <View>

<ScrollView>


    <Text style={{textAlign: 'center',margin:15,fontSize:25,fontFamily:'Roboto'}}>ORDERS!!!</Text>

<View style={{flexDirection:'row'}}>

                <Input
                    placeholder='First name'
                    containerStyle={{width:170,marginTop:15,marginBottom:15,borderColor: 'gray',marginLeft:5,borderRadius:10,borderWidth:2,borderBottomWidth:4}}
                    leftIcon={
                        <Icon
                            name='user'
                            size={14}
                            color='black'
                        />

                    }
                />




                <Input
                    placeholder='Last name'
                    containerStyle={{width:170,marginTop:15,marginBottom:15,borderColor: 'gray',marginLeft:5,borderRadius:10,borderWidth:2,borderBottomWidth:4}}
                    leftIcon={
                        <Icon
                            name='user'
                            size={14}
                            color='black'
                        />

                    }
                />
</View>
    <Picker
        style={{width: 300}}
        selectedValue={this.state.company}
        onValueChange={(lang) => this.setState({company: lang})}>
        <Picker.Item label="SELECT COMPANY" value="SELECTCOMPANY" />
        <Picker.Item label="Amazon" value="amazon" />
        <Picker.Item label="Flipkart" value="flipkart" />
        <Picker.Item label="Myntra" value="myntra" />
        <Picker.Item label="Snapdeal" value="snapdeal" />
        <Picker.Item label="Patym mall" value="patymmall" />
        <Picker.Item label="club factory" value="clubfactory" />
        <Picker.Item label="OTHERS" value="others" />
    </Picker>

                <Input
                    placeholder='Registration number'
                    keyboardType = 'numeric'
                    containerStyle={{width:300,marginTop:15,marginBottom:15,borderColor: 'gray',marginLeft:5,borderRadius:10,borderWidth:2,borderBottomWidth:4}}
                    shake={true}
                />


    <Picker
        style={{width: 300}}
        selectedValue={this.state.hostel}
        onValueChange={(lang) => this.setState({hostel: lang})}>
        <Picker.Item label="SELECT HOSTEL" value="hostel" />
        <Picker.Item label="BH 1" value="bh1" />
        <Picker.Item label="BH 2" value="bh2" />
        <Picker.Item label="BH 3" value="bh3" />
        <Picker.Item label="BH 4" value="bh4" />
        <Picker.Item label="BH 5" value="bh5" />
        <Picker.Item label="BH 6" value="bh6" />
        <Picker.Item label="BH 7" value="bh7" />
        <Picker.Item label="BH 8" value="bh8" />
    </Picker>

<View  style={{flexDirection:'row'}}>
                <Input
                    placeholder='ROOM NO.'
                    containerStyle={{width:170,marginTop:15,marginBottom:15,borderColor: 'gray',marginLeft:5,borderRadius:10,borderWidth:2,borderBottomWidth:4}}
                    keyboardType = 'numeric'
                    leftIcon={{ type: 'font-awesome', name: 'hand-o-right' }}
                />

    <Picker
        style={{width: 200,marginTop:15}}
        selectedValue={this.state.block}
        onValueChange={(lang) => this.setState({block: lang})}>
        <Picker.Item label="SELECT BLOCK" value="block" />
        <Picker.Item label="Block A" value="blockA" />
        <Picker.Item label="Block B" value="blockB" />
        <Picker.Item label="Block C" value="blockC" />
        <Picker.Item label="Block D" value="blockD" />
        <Picker.Item label="Block E" value="blockE" />
    </Picker>
</View>


    <Input
        placeholder='NUMBER'
        keyboardType = 'numeric'
        containerStyle={{marginTop:15,marginBottom:15,borderColor: 'gray',marginLeft:5,borderRadius:10,borderWidth:2,width:300,borderBottomWidth:4}}
        shake={true}
    />
    <View style={{flexDirection:'row'}}>
        <RadioButton

            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'first' }); }}
        />
        <Text style={{marginTop:10}}>Pay Through Paytm</Text>
    </View>

    <View style={{flexDirection:'row'}}>
        <RadioButton
            value="second"
            label={'first'}
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'second' }); }}
        />

        <Text style={{marginTop:10}}>Pay Through Google pay(TEz)</Text>
    </View>

    <View style={{flexDirection:'row'}}>
        <RadioButton
            value="second"
            label={'first'}
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'third' }); }}
        />

        <Text style={{marginTop:10}}>Cash On Delivery</Text>
    </View>


    <View style={{flexDirection:'row'}}>
        <RadioButton
            value="second"
            label={'first'}
            status={checked === 'forth' ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked: 'forth' }); }}
        />

        <Text style={{marginTop:10}}>Pre Cash(* over 2k)</Text>
    </View>

</ScrollView>


            </View>




        );
    }
    }