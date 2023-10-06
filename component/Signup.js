import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


const image = { uri: `https://cdn.pixabay.com/photo/2020/02/06/01/52/frame-4822807_1280.png` };

const Signup= () => {
    const navigation=useNavigation();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  //const [profileImage, setProfileImage] = useState(null);
  //const [isDate, setIsDate] = useState(false);
  //const [da, setDa] = useState(new Date());
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const [firstnamecheck, setFirstnamecheck] = useState(false);
  const [lastnamecheck, setLastnamecheck] = useState(false);
  const [mailcheck, setMailcheck] = useState(false);
  const [passcheck, setPasscheck] = useState(false);
  const [confpasscheck, setConfPasscheck] = useState(false);
  const [matchpasscheck, setmatchPasscheck] = useState(false);
  const [dissignup, setDissignup] = useState(true);
  const [checkblur, setCheckBlur] = useState(true);
  const [lastblur, setLastBlur] = useState(true);
  const [emailblur, setEmailBlur] = useState(true);
  const [passblur, setPassBlur] = useState(true);


  

 

  const handleSignup = () => {
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      confpassword === "" 
     
    ) {
      Alert.alert("Please fill all the Fields");
      return;
    }

   

    var y = {
      firstname: firstname,
      lastname: lastname,
      email: email.toLowerCase(),
      password: password,
     // date: t11,
      //profileImage: profileImage,
    };

    const getname = async () => {
       
      const existingData = await AsyncStorage.getItem("signup_flip");

      const dataArray = JSON.parse(existingData) || [];
      const k = dataArray.filter((val) => {
        return val.email === email.toLowerCase();
      });

      if (k.length > 0) {
        Alert.alert("data already present");
        return;
      }

      dataArray.push(y);
      await AsyncStorage.setItem("signup_flip", JSON.stringify(dataArray));
      navigation.navigate("Login1");
    };
    getname();
  };

  const handleImageClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleImageClick1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
  };

  const handleEnterPress = () => {
    if (password !== confpassword) {
       Alert.alert("please match the passwords")       
    }
  };

  return (
    
    // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <View style={{ flexDirection: 'row' }}> */}
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:60,width:'100%',backgroundColor:'#047BD5',padding:5,marginTop:'-16%'}}>
    <TouchableOpacity onPress={()=>{
      navigation.goBack()
    }}>
    <Image
                source={require('../back.png')}
                style={{height: hp('4%'), width: wp('8%'),objectFit:'contain'}}
              />
              </TouchableOpacity>
            
