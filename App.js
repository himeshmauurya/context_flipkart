import React, { createContext, useState, useContext} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity 
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Home from './component/Home';
// import Image1 from './component/Image1';
// import Imageclick from './component/Imageclick';
import Navst1 from './component/Navst1';
import Signup from './component/Signup';
import Login1 from './component/Login1';
import Wish from './component/Wish';
import Mycart from './component/Mycart';
import Error from './component/Error';

import MyProvider from './component/MyProvider';


function App() {
 
  return (
   <>
   {/* <Error/> */}
   {/* <Login1/> */}
    <MyProvider>
     <Navst1/>
    </MyProvider>
   {/* <Mycart/> */}
   {/* <Wish/> */}
   {/* <Signup/> */}
   {/* <Login1/> */}
   {/* <Screen1/> */}
   {/* <Navst1/> */}
   {/* <Imageclick/> */}
   {/* <Api1/> */}
   {/* <Home/> */}
   {/* <View>
    <Text>Hello</Text>
   </View> */}
  {/* <Image1/> */}
   </>
  );
}

export default App;
// const styles = StyleSheet.create({
//   container: {
//     // flexGrow: 1,
//     // justifyContent: "center",
//     // alignItems: "center",
//     color: 'black',
//     backgroundColor: '#047BD5',
//     height: hp('10%'),
//     width: wp('100%'),
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
// });
