import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { MyContext } from './MyProvider';


function Cartitem(props) {
  const {title,price,image,rating,category,id,count}=props.value3;
  //const p=props.value6;
  const {data1,setData1,tot,settot,cc,setcc}=useContext(MyContext)
 
  const img1=image;
const navigation=useNavigation()

  return (
   
    <TouchableOpacity activeOpacity={1} onPress={()=>{
       navigation.navigate('Imageclick',{val2:props.value3})
    }}
    >
       
    <View
      style={{
        // justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'white',
        height: hp('31%'),
        width: wp('100%'),
        // borderWidth: 1,
        padding: '2%',
        justifyContent:'space-between',
        marginBottom:20
      }}>
     {/* one */}
     <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
     <Image
        source={{uri:img1}}
        style={{height: hp('16%'), width:wp('20%'), borderWidth: 1, paddingTop: 3,objectFit:'contain'}}
      />
      <View style={{width:wp('70%'),height: hp('16%'),justifyContent:'center'}}>

      <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight:'bold',fontSize:hp('2.5%'),marginBottom:1}}>
          {title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight:'bold',fontSize:hp('2%'),marginBottom:1}}>
         {category}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight:'bold',fontSize:hp('2%'),marginBottom:1,color:'blue'}}>
          Delivery by Sun Sep 24
        </Text>
        <TouchableOpacity
            
            activeOpacity={0.7} 
            style={{
              backgroundColor: "green", 
              marginBottom:1,
              padding: 4,
              marginRight:2,
              width:"25%",
              borderRadius:3,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Text style={{ color: "white", textAlign: "center" ,marginBottom:1}}>{rating.rate}</Text>
            <Image
              source={require('../star.png')}
              style={{height: hp('2%'), width: wp('4%')}}
            />
          </TouchableOpacity>
      </View>
     </View>
      {/* two */}
      <View style={{width:'100%',flexDirection:'row',alignItems:'center'}}>
        <View style={{flexDirection:'row',marginRight:wp('10%')}}>
       <TouchableOpacity onPress={()=>{
        let t1= data1.map((val)=>{
          if(val.id==id){
            val.count=val.count+1;
           // val.title="sdfas";
          }
          return val;
        })
        let t2=tot+price;
        setData1(t1) 
        settot(t2)
       }}>
        <Image
              source={require('../plus1.png')}
              style={{height: hp('4%'), width: wp('7%'),objectFit:'contain'}}
            />
            </TouchableOpacity>
            
            <View style={{height: hp('4%'), width: wp('8%'),justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>{count}</Text></View>
            <TouchableOpacity onPress={()=>{
        let t1= data1.map((val)=>{
          if(val.id==id){
            val.count=val.count-1;
            if(val.count<=0){
              setcc(cc-1)
              val.iscart=false;
              val.isfavourite=false;
              props.value6(data1.filter((val)=>{
                  return val.iscart==true && val.count>0;
                     }))
            }
           // val.title="sdfas";
          }
          return val;
        })
        let t2=tot-price;
        setData1(t1) 
        settot(t2)
       }}>
             <Image
              source={require('../minus.png')}
              style={{height: hp('4%'), width: wp('7%'),objectFit:'contain'}}
            />
             </TouchableOpacity>
        </View>
        <View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight:'bold',fontSize:hp("2.5%"),marginBottom:1}}>
          ${price*count}
        </Text> 
        </View>
      </View>
       {/* three */}
     <View style={{flexDirection:'row'}}>
     <TouchableOpacity onPress={()=>{
        let t1= data1.map((val)=>{
          if(val.id==id){
            let t2=tot-price*val.count;
            settot(t2)
            setcc(cc-1)
            val.count=0;
            val.iscart=false;
            val.isfavourite=false;
            if(val.count<=0){
              props.value6(data1.filter((val)=>{
                  return val.iscart==true && val.count>0;
                     }))
            }
           // val.title="sdfas";
          }
          return val;
        })
        //let t2=tot-price;
        setData1(t1) 
       // settot(t2)
       }}
            activeOpacity={0.7} 
            style={{
             // backgroundColor: "green", 
              marginBottom:1,
              padding: 4,
              marginRight:2,
              width:wp("48%"),
              height:hp('6%'),
             borderWidth:1,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Text style={{ color: "black", textAlign: "center" ,marginBottom:1}}>Remove</Text>
           
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{
              Alert.alert('your item is ready')
            }
              
            } 
            activeOpacity={0.7} 
            style={{
              //backgroundColor: "green", 
              marginBottom:1,
              padding: 4,
              marginRight:2,
              width:wp("50%"),
              height:hp('6%'),
             borderWidth:1,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Text style={{ color: "black", textAlign: "center" ,marginBottom:1}}>Buy this now</Text>
           
          </TouchableOpacity>
     </View>
      </View>
 
    </TouchableOpacity>
  
  );
}

export default Cartitem;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'cyan',
  },
});
