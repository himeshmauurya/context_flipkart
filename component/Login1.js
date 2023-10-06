import React, { useState,useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {MyContext} from './MyProvider';
const image = {
  uri: `https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1428&q=80`,
};

const Login1 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const [mailcheck, setMailcheck] = useState(false);
  const [passcheck, setPasscheck] = useState(false);
  const {log,setlog} = useContext(MyContext);
  const handleSignup = () => {
    if (email === '' || password === '') {
      Alert.alert('Provide correct email/password');
      return;
    }

    const getname = async () => {
      const val = await AsyncStorage.getItem('signup_flip');
      const p = JSON.parse(val);

      const dfg = p.filter((val) => {
        return val.email === email.toLowerCase() && val.password === password;
      });

      if (dfg!=null && dfg.length > 0) {
        //Alert.alert(JSON.stringify(dfg));
        navigation.navigate('Home' );
        setlog(false)
      } else {
        Alert.alert('Provide correct email/password');
      }
    };
    getname();
  };

  const handleImageClick1 = () => {
    setIsPasswordVisible2(!isPasswordVisible2);
  };

  return (
    
    // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        {/* <Image source={require('./ab123.jpeg')} style={styles.profilePhoto} /> */}
       
        <Image source={require('../flip_wh.jpg')} style={styles.profileImage} />
        
        <View style={{backgroundColor:'white',alignItems:'center',width:wp('80%'),height:hp('50%'),borderRadius:15}}>
        <Text style={{fontSize:32,fontWeight:'bold',color:'darkgrey',marginBottom:hp('3%'),marginTop:hp("3%")}}>Login Here</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => {
              const emailRegex =
                /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
              if (!emailRegex.test(text)) {
                setMailcheck(true);
              } else {
                setMailcheck(false);
              }
              setEmail(text.trim());
            }}
            keyboardType="email-address"
          />
          {mailcheck ? (
            <Text style={{ color: 'red', maxWidth: '82%' }}>
              Email should follow abc@xyz.com this format
            </Text>
          ) : (
            <Text></Text>
          )}
          <View style={styles.sectionStyle}>
            <TextInput
              style={{ flex: 1, marginLeft: 9 }}
              placeholder="Confirm Password"
              onChangeText={(text) => {
                const passwordRegex =
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                if (!passwordRegex.test(text)) {
                  setPasscheck(true);
                } else {
                  setPasscheck(false);
                }
                setPassword(text.trim());
              }}
              secureTextEntry={!isPasswordVisible2}
            />
            <TouchableOpacity onPress={handleImageClick1}>
              {!isPasswordVisible2 ? (
                <Text style={{ marginRight: 9 }}>Show</Text>
              ) : (
                <Text style={{ marginRight: 9 }}>Hide</Text>
              )}
            </TouchableOpacity>
          </View>
          {passcheck ? (
            <Text style={{ color: 'red', marginTop: 0, maxWidth: '82%' }}>
              A password contains at least eight characters, including at
              least one number and includes both lower and uppercase letters
              and special characters
            </Text>
          ) : (
            <Text></Text>
          )}
        </View>
        <TouchableOpacity
          onPress={handleSignup}
          activeOpacity={0.7}
          style={{
            backgroundColor: "#FF4200",
            padding: 10,
            borderRadius: 10,
            width: "80%",
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center',fontSize:20, fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{ marginTop: 9, fontSize: 20, fontWeight: 'bold', color: '#047BD5' }}>
            New User? Signup
          </Text>
        </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
   
  );
};

const styles = StyleSheet.create({
  container: {
     flexGrow: 1,
     justifyContent: 'center',
     alignItems: 'center',
    backgroundColor:"#047BD5"
  },
  profileImage: {
     width: wp('60%'),
     height: hp('10%'),
     marginBottom:hp('8%')
     ,objectFit:'contain'
  },
  
  input: {
    height: 40,
   // width:'100%',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 15,
    backgroundColor: 'white',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    width: '80%',
    borderRadius: 5,
    marginTop: 15,
  },
});

export default Login1;
