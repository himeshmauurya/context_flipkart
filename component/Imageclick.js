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
import { useNavigation } from '@react-navigation/native';


function Imageclick(props) {
   const {title,price,image,rating,category,description,id,isfavourite,count}=props.route.params.val2;
   const {data1,setData1,settot,tot,cc,setcc,log,setlog}=useContext(MyContext)
   const [added,setadded]=useState(false)
const navigation=useNavigation()
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


  return (
    <>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:60,width:'100%',backgroundColor:'#047BD5',padding:5}}>
    <TouchableOpacity onPress={()=>{
      navigation.goBack()
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
               style={{marginRight:7}}
              onPress={()=>{
                navigation.navigate('Mycart')
              }}>
              <Image
                source={require('../cart.png')}
                style={{height: hp('4%'), width: wp('8%')}}
              />
              <View style={{backgroundColor:'red',position:'absolute',right:-4,borderRadius:50,height:18,width:18}}>
              <Text style={{color:'white',textAlign:'center'}}>{cc}</Text>
              </View>
              
              </TouchableOpacity>
</View>
    <ScrollView contentContainerStyle={{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: hp('90%'),
        width: wp('100%'),
        borderWidth: 1,
        padding: '2%',
      }}>
        <View style={{
          width:"100%",
          
          flexDirection:'row',
          //alignItems:'flex-end',
          justifyContent:'flex-end',
//backgroundColor:'red'
        }}>{!log?isfavourite?<TouchableOpacity
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
            style={{height: hp('5%'), width: wp('10%'),objectFit:'contain'}}
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
            style={{height: hp('5%'), width: wp('10%'),objectFit:'contain'}}
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
          style={{height: hp('5%'), width: wp('10%'),objectFit:'contain'}}
        />
      </TouchableOpacity>}</View>
      <Image
        source={{uri:image}}
        style={{height: '50%', width: '70%', borderWidth: 1, paddingTop: 1,objectFit:'contain',marginTop:-hp("5%")}}
      />
      <View style={{
          backgroundColor: 'white',
          height: '40%',
          width: '100%',
          // borderWidth: 1,
          //backgroundColor:'red',
         // marginTop:10
        }}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight:'bold',fontSize:hp('2%'),marginBottom:1}}>
         {title}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{marginBottom:1}}>
          {category}
        </Text>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:1}}>
        <TouchableOpacity
            onPress={{}} 
            activeOpacity={0.7} 
            style={{
              backgroundColor: "green", 
              marginBottom:1,
              padding: 4,
              marginRight:2,
              width:"25%",
              borderRadius:3
            }}
          >
            <Text style={{ color: "white", textAlign: "center" ,marginBottom:1}}>{rating.rate} *</Text>
          </TouchableOpacity>
          {/* <Text>({price})</Text> */}
        </View>
        <Text style={{color:'blue',fontWeight:'bold',}}>{description}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{fontWeight:'bold',fontSize:hp("2.5%"),marginBottom:1}}>
          $109.95
        </Text>  
       
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       
        {/* <TouchableOpacity
            onPress={{}} 
            activeOpacity={0.7} 
            style={{
              backgroundColor: "#FF4200", 
              padding: 5,
              
              width:"60%"
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>BUY NOW</Text>
          </TouchableOpacity> */}


 {!log?added?<View style={{padding:1,width:wp('94%'),borderRadius:5}}><Text style={{ color: "white", textAlign: "center",backgroundColor:'green' ,fontSize:20,borderRadius:5}}>ADDED</Text></View>:  
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
            // navigation.navigate('Mycart')
            }} 
            activeOpacity={0.7} 
            style={{
              backgroundColor: "#FF4200", 
              padding: 5,
              borderRadius:5,
              width:"100%"
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Add To Cart</Text>
          </TouchableOpacity>
          :<TouchableOpacity
          onPress={()=>{
           Alert.alert("Please login to the page")
          }} 
          activeOpacity={0.7} 
          style={{
            backgroundColor: "#FF4200", 
            padding: 5,
            //borderWidth:1,
            width:"100%"
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>BUY NOW</Text>
        </TouchableOpacity>} 


{/* <TouchableOpacity
            onPress={()=>{
              Alert.alert('your item is ready')
            }} 
            activeOpacity={0.7} 
            style={{
              backgroundColor: "#FF4200", 
              padding: 5,
              borderLeftWidth:1,
              width:"50%"
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>BUY NOW</Text>
          </TouchableOpacity> */}





          {/* <TouchableOpacity
            onPress={{}} 
            activeOpacity={0.7} 
            style={{
              //backgroundColor: "#FF4200", 
              padding: 5,
              
              width:"20%"
            }}
          >
            <Image
              source={require('.././fav_white.png')}
              style={{height: hp('2.8%'), width: wp('5%')}}
            />
          </TouchableOpacity> */}
         
          </View>
      </View>
    </ScrollView>
    </>
  );
}

export default Imageclick;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'cyan',
  },
});
