import React, { useState ,useContext,useEffect,} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';

import Wishimage from './Wishimage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import { MyContext } from './MyProvider';
import { useNavigation } from '@react-navigation/native';

function Wish(props) {
  const navigation=useNavigation()
  const {data1,setData1,tot,cc}=useContext(MyContext)

const [filtfav,setfiltfav]=useState([])
useEffect(()=>{
  setfiltfav(data1.filter((val)=>{
    return val.isfavourite==true
       }))
},[])


  return (
    <>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:60,width:'100%',backgroundColor:'#047BD5',padding:5}}>
    <TouchableOpacity onPress={()=>{
      navigation.navigate('Home')
    }}>
    <Image
                source={require('../back.png')}
                style={{height: hp('4%'), width: wp('8%'),objectFit:'contain'}}
              />
              </TouchableOpacity>
               {/* <Image
                source={require('.././cart.png')}
                style={{height: hp('4%'), width: wp('8%')}}
              /> */}
               <TouchableOpacity
              onPress={()=>{
                navigation.navigate('Mycart')
              }}>
              <Image
                source={require('../cart.png')}
                style={{height: hp('4%'), width: wp('8%'),objectFit:'contain'}}
              />
              <View style={{backgroundColor:'red',position:'absolute',right:-4,borderRadius:50,height:18,width:18}}>
              <Text style={{color:'white',textAlign:'center'}}>{cc}</Text>
              </View>
              
              </TouchableOpacity>
</View>
<View>
<Text style={{fontSize:25,fontWeight:'bold',margin:4}}>My Wishlist</Text>
<View style={{flexDirection:'row',alignItems:'center',margin:4}}>
              <Image
                source={require('../lock.png')}
                style={{height: hp('3%'), width: wp('6%'),objectFit:'contain'}}
              />
              <Text>    {filtfav.length} items</Text>
</View>
</View>

    <ScrollView contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',marginLeft:2.8}}>
    {
    filtfav.map((val)=>{

      return <Wishimage key={val.id} value8={val} value9={setfiltfav} />
    })
   }
     {/* <Wishimage/>
     <Wishimage/>
     <Wishimage/>
     <Wishimage/>
     <Wishimage/> */}
     
          {/* <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
          <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
          <View style={{backgroundColor:'red',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
          <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
          <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
          <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
          <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>
          <View style={{backgroundColor:'white',height:hp('50%'),width:wp('50%'),borderWidth:1}}></View>  */}
         
     
        </ScrollView>
    </>
  );
}

export default Wish;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'cyan',
  },
});
