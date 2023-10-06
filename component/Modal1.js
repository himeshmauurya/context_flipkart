import { useNavigation } from '@react-navigation/native';
import React, { useState ,useContext} from 'react';
import { Modal, View, Text, StyleSheet, Dimensions, Button, TouchableOpacity,Image } from 'react-native';
import {MyContext} from './MyProvider';
const { width, height } = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Modal1 = ({onClose}) => {
  const {log,setlog} = useContext(MyContext);
    const navigation=useNavigation()
  return (
    <Modal
      //animationType="slide" // Use 'slide' animation type
      transparent={true}
      visible={true} // You can control the visibility with a state variable
      onRequestClose={onClose}>
      <View  style={
         
          {flexDirection:'row',height:'100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}
         
         }>
        <View style={styles.modalContent}>
          <View style={{width:'100%',backgroundColor:'#047BD5',height:'17%',justifyContent:'center',alignItems:'center'}}>
          <Image
              source={require('../logo.png')}
              style={{height: '60%', width: '60%',objectFit:'contain'}}
            />
          </View>
          <View style={{padding:6,justifyContent:'space-between',height:hp("80%")}}>
            <View>
            <TouchableOpacity style={{backgroundColor:'skyblue',opacity:0.4,marginTop:10,borderRadius:5}} onPress={()=>{
                onClose();
                navigation.navigate('Wish')}}>

                   <View style={{ flexDirection: 'row' }}>
                    <Image style={{height:17,width:17, marginLeft:5,marginTop:7}} source={require('../heart.png')} />
                    <Text style={{color:'#047BD5',fontSize:18,fontWeight:'bold',padding:3,marginLeft:5}}>Favourite</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'skyblue',opacity:0.4,marginTop:10,borderRadius:5}} onPress={()=>{onClose();
                navigation.navigate('Mycart')}}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{flexDirection:'row',height:17,width:17, marginLeft:5,marginTop:7}} source={require('../carts.png')} />
                    <Text style={{color:'#047BD5',fontSize:18,fontWeight:'bold',padding:3,marginLeft:5}}>Cart</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'skyblue',opacity:0.4,marginTop:10,borderRadius:5}} onPress={()=>{onClose();
                navigation.navigate('Home');setlog(true) }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{height:17,width:17, marginLeft:5,marginTop:7}} source={require('../logout.png')} />
                    <Text style={{color:'#047BD5',fontSize:18,fontWeight:'bold',padding:3,marginLeft:5}}>Signout</Text>
                    </View>
            </TouchableOpacity>
           </View>
           
           <TouchableOpacity onPress={()=>{
            navigation.navigate('Login1')
           }}  style={{ justifyContent:'center',alignItems:'center', flexDirection: 'row',borderWidth:1,paddingTop:5 ,paddingBottom:5}}>
              <Image style={{ height: 30, width: 30}} source={require('../logouts23.png')} />
              <Text style={{fontSize:25,marginLeft:8,color:'black',fontWeight:'bold'}}>Logout</Text>
            </TouchableOpacity> 
        
          </View>
        </View>
        <TouchableOpacity style={{width:'40%',height:'100%'}} onPress={onClose}>
          
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'cyan'
    },
    modalContainer: {
    //   flex: 1,
    //   justifyContent: 'center',
    // //  alignItems: 'flex-end', // This aligns the modal to the right
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
      
    },
    modalContent: {
      width:'60%',
      height:'100%',
      backgroundColor: 'white',
     // padding: 20,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
  });
  
export default Modal1