</View>
           <Image source={require('../flip_wh.jpg')} style={styles.profileImage} />
       
        {/* </View> */}
     <View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:15}}>
     {/* <Image source={require('.././sign1.png')} style={{width:'40%',height:'10%',marginBottom:10}} /> */}
     <Text style={{fontSize:30,fontWeight:'bold',color:'darkgrey',marginBottom:hp('1%'),marginTop:hp("3%")}}>Register Now</Text>
        <View style={{margin:30}}>

          <TextInput
            style={styles.input}
            placeholder="First Name"
            spellCheck={false}
            autoCapitalize="none"
            value={firstname}
            onBlur={() => {
              const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
              let len = firstname.length;

              if (!nameRegex.test(firstname) || len > 30) {
                setFirstnamecheck(true);
              } else {
                setFirstnamecheck(false);
              }

              setCheckBlur(false);
            }}
            onChangeText={(text) => {
              if (text.endsWith(' ')) {
                setFirstname(text.trimEnd());
                return;
              }
              const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
              let len = text.length;

              if (!nameRegex.test(text) || len > 30) {
                setFirstnamecheck(true);
              } else {
                setFirstnamecheck(false);
              }

              setFirstname(text.trim());
            }}
          />
          {firstnamecheck ? (
            <Text style={{ color: "red", maxWidth: "82%" }}>
              Name should be a minimum of 2 characters, and it should not contain numbers, spaces, or special characters. Maximum character limit is 30.
            </Text>
          ) : (
            <Text></Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastname}
            autoCapitalize="none"
            spellCheck={false}
            onBlur={() => {
              const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
              let len = lastname.length;

              if (!nameRegex.test(lastname) || len > 30) {
                setLastnamecheck(true);
              } else {
                setLastnamecheck(false);
              }

              setLastBlur(false);
            }}
            onChangeText={(text) => {
              if (text.endsWith(' ')) {
                setLastname(text.trimEnd());
                return;
              }
              const nameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
              let len = text.length;

              if (!nameRegex.test(text) || len > 30) {
                setLastnamecheck(true);
              } else {
                setLastnamecheck(false);
              }

              setLastname(text.trim());
            }}
          />
          {lastnamecheck ? (
            <Text style={{ color: "red", maxWidth: "82%" }}>
              Name should be a minimum of 2 characters, and it should not contain numbers, spaces, or special characters. Maximum character limit is 30.
            </Text>
          ) : (
            <Text></Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            spellCheck={false}
            onBlur={() => {
              const emailRegex =
                /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

              if (!emailRegex.test(email)) {
                setMailcheck(true);
              } else {
                setMailcheck(false);
              }

              setEmailBlur(false);
            }}
            onChangeText={(text) => {
              if (text.endsWith(' ')) {
                setEmail(text.trimEnd());
                return;
              }
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
            <Text style={{ color: "red", maxWidth: "82%"}}>
              Email should follow the format abc@xyz.com.
            </Text>
          ) : (
            <Text></Text>
          )}
          <View style={styles.sectionStyle}>
            <TextInput
              style={{ flex: 1, marginLeft: 9 }}
              placeholder="Password"
              autoCapitalize="none"
              onBlur={() => {
                const passwordRegex =
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                if (!passwordRegex.test(password)) {
                  setPasscheck(true);
                } else {
                  setPasscheck(false);
                }

                setPassBlur(false);
              }}
              onChangeText={(text) => {
                if (text.endsWith(' ')) {
                  setPassword(text.trimEnd());
                  return;
                }
                const passwordRegex =
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                if (!passwordRegex.test(text)) {
                  setPasscheck(true);
                } else {
                  setPasscheck(false);
                }

                setPassword(text.trim());
              }}
              secureTextEntry={!isPasswordVisible}
            />

            <TouchableOpacity onPress={handleImageClick}>
              {!isPasswordVisible ? (
                <Text style={{ marginRight: 9, maxWidth: "82%" }}>Show</Text>
              ) : (
                <Text style={{ marginRight: 9 }}>Hide</Text>
              )}
            </TouchableOpacity>
          </View>
          {passcheck ? (
            <Text style={{ color: "red", marginTop: 0, maxWidth: "82%" }}>
              A password should contain at least eight characters, including at least one number, and include both lowercase and uppercase letters and special characters.
            </Text>
          ) : (
            <Text></Text>
          )}

          <View style={styles.sectionStyle}>
            <TextInput
              style={{ flex: 1, marginLeft: 9 }}
              placeholder="Confirm Password"
              autoCapitalize="none"
              
              onChangeText={(text) => {
                const passwordRegex =
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                if (!passwordRegex.test(text)) {
                  setConfPasscheck(true);
                } else {
                  setConfPasscheck(false);
                }
                
                
                setConfPassword(text);
              
              }}
              secureTextEntry={!isPasswordVisible1}
              onEndEditing={handleEnterPress}
              //onBlur={handleEnterPress}
            />

            <TouchableOpacity onPress={handleImageClick1}>
              {!isPasswordVisible1 ? (
                <Text style={{ marginRight: 9 }}>Show</Text>
              ) : (
                <Text style={{ marginRight: 9 }}>Hide</Text>
              )}
            </TouchableOpacity>
          </View>
          {confpasscheck ? (
            <Text style={{ color: "red", marginTop: 0, maxWidth: "82%" }}>
            A password should contain at least eight characters, including at least one number, and include both lowercase and uppercase letters and special characters.
          </Text>
          ) :  <Text></Text>}
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
          <Text style={{ color: "white", textAlign: "center" }}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login1")}
        >
          <Text style={{ marginTop: 9, color: "blue", fontSize: 20,marginBottom:20}}>
            Go to login page
          </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    backgroundColor:"#047BD5",
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  profileImage: {
    width: '50%',
    height: hp('10%'),
    marginBottom:hp('8%'),
    objectFit:'contain'
  },
  input: {
    height: hp('6%'),
    
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingLeft: 10,
    color: "black",
    backgroundColor: "white",
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    height: hp('6%'),
    width: "80%",
    borderRadius: 5,
  },
});

export default Signup;
