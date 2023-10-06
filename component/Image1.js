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


function Image1(props) {
  const {title,price,image,rating,category,id,isfavourite}=props.value2;
// console.log("props.value2",props.value2.isfavourite)
  const {data1,setData1,settot,tot,cc,setcc,log,setlog}=useContext(MyContext)
const [added,setadded]=useState(false)
const navigation=useNavigation()
const [fav,setfav]=useState(false)
useEffect(()=>{
  //console.log("hello")
data1.map((val)=>{
  //console.log("hello")
  if(val.id==id && val.count>0){
    setadded(true)
  }else if(val.id==id && val.count<=0){
    setadded(false)
  }
  return val;
})
},[cc])

useEffect(()=>{
  //console.log("hello")
data1.map((val)=>{
  //console.log("hello")
  if(val.id==id &&  val.isfavourite==true){
    //console.log(val)
    setfav(true)
  }else if(val.id==id &&  val.isfavourite==false){
    //console.log(val)
    setfav(false)
  }
  return val;
})
},[data1])


  return (
    <TouchableOpacity activeOpacity={1} onPress={()=>{
      navigation.navigate('Imageclick',{val2:props.value2})
    }} >
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: hp('50%'),
        width: wp('50%'),
        borderWidth: 1,
        padding: '2%',
        borderColor:'lightgrey'
      }}>
      <Image
        source={{uri:image}}
        style={{height: '53%', width: '80%', borderWidth: 1, paddingTop: 3,objectFit:'contain'}}
      />
      <View
        style={{
          backgroundColor: 'white',
          height: '40%',
          width: '100%',
          padding:3
          // borderWidth: 1,
        }}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight:'bold',fontSize:hp('2%'),marginBottom:2}}>
         {title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{marginBottom:2}}>
          {category}
        </Text>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:2}}>
        <TouchableOpacity
            
            activeOpacity={0.7} 
            style={{
              backgroundColor: "green",
              marginTop:3, 
              marginBottom:1,
              padding: 2,
              marginRight:2,
              width:"32%",
              borderRadius:3,
              flexDirection:'row',
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Text style={{ color: "white", textAlign: "center" ,marginBottom:2,paddingLeft:2}}>{rating.rate}</Text>
            <Image
              source={require('../star.png')}
              style={{height: hp('2%'), width: wp('4%')}}
            />
          </TouchableOpacity>
          <Text>({rating.count})</Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight:'bold',fontSize:hp("2.5%"),marginBottom:1}}>
          ${price}
        </Text>  
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      {!log?added?<View style={{padding:5,width:"50%",borderRadius:5}}><Text style={{ color: "white", textAlign: "center",backgroundColor:'green',borderRadius:5 ,fontSize:17,padding:3}}>ADDED</Text></View>:  
      <TouchableOpacity
            onPress={()=>{
             let t1= data1.map((val)=>{
                if(val.id==id && val.count==0){
                  val.iscart=true;
                  val.count=1;
                  settot(tot+val.price)
                  setcc(cc+1)
                  //setadded(false)
                 // val.title="sdfas";
                }else{
                  //setadded(true)
                }
                return val;
              })
              setData1(t1)
             //Alert.alert(JSON.stringify(t1))
            }} 
            activeOpacity={0.7} 
            style={{
              backgroundColor: "#FF4200", 
              padding: 5,
              borderRadius:6,
              width:"30%"
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>ADD</Text>
          </TouchableOpacity>
          : <TouchableOpacity
          onPress={()=>{
           Alert.alert("","Please login to the page",[
            {
              text: 'Cancel',
              onPress: () => {},
              
            },
            {text: 'OK', onPress: () => navigation.navigate('Login1')},
          ])
           //navigation.navigate('Login1')
          }} 
          activeOpacity={0.7} 
          style={{
            backgroundColor: "#FF4200", 
            padding: 5,
            borderRadius:6,
            width:"30%"
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>ADD</Text>
        </TouchableOpacity>}
          {!log?fav?<TouchableOpacity
            onPress={()=>{
              
              let t1= data1.map((val)=>{
                 if(val.id==id ){
                  val.isfavourite=false;
                  
                
                 }
                 return val;
               })
               //console.log(t1)
               setData1(t1)
             
             }
          }  
            activeOpacity={0.7} 
            style={{
              //backgroundColor: "#FF4200", 
              padding: 5,
              
              width:"20%"
            }}
          >
            <Image
              source={require('../fav_red.png')}
              style={{height: hp('2.8%'), width: wp('5%'),objectFit:'contain'}}
            />
          </TouchableOpacity>:
          <TouchableOpacity
            onPress={()=>{
              
              let t1= data1.map((val)=>{
                 if(val.id==id ){
                  val.isfavourite=true;
                  
               // setfav(true)
                 }
                 return val;
               })
               //console.log(t1)
               setData1(t1)
             
             }
          }  
            activeOpacity={0.7} 
            style={{
              //backgroundColor: "#FF4200", 
              padding: 5,
              
              width:"20%"
            }}
          >
            <Image
              source={require('../fav_white.png')}
              style={{height: hp('2.8%'), width: wp('5%'),objectFit:'contain'}}
            />
          </TouchableOpacity>
          : <TouchableOpacity
          onPress={()=>{
            Alert.alert("","Please login to the page",[
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                //style: 'cancel',
              },
              {text: 'OK', onPress: () => navigation.navigate('Login1')},
            ])
           }
        }  
          activeOpacity={0.7} 
          style={{
            //backgroundColor: "#FF4200", 
            padding: 5,
            
            width:"20%"
          }}
        >
          <Image
            source={require('../fav_white.png')}
            style={{height: hp('2.8%'), width: wp('5%'),objectFit:'contain'}}
          />
        </TouchableOpacity>}
         
          </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}

export default Image1;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'cyan',
  },
});
