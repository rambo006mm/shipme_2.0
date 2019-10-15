import React from 'react'
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid } from 'react-native';

import ImagesSwiper from "react-native-image-swiper"



const customImg = [

    "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
    "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
    "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c"
];
export default class HomeScreen extends React.Component {

    render() {
        return (
            <ScrollView>
            <View>
            <View style={{margin:15,height:200,borderRadius:15,overflow: 'hidden',}}>
                <ScrollView >


                    <ImagesSwiper
                        images={customImg}
                        autoplay={true}
                        autoplayTimeout={3.5}
                        showsPagination={false}
                        //width={width}
                        //height={height - 400}

                    />
                </ScrollView>
            </View>


<View style={{flexDirection:'row',height:100,borderRadius:15,margin:15}}>
    <View style={{width:100,height:100,borderRadius:15,backgroundColor:'red',margin:5}}>

    </View>

    <View style={{width:100,height:100,borderRadius:15,backgroundColor:'red',margin:5}}>

    </View>

    <View style={{width:100,height:100,borderRadius:15,backgroundColor:'red',margin:5}}>

    </View>
</View>

                <Text  style={{textAlign: 'center',margin:15,fontWeight: 'bold',fontFamily:'roboto'}}> COUPONS </Text>

                <ScrollView horizontal={true}>

       <View style={{flexDirection:'row',height:200,borderRadius:15,backgroundColor:'white',margin:5}}>


           <View style={{width:250,height:150,borderRadius:15,backgroundColor:'red',margin:5,}}>

           </View>
           <View style={{width:250,height:150,borderRadius:15,backgroundColor:'red',margin:5}}>

           </View>

           <View style={{width:250,height:150,borderRadius:15,backgroundColor:'red',margin:5}}>

           </View>
           <View style={{width:250,height:150,borderRadius:15,backgroundColor:'red',margin:5}}>

           </View>
           <View style={{width:250,height:150,borderRadius:15,backgroundColor:'red',margin:5}}>

           </View>

       </View>
                </ScrollView>







</View>

            </ScrollView>






        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
});




